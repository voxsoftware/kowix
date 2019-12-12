
import crypto from 'crypto'
import * as Types from '../../src/typing'
import {Registry} from '/virtual/@kawix/std/package/registry.yarn'
import Bundler from '_bundler'
import fs from '/virtual/@kawix/std/fs/mod'
import * as async from '/virtual/@kawix/std/util/async'
import Path from 'path'
import Zlib from 'zlib'

export async function kowixInvoke(local: Types.SiteContext, body) {

	let sha1 = body.sha1 
	
	if(!sha1){
		let cid = body.module
		if(body.dist){
			cid += "-" + body.dist 
		}
		
		if(body.include){
			cid += "-" + body.include 
		}
		if(body.unpkg){
			cid += ">" + body.unpkg 
		}
		if(body.minify){
			cid += ".min"
		}

		sha1 = crypto.createHash('sha1').update(cid).digest('hex')
	}

	let caching = Path.join(local.UserContext.getHomeDir(), "bundles")
	if(!fs.existsSync(caching)){
		fs.mkdirSync(caching)
	}
	let file = Path.join(caching, sha1)
	
	if(!fs.existsSync(file)){
		if(!local.publicContext.memShared){
			local.publicContext.memShared = await local.userFunction("SharedMemory/channel").invoke({
				site: local.IdSite
			})			
		}
		let memShared = local.publicContext.memShared 
		while(await memShared.get("static.bundle.module")){
			await async.sleep(20)
		}

		await memShared.set("static.bundle.module", true)
		try{
			if(!fs.existsSync(file)){
				let req = new Registry()	
				let moduledesc = await req.resolve(body.module)
				
				// WORKAROUND, BUG ON MODULEDESC.FOLDER
				let mainParts = 1
				if(moduledesc.packageJson){
					let umain = moduledesc.packageJson.main || "index.js"
					if(umain.startsWith("./")) umain = umain.substring(2)
					mainParts = umain.split("/").length
				}
				moduledesc.folder = moduledesc.main 
				for(let i=0;i<mainParts;i++) moduledesc.folder = Path.dirname(moduledesc.folder)
				

				moduledesc.folder = Path.normalize(Path.join(moduledesc.folder,"..", ".."))
				//let mainjs = Path.join(moduledesc.folder,"index.js")
				let realmain = Path.join(moduledesc.folder, moduledesc.main || ("node_modules/" + body.module + "/index.js"))
				let bundlefile = '', translations
				let pkgjson = Path.join(moduledesc.folder, "node_modules", moduledesc.name, "package.json")
				let unpkg = body.unpkg
				if (fs.existsSync(pkgjson)) {
					try{
						let content = await fs.readFileAsync(pkgjson, 'utf8')
						let data = JSON.parse(content)
						if (typeof data.browser == "string"){
							bundlefile = data.browser
						}else if(typeof data.browser == "object" && data.browser){
							translations = data.browser
						}
						if(!unpkg)
							unpkg = data.unpkg
					}catch(e){}
				}

				//await fs.writeFileAsync(mainjs, "module.exports = require(__dirname + '/"+Path.relative(moduledesc.folder, moduledesc.main)+"')")

				if(typeof unpkg == "string" && !body.include){
					if(unpkg.startsWith("./")){
						unpkg = unpkg.substring(2)
					}
					body.include = unpkg
				}

				if(body.include){
					body.include = body.include.split("|")
				}

				
				let bundler = new Bundler(bundlefile || moduledesc.folder)
				bundler.disableTranspile = true
				bundler.profile = "browser"
				bundler.packageJsonSupport = true
				let dist = "node_modules/" + moduledesc.name + "/dist"
				let prefix = "node_modules/" + moduledesc.name + "/"
				let preprefix = "node_modules/" + moduledesc.name 
				bundler.filter = function (file) {

					if(body.include){
						if(!file) return true 
						for(let i=0;i<body.include.length;i++){
							let item = prefix + body.include[i]
							let parts = item.split("/")
							let ritem = parts.slice(0,file.split("/").length).join("/")
							console.info(ritem,file)
							if(file == ritem){
								return true 
							}
						}
						return false 
					}

					if(file == "package.json") return false 
					/*
					if(body.dist !== 1 && file.startsWith(dist)){
						return false 
					}*/
					return !file.endsWith(".d.ts") && !file.endsWith(".map") 
				}
				bundler.translation = translations
				bundler.minify = body.minify
				bundler.filenameMap = function(name){
					
					if(unpkg){
						if(name == prefix + unpkg) return "index.js"
					}

					let a = "node_modules/" + moduledesc.name + "/"
					let c = "node_modules/" + moduledesc.name 
					let b = "node_modules\\" + moduledesc.name + "\\"
					if(name.startsWith(a) || name.startsWith(b) || name == c){
						name = name.substring(a.length )
					}
					
					return name 
				}
				bundler.virtualName = moduledesc.name
				await bundler.writeToFile(file + ".temp").bundle()

				/*
				let st = fs.createWriteStream(file, {
					flags:'a'
				})

				let def = new async.Deferred<void>()
				st.on("error",def.reject)
				st.on("finish", def.resolve)
				st.end(`
		;KModuleLoader.addVirtualFile("${moduledesc.name}", {
			redirect: "/virtual/_n_${moduledesc.name}__modules/node_modules/${moduledesc.name}",
			isdirectory: true
		})
				`)
				await def.promise
				*/
				await fs.renameAsync(file+".temp", file)
			}
			
			
		}catch(e){
			throw e 
		}
		finally{
			await memShared.set("static.bundle.module", false)
		}
	}


	let text = (await fs.readFileAsync(file, 'utf8'))
	if(body.internal){
		return {
			sha1,
			text
		}
	}

	local.context.reply.header("content-type", "application/json;charset=utf8")
	local.context.reply.header("cache-control",`public,max-age=${3600*24*365}`)
	local.context.reply.header("sha1", sha1)
	local.context.reply.header("etag", sha1)
	local.context.reply.header("e-tag", sha1)
	
	let enc = local.context.request.headers["accept-encoding"]
	if(enc && enc.indexOf("gzip") >= 0){
		local.context.reply.header("content-encoding", "gzip")
		let buf = Zlib.gzipSync(text)
		local.context.reply.send(buf)
	}else{
		local.context.reply.send(text)
	}

}