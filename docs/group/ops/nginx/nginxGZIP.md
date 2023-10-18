# GZIP压缩

## 配置

打开命令行，进入nginx配置目录：

```bash
cd /etc/nginx
#
vim nginx.conf
```

在你的server块中添加以下内容：

```nginx
...
server {
    gzip on;
    gzip_types application/javascript;
    ...
}
...
```

开启gzip压缩功能，并表示将 js 文件进行压缩。

可以自己去弄一个几M的 js 文件，丢到服务器试一试，在浏览器控制台 Network 可以查看文件的原大小和压缩后的大小，自行比对。

## 参数

| 名称              | 参考参数             | 详情                                                         |
| ----------------- | -------------------- | ------------------------------------------------------------ |
| gzip              | on                   | 决定是否开启gzip模块                                         |
| gzip_min_length   | 1k                   | 当返回内容大于此值时才会使用gzip进行压缩,以K为单位,当值为0时，所有页面都进行压缩，设置小于1k意义不大 |
| gzip_comp_level   | 6                    | 设置gzip压缩等级，1-9可选，等级越底压缩速度越快文件压缩比越小，反之速度越慢文件压缩比越大，占用CPU，高并发不建议使用 |
| gzip_types        | js\css\text\json\... | 匹配压缩类型，取自application/type，文本压缩效果最好         |
| gzip_vary         | on                   | 用在响应头添加 very:accept-encoding，让代理服务器根据请求头识别是否启用了gzip |
| gzip_http_version | 1.1                  | 启用gzip的最低http协议版本，默认是1.1                        |
| gzip_buffers      | 2 4k                 | 以4k为单位,按照原始数据大小以4k为单位的2倍申请内存，缓冲区   |
| gzip_static       | on                   | 静态压缩，提前准备好的压缩文件，在同级目录下会有一个.gz的压缩包，避免动态压缩性能较好 |
| gzip_disable      | MSIE[1-6]            | (IE5.5和IE6 SP1使用msie6参数来禁止gzip压缩 )指定哪些不需要gzip压缩的浏览器(将和User-Agents进行匹配),依赖于PCRE库，有些浏览器对于gzip支持不友好 |
| gzip_proxied      | off                  | nginx做为反向代理时启用,off(关闭所有代理结果的数据的压缩),expired(启用压缩,如果header头中包括"Expires"头信息),no-cache(启用压缩,header头中包含"Cache-Control:no-cache"),no-store(启用压缩,header头中包含"Cache-Control:no-store"),private(启用压缩,header头中包含"Cache-Control:private"),no_last_modefied(启用压缩,header头中不包含"Last-Modified"),no_etag(启用压缩,如果header头中不包含"Etag"头信息),auth(启用压缩,如果header头中包含"Authorization"头信息) |

在浏览器控制台Network看到 **Response Header** 中的 **Content-Encoding** 值为 **gzip**