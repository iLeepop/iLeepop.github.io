# Compose

对于现代应用来说，大多都是通过很多的微服务互相协同组成的一个完整应用。例如，订单管理、用户管理、品类管理、缓存服务、数据库服务等，它们构成了一个电商平台的应用。而部署和管理大量的服务容器是一件非常繁琐的事情。而 Docker Compose 就是解决这类问题的。

## 简介

Docker Compose 是一个需要在 Docker 主机上进行安装的 Docker 容器编排外部工具。其并不是通过脚本或各种冗长的 Docker 命令来将应用组件组织起来，而是通过一个声明式的配置文件描述整个应用，然后通过一条命令完成应用部署。部署成功后，还可通过一系列简单命令实现对其完整生命周期的管理。

Docker Compose 的前身是 Fig（无花果）。

## compose 文件

### 文件简介

Docker Compose 使用 YAML 文件来定义服务。官方推荐的默认文件名为 compose.yml ，但同时也支持 docker-compose.yml。

由于一个 compose 文件中定义的为一个项目的所有服务，所以一般为在创建 compose 文件之前先新建一个目录，目录名称一般为项目名称，然后再将项目所需的所有镜像、微服务的 Dockerfile 放入该目录，并在该目录中新建 compose 文件。

compose 文件中包含 6 个顶级属性：version、services、networks、volumes、configs 与 secrets，及很多的它们下面所包含的属性。下面简单介绍一下常用的属性。

### version

