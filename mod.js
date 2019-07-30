import fs from 'fs'
import Path from 'path'
export var configfile = __dirname + "/app.config"

var _start= async function(file, onlyserver){
	
	await loadDhs(file)
	await KModule.import("/virtual/@kawix/dhs/src/mod")	

	var Service = (await KModule.import("/virtual/@kawix/dhs/src/service")).default
	var Config = (await KModule.import("/virtual/@kawix/dhs/src/config")).default
	
	var service = new Service(new Config(process.env.DHS_CONFIG))
	if(!onlyserver)
		await service.start()
	return service 
	
}


export var getDhsServer = async function () {
	var file = module.realPathResolve('main.config')
	return await _start(file, true)
}
export var getStandaloneDhsServer = async function () {
	var file = module.realPathResolve('main.config.standalone')
	return await _start(file, true)
}



export async function loadDhs(file){

	if(file){
		if (!process.env.DHS_CONFIG) {
			process.env.DHS_CONFIG = file
		}
	}

	KModule.addVirtualFile("kowix", {
		redirect: module.realPathResolve(''),
		isdirectory: true
	})

	if (!kawix.KModule._virtualfile['/virtual/@kawix/dhs']) {
		if (fs.existsSync(Path.join(__dirname, "..", "@kawix", "dhs"))) {
			kawix.KModule.addVirtualFile("@kawix/std", {
				redirect: Path.join(__dirname, "..", "@kawix", "std"),
				isdirectory: true
			})
			kawix.KModule.addVirtualFile("@kawix/dhs", {
				redirect: Path.join(__dirname, "..", "@kawix", "dhs"),
				isdirectory: true
			})
			kawix.KModule.addVirtualFile("@kawix/gix", {
				redirect: Path.join(__dirname, "..", "@kawix", "gix"),
				isdirectory: true
			})
			kawix.KModule.addVirtualFile("@kawix/kivi", {
				redirect: Path.join(__dirname, "..", "@kawix", "kivi"),
				isdirectory: true
			})


		} else {
			var version = global.kawix.version
			await KModule.import("https://kwx.kodhe.com/x/v/" + version + "/std/dist/stdlib")
			await KModule.import("https://kwx.kodhe.com/x/v/" + version + "/kivi/dist/kivi")
			await KModule.import("https://kwx.kodhe.com/x/v/" + version + "/gix/dist/gix")
			await KModule.import("https://kwx.kodhe.com/x/v/" + version + "/dhs/dist/dhs")

		}
	}
}
export var start= async function(){
	var file= module.realPathResolve('main.config')
	return await _start(file)
}
export var startStandalone= async function(){
	var file= module.realPathResolve('main.config.standalone')
	return await _start(file)
}
export var startClustered= start
