var execute;

export var kowixInvoke = async function(local, body) {
	var ref, server;
	server = local.context.server;
	if (!((ref = server.workers) != null ? ref.length : void 0)) {
		// comunicate in IPC
		return (await server.channel.send({
			action: 'import',
			args: [__filename, body],
			name: __filename
		}));
	} else {
		return (await execute(server, body));
	}
};

execute = function(server, body) {
	var i, len, ref, w, ws;
	ws = [];
	if (server.workers) {
		ref = server.workers;
		for (i = 0, len = ref.length; i < len; i++) {
			w = ref[i];
			if (!w.finished) {
				ws.push({
					info: w.info,
					purpose: w.purpose,
					pid: w.pid,
					env: w.env
				});
			}
		}
		return ws;
	}
};

export var ipcInvoke = function(state, socket, body, IPC) {
	var server;
	server = IPC.server;
	return execute(server, body);
};

// enable dynamic hot reloading
export var kawixDynamic = {
	time: 10000
};
