export var kowixInvoke = function(local) {
	var headers
	headers = local.context.request.headers
	if (headers["x-client-crt"]) {
		headers["x-client-crt"] = decodeURIComponent(headers["x-client-crt"])
	}
	return headers
}