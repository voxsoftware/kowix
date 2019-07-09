import Os from 'os'
import Path from 'path'
import fs from '/virtual/@kawix/std/fs/mod.js'
import Child from 'child_process'
class NginxSite
	constructor:(@name)->

	deferred: ()->
		def= {}
		def.promise= new Promise (a,b)->
			def.resolve= a
			def.reject = b
		def



	writeDefaultConfig: ()->
		
		if @_writed
			return

		if Os.platform() is "win32"
			return NginxSite.local.Exception.create("win32 is not supported").putCode("NOT_IMPLEMENTED")

		

		folder= "/nginx"
		if not fs.existsSync(folder)
			await fs.mkdirAsync(folder)

		mode = ""
		path= Path.join(folder, ".default")
		if not fs.existsSync(path)

			mode= "restart"

			conf= """
		user www-data;
		worker_processes auto;
		pid /run/nginx.pid;
		include /etc/nginx/modules-enabled/*.conf;

		events {
			worker_connections 100000;
			# multi_accept on;
		}

		http {

			##
			# Basic Settings
			##

			sendfile on;
			tcp_nopush on;
			tcp_nodelay on;
			keepalive_timeout 65;
			types_hash_max_size 2048;
			# server_tokens off;

			# server_names_hash_bucket_size 64;
			# server_name_in_redirect off;

			include /etc/nginx/mime.types;
			default_type application/octet-stream;

			##
			# SSL Settings
			##

			ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
			ssl_prefer_server_ciphers on;

			##
			# Logging Settings
			##

			access_log /dev/null;
			error_log /var/log/nginx/error.log;

			##
			# Gzip Settings
			##

			gzip on;

			# gzip_vary on;
			# gzip_proxied any;
			# gzip_comp_level 6;
			# gzip_buffers 16 8k;
			# gzip_http_version 1.1;
			# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

			##
			# Virtual Host Configs
			##

			include /etc/nginx/conf.d/*.conf;
			#include /etc/nginx/sites-enabled/*;
			include /nginx/conf/*;
		}
			"""
			await fs.writeFileAsync(path, conf)
			if fs.existsSync("/etc/nginx/nginx.conf")
				await fs.writeFileAsync("/etc/nginx/nginx.conf", """
				include /nginx/.default;
				""")

		path= Path.join(folder, "conf")
		if not fs.existsSync(path)
			await fs.mkdirAsync(path)
			@_writed= yes

			await @addSite
				name: "zzz-default"
				nginx:
					ssl: yes



		if mode
			await @reload(mode)


	restart: ()->
		@reload "restart"


	reload: (mode = "reload")->
		# service nginx reload
		if mode
			if process.getuid() is 0
				cmd= "/usr/sbin/service"
				args= ["nginx", mode]
			else
				cmd= "sudo"
				args= ["/usr/sbin/service", "nginx", mode]

			def= @deferred()
			p= Child.spawn(cmd, args)
			p.on "exit", def.resolve
			await def.promise







	addSite: (site)->
		if not @_writed
			await @writeDefaultConfig()


		name= Path.join("/nginx/conf", site.name)
		if fs.existsSync(name)
			content1= await fs.readFileAsync(name)

		dhs_config = NginxSite.local.context.server.config
		config= dhs_config.readCached()
		address= config.cluster[0]?.address ? config.address
		address= address.replace "0.0.0.0", "127.0.0.1"
		if address.startsWith("127.0.0.1")
			address= "http://#{address}"

		sslconfig= ''
		nginxconfig= Object.assign {}, site.webserver ? site.nginx ? {}, config.nginx


		client_certificate = no 
		client_certificate_str = ''

		
		if nginxconfig.ssl
			sslconfig= """
			listen 443 ssl;
			ssl_certificate #{nginxconfig.ssl.crt ? Path.join(__dirname, "kowix.dev.crt")};
			ssl_certificate_key #{nginxconfig.ssl.key ? Path.join(__dirname, "kowix.dev.key")};
			"""

			if  nginxconfig.ssl.requestCertificate
				client_certificate = yes 
				cafile = dhs_config.resolvePath(nginxconfig.ssl.ca, dhs_config.readCached())
				sslconfig += """
			
			ssl_client_certificate #{cafile};
			ssl_verify_client optional;
				"""

				client_certificate_str = """
			proxy_set_header x-client-crt "$ssl_client_escaped_cert";
			proxy_set_header x-client-crt-verify "$ssl_client_verify";
			proxy_set_header x-client-crt-subject "$ssl_client_s_dn";
				"""

		rootconfig= ""
		if nginxconfig.rootdir
			rootconfig= """
			location ~ /.well-known {
					root /var/www/html;
					allow all;
			}
			root /var/www/html;
			"""



		head= """

		map $http_upgrade $connection_upgrade {
				default upgrade;
				'' close;
		}
		"""


		generate= (host)->
			content= """

	server {
			listen 80;
			#{sslconfig}
			#{rootconfig}

			server_name #{host?.name ? host?.host ? host};
			proxy_buffering off;
			proxy_buffer_size 8k;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header X-Forwarded-Proto $scheme;
			proxy_set_header X-Nginx-url $request_uri;

			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection $connection_upgrade;
			
			#{client_certificate_str}


			client_max_body_size #{nginxconfig.client_max_body_size ? "5000M"};

			proxy_connect_timeout #{nginxconfig.connect_timeout ? "600"};
			proxy_send_timeout #{nginxconfig.send_timeout ? "600"};
			proxy_read_timeout #{nginxconfig.read_timeout ? "600"};
			send_timeout #{nginxconfig.send_timeout ? "600"};



			location ~ /\:\:(.*)/(.*){
					proxy_pass http://127.0.0.1:$1/$2$is_args$args;
			}

			location ~ /\:\:(.*){
					proxy_pass http://127.0.0.1:$1/$is_args$args;
			}

			location / {
					proxy_pass #{address};
			}
	}


			"""
		generated= []
		if site.hostnames?.length
			for host in site.hostnames
				generated.push generate(host)
		else
			generated.push generate
				name: '_'


		content2= head + "\n" + generated.join("\n")
		if content2 isnt content1
			await fs.writeFileAsync(name, content2)
			await @reload()


export kowixInvoke= (local,ctx)->
	NginxSite.local= local
	return NginxSite
