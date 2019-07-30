import './mod'
import * as async from '/virtual/@kawix/std/util/async'
import readline from 'readline'
import Path from 'path'
declare var kawix 

export class Program{

    private static _readline: any
    static readLineAsync(): Promise<string> {
        if (!this._readline) {
            this._readline = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: false
            })
        }
        var def = new async.Deferred<string>()
        this._readline.once("line", def.resolve)
        this._readline.once("error", def.reject)
        return def.promise
    }

    public static prettifyPath(path: string) {
        if (path.startsWith("'") && path.endsWith("'")) {
            path = path.substring(1, path.length - 1)
        }
        else if (path.startsWith('"') && path.endsWith('"')) {
            path = path.substring(1, path.length - 1)
        }
        return path
    } 

    public static async main(args?: string[]): Promise<void> {
        try{

            if (!process.env.PROJECTS_DIR){
                process.env.PROJECTS_DIR = Path.dirname(kawix.mainFilename)
                //console.log(process.env.PROJECTS_DIR)
            }
            if (process.env.KOWIX_PREVIOUS_RESPONSE){
                return await import(process.env.KOWIX_PREVIOUS_RESPONSE)
            }
            while(true){
                process.stdout.write("\u001b[2J\u001b[0;0H");
                console.info(" Current 'hosts' folder: ", process.env.PROJECTS_DIR)
                console.info("")
                console.info(" 1. Start in 'standalone' mode (one process)")
                console.info(" 2. Start in 'cluster' mode (multiprocess, one per CPU )")
                console.info(" 3. Select 'hosts' folder")
                process.stdout.write("\n Enter your answer: ")

                var respuesta = await this.readLineAsync()
                if(respuesta == "1"){
                    let file = process.env.KOWIX_PREVIOUS_RESPONSE = Path.join(__dirname, "start.standalone")
                    return await import(file)
                    
                } else if (respuesta == "2") {
                    let file = process.env.KOWIX_PREVIOUS_RESPONSE = Path.join(__dirname, "start")
                    return await import(file)
                    
                } else if (respuesta == "3") {
                    
                    process.stdout.write(" Write the path to 'hosts': ")
                    respuesta = this.prettifyPath(await this.readLineAsync())
                    if(respuesta.trim()){
                        process.env.PROJECTS_DIR = respuesta.trim()
                    }
                    
                }else{
                    process.exit(0)
                }
            }
        }catch(e){
            console.error(e)
            await this.readLineAsync()
        }
    }
}

Program.main()