var execute;

execute = async function(local, promises, site, body) {
	var ctx, e, task;
	if (!local.publicContext.cronExecuting[site.id]) {
		try {
			console.log(` > [kowix] Starting cron ${site.id}`);
			local.publicContext.cronExecuting[site.id] = true;
			ctx = (await local.getSiteContext(site.id));
			task = ctx.userFunction("cron.0tasks").invoke(body);
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
