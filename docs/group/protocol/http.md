# HTTP协议

::: tip

以下都是copy的，以后学习中遇到相关问题再写。

:::

HTTP 协议一般指 HTTP（超文本传输协议）。

超文本传输协议（英语：HyperText Transfer Protocol，缩写：HTTP）是一种用于分布式、协作式和超媒体信息系统的应用层协议，是因特网上应用最为广泛的一种网络传输协议，所有的 WWW 文件都必须遵守这个标准。

HTTP 是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。

HTTP 是一个基于 TCP/IP 通信协议来传递数据的（HTML 文件、图片文件、查询结果等）。

## 简介

HTTP 协议是 Hyper Text Transfer Protocol（超文本传输协议）的缩写，是用于从万维网（ WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。

HTTP 是一个基于 TCP/IP 通信协议来传递数据（HTML 文件、图片文件、查询结果等）。

HTTPS 协议是 HyperText Transfer Protocol Secure（超文本传输安全协议）的缩写，是一种通过计算机网络进行安全通信的传输协议。

HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包，HTTPS 开发的主要目的，是提供对网站服务器的身份认证，保护交换资料的隐私与完整性。

HTTP 的 URL 是由 **http://** 起始与默认使用端口 **80**，而 HTTPS 的 URL 则是由 **https://** 起始与默认使用端口**443**。

### 工作原理

HTTP 协议工作于客户端-服务端架构上。

浏览器作为 HTTP 客户端通过 URL 向 HTTP 服务端即 WEB 服务器发送所有请求。

Web 服务器有：Apache 服务器，IIS 服务器（Internet Information Services）等。

Web 服务器根据接收到的请求后，向客户端发送响应信息。

HTTP 默认端口号为 80，但是你也可以改为 8080 或者其他端口。

**HTTP 三点注意事项：**

- HTTP 是无连接：无连接的含义是限制每次连接只处理一个请求，服务器处理完客户的请求，并收到客户的应答后，即断开连接，采用这种方式可以节省传输时间。
- HTTP 是媒体独立的：这意味着，只要客户端和服务器知道如何处理的数据内容，任何类型的数据都可以通过HTTP发送，客户端以及服务器指定使用适合的 MIME-type 内容类型。
- HTTP 是无状态：HTTP 协议是无状态协议，无状态是指协议对于事务处理没有记忆能力，缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大，另一方面，在服务器不需要先前信息时它的应答就较快。

### 作用

HTTPS 的主要作用是在不安全的网络上创建一个安全信道，并可在使用适当的加密包和服务器证书可被验证且可被信任时，对窃听和中间人攻击提供合理的防护。

HTTPS 的信任基于预先安装在操作系统中的证书颁发机构（CA）。

因此，与一个网站之间的 HTTPS 连线仅在这些情况下可被信任：

- 浏览器正确地实现了 HTTPS 且操作系统中安装了正确且受信任的证书颁发机构
- 证书颁发机构仅信任合法的网站
- 被访问的网站提供了一个有效的证书，也就是说它是一个由操作系统信任的证书颁发机构签发的（大部分浏览器会对无效的证书发出警告）
- 该证书正确地验证了被访问的网站
- 此协议的加密层（SSL/TLS）能够有效地提供认证和高强度的加密

Google Chrome、Internet Explorer 和 Firefox 等浏览器在网站含有由加密和未加密内容组成的混合内容时，会发出警告。

## 消息结构

HTTP是基于客户端/服务端（C/S）的架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。

一个HTTP"客户端"是一个应用程序（Web浏览器或其他任何客户端），通过连接到服务器达到向服务器发送一个或多个HTTP的请求的目的。

一个HTTP"服务器"同样也是一个应用程序（通常是一个Web服务，如Apache Web服务器或IIS服务器等），通过接收客户端的请求并向客户端发送HTTP响应数据。

HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。

一旦建立连接后，数据消息就通过类似Internet邮件所使用的格式[RFC5322]和多用途Internet邮件扩展（MIME）[RFC2045]来传送。

### 客户端请求消息

客户端发送一个HTTP请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成。

### 服务器响应消息

HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。

```http
HTTP/1.1 200 OK #---> 状态行

#下面三行是消息报头
Date: Sat, 31 Dec 2005 23:00:00 GMT
Content-Type: text/html;charset=ISO-8859-1
Content-Length: 122
------空行------

#以下都是响应正文
<html>
<head>
<title>Hi Ilee</title>
</head>
<body>
<!-- here is body -->
</body>
</html>
```

## 请求方法

根据 HTTP 标准，HTTP 请求可以使用多种请求方法。

HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD 方法。

HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 方法。

| 序号-Index | 方法-method | 描述-description                                             |
| ---------- | ----------- | ------------------------------------------------------------ |
| 1          | GET         | 请求指定的页面信息，并返回实体主体。                         |
| 2          | HEAD        | 类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头 |
| 3          | POST        | 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。 |
| 4          | PUT         | 从客户端向服务器传送的数据取代指定的文档的内容。             |
| 5          | DELETE      | 请求服务器删除指定的页面。                                   |
| 6          | CONNECT     | HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。    |
| 7          | OPTIONS     | 允许客户端查看服务器的性能。                                 |
| 8          | TRACE       | 回显服务器收到的请求，主要用于测试或诊断。                   |
| 9          | PATCH       | 是对 PUT 方法的补充，用来对已知资源进行局部更新 。           |

## 响应头信息

HTTP请求头提供了关于请求，响应或者其他的发送实体的信息。

