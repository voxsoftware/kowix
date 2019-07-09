//  # Kodhe copyright 2019©
//  Middleware for body parser

var Mod;

import bodyParser from 'npm://body-parser@1.18.3';

import Util from './util';

Mod = {
	invoke: async function(env, ctx) {
		var def, ref, ref1, state;
		state = Util.state();
		if (!state.jsonParser) {
			state.jsonParser = bodyParser.json({
				limit: '5mb'
			});
		}
		if (!state.urlencodedParser) {
			state.urlencodedParser = bodyParser.urlencoded({
				limit: '5mb'
			});
		}
		def = Util.deferred();
		env.request.once("error", def.reject);
		state.jsonParser(env.request, env.response, def.resolve);
		await def.promise;
		if (!env.request.body || (Object.keys(env.request.body).length === 0)) {
			def = Util.deferred();
			state.urlencodedParser(env.request, env.response, def.resolve);
			await def.promise;
		}
		// union into env.body
		return env.body = Object.assign({}, (ref = env.request.query) != null ? ref : {}, (ref1 = env.request.body) != null ? ref1 : {});
	}
};

export var invoke = Mod.invoke;

export var kawixDynamic = {
	time: 15000
};
