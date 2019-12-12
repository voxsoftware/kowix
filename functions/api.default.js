var F;

import Url from 'url';

F = async function(body = {}) {
	var global, i, pars1, parts, str, uri;
	global = F.global;
	uri = Url.parse(global.context.request.url);
	parts = uri.pathname.split("/").filter(function(a) {
		return !!a;
	});
	if (parts[0] === "require") {
		str = parts.slice(1).join("/");
		i = str.lastIndexOf("@");
		if (i <= 0) {
			body.path = str;
		} else {
			body.module = str.substring(0, i);
			body.version = str.substring(i + 1);
			pars1 = body.version.split("/");
			body.version = pars1[0];
			if (pars1.length > 1) {
				body.file = pars1.slice(1).join("/");
			}
		}
		return (await global.userFunction("packager/require").invoke(body));
	}
	else if(parts[0] == "bundle" && parts.length == 2){
		// get by sha1
		let method = "packager/bundle"
		let sha1 = parts[1]
		if(sha1 && sha1.startsWith("group.")){
			method = "packager/group"
		}
		return await global.userFunction(method).invoke(Object.assign({}, body, {
			sha1
		}))
	}
};

module.exports = function(global) {
	F.global = global;
	return F;
};
