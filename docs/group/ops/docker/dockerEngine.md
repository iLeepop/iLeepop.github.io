# Docker 引擎

## 发展历程

### 首发版本架构

Docker 在首次发布时，其引擎由两个**核心组件**构成：

1. LXC(Linux Container)
2. Docker Daemon。

不过，该架构依赖于 LXC，使得 Docker 存在严重的问题：

- 依赖于外部工具，对 Docker 来说，存在着巨大的生存风险
- LXC 使得 Docker 无法实现跨平台

Docker Daemon 的“大而全”也带来了严重的问题：

- 版本更新与功能扩展较难
- 运行较慢，带来性能问题
- Docker Daemon 运行出现问题，会直接影响容器的运行
- 不符合软件哲学

### Docker0.9 版本架构

从 Docker0.8 版本开始，Docker 使用自研的 Libcontainer 工具替换了 LXC。

### Docker1.1 版本架构

2017 年 7 月 OCI 基金会发布了两个规范（镜像规范与容器运行时规范）的 OCI1.0 版本。2016 年底发布的 Docker1.1 版本基本遵循了 OCI1.0 版本。

从 Docker1.1 版本开始，Docker Daemon 中不再包含任何容器运行时代码，而是将容器运行时单独剥离了出来，形成了 Runc 项目。

## Docker 引擎架构

Docker 引擎是用来运行和管理容器的核心软件，其现代架构由四部分主要组件构成：

1. Docker Client
2. Dockerd
3. Containerd
4. Runc

::: tip

- Docker Client：用户提交 Docker 命令
- Dockerd：负责 REST API、处理镜像相关命令、网络、容器编排等。
- Containerd：负责容器生命周期管理(负责处理容器相关的命令)，但不负责创建容器。当 docker run 命令到来时会 fork 出 Runc 与 Shim 两个进程。
- Runc：负责创建容器进程，容器创建并启动完毕后，Runc 将容器进程交付给 Shim 进程管理，然后自己退出。
- Shim：负责将容器与 Docker Daemon 进行解耦。

:::

### Docker Client

Docker 客户端，Docker 引擎提供的 CLI 工具，用于用户向 Docker 提交命令请求。

### Dockerd

Dockerd，即 Docker Daemon。在现代 Dockerd 中的主要包含的功能有镜像构建、镜像管理、REST API、核心网络及编排等。其通过 gRPC 与 Containerd 进行通信。

### Containerd

Containerd，即 Container Daemon，该项目的主要功能是管理容器的生命周期。不过，其本身并不会去创建容器，而是调用 Runc 来完成容器的创建。

Docker 公司后来将 Containerd 项目捐献给了 CNCF（云原生基金会）。

### Runc

Runc，Run Container，是 OCI（开放容器倡议基金会）容器运行时规范的实现，Runc 项目的目标之一就是与 OCI 规范保持一致。所以，Runc 所在层也称为 OCI 层。这使得 DockerDaemon 中不用再包含任何容器运行时的代码了，简化了 Docker Daemon。

Runc 只有一个作用—创建容器，其本质是一个独立的容器运行时 CLI 工具。其在 fork 出一个容器子进程后会启动该容器进程。在容器进程启动完毕后，Runc 会自动退出。

### Shim

Shim（垫片）是实现“Daemonless Container（无 Docker Daemon 与 Container Daemon 容器）”不可或缺的工具，使容器与 Docker Daemon 解耦，使得 Docker Daemon 的维护与升级不会影响到运行中的容器。

每次创建容器时，Containerd 同时会 fork 出 Runc 进程与 Shim 进程。当 Runc 自动退出之前，会先将新容器进程的父进程指定为相应的 Shim 进程。

除了作为容器的父进程外，Shim 进程还具有两个重要功能：

- 保持所有 STDIN 与 STDOUT 流的开启状态，从而使得当 Docker Daemon 重启时，容器不会因为 Pipe 的关闭而终止。
- 将容器的退出状态反馈给 Docker Daemon。

## 引擎分类

