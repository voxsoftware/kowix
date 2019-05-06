
import Semver from 'semver'
import fs from 'fs'
import tar from 'tar'
import fsu from 'fs-extra'
import Crypto from 'crypto'
import Path from 'path'
import Child from 'child_process'
Fs= core.System.IO.Fs

class Registry
	constructor: (options)->
		@url= options?.url or "https://registry.npmjs.org"
		@options= options ? {}
		@installed=[]

	_remove: (path)->
		task= new core.VW.Task()
		fsu.remove path, (e)->
			task.exception= e if e
			task.finish()

		return task

	getCached: (pack,version,idSite)->
		return Registry.getCached(pack,version,idSite)

	@getCached: (pack, version, idSite)->
		if pack is "all"
			return Registry.cached

		idSite= idSite or ''
		idSite += ">" if idSite
		return if not Registry.cached
		cache= Registry.cached[idSite + pack]
		if cache
			return cache[version] if cache[version]
			for ver, result of cache
				return result if Semver.satisfies(ver, version)


	npmDownloadBase: (pack, version)->
		package2= pack.replace /\//g, '%2F'
		package3= package2.replace /\./g, '__'

		# try  to get module
		out= @options.folder
		p1= Path.join(out,"node_modules",pack,"package.json")
		if await F.checkFileExists p1
			p1= await Fs.async.readFile(p1, 'utf8')
			p1= JSON.parse p1
			if Semver.satisfies p1.version, version
				return
					version: p1.version
					installed: no
					cached: yes
					folder: Path.join(out,"node_modules",pack)

		# first download NPM
		npm= Registry.getCached("npm", "6.8.x","kowix")



		# download the package and apply an install inside package
		# this is more effective for hot loading
		# than a normal npm install
		options1= Object.assign({},@options)
		options1.folder= Path.join(options1.folder,"node_modules")
		options1.ignoredependencies= yes
		options1.includeversioninoutput= yes
		options1.nolock= yes



		time= Date.now()
		needredo= no
		requiring= await F.memShared.get "modrequiring.#{package3}"
		#console.info("requiring:",requiring)
		while requiring and (Date.now() - time < 30000)
			await core.VW.Task.sleep 10
			needredo= yes
			requiring= await F.memShared.get "modrequiring.#{package3}"
		if requiring
			throw F.global.Exception.create("Failed getting exclusive access for requiring").putCode("LOCK_FAILED")

		if needredo
			return await @npmDownloadBase(pack,version)
		await F.memShared.set "modrequiring.#{package3}", yes

		try


			p1= Path.join(out, "package.json")
			if not (await F.checkFileExists(p1))
				await Fs.async.writeFile p1, JSON.stringify(
					name: 'kowix'
				)

			if not npm
				fol= Path.join(F.global.UserContext.getHomeDir(), "npm-mod")
				if not (await F.checkFileExists(fol))
					await Fs.async.mkdir fol
				reg= new Registry({
					folder: fol,
					idSite: 'kowix'
					nolock: yes
				})
				vw.info("Downloading npm")
				npm= await @download("npm","6.8.x","kowix","internal")


			path= Path.join(npm.folder, "bin","npm-cli.js")

			reg= new Registry(options1)
			result1= await reg.downloadBase(pack, version)
			#console.info(result1)

			task= new core.VW.Task()
			p= Child.spawn process.argv[0], [path, "install", "--only=prod", "--unsafe-perm"],
				cwd: result1.folder
			err= []
			p.stdout.on "data", (data)->
				console.warn(data.toString())

			p.stderr.on "data", (data)->

				if data
					d= data.toString()
					if d.startsWith("ERR!")
						err.push d
					process.stderr.write data


			p.on "error", (er)->
				task.exception = er
				task.finish()

			p.on "exit", task.finish.bind(task)
			await task


			if err.length
				throw F.global.Exception.create("Failed installing module #{pack}@#{version}.Error info: #{err.join("  ")}").putCode("NPM_ERR")

			await Fs.async.rename(result1.folder, Path.join(out,"node_modules",pack))

			p1= Path.join(out,"node_modules",pack,"package.json")
			content= await Fs.async.readFile(p1,'utf8')
			content= JSON.parse(content)



			if Semver.satisfies content.version, version
				return
					folder: Path.join(out,"node_modules",pack)
					installed: yes
					version: content.version

			throw F.global.Exception.create("Failed installing module #{pack}@#{version}")
		catch e
			throw e
		finally

			await F.memShared.set "modrequiring.#{package3}", no



	npmDownload: (pack, version,idSite)->
		return @download pack,version,idSite,'npm'

	download: (pack, version, idSite, type)->
		if not type
			type= F.config.requiremode or "download"
		if type is "download"
			@options.folder= Path.join(@options.folder,"node_modules")

		item= if type is "npm" then "npmDownloadBase" else "downloadBase"
		@type= type
		result= await @[item](pack, version)
		return if not result

		c= Registry.cached= Registry.cached or {}
		f= Registry.cachedf= Registry.cachedf or {}
		s= idSite or this.options.idSite or ''
		s+= ">" if s

		tocache= (data)->
			name= data.name or pack
			op= c[s+name]
			if not op
				op= c[s+name]= {}

			if not op[data.version]

				#old= f[result.folder]
				#delete op[old.version] if old

				op[data.version]= Object.assign({}, data)
				delete op[data.version] .dependencies

				f[data.folder]= data


			if data.dependencies
				for dep in data.dependencies
					await tocache(dep)
			else
				# readdir node_modules
				mods= Path.join(data.folder,"node_modules")
				#console.info("reading module", mods)
				if await F.checkFileExists(mods)
					mod1= await Fs.async.readdir mods
					#console.info("reading modules", mod1)
					for file in mod1
						try
							pjson= Path.join(mods, file, "package.json")
							if await F.checkFileExists pjson
								pjson= await Fs.async.readFile(pjson,'utf8')
								p= JSON.parse pjson
								newarg=
									folder:Path.join(mods, file)
									cached: yes
									version: p.version
									name: file
								await tocache(newarg)
		await tocache(result)
		result

	loadDependencies: (deps, bundle, parent )->
		if not @main
			@main= parent
		deps= deps or []
		items=[]
		for id,dep of deps
			if bundle?.indexOf?(id) >= 0
				continue
			items.push await @downloadBase(id,dep, parent)
		return items

	downloadBase: (package1, version, parent)->
		version= version or "latest"
		package2= package1.replace /\//g, '%2F'
		package3= package2.replace /\./g, '__'
		url= "#{@url}/#{package2}"
		cachedKowix= Path.join(__dirname, "..", "..", "include.packages")
		options= Object.assign(@options, {})

		if @main
			options.folder= Path.join(@main.folder, "node_modules")


		if not await F.checkFileExists(options.folder)
			await Fs.async.mkdir(options.folder)

		installed= @installed[package1]
		if version == "*" and installed
			return
				cached: yes
				processed: no
				downloaded: no
				name: package1
				folder: installed.folder
				version: installed.version



		downloadCache= F.downloadCache

		folder= Path.join options.folder, package1
		cache_= Path.join(downloadCache, "#{package2}_VALL")
		cache2_= Path.join cachedKowix, "#{package2}_VALL"
		if await F.checkFileExists cache2_
			version2= await Fs.async.readFile cache2_, 'utf8'


		if version == "*"
			if version2 and Semver.satisfies(version2, version)
				version= version2
			else if await F.checkFileExists cache_
				version= await Fs.async.readFile cache_, 'utf8'


		if version2 and Semver.satisfies(version2, version)
			downloadCache= cachedKowix
		else
			version2= null




		checkPJSON= (folderpackagejson)=>

			if await F.checkFileExists(folderpackagejson)
				packagejson= await Fs.async.readFile(folderpackagejson, 'utf8')
				packagejson= JSON.parse packagejson

				if Semver.satisfies packagejson.version, realstr or version
					arg=
						folder: folder
						download: no
						cached: yes
						name: package1
						versionChecked: no
						version: packagejson.version

					if not options.ignoredependencies
						arg.dependencies= await @loadDependencies(packagejson.dependencies, packagejson.bundleDependencies, arg)
					return arg

		cid= F.global.uniqid()
		foldertemp= Path.join options.folder, package2 + ".#{cid}.temp"
		folderpackagejson= Path.join options.folder, package1 , "package.json"
		arg= await checkPJSON folderpackagejson
		return arg if arg



		if not options.nolock
			time= Date.now()
			needredo= no
			requiring= await F.memShared.get "modrequiring.#{package3}"
			while requiring and (Date.now() - time < 30000)
				await core.VW.Task.sleep 10
				needredo= yes
				requiring= await F.memShared.get "modrequiring.#{package3}"
			if requiring
				throw F.global.Exception.create("Failed getting exclusive access for requiring").putCode("LOCK_FAILED")

			if needredo
				return await @downloadBase(package1,version,parent)


			await F.memShared.set "modrequiring.#{package3}", yes
		try
			# cached? of course
			reload= yes
			cache= Path.join(downloadCache, "#{package2}.data.json")

			if cachedKowix is downloadCache
				reload= no
			else if await F.checkFileExists(cache)
				stat= await Fs.async.stat cache
				if Date.now() - stat.mtime.getTime() < (10*360000)
					reload= no

			if reload
				req= new core.VW.Http.Request(url)
				try
					response= await req.getResponseAsync()
					if response.statusCode is 404
						throw F.global.Exception.create("Module #{package1}@#{version} not found").putCode("NOT_FOUND")
					if response.statusCode > 299
						throw F.global.Exception.create("Failed loading module #{package1}@#{version}.").putCode("LOAD_FAILED")
					if typeof response.body is "string"
						response.body= JSON.parse response.body

				catch e
					throw e
				finally
					delete req.innerRequest.callback if req.innerRequest

				data= response.body
			else
				data= await Fs.async.readFile cache,'utf8'
				data= JSON.parse data

			if not data.name
				throw F.global.Exception.create("Failed getting package info").putCode("FAILED_REQUIRE")

			if response
				await Fs.async.writeFile cache, JSON.stringify(data)


			if version2
				realversion= version2
			else
				versions= Object.keys(data.versions)
				versions.sort (a,b) -> if a > b then -1 else (if a < b then 1 else 0)
				if data["dist-tags"]?[version]
					realversion= data["dist-tags"][version]

				else
					# compare
					for iversion in versions
						if iversion is version or Semver.satisfies(iversion, version)
							realversion= iversion
							break



			if not installed
				# get the current folder ..
				if await F.checkFileExists folderpackagejson
					try
						packagejson= await Fs.async.readFile folderpackagejson,'utf8'
						packagejson= JSON.parse packagejson
					catch e
						packagejson= null

					if packagejson
						installed=
							folder: folder
							version: packagejson.version
							name: package1
							cached: yes



			if installed and realversion

				# install two versions of same module
				if not Semver.satisfies(realversion, installed.version)
					if parent
						options= Object.assign({}, options)
						options.folder = Path.join( parent.folder,  "node_modules")
						if not await F.checkFileExists(options.folder)
							await Fs.async.mkdir(options.folder)

						folder= Path.join(options.folder,package1)
						folderpackagejson= Path.join(folder,"package.json")
						arg= await checkPJSON folderpackagejson
						return arg if arg


					#return
					#	folder: installed.folder
					#	cached: yes
					#	downloaded:no
					#	name: package1
					#	version: installed.version

			realstr= realversion
			if options.includeversioninoutput
				folder += "@" + realversion
				folderpackagejson= Path.join folder, "package.json"
				arg= await checkPJSON folderpackagejson
				return arg if arg



			realversion= data.versions[realversion]
			if not realversion
				throw F.global.Exception.create("Module #{package1}@#{version} not found").putCode("NOT_FOUND")




			# go to version
			cache= Path.join(downloadCache, "#{package2}_V_#{realstr}.tar.gz")

			currentiv= null
			if await F.checkFileExists cache_
				currentiv= await Fs.async.readFile cache_, 'utf8'

			saveiv= no
			if currentiv
				if Semver.gt realstr, currentiv
					saveiv= yes
			else
				saveiv= yes


			result=
				folder: folder
				name: package1
			result.cached= yes
			if not (await F.checkFileExists cache)


				# make cache
				result.cached= no
				result.downloaded= yes


				data= realversion

				# download tgz
				dist= data.dist.tarball
				if not dist
					throw F.global.Exception.create("Failed to get a tarball for module #{package1}@#{version}")
				task= new core.VW.Task()
				er= (e)->
					task.exception= e
					task.finish()
				stout= fs.createWriteStream(cache)

				req= new core.VW.Http.Request dist
				req.analizeResponse= no
				req.beginGetResponse()

				req.innerRequest.on "error" , er
				stout.on "error", er
				stout.on "finish", task.finish.bind(task)

				req.innerRequest.pipe stout
				await task

				try
					# ensure checksum is good
					hash = Crypto.createHash('sha1')
					task= new core.VW.Task()
					inst= fs.createReadStream(cache)
					inst.on "error", er
					inst.on "data", (d)->
						hash.update d
					inst.on "end", task.finish.bind(task)
					await task
					sha1= hash.digest('hex')
					if sha1 isnt data.dist.shasum
						throw global.Exception.create("Shasum comprobation failed #{sha1}. Expected: #{data.dist.shasum}").putCode("SHASUM_FAILED")

				catch e
					try
						await Fs.async.unlink cache
					throw e
				finally





			# copy to folder

			await Fs.async.mkdir foldertemp

			try
				task= new core.VW.Task()
				st= tar.x
					C: foldertemp
				inst= fs.createReadStream cache
				er= (e)->
					task.exception= e
					task.finish()
				inst.on "error", er
				st.on "error", er
				inst.pipe st
				st.on "finish", task.finish.bind(task)
				await task


				# copy folder
				parts= package1.split "/"

				c= ""
				cpath= null
				if parts.length > 1
					parts.pop()
					for part in parts
						if not c
							c= part
						else
							c= Path.join c, part
						cpath= Path.join(@options.folder, c)
						if not (await F.checkFileExists(cpath))
							await Fs.async.mkdir cpath

				files= await Fs.async.readdir(foldertemp)
				if await F.checkFileExists(folder)
					await @_remove folder

				await Fs.async.rename(Path.join(foldertemp,files[0]), folder)
				@installed[package1]=
					version: realstr
					folder: folder
					globalfolder: options.folder

			catch e
				throw e
			finally
				try
					await @_remove foldertemp

			result.version= realstr
			if not options.ignoredependencies
				packagejson= await Fs.async.readFile(folderpackagejson, 'utf8')
				packagejson= JSON.parse packagejson

				result.dependencies = await @loadDependencies packagejson.dependencies,packagejson.bundleDependencies, result

			if saveiv
				await Fs.async.writeFile cache_, realstr

			return result

		catch e
			throw e
		finally
			if not options.nolock
				await F.memShared.set "modrequiring.#{package3}", no



Config= null
F= (body)->

	F.checkFileExists= (path)->
		return new Promise (resolve,reject)->
			fs.access path, fs.F_OK, (error)->
				resolve not error

	F.downloadCache= Path.join F.global.UserContext.getHomeDir(), "mod.require.cache"
	if not (await F.checkFileExists(F.downloadCache))
		await Fs.async.mkdir F.downloadCache


	#if not Config
	#	Config=
	F.config= await F.global.context.server.config.read()


	# with a share
	if not F.global.publicContext.memShared
		F.global.publicContext.memShared= F.memShared= await F.global.userFunction("SharedMemory/channel").invoke
			site: 'kowix'
	else
		F.memShared= F.global.publicContext.memShared


	if body.action and body.arguments
		r= new Registry body
		return await r[body.action] body.arguments...


	if body.package and body.folder
		r= new Registry body
		return await r.download body.package, body.version



	return Registry


module.exports= (global)->
	F.global= global
	F
