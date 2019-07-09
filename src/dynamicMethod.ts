var DynamicMethod;

import Path from 'path';

DynamicMethod = (function () {
	var caching;

	class DynamicMethod {
		private _ctx:any 
		private name: string 
		private time: number
		private _available: any
		private _mod: any
		private file:string 
		
		constructor(name, allctx) {
			this._ctx = allctx;
			this.name = name;
			this.time = Date.now();
		}

		static get(name, ctx) {
			var c, file;
			file = ctx._ctx.server.config.resolvePath(`./functions/${name}`, ctx._ctx.site);
			// save a cache
			c = caching[file];
			if (c && (Date.now() - c.time < 15000)) {
				c._ctx = ctx;
				return c;
			} else {
				c = new DynamicMethod(name, ctx);
				c.file = file;
				caching[file] = c;
				return c;
			}
		}

		async isAvailable() {
			if (this._available === void 0) {
				this._available = false;
				try {
					await this.load();
					this._available = true;
				} catch (error) { }
			}
			return this._available;
		}

		async load() {
			var file;
			if (!this.file) {
				file = this._ctx._ctx.server.config.resolvePath(`./functions/${this.name}`, this._ctx._ctx.site);
				this.file = file;
			}
			this._mod = (await import(this.file));
			if (!this._mod.kawixDynamic) {
				this._mod.kawixDynamic = {
					time: 15000
				};
			}
			return this._mod;
		}

		async execute(body) {
			var func, local, mod, resp;
			local = this._ctx;
			if (typeof this._mod === "function") {
				func = this._mod;
			} else if (typeof this._mod.default === "function") {
				func = this._mod.default;
			} else if (typeof this._mod.kowixInvoke === "function") {
				mod = this._mod;
				func = function (local) {
					return function (body) {
						return mod.kowixInvoke(local, body);
					};
				};
			} else {
				return this._mod;
			}
			resp = func(local, body);
			if (typeof resp === "function") {
				return (await resp(body));
			}
		}

		async invoke(body) {
			var local;
			local = this._ctx;
			if (!this._mod) {
				await this.load();
			}
			return (await this.execute(body));
		}

	};

	caching = {};

	return DynamicMethod;

}).call(this);

export var kawixDynamic = {
	time: 30000
};

export default DynamicMethod;
