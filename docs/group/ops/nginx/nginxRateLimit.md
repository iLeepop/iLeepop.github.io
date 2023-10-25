# 限流

## 令牌桶算法

nothing:laughing:

## 漏桶算法

nothing:laughing:

## 请求限流

**语法**：

```nginx
usage: limit_req zone=name [burst=number] [nodelay | delay=number];
default: -
上下文: http, server, location
```

**样例**：

```nginx
limit_req_zone $binary_remote_addr zone=ip_limit:10m rate=1r/s;
```

- 参数一：`$binary_remote_addr`表示通过remote_addr这个标识来做限制，限制的是同一客户端IP地址，在这里，客户端IP地址作为关键，不是`$ remote_addr`，而是`$binary_remote_addr`变量。`$ remote_addr`变量的大小可以从7字节到15字节不等。存储的状态在32位平台上占用32或64字节的内存，在64位平台上总是占用64字节，对于IPv4地址，`$binary_remote_addr`变量的大小始终为4字节，对于IPv6地址则为16个字节。存储状态在32位平台上始终占用32或64字节，在64位平台占用64字节。一个兆字节的区域可以保持大约32000个32字节的状态或大约16000个64字节的状态。如果区域存储耗尽，服务器会将错误返回给所有其它请求。
- 参数二：`zone=ip_limit:10m`表示生成一个10M大小的名字为`ip_limit`的内存区域，主要用来存储访问的频次信息。
- 参数三：`rate=1r/s`表示允许相同标识的客户端的一个访问频次，1r的意思是1次。

```nginx
limit_req zone=ip_limit burst=5 nodelay;
```

- 参数一：`zone`表示使用那个区域来做限制，这里与上面一样。
- 参数二：`burst`爆发的意思，意思是设置一个大小为5的缓冲区，当有大量请求爆发的时候，超过了访问频次限制的请求可以先放到这个缓冲区内。
- 参数三：`nodelay`超过访问频次而且缓冲区也满了的时候就会直接返回503，如果没有设置，则所有请求会等待排队。

## 连接限流

**语法**：

```nginx
usage: limit_conn zone number;
default: -
上下文: http, server, location
```

**样例**：

```nginx
limit_conn_zone $binary_remote_addr zone=addr:10m;
```

- 参数一：`$binary_remote_addr`表示通过 `remote_addr`这个标识符来做限制，限制的是同一客户端IP地址。
- 参数二：`zone=ip_limit:10m`表示生成一个10M大小的名字为`ip_limit`的内存区域，主要用来存储访问的频次信息。

```nginx
limit_conn addr 1;
```

- 参数一：`zone`表示使用那个区域来做限制，跟上面一样。
- 参数二：表示允许相同标识客户端的一个访问频次，这里的1代表的是只允许每个IP地址一个连接。