import {
	invoke as dinvoke
} from './functions'

export var invoke = function (env, ctx) {
	env.params = env.params || {}
	env.params.file = "api.default"
	return dinvoke(env, ctx)
}

export var kawixDynamic = {
	time: 15000
}
