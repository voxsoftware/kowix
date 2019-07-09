import DynamicMethod from './dynamicMethod'
import Exception from './exception'
import UserContext from './userContext'
import Database from './database'
import fs from './lib/_fs'
import uniqid from './lib/_uniqid'
import Os from 'os'
import Path from 'path'
import publicContext from './publicContext'



class Handler
	get: (target, prop)->
		#console.info "GET", prop, target._ctx.site.id, target._getPublicContext()._g?[prop]
		if target[prop] is undefined
			return target._getPublicContext()._g?[prop]
		return target[prop]



class SiteContext

	caching={}

	constructor: (@_ctx,@_env)->
		@_loadGlobals()

	_loadGlobals: ()->
		pcont=  @_getPublicContext()
		if pcont._g
			for id, val of pcont._g
				@[id]= val



	_free: ()->
		id= @_ctx.site.id
		c= caching[id]
		if c and c.length < 100
			c.push @




	@reuse: (ctx, env, reusable)->
		#return new Proxy(new SiteContext(ctx,env), new Handler()) if not reusable
		return new SiteContext(ctx,env) if not reusable

		id= ctx.site.id
		c= caching[id] || (caching[id]=[])
		if c.length

			cu= c.shift()
			cu._ctx= ctx
			cu._env= env
			cu._loadGlobals()
			return cu

		return new SiteContext(ctx, env)
		#return new Proxy(new SiteContext(ctx,env), new Handler())


	addGlobal:(name,val)->
		#console.info("Name #{name}, site: #{@_ctx.site.id}")
		pcontext= @_getPublicContext()
		if not pcontext._g
			pcontext._g= {}
		pcontext._g[name]= val

		this[name]= val
		return val

	userFunction: (name)->
		# dynamic method
		return DynamicMethod.get(name, this)

	UserFunction: (name)->
		# dynamic method
		return DynamicMethod.get(name, this)

	getSite: ()->
		return this._ctx.site


	_getIdSite: ()->
		return this._ctx.site.id

	Object.defineProperty SiteContext::, "IdSite",
		get: SiteContext::_getIdSite
	Object.defineProperty SiteContext::, "idSite",
		get: SiteContext::_getIdSite

	_getContext: ()->
		return this._env

	Object.defineProperty SiteContext::, "context",
		get: SiteContext::_getContext

	_getUniqid: ()->
		return uniqid

	Object.defineProperty SiteContext::, "uniqid",
		get: SiteContext::_getUniqid

	_getException: ()->
		return Exception

	Object.defineProperty SiteContext::, "Exception",
		get: SiteContext::_getException


	_getConstants: ()->
		return this._ctx.constants

	Object.defineProperty SiteContext::, "constants",
		get: SiteContext::_getConstants


	
	_getUserContext: ()->
		@_uctx= new UserContext @ if not @_uctx
		return @_uctx

	Object.defineProperty SiteContext::, "UserContext",
		get: SiteContext::_getUserContext

	_getDatabase: ()->
		@_db= new Database @ if not @_db
		return @_db

	Object.defineProperty SiteContext::, "Database",
		get: SiteContext::_getDatabase

	_getPublicContext: ()->
		return publicContext[this._ctx.site.id] ? (publicContext[this._ctx.site.id] = {})

	Object.defineProperty SiteContext::, "publicContext",
		get: SiteContext::_getPublicContext

	getSitesConfig: ()->
		sites= @_ctx.config.sites
		configs= []
		for site in sites
			route= site.backward?.kowixFunctions
			configs.push(site) if route
		return configs

	getSiteContext: (id)->

		@_sitec= @_sitec or {}
		if not @_sitec[id]


			# impersonate as other site
			sites= @_ctx.config.sites
			for site in sites
				break if site.id is id
				site= null

			if not site
				Exception.create("Failed getting site context #{id}").putCode("FAILED_CONTEXT").raise()

			route= site.backward?.kowixFunctions
			if not route
				Exception.create("Failed getting site context #{id}").putCode("NOT_BACKWARD_COMPATIBILITY").raise()

			file= @_ctx.server.config.resolvePath(route.file, site)
			ctx= @_ctx.server.getContext(site)
			site2= await `import(file)`
			value= await site2.getSiteContext(@_env, ctx)
			@_sitec[id]= value

		return @_sitec[id]

	_deferred: ()->
		def={}
		def.promise= new Promise (a,b)->
			def.resolve= a
			def.reject= b
		def

	_checkFileExists: (file)->
		def= @_deferred()
		fs.access file, fs.F_OK, (err)->
			def.resolve no if err
			def.resolve yes
		def.promise


	getHomeDir:()->
		if not @_folder
			kowi= Path.join(Os.homedir(), ".kowi")
			folder= Path.join(kowi, @_getIdSite())
			@_folder= folder

		@_folder

	_loadHomeDir: ()->
		kowi	= Path.join(Os.homedir(), ".kowi")
		kowi_old= Path.join(Os.homedir(), "kowi")
		if not await @_checkFileExists(kowi)
			if await @_checkFileExists(kowi_old)
				type= if Os.platform() is "win32" then "junction" else "dir"
				await fs.symlinkAsync(kowi_old, kowi, type)
			else
				await fs.mkdirAsync(kowi)

		folder= Path.join(kowi, @_getIdSite())
		if not await @_checkFileExists(folder)
			await fs.mkdirAsync(folder)

		@_folder= folder
		return folder



export default SiteContext
export kawixDynamic=
	time: 15000
