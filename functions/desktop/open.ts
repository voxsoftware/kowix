import {Electron} from '/virtual/@kawix/gix/src/electron'
import * as Types from '../../src/typing'
import Path from 'path'

interface Main { (params: any) }



export async function kowixInvoke(Local: Types.SiteContext, body:any = {}){
	var c = body.context as Types.SiteContext
	if(c  == null){
		c = await Local.getSiteContext(body.IdSite, 30000)
	}


	let params = await c.userFunction("desktop/params").invoke(body.params)
	let e: Electron = Local.publicContext["gix." + c.IdSite]
    if (!e) {
        e = new Electron("kowix.gix." + c.IdSite)
        if(!await e.requestSingleInstanceLock()){
			return
		}
		Local.publicContext["gix." + c.IdSite] = e
	}
	c.publicContext["gix.instance"] = e


	if(params){
		if(params.mainWindow){
			if(!params.mainWindow.url){
				let port = Local.context.server.address.port
				let prefixes = c.getSite().globalprefixes
				if(prefixes && prefixes[0]){
					let url = `http://127.0.0.1:${port}${c.getSite().globalprefixes[0]}`
					if (params.mainWindow.mainPath !== undefined) {
						url += params.mainWindow.mainPath
					}
					params.mainWindow.url = url
				}
				else{
					throw Local.Exception.create("Failed determining main point of app")
				}
			}

			if(!params.mainWindow.icon){
				params.mainWindow.icon = Path.join(__dirname, "kawix.png")
			}


			let mainWindow
			if(!e.mainWindow){
				mainWindow = await e.bridge.dynamicInvoke(`
					var electron = arguments[0].electron
					var w= electron.mainWindow = new electron.BrowserWindow(arguments[1])
					if(arguments[1].win32args)
						w.setAppDetails(arguments[1].win32args)
					return w
				`, e.channel.plain(params.mainWindow))

				// mainWindow = await e.electron.BrowserWindow.construct(e.channel.plain(params.mainWindow))

				await mainWindow.loadURL(params.mainWindow.url)
				e.mainWindow = mainWindow

			}

	    }

		if(params.boot){
			if(typeof params.boot == "function"){
				await params.boot(e)
			}else{
				await c.userFunction(params.boot).invoke(e)
			}
		}
		else{
			if(params.defaultToolbar !== false ){
				params.defaultToolbar = true
			}
		}

		if(params.defaultToolbar){
			await Local.userFunction("desktop/toolbar").invoke(e)
		}
	}

	await e.on("close", function () {
		console.info("Closing .....")
		delete Local.publicContext["gix." + c.IdSite]
		delete c.publicContext["gix.instance"]
	})


	return e
}
