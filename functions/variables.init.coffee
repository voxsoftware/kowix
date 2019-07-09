
#import loader from './loaders'

export kowixInvoke= (local)->

	Mongo= local.Mongo
	# Mingo= local.Mingo
	if not Mongo
		Mongo= await local.UserContext.require("mongodb","3.1.13")
		Mongo.ObjectID.prototype.toJSON= ()->
			return
				$oid: this.toString()
		local.addGlobal 'Mongo', Mongo
		local.publicContext.Mongo= Mongo

	###
	if not Mingo
		Mingo= await local.UserContext.require("mingo","2.2.2")
		local.addGlobal 'Mingo', Mingo
		local.publicContext.Mingo= Mongo
	### 

	return true

