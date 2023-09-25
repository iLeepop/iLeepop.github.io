# 常用服务器安装

## MySQL 普通安装

::: tip

可能有些 sql 的结尾没有写[;]，各位注意一下。

:::

在 [docker hub](https://hub.docker.com) 官网的 MySQL 官方镜像中有关于 MySQL 安装的命令。

### 拉取镜像

先拉取 MySQL5.7 的镜像到本地。（任意版本皆行）

```sh
docker pull mysql:5.7
#
docker images
```

### 启动 MySQL 容器

以分离模式启动。

```sh
docker run --name mysql -dp 3306:3306 -e MYSQL_ROOT_PASSWORD=666 mysql:5.7
```

指定访问密码为 666。

### 进入容器

交互方式进入。

```sh
docker exec -it mysql /bin/bash
```

### 客户端连接 mysql

mysql 容器内，使用 mysql 客户端连接 mysql 服务。

```sh
mysql -uroot -p
Enter password:
#
mysql>
```

### 创建数据库与表

通过该客户端创建一个新的数据库 test，并在其中创建一个表 emp(id, name)，用于测试该 MySQL 服务。

```mysql
mysql> show databases;
#
mysql> create database test;
#
mysql> use test;
#
mysql> creat table emp(id int, name varchar(20), depart varchar(20));
#
mysql> insert into emp values(1, 'ilee', 'admin');
mysql> insert into emp values(2, 'op', 'market');
mysql> insert into emp values(3, 'ee', 'sales');
...
```

### Navicat 连接 mysql

使用 Navicat 连接上这个 mysql 容器提供的 mysql 服务。然后就可以看到新建的 test 数据库与 emp 表了。

### 字符编码问题

当前 mysql 容器可以正常运行了。但实际还存在两个较严重的问题，其中一个就是字符编码问题。

在表中手工插入一条包含中文的记录，提交时会报错。原因就出现字符编码上。

查看当前 mysql 中的字符编码。

```mysql
mysql> show variables like 'character%';
```

发现大多数是 latin1，不是 utf8。问题就出在这里。

要解决这个问题，需要在容器系统的/etc/mysql/conf.d 中新建一个 my.cnf 文件，在其中指定字符编码。

### 数据安全问题

除了编码问题，还存在一个严重问题，就是数据安全问题。

前面新建了 test 数据库与 emp 表存放在容器系统中的/var/lib/mysql 目录中。

```sh
#mysql container
ls -l /var/lib/mysql
#
ls -l /var/lib/mysql/test
```

mysql 的运行错误日志对于工作中异常的判断非常重要，其存放在容器系统的/var/log/mysql 目录中。

```sh
#mysql container
ls -l /var/log/mysql
```

如果容器被不小心删除了，那么无论是数据文件、日志文件，还是设置字符编码的 my.cnf 文件，都将消失。

在生产中，这是绝对不允许的，所以要保证数据的安全性。

## MySQL 生产安装

为了保证数据的安全性，在生产环境下安装的 mysql 容器，在启动时都会使用数据卷来持久化数据。

### 启动 MySQL 容器

```sh
docker run --name mysql \
-e MYSQL_ROOT_PASSWORD=666 \
-v /root/mysql/log:/var/log/mysql \
-v /root/mysql/data:/var/lib/mysql \
-v /root/mysql/conf:/etc/mysql/conf.d \
-dp 3306:3306 mysql:5.7
```

这里指定了三个数据卷：

- -v /root/mysql/log:/var/log/mysql
- -v /root/mysql/data:/var/lib/mysql
- -v /root/mysql/conf:/etc/mysql/conf.d

### 新建 my.cnf

在宿主机的/root/mysql/conf 目录(数据卷目录)中新建 my.cnf 文件，并在其中键入如下内容：

```my.cnf
[client]
default_character_set=utf8
[mysql]
default_character_set=utf8
[mysqld]
character_set_server=utf8
```

### 重启 mysql 容器

修改了 mysql 配置，需要重启 mysql 容器，以使新配置生效。

```sh
docker restart mysql
```

### 进入容器连接 mysql

```sh
docker exec -it mysql /bin/bash
#
mysql -uroot -p
```

### 查看字符编码

此时查看当前 mysql 的字符编码，已经全变为了 utf8。

```mysql
mysql> show variables like 'character%';
```

### 创建数据库与表

```mysql
mysql> show databases;
#
mysql> create database test;
#
mysql> use test;
#
mysql> creat table emp(id int, name varchar(20), depart varchar(20));
#
mysql> insert into emp values(1, 'ilee', 'admin');
mysql> insert into emp values(2, 'op', 'market');
mysql> insert into emp values(3, 'ee', 'sales');
...
```

### Navicat 插入中文记录

在表中插入中文记录就没有问题。

### 查看宿主机数据卷

再查看宿主机中数据卷目录，已经有了文件。

```sh
ll mysql
#
ll mysql/conf
#
ll mysql/data
#
ll mysql/log
```

## MySQL 集群安装

单个的 MySQL 存在单点问题，且在高并发场景下性能会急剧下降。所以，生产中对于 MySQL 都是使用读写分离的主从集群。既保证了数据的安全性，又提升了性能。

下面要使用 Docker 搭建一个“一主一从”的 MySQL 读写分离集群。

### Master 的安装与配置

#### 启动 master 容器

```sh
docker run --name mysql_master \
-e MYSQL_ROOT_PASSWORD=666 \
-v /root/mysql_master/log:/var/log/mysql \
-v /root/mysql_master/data:/var/lib/mysql \
-v /root/mysql_master/conf:/etc/mysql/conf.d \
-dp 3316:3306 mysql:5.7
```

#### 新建 my.cnf

```my.cnf
[client]
default_character_set=utf8
[mysql]
default_character_set=utf8
[mysqld]
character_set_server=utf8
#
server_id=01
binlog-ignore-db=mysql
log-bin=master-log-bin
binlog_cache_size=1M
binlog_format=mixed
expire_logs_days=7
slave_skip_errors=1062
```

#### 重启 master 容器

修改了 mysql 配置，所以需要重启 master 容器，以使新配置生效。

```sh
docker restart mysql_master
```

#### 进入容器连接 mysql

进入容器并连接上 mysql 后，查看其字符编码，可以看到其是支持中文的。

```bash
docker exec -it mysql_master /bin/bash
mysql -uroot -p
Enter password:
...
mysql>
```

```mysql
mysql> show variable like 'character%';
```

#### 创建用户

为当前 MySQL 创建一个用户。

```mysql
mysql> create user 'slave'@'%' identified by '123123';
```

#### 授权用户

为新创建的用户授权。

```mysql
mysql> grant replication slave, replication client on *.* to 'slave'@'%';
```

### Slave 的安装与配置

#### 启动 Slave 容器

启动 Slave 容器。

```sh
docker run --name mysql_slave \
-e MYSQL_ROOT_PASSWORD=666 \
-v /root/mysql_slave/log:/var/log/mysql \
-v /root/mysql_slave/data:/var/lib/mysql \
-v /root/mysql_slave/conf:/etc/mysql/conf.d \
-dp 3326:3306 mysql:5.7
```

#### 新建 my.cnf

在宿主机的/root/mysql_slave/conf 目录中新建 my.cnf 文件，并在其中键入如下内容

```my.cnf
[client]
default_character_set=utf8
[mysql]
default_character_set=utf8
[mysqld]
character_set_server=utf8
#
server_id=02 //change
binlog-ignore-db=mysql
log-bin=slave-log-bin //change
binlog_cache_size=1M
binlog_format=mixed
expire_logs_days=7
slave_skip_errors=1062
relay_log=relay-log-bin //change
log_slave_updates=1 //change
read_only=1 //change
```

#### 重启 slave 容器

忽略

#### 进入容器连接 mysql

忽略

### 配置主从复制

#### 查看 master 状态

在 master 中运行 show master status 命令，查看二进制日志文件名及要开始的位置。

```mysql
#master
mysql> show master status;
```

#### slave 指定 master

在 slave 中通过运行 change master to 命令来指定其要连接的 master 相关信息。

```mysql
#slave
#需要连写，这里为了方便阅读，在逗号位置添加了回车
mysql> change master to master_host='192.168.192.101#your own IP',
master_user='slave',
master_password='123123',
master_port=3316,master_log_file='master-log-bin.000001#you need to use SHOW MASTER STATUS  to check your master_log_file也许也不用',
master_log_pos=154,
master_connect_retry=30,
master_retry_count=3;
```

#### 查看 slave 状态

在 slave 中查看 slave 状态发现，当前 slave 与 master 的同步复制还没有开始。

```mysql
#slave
mysql> show slave status \G;
```

#### slave 开启同步

在 slave 中使用 start slave 命令开启 slave 的数据同步。

```mysql
#slave
mysql> start slave;
#此时再次查看 slave 的状态，发现同步已经开始。
mysql> show slave status \G;
```

### 测试

至此，一主一从的读写分离集群就搭建完毕了。下面在 master 中创建一个数据库与 表，在 slave 中如果可以查看到，则说明搭建成功。

#### 在 master 中写入

```mysql
#master
mysql> craete database test01;
#
mysql> use test01;
#
mysql> creat table emp(id int, name varchar(10), age int);
#
mysql> insert into emp values(1, 'ilee', 21);
mysql> insert into emp values(2, 'op', 100);
mysql> insert into emp values(3, 'ee', 40);
...
```

#### 在 slave 中读取

在 slave 中可以查看到在 master 中写入的数据，说明集群搭建成功。

```mysql
#slave
mysql> use test01;
mysql> select * from emp;
```

::: tip

MySQL 在生产环境中的安装需要通过数据卷来解决以下三点：

- 字符编码问题
- 数据安全问题
- 运行日志问题

:::

## Redis 单机版安装

### 拉取 Redis

首先从 docker hub 拉取 Redis 镜像，这里拉取 7.0 版。

```sh
docker pull redis:7.0
```

### 创建数据卷目录

在宿主机/root 目录中创建一个目录 redis，将来用于存放外挂文件 redis.conf。

```sh
mkdir redis
```

### 复制 redis.conf 文件

上传一份 redis 核心配置文件 redis.conf 到宿主机目录/root/redis 中。

```sh
ll redis/
```

### 修改 redis.conf

#### 解除 IP 绑定

将 bind 行注释掉，以解除 Redis 对访问者 IP 的绑定。

```redis.conf
#before
bind 127.0.0.1 -::1
#after
#bind 127.0.0.1 -::1
```

#### 关闭保护模式

关闭保护模式，否则只能本机访问自己。

```redis.conf
#change
protected-mode no
```

#### 关闭守护模式

关闭守护模式对于 Redis 容器安装来说非常重要。由于 docker 本身就是以分离模式运行的，如果 Redis 再以该模式运行，则 Redis 无法启动。

```redis.conf
#change
daemonize no
```

#### 指定持久化目录

这里要指定 RDB 或 AOF 的持久化目录为/data，这样无论是哪种持久化文件，均会保存到该目录。后面会指定容器中的/data 目录为数据卷挂载点目录。

```redis.conf
#change
dir /data
```

### 启动 Redis 容器

```sh
docker run --name myredis \
-v /root/redis/redis.conf:/etc/redis/redis.conf \
-v /root/redis/data:/data \
-dp 6379:6379 \
redis:7.0 \
redis-server /etc/redis/redis.conf
```

这里指定了两个数据卷，其中一个是文件，一个是目录：

- -v /root/redis/redis.conf:/etc/redis/redis.conf
- -v /root/redis/data:/data

对于该启动命令需要注意的是，其后面运行的命令为 redis-server，且加载的配置文件为挂载点目录/etc/redis 中的 redis.conf。

### 进入容器连接 Redis

通过 docker exec 命令进入 Redis 容器后，就可通过 redis-cli 客户端连接上这个 Redis，然后执行 Redis 命令了。

```sh
docker exec -it myredis /bin/bash
#enter redis
redis-cli
#
set name ilee
get name
"ilee"
```

## Redis 一主两从集群搭建

现要搭建一个“一主两从”的 Redis 集群。这三个容器的端口号都保持默认，但对外暴露出的端口号分别为 6381、6382、6383。其中，6381 的为 master，另外两个为 slave。

### 复制三份 redis.conf

现仍在前面的/root/redis 目录中完成配置。复制 redis.conf 并重命名为 redis1.conf，并在文件最后添加如下配置，以对外宣布当前 redis 的 IP 与端口。注意，该 IP 为 docker 宿主机的 IP，端口号为当前 redis 对外暴露的端口号。

```redis1.conf
slave-announce-ip 192.168.192.101#your own id
slave-announce-port 6381
```

再复制并修改 redis2.conf。

```redis2.conf
slave-announce-ip 192.168.192.101#your own id
slave-announce-port 6382
```

再复制并修改 redis3.conf。

```redis3.conf
slave-announce-ip 192.168.192.101#your own id
slave-announce-port 6383
```

### 启动 master

首先启动 master，即启动 myredis-1 容器。

```sh
docker run --name myredis-1 \
-v /root/redis/redis1.conf:/etc/redis/redis.conf \
-v /root/redis/data/6381:/data \
-dp 6381:6379 \
redis:7.0 \
redis-server /etc/redis/redis.conf
```

### 启动 slave

在启动 slave 的命令中需要指出其 slaveof 于谁。

```sh
docker run --name myredis-2 \
-v /root/redis/redis2.conf:/etc/redis/redis.conf \
-v /root/redis/data/6382:/data \
-dp 6382:6379 \
redis:7.0 \
redis-server /etc/redis/redis.conf --slaveof 192.168.192.105 6381 #there type your ip
```

```sh
docker run --name myredis-3 \
-v /root/redis/redis3.conf:/etc/redis/redis.conf \
-v /root/redis/data/6383:/data \
-dp 6383:6379 \
redis:7.0 \
redis-server /etc/redis/redis.conf --slaveof 192.168.192.105 6381 #there type your ip
```

### 关系查看

查看这三个容器节点的 info replication，可以看到它们间的主从关系已经建立。

```sh
docker exec -it myredis-1 redis-cli info replication
....
#
docker exec -it myredis-2 redis-cli info replication
....
#
docker exec -it myredis-3 redis-cli info replication
....
```

### 数据测试

在 master 节点 myredis-1 中写入数据。

```sh
docker exec -it myredis-1 redis-cli
#
set name ilee
get name
"ilee"
```

在 slave 节点 myredis-2 与 myredis-3 节点中可读出数据。

```sh
#myredis-2
docker exec -it myredis-2 redis-cli
#
get name
"ilee"

#myredis-3
docker exec -it myredis-3 redis-cli
#
get name
"ilee"
```

## Redis 高可用集群搭建

主从集群存在的问题是，其容灾方式只能采用冷处理方案，无法在生产中使用。所以，这里要搭建一个“一主两从三哨兵”的高可用集群，以达到热处理的容灾方案。

对于“一主两从”集群，仍使用前面的即可。下面直接搭建三个 Sentinel 节点的集群。这三个容器的端口号都保持默认，但对外暴露出的端口号分别为 26381、26382、26383。

### 复制三份 sentinel.conf

复制 sentinel.conf 文件并重命名为 sentinel1.conf。仅修改两处：

- 指定其要监视的 master 及[quorum]。
- 指定当前 sentinel 对外宣布的 IP 与端口号。其中 IP 为 docker 宿主机的 IP，端口号为其对外暴露的端口号。

```sentinel1.conf
sentinel monitor mymaster 192.168.192.101 6381 2 #type your myredis-1 ip/port
sentinel announce-ip 192.168.192.101 #type your ip
sentinel announce-port 26381
```

再复制并修改 sentinel2.conf。

```sentinel2.conf
sentinel monitor mymaster 192.168.192.101 6381 2 #type your myredis-1 ip/port
sentinel announce-ip 192.168.192.101 #type your ip
sentinel announce-port 26382
```

再复制并修改 sentinel3.conf。

```sentinel3.conf
sentinel monitor mymaster 192.168.192.101 6381 2 #type your myredis-1 ip/port
sentinel announce-ip 192.168.192.101 #type your ip
sentinel announce-port 26383
```

### 启动 sentinel

```sh
docker run --name mysentinel-1 \
-v /root/redis/sentinel1.conf:/etc/redis/sentinel.conf \
-dp 26381:26379 \
redis:7.0 \
redis-sentinel /etc/redis/sentinel1.conf
```

```sh
docker run --name mysentinel-2 \
-v /root/redis/sentinel2.conf:/etc/redis/sentinel.conf \
-dp 26382:26379 \
redis:7.0 \
redis-sentinel /etc/redis/sentinel2.conf
```

```sh
docker run --name mysentinel-3 \
-v /root/redis/sentinel3.conf:/etc/redis/sentinel.conf \
-dp 26383:26379 \
redis:7.0 \
redis-sentinel /etc/redis/sentinel3.conf
```

### 关系查看

```sh
docker exec -it mysentinel-1 redis-cli -h 192.168.192.101 -p 26381 info sentinel
```

查看结果说明 sentinel 对 master 的监视成功，说明高可用集群搭建成功。连接任何一个 sentinel 容器节点查看到的信息与上面的都是相同的。

### 故障转移测试

为了验证高可用性，现将充当 master 的容器 myredis-1 停掉。

```sh
docker stop myredis-1
```

再查看另外两个 redis 容器的状态数据，发现 myredis-2 成为了 myredis-3 的 slave，即 myredis-3 成为了新的 master。

```sh
#myredis-2
docker exec -it myredis-2 redis-cli info replication
.....
#myredis-3
docker exec -it myredis-3 redis-cli info replication
```

再次 myredis-1 容器启动。

```sh
docker start myredis-1
#查看 myredis-1 的状态数据，发现其成为了 myredis-3 的 slave。
docker exec -it myredis-1 redis-cli info replication
```

## Redis 分布式系统搭建

Redis 集群的每个节点中的保存的数据都是相同的。而 Redis 分布式系统的节点中存放的数据可以是不同的。当有数据写入请求到达分布式系统后，系统会采用虚拟槽分区算法将数据写入到相应节点。

下面要搭建一个三主三从的 Redis 分布式系统。

| 序号 | 角色   | 容器名称  | 网络模式 | 暴露地址             |
| ---- | ------ | --------- | -------- | -------------------- |
| 1    | master | myredis-1 | host     | 192.168.192.101:6381 |
| 2    | master | myredis-2 | host     | 192.168.192.101:6382 |
| 3    | master | myredis-3 | host     | 192.168.192.101:6383 |
| 4    | slave  | myredis-4 | host     | 192.168.192.101:6384 |
| 5    | slave  | myredis-5 | host     | 192.168.192.101:6385 |
| 6    | slave  | myredis-6 | host     | 192.168.192.101:6386 |

### 准备目录与配置文件

在/root 中 mkdir 一个名称为 cluster 的目录，并将前面的配置文件/root/redis/redis.conf 复制到这里。

### 复制六份 redis.conf

复制 redis.conf 为 redis1.conf，并在其中将下面两个配置前的注释去掉。这两项配置，一个是用于开启 cluster 功能，即分布式系统功能；一个是指定其需要的配置文件名称。

```redis1.conf
#
cluster-enable yes
#
#
cluster-config-file nodes-6379.conf
```

以 redis1.conf 为模板复制出 5 份，分别为 redis2.conf、redis3.conf、redis4.conf、redis5.conf、redis6.conf。这 6 份配置文件内容完全相同。

### 启动 redis

启动 6 个 Redis 容器。

```sh
docker run --name myredis-1 \
--network host \
-v /root/cluster/redis1.conf:/etc/redis/redis.conf \
-v /root/cluster/data/6381:/data \
-d redis:7.0 \
redis-server /etc/redis/redis.conf --port 6381
```

```sh
docker run --name myredis-2 \
--network host \
-v /root/cluster/redis2.conf:/etc/redis/redis.conf \
-v /root/cluster/data/6382:/data \
-d redis:7.0 \
redis-server /etc/redis/redis.conf --port 6382
```

```sh
docker run --name myredis-3 \
--network host \
-v /root/cluster/redis3.conf:/etc/redis/redis.conf \
-v /root/cluster/data/6383:/data \
-d redis:7.0 \
redis-server /etc/redis/redis.conf --port 6383
```

```sh
docker run --name myredis-4 \
--network host \
-v /root/cluster/redis4.conf:/etc/redis/redis.conf \
-v /root/cluster/data/6384:/data \
-d redis:7.0 \
redis-server /etc/redis/redis.conf --port 6384
```

```sh
docker run --name myredis-5 \
--network host \
-v /root/cluster/redis5.conf:/etc/redis/redis.conf \
-v /root/cluster/data/6385:/data \
-d redis:7.0 \
redis-server /etc/redis/redis.conf --port 6385
```

```sh
docker run --name myredis-6 \
--network host \
-v /root/cluster/redis6.conf:/etc/redis/redis.conf \
-v /root/cluster/data/6386:/data \
-d redis:7.0 \
redis-server /etc/redis/redis.conf --port 6386
```

### 创建系统

6 个节点启动后，它们仍是 6 个独立的 Redis，通过 redis-cli --cluster create 命令可将 6 个节点创建为一个分布式系统。--cluster replicas 1 指定每个 master 会带有一个 slave 副本。

```sh
docker exec -it myredis-1 redis-cli --cluster create --cluster-replicas 1 192.168.192.101:6381 192.168.192.101:6382 192.168.192.101:6383 192.168.192.101:6384 192.168.192.101:6385 192.168.192.101:6386
#回车后即可看到计划日志
#键入 yes 后再回车
```

### 查看节点信息

通过 cluster nodes 命令可以查看到系统中各节点的关系及连接情况。只要能看到每个节点给出 connected，就说明分布式系统已经成功搭建。

```sh
docker exec -it myredis-1 redis-cli -c -p 6383 cluster nodes
....
```

### 系统操作

对于如何对分布式系统进行操作，例如，slot 相关查询、故障转移、动态扩容、动态缩容等，与使用虚拟机搭建的分布式系统的操作命令相同，唯一不同的就是，需要首先通过 docker exec –it 命令进入到容器内部再执行这些命令。

::: tip

Redis 安装 Redis 在生产环境中的安装需要通过数据卷来解决以下两点：

- 配置文件安全问题
- 持久化问题

:::
