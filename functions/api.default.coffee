import Url from 'url'
F= (body={})->
	global= F.global
	uri= Url.parse global.context.request.url
	parts= uri.pathname.split("/").filter (a)-> not not a

	if parts[0] is "require"
		str= parts.slice(1).join("/")

		i=str.lastIndexOf("@")
		if i <= 0
			body.path= str
		else
			body.module= str.substring(0, i)
			body.version= str.substring(i + 1)
			pars1= body.version.split "/"
			body.version= pars1[0]
			if pars1.length > 1
				body.file= pars1.slice(1).join("/")
			



		return await global.userFunction("packager/require").invoke(body)


module.exports= (global)->
	F.global= global
	F
