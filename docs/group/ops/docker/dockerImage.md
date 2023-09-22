# 镜像

## 基础

### 简介

镜像是一种轻量级、可执行的独立软件包，也可以说是一个精简的操作系统。镜像中包含应用软件及应用软件的运行环境。具体来说镜像包含运行某个软件所需的所有内容，包括代码、库、环境变量和配置文件等。几乎所有应用，直接打包为 Docker 镜像后就可以运行。

由于镜像的运行时是容器，容器的设计初衷就是快速和小巧，所以镜像通常都比较小，镜像中不包含内核，其共享宿主机的内核；镜像中只包含简单的 Shell，或没有 Shell。

### 镜像仓库分类

::: tip

本 part 大量出现 '[]' 代指 '<>'

:::

镜像中心中存储着大量的镜像仓库 Image Repository，每个镜像仓库中包含着大量相关镜像。根据这些镜像发布者的不同，形成了四类不同的镜像仓库。

#### Docker Official Image

Docker 官方镜像仓库。该类仓库中的镜像由 Docker 官方构建发布，代码质量较高且安全，有较完善的文档。该类仓库中的镜像会及时更新。一般常用的系统、工具软件、中间件都有相应的官方镜像仓库。例如，Zookeeper、Redis、Nginx 等。

官方镜像仓库的名称[repository]一般直接为该类软件的名称[software-name]。

#### Verified Publisher

已验证发布者仓库。该类仓库中的镜像由非 Docker 官方的第三方发布。但该第三方是由 Docker 公司审核认证过的，一般为大型企业、团体或组织。审核通过后，Docker 公司会向其颁发“VERIFIED PUBLISHER”标识。这种仓库中镜像的质量还有有保证的。

除了官方镜像仓库，其它都是非官方镜像仓库。非官方镜像仓库名称[repository]一般由发布者用户名与软件名称两部分构成，形式为：[username]/[software-name]。

#### Sponsored OSS

由 Docker 公司赞助开发的镜像仓库。该类仓库中的镜像也由非 Docker 官方的第三方发布，但该镜像的开发是由 Docker 公司赞助的。该类型的第三方一般为个人、团队或组织。这种仓库中镜像的质量也是有保证的。

#### 无认证仓库

没有以上任何标识的仓库。这种仓库中镜像的质量良莠不齐，质量上无法保证，在使用时需谨慎。

### 第三方镜像中心

镜像中心默认使用的都是 Docker 官方的 Docker Hub。不过，镜像中心是可配置的，可以使用指定的第三方镜像中心。对于第三方镜像中心中的仓库名称[repository]由三部分构成：[domain-name]/[username]/[software-name]。其中的[domain-name]指的是第三方镜像中心的域名或 IP。

### 镜像定位

对于任何镜像，都可通过[repository]:[tag]进行唯一定位。其中[tag]一般称为镜像的版本号。[tag]中有一个比较特殊的版本 latest。如果不指定，默认[tag]即为 latest。不过，虽然其字面意思是最新版，一般其也的确存放的是最新版，但并不能保证其真的就是最新版。

## 镜像相关命令

::: tip

本篇命令可以去 Docker 命令 查看用法细节

:::

### docker pull

#### 基本用法

通过 docker pull 命令可以将指定的镜像从 docker hub 拉取到本地。如果没有指定镜像则会抛出一个 Error。例如，下面的命令是拉取 zookeeper 的 3.7.1 版本镜像。

```sh
docker pull zookeeper:3.7.1
```

pull 命令中的也可以不写，此时默认的为 latest。

```sh
docker pull zookeeper
# == docker pull zookeeper:latest
```

查看镜像

```sh
docker images
```

#### 简化日志输出

加上选项-q 后就可简化拉取过程中的日志输出。

```sh
docker pull -q ubuntu
```

#### 通过 digest 拉取

docker pull 可通过镜像的 digest 进行拉取。语法格式为 docker pull [repository]@[digest]。

::: tip

digest，是镜像内容的一个 Hash 值，即所谓的 Content Hash（内容散列）。只要镜像内容发生了变更，其内容散列值就一定会发生改变。注意，digest 是包含前面的 sha256 的，表示该 digest 的产生所采用的 Hash 算法是 SHA256。

