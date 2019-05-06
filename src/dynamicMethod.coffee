import Path from 'path'

class DynamicMethod

	caching= {}

	constructor: (name, allctx)->
		@_ctx= allctx
		@name= name
		@time= Date.now()


	@get: (name, ctx)->
		file= ctx._ctx.server.config.resolvePath("./functions/#{name}", ctx._ctx.site)

		# save a cache
		c= caching[file]
		if c and (Date.now() - c.time < 15000)
			c._ctx= ctx
			return c
		else
			c= new DynamicMethod(name,ctx)
			c.file= file
			caching[file]= c
			return c


	isAvailable: ()->
		if @_available is undefined
			@_available= no
			try
				await @load()
				@_available= yes
		return @_available

	load: ()->

		if not @file
			file= this._ctx._ctx.server.config.resolvePath("./functions/#{@name}", this._ctx._ctx.site)
			@file= file

		@_mod= await `import(this.file)`
		if not @_mod.kawixDynamic
			@_mod.kawixDynamic=
				time: 15000

		@_mod

	execute: (body)->
		local= @_ctx

		
		if typeof @_mod is "function"
			func= @_mod
		else if typeof @_mod.default is "function"
			func= @_mod.default
		else if typeof @_mod.kowixInvoke is "function"
			mod= @_mod
			func= (local)->
				return (body)->
					return mod.kowixInvoke(local, body)
		else
			return @_mod

		resp= func(local, body)
		if typeof resp is "function"
			return await resp(body)

	invoke: (body)->
		local= @_ctx

		if not @_mod
			await @load()
		return await @execute body


export kawixDynamic=
	time: 30000
export default DynamicMethod
