var F, Fs;

import Path from 'path'
import fs from 'fs'
import KawixHttp from '/virtual/@kawix/std/http/mod'
import crypto from 'crypto'

declare var core 
Fs = core.System.IO.Fs

F = async function(body) {
	var F1, global;
	global = F.global;
	// this functions takes a npm module and compile to browser
	// using this packager
	F1 = async function(allowAbsolute) {
		/*
		if body.site
			body.path= Path.join(body.site, body.path )

		if Path.isAbsolute body.path

		 * no allow compiling outside from projects directory
			gr1= Path.normalize(Path.join(__dirname, "..", "..", ".."))
			gr2= Path.relative(gr1, body.path)

			if not allowAbsolute and gr2.startsWith("../")
				gr2= Path.relative(global.UserContext.getHomeDir(), body.path)
				if gr2.startsWith "/"
					throw global.Exception.create("Not allowed to use absolute path #{body.path}")
			path= body.path

		else
			path= Path.join __dirname, "..", "..", "..", body.path
		 */
		/*
		serv= new core.VW.Http.StaticServe.Server()
		serv.addPath cache
		global.context.request.url= "/#{fname}"
		await serv.handle global.context
		body.stopdefault= yes
		task= new core.VW.Task()
		global.context.response.on "finish", task.finish.bind task
		await task
		*/
		var Uglify, allconfig, ast, cache, code, e, er, file, file_min, files1, fname, fsExtra, i, j, k, kodecore, len, len1, len2, main, mod, modn, mods, opath, parts, path, ref, result, serv, site, st, stat, stat1, tar, tarfile, task, todel, tst;
		F.checkFileExists = function(path) {
			return new Promise(function(resolve, reject) {
				return fs.access(path, fs.F_OK, function(error) {
					return resolve(!error);
				});
			});
		};
		cache = Path.join(global.UserContext.getHomeDir(), "cache");
		if (!((await F.checkFileExists(cache)))) {
			await Fs.async.mkdir(cache);
		}
		/*
		if body.module == "kodhe.core"
			if body.returncode
				return
					code: await Fs.async.readFile(Path.join(__dirname, "..", "..","browser", "kodhe.core.js"))

			serv= new core.VW.Http.StaticServe.Server()
			serv.addPath Path.join(__dirname, "..", "..", "browser")
			global.context.request.url= "/kodhe.core.js"
			await serv.handle global.context
			body.stopdefault= yes
			task= new core.VW.Task()
			global.context.response.on "finish", task.finish.bind task
			await task

			return
		*/
		if (body.module === "kodhe.core" || body.path === "kodhe.core") {
			opath = Path.join(__dirname, "..", "..", "browser", "kodhe.core");
			kodecore = Path.join(global.UserContext.getHomeDir(), "kodhe.core");
			if (!((await F.checkFileExists(kodecore)))) {
				try {
					fsExtra = (await global.UserContext.require("fs-extra", "7.0.1"));
					await Fs.async.mkdir(kodecore);
					await Fs.async.mkdir(Path.join(kodecore, "node_modules"));
					await Fs.async.copyFile(Path.join(opath, "package.json"), Path.join(kodecore, "package.json"));
					await Fs.async.copyFile(Path.join(opath, "index.js"), Path.join(kodecore, "index.js"));
					tarfile = Path.join(opath, "kodhe.core.tar.gz");
					tar = (await global.UserContext.require("tar", "4.4.8"));
					st = fs.createReadStream(tarfile);
					task = new core.VW.Task();
					er = function(e) {
						task.exception = e;
						return task.finish();
					};
					tst = tar.x({
						C: Path.join(kodecore, "node_modules")
					});
					st.pipe(tst);
					st.on("error", er);
					tst.on("error", er);
					tst.on("finish", task.finish.bind(task));
					await task;
					// delete README.md from Modules
					mods = (await Fs.async.readdir(Path.join(kodecore, "node_modules")));
					for (i = 0, len = mods.length; i < len; i++) {
						mod = mods[i];
						files1 = (await Fs.async.readdir(Path.join(kodecore, "node_modules", mod)));
						files1 = files1.filter(function(a) {
							if (a !== "." && (a !== "..")) {
								return a.toUpperCase().indexOf("LICENSE") >= 0 || a.startsWith(".") || a.toUpperCase().endsWith(".MD") || a.toLowerCase() === "test";
							}
						});
						for (j = 0, len1 = files1.length; j < len1; j++) {
							file = files1[j];
							todel = Path.join(kodecore, "node_modules", mod, file);
							await fsExtra.remove(todel);
						}
					}
				} catch (error1) {
					e = error1;
					if (fsExtra) {
						await fsExtra.remove(kodecore);
					}
					throw e;
				}
			}
			body.module = null;
			body.path = kodecore;
		}
		if (body.module === "kodhe.core.web" || body.path === "kodhe.core.web") {
			body.module = null;
			body.path = Path.join(__dirname, "..", "..", "browser", "kodhe.core.web");
		}
		if (body.module === "kowix" || body.path === "kowix") {
			body.module = null;
			body.path = Path.join(__dirname, "..", "..", "browser", "kowix");
		}
		if (body.path) {
			opath = body.path;
			parts = body.path.split("/");
			if (!body.site) {
				if (!parts[0]) {
					parts.shift();
				}
				body.site = parts[0];
				parts.shift();
			}
			body.path = '';
			// get site
			allconfig = global.getSitesConfig();
			for (k = 0, len2 = allconfig.length; k < len2; k++) {
				site = allconfig[k];
				if (site.id === body.site) {
					body.path = global.context.server.config.resolvePath("./" + parts.join("/"), site);
					break;
				}
			}
			if (!body.path) {
				throw global.Exception.create(`${opath} cannot be resolved`).putCode("INVALID_PATH");
			}
			path = body.path
			// MD5 cache 
			fname =  crypto.createHash("md5").update(body.path).digest('hex') + ".js"
			//fname = body.path.replace(/\//ig, '_') + ".js"
			file = Path.join(cache, fname);
			if (!body.force) {
				if ((await F.checkFileExists(file))) {
					if (body.edition) {
						ast = (await Fs.async.readFile(file + ".ast", 'utf8'));
						ast = JSON.parse(ast);
						if (ast.edition !== body.edition) {
							body.force = true;
						}
					} else {
						stat1 = (await Fs.async.stat(file));
						if (Date.now() - stat1.mtime.getTime() > 60000) {
							// force rebuild
							body.force1 = true;
						}
					}
				} else {
					body.force = true;
				}
			}
			if (body.force1) {
				if (!((await F.checkFileExists(path)))) {
					throw global.Exception.create(`Failed requiring ${path}`);
				}
				files1 = Path.join(path, "package.json");
				main = "index.js";
				if ((await F.checkFileExists(files1))) {
					code = (await Fs.async.readFile(files1, 'utf8'));
					code = JSON.parse(code);
					main = code.main;
					if (!((await F.checkFileExists(Path.join(path, code.main))))) {
						main += ".js";
					}
				}
				files1 = Path.join(path, main);
				stat = (await Fs.async.stat(files1));
				if (stat.mtime.getTime() > stat1.mtime.getTime()) {
					body.force = true;
				} else {
					// maybe validate all other files?
					void 0;
				}
			}
		} else {
			modn = body.module.replace(/\//ig, "_");
			fname = modn + "@" + body.version + ".js";
			if (body.file) {
				fname = modn + "@" + body.version + "-" + body.file.replace(/\//ig, '_');
			}
			file = Path.join(cache, fname);
			if (!body.force) {
				body.force = !((await F.checkFileExists(file)));
			}
		}
		if (body.force) {
			if (body.module) {
				try {
					//await global.UserContext.require body.module, body.version, "____inexistent"
					// yes requiring now via kowix.registry class
					/*
					modbrowser= Path.join(global.UserContext.getHomeDir(), "mods.browser")
					if not await F.checkFileExists(modbrowser)
						await Fs.async.mkdir modbrowser

					Registry= await global.userFunction("packager/registry").invoke({})
					reg= new Registry
						folder: modbrowser
						includeversioninoutput: yes
						ignoredependencies: yes
					result= await reg.download(body.module, body.version, null, "internal")
					path= result.folder
					*/
					path = (await global.UserContext.resolve(body.module + "@" + body.version));
				} catch (error1) {
					e = error1;
					throw e;
				}
				if (!((await F.checkFileExists(path)))) {
					throw global.Exception.create(`Failed getting module: ${body.module}@${body.version}`);
				}
				if (body.file) {
					path = Path.join(path, body.file);
				} else {
					files1 = Path.join(path, "package.json");
					if ((await F.checkFileExists(files1))) {
						files1 = (await Fs.async.readFile(files1, 'utf8'));
						files1 = JSON.parse(files1);
						files1.kowix = ((ref = files1.kowix) != null ? ref.main : void 0) || files1.browser || files1.unpkg;
						if (files1.kowix) {
							path = Path.join(path, files1.kowix);
						}
					}
				}
			}
			// compile
			ast = (await global.userFunction("packager/compile").invoke({
				path: path,
				module: body.modulename || body.module
			}));
			ast.edition = body.edition;
			await Fs.async.writeFile(file, ast.code);
			delete ast.code;
			await Fs.async.writeFile(file + ".ast", JSON.stringify(ast));
			file_min = file + ".min.js";
			if ((await F.checkFileExists(file_min))) {
				await Fs.async.unlink(file_min);
			}
		}
		if (body.minify) {
			file_min = file + ".min.js";
			if (body.returncode) {
				if (!ast) {
					ast = (await Fs.async.readFile(file + ".ast", 'utf8'));
					ast = JSON.parse(ast);
				}
			} else if (!ast) {
				ast = {};
			}
			if (!((await F.checkFileExists(file_min)))) {
				// generate file
				if (!(ast != null ? ast.code : void 0)) {
					ast.code = (await Fs.async.readFile(file, "utf8"));
				}
			} else {
				if (body.returncode) {
					ast.mincode = (await Fs.async.readFile(file_min, 'utf8'));
				} else {
					ast.mincode = true;
				}
			}
			if (!ast.mincode) {
				Uglify = (await global.UserContext.require("uglify-js", "3.4.9"));
				result = Uglify.minify(ast.code);
				if (/*,
					sourceMap:
url: 'inline'*/result.error) {
					throw global.Exception.create(result.error.message).putCode(result.error.code);
				}
				ast.mincode = result.code;
				await Fs.async.writeFile(file_min, ast.mincode);
			}
			// return the mincode
			ast.code = ast.mincode;
			file = file_min;
			fname = Path.basename(file);
		}
		if (body.returncode) {
			if (!ast) {
				ast = (await Fs.async.readFile(file + ".ast", 'utf8'));
				ast = JSON.parse(ast);
			}
			if (!ast.code) {
				ast.code = (await Fs.async.readFile(file, 'utf8'));
			}
			return ast;
		} else {
			serv = KawixHttp.staticServe(cache);
			global.context.request.url = `/${fname}`;
			return (await serv(global.context));
		}
	};
	if (body.getmethod) {
		return F1;
	} else {
		return (await F1());
	}
};

module.exports = function(global) {
	F.global = global;
	return F;
};
