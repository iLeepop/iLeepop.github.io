# SSL

去下载你的ssl证书文件。

上传到服务器，解压。

得到 **.crt** 以及 **.key** 文件。

打开 **nginx.conf** 文件：

```bash
cd /etc/nginx/
#
vim nginx.conf
```

```nginx
...
server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name  _;
        root         /usr/share/nginx/html;

        ssl_certificate "/opt/home/ssl/cra2yk1k/c2ytb.crt";#这里填你的 .crt文件
        ssl_certificate_key "/opt/home/ssl/cra2yk1k/c2yt.key";#这里也是 .key
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

         # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        error_page 404 /404.html;
            location = /40x.html {
        	}

        error_page 500 502 503 504 /50x.html;
        	location = /50x.html {
			}
		}
...
```

