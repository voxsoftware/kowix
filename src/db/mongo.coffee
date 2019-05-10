
import mongo from 'npm://mongodb@3.1.13'
import Exception from '../exception'
import publicContext from '../publicContext'

MongoClient= mongo.MongoClient
state = publicContext["kowix"] ?  (publicContext["kowix"] = {})
state = state.dbInfo ? (state.dbInfo = {})

deferred= ()->
	def= {}
	def.promise= new Promise (a,b)->
		def.resolve= a
		def.reject= b
	return def

compareerror= (e)->
	words= ["topology","connect","reconnect"]
	for word in words
		if e.message.toLowerCase().indexOf(word) >= 0
			return yes
	return no

sleep= (timeout)->
	def= deferred()
	setTimeout def.resolve, timeout
	def.promise

secureInvoke = (db, ctx, config)->
	retry= (count, self, func, param)->
		er= null
		for i in [0...count]
			console.log('> Retrying here')
			try
				db= await state.db_reconnect(ctx, config)
				return await func(db,param)
			catch e
				er= e
		throw er if er

	return (func, param)->
		try
			return await func(db, param)
		catch e

			if compareerror(e)
				# retry two times
				return await retry(2, this, func, param)
			else
				throw e

state.db_reconnect= (ctx, config)->
	caching= state.dbscaching= state.dbscaching || {}
	dbs= state.dbscache= state.dbscache || {}
	dbu= config.url or config.database

	time= Date.now()
	while caching[dbu]
		if Date.now() - time > 20000
			throw Exception.create("Timedout waiting database").putCode("TIMEDOUT")
		await sleep 10


	try
		delete dbs[dbu]
		caching[dbu]= yes
		try
			client = await MongoClient.connect dbu,
				useNewUrlParser: yes
				reconnectTries: 4
		catch e
			if compareerror(e) and config.autostart

				dbstarter= await `import("./mongo.download")`
				await dbstarter.invoke(ctx,config)
				client = await MongoClient.connect dbu,
					useNewUrlParser: yes
					reconnectTries: 4
			else
				throw e

		db= client.db()
		db.secureInvoke= secureInvoke(db, ctx, config)
		db.table= db.collection
		dbs[dbu]= db
		return db
	catch e
		throw e
	finally
		delete caching[dbu]

Invoke= (ctx, config)->
	dbs= state.dbscache= state.dbscache || {}
	dbu= config.url or config.database
	db= dbs[dbu]

	if db
		db.secureInvoke= secureInvoke(db, ctx, config)
		return db
	return await state.db_reconnect(ctx, config)

export Mongo= mongo
export invoke= Invoke
export kawixDynamic=
	time: 15000