| 应答头           | 说明                                                         |
| :--------------- | :----------------------------------------------------------- |
| Allow            | 服务器支持哪些请求方法（如GET、POST等）。                    |
| Content-Encoding | 文档的编码（Encode）方法。只有在解码之后才可以得到Content-Type头指定的内容类型。利用gzip压缩文档能够显著地减少HTML文档的下载时间。Java的GZIPOutputStream可以很方便地进行gzip压缩，但只有Unix上的Netscape和Windows上的IE 4、IE 5才支持它。因此，Servlet应该通过查看Accept-Encoding头（即request.getHeader("Accept-Encoding")）检查浏览器是否支持gzip，为支持gzip的浏览器返回经gzip压缩的HTML页面，为其他浏览器返回普通页面。 |
| Content-Length   | 表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据。如果你想要利用持久连接的优势，可以把输出文档写入 ByteArrayOutputStream，完成后查看其大小，然后把该值放入Content-Length头，最后通过byteArrayStream.writeTo(response.getOutputStream()发送内容。 |
| Content-Type     | 表示后面的文档属于什么MIME类型。Servlet默认为text/plain，但通常需要显式地指定为text/html。由于经常要设置Content-Type，因此HttpServletResponse提供了一个专用的方法setContentType。 |
| Date             | 当前的GMT时间。你可以用setDateHeader来设置这个头以避免转换时间格式的麻烦。 |
| Expires          | 应该在什么时候认为文档已经过期，从而不再缓存它？             |
| Last-Modified    | 文档的最后改动时间。客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个304（Not Modified）状态。Last-Modified也可用setDateHeader方法来设置。 |
| Location         | 表示客户应当到哪里去提取文档。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。 |
| Refresh          | 表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，你还可以通过setHeader("Refresh", "5; URL=http://host/path")让浏览器读取指定的页面。 注意这种功能通常是通过设置HTML页面HEAD区的＜META HTTP-EQUIV="Refresh" CONTENT="5;URL=http://host/path"＞实现，这是因为，自动刷新或重定向对于那些不能使用CGI或Servlet的HTML编写者十分重要。但是，对于Servlet来说，直接设置Refresh头更加方便。  注意Refresh的意义是"N秒之后刷新本页面或访问指定页面"，而不是"每隔N秒刷新本页面或访问指定页面"。因此，连续刷新要求每次都发送一个Refresh头，而发送204状态代码则可以阻止浏览器继续刷新，不管是使用Refresh头还是＜META HTTP-EQUIV="Refresh" ...＞。  注意Refresh头不属于HTTP 1.1正式规范的一部分，而是一个扩展，但Netscape和IE都支持它。 |
| Server           | 服务器名字。Servlet一般不设置这个值，而是由Web服务器自己设置。 |
| Set-Cookie       | 设置和页面关联的Cookie。Servlet不应使用response.setHeader("Set-Cookie", ...)，而是应使用HttpServletResponse提供的专用方法addCookie。参见下文有关Cookie设置的讨论。 |
| WWW-Authenticate | 客户应该在Authorization头中提供什么类型的授权信息？在包含401（Unauthorized）状态行的应答中这个头是必需的。例如，response.setHeader("WWW-Authenticate", "BASIC realm=＼"executives＼"")。 注意Servlet一般不进行这方面的处理，而是让Web服务器的专门机制来控制受密码保护页面的访问（例如.htaccess）。 |

## 状态码

当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含 HTTP 状态码的信息头（server header）用以响应浏览器的请求。

HTTP 状态码的英文为 **HTTP Status Code**。。

下面是常见的 HTTP 状态码：

- 200 - 请求成功
- 301 - 资源（网页等）被永久转移到其它URL
- 404 - 请求的资源（网页等）不存在
- 500 - 内部服务器错误

### HTTP 状态码分类

HTTP 状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型。响应分为五类：信息响应(100–199)，成功响应(200–299)，重定向(300–399)，客户端错误(400–499)和服务器错误 (500–599)：

| 分类 | 分类描述                                       |
| :--- | :--------------------------------------------- |
| 1**  | 信息，服务器收到请求，需要请求者继续执行操作   |
| 2**  | 成功，操作被成功接收并处理                     |
| 3**  | 重定向，需要进一步的操作以完成请求             |
| 4**  | 客户端错误，请求包含语法错误或无法完成请求     |
| 5**  | 服务器错误，服务器在处理请求的过程中发生了错误 |

**HTTP状态码列表:**

| 状态码 | 状态码英文名称                  | 中文描述                                                     |
| :----- | :------------------------------ | :----------------------------------------------------------- |
| 100    | Continue                        | 继续。客户端应继续其请求                                     |
| 101    | Switching Protocols             | 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议 |
|        |                                 |                                                              |
| 200    | OK                              | 请求成功。一般用于GET与POST请求                              |
| 201    | Created                         | 已创建。成功请求并创建了新的资源                             |
| 202    | Accepted                        | 已接受。已经接受请求，但未处理完成                           |
| 203    | Non-Authoritative Information   | 非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本 |
| 204    | No Content                      | 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档 |
| 205    | Reset Content                   | 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域 |
| 206    | Partial Content                 | 部分内容。服务器成功处理了部分GET请求                        |
|        |                                 |                                                              |
| 300    | Multiple Choices                | 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择 |
| 301    | Moved Permanently               | 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替 |
| 302    | Found                           | 临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI |
| 303    | See Other                       | 查看其它地址。与301类似。使用GET和POST请求查看               |
| 304    | Not Modified                    | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 305    | Use Proxy                       | 使用代理。所请求的资源必须通过代理访问                       |
| 306    | Unused                          | 已经被废弃的HTTP状态码                                       |
| 307    | Temporary Redirect              | 临时重定向。与302类似。使用GET请求重定向                     |
|        |                                 |                                                              |
| 400    | Bad Request                     | 客户端请求的语法错误，服务器无法理解                         |
| 401    | Unauthorized                    | 请求要求用户的身份认证                                       |
| 402    | Payment Required                | 保留，将来使用                                               |
| 403    | Forbidden                       | 服务器理解请求客户端的请求，但是拒绝执行此请求               |
| 404    | Not Found                       | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面 |
| 405    | Method Not Allowed              | 客户端请求中的方法被禁止                                     |
| 406    | Not Acceptable                  | 服务器无法根据客户端请求的内容特性完成请求                   |
| 407    | Proxy Authentication Required   | 请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权 |
| 408    | Request Time-out                | 服务器等待客户端发送的请求时间过长，超时                     |
| 409    | Conflict                        | 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突 |
| 410    | Gone                            | 客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置 |
| 411    | Length Required                 | 服务器无法处理客户端发送的不带Content-Length的请求信息       |
| 412    | Precondition Failed             | 客户端请求信息的先决条件错误                                 |
| 413    | Request Entity Too Large        | 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息 |
| 414    | Request-URI Too Large           | 请求的URI过长（URI通常为网址），服务器无法处理               |
| 415    | Unsupported Media Type          | 服务器无法处理请求附带的媒体格式                             |
| 416    | Requested range not satisfiable | 客户端请求的范围无效                                         |
| 417    | Expectation Failed              | 服务器无法满足Expect的请求头信息                             |
|        |                                 |                                                              |
| 500    | Internal Server Error           | 服务器内部错误，无法完成请求                                 |
| 501    | Not Implemented                 | 服务器不支持请求的功能，无法完成请求                         |
| 502    | Bad Gateway                     | 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应 |
| 503    | Service Unavailable             | 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中 |
| 504    | Gateway Time-out                | 充当网关或代理的服务器，未及时从远端服务器获取请求           |
| 505    | HTTP Version not supported      | 服务器不支持请求的HTTP协议的版本，无法完成处理               |

## content-type

Content-Type（内容类型），一般是指网页中存在的 Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些 PHP 网页点击的结果却是下载一个文件或一张图片的原因。

Content-Type 标头告诉客户端实际返回的内容的内容类型。

语法格式：

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

**常见的媒体格式类型如下：**

- text/html ： HTML格式
- text/plain ：纯文本格式
- text/xml ： XML格式
- image/gif ：gif图片格式
- image/jpeg ：jpg图片格式
- image/png：png图片格式

**以application开头的媒体格式类型：**

- application/xhtml+xml ：XHTML格式
- application/xml： XML数据格式
- application/atom+xml ：Atom XML聚合格式
- application/json： JSON数据格式
- application/pdf：pdf格式
- application/msword ： Word文档格式
- application/octet-stream ： 二进制流数据（如常见的文件下载）
- application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）

**另外一种常见的媒体格式是上传文件之时使用的：**

- multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式

### 对照表

| 文件扩展名                          | Content-Type(Mime-Type)                 | 文件扩展名 | Content-Type(Mime-Type)             |
| :---------------------------------- | :-------------------------------------- | :--------- | :---------------------------------- |
| .*（ 二进制流，不知道下载文件类型） | application/octet-stream                | .tif       | image/tiff                          |
| .001                                | application/x-001                       | .301       | application/x-301                   |
| .323                                | text/h323                               | .906       | application/x-906                   |
| .907                                | drawing/907                             | .a11       | application/x-a11                   |
| .acp                                | audio/x-mei-aac                         | .ai        | application/postscript              |
| .aif                                | audio/aiff                              | .aifc      | audio/aiff                          |
| .aiff                               | audio/aiff                              | .anv       | application/x-anv                   |
| .asa                                | text/asa                                | .asf       | video/x-ms-asf                      |
| .asp                                | text/asp                                | .asx       | video/x-ms-asf                      |
| .au                                 | audio/basic                             | .avi       | video/avi                           |
| .awf                                | application/vnd.adobe.workflow          | .biz       | text/xml                            |
| .bmp                                | application/x-bmp                       | .bot       | application/x-bot                   |
| .c4t                                | application/x-c4t                       | .c90       | application/x-c90                   |
| .cal                                | application/x-cals                      | .cat       | application/vnd.ms-pki.seccat       |
| .cdf                                | application/x-netcdf                    | .cdr       | application/x-cdr                   |
| .cel                                | application/x-cel                       | .cer       | application/x-x509-ca-cert          |
| .cg4                                | application/x-g4                        | .cgm       | application/x-cgm                   |
| .cit                                | application/x-cit                       | .class     | java/*                              |
| .cml                                | text/xml                                | .cmp       | application/x-cmp                   |
| .cmx                                | application/x-cmx                       | .cot       | application/x-cot                   |
| .crl                                | application/pkix-crl                    | .crt       | application/x-x509-ca-cert          |
| .csi                                | application/x-csi                       | .css       | text/css                            |
| .cut                                | application/x-cut                       | .dbf       | application/x-dbf                   |
| .dbm                                | application/x-dbm                       | .dbx       | application/x-dbx                   |
| .dcd                                | text/xml                                | .dcx       | application/x-dcx                   |
| .der                                | application/x-x509-ca-cert              | .dgn       | application/x-dgn                   |
| .dib                                | application/x-dib                       | .dll       | application/x-msdownload            |
| .doc                                | application/msword                      | .dot       | application/msword                  |
| .drw                                | application/x-drw                       | .dtd       | text/xml                            |
| .dwf                                | Model/vnd.dwf                           | .dwf       | application/x-dwf                   |
| .dwg                                | application/x-dwg                       | .dxb       | application/x-dxb                   |
| .dxf                                | application/x-dxf                       | .edn       | application/vnd.adobe.edn           |
| .emf                                | application/x-emf                       | .eml       | message/rfc822                      |
| .ent                                | text/xml                                | .epi       | application/x-epi                   |
| .eps                                | application/x-ps                        | .eps       | application/postscript              |
| .etd                                | application/x-ebx                       | .exe       | application/x-msdownload            |
| .fax                                | image/fax                               | .fdf       | application/vnd.fdf                 |
| .fif                                | application/fractals                    | .fo        | text/xml                            |
| .frm                                | application/x-frm                       | .g4        | application/x-g4                    |
| .gbr                                | application/x-gbr                       | .          | application/x-                      |
| .gif                                | image/gif                               | .gl2       | application/x-gl2                   |
| .gp4                                | application/x-gp4                       | .hgl       | application/x-hgl                   |
| .hmr                                | application/x-hmr                       | .hpg       | application/x-hpgl                  |
| .hpl                                | application/x-hpl                       | .hqx       | application/mac-binhex40            |
| .hrf                                | application/x-hrf                       | .hta       | application/hta                     |
| .htc                                | text/x-component                        | .htm       | text/html                           |
| .html                               | text/html                               | .htt       | text/webviewhtml                    |
| .htx                                | text/html                               | .icb       | application/x-icb                   |
| .ico                                | image/x-icon                            | .ico       | application/x-ico                   |
| .iff                                | application/x-iff                       | .ig4       | application/x-g4                    |
| .igs                                | application/x-igs                       | .iii       | application/x-iphone                |
| .img                                | application/x-img                       | .ins       | application/x-internet-signup       |
| .isp                                | application/x-internet-signup           | .IVF       | video/x-ivf                         |
| .java                               | java/*                                  | .jfif      | image/jpeg                          |
| .jpe                                | image/jpeg                              | .jpe       | application/x-jpe                   |
| .jpeg                               | image/jpeg                              | .jpg       | image/jpeg                          |
| .jpg                                | application/x-jpg                       | .js        | application/x-javascript            |
| .jsp                                | text/html                               | .la1       | audio/x-liquid-file                 |
| .lar                                | application/x-laplayer-reg              | .latex     | application/x-latex                 |
| .lavs                               | audio/x-liquid-secure                   | .lbm       | application/x-lbm                   |
| .lmsff                              | audio/x-la-lms                          | .ls        | application/x-javascript            |
| .ltr                                | application/x-ltr                       | .m1v       | video/x-mpeg                        |
| .m2v                                | video/x-mpeg                            | .m3u       | audio/mpegurl                       |
| .m4e                                | video/mpeg4                             | .mac       | application/x-mac                   |
| .man                                | application/x-troff-man                 | .math      | text/xml                            |
| .mdb                                | application/msaccess                    | .mdb       | application/x-mdb                   |
| .mfp                                | application/x-shockwave-flash           | .mht       | message/rfc822                      |
| .mhtml                              | message/rfc822                          | .mi        | application/x-mi                    |
| .mid                                | audio/mid                               | .midi      | audio/mid                           |
| .mil                                | application/x-mil                       | .mml       | text/xml                            |
| .mnd                                | audio/x-musicnet-download               | .mns       | audio/x-musicnet-stream             |
| .mocha                              | application/x-javascript                | .movie     | video/x-sgi-movie                   |
| .mp1                                | audio/mp1                               | .mp2       | audio/mp2                           |
| .mp2v                               | video/mpeg                              | .mp3       | audio/mp3                           |
| .mp4                                | video/mpeg4                             | .mpa       | video/x-mpg                         |
| .mpd                                | application/vnd.ms-project              | .mpe       | video/x-mpeg                        |
| .mpeg                               | video/mpg                               | .mpg       | video/mpg                           |
| .mpga                               | audio/rn-mpeg                           | .mpp       | application/vnd.ms-project          |
| .mps                                | video/x-mpeg                            | .mpt       | application/vnd.ms-project          |
| .mpv                                | video/mpg                               | .mpv2      | video/mpeg                          |
| .mpw                                | application/vnd.ms-project              | .mpx       | application/vnd.ms-project          |
| .mtx                                | text/xml                                | .mxp       | application/x-mmxp                  |
| .net                                | image/pnetvue                           | .nrf       | application/x-nrf                   |
| .nws                                | message/rfc822                          | .odc       | text/x-ms-odc                       |
| .out                                | application/x-out                       | .p10       | application/pkcs10                  |
| .p12                                | application/x-pkcs12                    | .p7b       | application/x-pkcs7-certificates    |
| .p7c                                | application/pkcs7-mime                  | .p7m       | application/pkcs7-mime              |
| .p7r                                | application/x-pkcs7-certreqresp         | .p7s       | application/pkcs7-signature         |
| .pc5                                | application/x-pc5                       | .pci       | application/x-pci                   |
| .pcl                                | application/x-pcl                       | .pcx       | application/x-pcx                   |
| .pdf                                | application/pdf                         | .pdf       | application/pdf                     |
| .pdx                                | application/vnd.adobe.pdx               | .pfx       | application/x-pkcs12                |
| .pgl                                | application/x-pgl                       | .pic       | application/x-pic                   |
| .pko                                | application/vnd.ms-pki.pko              | .pl        | application/x-perl                  |
| .plg                                | text/html                               | .pls       | audio/scpls                         |
| .plt                                | application/x-plt                       | .png       | image/png                           |
| .png                                | application/x-png                       | .pot       | application/vnd.ms-powerpoint       |
| .ppa                                | application/vnd.ms-powerpoint           | .ppm       | application/x-ppm                   |
| .pps                                | application/vnd.ms-powerpoint           | .ppt       | application/vnd.ms-powerpoint       |
| .ppt                                | application/x-ppt                       | .pr        | application/x-pr                    |
| .prf                                | application/pics-rules                  | .prn       | application/x-prn                   |
| .prt                                | application/x-prt                       | .ps        | application/x-ps                    |
| .ps                                 | application/postscript                  | .ptn       | application/x-ptn                   |
| .pwz                                | application/vnd.ms-powerpoint           | .r3t       | text/vnd.rn-realtext3d              |
| .ra                                 | audio/vnd.rn-realaudio                  | .ram       | audio/x-pn-realaudio                |
| .ras                                | application/x-ras                       | .rat       | application/rat-file                |
| .rdf                                | text/xml                                | .rec       | application/vnd.rn-recording        |
| .red                                | application/x-red                       | .rgb       | application/x-rgb                   |
| .rjs                                | application/vnd.rn-realsystem-rjs       | .rjt       | application/vnd.rn-realsystem-rjt   |
| .rlc                                | application/x-rlc                       | .rle       | application/x-rle                   |
| .rm                                 | application/vnd.rn-realmedia            | .rmf       | application/vnd.adobe.rmf           |
| .rmi                                | audio/mid                               | .rmj       | application/vnd.rn-realsystem-rmj   |
| .rmm                                | audio/x-pn-realaudio                    | .rmp       | application/vnd.rn-rn_music_package |
| .rms                                | application/vnd.rn-realmedia-secure     | .rmvb      | application/vnd.rn-realmedia-vbr    |
| .rmx                                | application/vnd.rn-realsystem-rmx       | .rnx       | application/vnd.rn-realplayer       |
| .rp                                 | image/vnd.rn-realpix                    | .rpm       | audio/x-pn-realaudio-plugin         |
| .rsml                               | application/vnd.rn-rsml                 | .rt        | text/vnd.rn-realtext                |
| .rtf                                | application/msword                      | .rtf       | application/x-rtf                   |
| .rv                                 | video/vnd.rn-realvideo                  | .sam       | application/x-sam                   |
| .sat                                | application/x-sat                       | .sdp       | application/sdp                     |
| .sdw                                | application/x-sdw                       | .sit       | application/x-stuffit               |
| .slb                                | application/x-slb                       | .sld       | application/x-sld                   |
| .slk                                | drawing/x-slk                           | .smi       | application/smil                    |
| .smil                               | application/smil                        | .smk       | application/x-smk                   |
| .snd                                | audio/basic                             | .sol       | text/plain                          |
| .sor                                | text/plain                              | .spc       | application/x-pkcs7-certificates    |
| .spl                                | application/futuresplash                | .spp       | text/xml                            |
| .ssm                                | application/streamingmedia              | .sst       | application/vnd.ms-pki.certstore    |
| .stl                                | application/vnd.ms-pki.stl              | .stm       | text/html                           |
| .sty                                | application/x-sty                       | .svg       | text/xml                            |
| .swf                                | application/x-shockwave-flash           | .tdf       | application/x-tdf                   |
| .tg4                                | application/x-tg4                       | .tga       | application/x-tga                   |
| .tif                                | image/tiff                              | .tif       | application/x-tif                   |
| .tiff                               | image/tiff                              | .tld       | text/xml                            |
| .top                                | drawing/x-top                           | .torrent   | application/x-bittorrent            |
| .tsd                                | text/xml                                | .txt       | text/plain                          |
| .uin                                | application/x-icq                       | .uls       | text/iuls                           |
| .vcf                                | text/x-vcard                            | .vda       | application/x-vda                   |
| .vdx                                | application/vnd.visio                   | .vml       | text/xml                            |
| .vpg                                | application/x-vpeg005                   | .vsd       | application/vnd.visio               |
| .vsd                                | application/x-vsd                       | .vss       | application/vnd.visio               |
| .vst                                | application/vnd.visio                   | .vst       | application/x-vst                   |
| .vsw                                | application/vnd.visio                   | .vsx       | application/vnd.visio               |
| .vtx                                | application/vnd.visio                   | .vxml      | text/xml                            |
| .wav                                | audio/wav                               | .wax       | audio/x-ms-wax                      |
| .wb1                                | application/x-wb1                       | .wb2       | application/x-wb2                   |
| .wb3                                | application/x-wb3                       | .wbmp      | image/vnd.wap.wbmp                  |
| .wiz                                | application/msword                      | .wk3       | application/x-wk3                   |
| .wk4                                | application/x-wk4                       | .wkq       | application/x-wkq                   |
| .wks                                | application/x-wks                       | .wm        | video/x-ms-wm                       |
| .wma                                | audio/x-ms-wma                          | .wmd       | application/x-ms-wmd                |
| .wmf                                | application/x-wmf                       | .wml       | text/vnd.wap.wml                    |
| .wmv                                | video/x-ms-wmv                          | .wmx       | video/x-ms-wmx                      |
| .wmz                                | application/x-ms-wmz                    | .wp6       | application/x-wp6                   |
| .wpd                                | application/x-wpd                       | .wpg       | application/x-wpg                   |
| .wpl                                | application/vnd.ms-wpl                  | .wq1       | application/x-wq1                   |
| .wr1                                | application/x-wr1                       | .wri       | application/x-wri                   |
| .wrk                                | application/x-wrk                       | .ws        | application/x-ws                    |
| .ws2                                | application/x-ws                        | .wsc       | text/scriptlet                      |
| .wsdl                               | text/xml                                | .wvx       | video/x-ms-wvx                      |
| .xdp                                | application/vnd.adobe.xdp               | .xdr       | text/xml                            |
| .xfd                                | application/vnd.adobe.xfd               | .xfdf      | application/vnd.adobe.xfdf          |
| .xhtml                              | text/html                               | .xls       | application/vnd.ms-excel            |
| .xls                                | application/x-xls                       | .xlw       | application/x-xlw                   |
| .xml                                | text/xml                                | .xpl       | audio/scpls                         |
| .xq                                 | text/xml                                | .xql       | text/xml                            |
| .xquery                             | text/xml                                | .xsd       | text/xml                            |
| .xsl                                | text/xml                                | .xslt      | text/xml                            |
| .xwd                                | application/x-xwd                       | .x_b       | application/x-x_b                   |
| .sis                                | application/vnd.symbian.install         | .sisx      | application/vnd.symbian.install     |
| .x_t                                | application/x-x_t                       | .ipa       | application/vnd.iphone              |
| .apk                                | application/vnd.android.package-archive | .xap       | application/x-silverlight-app       |

## MIME 类型

MIME (Multipurpose Internet Mail Extensions) 是描述消息内容类型的标准，用来表示文档、文件或字节流的性质和格式。

MIME 消息能包含文本、图像、音频、视频以及其他应用程序专用的数据。

浏览器通常使用 MIME 类型（而不是文件扩展名）来确定如何处理URL，因此 We b服务器在响应头中添加正确的 MIME 类型非常重要。如果配置不正确，浏览器可能会无法解析文件内容，网站将无法正常工作，并且下载的文件也会被错误处理。

### 语法

MIME 类型通用结构：

```
type/subtype
```

MIME 的组成结构非常简单，由类型与子类型两个字符串中间用 **/** 分隔而组成，不允许有空格。type 表示可以被分多个子类的独立类别，subtype 表示细分后的每个类型。

MIME类型对大小写不敏感，但是传统写法都是小写。

两种主要的 MIME 类型在默认类型中扮演了重要的角色：

- **text/plain** 表示文本文件的默认值。
- **application/octet-stream** 表示所有其他情况的默认值。

### 常见的 MIME 类型

- 超文本标记语言文本 **.html、.html**：**text/html**
- 普通文本 **.txt**： **text/plain**
- RTF 文本 **.rtf**： **application/rtf**
- GIF 图形 **.gif**： **image/gif**
- JPEG 图形 **.jpeg、.jpg**： **image/jpeg**
- au 声音文件 **.au**： **audio/basic**
- MIDI 音乐文件 **mid、.midi**： **audio/midi、audio/x-midi**
- RealAudio 音乐文件 **.ra、.ram**： **audio/x-pn-realaudio**
- MPEG 文件 **.mpg、.mpeg**： **video/mpeg**
- AVI 文件 **.avi**： **video/x-msvideo**
- GZIP 文件 **.gz**： **application/x-gzip**
- TAR 文件 **.tar**： **application/x-tar**

| 类型          | 描述                                                         | 典型示例                                                     |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `text`        | 表明文件是普通文本，理论上是人类可读                         | `text/plain`, `text/html`, `text/css, text/javascript`       |
| `image`       | 表明是某种图像。不包括视频，但是动态图（比如动态gif）也使用image类型 | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`, `image/x-icon`, `image/vnd.microsoft.icon` |
| `audio`       | 表明是某种音频文件                                           | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav` |
| `video`       | 表明是某种视频文件                                           | `video/webm`, `video/ogg`                                    |
| `application` | 表明是某种二进制数据                                         | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

### MIME 对照表

| 媒体类型                                                     | 文件扩展名             | 说明                                                         |
| :----------------------------------------------------------- | :--------------------- | :----------------------------------------------------------- |
| **application/msword**                                       | doc                    | 微软 Office Word 格式（Microsoft Word 97 - 2004 document）   |
| **application/vnd.openxmlformats-officedocument.wordprocessingml.document** | docx                   | 微软 Office Word 文档格式                                    |
| **application/vnd.ms-excel**                                 | xls                    | 微软 Office Excel 格式（Microsoft Excel 97 - 2004 Workbook   |
| **application/vnd.openxmlformats-officedocument.spreadsheetml.sheet** | xlsx                   | 微软 Office Excel 文档格式                                   |
| **application/vnd.ms-powerpoint**                            | ppt                    | 微软 Office PowerPoint 格式（Microsoft PowerPoint 97 - 2003 演示文稿） |
| **application/vnd.openxmlformats-officedocument.presentationml.presentation** | pptx                   | 微软 Office PowerPoint 文稿格式                              |
| **application/x-gzip**                                       | gz, gzip               | GZ 压缩文件格式                                              |
| **application/zip**                                          | zip, 7zip              | ZIP 压缩文件格式                                             |
| **application/rar**                                          | rar                    | RAR 压缩文件格式                                             |
| **application/x-tar**                                        | tar, tgz               | TAR 压缩文件格式                                             |
| **application/pdf**                                          | pdf                    | PDF 是 Portable Document Format 的简称，即便携式文档格式     |
| **application/rtf**                                          | rtf                    | RTF 是指 Rich Text Format，即通常所说的富文本格式            |
| **image/gif**                                                | gif                    | GIF 图像格式                                                 |
| **image/jpeg**                                               | jpg, jpeg              | JPG(JPEG) 图像格式                                           |
| **image/jp2**                                                | jpg2                   | JPG2 图像格式                                                |
| **image/png**                                                | png                    | PNG 图像格式                                                 |
| **image/tiff**                                               | tif, tiff              | TIF(TIFF) 图像格式                                           |
| **image/bmp**                                                | bmp                    | BMP 图像格式（位图格式）                                     |
| **image/svg+xml**                                            | svg, svgz              | SVG 图像格式                                                 |
| **image/webp**                                               | webp                   | WebP 图像格式                                                |
| **image/x-icon**                                             | ico                    | ico 图像格式，通常用于浏览器 Favicon 图标                    |
| **application/kswps**                                        | wps                    | 金山 Office 文字排版文件格式                                 |
| **application/kset**                                         | et                     | 金山 Office 表格文件格式                                     |
| **application/ksdps**                                        | dps                    | 金山 Office 演示文稿格式                                     |
| **application/x-photoshop**                                  | psd                    | Photoshop 源文件格式                                         |
| **application/x-coreldraw**                                  | cdr                    | Coreldraw 源文件格式                                         |
| **application/x-shockwave-flash**                            | swf                    | Adobe Flash 源文件格式                                       |
| **text/plain**                                               | txt                    | 普通文本格式                                                 |
| **application/x-javascript**                                 | js                     | Javascript 文件类型                                          |
| **text/javascript**                                          | js                     | 表示 Javascript 脚本文件                                     |
| **text/css**                                                 | css                    | 表示 CSS 样式表                                              |
| **text/html**                                                | htm, html, shtml       | HTML 文件格式                                                |
| **application/xhtml+xml**                                    | xht, xhtml             | XHTML 文件格式                                               |
| **text/xml**                                                 | xml                    | XML 文件格式                                                 |
| **text/x-vcard**                                             | vcf                    | VCF 文件格式                                                 |
| **application/x-httpd-php**                                  | php, php3, php4, phtml | PHP 文件格式                                                 |
| **application/java-archive**                                 | jar                    | Java 归档文件格式                                            |
| **application/vnd.android.package-archive**                  | apk                    | Android 平台包文件格式                                       |
| **application/octet-stream**                                 | exe                    | Windows 系统可执行文件格式                                   |
| **application/x-x509-user-cert**                             | crt, pem               | PEM 文件格式                                                 |
| **audio/mpeg**                                               | mp3                    | mpeg 音频格式                                                |
| **audio/midi**                                               | mid, midi              | mid 音频格式                                                 |
| **audio/x-wav**                                              | wav                    | wav 音频格式                                                 |
| **audio/x-mpegurl**                                          | m3u                    | m3u 音频格式                                                 |
| **audio/x-m4a**                                              | m4a                    | m4a 音频格式                                                 |
| **audio/ogg**                                                | ogg                    | ogg 音频格式                                                 |
| **audio/x-realaudio**                                        | ra                     | Real Audio 音频格式                                          |
| **video/mp4**                                                | mp4                    | mp4 视频格式                                                 |
| **video/mpeg**                                               | mpg, mpe, mpeg         | mpeg 视频格式                                                |
| **video/quicktime**                                          | qt, mov                | QuickTime 视频格式                                           |
| **video/x-m4v**                                              | m4v                    | m4v 视频格式                                                 |
| **video/x-ms-wmv**                                           | wmv                    | wmv 视频格式（Windows 操作系统上的一种视频格式）             |
| **video/x-msvideo**                                          | avi                    | avi 视频格式                                                 |
| **video/webm**                                               | webm                   | webm 视频格式                                                |
| **video/x-flv**                                              | flv                    | 一种基于 flash 技术的视频格式                                |

### 按照内容类型排列的 MIME 类型列表

| 类型/子类型                             | 扩展名  |
| :-------------------------------------- | :------ |
| application/envoy                       | evy     |
| application/fractals                    | fif     |
| application/futuresplash                | spl     |
| application/hta                         | hta     |
| application/internet-property-stream    | acx     |
| application/mac-binhex40                | hqx     |
| application/msword                      | doc     |
| application/msword                      | dot     |
| application/octet-stream                | *       |
| application/octet-stream                | bin     |
| application/octet-stream                | class   |
| application/octet-stream                | dms     |
| application/octet-stream                | exe     |
| application/octet-stream                | lha     |
| application/octet-stream                | lzh     |
| application/oda                         | oda     |
| application/olescript                   | axs     |
| application/pdf                         | pdf     |
| application/pics-rules                  | prf     |
| application/pkcs10                      | p10     |
| application/pkix-crl                    | crl     |
| application/postscript                  | ai      |
| application/postscript                  | eps     |
| application/postscript                  | ps      |
| application/rtf                         | rtf     |
| application/set-payment-initiation      | setpay  |
| application/set-registration-initiation | setreg  |
| application/vnd.ms-excel                | xla     |
| application/vnd.ms-excel                | xlc     |
| application/vnd.ms-excel                | xlm     |
| application/vnd.ms-excel                | xls     |
| application/vnd.ms-excel                | xlt     |
| application/vnd.ms-excel                | xlw     |
| application/vnd.ms-outlook              | msg     |
| application/vnd.ms-pkicertstore         | sst     |
| application/vnd.ms-pkiseccat            | cat     |
| application/vnd.ms-pkistl               | stl     |
| application/vnd.ms-powerpoint           | pot     |
| application/vnd.ms-powerpoint           | pps     |
| application/vnd.ms-powerpoint           | ppt     |
| application/vnd.ms-project              | mpp     |
| application/vnd.ms-works                | wcm     |
| application/vnd.ms-works                | wdb     |
| application/vnd.ms-works                | wks     |
| application/vnd.ms-works                | wps     |
| application/winhlp                      | hlp     |
| application/x-bcpio                     | bcpio   |
| application/x-cdf                       | cdf     |
| application/x-compress                  | z       |
| application/x-compressed                | tgz     |
| application/x-cpio                      | cpio    |
| application/x-csh                       | csh     |
| application/x-director                  | dcr     |
| application/x-director                  | dir     |
| application/x-director                  | dxr     |
| application/x-dvi                       | dvi     |
| application/x-gtar                      | gtar    |
| application/x-gzip                      | gz      |
| application/x-hdf                       | hdf     |
| application/x-internet-signup           | ins     |
| application/x-internet-signup           | isp     |
| application/x-iphone                    | iii     |
| application/x-javascript                | js      |
| application/x-latex                     | latex   |
| application/x-msaccess                  | mdb     |
| application/x-mscardfile                | crd     |
| application/x-msclip                    | clp     |
| application/x-msdownload                | dll     |
| application/x-msmediaview               | m13     |
| application/x-msmediaview               | m14     |
| application/x-msmediaview               | mvb     |
| application/x-msmetafile                | wmf     |
| application/x-msmoney                   | mny     |
| application/x-mspublisher               | pub     |
| application/x-msschedule                | scd     |
| application/x-msterminal                | trm     |
| application/x-mswrite                   | wri     |
| application/x-netcdf                    | cdf     |
| application/x-netcdf                    | nc      |
| application/x-perfmon                   | pma     |
| application/x-perfmon                   | pmc     |
| application/x-perfmon                   | pml     |
| application/x-perfmon                   | pmr     |
| application/x-perfmon                   | pmw     |
| application/x-pkcs12                    | p12     |
| application/x-pkcs12                    | pfx     |
| application/x-pkcs7-certificates        | p7b     |
| application/x-pkcs7-certificates        | spc     |
| application/x-pkcs7-certreqresp         | p7r     |
| application/x-pkcs7-mime                | p7c     |
| application/x-pkcs7-mime                | p7m     |
| application/x-pkcs7-signature           | p7s     |
| application/x-sh                        | sh      |
| application/x-shar                      | shar    |
| application/x-shockwave-flash           | swf     |
| application/x-stuffit                   | sit     |
| application/x-sv4cpio                   | sv4cpio |
| application/x-sv4crc                    | sv4crc  |
| application/x-tar                       | tar     |
| application/x-tcl                       | tcl     |
| application/x-tex                       | tex     |
| application/x-texinfo                   | texi    |
| application/x-texinfo                   | texinfo |
| application/x-troff                     | roff    |
| application/x-troff                     | t       |
| application/x-troff                     | tr      |
| application/x-troff-man                 | man     |
| application/x-troff-me                  | me      |
| application/x-troff-ms                  | ms      |
| application/x-ustar                     | ustar   |
| application/x-wais-source               | src     |
| application/x-x509-ca-cert              | cer     |
| application/x-x509-ca-cert              | crt     |
| application/x-x509-ca-cert              | der     |
| application/ynd.ms-pkipko               | pko     |
| application/zip                         | zip     |
| audio/basic                             | au      |
| audio/basic                             | snd     |
| audio/mid                               | mid     |
| audio/mid                               | rmi     |
| audio/mpeg                              | mp3     |
| audio/x-aiff                            | aif     |
| audio/x-aiff                            | aifc    |
| audio/x-aiff                            | aiff    |
| audio/x-mpegurl                         | m3u     |
| audio/x-pn-realaudio                    | ra      |
| audio/x-pn-realaudio                    | ram     |
| audio/x-wav                             | wav     |
| image/bmp                               | bmp     |
| image/cis-cod                           | cod     |
| image/gif                               | gif     |
| image/ief                               | ief     |
| image/jpeg                              | jpe     |
| image/jpeg                              | jpeg    |
| image/jpeg                              | jpg     |
| image/pipeg                             | jfif    |
| image/svg+xml                           | svg     |
| image/tiff                              | tif     |
| image/tiff                              | tiff    |
| image/x-cmu-raster                      | ras     |
| image/x-cmx                             | cmx     |
| image/x-icon                            | ico     |
| image/x-portable-anymap                 | pnm     |
| image/x-portable-bitmap                 | pbm     |
| image/x-portable-graymap                | pgm     |
| image/x-portable-pixmap                 | ppm     |
| image/x-rgb                             | rgb     |
| image/x-xbitmap                         | xbm     |
| image/x-xpixmap                         | xpm     |
| image/x-xwindowdump                     | xwd     |
| message/rfc822                          | mht     |
| message/rfc822                          | mhtml   |
| message/rfc822                          | nws     |
| text/css                                | css     |
| text/h323                               | 323     |
| text/html                               | htm     |
| text/html                               | html    |
| text/html                               | stm     |
| text/iuls                               | uls     |
| text/plain                              | bas     |
| text/plain                              | c       |
| text/plain                              | h       |
| text/plain                              | txt     |
| text/richtext                           | rtx     |
| text/scriptlet                          | sct     |
| text/tab-separated-values               | tsv     |
| text/webviewhtml                        | htt     |
| text/x-component                        | htc     |
| text/x-setext                           | etx     |
| text/x-vcard                            | vcf     |
| video/mpeg                              | mp2     |
| video/mpeg                              | mpa     |
| video/mpeg                              | mpe     |
| video/mpeg                              | mpeg    |
| video/mpeg                              | mpg     |
| video/mpeg                              | mpv2    |
| video/quicktime                         | mov     |
| video/quicktime                         | qt      |
| video/x-la-asf                          | lsf     |
| video/x-la-asf                          | lsx     |
| video/x-ms-asf                          | asf     |
| video/x-ms-asf                          | asr     |
| video/x-ms-asf                          | asx     |
| video/x-msvideo                         | avi     |
| video/x-sgi-movie                       | movie   |
| x-world/x-vrml                          | flr     |
| x-world/x-vrml                          | vrml    |
| x-world/x-vrml                          | wrl     |
| x-world/x-vrml                          | wrz     |
| x-world/x-vrml                          | xaf     |
| x-world/x-vrml                          | xof     |

### 按照文件扩展名排列的 MIME 类型列表

| 扩展名  | 类型/子类型                             |
| :------ | :-------------------------------------- |
|         | application/octet-stream                |
| 323     | text/h323                               |
| acx     | application/internet-property-stream    |
| ai      | application/postscript                  |
| aif     | audio/x-aiff                            |
| aifc    | audio/x-aiff                            |
| aiff    | audio/x-aiff                            |
| asf     | video/x-ms-asf                          |
| asr     | video/x-ms-asf                          |
| asx     | video/x-ms-asf                          |
| au      | audio/basic                             |
| avi     | video/x-msvideo                         |
| axs     | application/olescript                   |
| bas     | text/plain                              |
| bcpio   | application/x-bcpio                     |
| bin     | application/octet-stream                |
| bmp     | image/bmp                               |
| c       | text/plain                              |
| cat     | application/vnd.ms-pkiseccat            |
| cdf     | application/x-cdf                       |
| cer     | application/x-x509-ca-cert              |
| class   | application/octet-stream                |
| clp     | application/x-msclip                    |
| cmx     | image/x-cmx                             |
| cod     | image/cis-cod                           |
| cpio    | application/x-cpio                      |
| crd     | application/x-mscardfile                |
| crl     | application/pkix-crl                    |
| crt     | application/x-x509-ca-cert              |
| csh     | application/x-csh                       |
| css     | text/css                                |
| dcr     | application/x-director                  |
| der     | application/x-x509-ca-cert              |
| dir     | application/x-director                  |
| dll     | application/x-msdownload                |
| dms     | application/octet-stream                |
| doc     | application/msword                      |
| dot     | application/msword                      |
| dvi     | application/x-dvi                       |
| dxr     | application/x-director                  |
| eps     | application/postscript                  |
| etx     | text/x-setext                           |
| evy     | application/envoy                       |
| exe     | application/octet-stream                |
| fif     | application/fractals                    |
| flr     | x-world/x-vrml                          |
| gif     | image/gif                               |
| gtar    | application/x-gtar                      |
| gz      | application/x-gzip                      |
| h       | text/plain                              |
| hdf     | application/x-hdf                       |
| hlp     | application/winhlp                      |
| hqx     | application/mac-binhex40                |
| hta     | application/hta                         |
| htc     | text/x-component                        |
| htm     | text/html                               |
| html    | text/html                               |
| htt     | text/webviewhtml                        |
| ico     | image/x-icon                            |
| ief     | image/ief                               |
| iii     | application/x-iphone                    |
| ins     | application/x-internet-signup           |
| isp     | application/x-internet-signup           |
| jfif    | image/pipeg                             |
| jpe     | image/jpeg                              |
| jpeg    | image/jpeg                              |
| jpg     | image/jpeg                              |
| js      | application/x-javascript                |
| latex   | application/x-latex                     |
| lha     | application/octet-stream                |
| lsf     | video/x-la-asf                          |
| lsx     | video/x-la-asf                          |
| lzh     | application/octet-stream                |
| m13     | application/x-msmediaview               |
| m14     | application/x-msmediaview               |
| m3u     | audio/x-mpegurl                         |
| man     | application/x-troff-man                 |
| mdb     | application/x-msaccess                  |
| me      | application/x-troff-me                  |
| mht     | message/rfc822                          |
| mhtml   | message/rfc822                          |
| mid     | audio/mid                               |
| mny     | application/x-msmoney                   |
| mov     | video/quicktime                         |
| movie   | video/x-sgi-movie                       |
| mp2     | video/mpeg                              |
| mp3     | audio/mpeg                              |
| mpa     | video/mpeg                              |
| mpe     | video/mpeg                              |
| mpeg    | video/mpeg                              |
| mpg     | video/mpeg                              |
| mpp     | application/vnd.ms-project              |
| mpv2    | video/mpeg                              |
| ms      | application/x-troff-ms                  |
| mvb     | application/x-msmediaview               |
| nws     | message/rfc822                          |
| oda     | application/oda                         |
| p10     | application/pkcs10                      |
| p12     | application/x-pkcs12                    |
| p7b     | application/x-pkcs7-certificates        |
| p7c     | application/x-pkcs7-mime                |
| p7m     | application/x-pkcs7-mime                |
| p7r     | application/x-pkcs7-certreqresp         |
| p7s     | application/x-pkcs7-signature           |
| pbm     | image/x-portable-bitmap                 |
| pdf     | application/pdf                         |
| pfx     | application/x-pkcs12                    |
| pgm     | image/x-portable-graymap                |
| pko     | application/ynd.ms-pkipko               |
| pma     | application/x-perfmon                   |
| pmc     | application/x-perfmon                   |
| pml     | application/x-perfmon                   |
| pmr     | application/x-perfmon                   |
| pmw     | application/x-perfmon                   |
| pnm     | image/x-portable-anymap                 |
| pot,    | application/vnd.ms-powerpoint           |
| ppm     | image/x-portable-pixmap                 |
| pps     | application/vnd.ms-powerpoint           |
| ppt     | application/vnd.ms-powerpoint           |
| prf     | application/pics-rules                  |
| ps      | application/postscript                  |
| pub     | application/x-mspublisher               |
| qt      | video/quicktime                         |
| ra      | audio/x-pn-realaudio                    |
| ram     | audio/x-pn-realaudio                    |
| ras     | image/x-cmu-raster                      |
| rgb     | image/x-rgb                             |
| rmi     | audio/mid                               |
| roff    | application/x-troff                     |
| rtf     | application/rtf                         |
| rtx     | text/richtext                           |
| scd     | application/x-msschedule                |
| sct     | text/scriptlet                          |
| setpay  | application/set-payment-initiation      |
| setreg  | application/set-registration-initiation |
| sh      | application/x-sh                        |
| shar    | application/x-shar                      |
| sit     | application/x-stuffit                   |
| snd     | audio/basic                             |
| spc     | application/x-pkcs7-certificates        |
| spl     | application/futuresplash                |
| src     | application/x-wais-source               |
| sst     | application/vnd.ms-pkicertstore         |
| stl     | application/vnd.ms-pkistl               |
| stm     | text/html                               |
| svg     | image/svg+xml                           |
| sv4cpio | application/x-sv4cpio                   |
| sv4crc  | application/x-sv4crc                    |
| swf     | application/x-shockwave-flash           |
| t       | application/x-troff                     |
| tar     | application/x-tar                       |
| tcl     | application/x-tcl                       |
| tex     | application/x-tex                       |
| texi    | application/x-texinfo                   |
| texinfo | application/x-texinfo                   |
| tgz     | application/x-compressed                |
| tif     | image/tiff                              |
| tiff    | image/tiff                              |
| tr      | application/x-troff                     |
| trm     | application/x-msterminal                |
| tsv     | text/tab-separated-values               |
| txt     | text/plain                              |
| uls     | text/iuls                               |
| ustar   | application/x-ustar                     |
| vcf     | text/x-vcard                            |
| vrml    | x-world/x-vrml                          |
| wav     | audio/x-wav                             |
| wcm     | application/vnd.ms-works                |
| wdb     | application/vnd.ms-works                |
| wks     | application/vnd.ms-works                |
| wmf     | application/x-msmetafile                |
| wps     | application/vnd.ms-works                |
| wri     | application/x-mswrite                   |
| wrl     | x-world/x-vrml                          |
| wrz     | x-world/x-vrml                          |
| xaf     | x-world/x-vrml                          |
| xbm     | image/x-xbitmap                         |
| xla     | application/vnd.ms-excel                |
| xlc     | application/vnd.ms-excel                |
| xlm     | application/vnd.ms-excel                |
| xls     | application/vnd.ms-excel                |
| xlt     | application/vnd.ms-excel                |
| xlw     | application/vnd.ms-excel                |
| xof     | x-world/x-vrml                          |
| xpm     | image/x-xpixmap                         |
| xwd     | image/x-xwindowdump                     |
| z       | application/x-compress                  |
| zip     | application/zip                         |

## HTTP2

HTTP/2（超文本传输协议第2版，最初命名为HTTP 2.0），简称为h2（基于TLS/1.2或以上版本的加密连接）或h2c（非加密连接）， HTTP/2 是 HTTP 协议的第二个主要版本，用于在 Web 服务器和客户端之间传输数据。

HTTP/2 是 HTTP 协议自 1999 年 HTTP 1.1 的改进版 RFC 发布后的首个更新，主要基于 SPDY 协议。

多数主流浏览器已经在 2015 年底支持了该协议。

HTTP/2是一种网络协议，是HTTP/1.1的升级版，由IETF在2015年发布。HTTP/2旨在提高Web性能，减少延迟，增加安全性，使Web应用更加快速、高效和可靠。

### 特点

下面是 HTTP/2 的一些特点和改进之处：

- 多路复用：HTTP/2 允许同时发送多个请求和响应，而不是像 HTTP/1.1 一样只能一个一个地处理。这样可以减少延迟，提高效率，提高网络吞吐量。
- 二进制传输：HTTP/2 使用二进制协议，与 HTTP/1.1 使用的文本协议不同。二进制协议可以更快地解析，更有效地传输数据，减少了传输过程中的开销和延迟。
- 头部压缩：HTTP/2 使用 HPACK 算法对 HTTP 头部进行压缩，减少了头部传输的数据量，从而减少了网络延迟。
- 服务器推送：HTTP/2 支持服务器推送，允许服务器在客户端请求之前推送资源，以提高性能。
- 改进的安全性：HTTP/2 默认使用 TLS（Transport Layer Security）加密传输数据，提高了安全性。
- 兼容 HTTP/1.1：HTTP/2 可以与 HTTP/1.1 共存，服务器可以同时支持 HTTP/1.1 和 HTTP/2。如果客户端不支持 HTTP/2，服务器可以回退到 HTTP/1.1。

总的来说，HTTP/2在性能、安全性和可用性方面都有显著的改进，可以使 Web 应用更加快速、高效和可靠。

- 对数据传输采用多路复用，让多个请求合并在同一 TCP 连接内。
- 减少网络延迟，提高浏览器的页面加载速度。
- 使用二进制格式来传输数据，而不是像 HTTP/1.1 一样使用文本格式。这提高了效率并降低了数据传输的延迟。
- 使用头部压缩来减少传输数据的大小。这有助于减少网络带宽的使用量，并提高页面加载速度。
- 允许服务器在不被请求的情况下主动向客户端发送数据。这有助于减少请求延迟，并提高页面加载速度。

## HTTP 与 HTTPS 的区别

**HTTP**（HyperText Transfer Protocol：超文本传输协议）是一种用于分布式、协作式和超媒体信息系统的应用层协议。 简单来说就是一种发布和接收 HTML 页面的方法，被用于在 Web 浏览器和网站服务器之间传递信息。

HTTP 默认工作在 TCP 协议 80 端口，用户访问网站 **http://** 打头的都是标准 HTTP 服务。

HTTP 协议以明文方式发送内容，不提供任何方式的数据加密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息，因此，HTTP协议不适合传输一些敏感信息，比如：信用卡号、密码等支付信息。

**HTTPS**（Hypertext Transfer Protocol Secure：超文本传输安全协议）是一种透过计算机网络进行安全通信的传输协议。HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。HTTPS 开发的主要目的，是提供对网站服务器的身份认证，保护交换数据的隐私与完整性。

HTTPS 默认工作在 TCP 协议443端口，它的工作流程一般如以下方式：

- 1、TCP 三次同步握手
- 2、客户端验证服务器数字证书
- 3、DH 算法协商对称加密算法的密钥、hash 算法的密钥
- 4、SSL 安全加密隧道协商完成
- 5、网页以加密的方式传输，用协商的对称加密算法和密钥加密，保证数据机密性；用协商的hash算法进行数据完整性保护，保证数据不被篡改。

### 区别

- HTTP 明文传输，数据都是未加密的，安全性较差，HTTPS（SSL+HTTP） 数据传输过程是加密的，安全性较好。
- 使用 HTTPS 协议需要到 CA（Certificate Authority，数字证书认证机构） 申请证书，一般免费证书较少，因而需要一定费用。证书颁发机构如：Symantec、Comodo、GoDaddy 和 GlobalSign 等。
- HTTP 页面响应速度比 HTTPS 快，主要是因为 HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包，而 HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包，所以一共是 12 个包。
- http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。
- HTTPS 其实就是建构在 SSL/TLS 之上的 HTTP 协议，所以，要比较 HTTPS 比 HTTP 要更耗费服务器资源。

### HTTPS 的工作原理

**客户端发起 HTTPS 请求**

这个没什么好说的，就是用户在浏览器里输入一个 https 网址，然后连接到 server 的 443 端口。

**服务端的配置**

采用 HTTPS 协议的服务器必须要有一套数字证书，可以自己制作，也可以向组织申请，区别就是自己颁发的证书需要客户端验证通过，才可以继续访问，而使用受信任的公司申请的证书则不会弹出提示页面(startssl 就是个不错的选择，有 1 年的免费服务)。

这套证书其实就是一对公钥和私钥，如果对公钥和私钥不太理解，可以想象成一把钥匙和一个锁头，只是全世界只有你一个人有这把钥匙，你可以把锁头给别人，别人可以用这个锁把重要的东西锁起来，然后发给你，因为只有你一个人有这把钥匙，所以只有你才能看到被这把锁锁起来的东西。

**传送证书**

这个证书其实就是公钥，只是包含了很多信息，如证书的颁发机构，过期时间等等。

**客户端解析证书**

这部分工作是有客户端的TLS来完成的，首先会验证公钥是否有效，比如颁发机构，过期时间等等，如果发现异常，则会弹出一个警告框，提示证书存在问题。

如果证书没有问题，那么就生成一个随机值，然后用证书对该随机值进行加密，就好像上面说的，把随机值用锁头锁起来，这样除非有钥匙，不然看不到被锁住的内容。

**传送加密信息**

这部分传送的是用证书加密后的随机值，目的就是让服务端得到这个随机值，以后客户端和服务端的通信就可以通过这个随机值来进行加密解密了。

**服务端解密信息**

服务端用私钥解密后，得到了客户端传过来的随机值(私钥)，然后把内容通过该值进行对称加密，所谓对称加密就是，将信息和私钥通过某种算法混合在一起，这样除非知道私钥，不然无法获取内容，而正好客户端和服务端都知道这个私钥，所以只要加密算法够彪悍，私钥够复杂，数据就够安全。

**传输加密后的信息**

这部分信息是服务段用私钥加密后的信息，可以在客户端被还原。

**客户端解密信息**

客户端用之前生成的私钥解密服务段传过来的信息，于是获取了解密后的内容，整个过程第三方即使监听到了数据，也束手无策。

**HTTPS一般使用的加密与HASH算法如下：**

- 非对称加密算法：RSA，DSA/DSS
- 对称加密算法：AES，RC4，3DES
- HASH算法：MD5，SHA1，SHA256

### SSL 证书

HTTPS核心的一个部分是数据传输之前的握手，握手过程中确定了数据加密的密码。在握手过程中，网站会向浏览器发送SSL证书，SSL证书和我们日常用的身份证类似，是一个支持HTTPS网站的身份证明，SSL证书里面包含了网站的域名，证书有效期，证书的颁发机构以及用于加密传输密码的公钥等信息，由于公钥加密的密码只能被在申请证书时生成的私钥解密，因此浏览器在生成密码之前需要先核对当前访问的域名与证书上绑定的域名是否一致，同时还要对证书的颁发机构进行验证，如果验证失败浏览器会给出证书错误的提示。

### 证书的类型

实际上，我们使用的证书分很多种类型，SSL证书只是其中的一种。证书的格式是由X.509标准定义。SSL证书负责传输公钥，是一种PKI（Public Key Infrastructure，公钥基础结构）证书。 我们常见的证书根据用途不同大致有以下几种：

-  1、SSL证书，用于加密HTTP协议，也就是HTTPS。
-  2、代码签名证书，用于签名二进制文件，比如Windows内核驱动，Firefox插件，Java代码签名等等。
-  3、客户端证书，用于加密邮件。
-  4、双因素证书，网银专业版使用的USB Key里面用的就是这种类型的证书。

 这些证书都是由受认证的证书颁发机构——我们称之为CA（Certificate Authority）机构来颁发，针对企业与个人的不同，可申请的证书的类型也不同，价格也不同。CA机构颁发的证书都是受信任的证书，对于SSL证书来说，如果访问的网站与证书绑定的网站一致就可以通过浏览器的验证而不会提示错误。

### SSL证书申请与规则

SSL证书可以向CA机构通过付费的方式申请，也可以自己制作。 CA机构颁发的证书价格非常昂贵，而且有效期一般只有一年到三年不等（年数不同，价格也不同），过期之后还要再次交钱申请，因此一般只有企业才会申请证书。但是随着个人网站的增多，目前也有针对个人的SSL证书服务，价格相对便宜一些，国内的话400多块钱就能申请到一个，国外更是有免费的SSL证书可以申请。 在申请SSL证书时需要向CA机构提供网站域名，营业执照，以及申请人的身份信息等。网站的域名非常重要，申请人必须证明自己对域名有所有权，如果支持Hotmail.com，Gmail.com的SSL证书都可以随便申请，黑客们就不用做假证书欺骗了。

一个证书一般只绑定一个域名。

CA机构也提供申请通配符域名，通配符域名相当于绑定了主域名下的所有域名，因此使用起来非常方便，但是价格也超级昂贵，一个通配符域名一年大概得5000块钱，只有企业才可以申请。 

### 证书的验证过程

证书以证书链的形式组织，在颁发证书的时候首先要有根CA机构颁发的根证书，再由根CA机构颁发一个中级CA机构的证书，最后由中级CA机构颁发具体的SSL证书。我们可以这样理解，根CA机构就是一个公司，根证书就是他的身份凭证，每个公司由不同的部门来颁发不同用途的证书，这些不同的部门就是中级CA机构，这些中级CA机构使用中级证书作为自己的身份凭证，其中有一个部门是专门颁发SSL证书，当把根证书，中级证书，以及最后申请的SSL证书连在一起就形成了证书链，也称为证书路径。在验证证书的时候，浏览器会调用系统的证书管理器接口对证书路径中的所有证书一级一级的进行验证，只有路径中所有的证书都是受信的，整个验证的结果才是受信。

根证书是最关键的一个证书，如果根证书不受信任，它下面颁发的所有证书都不受信任。操作系统在安装过程中会默认安装一些受信任的CA机构的根证书，可以在"运行"里面运行"certmgr.msc"启动证书管理器。

根证书的有效期长，支持的用途多以方便颁发不同用途类型的中级证书；中级证书用途单一，有效期相对短一些，但是比具体的SSL证书要长很多。

SSL证书验证失败有以下三点原因：

- 1、SSL证书不是由受信任的CA机构颁发的
- 2、证书过期
- 3、访问的网站域名与证书绑定的域名不一致

### SSL证书的安全问题

对HTTPS最常见的攻击手段就是SSL证书欺骗或者叫SSL劫持，是一种典型的中间人攻击。不过SSL劫持并非只是用于攻击目的，在一些特殊情况下利用SSL劫持我们可以更顺畅的访问网络，我会在后文提到。

以攻击为目的的SSL劫持如果不注意浏览器安全提示的话，很容易就中招。当网络中有中间人发起SSL劫持攻击时，攻击者需要伪造一个SSL证书发给浏览器，这个时候由于伪造的SSL证书不受信任，浏览器会给出提示。

这里有一个误区，当SSL证书不受信任的时候，并不一定就是有SSL劫持发生，有种例外情况是：一些个人网站买不起合法的SSL证书，因此会自己制作一个SSL证书来加密传输的数据。如果你经常访问某个个人网站，而且你知道这个网站是干什么的，那么这种情况可以不用担心。但是如果你访问的是网银，在线支付，或者是hotmail.com，gmail.com等，这类公司性质的网站一定会申请合法的SSL证书（12306.cn除外），一旦SSL证书不受信任，应该果断的终止访问，这个时候网络中一定会存在异常行为。