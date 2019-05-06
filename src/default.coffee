import {invoke as dinvoke} from './functions'

export invoke= (env,ctx)->
	env.params= env.params or {}
	env.params.file= "api.default"
	return dinvoke(env,ctx)

export kawixDynamic=
	time: 15000
