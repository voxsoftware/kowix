import fs from 'https://kwx.kodhe.com/x/v/0.3.18/std/fs/mod.js'
import Path from 'path'
import Os from 'os'
import axios from 'npm://axios@^0.18.0'
import "https://kwx.kodhe.com/x/v/0.3.18/std/package/kwa/register.js"
import Url from 'url'
class Program

	@deferred: ()->
		def= {}
		def.promise= new Promise (a,b)->
			def.resolve = a
			def.reject  = b
		def

	@main: ()->
		try
			home= Os.homedir()
			path= Path.join(home, "Kowix")

			if not fs.existsSync(path)
				await fs.mkdirAsync(path)

			host= "https://stage1.kodhe.com"
			if __filename.startsWith("http:") or __filename.startsWith("https:")
				uri= Url.parse(__filename)
				host= uri.protocol + "//" + uri.host


			console.info(" > Descargando kowix.kwa desde #{host}")
			response= await axios
				method:'get'
				url: "#{host}/site/kowix/api/function/c/tarball"
				responseType: 'stream'

			out= Path.join path, "kowix.kwa"
			out1= Path.join path, "kowix.kwa.0"
			def= @deferred()
			stream= fs.createWriteStream out1
			stream.on "finish", def.resolve
			stream.on "error", def.reject
			response.data.on "error", def.reject
			response.data.pipe stream
			await def.promise

			if fs.existsSync(out)
				await fs.unlinkAsync(out)
			await fs.renameAsync(out1,out)
			await `import(out)`

			console.info(" > Kowix descargado, ahora puede descargar proyectos a la carpeta:  ", path)

			out= Path.join path, "start.clustered.kwe"
			await fs.writeFileAsync out, """
			import reg from 'https://kwx.kodhe.com/x/v/0.4.0/std/package/kwa/register.js'
			import Path from 'path'
			init()
			async function init(){
			        var mod= await import("./kowix.kwa")
			        var kwa_file= mod["kawix.app"].original
			        process.env.PROJECTS_DIR= Path.normalize(Path.join(kwa_file, ".."))
			        mod.start()
			}
			"""

			out= Path.join path, "start.kwe"
			await fs.writeFileAsync out, """
			import reg from 'https://kwx.kodhe.com/x/v/0.4.0/std/package/kwa/register.js'
			import Path from 'path'
			init()
			async function init(){
			        var mod= await import("./kowix.kwa")
			        var kwa_file= mod["kawix.app"].original
			        process.env.PROJECTS_DIR= Path.normalize(Path.join(kwa_file, ".."))
			        mod.startStandalone()
			}
			"""

			console.info(" > Finalizado. Ahora usted puede ejecutar: kwcore \"#{out}\"")

			out= Path.join path, "start"
			sock= Path.join path, "kowix.socket"
			await fs.writeFileAsync out, """
			#!/usr/bin/env bash
			kwcore "#{host}/site/kowix/code/v/0/start.hidden.js" listen "#{sock}" kwcore "#{out}.clustered.js" &

			"""
			await fs.chmodAsync(out,"0755")

			out= Path.join path, "attach"
			sock= Path.join path, "kowix.socket"
			await fs.writeFileAsync out, """
			#!/usr/bin/env bash
			kwcore "#{host}/site/kowix/code/v/0/start.hidden.js" connect "#{sock}"

			"""
			await fs.chmodAsync(out,"0755")


		catch e
			console.error "Error descargando el proyecto: ", e.stack

Program.main()
