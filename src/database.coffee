
class Database
	constructor: (@sitectx)->

	table: (name)->
		return @collection(name)

	collection: (name)->
		if not @_db 
			constants= @sitectx.constants 
			@_db= await @sitectx.userFunction("database.init").invoke(constants)
		return await @_db.table(name)

export default Database