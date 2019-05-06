
export kawixDynamic=
	time: 15000

export invoke= (env,ctx)->
	env.params= env.params ? {}
	env.params["file"]= "cron.0tasks"

	func= await `import('./functions')`
	return await func.invoke(env,ctx)
