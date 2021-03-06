
import fs from '/virtual/@kawix/std/fs/mod'
import Path from 'path'
import Os from 'os'
import { Writable } from 'stream'

var names = ["isBlockDevice", "isCharacterDevice", "isDirectory", "isFIFO", ""]
class Bundle {

    _path: string 
    _filenames: any 
    _fcount:number 
    options:any 
    _extensions:any 
    _stream: Writable


	/** Bundle a folder of files, like one unique file*/
	constructor(path, options:any = {}) {
		this._path = Path.normalize(path)
		this._filenames = {}
		this._fcount = 0

		this.options = options
		if (options.ignoreIrrelevantFiles == undefined) {
			options.ignoreIrrelevantFiles = true
		}
		this._extensions = {}
		for (var ext in kawix.KModule.Module.extensions) {
			this._extensions[ext] = true
		}
	}



	writeTo(stream) {
		this._stream = stream
		this._stream.on("error", (e) => {
			this._lastwriteError = e
		})
		return this
	}

	writeToFile(file) {
		return this.writeTo(fs.createWriteStream(file))
	}

	get jsExtension(){
		return this.options.jsExtension
	}
	set jsExtension(val){
		this.options.jsExtension= val 
	}

	get virtualName() {
		if (!this.options.virtualName) {
			this.options.virtualName = Path.basename(this._path)
		}
		return this.options.virtualName
	}

	set virtualName(name) {
		return this.options.virtualName = name
	}

	get packageJsonSupport() {
		return this.options.packageJsonSupport
	}
	set packageJsonSupport(value) {
		return this.options.packageJsonSupport = value
	}

	get filenameMap() {
		return this.options.filenamemap
	}
	set filenameMap(value) {
		return this.options.filenamemap = value
	}

	get mainScript() {
		return this.options.mainScript
	}

	set mainScript(value) {
		return this.options.mainScript = value
	}

	get transpile() {
		return this.options.transpile
	}

	set transpile(value) {
		return this.options.transpile = value
	}

	get disableTranspile() {
		return this.options.disableTranspile
	}

	set disableTranspile(value) {
		return this.options.disableTranspile = value
	}

	get translation() {
		return this.options.translation
	}
	set translation(value) {
		return this.options.translation = value
	}

	get ignoreIrrelevantFiles() {
		return this.options.ignoreIrrelevantFiles
	}
	set ignoreIrrelevantFiles(value) {
		return this.options.ignoreIrrelevantFiles = value
	}
	get filter() {
		return this.options.filter
	}
	set filter(value) {
		return this.options.filter = value
	}
	get profile() {
		return this.options.profile
	}
	set profile(value) {
		return this.options.profile = value
	}

	get minify() {
		return this.options.minify
	}
	set minify(value) {
		return this.options.minify = value
	}

	
	

