# 容器

::: warning

本篇跳转链接没有实施

:::

## 基础

### 启动流程

通过 docker run 命令可以启动运行一个容器。该命令在执行时首先会在本地查找指定的镜像，如果找到了，则直接启动，否则会到镜像中心查找。如果镜像中心存在该镜像，则会下载到本地并启动，如果镜像中心也没有，则直接报错。

如果再与多架构镜像原理相整合，则就形成了完整的容器启动流程。

### 容器启动本质

Docker 容器存在的意义就是为了运行容器中的应用，对外提供服务，所以启动容器的目的就是启动运行该容器中的应用。容器中的应用运行完毕后，容器就会自动终止。所以，如果不想让容器启动后立即终止运行，则就需要使容器应用不能立即结束。通常采用的方式有两种，使应用处于与用户交互的状态或等待状态。

## 容器创建并启动

[docker run](#run-命令)用于创建并启动容器，同时会运行容器中指定的应用。这个指定的应用要么通过[docker run](#run-命令)中的[command]指定，要么通过容器的 Dockerfile 中的 CMD 指令指定。

容器两种启动模式：交互模式 -it，分离模式 -d。

### 以交互模式运行 ubuntu

```sh
docker run --name myu -it ubuntu /bin/bash
```

- -it 指定以交互模式运行容器，且为容器分配一个伪终端。
- --name 指定当前容器名称
- 后面的/bin/bash 用于指定容器启动后需要运行的命令为/bin 下的 bash 命令，而该命令 会启动一个 bash 终端。(Dockerfile 中有写/bin/bash 则运行时不用写)

### 以交互模式运行 tomcat

```sh
docker run --name mytom -it tomcat /bin/bash
#通过 ls –l 命令可查看 tomcat 根目录下的文件。注意，不支持 ll 命令。
tomcat] ls -l
```

下面也是以交互模式运行 tomcat 容器，不同的是，该命令后没有/bin/bash，此时会正常启动 tomcat。

```sh
docker run -it -p 8080: tomcat:8.5.49
```

- -p 用于指定端口映射，格式为 暴露给宿主机的端口:容器中应用的端口(如果是使用的厂商的服务器，记得去控制台添加你设置的端口规则)

回车后会发现 tomcat 已启动，且 tomcat 的日志输出占居了命令行。

此时在浏览器中通过 8080 端口可以访问到 tomcat。

### 以分离模式运行 tomcat

下面是以分离模式运行的 tomcat，返回的是容器 ID。

```sh
docker run --name mytom1 -dp 8081:8080 tomcat:8.5.49
```

- -d 选项表示以分离模式（detached mode）运行容器即命令在后台运行，命令的运行 与宿主机的运行分离开来。

### 以分离模式运行 ubuntu

```sh
docker run -d ubuntu
```

该运行方式存在一个问题：容器使用命令启动了，但通过 docker ps 命令查看不到。

再通过 docker ps –a 命令可以发现该容器，只不过其已经退出。docker ps 查看的就是 up 状态的容器，由于其已经退出，所以 docker ps 查看不到。

## 容器创建

[docker create](#create-命令)命令仅用于创建一个容器，并不会启动容器。**该命令没有-d 选项**，因为[docker create](#create-命令)创建的容器默认都是以后台方式来运行的(必须通过[docker start](#start-命令) [容器]来启动)，除非在创建时指定 -it。

## 容器退出

- exit：退出并终止当进程。
- ctrl+p+q：退出但不终止当前进程。

## 容器状态查看

[docker ps](#ps-命令)命令中 -a, -q, -l, -n。

- -a 用于查看所有容器，无论是否处于运行状态。
- –q 用于查看所有处于运行状态的容器的 ID。
- –qa 用于查看所有容器的 ID。
- –l 用于查看最后创建的容器，无论该容器是否处于运行状态。
- –n [num] 用于查看最后创建的指定个数的容器，无论该容器是否处于运行状态。

## 容器再进

[docker exec](#exec-命令)与[docker attach](#attach-命令)的区别与联系

### 新建进程进入容器 exec

[docker exec](#exec-命令)会创建一个新进程来访问进程，一般与 -it 选项联用，一般使用 exit 命令退出并终止当前进程。

```sh
docker exec -it [IMAGE] /bin/bash
```

### 外部操作容器 exec

如仅想查看 tomcat 容器中工作目录中所包含的文件，直接在 exec 命令后紧跟要执行的命令即可直接看到其结果。

```sh
docker exec -it mytom ls -l
```

### 容器附加标准输入

[docker attach](#attach-命令)不会创建新进程，而是将标准输入与标准输出直接附着在容器进程之上(使用户可以通过键盘来操作容器，使容器中的输出可通过显示器展示给用户)，一般不使用选项。但需要考虑退出容器的方式是使用 exit 还是 ctrl+p+q。

```sh
docker attach [IMAGE]
```

然后再使用 exit 命令退出容器。然后会发现容器也停止了。由于 exit 命令的作用是，结束当前进程，所以说明 attach 命令并没有另外再创建新的进程，而是使用了容器进程，exit 命令退出了当前进程，也就退出了容器。

### 容器附加标准输出

启动一个 tomcat 容器与其中的 tomcat，指定容器名称为 mytom。然后通过 docker attach 命令则可看到如下场景：占用了命令行，且没有任何输出，即使通过浏览器访问该 tomcat 也没有任何输出。此时的 mytom 容器已经附加了标准输出，只不过，其输出的是 tomcat 的启停日志信息。

通过 Ctrl + C 可结束 tomcat，此时可看到停止日志显示了出来。但由于此时的 tomcat 已经停止，tomcat 容器已经退出，所以该 docker attach 命令也就随之结束了。

```sh
docker attach mytom
>C
```

## 容器内进程查看

[docker top](#top-命令)命令后可携带 ps 命令的选项。

```sh
docker top myu#ubuntu
```

如果容器中运行的进程较多，也可以通过 grep 对结果进行过滤。

```sh
docker top myu | grep bin
```

## 容器日志查看

[docker logs](#logs-命令)查看的是容器中应用运行日志。这个应用是根据容器创建时命令([docker run](#run-命令)或者[docker create](#create-命令))中的[command]指定，或通过容器镜像的 Dockerfile 中的 CMD 指令指定。

```sh
docker logs mytom
#
docker logs myu#ubuntu
```

### 查看最后的日志

通过添加选项-n 或--tail 可以指定要显示的最后几条日志。

```sh
docker logs -n [num] mytom
```

### 查看指定时间内的日志

通过添加选项--since 可以指定要显示自从指定时间以来的日志。这个时间可以是一个绝对时间，也可以是一个相对时长。

```sh
docker logs --since="2023-09-01"
```

下面使用的是相对时长：显示自从 30 分钟之前产生日志中的最后 3 条。其中 m 表示分，可以使用 s 表示秒，h 表示小时。

```sh
docker logs --since=30m --tail=3 mytom
```

### 查看指定时间外的日志

通过添加选项--until 可以指定要显示截止到指定时间之前的日志。这个时间可以是一个绝对时间，也可以是一个相对时长。

```sh
docker logs --until="2023-09-01" --tail=3 mytom
#
docker logs --until=5m --tail=3 mytom
```

### 查看日志时间戳

要查看某日志的详细时间戳，可以使用-t 选项。下面的命令查看的是最后 3 条日志的时间戳，并与不添加-t 的输出进行了对比。

```sh
docker logs -t --tail=3 mytom
```

### 查看动态日志

添加选项-f 可以查看运行中容器的动态日志。

```sh
docker logs -f --tail=3 mytom
```

用于查看 mytomcat 的最后三条动态日志。其会占用命令行，一直等待日志的输出。

## 容器启停

### 启动

[docker start](#start-命令)启动的是容器本身，但容器在启动的同时会启动一个应用，而这个应用是根据容器创建时命令中的[command]指定，或通过容器镜像的 Dockerfile 中的 CMD 指令指定。

```sh
docker start [CONTAINER]
```

### 重启

通过 docker restart 命令可以重启处于运行状态的指定容器。

```sh
docker restart [CONTAINER]
```

### 优雅停止

通过 docker stop 命令可以优雅停止指定容器。

容器停止命令停止的是容器本身，但在容器停止之前会先停止容器中的所有进程的运行，也就停止了对外提供服务的应用进程。

```sh
docker stop [CONTAINER]
```

### 强制停止

通过 docker kill 命令可以强制停止指定容器。所谓强制停止是指，无论容器当前是否被 其它进程访问都直接停止。

```sh
docker kill [CONTAINER]
```

### 停止所有容器

无论是 docker kill 还是 docker stop，都可使用下面方式停止所有容器。因为这两个命令的参数都可以是容器 ID。

```sh
docker kill $(docker ps -qa)
#
docker stop $(docker ps -qa)
```

### 暂停

[docker pause](#pause-命令)仅暂停的是容器对外提供的服务，容器本身没有停止运行，所以容器中的应用也就没有停止运行，只不过其不能通过容器再对外提供服务了。

```sh
docker pause [CONTAINER]
```

### 解除暂停

```sh
docker unpause [CONTAINER]
```

## 容器删除

[docker rm](#rm-命令)进行容器删除，选项 -f 进行**强制删除**。

docker rm 命令在默认情况下，要删除的容器必须是已经停止的容器。这个容器可以使用容器名或容器 ID 指定。

```sh
docker rm [CONTAINER]
```

[docker rmi](#rmi-命令)进行镜像删除，选项 -f 进行强制删除，镜像的强制删除不会强制删除 UP 状态的容器的镜像。

## 容器与宿主机文件传递

- 理解容器本身就是一个文件系统
- 理解[docker cp](#cp-命令)就是用于完成从一个文件系统复制到另一个文件系统的操作，与容器是否运行无关
- 了解[docker cp](#cp-命令)不支持容器间的文件复制

### 将容器中文件复制到宿主机

```sh
docker cp [CONTAINER]:/usr/local/*** ./
```

命令是将容器的中的\*\*\*目录复制到宿主机的当前目录， 查看宿主机当前目录。

### 将宿主机文件复制到容器

```sh
docker cp ./hw.tar [CONTAINER]:/usr/local/***
```

以上命令用于将宿主机中当前目录下的 hw.tar 文件复制到容器的 /usr/local/\*\*\*目录中。

查看容器中是否已经存在了 hw.tar 文件，需要首先启动该容器。

### 不支持容器间的 cp

::: warning

不支持容器间的 cp

:::

## 提交容器为镜像

通过 docker commit 命令可以将一个容器文件系统的当前快照生成为一个新的镜像。

### 修改容器层

首先创建并启动一个容器，例如 centos:7 镜像的容器。然后发现该容器中是没有安装 ifconfig 命令的。

```sh
docekr run --name mycent -it centos:7
#安装 net-tools 网络工具命令包。
yum install -y net-tools
```

### 生成镜像

下面要将已经安装了 ifconfig 命令的容器生成为一个镜像，以方便后期自己或他人使用。

```sh
docker commit -a "Ilee <ilee@***.com>" -m "Add net-tools" mycent centos7:net-tools
```

这里指定生成的镜像的[repository]为 centos7，[tag]为 net-tools。

### 使用新镜像

使用新生成的镜像创建并启动一个容器，发现其中的 ifconfig 命令是可以使用的。

```sh
docekr run --name myNetCent -it centos7:net-tools
```

- [docker commit](#commit-命令)生成的镜像中包含容器的原镜像的所有分层信息包括历史记录

## 容器的导入导出

- 理解[容器镜像的导入导出对比](#容器镜像的导入导出对比)
- 理解 docker export 是对镜像分层合并后视图的文件系统快照的导出，仅包含合并后的一层镜像信息，不包含原镜像分层历史记录。

::: tip

以下内容 Docker 命令 也有

:::

#### export/save

- export 作用于容器，save 作用于镜像，但是导出文件都为 tar 文件
- export 一次只能导出一个容器，save 一次可以对多个镜像进行导出
- export 只是对当前容器的文件系统快照进行导出，其会丢失原镜像的所有历史记录和元数据信息，save 则是保存了原镜像的完整记录

#### import/load

- import 导入的是容器包；load 加载的是镜像包，但是最终都会恢复成镜像
- import 恢复的镜像只包含当前镜像一层,镜像分层合并层；load 恢复的镜像与原镜像是完全相同的，镜像分层信息一致
- import 恢复的镜像就是新构建的镜像，与原镜像的 ImageID 不同；load 恢复的镜像与原镜像是同一个镜像，即 ImageID 相同
- import 可以导入的镜像指定 repository 与 tag，load 加载的镜像不能指定，于原镜像相同

#### export&import/commit

- 相同点：export + import 会将一个容器变为一个镜像，commit 也可以
- 不同点：export + import 恢复的镜像仅包含原容器生成的一层分层，commit 生成的镜像中包含容器的原镜像的所有分层信息

## docker system 命令集

docker system 是一个命令集，其有四个子命令。

- df 用于查看 docker 各部分占用情况。
- events 可查看指定日间之内(--since)或之 外(--until)在 docker 上所发生的所有事件。这
- info 于查看当前 docker 的详情。
- prune 用于删除 docker 中的无用数据，这些无用数据包含已经停止的 容器、没有任何连接容器的网络、悬空镜像，及悬空镜像的构建缓存。

```sh
docker system df
#获取更为详细的占用情况，可添加-v 选项。
docker system df -v

docker system events --since="2023-09-01"

docker system info
# == docker info

docker system prune#重点记
```
