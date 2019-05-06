import Path from 'path'
import Tar from 'https://kwx.kodhe.com/x/v/0.3.25/std/compression/tar.js'
import Glob from 'https://kwx.kodhe.com/x/v/0.3.25/dhs/glob/mod.js'
import fs from 'https://kwx.kodhe.com/x/v/0.3.25/std/fs/mod.js'
import KawixHttp from 'https://kwx.kodhe.com/x/v/0.3.25/std/http/mod.js'

deferred= ()->
	def= {}
	def.promise= new Promise (a,b)->
		def.resolve=a
		def.reject =b
	def

export createTarball= (body={})->

	dir= Path.normalize(body.dirname ? Path.join(__dirname, ".."))
	dist= body.outputfolder ? Path.join(dir,".dist")
	

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

	if body?.getmodified
		return max

	name= body?.name ? "kowix.kwa"
	
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
		
	
	kw = body.distfolder ? "kawix-modules/kowix"
	pack= await import(body.package ? "../package.json")
	f= Path.join(__dirname, "..", "..", kw)
	if not fs.existsSync(f)
		await fs.mkdirAsync(f)

	f= Path.join(f, "info.json")
	json= {}
	if fs.existsSync(f)
		json= await import(f)	
	json.versions= json.versions || {}
	version= json.versions[pack.version] 
	if not version 
		version= json.versions[pack.version] = {}
		version.created= Date.now() 
	
	stat = await fs.statAsync(out)
	version.size= stat.size 
	version.filename= "./" + Path.basename(out)
	version.uploadid = Path.basename(out,".kwa")
	dest= Path.join(__dirname, "..", "..", kw, Path.basename(out))
	if body?.after
		await body?.after(out, dest, version)
	else 
		await fs.copyFileAsync(out, dest)
	await fs.writeFileAsync(f, JSON.stringify(json,null,'\t'))


	



	
	console.info 
		modified: max
		file: "#{max}.kwa"



export default (body)->
	delete body.dirname if body
	return createTarball(body)
