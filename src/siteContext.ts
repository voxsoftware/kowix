var Handler

import DynamicMethod from './dynamicMethod';
import Exception from './exception';
import UserContext from './userContext';
import Database from './database';
import fs from './lib/_fs';
import uniqid from './lib/_uniqid';
import Os from 'os';
import Path from 'path';
import publicContext from './publicContext';
import * as Types from './typing'
import * as DhsTypes from '/virtual/@kawix/dhs/src/typings'
import * as async from '/virtual/@kawix/std/util/async'


Handler = class Handler {
	get(target, prop) {
		var ref;
		if (target[prop] === void 0) {
			return (ref = target._getPublicContext()._g) != null ? ref[prop] : void 0;
		}
		return target[prop];
	}

}

var caching = {}
export class SiteContext implements Types.SiteContext{

	private _ctx: any
	private _env: DhsTypes.Request
	private _folder: string
	private _uctx
	private _db 
	private _sitec: any 
	__bodyparser: DhsTypes.Callable

	constructor(_ctx, _env) {
		this._ctx = _ctx
		this._env = _env
		
		this._loadGlobals()
	}


	private _loadGlobals() {
		var id, pcont, ref, results, val;
		pcont = this.publicContext
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

	private _free() {
		var c, id;
		id = this._ctx.site.id;
		c = caching[id];
		if (c && c.length < 100) {
			return c.push(this);
		}
	}

	static reuse(ctx, env, reusable?: boolean) : SiteContext {
		var c, cu, id;
		if (!reusable) {
			return new SiteContext(ctx, env)
		}
		id = ctx.site.id
		c = caching[id] || (caching[id] = []);
		if (c.length) {
			cu = c.shift();
			cu._ctx = ctx;
			cu._env = env;
			cu._loadGlobals();
			return cu;
		}
		return new SiteContext(ctx, env)
	}

	addGlobal(name: string, val: string) : any{
		var pcontext
		pcontext = this.publicContext
		if (!pcontext._g) {
			pcontext._g = {}
		}
		pcontext._g[name] = val
		this[name] = val
		return val
	}


	userFunction(name): Types.UserFunction {
		return DynamicMethod.get(name, this)
	}

	invokeMethod(name, body): any {
		return DynamicMethod.get(name, this).invoke(body)
	}

	UserFunction(name) : Types.UserFunction {
		// dynamic method
		return DynamicMethod.get(name, this);
	}

	getSite(): DhsTypes.Site {
		return this._ctx.site;
	}

	get IdSite(): string {
		return this._ctx.site.id;
	}

	get idSite() : string  {
		return this._ctx.site.id;
	}

	get context(): DhsTypes.Request {
		return this._env;
	}

	uniqid(): string {
		return uniqid()
	}

	get Exception(){
		return Exception
	}

	get constants() {
		return this._ctx.constants
	}

	get UserContext(): Types.UserContext {
		if (!this._uctx) {
			this._uctx = new UserContext(this);
		}
		return this._uctx;
	}

	get Database(): Types.Database {
		if (!this._db) {
			this._db = new Database(this);
		}
		return this._db;
	}

	get publicContext() {
		var ref
		return (ref = publicContext[this._ctx.site.id]) != null ? ref : (publicContext[this._ctx.site.id] = {});
	}

	getSitesConfig() {
		var configs, i, len, ref, route, site, sites;
		sites = this._ctx.config.sites;
		configs = [];
		for (i = 0, len = sites.length; i < len; i++) {
			site = sites[i];
			
			//route = (ref = site.backward) != null ? ref.kowixFunctions : void 0;
			//if (route) {
				configs.push(site);
			//}
		}
		return configs
	}

	async getSiteContext(id: string, timeout: number = 0): Promise<Types.SiteContext> {
		var ctx, file, i, len, ref, route, site, site2, sites, value, started
		this._sitec = this._sitec || {};
		if (!this._sitec[id]) {
			// impersonate as other site
			started = Date.now()
			while(true){
				sites = this._ctx.config.sites;
				for (i = 0, len = sites.length; i < len; i++) {
					site = sites[i];
					if (site.id === id) {
						break;
					}
					site = null;
				}
				if (!site) {
					if(timeout == 0 || (Date.now() - started > timeout))
						Exception.create(`Failed getting site context ${id}`).putCode("FAILED_CONTEXT").raise();
					else 
						await async.sleep(10)
				}else{
					break 
				}
			}

			route = (ref = site.backward) != null ? ref.kowixFunctions : void 0;
			if(!route){
				route = {
					file: Path.join(__dirname,"functions")
				}
			}
			/*
			if (!route) {
				Exception.create(`Failed getting site context ${id}`).putCode("NOT_BACKWARD_COMPATIBILITY").raise();
			}*/

			file = this._ctx.server.config.resolvePath(route.file, site);
			ctx = this._ctx.server.getContext(site);
			site2 = (await import(file));
			value = (await site2.getSiteContext(this._env, ctx));
			this._sitec[id] = value;
		}	
		return this._sitec[id];
	}
	

	_checkFileExists(file: string): Promise<boolean> {
		return fs.existsAsync(file)
	}

	getHomeDir(): string {
		var folder, kowi;
		if (!this._folder) {
			kowi = Path.join(Os.homedir(), ".kowi");
			folder = Path.join(kowi, this.idSite);
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
		folder = Path.join(kowi, this.idSite);
		if (!(await this._checkFileExists(folder))) {
			await fs.mkdirAsync(folder);
		}
		this._folder = folder;
		return folder;
	}
}


export default SiteContext
export var kawixDynamic = {
	time: 15000
};
