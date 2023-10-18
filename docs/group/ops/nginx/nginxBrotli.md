# Brotli压缩

## 配置

打开命令行：

```bash
cd /etc
#找一个你觉得合适的目录
git clone https://github.com/google/ngx_brotli.git
#
cd ngx_brotli
#
git submodule update --init
```

之后要重新编译Nginx，在配置文件里面添加 **--add-module=/etc/ngx_brotli**：

```bash
nginx -v
#查看nginx的版本，跑官网下一个
wget https://nginx.org/download/nginx-1.20.1.tar.gz
#这个是我的版本，下自己的对应版本
#后面的就是源码安装方式
tar -axvf nginx-1.20.1.tar.gz
#
cd ./nginx-1.20.1
#
./configure --prefix=等下！
#
nginx -V
#先查一下自己安装的时的参数
#将这个 --add-module=/etc/ngx_brotli 拼进去 => ... --add-module=/etc/ngx_brotli ...
./configure --prefix= .... --add-module=/etc/ngx_brotli ...
```

紧接着，我遇到问题了

```bash
./configure: error: the HTTP XSLT module requires the libxml2/libxslt
libraries. You can either do not enable the module or install the libraries.
#报错
#
#
yum install libxml2 libxml2-devel libxslt libxslt-devel
#下载相关库
```

```bash
./configure: error: the HTTP image filter module requires the GD library.
You can either do not enable the module or install the libraries.
#报错
#
#
yum install gd gd-devel
#下载相关库
```

```bash
./configure: error: perl module ExtUtils::Embed is required
#报错
#
#
yum install perl-ExtUtils-Embed
#下载相关库
```

```bash
./configure: error: the Google perftools module requires the Google perftools
library. You can either do not enable the module or install the library
#报错
#
#
yum install google-perftools google-perftools-devel
#下载相关库
```

一套下来，终归是缺什么下什么。

确认没问题后：

```bash
make
```

等进程完成：

```bash
cd ./objs/
#
mv ./nginx /sbin/nginx
#第二个路径是我的nginx，你找你自己的
nginx -V
#査看一下，编译参数里面有没有 --add-module=/etc/ngx_brotli 有便是成功了 没有自个找问题啊啊啊
```

去你的配置文件 **nginx.conf** 的 server 块内编辑：

```nginx
...
server {
    brotli on;
    brotli_comp_level 6;
    brotli_buffers 16 8k;
    brotli_min_length 20;
    brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml;
}
...
```

| 名称              | 参数      | 详情                                                         |
| ----------------- | --------- | ------------------------------------------------------------ |
| brotli            | on        | 开启brotli压缩功能                                           |
| brotli_comp_level | 1-11      | 压缩比例，用来指定brotli压缩比，1 压缩比最小，处理速度最快，11 压缩比最大，传输速度快，但是处理慢，也比较消耗CPU资源。默认值为 6 ,使用默认值即可 |
| brotli_buffers    | 16 8k     | 设置用于压缩响应的缓冲区number和size。默认情况下，缓冲区大小等于一个内存页面。 默认值：32 4k\|16 8k |
| brotli_min_length | 20        | 设置length要压缩的响应的最小值，长度仅由Content-Length响应头字段确定。默认为 20 |
| brotli_types      | text/html | 用来指定压缩的类型，text/html类型总是会被压缩。              |

在浏览器控制台Network看到 **Response Header** 中的 **Content-Encoding** 值为 **br**
