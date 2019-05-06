import Cluster from 'cluster'
version= '0.0.2'
class Channel 
	constructor:()->
		#@locks= {}
		#@locksTasks= {}
		#@id= 0


	setSiteContext: (site)->
		@ctx= await F.global.getSiteContext(site)
		@ctx._lowChannel = @ctx._lowChannel or {}
		@ctx._lowChannel.id = @ctx._lowChannel.id ? 0
		@locks= @ctx._lowChannel.locks= @ctx._lowChannel.locks ? {}
		@_autoDelete= @ctx._lowChannel._autoDelete= @ctx._lowChannel._autoDelete ? {}
		@locksTasks= @ctx._lowChannel.locksTasks= @ctx._lowChannel.locksTasks ? {}


	id:()->
		@ctx._lowChannel.id++
		@ctx._lowChannel.id


	version: ()->
		version
	
	lock: (varname, timeout=60000, expires=300000)->
		
		id= @id()

		if @locks[varname]
			# wait 
			task= new core.VW.Task() 
			@locksTasks[varname]=@locksTasks[varname] or {}			
			@locksTasks[varname][id]=  task 

			in1= setTimeout ()->
				if task
					task.exception= F.global.Exception.create("Failed acquiring lock").putCode("TIMEDOUT")
					task.finish()
			, timeout 
			await task 
			clearTimeout in1 
			task= null 
			delete @locksTasks[varname][id]
		

		e= setTimeout ()=>
			delete lock.expire_timeout
			@unlock lock 
		, expires

		lock= 
			id: id
			timeout: timeout 
			expires: expires
			expire_timeout:  e


		@locks[varname]= lock
		return 
			id: id
			timeout: timeout 
			expires: expires
			
	


	
	unlock: (lock)->
		v= @locks[varname]
		if not v or (v.id isnt lock?.id )
			F.global.Exception.create("Failed removing lock. You have not locked").putCode("PERMISSION_DENIED")
		
		clearTimeout v.expire_timeout if v.expire_timeout
		delete @locks[varname]

		if @locksTasks[varname]
			keys= Object.keys @locksTasks[varname]
			task= @locksTasks[varname][keys[0]]
			delete @locksTasks[varname][keys[0]]
			task.finish() 


	enableAutoDelete: ({prefix, maxCount, range=2})->
		# automáticamente elimina 		
		@_autoDelete[prefix]= 
			prefix: prefix 
			maxCount : maxCount 
			range: range
		

	disableAutoDelete: ({prefix})->
		if not prefix and arguments[0]
			prefix= arguments[0]
		# automáticamente elimina 
		delete @_autoDelete[prefix]


	autoDelete: (config)->

		config.deleting= yes
		try 					
			await core.VW.Task.sleep 10000

			val= @get config.prefix 
			if val and typeof val is "object"
				keys= Object.keys(val)
				if keys.length > config.maxCount
					range= Math.max config.range, keys.length - config.maxCount
					for i in [0...range]
						delete val[keys[i]]
		catch 
		finally 
			config.deleting= no

	
	get: (varname)->
		parts= varname.split(".")
		o= @ctx.publicContext 
		if parts.length > 0			
			for part in parts 
				if part 
					o= o[part ]
					if not o 
						return o 
		
		return o

	set: (varname, value)->
		parts= varname.split(".")
		
		if parts.length > 0
			o= @ctx.publicContext 
			for part, i in parts 
				if i isnt (parts.length - 1)
					o= o[part] = o[part] ? {}
			o[parts[parts.length-1]]= value 
		
		for prefix, val of @_autoDelete
			if not val.deleting
				if varname is prefix or varname.startsWith(prefix+".")
					@autoDelete val


	invokeMethod: (method, body)->
		return @ctx.userFunction(method).invoke(body)
				

	
F= (body)->
	global= F.global 
	return new Channel()

module.exports= (global)->
	F.global = global 
	F