**思考** 使用该拉取方式的具体场景或用途。

:::

从 Docker Hub 中具体镜像中可查看到其 digest。

```sh
docker pull zookeeper@balabalalbalbla#瞎写的bro
```

### docker images

#### 基础用法

通过 docker images 命令可查看本地所有镜像资源信息。这些镜像会按照镜像被创建的时间由近及远排序。

```sh
docker images
```

- REPOSITORY：镜像仓库名称
- TAG：镜像版本号
- IMAGE ID：镜像的唯一标识
- CREATE：镜像的创建时间
- SIZE：镜像大小

#### 查看指定镜像

docker images 可以查看指定镜像的信息。

```sh
docker images zookeeper
```

#### 查看完整镜像 ID

默认的 docker images 显示的镜像 id 是经过截取后的显示结果，仅显示了前 12 位。使用 --no-trunc 参数后显示的是完成的镜像 id。

```sh
docker images --no-trunc
```

#### 查看镜像 digest

--digests 选项可以查看所有镜像或指定镜像的 digest 信息。

```sh
docker images --digests
#
docker images ubuntu --digest
```

#### 仅显示镜像 ID

-q 选项可仅显示本地所有镜像的 ImageID。该主要是将来与其它命令联合使用。

```
docker images -q
```

#### 过滤镜像

-f 选项用于过滤指定条件的镜像。下面例举一些常用的过滤条件。

```sh
docker images -f dangling=true
#dangling=true 用于过滤出悬虚镜像，即没有 Repository 与 Tag 的镜像。

#-f before 用于列举出本地镜像中指定镜像创建时间之前创建的所有镜像。
#-f since 用于列举出本地镜像中指定镜像创建时间之后的创建的所有镜像。
#-f reference 用于列举出<repository>:<tag>与指定表达式相匹配的所有镜像。
```

#### 格式化显示

该选项用于格式化输出 docker images 的内容，格式需要使用 GO 模板指定。

```sh
docker images --format {{.Repository}}:{{.Tag}}.{{.Size}}
#通过使用json.格式 查询某个特定属性名称
docker images --format 'json'
```

### docker search

#### 基础用法

通过 docker search 命令可以从 docker hub 上查看指定名称的镜像。

```sh
docker search ubuntu
```

#### 过滤检索结果

用于过滤查询结果。例如，下面的是仅查询出官方提供的镜像。

```sh
docker search ubuntu --filter is-official=true
```

#### 限制检索数量

默认 docker search 显示 25 条检索结果，可通过--limit 选项来指定显示的结果数量。

```sh
docker search ubuntu --limit=5
```

#### 到 hub 官网查看

以上检索方式与从 docker hub 官网 https://hub.docker.com 查看是一样的，但没有官网查看的直观。

### docker rmi

#### 基本用法

rmi，remove images。该命令用于删除指定的本地镜像。镜像通过[repository]:[tag]指定。如果省略要删除镜像的 tag，默认删除的是 lastest 版本。

```sh
docker rmi ubuntu
```

#### 删除多个镜像

docker rmi 命令可一次性删除多个镜像，多个要删除的镜像间使用空格分隔。

```sh
docker rmi ubuntu:*** ubuntu:***
```

#### 通过 ImageID 删除镜像

docker rmi 也可通过 ImageID 指定要删除的镜像。

```sh
docker rmi [IMAGE ID]
```

#### 强制删除镜像

默认情况下，对于已经运行了容器的镜像是不能删除的，必须要先停止并删除了相关容器然后才能删除其对应的镜像。不过，也可以通过添加-f 选项进行强制删除。

```sh
docker rmi -f ubuntu
```

#### 删除所有镜像

使用组合命令删除所有镜像。当然，如果不携带-f 选项，则不会删除已打开容器的镜像。

```sh
docker rmi [-f] $(docker images -q)
```

### 导出/导入镜像

我们在本地生成一个镜像，想将其导出后在另一电脑上使用，则可通过导出/导入镜像 来完成。

#### 导出镜像 save

docker save 命令用于将一个或多个镜像导出为 tar 文件。例如，下面的命令是将 busybox 与 hello-world 镜像导出到当前/root 目录的 my.tar 文件中。