	async bundle(path?) {

		if (!this._header) {
			this._stream.write("(function(global, context){\n\t")
			this._stream.write("var fileData=[]\n")
			this._stream.write("var cacheData=[]\n")
			this._header = true
		}
		await this._create(path)

		// load virtual paths into KModule
		var str = null, fnames, id2
		if(Os.platform() == "win32"){
			fnames= {}
			for(var id in this._filenames){
				id2 = id.replace(/\\/g, '/')
				fnames[id2]= this._filenames[id]
			}
			this._filenames= fnames 
		}
		
		str = JSON.stringify(this._filenames, null, '\t')
		this._stream.write("\n\tvar filenames=" + str)

		var packageJson = this.packageJsonSupport
		if (packageJson) {
			packageJson = `
					if(id == "package.json"){
						pjson= fileData[i]()
						pjson= JSON.parse(pjson.content)
					}
			`
		}

		else {

			if (this.mainScript) {
				packageJson = `
				main= ${JSON.stringify(this.mainScript)}
				main= "${this.virtualName}" + (main ? ("/"+main) : "")
				`
			}
			else {
				packageJson = `
						pe= id.split(".")
						if(fileData.length == 1 || (pe.length == 2 && pe[0] == "mod")){
							// mark as default
							main= "${this.virtualName}" + (id ? ("/"+id) : "")
						}
				`
			}
		}

		var virtualAdd = `
		var mod1= function(KModule, exports){
			var i=0,main, pe, filecount, pjson
			for(var id in filenames){
				i = filenames[id]
				if(typeof module == "object"){
					${packageJson}
				}
				KModule.addVirtualFile("${this.virtualName}" + (id ? ("/"+id) : ""), fileData[i])
			}
			if(pjson){
				main= pjson.main
				if(!main){
					main= "index.js"
				}
				if(main.substring(0,2)=="./"){
					main= main.substring(2)
				}
				main= "${this.virtualName}" + (main ? ("/" + main) : "")
			}
			if(main){
				return KModule.import("/virtual/" + main)
			}
			if(typeof module == "object"){
				return exports
			}
			return {}
		}

		var transpiledExtensions= ${JSON.stringify(this._extensions)}


		/*
		if(typeof module == "object"){
			module.exports.__kawi= mod1
		}*/
		if(global.Buffer){
			context.Buffer= global.Buffer
		}

		if(typeof window == "object"){
			if(window.KModuleLoader){
				for(var id in transpiledExtensions){
					if(!window.KModuleLoader.extensions[id])
						window.KModuleLoader.extensions[id]= null
				}
				context.Buffer= global.___kmodule___basic.mod.buffer.Buffer
				context.module= window.KModuleLoader.generateModule()
				context.module.exports= mod1(window.KModuleLoader, context.module.exports)
				return mod1
			}
		}
		if(typeof KModule == "object"){
			for(var id in transpiledExtensions){
				if(!KModule.extensions[id])
					KModule.extensions[id]= null
			}
			module.exports= mod1(KModule, module.exports)
		}
		return mod1
		`


		this._stream.write(virtualAdd)
		this._stream.write("\n})(typeof global == 'object' ? global : window, {})")
		// this allow not reprocessed in kawix transpiler
		this._stream.write(kwcore.NextJavascript.transpiledLineComment)
		if (this._lastwriteError)
			throw this._lastwriteError

		// FINISH
		this._stream.end()
		return new Promise((resolve, reject) => {
			this._stream.once("finish", () => {
				if (this._lastwriteError)
					return reject(this._lastwriteError)
				return resolve()
			})
		})

	}



	close() {
		if (this._stream)
			this._stream.close()
	}







