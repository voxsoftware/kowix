import 'npm://axios@0.19.0'
import crypto from 'crypto'

import * as Types from '../../src/typing'
import Path from 'path'
import fs from '/virtual/@kawix/std/fs/mod'
import * as async from '/virtual/@kawix/std/util/async'
import Zlib from 'zlib'
import {create} from '/virtual/@kawix/dhs/src/dynamic/bundle'

export async function kowixInvoke(local:Types.SiteContext,body){
	
	// group many js request as one file
	let modules = body.script
	let sc = [], data, content=[], fcontent = []
	let sha1 =  body.sha1 , pre=''
	
	// Just now minify not supported
	let minify = body.minify 
	body.minify = false 

	if(!sha1){
		if(typeof modules == "string"){
			modules = modules.split("|").map(function(a){
				if(a.startsWith("site:")){
					let p = a.split(":")
					let r= {
						site: p[1],
						file: p[2],
						id: process.env.DHS_DEV == "1" ? "now" : (p[3] || "0")
					}
					if(r.id == "now"){
						r.id = Date.now().toString()
					}
					return r
				}
				let p = a.split(":")
				return {
					module: p[0],
					unpkg: p[1],
					include: p[2]
				}
			})
		}
		let shat = JSON.stringify(modules)
		if(body.append){
			shat += body.append
		}
		if(body.kwcore){
			pre = await fs.readFileAsync(Path.join(Path.dirname(kawix.__file), "crossplatform", "dist","main.js"),"utf8")
			fcontent.push("#kwcore")
			shat = "kwcore|" + shat
		}
		
		sha1 = "group." + crypto.createHash('sha1').update(shat).digest('hex')
		if(body.minify){
			sha1 += ".min"
		}
	}

	let caching = Path.join(local.UserContext.getHomeDir(), "bundles")
	if(!fs.existsSync(caching)){
		fs.mkdirSync(caching)
	}
	let file = Path.join(caching, sha1)
	

	if(!fs.existsSync(file)){
		content.push(pre)
		if(!local.publicContext.memShared){
			local.publicContext.memShared = await local.userFunction("SharedMemory/channel").invoke({
				site: local.IdSite
			})			
		}
		let memShared = local.publicContext.memShared 
		while(await memShared.get("static.bundle.group")){
			await async.sleep(20)
		}

		await memShared.set("static.bundle.group", true)
		try{
			if(!fs.existsSync(file)){
				
				for(let i=0;i<modules.length;i++){
					modules[i].internal = true 
					let mod =modules[i]
					//mod.minify = body.minify

					if(!mod.site){
						data = await local.userFunction("packager/bundle").invoke(mod)
						fcontent.push(data.sha1)
					}else{
						mod.name = mod.site 
						mod.type = "bundle"
						mod.profile = "browser"
						mod.ctx = local.context
						data = await create(mod)
						
						if(data.path){
							data.text = await fs.readFileAsync(data.path)
							fcontent.push("#plain " + data.text.toString('base64'))
							data.text = data.text.toString('utf8')
						}

						
					}
					//sc.push(data.sha1)
					content.push(data.text)
					
				}
				if(body.append){
					content.push(body.append)
					fcontent.push("#plain " + Buffer.from(body.append).toString('base64'))
				}
				if(body.minify){
					let Minify = await import("npm://minify@4.1.3")
					let text = content.join("\n;\n\n")
					text = await Minify.js(text)
					await fs.writeFileAsync(file + ".temp", text)
					content = [text]
				}
				else{
					await fs.writeFileAsync(file + ".temp", fcontent.join("\n"))
				}
				await fs.renameAsync(file+".temp", file)
			}

			
		}catch(e){
			throw e 
		}
		finally{
			await memShared.set("static.bundle.group", false)
		}
	}


	
	let text = ''
	
	if(content.length){
		text = content.join("\n;\n\n")
	}
	else{
		let text0= await fs.readFileAsync(file, 'utf8')
		if(sha1.endsWith(".min")){
			text = text0 
		}
		else{
			let shas = text0.split("\n"), append = false, lines = '' 			
			for(let sha1 of shas){
				if(sha1 == "#kwcore"){
					content.push(await fs.readFileAsync(Path.join(Path.dirname(kawix.__file), "crossplatform", "dist","main.js"),"utf8"))
				}
				else if(sha1.startsWith("#append")){
					append = true 
				}
				else if(sha1.startsWith("#plain")){
					content.push(Buffer.from(sha1.substring(6).trim(),'base64').toString())
				}
				else if(append){
					lines += sha1 + "\n"
				}
				else{
					if(sha1){
						let info = await local.userFunction("packager/bundle").invoke({
							sha1,
							internal: true
						})
						content.push(info.text)
					}
				}
			}
			if(lines) content.push(lines)
			text = content.join("\n;\n\n")
		}
	}



	if(body.internal){
		return {
			sha1,
			text
		}
	}


	local.context.reply.header("content-type", "application/json;charset=utf8")
	local.context.reply.header("cache-control",`public,max-age=${3600*24*365}`)
	local.context.reply.header("sha1", sha1)
	local.context.reply.header("etag", "W/" + sha1)
	local.context.reply.header("e-tag", "W/" + sha1)
	
	let enc = local.context.request.headers["accept-encoding"]
	if(enc && enc.indexOf("gzip") >= 0){
		local.context.reply.header("content-encoding", "gzip")
		let buf = Zlib.gzipSync(text)
		local.context.reply.send(buf)
	}else{
		local.context.reply.send(text)
	}

}