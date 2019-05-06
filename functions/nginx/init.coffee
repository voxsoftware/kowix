
export kowixInvoke= (local, ctx)->
	Nginx= await local.userFunction("nginx/config").invoke()
	nginx= new Nginx()

	await nginx.writeDefaultConfig()
