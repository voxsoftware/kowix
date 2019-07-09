var F

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
