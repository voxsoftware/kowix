import 'npm://mongodb@3.1.13'
import Mongo from 'mongodb'
import * as Types from '../src/typing'


async function executeHooks(config, siteContext, type: string, body) {

    config[type] = config[type] || {
        all: siteContext.constants.queryPreload
    }
    if (typeof config[type].insert == "function") {
        await config[type].insert(body)
    }
    else if (typeof config[type].insert == "string") {
        await siteContext.userFunction(config[type].insert).invoke(body)
    }

    if (typeof config[type].all == "function") {
        await config[type].all(body)
    }
    else if (typeof config[type].all == "string") {
        await siteContext.userFunction(config[type].all).invoke(body)
    }

}



export async function kowixInvoke(local: Types.SiteContext, body) {

    body.type = "insert"
    body._type = "new"


    let siteContext: Types.SiteContext = body.siteContext
    let Database = body.Database || siteContext.Database
    if (!siteContext) {
        let idsite = body.IdSite || body.idsite
        if (idsite) siteContext = await local.getSiteContext(idsite)
        else siteContext = body.site.getContext(local.context)
    }

    let site = siteContext.getSite()
    let config = siteContext.constants.dbconfig || {}


    await executeHooks(config, siteContext, "preload", body)


    let rules = []
    config.rules = config.rules || []



    if (typeof config.rulechecker == "string") {
        rules = await siteContext.userFunction(config.rulechecker).invoke(body)
    }
    rules = rules.concat(config.rules.filter(function (rule) {
        if (!(rule.applies instanceof Array))
            rule.applies = rule.applies.split("|")


        if (rule.applies.indexOf(body.options.tablename) >= 0) {
            if (!rule.types) return true
            if (!(rule.types instanceof Array))
                rule.types = rule.types.split("|")
            return rule.types.indexOf(body.type) >= 0
        }

        return false
    }))

    for (let i = 0; i < rules.length; i++) {
        let rule = rules[i]
        if (typeof rule.file == "string") {
            rule = await siteContext.userFunction(rule.file).invoke()
        }
        else if (typeof rule.method == "string") {
            rule = await siteContext.userFunction(rule.method).invoke()
        }
        if (rule)
            rules[i] = rule
    }


    let _canceled = false
    body.cancel = function () {
        _canceled = true
    }


    for (let rule of rules) {
        if (typeof rule.check == "function") {
            await rule.check(body)
            if (_canceled) return
        }
    }

    let table = await Database.secureInvoke(function (db) {
        return db.collection(body.options.tablename)
    })


    let ins = body.insert || body.data 
    if(!ins._id) ins._id = Mongo.ObjectID()
    if(!ins.created) ins.created = Date.now() 
    let result = await table.insertOne(ins)
    await executeHooks(config, siteContext, "postload", ins)
    return ins 

}


