import * as Types from '../src/typing'
var execute
execute = async function(local: Types.SiteContext, promises, site, body) {
	if (!local.publicContext.cronExecuting[site.id]) {
		var e, task;
		try {
			console.log(` > [kowix] Starting cron ${site.id}`);
			local.publicContext.cronExecuting[site.id] = true;
			let ctx = await local.getSiteContext(site.id)
			let method = ctx.userFunction("cron.0tasks")
			if(method.isAvailable())
				await method.invoke(body)

			return (await task);
		} catch (error) {
			e = error;
			return console.error(`Error executing cron: ${e.stack}`);
		} finally {
			console.log(` > [kowix] Finalized cron ${site.id}`);
			delete local.publicContext.cronExecuting[site.id];
		}
	}
};

export var kowixInvoke = function(local, body) {
	var i, len, promises, results, site, sites;
	if (!local.publicContext.cronExecuting) {
		local.publicContext.cronExecuting = {};
	}
	console.info("executing: ", local.publicContext.cronExecuting);
	sites = local.getSitesConfig();
	promises = [];
	results = [];
	for (i = 0, len = sites.length; i < len; i++) {
		site = sites[i];
		if (!site.cron && (site.id !== "kowix")) {
			// execute cron
			results.push(execute(local, promises, site, body));
		} else {
			results.push(void 0);
		}
	}
	return results;
};

//await Promise.all(promises)
