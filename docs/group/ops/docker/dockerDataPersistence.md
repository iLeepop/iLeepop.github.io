# Docker 数据持久化

**Docker 提供了三种实时同步（宿主机与容器 FS 间数据的同步）方式：**

- 数据卷
- Bind mounts（绑定挂载）
- tmpfs（临时文件系统）

## 镜像持久化

理解定制镜像持久化方式针对的应用场景：对 UnionFS 产生一次性变化，且这种变化易 于持久化为镜像。不适合变更非常频繁的实时性场景。

### 需求

为 tomcat:10.0 镜像修改其 webapps 目录。原本该目录内容 是空的，用户访问 tomcat 页面会报 404，而真正的内容是在 webapps.dist 中。现要将原 webapps 目录删除，然后重命名 webapps.dist 目录为 webapps，以使用户可以看到 tomcat 页面。

### 实现

#### 以分离模式启动 tomcat 容器

```sh
docker run --name mytom -dp 8081:8080 tomcat:10.0
```

此时通过浏览器是无法访问到 tomcat 页面的。

#### 进入容器删除目录

```sh
docker exec -it mytom /bin/bash
//tomcat
ls -l
....webapps
....webapps.dist
//删除 webapps 目录，然后将 webapps.dist 目录重命名为 webapps。
rm -rf webapps
mv webapps.dist webapps
```

#### 通过容器生成镜像

执行 docker commit 命令，以当前运行的容器为范本生成镜像。

```sh
docker commit -m="modify webapps" -a="Jerry" mytom tomcat10:own
```

- -a 指定该镜像的作者
- tomcat10:own 为新镜像的 repository:tag

```sh
docker images
---
REPOSITORY TAG ........
tomcat10 own
```

#### 测试新镜像

```sh
docker run --name myowntom -dp 8081:8080 tomcat10:own
```

可以访问:accept:

## 数据卷

### 概述

数据卷是宿主机中的一个特殊的文件/目录，这个文件/目录与容器中的另一个文件/目 录进行了直接关联，在任何一端对文件/目录的写操作，在另一端都会同时发生相应变化。 在宿主中的这个文件/目录就称为数据卷，而容器中的这个关联文件/目录则称为该数据卷在 该容器中的挂载点。

数据卷的设计目的就是为了实现数据持久化，其完全独立于容器的生命周期，属于宿主 机文件系统，但不属于 UnionFS。因此，容器被删除时，不会删除其挂载的数据卷。

### 特性

**数据卷具有如下明显特性：**

- 数据卷在容器启动时初始化，如果容器启动后容器本身已经包含了数据，那么，这些数 据会在容器启动后直接出现在数据卷中，反之亦然
- 可以对数据卷或挂载点中的内容直接修改，修改后对方立即可看到
- 数据卷会一直存在，即使挂载数据卷的容器已经被删除
- 数据卷可以在容器之间共享和重用

## 创建数据卷

### 命令

**数据卷是在使用 docker run 启动容器时指定的，其语法格式为：**

```sh
docker run –it –v /宿主机目录绝对路径:/容器内目录绝对路径 镜像
```

**注：**无论是宿主机中的数据卷还是容器中的挂载点，如果指定的目录不存在，那么 docker 引擎都会自动创建。即使是多级目录不存在。

### 创建

在宿主机中的/root/host_mount 目录与 ubuntu 容器的/opt/uc_mount 目录间建立关联， 即宿主机中的/root/host_mount 目录作为数据卷，而 ubuntu 容器的/opt/uc_mount 目录作为 挂载点。

以交互方式启动一个 ubuntu 容器，同时指定在启动容器时创建数据卷。容器启动完毕 后在容器中查看/opt 目录，可以看到新建了一个 uc_mount 子目录。这个就是容器中的挂载 点目录。

```sh
docker run --name myubuntu -it -v /root/host_mount:/opt/uc_mount ubuntu:latest /bin/bash
```

再打开一个会话窗口，查看/root 目录，可以看到新建了一个 host_mount 目录。这个就数据卷目录。

