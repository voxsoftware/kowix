## Kodhe copyright 2019©
#  Middleware for body parser
import bodyParser from 'npm://body-parser@1.18.3'
import Util from './util'


Mod=
	invoke: (env,ctx)->
		state= Util.state()
		if not state.jsonParser
			state.jsonParser= bodyParser.json
				limit: '5mb'
		if not state.urlencodedParser
			state.urlencodedParser= bodyParser.urlencoded
				limit: '5mb'

		def= Util.deferred()
		env.request.once "error", def.reject
		state.jsonParser(env.request,env.response,def.resolve)
		await def.promise
		if not env.request.body or (Object.keys(env.request.body).length is 0)
			def= Util.deferred()
			state.urlencodedParser(env.request,env.response,def.resolve )
			await def.promise

		# union into env.body
		env.body= Object.assign {}, env.request.query ? {}, env.request.body ? {}

export invoke= Mod.invoke
export kawixDynamic=
	time: 15000
