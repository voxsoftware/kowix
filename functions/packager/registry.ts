var Config, F, Fs, Registry;

import Semver from 'semver';

import fs from 'fs';

import tar from 'tar';

import fsu from 'fs-extra';

import Crypto from 'crypto';

import Path from 'path';

import Child from 'child_process';

Fs = core.System.IO.Fs;

Registry = class Registry {
	constructor(options) {
		this.url = (options != null ? options.url : void 0) || "https://registry.npmjs.org";
		this.options = options != null ? options : {};
		this.installed = [];
	}

	_remove(path) {
		var task;
		task = new core.VW.Task();
		fsu.remove(path, function(e) {
			if (e) {
				task.exception = e;
			}
			return task.finish();
		});
		return task;
	}

	getCached(pack, version, idSite) {
		return Registry.getCached(pack, version, idSite);
	}

	static getCached(pack, version, idSite) {
		var cache, result, ver;
		if (pack === "all") {
			return Registry.cached;
		}
		idSite = idSite || '';
		if (idSite) {
			idSite += ">";
		}
		if (!Registry.cached) {
			return;
		}
		cache = Registry.cached[idSite + pack];
		if (cache) {
			if (cache[version]) {
				return cache[version];
			}
			for (ver in cache) {
				result = cache[ver];
				if (Semver.satisfies(ver, version)) {
					return result;
				}
			}
		}
	}

	async npmDownloadBase(pack, version) {
		var content, e, err, fol, needredo, npm, options1, out, p, p1, package2, package3, path, reg, requiring, result1, task, time;
		package2 = pack.replace(/\//g, '%2F');
		package3 = package2.replace(/\./g, '__');
		// try  to get module
		out = this.options.folder;
		p1 = Path.join(out, "node_modules", pack, "package.json");
		if ((await F.checkFileExists(p1))) {
			p1 = (await Fs.async.readFile(p1, 'utf8'));
			p1 = JSON.parse(p1);
			if (Semver.satisfies(p1.version, version)) {
				return {
					version: p1.version,
					installed: false,
					cached: true,
					folder: Path.join(out, "node_modules", pack)
				};
			}
		}
		// first download NPM
		npm = Registry.getCached("npm", "6.8.x", "kowix");
		// download the package and apply an install inside package
		// this is more effective for hot loading
		// than a normal npm install
		options1 = Object.assign({}, this.options);
		options1.folder = Path.join(options1.folder, "node_modules");
		options1.ignoredependencies = true;
		options1.includeversioninoutput = true;
		options1.nolock = true;
		time = Date.now();
		needredo = false;
		requiring = (await F.memShared.get(`modrequiring.${package3}`));
		//console.info("requiring:",requiring)
		while (requiring && (Date.now() - time < 30000)) {
			await core.VW.Task.sleep(10);
			needredo = true;
			requiring = (await F.memShared.get(`modrequiring.${package3}`));
		}
		if (requiring) {
			throw F.global.Exception.create("Failed getting exclusive access for requiring").putCode("LOCK_FAILED");
		}
		if (needredo) {
			return (await this.npmDownloadBase(pack, version));
		}
		await F.memShared.set(`modrequiring.${package3}`, true);
		try {
			p1 = Path.join(out, "package.json");
			if (!((await F.checkFileExists(p1)))) {
				await Fs.async.writeFile(p1, JSON.stringify({
					name: 'kowix'
				}));
			}
			if (!npm) {
				fol = Path.join(F.global.UserContext.getHomeDir(), "npm-mod");
				if (!((await F.checkFileExists(fol)))) {
					await Fs.async.mkdir(fol);
				}
				reg = new Registry({
					folder: fol,
					idSite: 'kowix',
					nolock: true
				});
				vw.info("Downloading npm");
				npm = (await this.download("npm", "6.8.x", "kowix", "internal"));
			}
			path = Path.join(npm.folder, "bin", "npm-cli.js");
			reg = new Registry(options1);
			result1 = (await reg.downloadBase(pack, version));
			//console.info(result1)
			task = new core.VW.Task();
			p = Child.spawn(process.argv[0], [path, "install", "--only=prod", "--unsafe-perm"], {
				cwd: result1.folder
			});
			err = [];
			p.stdout.on("data", function(data) {
				return console.warn(data.toString());
			});
			p.stderr.on("data", function(data) {
				var d;
				if (data) {
					d = data.toString();
					if (d.startsWith("ERR!")) {
						err.push(d);
					}
					return process.stderr.write(data);
				}
			});
			p.on("error", function(er) {
				task.exception = er;
				return task.finish();
			});
			p.on("exit", task.finish.bind(task));
			await task;
			if (err.length) {
				throw F.global.Exception.create(`Failed installing module ${pack}@${version}.Error info: ${err.join("  ")}`).putCode("NPM_ERR");
			}
			await Fs.async.rename(result1.folder, Path.join(out, "node_modules", pack));
			p1 = Path.join(out, "node_modules", pack, "package.json");
			content = (await Fs.async.readFile(p1, 'utf8'));
			content = JSON.parse(content);
			if (Semver.satisfies(content.version, version)) {
				return {
					folder: Path.join(out, "node_modules", pack),
					installed: true,
					version: content.version
				};
			}
			throw F.global.Exception.create(`Failed installing module ${pack}@${version}`);
		} catch (error1) {
			e = error1;
			throw e;
		} finally {
			await F.memShared.set(`modrequiring.${package3}`, false);
		}
	}

	npmDownload(pack, version, idSite) {
		return this.download(pack, version, idSite, 'npm');
	}

	async download(pack, version, idSite, type) {
		var c, f, item, result, s, tocache;
		if (!type) {
			type = F.config.requiremode || "download";
		}
		if (type === "download") {
			this.options.folder = Path.join(this.options.folder, "node_modules");
		}
		item = type === "npm" ? "npmDownloadBase" : "downloadBase";
		this.type = type;
		result = (await this[item](pack, version));
		if (!result) {
			return;
		}
		c = Registry.cached = Registry.cached || {};
		f = Registry.cachedf = Registry.cachedf || {};
		s = idSite || this.options.idSite || '';
		if (s) {
			s += ">";
		}
		tocache = async function(data) {
			var dep, file, i, j, len, len1, mod1, mods, name, newarg, op, p, pjson, ref, results, results1;
			name = data.name || pack;
			op = c[s + name];
			if (!op) {
				op = c[s + name] = {};
			}
			if (!op[data.version]) {
				//old= f[result.folder]
				//delete op[old.version] if old
				op[data.version] = Object.assign({}, data);
				delete op[data.version].dependencies;
				f[data.folder] = data;
			}
			if (data.dependencies) {
				ref = data.dependencies;
				results = [];
				for (i = 0, len = ref.length; i < len; i++) {
					dep = ref[i];
					results.push((await tocache(dep)));
				}
				return results;
			} else {
				// readdir node_modules
				mods = Path.join(data.folder, "node_modules");
				//console.info("reading module", mods)
				if ((await F.checkFileExists(mods))) {
					mod1 = (await Fs.async.readdir(mods));
//console.info("reading modules", mod1)
					results1 = [];
					for (j = 0, len1 = mod1.length; j < len1; j++) {
						file = mod1[j];
						try {
							pjson = Path.join(mods, file, "package.json");
							if ((await F.checkFileExists(pjson))) {
								pjson = (await Fs.async.readFile(pjson, 'utf8'));
								p = JSON.parse(pjson);
								newarg = {
									folder: Path.join(mods, file),
									cached: true,
									version: p.version,
									name: file
								};
								results1.push((await tocache(newarg)));
							} else {
								results1.push(void 0);
							}
						} catch (error1) {}
					}
					return results1;
				}
			}
		};
		await tocache(result);
		return result;
	}

	async loadDependencies(deps, bundle, parent) {
		var dep, id, items;
		if (!this.main) {
			this.main = parent;
		}
		deps = deps || [];
		items = [];
		for (id in deps) {
			dep = deps[id];
			if ((bundle != null ? typeof bundle.indexOf === "function" ? bundle.indexOf(id) : void 0 : void 0) >= 0) {
				continue;
			}
			items.push((await this.downloadBase(id, dep, parent)));
		}
		return items;
	}

	async downloadBase(package1, version, parent) {
		var arg, c, cache, cache2_, cache_, cachedKowix, checkPJSON, cid, cpath, currentiv, data, dist, downloadCache, e, er, files, folder, folderpackagejson, foldertemp, hash, i, inst, installed, iversion, j, len, len1, needredo, options, package2, package3, packagejson, part, parts, realstr, realversion, ref, reload, req, requiring, response, result, saveiv, sha1, st, stat, stout, task, time, url, version2, versions;
		version = version || "latest";
		package2 = package1.replace(/\//g, '%2F');
		package3 = package2.replace(/\./g, '__');
		url = `${this.url}/${package2}`;
		cachedKowix = Path.join(__dirname, "..", "..", "include.packages");
		options = Object.assign(this.options, {});
		if (this.main) {
			options.folder = Path.join(this.main.folder, "node_modules");
		}
		if (!(await F.checkFileExists(options.folder))) {
			await Fs.async.mkdir(options.folder);
		}
		installed = this.installed[package1];
		if (version === "*" && installed) {
			return {
				cached: true,
				processed: false,
				downloaded: false,
				name: package1,
				folder: installed.folder,
				version: installed.version
			};
		}
		downloadCache = F.downloadCache;
		folder = Path.join(options.folder, package1);
		cache_ = Path.join(downloadCache, `${package2}_VALL`);
		cache2_ = Path.join(cachedKowix, `${package2}_VALL`);
		if ((await F.checkFileExists(cache2_))) {
			version2 = (await Fs.async.readFile(cache2_, 'utf8'));
		}
		if (version === "*") {
			if (version2 && Semver.satisfies(version2, version)) {
				version = version2;
			} else if ((await F.checkFileExists(cache_))) {
				version = (await Fs.async.readFile(cache_, 'utf8'));
			}
		}
		if (version2 && Semver.satisfies(version2, version)) {
			downloadCache = cachedKowix;
		} else {
			version2 = null;
		}
		checkPJSON = async(folderpackagejson) => {
			var arg, packagejson;
			if ((await F.checkFileExists(folderpackagejson))) {
				packagejson = (await Fs.async.readFile(folderpackagejson, 'utf8'));
				packagejson = JSON.parse(packagejson);
				if (Semver.satisfies(packagejson.version, realstr || version)) {
					arg = {
						folder: folder,
						download: false,
						cached: true,
						name: package1,
						versionChecked: false,
						version: packagejson.version
					};
					if (!options.ignoredependencies) {
						arg.dependencies = (await this.loadDependencies(packagejson.dependencies, packagejson.bundleDependencies, arg));
					}
					return arg;
				}
			}
		};
		cid = F.global.uniqid();
		foldertemp = Path.join(options.folder, package2 + `.${cid}.temp`);
		folderpackagejson = Path.join(options.folder, package1, "package.json");
		arg = (await checkPJSON(folderpackagejson));
		if (arg) {
			return arg;
		}
		if (!options.nolock) {
			time = Date.now();
			needredo = false;
			requiring = (await F.memShared.get(`modrequiring.${package3}`));
			while (requiring && (Date.now() - time < 30000)) {
				await core.VW.Task.sleep(10);
				needredo = true;
				requiring = (await F.memShared.get(`modrequiring.${package3}`));
			}
			if (requiring) {
				throw F.global.Exception.create("Failed getting exclusive access for requiring").putCode("LOCK_FAILED");
			}
			if (needredo) {
				return (await this.downloadBase(package1, version, parent));
			}
			await F.memShared.set(`modrequiring.${package3}`, true);
		}
		try {
			// cached? of course
			reload = true;
			cache = Path.join(downloadCache, `${package2}.data.json`);
			if (cachedKowix === downloadCache) {
				reload = false;
			} else if ((await F.checkFileExists(cache))) {
				stat = (await Fs.async.stat(cache));
				if (Date.now() - stat.mtime.getTime() < (10 * 360000)) {
					reload = false;
				}
			}
			if (reload) {
				req = new core.VW.Http.Request(url);
				try {
					response = (await req.getResponseAsync());
					if (response.statusCode === 404) {
						throw F.global.Exception.create(`Module ${package1}@${version} not found`).putCode("NOT_FOUND");
					}
					if (response.statusCode > 299) {
						throw F.global.Exception.create(`Failed loading module ${package1}@${version}.`).putCode("LOAD_FAILED");
					}
					if (typeof response.body === "string") {
						response.body = JSON.parse(response.body);
					}
				} catch (error1) {
					e = error1;
					throw e;
				} finally {
					if (req.innerRequest) {
						delete req.innerRequest.callback;
					}
				}
				data = response.body;
			} else {
				data = (await Fs.async.readFile(cache, 'utf8'));
				data = JSON.parse(data);
			}
			if (!data.name) {
				throw F.global.Exception.create("Failed getting package info").putCode("FAILED_REQUIRE");
			}
			if (response) {
				await Fs.async.writeFile(cache, JSON.stringify(data));
			}
			if (version2) {
				realversion = version2;
			} else {
				versions = Object.keys(data.versions);
				versions.sort(function(a, b) {
					if (a > b) {
						return -1;
					} else {
						if (a < b) {
							return 1;
						} else {
							return 0;
						}
					}
				});
				if ((ref = data["dist-tags"]) != null ? ref[version] : void 0) {
					realversion = data["dist-tags"][version];
				} else {
// compare
					for (i = 0, len = versions.length; i < len; i++) {
						iversion = versions[i];
						if (iversion === version || Semver.satisfies(iversion, version)) {
							realversion = iversion;
							break;
						}
					}
				}
			}
			if (!installed) {
				// get the current folder ..
				if ((await F.checkFileExists(folderpackagejson))) {
					try {
						packagejson = (await Fs.async.readFile(folderpackagejson, 'utf8'));
						packagejson = JSON.parse(packagejson);
					} catch (error1) {
						e = error1;
						packagejson = null;
					}
					if (packagejson) {
						installed = {
							folder: folder,
							version: packagejson.version,
							name: package1,
							cached: true
						};
					}
				}
			}
			if (installed && realversion) {
				// install two versions of same module
				if (!Semver.satisfies(realversion, installed.version)) {
					if (parent) {
						options = Object.assign({}, options);
						options.folder = Path.join(parent.folder, "node_modules");
						if (!(await F.checkFileExists(options.folder))) {
							await Fs.async.mkdir(options.folder);
						}
						folder = Path.join(options.folder, package1);
						folderpackagejson = Path.join(folder, "package.json");
						arg = (await checkPJSON(folderpackagejson));
						if (arg) {
							return arg;
						}
					}
				}
			}
			//return
			//	folder: installed.folder
			//	cached: yes
			//	downloaded:no
			//	name: package1
			//	version: installed.version
			realstr = realversion;
			if (options.includeversioninoutput) {
				folder += "@" + realversion;
				folderpackagejson = Path.join(folder, "package.json");
				arg = (await checkPJSON(folderpackagejson));
				if (arg) {
					return arg;
				}
			}
			realversion = data.versions[realversion];
			if (!realversion) {
				throw F.global.Exception.create(`Module ${package1}@${version} not found`).putCode("NOT_FOUND");
			}
			// go to version
			cache = Path.join(downloadCache, `${package2}_V_${realstr}.tar.gz`);
			currentiv = null;
			if ((await F.checkFileExists(cache_))) {
				currentiv = (await Fs.async.readFile(cache_, 'utf8'));
			}
			saveiv = false;
			if (currentiv) {
				if (Semver.gt(realstr, currentiv)) {
					saveiv = true;
				}
			} else {
				saveiv = true;
			}
			result = {
				folder: folder,
				name: package1
			};
			result.cached = true;
			if (!((await F.checkFileExists(cache)))) {
				// make cache
				result.cached = false;
				result.downloaded = true;
				data = realversion;
				// download tgz
				dist = data.dist.tarball;
				if (!dist) {
					throw F.global.Exception.create(`Failed to get a tarball for module ${package1}@${version}`);
				}
				task = new core.VW.Task();
				er = function(e) {
					task.exception = e;
					return task.finish();
				};
				stout = fs.createWriteStream(cache);
				req = new core.VW.Http.Request(dist);
				req.analizeResponse = false;
				req.beginGetResponse();
				req.innerRequest.on("error", er);
				stout.on("error", er);
				stout.on("finish", task.finish.bind(task));
				req.innerRequest.pipe(stout);
				await task;
				try {
					// ensure checksum is good
					hash = Crypto.createHash('sha1');
					task = new core.VW.Task();
					inst = fs.createReadStream(cache);
					inst.on("error", er);
					inst.on("data", function(d) {
						return hash.update(d);
					});
					inst.on("end", task.finish.bind(task));
					await task;
					sha1 = hash.digest('hex');
					if (sha1 !== data.dist.shasum) {
						throw global.Exception.create(`Shasum comprobation failed ${sha1}. Expected: ${data.dist.shasum}`).putCode("SHASUM_FAILED");
					}
				} catch (error1) {
					e = error1;
					try {
						await Fs.async.unlink(cache);
					} catch (error1) {}
					throw e;
				} finally {

				}
			}
			// copy to folder
			await Fs.async.mkdir(foldertemp);
			try {
				task = new core.VW.Task();
				st = tar.x({
					C: foldertemp
				});
				inst = fs.createReadStream(cache);
				er = function(e) {
					task.exception = e;
					return task.finish();
				};
				inst.on("error", er);
				st.on("error", er);
				inst.pipe(st);
				st.on("finish", task.finish.bind(task));
				await task;
				// copy folder
				parts = package1.split("/");
				c = "";
				cpath = null;
				if (parts.length > 1) {
					parts.pop();
					for (j = 0, len1 = parts.length; j < len1; j++) {
						part = parts[j];
						if (!c) {
							c = part;
						} else {
							c = Path.join(c, part);
						}
						cpath = Path.join(this.options.folder, c);
						if (!((await F.checkFileExists(cpath)))) {
							await Fs.async.mkdir(cpath);
						}
					}
				}
				files = (await Fs.async.readdir(foldertemp));
				if ((await F.checkFileExists(folder))) {
					await this._remove(folder);
				}
				await Fs.async.rename(Path.join(foldertemp, files[0]), folder);
				this.installed[package1] = {
					version: realstr,
					folder: folder,
					globalfolder: options.folder
				};
			} catch (error1) {
				e = error1;
				throw e;
			} finally {
				try {
					await this._remove(foldertemp);
				} catch (error1) {}
			}
			result.version = realstr;
			if (!options.ignoredependencies) {
				packagejson = (await Fs.async.readFile(folderpackagejson, 'utf8'));
				packagejson = JSON.parse(packagejson);
				result.dependencies = (await this.loadDependencies(packagejson.dependencies, packagejson.bundleDependencies, result));
			}
			if (saveiv) {
				await Fs.async.writeFile(cache_, realstr);
			}
			return result;
		} catch (error1) {
			e = error1;
			throw e;
		} finally {
			if (!options.nolock) {
				await F.memShared.set(`modrequiring.${package3}`, false);
			}
		}
	}

};

Config = null;

F = async function(body) {
	var r;
	F.checkFileExists = function(path) {
		return new Promise(function(resolve, reject) {
			return fs.access(path, fs.F_OK, function(error) {
				return resolve(!error);
			});
		});
	};
	F.downloadCache = Path.join(F.global.UserContext.getHomeDir(), "mod.require.cache");
	if (!((await F.checkFileExists(F.downloadCache)))) {
		await Fs.async.mkdir(F.downloadCache);
	}
	//if not Config
	//	Config=
	F.config = (await F.global.context.server.config.read());
	// with a share
	if (!F.global.publicContext.memShared) {
		F.global.publicContext.memShared = F.memShared = (await F.global.userFunction("SharedMemory/channel").invoke({
			site: 'kowix'
		}));
	} else {
		F.memShared = F.global.publicContext.memShared;
	}
	if (body.action && body.arguments) {
		r = new Registry(body);
		return (await r[body.action](...body.arguments));
	}
	if (body.package && body.folder) {
		r = new Registry(body);
		return (await r.download(body.package, body.version));
	}
	return Registry;
};

module.exports = function(global) {
	F.global = global;
	return F;
};