```sh
docker save -o my.tar busybox:latest hello-world
#
ll
#即可看见目录下的my.tar文件
```

#### 导入镜像 load

docker load 用于将一个 tar 文件导入并加载为一个或多个镜像。

```sh
docker load -i my.tar
#check
docker images
```

## 自动化镜像

```
docker search [IMAGE]
```

AUTOMATED 表示当前镜像是否是“自动化镜像”。自动化镜像就是使用 Docker Hub 连接一个包含 Dockerfile 文件(专门构建镜像用的文件)的 GitHub 仓库或 Bitbucket 仓库的源码托管平台，然后 Docker Hub 就会自动根据 Dockerfile 内容构建镜像。

这种构建出的镜像会被标记为 AUTOMATED，这种构建镜像的方式称为 Trusted Build（受信构建）。只要 Dockerfile 文件内容发生变化，那么 Docker Hub 就会构建出新的镜像。

## 镜像分层

### 什么是分层

Docker 镜像由一些松耦合的只读镜像层组成，Docker Daemon 负责堆叠这些镜像层，并将它们关联为一个统一的整体，即对外表现出的是一个独立的对象。

通过 docker pull 命令拉取指定的镜像时，每个 Pull complete 结尾的行就代表下载完毕了一个镜像层。

```sh
docker pull ubuntu
.......
#like
#Using default tag: latest
#latest: Pulling from library/ubuntu
#a6d989asd: Pull complete
#....
#....
#Digest: *****.....
```

### 为什么分层

采用这种分层结构的优势很多，例如，每个分层都是只读的，所有对分层的修改都是以新分层的形式出现，并不会破坏原分层内容；再如，每个分层只记录变更内容，所以有利于节省存储空间等。

不过，分层结构的最大的好处是，在不同镜像间实现资源共享，即不同镜像对相同下层镜像的复用。对于 docker pull 命令，其在拉取之前会先获取到其要拉取镜像的所有 ImageID，然后在本地查找是否存在这些分层。如果存在，则不再进行拉取，而是共享本地的该分层。大大节点的存储空间与网络带宽，提升了拉取效率。

### 镜像层构成

每个镜像层由两部分构成：镜像文件系统与镜像 json 文件。这两部分具有相同的 ImageID。

镜像文件系统就是对镜像占有的磁盘空间进行管理的文件系统，拥有该镜像所有镜像层的数据内容。而镜像 json 文件则是用于描述镜像的相关属性的集合，通过 docker inspect [镜像]就可以直观看到。

### 镜像 FS 构成

一个 docker 镜像的文件系统 FS 由多层只读的镜像层组成，每层都完成了特定的功能。而这些只读镜像层根据其位置与功能的不同可分为两类：基础镜像层与扩展镜像层。

#### 基础镜像层

所有镜像的最下层都具有一个可以看得到的基础镜像层 Base Image，基础镜像层的文件系统称为根文件系统 rootfs。而 rootfs 则是建立在 Linux 系统中“看不到的”引导文件系统 bootfs 之上。

#### 扩展镜像层

在基础镜像层之上的镜像层称为扩展镜像层。顾名思义，其是对基础镜像层功能的扩展。在 Dockerfile 中，每条指令都是用于完成某项特定功能的，而每条指令都会生成一个扩展镜像层。

#### 容器层

一旦镜像运行了起来就形成了容器，而容器就是一个运行中的 Linux 系统，其也是具有文件系统的。容器的这个文件系统是在 docker 镜像最外层之上增加了一个可读写的容器层，对文件的任何更改都只存在于容器层。因此任何对容器的操作都不会影响到镜像本身。

容器层如果需要修改某个文件，系统会从容器层开始向下一层层的查找该文件，直到找到为止。任何对于文件的操作都会记录在容器层。例如，要修改某文件，容器层会首先把在镜像层找到的文件 copy 到容器层，然后再进行修改。删除文件也只会将存在于容器层中的文件副本删除。

Docker 容器就是一个叠加后的文件系统，而这个容器层称为 Union File System，联合文件系统。

### LinuxOS 启动过程(扩展)

进一步学习 linux 后再来填坑:joy:

## 镜像摘要

每个镜像都有一个长度为 64 位的 16 进制字符串作为其摘要 digest。

### 查看

