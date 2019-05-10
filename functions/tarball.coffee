import Path from 'path'
import Tar from '/virtual/@kawix/std/compression/tar.js'
import Glob from '/virtual/@kawix/dhs/glob/mod.js'
import fs from '/virtual/@kawix/std/fs/mod.js'
import KawixHttp from '/virtual/@kawix/std/http/mod.js'

deferred= ()->
	def= {}
	def.promise= new Promise (a,b)->
		def.resolve=a
		def.reject =b
	def

export createTarball= (local, body={})->

	try 
		dir= Path.normalize(body?.dirname ? Path.join(__dirname, ".."))
		reply= local.context.reply

		def= deferred()
		Glob dir+"/**", (err,files)->
			return def.reject err if err
			def.resolve files
		files= await def.promise

		max= -1

		nfiles = []
		for file in files
			stat= await fs.lstatAsync(file)
			value= stat.mtimeMs
			max= value if value > max
			if not stat.isDirectory()
				if body?.filter?(file) is false
					continue
				else if Path.relative(dir, file).startsWith(".bundles")
					continue 
				nfiles.push(file)

		files= nfiles

		name= body?.name ? "kowix.kwa"
		dist= Path.join dir, ".dist"
		if not fs.existsSync(dist)
			await fs.mkdirAsync dist

		out = Path.join dist, max + ".kwa"
		if not fs.existsSync(out)
			cfiles= files.map((a)-> Path.relative(dir, a)).filter (a)-> a and (not a.startsWith(".dist"))



			tarball= Tar.c
				gzip: yes
				follow: yes
				C: dir
			, cfiles

			# save
			try

				local.publicContext.tarballCreating= yes
				sw= fs.createWriteStream(out)
				def= deferred()
				tarball.on "error", def.reject
				sw.on "finish", def.resolve
				tarball.pipe sw
				await def.promise

			catch e
				# delete file
				await fs.unlinkAsync(out) if fs.existsSync(out)
				throw e
			finally
				local.publicContext.tarballCreating= yes

		if body.getinfo
			return
				modified: max
				file: "#{max}.kwa"

		local.context.response.setHeader "content-disposition","attachment;filename=#{name}"
		serv= KawixHttp.staticServe(dist)
		local.context.request.url= "/#{max}.kwa"
		await serv(local.context)
	catch e 
		throw e 
	finally 
		if fs.existsSync(out)
			await fs.unlinkAsync(out)

export kowixInvoke= (local,body)->
	delete body.dirname if body
	return createTarball(local, body)
