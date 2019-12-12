var createProxyObj, execute;

import {
	getSiteContext
} from '../src/functions'
import Exception from '../src/exception'
import publicContext from '../src/publicContext'
import Path from 'path'
import Os from 'os'

createProxyObj = function(ipc) {
	var createFunc, handler, obj;
	// return proxy
	createFunc = function(target, name) {
		if (name === "toJSON") {
			return function() {
				return {
					proxied: true
				};
			};
		}
		return async function() {
			return (await ipc.send({
				action: 'call',
				name: 'mod',
				args: Array.prototype.slice.call(arguments, 0, arguments.length),
				method: name
			}));
		};
	};
	handler = {
		set: function() {},
		// nothing
		get: function(target, name) {
			if (!target[name]) {
				if (typeof Symbol !== "undefined" && name instanceof Symbol) {
					return;
				}
				if (name !== "then" && name !== "catch" && name !== "inspect") {
					name = name.toString();
					if (name.startsWith("Symbol")) {
						return;
					}
					target[name] = createFunc(target, name);
				}
			}
			return target[name];
		}
	};
	obj = {};
	return new Proxy(obj, handler);
};

export var kowixInvoke = async function(local, body) {
	var e, info, ipc, ref, server, sitectx;
	server = local.context.server;
	if (!((ref = server.workers) != null ? ref.length : void 0)) {
		// comunicate in IPC
		info = (await server.channel.send({
			action: 'import',
			args: [__filename],
			params: body,
			name: __filename
		}));
		if (info.create) {
			try {
				ipc = server.createIPC("def");
				await ipc.connect();
				await ipc.send({
					action: 'import',
					args: [__filename],
					params: {
						requireinfo: body
					}
				});
			} catch (error) {
				e = error;
				ipc.close();
				throw e;
			}
			return createProxyObj(ipc);
		} else {
			sitectx = (await local.getSiteContext(body.ctxSite));
			return (await sitectx.userFunction(body.method).invoke({}));
		}
	} else {
		return Exception.create("This functions not run in master process").raise();
	}
};

execute = async function(server, body) {
	var i, len, ref, ref1, w;
	if (server.workers) {
		if (body.onmaster) {
			// server on master
			body.client = true;
			return;
		}
		ref = server.workers;
		for (i = 0, len = ref.length; i < len; i++) {
			w = ref[i];
			if (!w.finished) {
				if (((ref1 = w.env.MEMSHARING) != null ? ref1.toString() : void 0) === '1') {
					break;
				}
			}
			w = null;
		}
		if (server.workers.length === 1) {
			return {
				create: false
			};
		}
		if (Os.platform() === "win32") {
			// cluster mode no support named pipes, for that reason execute on master
			body.client = true;
			return;
		}
		if (!(w != null ? w.IPC : void 0)) {
			throw Exception.create("No worker available for memsharing").putCode("NO_WORKER");
		}
		return (await w.IPC.send({
			action: 'import',
			args: [__filename],
			params: {
				client: true
			},
			name: __filename
		}));
	}
};

export var ipcInvoke = async function(state, socket, body, IPC) {
	var ctx, env, newserver, nsite, res, server, tsite;
	res = null;
	server = IPC.server;
	if (body != null ? body.requireinfo : void 0) {
		ctx = server.getContext("kowix");
		env = {
			request: null,
			response: null,
			server: server
		};
		tsite = (await getSiteContext(env, ctx));
		nsite = (await tsite.getSiteContext(body.requireinfo.ctxSite));
		state["mod"] = (await nsite.userFunction(body.requireinfo.method).invoke({}));
		return true;
	} else if (!(body != null ? body.client : void 0)) {
		body = body != null ? body : {};
		res = (await execute(server, body));
	}
	if (body != null ? body.client : void 0) {
		if (publicContext.IPCDef) {
			return {
				create: true
			};
		}
		// generate new IPC Channel
		publicContext.IPCDef = newserver = server.createIPC("def");
		await newserver.listen();
		return {
			create: true
		};
	}
	return res;
};

// enable dynamic hot reloading
export var kawixDynamic = {
	time: 40000
};