### 数据卷/挂载点互操作

```sh
#宿主机
host_mount] echo "Hi" > hello.txt

#myubuntu
uc_mount] ll
...............hello.txt
uc_mount] cat hello.txt
>>Hi
uc_mount] echo "World" > hello.txt

#宿主机
host_mount] ll
...............hello.txt
host_mount] cat hello.txt
>>Hi
>>World
```

### 停止操作

即使容器停止了，在宿主机中只要修改了数据卷目录内容，在重新启动容器后，该修改 过的数据仍会出现在容器中。因为容器是一个 UnionFS，是一个存在于宿主机中的文件系统， 无论容器是否运行，该 FS 都是存在的。

通过 exit 退出并停止容器。

### 查看数据卷详情

```sh
docker inspect myubuntu
......
"Mounts": [
	......
	{
		"Type": "bind",
		"source": "/root/host_mount",
		"Destination": "/opt/uc_mount",
		"Mode": "",
		"RW": true,
		"Propagation": "rprivate"
	}
	......
]
......
```

这里给出了数据卷 Source 与挂载点 Destination 的绑定关系，且容器对挂载点的**默认操作权限是 RW 读写**的。

### 设置只读

只读数据卷，指的是容器对挂载点的操作权限是只读的。宿主机对数据卷的操作权限始 终是读写的。

有些情况下，为了防止容器在运行过程中对文件产生修改，就需要创建只读数据卷。

```sh
docker run –it –v /宿主机目录绝对路径:/容器内目录绝对路径:ro 镜像

docker inspect 容器名称
......
"Mounts": [
	......
	{
		"Type": "...",
		"source": "...",
		"Destination": "...",
		"Mode": "",
		"RW": false,
		"Propagation": "..."
	}
	......
]
......
```

**可见 RW 为 false**。

## 数据卷共享

当一个容器与另一个容器使用相同的数据卷时，就称这两个容器实现了“数据卷共享”。

### 数据卷容器

数据卷容器是实现数据卷共享的一种非常有效的方案。 当一个容器 C 启动运行时创建并挂载了数据卷，若其它容器也需要共享该容器 C 挂载的 数据卷，这些容器只需在 docker run 启动时通过--volumes-from[容器 C] 选项即可实现数据卷 共享。此时容器 C 就称为数据卷容器。

### 前提

**容器 1**要共享前面的**容器 2**的数据卷，即宿主机中/root/host_mount 为数据卷目录，而这两个容器的挂载点目录都是/opt/uc_mount。

```sh
#mycent->宿主机
docker run --name mycent -it -v /root/host_mount:/opt/uc_mount centos:latest
#myubuntu->mycent 实现共享
docker run --name myubuntu -it --volumes-from mycent ubuntu:latest
```

### 效果

经过上述操作，myubuntu 与 myubuntu2 这两个容器实现了数据卷共享。此时，无论是 在宿主机，还是 myubuntu 或 myubuntu2 任意容器中挂载点目录中的任意写操作，在另外两 方均可同步看到该写操作的结果。

## Dockerfile 持久化

Dockerfile 持久化，其实就是通过使用 Dockerfile 的 VOLUME 指令指定数据卷方式实现的持久化。

### VOLUME 指令

VOLUME 指令可以在容器中创建可以挂载数据卷的挂载点。其参数可以是字符串数组， 也可以是使用空格隔开的多个纯字符串。例如，VOLUME ["/var/www", "/etc/apache"] 或 VOLUME /var/www /etc/apache。

### 实现

#### 创建

在/root 目录中 mkdir 一个目录，例如 vols，然后在其中新建 Dockerfile，内容如下。这 里指定/opt/xxx 与/opt/ooo 为容器端的挂载点。

```dockerfile
FROM centos:7
VOLUME /opt/xxx /opt/ooo
CMD /bin/bash
```

#### 构建

```sh
docker build -t volscon .
```

#### 运行

```sh
docker run --name myvlos -it volscon
```

#### 查看数据卷 Source

```sh
docker inspect myvlos
```
