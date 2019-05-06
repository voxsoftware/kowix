
export kowixInvoke= (local, body)->
	server= local.context.server 
	if not server.workers?.length
		# comunicate in IPC
		return await server.channel.send 
			action: 'import'
			args: [__filename, body]
			name: __filename
	else 
		return await execute(server, body)
	

execute= (server, body)->	
	ws= []
	
	if server.workers 
		for w in server.workers
			if not w.finished
				ws.push
					info: w.info 
					purpose: w.purpose 
					pid: w.pid 
					env: w.env
		return ws



export ipcInvoke= (state, socket, body, IPC)->
	server= IPC.server 
	return execute(server, body)

# enable dynamic hot reloading
export kawixDynamic=
	time: 10000