在 docker pull 镜像结束后会给出该拉取的镜像的摘要 digest。

```sh
docekr pull [IMAGE]
```

通过 docker inspect 命令可以查看指定镜像的详细信息。其中就包含该镜像的摘要信息。

```sh
docker inspect [IMAGE]
```

通过 docker images --digests 命令也可以查看到镜像的摘要信息。

```
docker images [IMAGE] --digests
```

### 是什么

摘要，即 digest，是镜像内容的一个 Hash 值，即所谓的 Content Hash（内容散列）。只要镜像内容发生了变更，其内容散列值就一定会发生改变。也就是说，一个镜像一旦创建完毕，其 digest 就不会发生改变了，因为镜像是只读的。

Docker 默认采用的 Hash 算法是 SHA256，即 Hah 值是一个长度为 256 位的二进制值。Docker 使用 16 进制表示，即变为了长度为 64 位的字符串。

### 有何用

摘要的主要作用是区分相同[repository]:[tag]的不同镜像。

如果镜像在生产运行过程中发现存在一个 BUG。现对其进行了修复，并使用原 标签将其 push 回了仓库，那么原镜像被覆盖。但生产环境中遗留了大量运行中的修复前镜 像的容器。此时，通过镜像标签已经无法区分镜像是修复前的还是修复后的了，因为它们的 标签是相同的。此时通过查看镜像的 digest 就可以区分出修改前后版本，因为内容发生了变 化，digest 一定会变。

为了确保再次拉取到的是修复后的镜像，可通过 digest 进行镜像拉取。

其用法是：

```sh
docker pull [repository]@[digest]
```

不方便的是，镜像的摘要需要由运维人员在本地进行手工维护。

### 分发散列值

在 push 或 pull 镜像时，都会对镜像进行压缩以减少网络带宽和传输时长。但压缩会改变镜像内容，会导致经过网络传输后，镜像内容与其 digest 不相符。出现问题。

为了避免该问题，Docker 又为镜像配置了 Distribution Hash（分发散列值）。在镜像被压缩后立即计算分发散列值，然后使该值随压缩过的镜像一同进行发送。在接收方接收后，立即计算压缩镜像的分发散列值，再与携带的分发散列值对比。如果相同，则说明传输没有问题。

## 多架构镜像

### 简介

Multi-architecture Image，即多架构镜像，是某[repository]中的某[tag]镜像针对不同操作系统/系统架构的不同镜像实现。即多架构镜像中包含的镜像的[repository]:[tag]都是相同的，但它们针对的操作系统/系统架构是不同的。

### 原理

无论用户使用的是什么操作系统/系统架构，其通过 docker pull 命令拉取到的一定是针对该操作系统/系统架构的镜像，无需用户自己考虑操作系统/系统架构问题。Docker Hub 能够根据提交 pull 请求的 Docker 系统的架构自动选择其对应的镜像。

在 Docker Hub 中，镜像的多架构信息保存在 Manifest 文件中。在拉取镜像时，Docker 会随着 pull 命令将当前 Docker 系统的 OS 与架构信息一并提交给 Docker Hub。Docker Hub 首先会根据镜像的[repository]:[tag]查找是否存在 Manifest。如果不存在，则直接查找并返回[repository]:[tag]镜像即可；如果存在，则会在 Manifest 中查找是否存在指定系统/架构的镜像。如果存在该系统/架构，则根据 Manifest 中记录的地址找到该镜像的位置。

## 悬空镜像

悬空镜像是指既没有 Repository 也没有 Tag 的镜像。当新建一个镜像后，为该镜像定了一个已经存在的 TAG，那么原来的镜像就会变成悬空镜像。

**演示**

```bash
docker images
//
<REPOSITORY> <TAG> <...> ...
centos7      latest ... 1
...
//
docker build -t centos7 .
//
docker images
//
<REPOSITORY> <TAG> <...> ...
none         none ... 1 //旧
centos7      latest ... 2 //新
```

可以使用[docker image prune]()删除无用的镜像，这是专门的删除命令。

也可以使用[docker system prune](#prune)删除 docker 中无用的数据，无用数据包含已经停止的容器，没有任何连接容器的网络，悬空镜像以及悬空镜像的构建缓存。
