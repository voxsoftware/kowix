export var kowixInvoke = function(local, body) {
	var config, ref, ref1;
	config = local.context.server.config.readCached();
	return (ref = (ref1 = config.cluster[0]) != null ? ref1.address : void 0) != null ? ref : config.address;
};
