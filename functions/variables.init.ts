//import loader from './loaders'
export var kowixInvoke = async function(local) {
	
    
    // No all the projects are using mongo, so
    // i will delete this part 
	/*
    if (!Mongo) {
		Mongo = (await local.UserContext.require("mongodb", "3.1.13"));
		Mongo.ObjectID.prototype.toJSON = function() {
			return {
				$oid: this.toString()
			};
		};
		local.addGlobal('Mongo', Mongo);
		local.publicContext.Mongo = Mongo;
	}*/
	
	return true
}
