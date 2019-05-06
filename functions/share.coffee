import {getSiteContext} from '../src/functions'
import Exception from '../src/exception'
import publicContext from '../src/publicContext'
import Path from 'path'
import Os from 'os'

createProxyObj= (ipc)->
	# return proxy

	createFunc= (target,name)->
		if name is "toJSON"
			return ()->
				return
					proxied: yes

		return ()->
			return await ipc.send
				action: 'call'
				name: 'mod'
				args: Array.prototype.slice.call(arguments,0,arguments.length)
				method: name



	handler=
		set: ()->
			# nothing

		get: (target, name)->
			if not target[name]
				if typeof Symbol isnt "undefined" and name instanceof Symbol
					return

				if name isnt "then" and name isnt "catch" and name isnt "inspect"
					name= name.toString()
					if name.startsWith("Symbol")
						return
					target[name]= createFunc target, name

			return target[name]


	obj = {}
	return new Proxy obj, handler

export kowixInvoke= (local, body)->
	server= local.context.server
	if not server.workers?.length
		# comunicate in IPC
		info= await server.channel.send
			action: 'import'
			args: [__filename]
			params: body
			name: __filename

		if info.create
			try
				ipc=  server.createIPC("def")
				await ipc.connect()
				await ipc.send
					action: 'import'
					args: [__filename]
					params:
						requireinfo: body
			catch e
				ipc.close()
				throw e
			return createProxyObj ipc
		else
			sitectx= await local.getSiteContext(body.ctxSite)
			return await sitectx.userFunction(body.method).invoke({})

	else
		Exception.create("This functions not run in master process").raise()


execute= (server, body)->
	if server.workers

		if body.onmaster
			# server on master
			body.client = yes
			return

		for w in server.workers
			if not w.finished
				if w.env.MEMSHARING?.toString() is '1'
					break
			w= null

		if server.workers.length is 1
			return
				create: no

		if Os.platform() == "win32"
			# cluster mode no support named pipes, for that reason execute on master
			body.client= yes
			return

		if not w?.IPC
			throw Exception.create("No worker available for memsharing").putCode("NO_WORKER")

		return await w.IPC.send
			action: 'import'
			args: [__filename]
			params:
				client: yes
			name: __filename




export ipcInvoke= (state, socket, body, IPC)->
	res= null
	server= IPC.server

	if body?.requireinfo

		ctx= server.getContext("kowix")
		env=
			request:null
			response:null
			server: server
		tsite = await getSiteContext(env,ctx)

		nsite = await tsite.getSiteContext(body.requireinfo.ctxSite)
		state["mod"]= await nsite.userFunction(body.requireinfo.method).invoke({})

		return yes


	else if not body?.client
		body= body ? {}
		res= await execute(server, body)


	if body?.client

		if publicContext.IPCDef
			return
				create: yes


		# generate new IPC Channel
		publicContext.IPCDef = newserver= server.createIPC("def")
		await newserver.listen()

		return
			create: yes

	return res


# enable dynamic hot reloading
export kawixDynamic=
	time: 40000
