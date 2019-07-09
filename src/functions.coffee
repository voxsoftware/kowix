import SiteContext from './siteContext'
import Registry from './lib/_registry'
import QueryString from 'querystring'
import Url from 'url'
import {invoke as bodyParser} from './lib/body.parser'
constantsc= {}
#constants= null
parsers= null


deferred= ()->
	def={}
	def.promise= new Promise (a,b)->
		def.resolve= a
		def.reject= b
	def


export getSiteContext= (env, ctx, reusable = no)->
	# load context
	local= SiteContext.reuse(ctx, env, reusable)
	local.__bodyparser= bodyParser

	constants= constantsc[ctx.site.id]
	if not constants?._time or (Date.now() - constants._time > 10000)

		await local._loadHomeDir()

		value= await local.userFunction("vars").invoke({})
		constants= value.constants or value

		constants._time= Date.now()
		constantsc[ctx.site.id] = constants



	ctx.constants=  constants
	
	if not global.core
		# a backward-compatibility
		await `import(__dirname + '/core-backward/mod')`



	if constants.preload and (not local.publicContext.__loaded)

		while local.publicContext.__loading
			await core.VW.Task.sleep 4
		try
			local.publicContext.__loading= yes
			await local.userFunction(constants.preload).invoke()
			local.publicContext.__loaded= yes
		catch e
			throw e
		finally
			local.publicContext.__loading= no


	return local



export kawixDynamic=
	time: 15000

export invoke= (env, ctx)->



	local= await getSiteContext(env, ctx, yes)
	config = ctx.server.config.readCached() 
	nginx_enabled = process.env.DHS_NGINX_ENABLED  ? config.nginx

	if nginx_enabled
		c1 = yes 
		if (ctx.site.webserver ? ctx.site.nginx) or config.nginx 

			kowix= await local.getSiteContext("kowix")
			if not (ctx.site.webserver ? ctx.site.nginx) 
				c1 = (not kowix.publicContext.__nginx)
			else 
				c1 = (not local.publicContext.__nginx)


			if c1 
				while local.publicContext.__nginx_
					await core.VW.Task.sleep 4
				local.publicContext.__nginx_ = yes
				try
					if not kowix.publicContext.nginx
						Nginx= await kowix.userFunction("nginx/config").invoke()
						nginx= kowix.publicContext.nginx = new Nginx()
					else
						nginx= kowix.publicContext.nginx

					if (ctx.site.webserver ? ctx.site.nginx) 
						await nginx.addSite(ctx.site)
					else 
						await nginx.writeDefaultConfig()
					local.publicContext.__nginx= yes
				catch e
					throw e
				finally
					local.publicContext.__nginx_ = no



	try
		name= env.params?.file or env.params?["*"]
		name= name.replace /\@/g,'/'




		constants= local.constants
		if constants.bodyparser isnt false and env?.request
			if env.request?.method.toLowerCase() isnt "get"
				await bodyParser(env,ctx)
			body= env.body or env.request?.query

			if body and (Object.keys(body).length > 0) and constants.bodyAnalyze
				body= await local.userFunction(constants.bodyAnalyze).invoke(body)


		try

			result= await local.userFunction(name).invoke(body)
			result= null if result is undefined
			if result and constants.bodyTransform
				result= await local.userFunction(constants.bodyTransform).invoke(result)


			if env.type is "upgrade"
				# in upgrade don't execute normally 
				return 

			if env.reply and env.response
				env.reply.send result  if not env.response.finished
		catch e
			if (not env.response) or env.response.finished
				console.error e
			else
				env.reply.code(500).send
					error:
						code: e.code
						message: e.message or e.toString()
						stack: e.stack
	catch e
		throw e
	finally
		local._free()
