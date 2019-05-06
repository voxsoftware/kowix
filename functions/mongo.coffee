# Kodhe Copyright 2019©
# mongo.local

# this file expose a source code for start a local mongo database
# this downloads and starts automatically
import * as MongoLocal from "../src/db/mongo"
export kowixInvoke= (local, config)->
	ctx= local._ctx
	return await MongoLocal.invoke ctx, config
