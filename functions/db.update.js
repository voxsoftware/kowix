
var F= async function(body){

    var global= F.global



    var opt
    if(!global.Mongo){
        opt= await global.userFunction("variables.init").invoke()
        global.Mongo=opt.Mongo
        global.Mingo=opt.Mingo
    }


    var options= body.options
    var q= body.query
    var up= body.update


    var siteContext, site
    siteContext= body.siteContext
    Database= body.Database || siteContext.Database
    if(!siteContext){
        if(!body.site){
            siteContext= await global.getSiteContext(body.idsite)
        }else{
            siteContext= body.site.getContext(global.context)
        }
    }
    site= body.site
    if(!site){
        site= siteContext.getSite()
    }
    if(siteContext.constants.queryPreload){
        body.type='update'
        await siteContext.userFunction(siteContext.constants.queryPreload).invoke(body)
    }




    // get rules ...
    var rules, rulesl, ruleLimit
    rulesl = []
    var rulefile = siteContext.constants.dbrules && siteContext.constants.dbrules.verification
    body._type = 'update'

    if (rulefile) {
        rules = await siteContext.userFunction(rulefile).invoke(body)
    }
    else {
        rules = []
    }
    rulefile = siteContext.constants.dbrules && siteContext.constants.dbrules.limits
    if (rulefile) {
        ruleLimit = await siteContext.userFunction(rulefile).invoke(body)
        RuleLimitClass = await global.UserFunction("rule.limit").invoke()
        ruleLimit = new RuleLimitClass(ruleLimit, siteContext)
        rulesl.push(ruleLimit)
    }



    var table, data
    var getData= async function(){

		if(data)
			return data

		if(!table){
            if(Database.secureInvoke){
                table= await Database.secureInvoke(function(db){
                    return db.collection(options.tablename)
                })
            }else{
                table= await Database.collection(options.tablename)
            }
        }
		data= await table.find(q, {
			_id: 1
		}).toArray()
		return data
	}
	options.getData= getData


	for(var i=0;i<rulesl.length;i++){
        up= rulesl[i].checkUpdate(options,q,up)
    }
    for(var i=0;i<rules.length;i++){
        if(rules[i].function){
            await siteContext.userFunction(rules[i].function).invoke(body,options)
        }
    }




    if(!data)
		data = await getData()
	if(!table){
        if(Database.secureInvoke){
            table= await Database.secureInvoke(function(db){
                return db.collection(options.tablename)
            })
        }else{
            table= await Database.collection(options.tablename)
        }
    }
    for(var id in up){
		if(!id.startsWith("$")){
			up.$set=up.$set||{}
			up.$set[id]= up[id]
			delete up[id]
		}
	}

    up.$set.updated=Date.now()
	var result=await table.update({
		_id: {
			$in: data.map((a)=> a._id)
		}
	}, up, {
		multi: true
	})


	if(siteContext.constants.queryPostload){
        body.type='update'
        result= await siteContext.userFunction(siteContext.constants.queryPostload).invoke(result)
    }
	return result



}

module.exports= function(global){
    F.global= global
    return F
}
