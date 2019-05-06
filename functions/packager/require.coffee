import Path from 'path'
import fs from 'fs'
import KawixHttp from '/virtual/@kawix/std/http/mod.js'
Fs= core.System.IO.Fs



F= (body)->
	global= F.global


	# this functions takes a npm module and compile to browser
	# using this packager

	F1= (allowAbsolute)->
		F.checkFileExists= (path)->
			return new Promise (resolve,reject)->
				fs.access path, fs.F_OK, (error)->
					resolve not error


		cache= Path.join global.UserContext.getHomeDir(), "cache"
		if not (await F.checkFileExists(cache))
			await Fs.async.mkdir cache

		###
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
		###
		if body.module == "kodhe.core" or body.path == "kodhe.core"

			opath=Path.join __dirname, "..", "..", "browser", "kodhe.core"
			kodecore= Path.join global.UserContext.getHomeDir(), "kodhe.core"
			if not (await F.checkFileExists(kodecore))
				try

					fsExtra= await global.UserContext.require("fs-extra", "7.0.1")

					await Fs.async.mkdir kodecore
					await Fs.async.mkdir Path.join(kodecore, "node_modules")
					await Fs.async.copyFile Path.join(opath,"package.json"), Path.join(kodecore,"package.json")
					await Fs.async.copyFile Path.join(opath,"index.js"), Path.join(kodecore,"index.js")

					tarfile= Path.join opath, "kodhe.core.tar.gz"
					tar= await global.UserContext.require("tar","4.4.8")
					st= fs.createReadStream tarfile


					task= new core.VW.Task()
					er= (e)->
						task.exception= e
						task.finish()
					tst= tar.x
						C: Path.join(kodecore, "node_modules")
					st.pipe tst
					st.on "error", er
					tst.on "error", er
					tst.on "finish", task.finish.bind(task)
					await task

					# delete README.md from Modules
					mods= await Fs.async.readdir(Path.join(kodecore, "node_modules") )
					for mod in mods
						files1= await Fs.async.readdir(Path.join(kodecore, "node_modules", mod))
						files1= files1.filter (a)->
							if a isnt "." and (a isnt "..")
								return a.toUpperCase().indexOf("LICENSE") >= 0 or a.startsWith(".") or a.toUpperCase().endsWith(".MD") or a.toLowerCase() is "test"

						for file in files1
							todel= Path.join(kodecore, "node_modules", mod, file)
							await fsExtra.remove todel

				catch e
					if fsExtra
						await fsExtra.remove kodecore

					throw e

			body.module= null
			body.path= kodecore

		if body.module == "kodhe.core.web" or body.path == "kodhe.core.web"
			body.module= null
			body.path= Path.join __dirname, "..", "..", "browser", "kodhe.core.web"

		if body.module == "kowix" or body.path == "kowix"
			body.module= null
			body.path= Path.join __dirname, "..", "..", "browser", "kowix"




		if body.path


			###
			if body.site
				body.path= Path.join(body.site, body.path )

			if Path.isAbsolute body.path

				# no allow compiling outside from projects directory
				gr1= Path.normalize(Path.join(__dirname, "..", "..", ".."))
				gr2= Path.relative(gr1, body.path)

				if not allowAbsolute and gr2.startsWith("../")
					gr2= Path.relative(global.UserContext.getHomeDir(), body.path)
					if gr2.startsWith "/"
						throw global.Exception.create("Not allowed to use absolute path #{body.path}")
				path= body.path

			else
				path= Path.join __dirname, "..", "..", "..", body.path
			###
			opath= body.path
			parts= body.path.split "/"
			if not body.site
				parts.shift() if not parts[0]
				body.site= parts[0]
				parts.shift()

			body.path= ''
			# get site
			allconfig = global.getSitesConfig()
			for site in allconfig
				if site.id is body.site
					body.path = global.context.server.config.resolvePath("./" + parts.join("/"), site)
					break

			if not body.path
				throw global.Exception.create("#{opath} cannot be resolved").putCode("INVALID_PATH")

			path= body.path
			fname= body.path.replace(/\//ig,'_') + ".js"
			file= Path.join cache, fname
			if not body.force
				if await F.checkFileExists file
					if body.edition
						ast= await Fs.async.readFile file+".ast", 'utf8'
						ast= JSON.parse(ast)
						if ast.edition != body.edition
							body.force= yes
					else
						stat1= await Fs.async.stat file
						if Date.now() - stat1.mtime.getTime() > 60000
							# force rebuild
							body.force1= yes
				else
					body.force= yes




			if body.force1
				if not (await F.checkFileExists(path))
					throw global.Exception.create("Failed requiring #{path}")

				files1= Path.join path, "package.json"
				main= "index.js"
				if await F.checkFileExists files1
					code= await Fs.async.readFile files1, 'utf8'
					code= JSON.parse( code )
					main= code.main
					if not (await F.checkFileExists(Path.join(path,code.main )))
						main += ".js"

				files1= Path.join path, main
				stat= await Fs.async.stat files1
				if stat.mtime.getTime() > stat1.mtime.getTime()
					body.force = yes
				else
					# maybe validate all other files?
					undefined


		else
			modn= body.module.replace /\//ig,"_"
			fname= modn+"@"+body.version + ".js"
			if body.file
				fname= modn+"@"+body.version + "-" + body.file.replace(/\//ig,'_')

			file= Path.join cache, fname
			if not body.force
				body.force= not (await F.checkFileExists file )



		if body.force
			if body.module
				try
					#await global.UserContext.require body.module, body.version, "____inexistent"
					# yes requiring now via kowix.registry class

					###
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
					###

					path= await global.UserContext.resolve(body.module + "@" + body.version)



				catch e
					throw e


				if not (await F.checkFileExists path )
					throw global.Exception.create("Failed getting module: #{body.module}@#{body.version}")

				if body.file
					path= Path.join(path, body.file)
				else
					files1= Path.join path, "package.json"
					if await F.checkFileExists files1
						files1= await Fs.async.readFile files1, 'utf8'
						files1= JSON.parse files1
						files1.kowix= files1.kowix?.main or files1.browser or files1.unpkg
						if files1.kowix
							path= Path.join path, files1.kowix


			# compile
			ast= await global.userFunction("packager/compile").invoke
				path: path
				module: body.modulename or body.module
			ast.edition= body.edition
			await Fs.async.writeFile file, ast.code

			delete ast.code
			await Fs.async.writeFile file+".ast", JSON.stringify(ast)
			file_min= file + ".min.js"
			if await F.checkFileExists file_min
				await Fs.async.unlink file_min


		if body.minify
			file_min= file + ".min.js"
			if body.returncode
				if not ast
					ast= await Fs.async.readFile file+".ast", 'utf8'
					ast= JSON.parse ast
			else if not ast
				ast={}

			if not (await F.checkFileExists file_min)
				# generate file
				if not ast?.code
					ast.code= await Fs.async.readFile file, "utf8"
			else
				if body.returncode
					ast.mincode= await Fs.async.readFile file_min, 'utf8'
				else
					ast.mincode= yes

			if not ast.mincode
				Uglify= await global.UserContext.require("uglify-js","3.4.9")
				result= Uglify.minify ast.code###,
					sourceMap:
						url: 'inline'###

				if result.error
					throw global.Exception.create(result.error.message).putCode(result.error.code)

				ast.mincode= result.code
				await Fs.async.writeFile file_min, ast.mincode

			# return the mincode
			ast.code= ast.mincode
			file= file_min
			fname= Path.basename file



		if body.returncode
			if not ast
				ast= await Fs.async.readFile file+".ast", 'utf8'
				ast= JSON.parse(ast)

			if not ast.code
				ast.code= await Fs.async.readFile file, 'utf8'
			return ast
		else

			###
			serv= new core.VW.Http.StaticServe.Server()
			serv.addPath cache
			global.context.request.url= "/#{fname}"
			await serv.handle global.context
			body.stopdefault= yes
			task= new core.VW.Task()
			global.context.response.on "finish", task.finish.bind task
			await task
			###

			serv= KawixHttp.staticServe( cache )
			global.context.request.url= "/#{fname}"
			await serv global.context



	if body.getmethod
		return F1
	else
		return await F1()


module.exports= (global)->
	F.global= global
	F
