export kowixInvoke= (local,body)->
	config= local.context.server.config.readCached()
	return config.cluster[0]?.address ? config.address
