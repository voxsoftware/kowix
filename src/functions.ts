var constantsc, deferred, parsers;

import SiteContext from './siteContext'
import Registry from './lib/_registry'
import QueryString from 'querystring'
import Url from 'url'

import {
	invoke as bodyParser
} from './lib/body.parser'

constantsc = {}
parsers = null

deferred = function() {
	var def;
	def = {};
	def.promise = new Promise(function(a, b) {
		def.resolve = a;
		return def.reject = b;
	});
	return def;
};

declare var core
export var getSiteContext = async function(env, ctx, reusable = false) {
	var constants, e, local, value;
	// load context
	local = SiteContext.reuse(ctx, env, reusable);
	local.__bodyparser = bodyParser;
	constants = constantsc[ctx.site.id];
	if (!(constants != null ? constants._time : void 0) || (Date.now() - constants._time > 10000)) {
		await local._loadHomeDir();
		value = (await local.userFunction("vars").invoke({}));
		constants = value.constants || value;
		constants._time = Date.now();
		constantsc[ctx.site.id] = constants;
	}
	ctx.constants = constants;
	if (typeof core === 'undefined') {
		// a backward-compatibility
		await import(__dirname + '/core-backward/mod');
	}
	if (constants.preload && (!local.publicContext.__loaded)) {
		while (local.publicContext.__loading) {
			await core.VW.Task.sleep(4);
		}
		try {
			local.publicContext.__loading = true;
			await local.userFunction(constants.preload).invoke();
			local.publicContext.__loaded = true;
		} catch (error) {
			e = error;
			throw e;
		} finally {
			local.publicContext.__loading = false;
		}
	}
	return local;
};

export var kawixDynamic = {
	time: 15000
};

export var invoke = async function(env, ctx) {
	var Nginx, body, c1, config, constants, e, kowix, local, name, nginx, nginx_enabled, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, result;
	local = (await getSiteContext(env, ctx, true));
	config = ctx.server.config.readCached();
	nginx_enabled = (ref = process.env.DHS_NGINX_ENABLED) != null ? ref : config.nginx;
	if (nginx_enabled) {
		c1 = true;
		if (((ref1 = ctx.site.webserver) != null ? ref1 : ctx.site.nginx) || config.nginx) {
			kowix = (await local.getSiteContext("kowix"));
			if (!((ref2 = ctx.site.webserver) != null ? ref2 : ctx.site.nginx)) {
				c1 = !kowix.publicContext.__nginx;
			} else {
				c1 = !local.publicContext.__nginx;
			}
			if (c1) {
				while (local.publicContext.__nginx_) {
					await core.VW.Task.sleep(4);
				}
				local.publicContext.__nginx_ = true;
				try {
					if (!kowix.publicContext.nginx) {
						Nginx = (await kowix.userFunction("nginx/config").invoke());
						nginx = kowix.publicContext.nginx = new Nginx();
					} else {
						nginx = kowix.publicContext.nginx;
					}
					if ((ref3 = ctx.site.webserver) != null ? ref3 : ctx.site.nginx) {
						await nginx.addSite(ctx.site);
					} else {
						await nginx.writeDefaultConfig();
					}
					local.publicContext.__nginx = true;
				} catch (error) {
					e = error;
					throw e;
				} finally {
					local.publicContext.__nginx_ = false;
				}
			}
		}
	}
	try {
		name = ((ref4 = env.params) != null ? ref4.file : void 0) || ((ref5 = env.params) != null ? ref5["*"] : void 0);
		name = name.replace(/\@/g, '/');
		constants = local.constants;
		if (constants.bodyparser !== false && (env != null ? env.request : void 0)) {
			if (((ref6 = env.request) != null ? ref6.method.toLowerCase() : void 0) !== "get") {
				await bodyParser(env, ctx);
			}
			body = env.body || ((ref7 = env.request) != null ? ref7.query : void 0);
			if (body && (Object.keys(body).length > 0) && constants.bodyAnalyze) {
				body = (await local.userFunction(constants.bodyAnalyze).invoke(body));
			}
		}
		try {
			result = (await local.userFunction(name).invoke(body));
			if (result === void 0) {
				result = null;
			}
			if (result && constants.bodyTransform) {
				result = (await local.userFunction(constants.bodyTransform).invoke(result));
			}
			if (env.type === "upgrade") {
				return;
			}
			// in upgrade don't execute normally 
			if (env.reply && env.response) {
				if (!env.response.finished) {
					return env.reply.send(result);
				}
			}
		} catch (error) {
			e = error;
			if ((!env.response) || env.response.finished) {
				return console.error(e);
			} else {
				return env.reply.code(500).send({
					error: {
						code: e.code,
						message: e.message || e.toString(),
						stack: e.stack
					}
				});
			}
		}
	} catch (error) {
		e = error;
		throw e;
	} finally {
		local._free();
	}
};
