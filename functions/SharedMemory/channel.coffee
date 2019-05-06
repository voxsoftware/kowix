
F= (body)->	
	global= F.global 
	body= body or {}	
	
	channel= await global.userFunction("share").invoke
		ctxSite: global.IdSite
		method: "SharedMemory/channel.low"
		
	if not channel
		channel= await global.userFunction("SharedMemory/channel.low").invoke()
	if body.site 
		await channel.setSiteContext body.site

	return channel 


module.exports= (global)->
	F.global = global 
	F