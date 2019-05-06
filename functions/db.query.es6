
var F= async function(body){

    var global= F.global
    var options= body.options
    var q= body.query

    var opt
    if(!global.Mongo){
        opt= await global.userFunction("variables.init").invoke()
        global.Mongo=opt.Mongo
        global.Mingo=opt.Mingo
    }


    var siteContext, site, Database
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
        body.type='query'
        await siteContext.userFunction(siteContext.constants.queryPreload).invoke(body)
    }




    // get rules ...
    var rule= siteContext.userFunction("rules." + options.tablename + ".get")
    var rules=[], rulesl=[], rls
    var RuleLimitClass, ruleLimit

    if(await rule.isAvailable()){
        rls= await rule.execute()
        for(var i=0;i<rls.length;i++)
            rules.push(rls[i])
    }

    rule= siteContext.userFunction("rules.get")
    if(await rule.isAvailable()){
        rls= await rule.execute()
        for(var i=0;i<rls.length;i++)
            rules.push(rls[i])
    }

    rule= siteContext.userFunction("rules.limit." + options.tablename + ".get")
    if(await rule.isAvailable()){

        // execute rule Limit
        RuleLimitClass= await global.UserFunction("rule.limit").invoke()
        ruleLimit= new RuleLimitClass(await rule.execute(), siteContext)
        rulesl.push(ruleLimit)

    }



    var table, ev
    var project=null
	var relation= body.relation
	var limit=100, sort, info


	for(var i=0;i<rules.length;i++){
        if(rules[i].function){
            ev= await siteContext.userFunction(rules[i].function).invoke(body,options)
            if(ev && ev.defaultPrevented)
                return ev.data
        }
    }


    if(body.limit){
		limit= body.limit || 100
		for(var i=0;i<rulesl.length;i++){
            limit= await rulesl[i].checkLimit(limit)
        }
	}


	if(body.query && body.sort){
		sort= body.sort
		for(var i=0;i<rulesl.length;i++){
            sort= await rulesl[i].checkSort(sort)
        }
	}

    if (Database.secureInvoke){
        table= await Database.secureInvoke(function(db){
            return db.collection(options.tablename)
        })
    }
    else{
        table= await Database.collection(options.tablename)
    }
    if(body.aggregate || body.aggregate_pipeline){

	}
	else if(body.project){
		project= body.project
	    for(var i=0;i<rulesl.length;i++){
            project= await rulesl[i].checkProjection(project)
        }
	}
	else if(body.query){
	    project={}
	    for(var i=0;i<rulesl.length;i++){
            project= await rulesl[i].checkProjection(project)
        }

	}



	if(body.aggregate){
		body.aggregate_pipeline= [{
			$match: body.query
		},{
			$project: body.aggregate
		}]
	}



	if(body.aggregate_pipeline){

		// check aggregation
		for(var i=0;i<body.aggregate_pipeline.length;i++){
			if(body.aggregate_pipeline[i].$project){

			    for(var i=0;i<rulesl.length;i++){
                    body.aggregate_pipeline[i].$project= await rulesl[i ].checkProjection(body.aggregate_pipeline[i].$project,'aggregation')
                }

				// se hace un break porque solo es necesario verificar la primera proyección
				break
			}
		}

		info= table.aggregate(body.aggregate_pipeline).limit(limit)
	}
	else if(body.count==1){
		info= await table.count(q)
		return info
	}
	else{
		info= (project ? table.find(q,{fields:project}) : table.find(q)).limit(limit)
		if(sort)
		    info= info.sort(sort)
	}


	var tune, keys, f1, val, v1, f2, q2, d

	info= await info.toArray()
	if(info.length){

	    if(relation && relation.length){
			for(var i=0;i<relation.length;i++){
				let relat= relation[i]
				tune={}
				keys=[]
				f1= relat.field1


				for(var y=0;y<info.length;y++){
					let inf= info[y]
					val=inf[f1]
					if(val){
						if(val instanceof Array){
							for(var z=0;z<val.length;z++){
								let v= val[z]
								v1=v.value || v
								tune[v1]= tune[v1]||[]
								tune[v1].push(inf)
								keys.push(v1)
							}
						}else{
							v1=val.value || val
							tune[v1]= tune[v1]||[]
							tune[v1].push(inf)
							keys.push(v1)
						}
					}
				}

				f2= relat.field2
				q2= relat.query || {}
				if(q2[f2]===undefined){
					q2[f2]= {
						$in:keys
					}
				}

				d=await global.userFunction("db.query").invoke({
					query: q2,
					siteContext,
					site,
					options: relat.options,
					relation: relat.relation,
					limit: relat.limit,
					sort: relat.sort,
					Database: Database,
					project: relat.project
				})



				if(d && d.length){
					for(var a=0;a<d.length;a++){
						let d1= d[a]
						val= d1[f2]
						if(tune[val]){
							for(var obj of tune[val]){
								obj[relat.name]=obj[relat.name]||[]
								obj[relat.name].push(d1)
							}
						}
					}
				}
			}
		}

	}


	for(var i=0;i<rulesl.length;i++){
        info= rulesl[i].transformData(info)
    }



    if(siteContext.constants.queryPostload){
        body.type='query'
        info= await siteContext.userFunction(siteContext.constants.queryPostload).invoke(info)
    }
	return info




}

module.exports= function(global){
    F.global= global
    return F
}
