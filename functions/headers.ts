
import * as Types from '../src/typing'
export var kowixInvoke = function(local: Types.SiteContext, body: any) {
	var headers = local.context.request.headers
	if (headers["x-client-crt"]) {
		headers["x-client-crt"] = decodeURIComponent(headers["x-client-crt"].toString())
	}
	return headers
}