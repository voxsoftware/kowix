import * as Gix from '/virtual/@kawix/gix/mod'
import * as Types from '../../src/typing'
import Path from 'path'

interface Main { (params: any) }



export async function kowixInvoke(Local: Types.SiteContext, body:any = {}){
    var c = body.context as Types.SiteContext
    if(c  == null){
        // wait 30 seconds for context available
        c = await Local.getSiteContext(body.IdSite, 30000)
    }

    var params = await c.userFunction("desktop/params").invoke()
    var e: Gix.gix
    e = Local.publicContext["gix." + c.IdSite]
    
    e = null 

    if (!e) {
        e = Gix.gix.create(c.IdSite)
        await e.requestSingleInstanceLock()
        Local.publicContext["gix." + c.IdSite] = e
        /*
        e.on("second-instance", function (argv, cwd) {
            
        })*/
    }

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

        
        
        
        if(!e.api.main){
            await e.register("main", function(electron, gix: Gix.GuiBridge, params: any){
                var BrowserWindow = electron.BrowserWindow
                var mainWindow
                mainWindow = gix.store.mainWindow
                if(mainWindow && !params.allowMultiple){
                    mainWindow.show()
                }else{
                    mainWindow = new BrowserWindow(params)
                    gix.store.mainWindow = mainWindow 
                    mainWindow.loadURL(params.url)
                    mainWindow.show()
                    mainWindow.once("closed", function () {
                        gix.emit("mainwindow.closed")
                        mainWindow = null
                        delete gix.store.mainWindow 
                    })
                    mainWindow.on("minimize", function () {
                        gix.emit("mainwindow.minimize")
                    })
                }
            })   
        }
        e.once("close", function () {
            console.info("closing ....")
            delete Local.publicContext["gix." + c.IdSite]
        });
        (e.api.main as Main)(params.mainWindow)
    }

    if(params.boot){
        if(typeof params.boot == "function"){
            await params.boot(e)
        }else{
            await c.userFunction(params.boot).invoke(e)
        }
    }else{
        await Local.userFunction("desktop/toolbar").invoke(e)
    }
    return e
}