	async _create(path) {
		if (!path)
			path = this._path


		var stat = await fs.statAsync(path)
		var rep, files, str, fullfile, continue1, rev, comp, ast, comp1, transoptions, translated

		continue1 = true
		rev = Path.relative(this._path, path)

		if (this.ignoreIrrelevantFiles && path != this._path) {
			comp = rev.split(Path.sep)
			comp = comp[comp.length - 1]
			comp1 = Path.basename(comp).toUpperCase()

			if (rev == "bin") {
				continue1 = false
			}
			else if (comp) {

				if (comp1 == "TEST" || comp1 == "TESTS" || comp1 == "EXAMPLE" || comp1 == "EXAMPLES" || comp1.endsWith(".MD") || comp1.indexOf("yarn.lock")>=0) {
					continue1 = false
				}
				else if (comp.toUpperCase() == "LICENSE") {
					continue1 = false
				}
				else if (comp.startsWith(".")) {
					continue1 = false
				}
			}
		}
		if (continue1 && comp && comp.toUpperCase() == ".GIT") {
			continue1 = false
		}
		if (continue1 && typeof this.filter == "function") {
			continue1 = this.filter(rev)
		}


		if (continue1) {
			if (stat.isFile()) {
				rep = {}
				rep.stat = {
					mtime: stat.mtime,
					mtimeMs: stat.mtimeMs,
					atime: stat.atime,
					atimeMs: stat.atimeMs,
				}

				rep.stat.isfile = true
				rep.filename = this._getfilename(rev)



				// maybe binary? because what about opening binary files
				if (this.translation) {
					translated = this.translation[rev] || this.translation["./" + rev]
					if (translated) {
						rep.translated = "./" + Path.join(Path.relative(Path.dirname(rev), Path.dirname(translated)), Path.basename(translated))


						if (this.disableTranspile) {
							rep.content = "module.exports= require(" + JSON.stringify(rep.translated) + ")"
						} else {
							rep.content = "exports.kawixPreload= function(){return module.exports=  KModule.import(" + JSON.stringify(rep.translated) + ",{parent:KModule})}"
						}
						rep.transpiled = true
					}
				}

				if (!rep.transpiled) {
					rep.content = await fs.readFileAsync(path)
					if (this.options.disableTranspile) {
						rep.transpiled = true
					}
					else if (this.options.transpile !== false) {
						if (!rep.filename.endsWith(".json")) {
							transoptions = {
								comments: false
							}

							/*
							if(this.profile == "browser"){
								transoptions.sourceMaps= "inline"
							}*/

							for (var ext in kawix.KModule.Module.extensions) {
								if (rep.filename.endsWith(ext)) {
									ast = await kawix.KModule.Module.compile(path, {
										source: rep.content.toString(),
										force: 1,
										mtime: Date.now(),
										transpilerOptions: transoptions
									})
									rep.content = ast.code
									rep.compiled = true 
									rep.extension = ext 
									
									
									break
								}
							}
						}
						rep.transpiled = true
					}
				}


				if (Buffer.isBuffer(rep.content)) {
					
					let fn = ''
					if((rep.transpiled && rep.extension) || rep.filename.endsWith(".js")){

						rep.content = rep.content.toString()
						if(this.minify){
							let Minify = await import("npm://minify@4.1.3")
							rep.content = await Minify.js(rep.content)
						}

						/*
						if(rep.filename.endsWith(".json")){
							fn = `item.content= ${JSON.stringify(JSON.stringify(JSON.parse(rep.content)))};`
						}else{
							fn = "item.content= (function(){\n" + rep.content.toString() + "\n}).toString().substring(12);item.content = item.content.substring(0,item.content.length-2);"
						}
						delete rep.content
						*/

					}else{
						rep.content = rep.content.toString('binary')
						fn = `item.content= context.Buffer.from(item.content,'binary');`
					}
					str = JSON.stringify(rep)
					this._stream.write(`\n\tfileData.push(function(){ var item= cacheData[${this._fcount}]; if(!item){ item= cacheData[${this._fcount}]= ${str}; ${fn} } return item; })`)
				}
				else {
					str = JSON.stringify(rep)
					this._stream.write(`\n\tfileData.push(function(){ if(!cacheData[${this._fcount}]) cacheData[${this._fcount}]= ${str}; return cacheData[${this._fcount}]; })`)
				}


				if(this.jsExtension && rep.compiled){
					rep.filename = Path.join(Path.dirname(rep.filename),Path.basename(rep.filename, rep.extension) + ".js")
					rep.filename = rep.filename.replace(/\\/g, '/')
				}
				this._filenames[rep.filename] = this._fcount
				this._fcount++

				if (this._lastwriteError)
					throw this._lastwriteError

			}
			else if (stat.isDirectory()) {

				rep = {}
				rep.stat = {
					mtime: stat.mtime,
					mtimeMs: stat.mtimeMs,
					atime: stat.atime,
					atimeMs: stat.atimeMs,
				}
				rep.stat.isdirectory = true
				rep.filename = this._getfilename(rev)
				str = JSON.stringify(rep, null, '\t')
				this._stream.write(`\n\tfileData.push(function(){return ${str}})`)
				this._filenames[rep.filename] = this._fcount
				this._fcount++

				files = await fs.readdirAsync(path)
				for (var i = 0; i < files.length; i++) {
					if (files[i] == "." || files[i] == "..")
						continue
					fullfile = Path.join(path, files[i])
					await this._create(fullfile)
				}
			}
		}

	}
	_getfilename(rev){
		if (this.options.filenamemap) {
			if (typeof this.options.filenamemap == "function") {
				return this.options.filenamemap(rev)
			} else {
				return this.options.filenamemap[rev] || rev
			}
		} else {
			return rev
		}
	}
}

export default Bundle
export var kawixDynamic = {
	time: 45000
}
