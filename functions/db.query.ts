import 'npm://mongodb@3.1.13'
import Mongo from 'mongodb'
import * as Types from '../src/typing'



async function executeHooks(config, siteContext, type: string, body) {

	config[type] = config[type] || {
		all: siteContext.constants.queryPreload
	}
	if (typeof config[type].update == "function") {
		await config[type].update(body)
	}
	else if (typeof config[type].update == "string") {
		await siteContext.userFunction(config[type].update).invoke(body)
	}

	if (typeof config[type].all == "function") {
		await config[type].all(body)
	}
	else if (typeof config[type].all == "string") {
		await siteContext.userFunction(config[type].all).invoke(body)
	}

}



export async function kowixInvoke (local: Types.SiteContext, body){

	body.type = "query"
	body._type = "get"


	let siteContext: Types.SiteContext = body.siteContext
	let Database = body.Database || siteContext.Database
	if(!siteContext){
		let idsite = body.IdSite || body.idsite
		if(idsite) siteContext = await local.getSiteContext(idsite)
		else siteContext = body.site.getContext(local.context)
	}

	let site = siteContext.getSite()
	let config = siteContext.constants.dbconfig || {}
	body.query = body.query || {}
	let rules = []
	config.rules = config.rules || []


	await executeHooks(config, siteContext, "preload", body)


	if(typeof config.rulechecker == "string"){
		rules = await siteContext.userFunction(config.rulechecker).invoke(body)
	}
	rules = rules.concat(config.rules.filter(function(rule){
		if(!(rule.applies instanceof Array))
			rule.applies = rule.applies.split("|")

		if (rule.applies.indexOf(body.options.tablename) >= 0) {
			if (!rule.types) return true
			if (!(rule.types instanceof Array))
				rule.types = rule.types.split("|")
			return rule.types.indexOf(body.type) >= 0
		}

		return false 
	}))
	
	for(let i=0;i<rules.length;i++){
		let rule = rules[i]
		if(typeof rule.file == "string"){
			rule = await siteContext.userFunction(rule.file).invoke()
		}
		else if(typeof rule.method == "string"){
			rule = await siteContext.userFunction(rule.method).invoke()
		}
		/*
		else if(typeof rule.invoke == "function"){
			rule = rule.invoke.bind(rule)
		}
		else if(typeof rule.method == "function"){
			rule = rule.method.bind(rule)
		}
		else{
			rule = null
		}*/
		if(rule)
			rules[i] = rule
	}


	let _canceled = false
	body.cancel = function(){
		_canceled = true
	}


	for(let rule of rules){
		if(typeof rule.check == "function"){
			await rule.check(body)
			if(_canceled) return
		}
	}

	let limit = 100, sort = null, project = body.project || {}
	if(body.limit){
		limit = body.limit
		for(let rule of rules){
			if(typeof rule.limit == "function"){
				limit = rule.limit(limit)
			}
			else if(typeof rule.limit == "number"){
				limit = Math.min(rule.limit, limit)
			}
		}
	}




	if(body.sort){
		sort = body.sort
		for(let rule of rules){
			if(typeof rule.sort == "function"){
				sort = rule.sort(sort)
			}
			else if(rule.sort){
				sort = rule.sort
			}
		}
	}

	let table = await Database.secureInvoke(function(db){
		return db.collection(body.options.tablename)
	})


	if(body.aggregate || body.aggregate_pipeline){}
	else if(project){
		for(let rule of rules){
			if(typeof rule.fields == "function"){
				project = rule.fields(project)
			}
			else if(rule.fields){
				project = rule.fields
			}
		}
	}

	if(body.aggregate){
		body.aggregate_pipeline= [{
			$match: body.query
		},{
			$project: body.aggregate
		}]
	}


	let execution
	if(body.aggregate_pipeline){
		for(var i=0;i<body.aggregate_pipeline.length;i++){
			for(let rule of rules){
				if(typeof rule.fields == "function"){
					body.aggregate_pipeline[i].$project = rule.fields(body.aggregate_pipeline[i].$project, 'aggregation')
				}
			}
		}
		execution = table.aggregate(body.aggregate_pipeline).limit(limit)
	}
	else if(body.count){
		return await table.count(body.query)
	}
	else{
		if(Object.keys(project).length > 0){
			execution = table.find(body.query, {
				fields: project
			})
		}
		else{
			execution = table.find(body.query)
		}
		execution = execution.limit(limit)
		if(sort) execution = execution.sort(sort)
	}


	let data = await execution.toArray()
	let tune = {}, keys = []
	if(data.length){
		if(body.relation && body.relation.length){
			for(let relation of body.relation){

				let field1 = relation.field1
				for(let row of data){
					let value1 = row[field1]
					if(value1 !== null && value1 !== undefined){
						if(value1 instanceof Array){
							for(let z=0;z<value1.length;z++){
								let value = value1[z]
								let v1 = (value ? value.value : null) || value
								tune[v1] = tune[v1] || []
								tune[v1].push(row)
								keys.push(v1)
							}
						}else{
							let v1 = (value1 ? value1.value : null) || value1
							tune[v1] = tune[v1] || []
							tune[v1].push(row)
							keys.push(v1)
						}
					}
				}

				let field2 = relation.field2
				let query2 = relation.query || {}
				if(query2[field2] == undefined){
					query2[field2] = {
						$in: keys
					}
				}

				let d = await local.userFunction("db.query").invoke({
					query: query2,
					siteContext,
					site,
					options: relation.options,
					relation: relation.relation,
					limit: relation.limit,
					sort: relation.sort,
					Database,
					project: relation.project || relation.fields
				})
				if(d && d.length){
					for(let a=0;a<d.length;a++){
						let d1 = d[a]
						let value = d1[field2]
						if(tune[value]){
							for(let obj of tune[value]){
								obj[relation.name] = obj[relation.name] || []
								obj[relation.name].push(d1)
							}
						}
					}
				}

			}
		}
	}


	for(let rule of rules){
		if(typeof rule.transform == "function")
			data= rule.transform(data)
	}

	await executeHooks(config, siteContext, "postload", data)
	return data

}
