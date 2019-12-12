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
	var file = module.realPathResolve('main.config.cluster')
	return await _start(file, true)
}
export var getStandaloneDhsServer = async function () {
	var file = module.realPathResolve('main.config.default')
	return await _start(file, true)
}

export var getSingleProcessDhsServer = async function () {
	var file = module.realPathResolve('main.config.single')
	return await _start(file, true)
}



export async function loadDhs(file){

	if(file){
		process.env.DHS_CONFIG = file
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
			var pack = {version: global.kawix.version}

			try{
				pack = await KModule.import("https://kwx.kodhe.com/x/std/package.json")
			}catch(e){
				console.error("Failed getting last version of std. Using kawix version: ", pack.version, e.message)
			}

			await KModule.import("https://kwx.kodhe.com/x/v/" + pack.version + "/std/dist/stdlib")
			await KModule.import("https://kwx.kodhe.com/x/v/" + pack.version + "/kivi/dist/kivi")
			await KModule.import("https://kwx.kodhe.com/x/v/" + pack.version + "/gix/dist/gix")
			await KModule.import("https://kwx.kodhe.com/x/v/" + pack.version + "/dhs/dist/dhs")

		}
	}
}
export var start= async function(){
	var file= module.realPathResolve('main.config.cluster')
	return await _start(file)
}
export var startStandalone= async function(single){

	var file= ''
    if(single){
        file = module.realPathResolve('main.config.single')
    }else{
        file = module.realPathResolve('main.config.default')
    }
	return await _start(file)
}
export var startClustered= start
