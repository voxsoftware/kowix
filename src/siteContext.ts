var Handler, SiteContext;

import DynamicMethod from './dynamicMethod';
import Exception from './exception';
import UserContext from './userContext';
import Database from './database';
import fs from './lib/_fs';
import uniqid from './lib/_uniqid';
import Os from 'os';
import Path from 'path';
import publicContext from './publicContext';

Handler = class Handler {
	get(target, prop) {
		var ref;
		//console.info "GET", prop, target._ctx.site.id, target._getPublicContext()._g?[prop]
		if (target[prop] === void 0) {
			return (ref = target._getPublicContext()._g) != null ? ref[prop] : void 0;
		}
		return target[prop];
	}

};

SiteContext = (function() {
	var caching;

	class SiteContext {
		constructor(_ctx, _env) {
			this._ctx = _ctx;
			this._env = _env;
			this._loadGlobals();
		}

		_loadGlobals() {
			var id, pcont, ref, results, val;
			pcont = this._getPublicContext();
			if (pcont._g) {
				ref = pcont._g;
				results = [];
				for (id in ref) {
					val = ref[id];
					results.push(this[id] = val);
				}
				return results;
			}
		}

		_free() {
			var c, id;
			id = this._ctx.site.id;
			c = caching[id];
			if (c && c.length < 100) {
				return c.push(this);
			}
		}

		static reuse(ctx, env, reusable) {
			var c, cu, id;
			if (!reusable) {
				//return new Proxy(new SiteContext(ctx,env), new Handler()) if not reusable
				return new SiteContext(ctx, env);
			}
			id = ctx.site.id;
			c = caching[id] || (caching[id] = []);
			if (c.length) {
				cu = c.shift();
				cu._ctx = ctx;
				cu._env = env;
				cu._loadGlobals();
				return cu;
			}
			return new SiteContext(ctx, env);
		}

		//return new Proxy(new SiteContext(ctx,env), new Handler())
		addGlobal(name, val) {
			var pcontext;
			//console.info("Name #{name}, site: #{@_ctx.site.id}")
			pcontext = this._getPublicContext();
			if (!pcontext._g) {
				pcontext._g = {};
			}
			pcontext._g[name] = val;
			this[name] = val;
			return val;
		}

		userFunction(name) {
			// dynamic method
			return DynamicMethod.get(name, this);
		}

		UserFunction(name) {
			// dynamic method
			return DynamicMethod.get(name, this);
		}

		getSite() {
			return this._ctx.site;
		}

		_getIdSite() {
			return this._ctx.site.id;
		}

		_getContext() {
			return this._env;
		}

		_getUniqid() {
			return uniqid;
		}

		_getException() {
			return Exception;
		}

		_getConstants() {
			return this._ctx.constants;
		}

		_getUserContext() {
			if (!this._uctx) {
				this._uctx = new UserContext(this);
			}
			return this._uctx;
		}

		_getDatabase() {
			if (!this._db) {
				this._db = new Database(this);
			}
			return this._db;
		}

		_getPublicContext() {
			var ref;
			return (ref = publicContext[this._ctx.site.id]) != null ? ref : (publicContext[this._ctx.site.id] = {});
		}

		getSitesConfig() {
			var configs, i, len, ref, route, site, sites;
			sites = this._ctx.config.sites;
			configs = [];
			for (i = 0, len = sites.length; i < len; i++) {
				site = sites[i];
				route = (ref = site.backward) != null ? ref.kowixFunctions : void 0;
				if (route) {
					configs.push(site);
				}
			}
			return configs;
		}

		async getSiteContext(id) {
			var ctx, file, i, len, ref, route, site, site2, sites, value;
			this._sitec = this._sitec || {};
			if (!this._sitec[id]) {
				// impersonate as other site
				sites = this._ctx.config.sites;
				for (i = 0, len = sites.length; i < len; i++) {
					site = sites[i];
					if (site.id === id) {
						break;
					}
					site = null;
				}
				if (!site) {
					Exception.create(`Failed getting site context ${id}`).putCode("FAILED_CONTEXT").raise();
				}
				route = (ref = site.backward) != null ? ref.kowixFunctions : void 0;
				if (!route) {
					Exception.create(`Failed getting site context ${id}`).putCode("NOT_BACKWARD_COMPATIBILITY").raise();
				}
				file = this._ctx.server.config.resolvePath(route.file, site);
				ctx = this._ctx.server.getContext(site);
				site2 = (await import(file));
				value = (await site2.getSiteContext(this._env, ctx));
				this._sitec[id] = value;
			}
			return this._sitec[id];
		}

		_deferred() {
			var def;
			def = {};
			def.promise = new Promise(function(a, b) {
				def.resolve = a;
				return def.reject = b;
			});
			return def;
		}

		_checkFileExists(file) {
			var def;
			def = this._deferred();
			fs.access(file, fs.F_OK, function(err) {
				if (err) {
					def.resolve(false);
				}
				return def.resolve(true);
			});
			return def.promise;
		}

		getHomeDir() {
			var folder, kowi;
			if (!this._folder) {
				kowi = Path.join(Os.homedir(), ".kowi");
				folder = Path.join(kowi, this._getIdSite());
				this._folder = folder;
			}
			return this._folder;
		}

		async _loadHomeDir() {
			var folder, kowi, kowi_old, type;
			kowi = Path.join(Os.homedir(), ".kowi");
			kowi_old = Path.join(Os.homedir(), "kowi");
			if (!(await this._checkFileExists(kowi))) {
				if ((await this._checkFileExists(kowi_old))) {
					type = Os.platform() === "win32" ? "junction" : "dir";
					await fs.symlinkAsync(kowi_old, kowi, type);
				} else {
					await fs.mkdirAsync(kowi);
				}
			}
			folder = Path.join(kowi, this._getIdSite());
			if (!(await this._checkFileExists(folder))) {
				await fs.mkdirAsync(folder);
			}
			this._folder = folder;
			return folder;
		}

	};

	caching = {};

	Object.defineProperty(SiteContext.prototype, "IdSite", {
		get: SiteContext.prototype._getIdSite
	});

	Object.defineProperty(SiteContext.prototype, "idSite", {
		get: SiteContext.prototype._getIdSite
	});

	Object.defineProperty(SiteContext.prototype, "context", {
		get: SiteContext.prototype._getContext
	});

	Object.defineProperty(SiteContext.prototype, "uniqid", {
		get: SiteContext.prototype._getUniqid
	});

	Object.defineProperty(SiteContext.prototype, "Exception", {
		get: SiteContext.prototype._getException
	});

	Object.defineProperty(SiteContext.prototype, "constants", {
		get: SiteContext.prototype._getConstants
	});

	Object.defineProperty(SiteContext.prototype, "UserContext", {
		get: SiteContext.prototype._getUserContext
	});

	Object.defineProperty(SiteContext.prototype, "Database", {
		get: SiteContext.prototype._getDatabase
	});

	Object.defineProperty(SiteContext.prototype, "publicContext", {
		get: SiteContext.prototype._getPublicContext
	});

	return SiteContext;

}).call(this);

export default SiteContext;

export var kawixDynamic = {
	time: 15000
};
