var F;

F = async function(body = {}) {
	var Packager, e, pack, path, result
	path = body.path
	Packager = (await F.global.userFunction("packager/class").invoke());
	pack = new Packager(path)
	if (body.module) {
		pack.module = body.module
	}
	result = (await pack.compile())
	if (result.buffer) {
		return {
			code: result.buffer
		}
	}
	return e = {
		code: (await pack.compile())
	}
}

module.exports = function(global) {
	F.global = global
	return F
}