import fs from 'fs'
import Path from 'path'
var _start= async function(file){
	if(!process.env.DHS_CONFIG){
		process.env.DHS_CONFIG= file
	}

	KModule.addVirtualFile("kowix", {
		redirect: module.realPathResolve(''),
		isdirectory: true
	})
	
	/*var f= '../@kawix/dhs/start.js'
	
	if(__filename.startsWith("http:") || __filename.startsWith("https:")){
		await KModule.import(f)
	}else{
		f= Path.join(__dirname, f)
		if(!fs.existsSync(f)){
			await KModule.import("https://kwx.kodhe.com/x/v/0.3.25/dhs/start.js")
		}else{
			await KModule.import(f)
		}
	}*/

	if (kawix.KModule._virtualfile['/virtual/@kawix/dhs']){
		await KModule.import("/virtual/@kawix/dhs/start")
	}else{
		await KModule.import("https://kwx.kodhe.com/x/v/0.3.25/dhs/start.js")
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
