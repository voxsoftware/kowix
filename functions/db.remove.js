import 'npm://mongodb@3.1.13'
import Mongo from 'mongodb'

var F= async function(body){

    var global= F.global


    var opt
    if(!global.Mongo){
		global.Mongo = Mongo
		/*
        opt= await global.userFunction("variables.init").invoke()
        global.Mongo=opt.Mongo
        global.Mingo=opt.Mingo
		*/
    }


    var options= body.options
    var q= body.query


    var siteContext, site
    siteContext= body.siteContext


    if(!siteContext){
        if(!body.site){
            siteContext= await global.getSiteContext(body.idsite)
        }else{
            siteContext= body.site.getContext(global.context)
        }
    }
    Database= body.Database || siteContext.Database

    site= body.site
    if(!site){
        site= siteContext.getSite()
    }
    if(siteContext.constants.queryPreload){
        body.type='delete'
        await siteContext.userFunction(siteContext.constants.queryPreload).invoke(body)
    }


    // get rules ...
    var rules, rulesl, ruleLimit
    rulesl = []
    var rulefile = siteContext.constants.dbrules && siteContext.constants.dbrules.verification
    body._type = 'remove'

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

		if(!table)
			table= await Database.table(options.tablename)

		data= await table.find(q, {
			_id: 1
		}).toArray()
		return data
	}
	options.getData= getData

    var hardDelete
    hardDelete = siteContext.constants.db && siteContext.constants.db.harddelete
	for(var i=0;i<rulesl.length;i++){
        rulesl[i].checkUpdate(options,q)
    }
    for(var i=0;i<rules.length;i++){
        if(rules[i].function){
            await siteContext.userFunction(rules[i].function).invoke(body,options)
        }
        hardDelete=rules[i].hardDelete
    }




    if(!data)
		data = await getData()
	if(!table)
		table= await Database.table(options.tablename)



    var result
    if(hardDelete){
		result=await table.remove({
			_id: {
				$in: data.map((a)=> a._id)
			}
		})
	}
	else{
		result=await table.update({
			_id: {
				$in: data.map((a)=> a._id)
			}
		}, {
			$set: {
				deleted: true
			}
		}, {
			multi: true
		})
	}

	if(siteContext.constants.queryPostload){
        body.type='delete'
        result= await siteContext.userFunction(siteContext.constants.queryPostload).invoke(result)
    }
	return result

}

module.exports= function(global){
    F.global= global
    return F
}
