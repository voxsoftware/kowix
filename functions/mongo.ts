// Kodhe Copyright 2019©
// mongo.local

// this file expose a source code for start a local mongo database
// this downloads and starts automatically
import * as MongoLocal from "../src/db/mongo";
export var kawixDynamic = {
	time: 15000
}
export var kowixInvoke = async function(local, config) {
	var ctx
	ctx = local._ctx
	return (await MongoLocal.invoke(ctx, config))
};