在安装 Docker 之前需要先了解 Docker 官方对其版本的分类。Docker 的版本分为大版本与小版本。

### 大版本

Docker 从大版本来说，分为三类：Moby、社区版 Docker-CE（Community Edition）和企业版 Docker-EE（Enterprise Edition）。

### 小版本

从 v1.13.1 之后，Docker 的发布计划发生了变更，每个大版本下都出现了两个小版本 Edge 月版与 Stable 季版。不过，现在的官网中一般只能看到 Stable 版本。

### 安装

Docker 可以安装在 Windows、Linux、Mac 等系统中，但生产环境下，服务器使用 Linux 中的 CentOS 居多，所以下面就以 Docker 在 CentOS7 中的安装为例来学习 Docker 的安装。官网 https://docs.docker.com/engine/install/centos/中可以看到具体安装方式与安装步骤。

## 启停

Docker 是以服务的形式运行在系统中，所以使用 systemctl 来对其进行各种操作。

### 启动

```sh
systemctl start docker
```

### 启动测试

为了验证 Docker 安装启动成功，一般有两种方式

#### docker version

docker version 命令可以看到当前 docker 的版本信息，主要包括 Docker 的 Client 与 Server 的信息。

```sh
docker version
```

#### 运行 hello-world 镜像

可以通过运行 hello-world 镜像来验证 Docker 的安装启动成功。当前宿主机中不存在 hello-world 镜像的，会先下载，然后运行。

如果看到如下输出，则说明 Docker 已经安装启动成功了。如果看不到如下结果，一般都是因为下载超时，需要先配置国内加速器。

```sh
docker run hello-world
```

### 重启

```sh
systemctl restart docker
```

### 查看状态

```sh
systemctl status docker
```

### 设置自启动

通过 systemctl start docker 命令仅可以开启 Docker 服务，但每次开机后，都需要开启。

可以通过 systemctl enalbe docker 命令将 Docker 服务设置为开机自启动服务，即开机后 Docker 服务无需再开启，其本身就是开启状态。

```sh
systemctl enalbe docker
```

此时再查看 Docker 的状态，可以看到原来的 disabled 变为了 enabled，说明当前 Docker 服务已经变为了开机自启动。

```sh
systemctl status docker
```

### 取消自启动

```sh
systemctl disable docker
```

### 停止

```sh
systemctl stop docker
```

## 配置国内加速器

::: warning

本 part 非本人操作记录 以后做补充 仅作参考

:::

国内镜像中心常用的为阿里云与网易云。在本地 Docker 中指定要使用的国内加速器地址后，就可以直接从国内镜像中心下载镜像了。

### 配置阿里云加速器

#### 找到相应页面

若要配置阿里云加速器，必须首先要有阿里云的账号。

登录阿里云后，打开阿里云的容器镜像服务页面，执行相应的命令。

#### 创建 docker 目录

```sh
mkdir -p /etc/docker
```

##### 修改 daemon.json 文件

在文件末尾添加指定的内容。

::: tip

**注意** 该 json 数据中的 URL 地址是与用户登录账号绑定的，不同的用户所生成的地址是不同的。

:::

```sh
#建议用vim 以下并非本人操作记录 建议网上了解一下 经供参考
tee /etc/docker/deamon.json <<- 'EOF'
>{
>	"registry-mirrors": ["http://*****.mirror.aliyuncs.com"]
>}
> EOF
```

#### 重新加载服务配置文件

```sh
systemctl daemon-reload
```

#### 重启 docker 引擎

```sh
systemctl restart docker
```

## 卸载

### 移除 yum

通过 yum remove 移除 docker 安装的四个组件。

```sh
yum remove docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### rm 两个目录

通过 rm –rf 删除/var/lib 下的 docker 与 containerd 两个目录。这两个目录中存放着镜像、容器、数据卷，它们在前面删除时不能被自动删除，需要手动删除。

```sh
~] rm -rf /var/lib/docker
~] rm -rf /var/lib/containerd
```

### 删除其它配置文件

自己编辑、定义的配置文件，需要自己手工删除。
