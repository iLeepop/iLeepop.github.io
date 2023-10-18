# 防盗链

就是防小偷，防其它网站偷你网站的内容。

**当然不一定防得住。**

在一般的大型网站中，打开控制台的 **Network**，查看图片或者其它资源，可以在 **Request Headers** 里找到 **referer** 属性。

详情见下图：

......

可惜没图，以后再弄吧，反正你能看见有个 **referer** 属性。

它所指明的就是发起请求的域名。

通过它，我们就能够判断，是否是其它网站在挪用咱们网站的资源。

## 防住

打开命令行：

```bash
cd /etc/nginx/
#找到自己的Nginx安装位置
cd ./conf.d
#
ls
#
vim ilee.conf
#创建并编辑一个你自己的.conf配置文件	
```

这是咱之前的：

```nginx
server {
  listen 81;
  location / {
    root /home/page/;
  }
}
```

修改后：

```nginx
server {
  listen 81;
  server_name localhost;
  location / {
    root /home/page/;
  }
    location ~* \.(gif|jpg|png)$ {
        root /home/page/img/;
        valid_referers none blocked baidu.com;
        if ($invalid_referer) {
            rewrite ^ http://你的IP:81/error.jpeg;
            break;
        }
    }
}
```

可以看到里面有一个 **valid_referers** 后面接的是 none blocked 意思是不去阻止，后面写的是 baidu.com ，这个可以去主机host里面改，Windows10系统的 host 在 C:\Windows\System32\drivers\etc\ 目录下：

```host
YourrIP baidu.com
```

这样在浏览器中输入 baidu.com:81 即可访问到正确的资源，但是以 ip 去访问则无法获取到资源。

确保图片资源都上传到位，接着重新加载配置：

```bash
nginx -s reload
#也可以使用这个
!nginx
```

编辑访问的 index.html 文件：

```html
<html>
    <body>
        <h1>
            Hi,CRfilee
        </h1>
        <img src="http://你的ip:81/123.png">
    </body>
</html>
```

去试一下访问：

1. baidu.com:81
2. 你的ip:81

看看得到的结果是否相同。

## 防不住

**防得住吗？真的防的住吗？防不住吧？**

上述的案例很简单，同时有着很明显的缺点就是，如果服务器无法获取 referer 的值，就无法进行判断。

将 index.html 修改一下：

```html
<html>
    <head>
        <meta name="referrer" content="no-referrer" />
    </head>
    <body>
        <h1>
            Hi,CRfilee
        </h1>
        <img src="http://你的ip:81/123.png">
    </body>
</html>
```

再使用ip访问，发现可以获取到正确的结果。

可以自己反复修改，来看看是怎么个事。

当然，这里的案例都很简单，没有实际意义，但是有盾就有矛，有好就有坏，遇到问题有能力处理才是最关键的。
