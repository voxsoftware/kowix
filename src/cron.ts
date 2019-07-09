export var kawixDynamic = {
	time: 15000
}

export var invoke = async function (env, ctx) {
	var func, ref
	env.params = (ref = env.params) != null ? ref : {}
	env.params["file"] = "cron.0tasks"
	func = (await import('./functions'))
	return (await func.invoke(env, ctx))
}
