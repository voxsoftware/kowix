export var invoke = function(env, ctx) {
	return env.reply.code(200).send("Hello world!");
};

export var kawixDynamic = {
	time: 30000
};
