var Invoke, MongoClient, compareerror, deferred, ref, ref1, secureInvoke, sleep, state;

import mongo from 'npm://mongodb@3.1.13'
import Exception from '../exception'
import publicContext from '../publicContext'

MongoClient = mongo.MongoClient
state = (ref = publicContext["kowix"]) != null ? ref : (publicContext["kowix"] = {})
state = (ref1 = state.dbInfo) != null ? ref1 : (state.dbInfo = {})

deferred = function() {
	var def;
	def = {};
	def.promise = new Promise(function(a, b) {
		def.resolve = a;
		return def.reject = b;
	});
	return def;
};

compareerror = function(e) {
	var j, len, word, words;
	words = ["topology", "connect", "reconnect"];
	for (j = 0, len = words.length; j < len; j++) {
		word = words[j];
		if (e.message.toLowerCase().indexOf(word) >= 0) {
			return true;
		}
	}
	return false;
};

sleep = function(timeout) {
	var def;
	def = deferred();
	setTimeout(def.resolve, timeout);
	return def.promise;
};

secureInvoke = function(db, ctx, config) {
	var retry;
	retry = async function(count, self, func, param) {
		var e, er, i, j, ref2;
		er = null;
		for (i = j = 0, ref2 = count; (0 <= ref2 ? j < ref2 : j > ref2); i = 0 <= ref2 ? ++j : --j) {
			console.log('> Retrying here');
			try {
				db = (await state.db_reconnect(ctx, config));
				return (await func(db, param));
			} catch (error) {
				e = error;
				er = e;
			}
		}
		if (er) {
			throw er;
		}
	};
	return async function(func, param) {
		var e;
		try {
			return (await func(db, param));
		} catch (error) {
			e = error;
			if (compareerror(e)) {
				// retry two times
				return (await retry(2, this, func, param));
			} else {
				throw e;
			}
		}
	};
};

state.db_reconnect = async function(ctx, config) {
	var caching, client, db, dbs, dbstarter, dbu, e, time;
	caching = state.dbscaching = state.dbscaching || {};
	dbs = state.dbscache = state.dbscache || {};
	dbu = config.url || config.database;
	time = Date.now();
	while (caching[dbu]) {
		if (Date.now() - time > 20000) {
			throw Exception.create("Timedout waiting database").putCode("TIMEDOUT");
		}
		await sleep(10);
	}
	try {
		delete dbs[dbu];
		caching[dbu] = true;
		try {
			client = (await MongoClient.connect(dbu, {
				useNewUrlParser: true,
				reconnectTries: 4
			}));
		} catch (error) {
			e = error;
			if (compareerror(e) && config.autostart) {
				dbstarter = (await import("./mongo.download"));
				await dbstarter.invoke(ctx, config);
				client = (await MongoClient.connect(dbu, {
					useNewUrlParser: true,
					reconnectTries: 4
				}));
			} else {
				throw e;
			}
		}
		db = client.db();
		db.secureInvoke = secureInvoke(db, ctx, config);
		db.table = db.collection;
		dbs[dbu] = db;
		return db;
	} catch (error) {
		e = error;
		throw e;
	} finally {
		delete caching[dbu];
	}
};

Invoke = async function(ctx, config) {
	var db, dbs, dbu;
	dbs = state.dbscache = state.dbscache || {};
	dbu = config.url || config.database;
	db = dbs[dbu];
	if (db) {
		db.secureInvoke = secureInvoke(db, ctx, config);
		return db;
	}
	return (await state.db_reconnect(ctx, config));
};

export var Mongo = mongo
export var invoke = Invoke
export var kawixDynamic = {
	time: 15000
};
