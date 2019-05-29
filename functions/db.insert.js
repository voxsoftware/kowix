
var F= async function(body){

    var global= F.global

    var opt
    if(!global.Mongo){
        opt= await global.userFunction("variables.init").invoke()
        global.Mongo=opt.Mongo
        global.Mingo=opt.Mingo
    }

    var options= body.options
    var ins= body.insert

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
        body.type='insert'
        await siteContext.userFunction(siteContext.constants.queryPreload).invoke(body)
    }


    // get rules ...
    var rules, rulesl, ruleLimit 
    rulesl = []
    var rulefile = siteContext.constants.dbrules && siteContext.constants.dbrules.verification
    body._type = 'insert'

    if(rulefile){        
        rules= await siteContext.userFunction(rulefile).invoke(body)
        console.info("RULES: ", rules)
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



    /*
    var rule= siteContext.userFunction("rules." + options.tablename + ".insert")
    var rules=[], rulesl=[], rls
    var RuleLimitClass, ruleLimit

    if(await rule.isAvailable()){
        rls= await rule.execute()
        for(var i=0;i<rls.length;i++)
            rules.push(rls[i])
    }

    rule= siteContext.userFunction("rules.insert")
    if(await rule.isAvailable()){
        rls= await rule.execute()
        for(var i=0;i<rls.length;i++)
            rules.push(rls[i])
    }
    

    rule= siteContext.userFunction("rules.limit." + options.tablename + ".insert")
    if(await rule.isAvailable()){

        // execute rule Limit
        RuleLimitClass= await global.UserFunction("rule.limit").invoke()
        ruleLimit= new RuleLimitClass(await rule.execute(), siteContext)
        
        rulesl.push(ruleLimit)

    }
    */


    var insert, response=[]
    if(ins instanceof Array)
        insert= ins
    else
        insert= [ins]

    var table
    for(var y=0;y<insert.length;y++){

        ins= insert[y]
        for(var i=0;i<rules.length;i++){
            if(rules[i].function){
                if(rules[i].v2)
                    await siteContext.userFunction(rules[i].function).invoke(body)
                else
                    await siteContext.userFunction(rules[i].function).invoke(ins, options)
            }
        }
        for(var i=0;i<rulesl.length;i++){
            ins= rulesl[i].checkData(options,ins)
        }

        if(!table){
            if(Database.secureInvoke){
                table= await Database.secureInvoke(function(db){
                    return db.collection(options.tablename)
                })
            }else{
                table= await Database.collection(options.tablename)
            }
        }

        if(!ins._id){
            ins._id= global.Mongo.ObjectID()
        }
        ins.created= Date.now()
        await table.insertOne(ins)
        response.push(ins)

    }


    if(response.length==1)
        response= response[0]

    if(siteContext.constants.queryPostload){
        body.type='insert'
        response= await siteContext.userFunction(siteContext.constants.queryPostload).invoke(response)
    }

    return response


}

module.exports= function(global){
    F.global= global
    return F
}
