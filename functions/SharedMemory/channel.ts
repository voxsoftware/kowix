var F


class ChannelWrapper{
	_channel = null 
	constructor(channel){
		this._channel = channel
	}

	_checkArgument(value){
		if (value && !value.rpa_plain) {
			if (typeof value == "object") {
				/*
				Object.defineProperty(value, "rpa_plain", {
					enumerable: false,
					value: true 
				})*/
				value.rpa_plain = true 
			}
		}
		return value 
	}

	_checkArguments(args){
		for(let i=0;i<args.length;i++){
			this._checkArgument(args[i])
		}
	}



	get(varname){
		this._checkArguments(arguments)
		return this._channel.get(varname)
	}
	set(varname, value){
		this._checkArguments(arguments)
		return this._channel.set(varname, value)
	}

	invokeMethod(name, value){
		this._checkArguments(arguments)
		return this._channel.invokeMethod(name, value)
	}

	disableAutoDelete(options) {
		this._checkArguments(arguments)
		return this._channel.disableAutoDelete(options)
	}

	enableAutoDelete(options) {
		this._checkArguments(arguments)
		return this._channel.enableAutoDelete(options)
	}

	lock(...args) {
		this._checkArguments(args)
		return this._channel.lock(...args)
	}

	unlock(...args) {
		this._checkArguments(args)
		return this._channel.unlock(...args)
	}
	

	setSiteContext(site) {
		this._checkArguments(arguments)
		return this._channel.setSiteContext(site)
	}





}

F = async function(body) {
	var channel, global
	global = F.global
	body = body || {}
	channel = (await global.userFunction("share").invoke({
		ctxSite: global.IdSite,
		method: "SharedMemory/channel.low"
	}));
	if (!channel) {
		channel = (await global.userFunction("SharedMemory/channel.low").invoke())
	}else{
		if (global.context.server.ipcmodule == "RPA") {
			channel = new ChannelWrapper(channel)
		}
	}

	if (body.site) {
		await channel.setSiteContext(body.site)
	}	
	return channel
};

module.exports = function(global) {
	F.global = global
	return F
}
