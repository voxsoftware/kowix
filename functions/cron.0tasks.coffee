

execute= (local, promises, site, body)->
	if not local.publicContext.cronExecuting[site.id]
		try
			console.log " > [kowix] Starting cron #{site.id}"
			local.publicContext.cronExecuting[site.id]= yes
			ctx= await local.getSiteContext(site.id)
			task= ctx.userFunction("cron.0tasks").invoke(body)
			await  task
		catch e
			console.error "Error executing cron: #{e.stack}"
		finally
			console.log " > [kowix] Finalized cron #{site.id}"
			delete local.publicContext.cronExecuting[site.id]


export kowixInvoke= (local,body)->
	if not local.publicContext.cronExecuting
		local.publicContext.cronExecuting={}
	console.info("executing: ", local.publicContext.cronExecuting)
	sites= local.getSitesConfig()
	promises= []
	for site in sites
		if not site.cron and (site.id isnt "kowix")
			# execute cron
			execute(local, promises, site, body)
	#await Promise.all(promises)
