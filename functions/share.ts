import * as Types from '../src/typing'
import Cluster from 'cluster'
import Path from 'path'

export async function kowixInvoke(local: Types.SiteContext, body: any){


	if (local.context.server.ipcmodule == "RPA"){
		
		// use the new way
		if(Cluster.isMaster){
			return null 
		}

		let channel =  await local.context.server.channel.client.dynamicRun(`

			let service = arguments[0]

			return new Promise(function(resolve, reject){
				var ctx = service.getContext("${body.ctxSite}")
				service.dynamicImport(${JSON.stringify(Path.join(__dirname,"..", "src", "functions"))})
					.then(function(mod){
						mod.getSiteContext({
							request: null,
							response: null,
							server: service
						}, ctx).then(function(siteCtx){
							resolve(siteCtx.userFunction(${JSON.stringify(body.method)}).invoke({}))
						}).catch(reject)
					}).catch(reject)
			})

		`)
		channel.rpa_preserve()
		return channel
	}else{
		return await local.userFunction("share.old").invoke(body)
	}


}