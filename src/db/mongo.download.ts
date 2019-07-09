var checkFileExists, deferred, ref, ref1, sleep, state, y;

import {
	MongoClient
} from 'npm://mongodb@3.1.13'
import axios from 'npm://axios@^0.18.0'
import publicContext from '../publicContext'
import {
	invoke as dinvoke
} from './mongo'
import Os from 'os'
import Path from 'path'
import fs from '../lib/_fs'
import Child from 'child_process'

y = 0
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

checkFileExists = function(file) {
	var def;
	def = deferred();
	fs.access(file, fs.constants.F_OK, function(err) {
		return def.resolve(err ? false : true);
	});
	return def.promise;
};

sleep = function(timeout) {
	var def;
	def = deferred();
	setTimeout(def.resolve, timeout);
	return def.promise;
};

export var invoke = async function(ctx, config) {
	var apppath, create, datapath, def, e, er, files, gb, ienv, mb, mem, mongod, mongod2, mongodatadir, mongourl, path, response, st, stream, tar, uargs, version;
	while (state._loading) {
		await sleep(10);
	}
	state._loading = true;
	try {
		er = null;
		console.info("> Trying to start database automatically");
		// import tars
		//tarurl= __dirname + '/../lib/tar'
		tar = (await import("/virtual/@kawix/std/compression/tar.js"));
		if (config.compatibility) {
			// check old folder
			path = Path.join(Os.homedir(), "kowi", "user-context", "mongo-db-dir");
			apppath = Path.join(path, "app", "mongod");
			if (Os.platform() === "win32") {
				apppath += ".exe";
			}
			datapath = Path.join(path, "data");
			console.log("paths ....", datapath, apppath);
			if ((await checkFileExists(datapath)) && ((await checkFileExists(apppath)))) {
				mongod = apppath;
				mongodatadir = datapath;
			}
		}
		if (!mongod) {
			path = (await ctx.server.getDataPath());
			path = Path.join(path, "mongod");
			if (!(await checkFileExists(path))) {
				await fs.mkdirAsync(path);
			}
			mongod = Path.join(path, "mongod");
			mongodatadir = Path.join(path, config.listen.toString());
		}
		if (!(await checkFileExists(mongod))) {
			mongod2 = mongod + y + Date.now().toString(32) + ".tar.gz";
			y++;
			version = '4.0.6';
			if (Os.arch() === "ia32") {
				version = '3.2.21';
			}
			mongourl = `https://raw.githubusercontent.com/voxsoftware/mongo-executables/master/${Os.platform()}/${Os.arch()}/${version}/mongod.tar.gz`;
			def = deferred();
			st = fs.createWriteStream(mongod2);
			response = (await axios({
				method: 'get',
				url: mongourl,
				responseType: 'stream'
			}));
			stream = response.data;
			stream.on("error", def.resolve);
			st.on("error", def.resolve);
			stream.pipe(st);
			st.on("finish", def.resolve);
			await def.promise;
			// uncompress
			await tar.x({
				file: mongod2,
				C: path
			});
		}
	} catch (error) {
		//await fs.renameAsync mongod2, mongod
		e = error;
		if (mongod) {
			if ((await checkFileExists(mongod))) {
				await fs.unlinkAsync(mongod);
			}
		}
		throw e;
	} finally {
		state._loading = false;
		if (mongod2) {
			if ((await checkFileExists(mongod2))) {
				await fs.unlinkAsync(mongod2);
			}
		}
	}
	// start mongo
	if (!(await checkFileExists(mongodatadir))) {
		files = [];
		await fs.mkdirAsync(mongodatadir);
	} else {
		files = (await fs.readdirAsync(mongodatadir));
	}
	uargs = [];
	if (Os.arch() === "ia32" && files.length === 0) {
		// si hay archivos, mongo puede determinar el tipo de storage, si no default to mmapv1
		uargs.push("--storageEngine");
		uargs.push("mmapv1");
	} else if (Os.arch() !== "ia32") {
		// restrict the memory usage
		mb = 1024 * 1024;
		gb = 1024 * mb;
		if (config.cachesize) {
			mem = config.cachesize;
		} else {
			mem = Math.max(Os.freemem() - (2300 * mb), 384 * mb) / 3;
		}
		mem = (mem / gb).toFixed(2);
		uargs.push("--wiredTigerCacheSizeGB");
		uargs.push(mem);
	}
	ienv = Object.assign({}, process.env);
	if (!ienv.LC_ALL) {
		ienv.LC_ALL = 'C';
	}
	create = function() {
		var p;
		console.info("Opening: ", mongod, ["--dbpath", mongodatadir, "--port", config.listen].concat(uargs));
		p = Child.spawn(mongod, ["--dbpath", mongodatadir, "--port", config.listen.toString()].concat(uargs), {
			detached: true,
			env: ienv
		});
		p.stderr.on("data", function(e) {
			if (e.toString().indexOf("Bad digit \".\"") >= 0) {
				uargs = ['--wiredTigerEngineConfigString=cache_size=' + parseInt((mem * 1024).toString()).toString() + 'M'];
				return setTimeout(create, 100);
			} else {
				return console.log(e.toString());
			}
		});
		p.on("exit", function() {
			return state.pmongo = null;
		});
		return p.on("error", function(e) {
			return er = e;
		});
	};
	create();
	await sleep(3000);
	if (er) {
		throw er;
	}
};

export var kawixDynamic = {
	time: 15000
};
