# 安装

本人的服务器系统是CentOS所以使用yum安装：

```bash
yum install nginx
```

自动安装，这是最简单的一种方式。

[Nginx官网](https://nginx.org/en/)有详细的介绍。

## 启动

安装完成后，检查一下Nginx有没有启动：

```bash
systemctl status nginx
#
systemctl status nginx.service
```

如果显示没有启动：

```bash
systemctl start nginx
#
systemctl start nginx.service
```

显示错误代码：**Failed to start The nginx HTTP and rever...r.**

自己去检查一下哈，有可能是因为端口80被占用了。

再次检查Nginx状态：

```bash
systemctl status nginx
#
systemctl status nginx.service
```

显示Active状态是：**active（running）**即启动成功。

去浏览器查看。

Nginx默认安装位置：

```bash
cd /etc/nginx/
```

更改配置：

```bash
cd ./conf.d
#
ls
#空
touch ilee.conf
#创建配置文件
vim ilee.conf
#编辑
```

```nginx
server {
	listen 81;
	location / {
		root /home/page/;
	}
}
```

检查配置：

```bash
nginx -t
#
// nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
// nginx: configuration file /etc/nginx/nginx.conf test is successful
如果是fail 自己去看看配置文件是不是有错误
```

Nginx重新读取配置：

```bash
nginx -s reload
```

**注意**，云服务器需要在防火墙开启相应的端口

简单写个主页

```bash
cd /home/page
#
touch index.html
vim index.html
```

```index.html
<html>
	<body>
		<h1>Hi,CRfilee</h1>
	</body>
</html>
```

去浏览器查看。

设置开机自启（有需求就开）：

```bash
systemctl enable nginx
```

## 停止

很多方式停止，先查看nginx进程信息：

```bash
ps -ef|grep nginx
```

会显示三个nginx进程，一个master进程，两个worker进程。

我们再输入：

```bash
nginx -s stop
```

即可关闭，接着我们再次启动：

```bash
systemctl start nginx
```

下面再展示几个停止方法：

```bash
nginx -s quit
#
#査进程id 使用kill
ps -ef|grep nginx
kill -quit [进程id]
#
kill -term [进程id]
#
kill -9 [进程id]
```

- 启动文件在 **/sbin** 下
- 配置文件在 **/etc/nginx** 下
- 日志文件在 **/var/log/nginx** 下

## 源码安装

想做更多了解可以看一下

首先去[Nginx官网下载页面](https://nginx.org/en/download.html)，找到自己想下的版本，然后复制其链接地址，例如：

```http
https://nginx.org/download/nginx-1.24.0.tar.gz
```

cd到新创建的文件夹，在命令行输入：

```bash
wget https://nginx.org/download/nginx-1.24.0.tar.gz
```

等待下载完成，进行解压：

```bash
tar -axvf nginx-1.22.1.tar.gz
#根据自己的文件名，tab补全也可以
```

cd进入Nginx文件目录：

```bash
 cd nginx-1.24.0/
 #查看目录结构
 ls
 #
auto //辅助安装的一些文件 lib库之类
CHANGES //版本说明 英语
CHANGES.ru //版本说明 俄语
conf //默认配置文件信息
configure //重要文件 预备执行文件
contrib
html
LICENSE
man //帮助文档
README
src
```

查看 **./configure** 支持的操作：

```bash
./configure --help
```

执行安装操作：

```bash
./configure --prefix=/home/nginx
#想安哪安哪
#如果提示缺lib库，缺什么下什么
```

然后在当前目录再：

```bash
make
#....
make install
```

安装完成，进入安装目录：

```bash
cd /home/nginx/
#...
ls
#
conf 
html
logs
sbin
```

检查Nginx版本：

```bash
cd ./sbin
#
ls
#发现里面有一个nginx文件
./nginx -v
#一定要加./ 不然使用的nginx依旧是上所安装的nginx 可以自行比对两者的版本
./nginx -V
#查看安装时指令
```

启动：

```bash
cd ./sbin
#确保用户在./sbin目录中
./nginx
#
ps -ef|grep nginx
```



