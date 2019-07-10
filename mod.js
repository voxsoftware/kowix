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
	
	
	if (!kawix.KModule._virtualfile['/virtual/@kawix/dhs']){
		if(fs.existsSync(Path.join(__dirname, "..", "@kawix", "dhs"))){
			kawix.KModule.addVirtualFile("@kawix/std", {
				redirect: Path.join(__dirname, "..", "@kawix","std"),
				isdirectory: true
			})
			kawix.KModule.addVirtualFile("@kawix/dhs", {
				redirect: Path.join(__dirname, "..", "@kawix","dhs"),
				isdirectory: true
			})
			kawix.KModule.addVirtualFile("@kawix/gix", {
				redirect: Path.join(__dirname, "..", "@kawix","gix"),
				isdirectory: true
			})
			kawix.KModule.addVirtualFile("@kawix/kivi", {
				redirect: Path.join(__dirname, "..", "@kawix","kivi"),
				isdirectory: true
			})

			
		}else{
			await KModule.import("https://kwx.kodhe.com/x/v/0.5.5/std/dist/stdlib")
			await KModule.import("https://kwx.kodhe.com/x/v/0.5.5/kivi/dist/kivi")
			await KModule.import("https://kwx.kodhe.com/x/v/0.5.5/gix/dist/gix")
			await KModule.import("https://kwx.kodhe.com/x/v/0.5.5/dhs/dist/dhs")
			
		}
	}
	await KModule.import("/virtual/@kawix/dhs/start")
	
		
	
	
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
