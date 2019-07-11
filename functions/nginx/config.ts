var NginxSite;

import Os from 'os';
import Path from 'path';
import fs from '/virtual/@kawix/std/fs/mod';
import Child from 'child_process';

NginxSite = class NginxSite {
	private name: string
	constructor(name1) {
		this.name = name1;
	}

	deferred() {
		var def;
		def = {};
		def.promise = new Promise(function(a, b) {
			def.resolve = a;
			return def.reject = b;
		});
		return def;
	}

	async writeDefaultConfig() {
		var conf, folder, mode, path;
		if (this._writed) {
			return;
		}
		if (Os.platform() === "win32") {
			return NginxSite.local.Exception.create("win32 is not supported").putCode("NOT_IMPLEMENTED");
		}
		folder = "/nginx";
		if (!fs.existsSync(folder)) {
			await fs.mkdirAsync(folder);
		}
		mode = "";
		path = Path.join(folder, ".default");
		if (!fs.existsSync(path)) {
			mode = "restart";
			conf = "user www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n\nevents {\n	worker_connections 100000;\n	# multi_accept on;\n}\n\nhttp {\n\n	##\n	# Basic Settings\n	##\n\n	sendfile on;\n	tcp_nopush on;\n	tcp_nodelay on;\n	keepalive_timeout 65;\n	types_hash_max_size 2048;\n	# server_tokens off;\n\n	# server_names_hash_bucket_size 64;\n	# server_name_in_redirect off;\n\n	include /etc/nginx/mime.types;\n	default_type application/octet-stream;\n\n	##\n	# SSL Settings\n	##\n\n	ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE\n	ssl_prefer_server_ciphers on;\n\n	##\n	# Logging Settings\n	##\n\n	access_log /dev/null;\n	error_log /var/log/nginx/error.log;\n\n	##\n	# Gzip Settings\n	##\n\n	gzip on;\n\n	# gzip_vary on;\n	# gzip_proxied any;\n	# gzip_comp_level 6;\n	# gzip_buffers 16 8k;\n	# gzip_http_version 1.1;\n	# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n\n	##\n	# Virtual Host Configs\n	##\n\n	include /etc/nginx/conf.d/*.conf;\n	#include /etc/nginx/sites-enabled/*;\n	include /nginx/conf/*;\n}";
			await fs.writeFileAsync(path, conf);
			if (fs.existsSync("/etc/nginx/nginx.conf")) {
				await fs.writeFileAsync("/etc/nginx/nginx.conf", "include /nginx/.default;");
			}
		}
		path = Path.join(folder, "conf");
		if (!fs.existsSync(path)) {
			await fs.mkdirAsync(path);
			this._writed = true;
			await this.addSite({
				name: "zzz-default",
				nginx: {
					ssl: true
				}
			});
		}
		if (mode) {
			return (await this.reload(mode));
		}
	}

	restart() {
		return this.reload("restart");
	}

	async reload(mode = "reload") {
		var args, cmd, def, p;
		// service nginx reload
		if (mode) {
			if (process.getuid() === 0) {
				cmd = "/usr/sbin/service";
				args = ["nginx", mode];
			} else {
				cmd = "sudo";
				args = ["/usr/sbin/service", "nginx", mode];
			}
			def = this.deferred();
			p = Child.spawn(cmd, args);
			p.on("exit", def.resolve);
			return (await def.promise);
		}
	}

	async addSite(site) {
		var address, cafile, client_certificate, client_certificate_str, config, content1, content2, dhs_config, generate, generated, head, host, i, len, name, nginxconfig, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, rootconfig, sslconfig;
		if (!this._writed) {
			await this.writeDefaultConfig();
		}
		name = Path.join("/nginx/conf", site.name);
		if (fs.existsSync(name)) {
			content1 = (await fs.readFileAsync(name));
		}
		dhs_config = NginxSite.local.context.server.config;
		config = dhs_config.readCached();
		address = (ref = (ref1 = config.cluster[0]) != null ? ref1.address : void 0) != null ? ref : config.address;
		address = address.replace("0.0.0.0", "127.0.0.1");
		if (address.startsWith("127.0.0.1")) {
			address = `http://${address}`;
		}
		sslconfig = '';
		nginxconfig = Object.assign({}, (ref2 = (ref3 = site.webserver) != null ? ref3 : site.nginx) != null ? ref2 : {}, config.nginx);
		client_certificate = false;
		client_certificate_str = '';
		if (nginxconfig.ssl) {
			sslconfig = `listen 443 ssl;\nssl_certificate ${(ref4 = nginxconfig.ssl.crt) != null ? ref4 : Path.join(__dirname, "kowix.dev.crt")};\nssl_certificate_key ${(ref5 = nginxconfig.ssl.key) != null ? ref5 : Path.join(__dirname, "kowix.dev.key")};`;
			if (nginxconfig.ssl.requestCertificate) {
				client_certificate = true;
				cafile = dhs_config.resolvePath(nginxconfig.ssl.ca, dhs_config.readCached());
				sslconfig += `\nssl_client_certificate ${cafile};\nssl_verify_client optional;`;
				client_certificate_str = "proxy_set_header x-client-crt \"$ssl_client_escaped_cert\";\nproxy_set_header x-client-crt-verify \"$ssl_client_verify\";\nproxy_set_header x-client-crt-subject \"$ssl_client_s_dn\";";
			}
		}
		rootconfig = "";
		if (nginxconfig.rootdir) {
			rootconfig = "location ~ /.well-known {\n		root /var/www/html;\n		allow all;\n}\nroot /var/www/html;";
		}
		head = "\nmap $http_upgrade $connection_upgrade {\n		default upgrade;\n		'' close;\n}";
		generate = function(host) {
			var content, ref10, ref11, ref12, ref6, ref7, ref8, ref9;
			return content = `\nserver {\n		listen 80;\n		${sslconfig}\n		${rootconfig}\n\n		server_name ${(ref6 = (ref7 = host != null ? host.name : void 0) != null ? ref7 : host != null ? host.host : void 0) != null ? ref6 : host};\n		proxy_buffering off;\n		proxy_buffer_size 8k;\n		proxy_set_header Host $host;\n		proxy_set_header X-Real-IP $remote_addr;\n		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n		proxy_set_header X-Forwarded-Proto $scheme;\n		proxy_set_header X-Nginx-url $request_uri;\n\n		proxy_set_header Upgrade $http_upgrade;\n		proxy_set_header Connection $connection_upgrade;\n		\n		${client_certificate_str}\n\n\n		client_max_body_size ${(ref8 = nginxconfig.client_max_body_size) != null ? ref8 : "5000M"};\n\n		proxy_connect_timeout ${(ref9 = nginxconfig.connect_timeout) != null ? ref9 : "600"};\n		proxy_send_timeout ${(ref10 = nginxconfig.send_timeout) != null ? ref10 : "600"};\n		proxy_read_timeout ${(ref11 = nginxconfig.read_timeout) != null ? ref11 : "600"};\n		send_timeout ${(ref12 = nginxconfig.send_timeout) != null ? ref12 : "600"};\n\n\n\n		location ~ /\:\:(.*)/(.*){\n				proxy_pass http://127.0.0.1:$1/$2$is_args$args;\n		}\n\n		location ~ /\:\:(.*){\n				proxy_pass http://127.0.0.1:$1/$is_args$args;\n		}\n\n		location / {\n				proxy_pass ${address};\n		}\n}\n\n`;
		};
		generated = [];
		if ((ref6 = site.hostnames) != null ? ref6.length : void 0) {
			ref7 = site.hostnames;
			for (i = 0, len = ref7.length; i < len; i++) {
				host = ref7[i];
				generated.push(generate(host));
			}
		} else {
			generated.push(generate({
				name: '_'
			}));
		}
		content2 = head + "\n" + generated.join("\n");
		if (content2 !== content1) {
			await fs.writeFileAsync(name, content2);
			return (await this.reload());
		}
	}

};

export var kowixInvoke = function(local, ctx) {
	NginxSite.local = local;
	return NginxSite;
};
