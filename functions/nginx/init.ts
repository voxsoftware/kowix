export var kowixInvoke = async function(local, ctx) {
	var Nginx, nginx
	Nginx = (await local.userFunction("nginx/config").invoke())
	nginx = new Nginx()
	return (await nginx.writeDefaultConfig())
};
