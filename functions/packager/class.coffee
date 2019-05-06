import Path from 'path'
Fs= core.System.IO.Fs

class Packager
	constructor: (dir)->
		@dir= dir

	compileFile: (file, stat, proposedFile)->

		returnonnocompilation= not not proposedFile


		file2= file
		if file.endsWith ".symlnk"
			contents= await Fs.async.readFile(file2, 'utf8')
			if contents.startsWith "vox-core/"
				contents= contents.split("/")
				contents.shift()
				contents= contents.join("/")
				file2= Path.join(core.VW.path,  contents)
			else if contents.startsWith "kowix/"
				contents= contents.split("/")
				contents.shift()
				contents= contents.join("/")
				file2= Path.join(__dirname, "..", "..", contents)
			else
				file2= Path.join(__dirname, "..", "..", "..", contents)


			file=  Path.join(Path.dirname(file), Path.basename(file,".symlnk")+ Path.extname(file2))
			contents= ''

		if not proposedFile
			proposedFile= file

		compilable= no
		for ext of kwcore.KModule.Module.extensions
			if file2.endsWith(ext)
				compilable= ext
				break


		if compilable and (compilable isnt ".json")

			cmp = await kwcore.KModule.Module.compile file2,
				injectImport: no
			code1= cmp.code


			#if  not file.endsWith ".js"
			ctx= F.global #await F.global.getSiteContext("kowix")
			###
			try
				cmp= await ctx.userFunction("script.compile").invoke
					file: file2
				code1= cmp.code
			catch e
				throw F.global.Exception.create("Failed compiling #{file2}: #{e.message}").putCode(e.code)
			###



			code1= [""].concat(code1.split("\n")).join("\n\t\t\t")

			#else
			#	code1= await Fs.async.readFile(file2, 'utf8')


			if code1.trim().startsWith("#")
				code1= '//' + code1.trim()

			code = """
			(function(options){
				var module,require,__dirname,__filename,global,exports

				if(typeof Buffer == "undefined" && options.buffer){

					var Buffer= options.buffer.Buffer
				}
				if(typeof process == "undefined" && options.process){

					var process= options.process
				}
				if(options.eval1){
					eval(options.eval1)
					options= undefined
				}

				// #{file2}
				#{code1}
			})
			"""
		else if file2.endsWith ".json"
			# remove spaces
			json= JSON.parse await Fs.async.readFile(file2,'utf8')
			contents= JSON.stringify json
		else
			if returnonnocompilation
				return
					buffer: await Fs.async.readFile(file2)
			contents= await Fs.async.readFile(file2,'utf8')

		@code= @code ? []
		@code.push code if code

		stat.isdirectory= no
		stat.isfile= yes
		stat.contents= contents ? ""
		stat.filename= "/" + @packagejson.name + "/"+ Path.relative(@dir, proposedFile)


		@fileinfo= @fileinfo ? []
		@fileinfo.push stat



	compile: (dir, stat)->
		if not dir
			dir= @dir
			packagejson= Path.join(dir, "package.json")
			if Fs.sync.exists packagejson
				content= await Fs.async.readFile(packagejson,'utf8')
				@packagejson= JSON.parse content

			else
				@packagejson=
					name: @module or ('module-' + F.global.uniqid())

		dirname= "/" + @packagejson.name + "/"+ Path.relative(@dir, dir)
		stat= stat ? await Fs.async.stat(dir)
		stat.isdirectory= yes
		stat.isfile= no
		stat.filename= dirname


		@fileinfo= @fileinfo ? []
		@compiled= @compiled or {}
		if stat.isDirectory()
			@fileinfo.push stat
			files= await Fs.async.readdir(dir)
			for file in files
				ufile= Path.join dir, file
				if not @compiled[ufile]
					if not ufile.startsWith "."
						stat= await Fs.async.stat(ufile)
						if stat.isDirectory()
							await this.compile(ufile, stat)
						else
							await this.compileFile(ufile, stat)
					@compiled[ufile]= yes
		else

			stat.filename= "/" + @packagejson.name
			@fileinfo.push stat
			stat= Object.assign({},stat)

			ufile= dir
			data= await this.compileFile(ufile, stat,  Path.join(dir, "index" + Path.extname(ufile))  )
			if data.buffer
				return data


		modulecode= ''
		if @packagejson.kowix?.moduleloader is "include"

			throw F.global.Exception.create("Module loader code not available").putCode("NOT_AVAILABLE")
			###
			cmp= await F.global.userFunction("script.compile").invoke
				file: Path.join(__dirname,"..","..","browser","module.es6")
			modulecode= cmp.code
			###

		if dir is @dir
			@code= @code ? []
			code= """

			(function(){
				#{modulecode}
			})();

			(function(){

				var moduleFiles= #{JSON.stringify(@fileinfo)}
				var funcs= [
					#{@code.join(",\n")}
				]
				var n
				for(var i=0;i<moduleFiles.length;i++){
					if(moduleFiles[i].isfile && !moduleFiles[i].contents)
						moduleFiles[i].contentFunc= funcs.shift()
					n= moduleFiles[i].filename
					if(n.endsWith('/'))
						n= n.substring(0,n.length-1)
					window.___Module.vfsSystem[n]=moduleFiles[i]
				}
				window.___module.require('/' + #{JSON.stringify(@packagejson.name)})

			})()
			"""
			code

F= ()-> Packager
module.exports= (global)->
	F.global= global
	F
