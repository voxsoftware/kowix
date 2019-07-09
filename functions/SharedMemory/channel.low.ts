var Channel, F, version;

import Cluster from 'cluster';

version = '0.0.2';

Channel = class Channel {
	constructor() {}

	//@locks= {}
	//@locksTasks= {}
	//@id= 0
	async setSiteContext(site) {
		var ref, ref1, ref2, ref3;
		this.ctx = (await F.global.getSiteContext(site));
		this.ctx._lowChannel = this.ctx._lowChannel || {};
		this.ctx._lowChannel.id = (ref = this.ctx._lowChannel.id) != null ? ref : 0;
		this.locks = this.ctx._lowChannel.locks = (ref1 = this.ctx._lowChannel.locks) != null ? ref1 : {};
		this._autoDelete = this.ctx._lowChannel._autoDelete = (ref2 = this.ctx._lowChannel._autoDelete) != null ? ref2 : {};
		return this.locksTasks = this.ctx._lowChannel.locksTasks = (ref3 = this.ctx._lowChannel.locksTasks) != null ? ref3 : {};
	}

	id() {
		this.ctx._lowChannel.id++;
		return this.ctx._lowChannel.id;
	}

	version() {
		return version;
	}

	async lock(varname, timeout = 60000, expires = 300000) {
		var e, id, in1, lock, task;
		id = this.id();
		if (this.locks[varname]) {
			// wait 
			task = new core.VW.Task();
			this.locksTasks[varname] = this.locksTasks[varname] || {};
			this.locksTasks[varname][id] = task;
			in1 = setTimeout(function() {
				if (task) {
					task.exception = F.global.Exception.create("Failed acquiring lock").putCode("TIMEDOUT");
					return task.finish();
				}
			}, timeout);
			await task;
			clearTimeout(in1);
			task = null;
			delete this.locksTasks[varname][id];
		}
		e = setTimeout(() => {
			delete lock.expire_timeout;
			return this.unlock(lock);
		}, expires);
		lock = {
			id: id,
			timeout: timeout,
			expires: expires,
			expire_timeout: e
		};
		this.locks[varname] = lock;
		return {
			id: id,
			timeout: timeout,
			expires: expires
		};
	}

	unlock(lock) {
		var keys, task, v;
		v = this.locks[varname];
		if (!v || (v.id !== (lock != null ? lock.id : void 0))) {
			F.global.Exception.create("Failed removing lock. You have not locked").putCode("PERMISSION_DENIED");
		}
		if (v.expire_timeout) {
			clearTimeout(v.expire_timeout);
		}
		delete this.locks[varname];
		if (this.locksTasks[varname]) {
			keys = Object.keys(this.locksTasks[varname]);
			task = this.locksTasks[varname][keys[0]];
			delete this.locksTasks[varname][keys[0]];
			return task.finish();
		}
	}

	enableAutoDelete({prefix, maxCount, range = 2}) {
		// automáticamente elimina 		
		return this._autoDelete[prefix] = {
			prefix: prefix,
			maxCount: maxCount,
			range: range
		};
	}

	disableAutoDelete({prefix}) {
		if (!prefix && arguments[0]) {
			prefix = arguments[0];
		}
		// automáticamente elimina 
		return delete this._autoDelete[prefix];
	}

	async autoDelete(config) {
		var i, j, keys, range, ref, results, val;
		config.deleting = true;
		try {
			await core.VW.Task.sleep(10000);
			val = this.get(config.prefix);
			if (val && typeof val === "object") {
				keys = Object.keys(val);
				if (keys.length > config.maxCount) {
					range = Math.max(config.range, keys.length - config.maxCount);
					results = [];
					for (i = j = 0, ref = range; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
						results.push(delete val[keys[i]]);
					}
					return results;
				}
			}
		} catch (error) {

		} finally {
			config.deleting = false;
		}
	}

	get(varname) {
		var j, len, o, part, parts;
		parts = varname.split(".");
		o = this.ctx.publicContext;
		if (parts.length > 0) {
			for (j = 0, len = parts.length; j < len; j++) {
				part = parts[j];
				if (part) {
					o = o[part];
					if (!o) {
						return o;
					}
				}
			}
		}
		return o;
	}

	set(varname, value) {
		var i, j, len, o, part, parts, prefix, ref, ref1, results, val;
		parts = varname.split(".");
		if (parts.length > 0) {
			o = this.ctx.publicContext;
			for (i = j = 0, len = parts.length; j < len; i = ++j) {
				part = parts[i];
				if (i !== (parts.length - 1)) {
					o = o[part] = (ref = o[part]) != null ? ref : {};
				}
			}
			o[parts[parts.length - 1]] = value;
		}
		ref1 = this._autoDelete;
		results = [];
		for (prefix in ref1) {
			val = ref1[prefix];
			if (!val.deleting) {
				if (varname === prefix || varname.startsWith(prefix + ".")) {
					results.push(this.autoDelete(val));
				} else {
					results.push(void 0);
				}
			} else {
				results.push(void 0);
			}
		}
		return results;
	}

	invokeMethod(method, body) {
		return this.ctx.userFunction(method).invoke(body);
	}

};

F = function(body) {
	var global;
	global = F.global;
	return new Channel();
};

module.exports = function(global) {
	F.global = global;
	return F;
};