version 是一个顶级属性，但已经过时，不再需要在 compose 文件中出现了。从[官网说明](https://docs.docker.com/compose/compose-file/compose-versioning/)中可以看出。

### networks

networks 作为一个顶级属性，用于定义和创建应用中所使用到的所有网络。其下包含的第一级属性即为网络名称，这个网络名称可以随意命名。而在网络名称下还可包含很多的属性，常用属性如下：

```
services:
	app:
		networks:
 			- app_bridge: #这里使用的并不是网络名称
networks:
 	app_bridge:
		name: appBGnet # 这才是网络名称
		driver: bridge
```

#### name

networks 下的第一级属性—网络名称，并不是真正的网络名称，而仅仅是网络名称的一部分。在真正生成网络后，其真正的网络名称格式为：当前 compose 文件所在目录名 \_networks 下的第一级属性。

但如果设置了 name 属性，则网络名称即为这里指定的名称，不会出现名称再合成情况。

#### driver

用于指定网络驱动，缺省驱动为 Bridge。

#### attachable

如果该属性设置为 true，则除了当前 compose 中定义的服务外，其它独立容器也可以连接到此网络，并能与该网络中的服务及也连接到该网络的其它独立容器通信。缺省状态为 false。

### volumes

volumes 作为一个顶级属性，用于定义和创建应用中所使用到的所有 volume。其下包含的第一级属性即为 volume 的卷标，这个卷标可以随意命名。这个卷标所代表的是当前 Docker 主机中的目录，至于该目录的具体位置，是由系统自动分配的。

在网络名称下还可包含很多的属性，但这些属性并不常用，所以这里不进行介绍了。

### services

services 是一个顶级属性，用于定义一个应用中所包含的服务。Docker Compose 会将每个服务部署在各自的容器中。其下包含的第一级的属性即为服务名称，这个名称可以根据服务内容随意命名。而在服务名称下还可包含很多的属性，常用属性如下：

#### build

用于指定一个 Dockerfile 的路径。而该 Dockerfile 则是用于创建当前服务镜像的。这个路径可以是以斜杠(/)开头的绝对路径，也可以是相对于当前 compose 文件的、以点(.)号开头的相对路径。

如果 Dockerfile 文件名不是默认名称，则需要通过 build 下的 context 属性指定路径，dockerfile 属性指定文件名。

```
build:
 	context: ./
 	dockerfile: myDockerfile
```

#### image

用户指定当前服务所需要使用的镜像，这个镜像可以是本地镜像，也可以是远程镜像仓库中的镜像(会自动 pull)。

如果设置了 build，此时再设置的 image 属性即为构建出的镜像的名称与 Tag。

#### container_name

该属性用于设置容器名称，但并不是必须的。如果没有设置该属性，容器名称则会采用“合成方式”。而合成时需要用到 services 下的第一级属性。

在 services 下存在一级属性，称为服务名称。该级属性是作为 services 下的第一级属性出现的。服务名称将来会作为容器名称的一部分出现。容器的名称格式为：当前 compose 文件所在目录名\_ 服务名称。

如果在 services 下没有指定 image 属性，而是使用 bild 属性，即没有现成的镜像，而是根据 build 下指定的 Dockerfile 生成镜像，此时生成的镜像名称格式为：当前 compose 文件所在目录名-服务名称。

#### ports

一个列表。前面为暴露出的端口号，后面为容器中应用的端口号。如果仅设置了一个端口号，那么这个端口号是容器中应用的端口号，其暴露到宿主机的端口号会被随机分配。

```
ports:
 	- 80:80 # 绑定容器的 80 端口到主机的 80 端口
 	- 9000:80 # 绑定容器的 80 端口到主机的 9000 端口
 	- 443 # 绑定容器的 443 端口到主机的任意端口，容器启动时随机分配绑定的主机端口号
```

#### command

用于覆盖 Dockerfile 中的 CMD 指令内容，即启动该服务容器后立即运行的命令。如果直接按照 Dockerfile 中的 CMD 指令内容执行即可，则 compose 文件中无需该 command 属性。

#### depends_on

一个列表。用于指定当前服务的启动所依赖的应用名称。即列表中指定的服务会先于当前服务启动。

#### deploy

用于指定当前服务容器的部署设置。其下有一个常用属性 replicas，用于指定该服务启动的容器的数量。即实现一个服务多个容器。一旦指定了 deploy:replicas，就不能再指定 container_name 属性了。因为各个启动的容器名称不能相同，而只能由系统自动生成。

```
services:
 	frontend:
 		image: awesome/webapp
 		deploy:
 			mode: replicated
 			replicas: 6
```

#### networks

用于指定当前服务容器要连接到的网络。该网络必须是已经存在的，或通过顶级属性 networks 创建的网络。

#### volumes

用于指定当前服务容器所使用到的所有 volume。这些 volume 可以使用路径与卷标两种方式。

例如，下面是路径方式，非常直观，易于查看，但需要管理本地路径。

```
db:
 	image: mariadb:latest
 	ports:
 		- "3306:3306"
 	volumes:
 		- /etc/mysql:/var/lib/mysql
```

再如，下面是卷标方式，backend 与 backup 两个服务共享了 db-data 的卷，逻辑简洁明了，且无需管理本地路径。但具体卷标所代表的是 Docker 主机的哪个路径，并不能直观的看到。需要通过 docker volume inspect [卷标]来查看。

```
services:
 	backend:
 		image: awesome/database
 		volumes:
 			- db-data:/etc/data
 	backup:
 		image: backup-service
 		volumes:
 			- db-data:/var/lib/backup/data
volumes:
 	db-data:
```

## 常用命令

Docker Compose 通过 docker-compose 系列命令查看和控制 compose 中的所有服务容器。

### docker-compose pull

拉取 compose 中服务依赖的全部镜像或指定镜像。通过在命令后添加服务名称来指定。

### docker-compose config

检查 compose 文件是否正确。可添加选项-q，表示只有存在问题时才有输出。

### docker-compose up

启动 compose 中的所有容器。-d 选项表示后台启动。

### docker-compose logs

查看 comopse 中所有服务或指定服务的运行日志。通过在命令后添加服务名称来指定。 默认情况下，将对不同的服务日志使用不同的颜色来区分。

### docker-compose ps

列出 compose 中所有服务或指定服务。通过在命令后添加服务名称来指定。

### docker-compose top

列出 compose 中当前正在运行的所有服务或指定服务。通过在命令后添加服务名称来 指定。

### docker-compose images

列出 compose 中所有服务或指定服务对应的镜像。通过在命令后添加服务名称来指定。

### docker-compose port

列出指定服务容器的指定端口所映射的宿主机端口。

### docker-compose run

在指定服务上执行一条命令。

### docker-compose exec

进入指定服务容器。通过在命令后添加服务名称来指定。

### docker-compose pause

暂停 compose 中所有服务容器或指定服务容器。通过在命令后添加服务名称来指定。

### docker-compose unpause

恢复 compose 中处于暂停状态的所有服务容器或指定服务容器。通过在命令后添加服 务名称来指定。

### docker-compose stop

停止 compose 中所有服务容器或指定服务容器。通过在命令后添加服务名称来指定。

### docker-compose restart

重启 compose 中所有服务容器或指定服务容器。通过在命令后添加服务名称来指定。

### docker-compose start

启动 compose 中所有服务容器或指定服务容器。通过在命令后添加服务名称来指定。

### docker-compose kill

通过发送 SIGKILL 信号停止指定服务的容器。

### docker-compose rm

删除 compose 中的、处于停止状态的所有服务容器或指定服务容器。通过在命令后添 加服务名称来指定。

### docker-compose down

停止并删除 compose 中的所有服务容器、网络、镜像、数据卷。

## 安装

### 下载安装包

```sh
curl -SL https://github.com/docker/compose/releases/download/v2.12.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```

该命令会从 github 下载 docker compose 插件到当前主机的/usr/local/bin 目录中，并被 重命名为 docker-compose。

```sh
ll /usr/local/bin
```

::: warning

下载可能比较慢，等着吧你就

:::

### 添加可执行权限

为 docker-compose 文件添加可执行权限。

```sh
chmod +x /usr/local/bin/docker-compose
#
ll /usr/local/bin
```

### 测试

通过 docker-compose version 测试安装是否成功。

```sh
docker-compose version
```

## 项目构建

搞了这么久来搞个小项目跑跑吧

没写还
