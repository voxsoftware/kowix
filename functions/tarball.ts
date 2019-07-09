var deferred;

import Path from 'path'
import Tar from '/virtual/@kawix/std/compression/tar.js'
import Glob from '/virtual/@kawix/dhs/glob/mod.js'
import fs from '/virtual/@kawix/std/fs/mod.js'
import KawixHttp from '/virtual/@kawix/std/http/mod.js'

deferred = function() {
	var def
	def = {}
	def.promise = new Promise(function(a, b) {
		def.resolve = a
		return def.reject = b
	})
	return def
};

export var createTarball = async function(local, body = {}) {
	var cfiles, def, dir, dist, e, file, files, i, len, max, name, nfiles, out, ref, ref1, reply, serv, stat, sw, tarball, value;
	try {
		dir = Path.normalize((ref = body != null ? body.dirname : void 0) != null ? ref : Path.join(__dirname, ".."));
		reply = local.context.reply;
		def = deferred();
		Glob(dir + "/**", function(err, files) {
			if (err) {
				return def.reject(err);
			}
			return def.resolve(files);
		});
		files = (await def.promise);
		max = -1;
		nfiles = [];
		for (i = 0, len = files.length; i < len; i++) {
			file = files[i];
			stat = (await fs.lstatAsync(file));
			value = stat.mtimeMs;
			if (value > max) {
				max = value;
			}
			if (!stat.isDirectory()) {
				if ((body != null ? typeof body.filter === "function" ? body.filter(file) : void 0 : void 0) === false) {
					continue;
				} else if (Path.relative(dir, file).startsWith(".bundles")) {
					continue;
				}
				nfiles.push(file);
			}
		}
		files = nfiles;
		name = (ref1 = body != null ? body.name : void 0) != null ? ref1 : "kowix.kwa";
		dist = Path.join(dir, ".dist");
		if (!fs.existsSync(dist)) {
			await fs.mkdirAsync(dist);
		}
		out = Path.join(dist, max + ".kwa");
		if (!fs.existsSync(out)) {
			cfiles = files.map(function(a) {
				return Path.relative(dir, a);
			}).filter(function(a) {
				return a && (!a.startsWith(".dist"));
			});
			tarball = Tar.c({
				gzip: true,
				follow: true,
				C: dir
			}, cfiles);
			try {
				// save
				local.publicContext.tarballCreating = true;
				sw = fs.createWriteStream(out);
				def = deferred();
				tarball.on("error", def.reject);
				sw.on("finish", def.resolve);
				tarball.pipe(sw);
				await def.promise;
			} catch (error) {
				e = error;
				if (fs.existsSync(out)) {
					// delete file
					await fs.unlinkAsync(out);
				}
				throw e;
			} finally {
				local.publicContext.tarballCreating = true;
			}
		}
		if (body.getinfo) {
			return {
				modified: max,
				file: `${max}.kwa`
			}
		}
		local.context.response.setHeader("content-disposition", `attachment;filename=${name}`)
		serv = KawixHttp.staticServe(dist)
		local.context.request.url = `/${max}.kwa`
		return (await serv(local.context))
	} catch (error) {
		e = error
		throw e
	} finally {
		if (fs.existsSync(out)) {
			await fs.unlinkAsync(out)
		}
	}
};

export var kowixInvoke = function(local, body) {
	if (body) {
		delete body.dirname;
	}
	return createTarball(local, body);
};
