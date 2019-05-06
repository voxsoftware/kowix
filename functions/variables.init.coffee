
#import loader from './loaders'

F= ()->


	Mongo= F.global.Mongo
	Mingo= F.global.Mingo



	if not Mongo
		Mongo= await F.global.UserContext.require("mongodb","3.0.10")
		Mongo.ObjectID.prototype.toJSON= ()->
			return
				$oid: this.toString()
		F.global.addGlobal 'Mongo', Mongo
		F.global.publicContext.Mongo= Mongo


	if not Mingo
		Mingo= await F.global.UserContext.require("mingo","2.2.2")
		F.global.addGlobal 'Mingo', Mingo
		F.global.publicContext.Mingo= Mongo

	return true


module.exports= (global)->
	F.global= global
	F
