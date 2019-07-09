export var kowixInvoke = async function(local, body) {
	var con, config, conns, final, i, initial, j, parts, ref, ref1, results;
	conns = local.context.server._urlconns;
	config = local.context.server.config.readCached();
	if (config.adminpassword) {
		if (body.password !== config.adminpassword) {
			return local.Exception.create("Access denied. Invalid password").putCode("ACCESS_DENIED");
		}
	}
	results = [];
	if (body.id) {
		parts = body.id.split("-");
		initial = parseInt(parts[0]);
		if (!parts[1]) {
			final = initial;
		} else {
			final = parts[1];
		}
		for (i = j = ref = initial, ref1 = final; (ref <= ref1 ? j <= ref1 : j >= ref1); i = ref <= ref1 ? ++j : --j) {
			con = conns[i];
			if (con) {
				await con.end();
				results.push({
					id: i,
					finished: true
				});
			}
		}
	}
	return results;
};
