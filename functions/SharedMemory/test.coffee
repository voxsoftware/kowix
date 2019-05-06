
# file for test SharedMemory from kowix 
export kowixInvoke= (local, body)->
	
	name= body.name or "default"
	memshared= await local.userFunction("SharedMemory/channel").invoke({
		site: 'kowix'
	})
	if body.action is "get"
		time= Date.now()
		for i in [0...10000]
			value= await memshared.get(name)
		return 
			value: value 
			time: Date.now() - time 
		
	else if body.action is "set"
		await memshared.set(name, body.value)
		return body.value 

	return memshared
