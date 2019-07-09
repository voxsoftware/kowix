var F, Fs, Packager;
declare var core 
import Path from 'path'
Fs = core.System.IO.Fs

Packager = class Packager {
	private dir: string 
	
	constructor(dir) {
		this.dir = dir;
	}

	async compileFile(file, stat, proposedFile) {
		/*
		try
			cmp= await ctx.userFunction("script.compile").invoke
				file: file2
			code1= cmp.code
		catch e
			throw F.global.Exception.create("Failed compiling #{file2}: #{e.message}").putCode(e.code)
		*/
		var cmp, code, code1, compilable, contents, ctx, ext, file2, json, ref, ref1, returnonnocompilation;
		returnonnocompilation = !!proposedFile;
		file2 = file;
		if (file.endsWith(".symlnk")) {
			contents = (await Fs.async.readFile(file2, 'utf8'));
			if (contents.startsWith("vox-core/")) {
				contents = contents.split("/");
				contents.shift();
				contents = contents.join("/");
				file2 = Path.join(core.VW.path, contents);
			} else if (contents.startsWith("kowix/")) {
				contents = contents.split("/");
				contents.shift();
				contents = contents.join("/");
				file2 = Path.join(__dirname, "..", "..", contents);
			} else {
				file2 = Path.join(__dirname, "..", "..", "..", contents);
			}
			file = Path.join(Path.dirname(file), Path.basename(file, ".symlnk") + Path.extname(file2));
			contents = '';
		}
		if (!proposedFile) {
			proposedFile = file;
		}
		compilable = false;
		for (ext in kwcore.KModule.Module.extensions) {
			if (file2.endsWith(ext)) {
				compilable = ext;
				break;
			}
		}
		if (compilable && (compilable !== ".json")) {
			cmp = (await kwcore.KModule.Module.compile(file2, {
				injectImport: false
			}));
			code1 = cmp.code;
			//if  not file.endsWith ".js"
			ctx = F.global; //await F.global.getSiteContext("kowix")
			code1 = [""].concat(code1.split("\n")).join("\n\t\t\t");
			//else
			//	code1= await Fs.async.readFile(file2, 'utf8')
			if (code1.trim().startsWith("#")) {
				code1 = '//' + code1.trim();
			}
			code = `(function(options){\n	var module,require,__dirname,__filename,global,exports\n\n	if(typeof Buffer == "undefined" && options.buffer){\n\n		var Buffer= options.buffer.Buffer\n	}\n	if(typeof process == "undefined" && options.process){\n\n		var process= options.process\n	}\n	if(options.eval1){\n		eval(options.eval1)\n		options= undefined\n	}\n\n	// ${file2}\n	${code1}\n})`;
		} else if (file2.endsWith(".json")) {
			// remove spaces
			json = JSON.parse((await Fs.async.readFile(file2, 'utf8')));
			contents = JSON.stringify(json);
		} else {
			if (returnonnocompilation) {
				return {
					buffer: (await Fs.async.readFile(file2))
				};
			}
			contents = (await Fs.async.readFile(file2, 'utf8'));
		}
		this.code = (ref = this.code) != null ? ref : [];
		if (code) {
			this.code.push(code);
		}
		stat.isdirectory = false;
		stat.isfile = true;
		stat.contents = contents != null ? contents : "";
		stat.filename = "/" + this.packagejson.name + "/" + Path.relative(this.dir, proposedFile);
		this.fileinfo = (ref1 = this.fileinfo) != null ? ref1 : [];
		return this.fileinfo.push(stat);
	}

	async compile(dir, stat) {
		var code, content, data, dirname, file, files, i, len, modulecode, packagejson, ref, ref1, ref2, ufile;
		if (!dir) {
			dir = this.dir;
			packagejson = Path.join(dir, "package.json");
			if (Fs.sync.exists(packagejson)) {
				content = (await Fs.async.readFile(packagejson, 'utf8'));
				this.packagejson = JSON.parse(content);
			} else {
				this.packagejson = {
					name: this.module || ('module-' + F.global.uniqid())
				};
			}
		}
		dirname = "/" + this.packagejson.name + "/" + Path.relative(this.dir, dir);
		stat = stat != null ? stat : (await Fs.async.stat(dir));
		stat.isdirectory = true;
		stat.isfile = false;
		stat.filename = dirname;
		this.fileinfo = (ref = this.fileinfo) != null ? ref : [];
		this.compiled = this.compiled || {};
		if (stat.isDirectory()) {
			this.fileinfo.push(stat);
			files = (await Fs.async.readdir(dir));
			for (i = 0, len = files.length; i < len; i++) {
				file = files[i];
				ufile = Path.join(dir, file);
				if (!this.compiled[ufile]) {
					if (!ufile.startsWith(".")) {
						stat = (await Fs.async.stat(ufile));
						if (stat.isDirectory()) {
							await this.compile(ufile, stat);
						} else {
							await this.compileFile(ufile, stat);
						}
					}
					this.compiled[ufile] = true;
				}
			}
		} else {
			stat.filename = "/" + this.packagejson.name;
			this.fileinfo.push(stat);
			stat = Object.assign({}, stat);
			ufile = dir;
			data = (await this.compileFile(ufile, stat, Path.join(dir, "index" + Path.extname(ufile))));
			if (data.buffer) {
				return data;
			}
		}
		modulecode = '';
		if (((ref1 = this.packagejson.kowix) != null ? ref1.moduleloader : void 0) === "include") {
			throw F.global.Exception.create("Module loader code not available").putCode("NOT_AVAILABLE");
		}
		/*
		cmp= await F.global.userFunction("script.compile").invoke
			file: Path.join(__dirname,"..","..","browser","module.es6")
		modulecode= cmp.code
		*/
		if (dir === this.dir) {
			this.code = (ref2 = this.code) != null ? ref2 : [];
			code = `\n(function(){\n	${modulecode}\n})();\n\n(function(){\n\n	var moduleFiles= ${JSON.stringify(this.fileinfo)}\n	var funcs= [\n		${this.code.join(",\n")}\n	]\n	var n\n	for(var i=0;i<moduleFiles.length;i++){\n		if(moduleFiles[i].isfile && !moduleFiles[i].contents)\n			moduleFiles[i].contentFunc= funcs.shift()\n		n= moduleFiles[i].filename\n		if(n.endsWith('/'))\n			n= n.substring(0,n.length-1)\n		window.___Module.vfsSystem[n]=moduleFiles[i]\n	}\n	window.___module.require('/' + ${JSON.stringify(this.packagejson.name)})\n\n})()`;
			return code;
		}
	}

}

F = function() {
	return Packager
}

module.exports = function(global) {
	F.global = global
	return F
}
