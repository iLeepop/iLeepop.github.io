# Dockerfile

## 简介

Dockerfile 是用于构建 Docker 镜像的脚本文件，有一系列指令构成。通过 docker build 命令构建镜像时，Dockerfile 的指令会由上到下依次进行，每条指令都将会构建出一个镜像。这就是镜像的分层，因此，指令越多，层次越多，创建的镜像就越多，效率就会变低，所以在定义 Dockerfile 时，能在一个指令完成的动作就不要分成两条。

## 简单构建

**首先安装一下 C、C++的编译器**

```bash
yum install -y gcc gcc-c++
```

**待安装好后，还需要安装静态库**

```bash
yum install -y glibc-static
```

**编写 hello.c 文件**

```bash
mkdir hw
cd hw
vim hello.c
//进入编辑
```

```c
#include<stdio.h>
int main()
{
    printf("hello world!");
    return 0;
}
```

**随后需要编译一下**

```bash
gcc --static -o hello hello.c
```

**编写 Dockerfile 文件**

```bash
vim Dockerfile
```

```dockerfile
FROM scratch
ADD hello /
CMD ["/hello"]
```

```bash
//build镜像
docker build -t hello-my .
//查看镜像
docker images
//run镜像
docker run hello-my
```

**构建多个镜像**

```bash
docker build -t hm:2.0 -t hm:3.0 -t hm:4.0 .
```

docker build 命令中的最后是一个 PATH 路径，其具有两个功能：

- 指定要查找 Dockerfile 的路径
- Dockerfile 中的 ADD 与 COPY 指令中的路径是相对于该路径的

### scratch 镜像

了解一个特殊镜像 scratch。它本身是一个空镜像，但它是所有镜像的 base Image，相当于面向对象编程中的 Object 类，scratch 镜像只能在 Dockerfile 中被继承，不能使用其它命令操作，例如不能 pull，run 以及 tag 等等。

它也不会去生成镜像中的文件系统层。在 Docker 中，scratch 是一个保留字段，用户不能使用其作为自己的镜像名称使用。

### 构建自己的 CentOS 镜像

```bash
mkdir cent
cd cent
vim Dockerfile
```

```dockerfile
FROM centos:7
MAINTAINER Ilee zihao02325@gmail.com
LABEL version="1.0" description="this is a centos7 image created by Ilee"

ENV WORKPATH /usr/local
WORKDIR $WORKPATH

RUN yum install -y wget vim net-tools
CMD /bin/bash
```

```bash
docker build -t ileecentos:1.0 .
docker images
docker run --name ileecentos -it ileecentos:1.0
```

## 指令

- 通常指令以大写形式出现，以便区别于其它参数
- 指令后至少携带一个参数
- #出现在一行的最开端，代表是 comment 注释

### FROM

```dockerfile
Usage: FROM <image>[:<tag>]
# 用于指定基础镜像，且必须是第一条指令。
```

### MAINTAINER

```dockerfile
Usage: MAINTAINER <name>
# 该指令的参数填写一般是维护者姓名和信箱。不过，该指令官方已不建议使用，而是使用LABEL指令代替。
```

### LABEL

```dockerfile
Usage: LABEL <key>=<value> <key>=<value> ......
# 该指令可以通过以键值对的方式包含任意镜像的元数据信息，用于代替MAINTAINER指令。通过docker inspect可以查看到LABEL于MAINTAINER的内容。
```

### ENV

```dockerfile
Usage1: ENV <key> <value>
# 用于指定环境变量，这些环境变量，后续可以被RUN指令使用，容器运行起来之后。也可以在容器中获取这些环境变量。
Usage2: ENV <key1>=<value1> <key2>=<value2>
# 可以设置多个变量，每个变量为一对<key>=<value>指定。
```

### WORKDIR

```dockerfile
Usage: WORKDIR path
# 容器打开后默认进入的目录，一般在后续的RUN、CMD、ENTRYPOINT、ADD等指令中会引用该目录，可以设置多个WORKDIR指令。后续WORKDIR指令若用的是相对路径，则会基于之前WORKDIR指令指定的路径。在使用docker run运行容器时，可以通过-w参数覆盖构建时所设置的工作目录。
```

### RUN

```dockerfile
Usage1: RUN <command>
# 这里的<command>就是shell命令。docker build执行过程中，会使用shell运行指定的command。
Usage2: RUN ["EXECUTABLE","PARAM1","PARAM2",...]
# 在docker build执行过程中，会调用第一个参数"EXECUTABLE"指定的应用程序运行，并使用后面第二、第三等参数作为应用程序的运行参数。
```

### CMD

```dockerfile
Usage1: CMD ["EXECUTABLE","PARAM1","PARAM2",...]
# 在容器启动后，即在执行完docker run后会立即调用执行"EXECUTABLE"指定的可执行文件，并使用后面第二、第三等参数作为应用程序的运行参数。
Usage2: CMD command param1 param2
# 这里的command就是shell命令。在容器启动后会立即执行指定的shell命令。
Usage3: CMD ["PARAM1", "PARAM2",...]
# 提供给ENTRYPOINT的默认参数。
```

### ENTRYPOINT

```dockerfile
Usage1: ENTRYPOINT ["EXECUTABLE","PARAM1","PARAM2",...]
# 在容器启动过程中，即在执行docker run时，会调用执行"EXECUTABLE"指定的应用程序，并使用后面的二、三等参数作为用于程序的运行参数。
Usage2: ENTRYPOINT command param1 param2 ...
#这里的command就是shell命令。在容器启动过程中，即在执行docker run时，会运行指定的shell命令。
```

### EXPOSE

```dockerfile
Usage: EXPOSE <port> [<port>...]
# 指定容器准备对外暴露的端口号，但该端口号并不会真正对外暴露。若要真正对外暴露，则需要在执行docker run命令时使用-p(小p)来指定真正暴露出去的端口号。
```

### ARG

```dockerfile
Usage: ARG <varname>[=<default value>]
# 定义一个变量，该变量会将使用于镜像构建运行时，若要定义多个变量，则需要定义多个ARG指令。
```

### ADD

```dockerfile
Usage1: ADD <src> <dest>
Usage2: ADD ["<src>","<dest>"] #文件路径中存在空格时使用""
# 该指令将复制当前宿主机中指定文件src到容器中的指定目录dest中。src可以是宿主机中的绝对路径，也可以是相对路径。但相对路径是相对于docker build命令所指定的路径。src指定的文件可以是压缩文件，压缩文件复制到容器会自动解压为目录；src也可以是一个URL，此时的ADD相当于wget命令，src最好不要是目录，其会将目录中所有的内容复制到指定目录中。dest是一个绝对路径，其最后的路径必须要加上斜杠，否则系统会将最后的目录名称当作是文件名。
```

### COPY

```dockerfile
Usage1: COPY <src> <dest>
Usage2: COPY ["<src>","<dest>"]
# 功能与ADD指令相同，只不过src不能是URL。若src为压缩文件，复制到容器后不会自动解压。
```

### ONBUILD

```docker
Usage: ONBUILD [INSTRUCTION]
# 该指令用于指定当前镜像的子镜像进行构建时要执行的指令。
```

### VOLUME

```dockerfile
Usage: VOLUME ["dir1","dir2",...]
# 在容器创建可以挂载的数据卷。
```

### CMD 与 ENTRYPOINT 的区别以及使用

这两个指令都用于指定容器启动时要执行的命令，无论哪个指令，每个 Dockerfile 中都只能有一个 CMD/ENTERYPOINT 指令，多个 CMD/ENTERYPOINT 指令只会执行最后一个。不同的是，CMD 指定的是容器启动时默认的命令，而 ENTRYPOINT 指定的是容器启动时一定会执行的命令。即 docker run 时若指定了要运行的命令，Dockerfile 中的 CMD 指令指定的命令是不会执行的，而 ENTERYPOINT 中指定的命令是一定会执行的。

#### CMD-shell

**创建 Dockerfile**

在 dfs 目录中新建文件 Dockerfile，并定义内容如下。

```dockerfile
FROM centos:7
CMD cal
```

**构建镜像 build**

使用 Dockerfile 构建镜像 mycal:latest。

```sh
docker build -t mycal .
```

**运行新建镜像**

运行后可以查看到当前月份的日历。

```sh
docker run -it mycal
```

**覆盖 CMD**

```sh
docker run -it mycal date
```

在 docker run 命令中指定要执行的命令，Dockerfile 中通过 CMD 指定的默认的命令就不会在执行。

**不能添加命令选项**

```sh
docker run -it mycal -y
```

这种方式无法为 CMD 中指定的默认的命令指定选项。

#### CMD-exec

**创建 Dockerfile**

在 dfs 目录中新建文件 Dockerfile2，并将如下内容复制到文件中。

```dockerfile
FROM centos:7
CMD ["/bin/bash","-c","cal"]
```

**构建镜像 build**

使用 Dockerfile2 构建镜像 mycal:1.0。

```sh
docker build -f ./Dockerfile2 -t mycal:1.0 .
```

::: tip

说明：-f 用于指定本次构建所要使用的 Dockerfile 文件。如果文件名不是 docker build 默认加载的 Dockerfile 这个名称。

:::

**运行新建镜像**

运行结果与 shell 方式的相同。

**覆盖 CMD**

```sh
docker run -it mycal:1.0 date
```

运行结果与 shell 方式的相同，也可以被覆盖。

**不能添加命令选项**

```sh
docker run -it mycal:1.0 -y
docker: Error
```

CMD 中指定可以从命令行接收选项，但运行结果与 shell 方式的相同，也不能添加命令选项。这是由 CMD 命令本身决定的。

#### ENTRYPOINT-shell

**创建 Dockerfile**

在 dfs 目录中新建文件 Dockerfile3，并将如下内容复制到文件中。

```dockerfile
FROM centos:7
ENTRYPOINT cal
```

**构建镜像 build**

使用 Dockerfile3 构建镜像 mycal:2.0。

```sh
docker build -f ./Dockerfile3 -t mycal:2.0 .
```

**运行新建镜像**

省略

**ENTRYPOINT 不会被覆盖**

ENTRYPOINT 指定的命令是不会被 docker run 中指定的命令给覆盖掉的。

```sh
docker run -it mycal:2.0 date
```

**添加命令选项无效**

在 docker run 中添加的命令选项，对于 ENTRYPOINT 中指定的命令是无效的。在这点上不像 CMD 指令一样报错。

```sh
docker run -it mycal:2.0 -y
```

#### ENTRYPOINT-exec

**创建 Dockerfile**

在 dfs 目录中新建文件 Dockerfile4，并将如下内容复制到文件中。

```dockerfile
FROM centos:7
ENTRYPOINT ["cal"]
```

**构建镜像 build**

```sh
docker build -f ./Dockerfile4 -t mycal:3.0 .
```

**运行新建镜像**

运行结果与 shell 方式的相同。

省略

**ENTRYPOINT 不会被覆盖**

运行结果会报错，系统认为 date 是 cal 的非法参数。

```sh
docker run -it mycal:3.0 date
```

**添加命令选项生效**

这种情况下在 docker run 中添加的命令选项是有效的。

```sh
docker run -it mycal:3.0 -y
```

**ENTRYPOINT 与 CMD 同用**

**创建 Dockerfile**

在 dfs 目录中新建文件 Dockerfile5，并将如下内容复制到文件中。此时的 CMD 中给出的 就是 ENTRYPOINT 的参数，**注意不能是选项**。

```dockerfile
FROM centos:7
CMD ["hello world"]
ENTRYPOINT ["echo"]
```

**构建镜像 build**

```sh
docker build -f ./Dockerfile5 -t myecho .
```

**运行新建镜像**

省略

**添加命令选项生效**

在 docker run –it myecho 命令后添加选项>hello.log，用于将输出的内容重定向写入到 hello.log 文件中。选项生效。

```sh
docker run -it myecho > hello.log
```

**覆盖 CMD 生效**

在 docker run –it myecho 命令后指定新的参数，用于覆盖 CMD 中的参数生效。

```sh
docker run -it myecho "hi,docker"
```

### AFTER ALL

Dockerfile 中的[command]或[“EXECUTABLE”]如果是通过 CMD 指定的，则该镜像的启动命令 docker run 中是不能添加参数[ARG]的。因为 Dockerfile 中的 CMD 是可以被命令中的 [COMMAND]替代的。如果命令中的 IMAGE 后仍有内容，此时对于 docker daemon 来说，其首先认为是替代用的[COMMAND]，如果有两个或两个以上的内容，后面的内容才会认为是 [ARG]。所以，添加的-y 会报错，因为没有-y 这样的[COMMAND]。

Dockerfile 中的[command]或[“EXECUTABLE”]如果是通过 ENTRYPOINT 指定的，则该镜像的启动命令 docker run 中是可以添加参数[ARG]的。因为 Dockerfile 中的 ENTRYPOINT 是不能被命令中的[COMMAND]替代的。如果命令中的 IMAGE 后仍有内容，此时对于 docker daemon 来说，其只能是[ARG]。

不过，docker daemon 对于 ENTRYPOINT 指定的[command]与[“EXECUTABLE”]的处理方式是不同的。如果是[command]指定的 shell，daemon 会直接运行，而不会与 docker run 中的 [ARG]进行拼接后运行；如果是[“EXECUTABLE”]指定的命令，daemon 则会先与 docker run 中的[ARG]进行拼接，然后再运行拼接后的结果。

**结论：无论是 CMD 还是 ENTRYPOINT，使用[“EXECUTABLE”]方式的通用性会更强些。**

- ["EXECUTABLE"]形式对于 shell 与非 shell 命令都支持
- ENTRYPOINT 的["EXECUTABLE"]形式支持在 docker run 中指定[ARG]

### ADD 与 COPY 指令区别

#### 准备工作

在宿主机/root 目录中 mkdir 一个目录 ac。将事先下载好的任意某 tar.gz 包上传到/root/ac 目录。本例在 zookeeper 官网 https://zookeeper.apache.org 下载了 zookeeper 的 tar.gz 压缩包， 在上传到/root/ac 目录后，为了方便又重命名了这个压缩包为 zookeeper.tar.gz。

#### 创建 Dockerfile

在/root/ac 目录中新建文件 Dockerfile，内容如下：

```dockerfile
FROM centos:7
WORKDIR /opt
ADD zookeeper.tar.gz /opt/add/
COPY zookeeper.tar.gz /opt/copy/
CMD /bin/bash
```

#### 构建镜像 build

使用 Dockerfile 构建镜像 addcopy。

```sh
docker build -t addcopy .
```

#### 运行新建镜像

启动 addcopy 镜像，在容器的/opt 目录中发现自动生成两个目录 addh 与 copy。

```sh
docker run --name myac -it addcopy
#
ll
```

分别查看这两个目录发现，通过 ADD 指令添加的是解压过的目录，而通过 COPY 指令添加的是未解压的。这就是 ADD 与 COPY 指令的区别。

### ARG 指令

该指令用于定义一个变量，该变量将会在镜像构建时使用。注意不是容器启动时，容器启动时镜像构建早已完成。

#### 创建 Dockerfile

mkdir 一个名称为 arg 的目录，在其中新建文件 Dockerfile，内容如下：

```dockerfile
FROM centos:7
ARG name=Ilee
RUN echo $name
```

RUN 指令用于指定在 docker build 执行时要执行的内容。

#### 使用 ARG 默认值构建

使用 Dockerfile 构建镜像 myargs:1.0。我们可以看到，在镜像构建时读取了 ARG 中参数，只不过 docker build 中并没有给变量 name 赋予新值，所以 name 使用的是其默认值 Tom。

```sh
docker build -t myargs:1.0 .
```

#### 使用 ARG 指定值构建

使用 Dockerfile 构建镜像 myargs:2.0。在 docker build 命令中指定了 ARG 中参数值，覆盖了默认值。

```sh
docker build -t myargs:2.0 --build0-arg name=Jerry
```

### ONBUILD 指令

ONBUILD 指令只对当前镜像的子镜像进行构建时有效。

下面实现的是：父镜像中没有 wget 命令，但子镜像中会增加。

#### 创建父镜像操作

**创建父镜像 Dockerfile**

mkdir 一个名称为 onbuild 的目录，并在其中新建文件 Dockerfile，内容如下：

```dockerfile
FROM centos:7

ENV WORKPATH /usr/local
WORKDIR $WORKPATH

ONBUILD RUN yum -y install wget
CMD /bin/bash
```

当前镜像及其将来子镜像的工作目录都将是/usr/local，将来以交互模式运行后都会直接进入到 bash 命令行。ONBUILD 中指定要安装的 wget 命令，是在子镜像进行 docker build 时会 RUN 的安装命令。

**构建父镜像**

使用 Dockerfile 构建镜像 someparent:1.0。

```sh
docker build -t parent:1.0 .
```

**运行父镜像**

```sh
docker run -it parent:1.0
```

#### 创建子镜像操作

**创建子镜像 Dockerfile**

在 onbuild 目录中新建文件 Dockerfile2，内容仅包含一句话，指定父镜像。

```dockerfile
FROM parent:1.0
```

**构建子镜像**

子镜像在构建过程中下载了 wget 命令。

```sh
docker build -f Dockerfile2 -t son:1.0 .
```

**运行子镜像**

我们发现子镜像不仅能够直接进入到 bash 命令行，工作目录为/usr/local，其还直接具有 wget 命令。而这些功能除了继承自父镜像外，就是在构建过程中来自于 ONBUILD 指定的指令。

```sh
docker run -it son:1.0
```

### 构建新镜像的方式总结

可以构建出新的镜像的方式有：

- docker build
- docker commit
- docker import(注意，docker load 并没有构建出新的镜像，其与原镜像是同一个镜像)
- docker compose
- docker hub 中完成 Automated Builds

## 应用发布

### 准备应用

随便准备一个可以使用的项目，例如简单的 SpringBoot。

自行准备，这里就不过多赘述了。

### 发布应用

#### 准备目录

在宿主机中需要为应用创建一个专门的目录。该目录不仅用于存放应用的 Jar 包，还用于存放应用的 Dockerfile 文件与数据卷目录。目录名随意，一般为项目名称。

本例在/root 下 mkdir 一个目录 hello-docker，并将前面应用打好的 Jar 包上传到该目录。

#### 创建 Dockerfile

在/root/hello-docker 目录中创建 Dockerfile 文件，文件内容如下：

```dockerfile
FROM openjdk:8u102
#随便什么本版jdk，只要求跑你的项目
MAINTAINER Ilee ilee@***.com
LABEL version="1.0" description="my own app"
COPY hello-docker-0.0.1-SNAPSHOT.jar hd.jar
ENTRYPOINT ["java", "-jar", "hd.jar"]
EXPOSE 9000
```

#### 构建镜像

```sh
docker build -t hello-docker:1.0
```

#### 运行容器

分离模式运行

```sh
docker run --name myhd -dp 8080:8080 hello-docker:1.0
```

### 访问

至此应该是可以访问你的应用了。

- 对于 Java 应用的发布，一般 Dockerfile 中都会通过 ENTRYPOINT ["java", "-jar", "hd.jar"] 来启动应用
- 对于 EXPOSE 指令，虽然其意义为指定准备对外暴露的端口号，但实际在设置时，是使 用应用原端口号，是为了让使用该 Dockerfile 构建的镜像的用户来看的

## BuildCache

### 环境构建

#### 新建 hello.log

在/root 下 mkdir 一个目录 cache，在其中新建 hello.log 文件。

```sh
mkdir cache
cd cache
echo "hello Ilee" > hello.log
```

#### Dockerfile 举例

**例如创建以下 Dockerfile 文件**

```dockerfile
FROM centos:7
LABEL auth="Ilee"
COPY hello.log /var/log/
RUN yum -y install vim
CMD /bin/bash
```

#### 第一次构建镜像

使用前面的 Dockerfile 第一次构建镜像 test:1.0。

省略 自己实践去

### 镜像生成过程

Docker 镜像构建过程大量应用了镜像间的父子关系。即下层镜像是上层镜像的父镜像出现，下下层镜像是作为上层镜像的输入出现；上层镜像是在下层镜像的基础上变化而来的。下面将针对上面的例子逐条指令的分析镜像的构建过程。

#### **FROM centos:7**

FROM 指令是 Dockerfile 中唯一的不可缺少的指令，它为最终构建出的镜像设定了一个基础镜像 Base Image。该语句并不会产生新的镜像层，它是使用指定的镜像作为基础镜像层的。docker build 命令解析 Dockerfile 的 FROM 指令时，可以立即获悉在哪一个镜像基础上完成下一条指令镜像层构建。

对于本例，Docker Daemon 首先从 centos:7 镜像的文件系统获取到该镜像的 ID，然后再根据镜像 ID 提取出该镜像的 json 文件内容，以备下一条指令镜像层构建时使用。

#### **LABEL auth="Ilee"**

LABEL 指令仅修改上一步中提取出的镜像 json 文件内容，在 json 中添加 LABEL auth="Tom"，无需更新镜像文件系统。但也会生成一个新的镜像层，只不过该镜像层中只记录了 json 文件内容的修改变化，没有文件系统的变化。

如果该指令就是最后一条指令，那么此时形成的镜像的文件系统其实就是原来 FROM 后指定镜像的文件系统，只是 json 文件发生了变化。但由于 json 文件内容发生了变化，所以产生了新的镜像层。

#### **COPY hello.log /var/log/**

COPY 指令会将宿主机中的指定文件复制到容器中的指定目录，所以会改变该镜像层文件系统大小，并生成新的镜像层文件系统内容。所以 json 文件中的镜像 ID 也就发生了变化，产生了新的镜像层。

#### **RUN yum -y install vim**

RUN 指令本身并不会改变镜像层文件系统大小，但由于其 RUN 的命令是 yum install，而该命令运行的结果是下载并安装一个工具，所以导致 RUN 命令最终也改变了镜像层文件系统大小，所以也就生成了新的镜像层文件系统内容。所以 json 文件中的镜像 ID 也就发生了变化，产生了新的镜像层。

#### **CMD /bin/bash**

对于 CMD 或 ENTRYPOINT 指令，其是不会改变镜像层文件系统大小的，因为其不会在 docker build 过程中执行。所以该条指令没有改变镜像层文件系统大小。

但对于 CMD 或 ENTRYPOINT 指令，由于其是将来容器启动后要执行的命令，所以会将该条指令写入到 json 文件中，会引发 json 文件的变化。所以 json 文件中的镜像 ID 也就发生了变化，产生了新的镜像层。

### 修改 Dockerfile 后重新构建

#### 修改 Dockerfile

在前面 Dockerfile 中再增加一条 EXPOSE 指令。

```dockerfile
FROM centos:7
LABEL auth="Ilee"
COPY hello.log /var/log/
RUN yum -y install vim
CMD /bin/bash
EXPOSE 9000
```

#### 构建新镜像

此时再构建新的镜像 test:2.0，会发现没有下载安装 vim 的过程了，但发现了很多的 Using cache。说明这是使用了 build cache。

**省略 自行实践**

#### 删除 test:1.0 镜像

将 test:1.0 镜像删除。

```sh
docker rmi -f test:1.0
```

#### 再构建新镜像

再次构建 test:3.0 镜像。发现仍然使用了大量的 build cache，就连 EXPOSE 指令镜像也使用了 build cache。

**省略 自行实践**

### BuildCache 机制

Docker Daemnon 通过 Dockerfile 构建镜像时，当发现即将新构建出的镜像(层)与本地已存在的某镜像(层)重复时，默认会复用已存在镜像(层)而不是重新构建新的镜像(层)，这种机制称为 docker build cache 机制。该机制不仅加快了镜像的构建过程，同时也大量节省了 Docker 宿主机的空间。

docker build cache 并不是占用内存的 cache，而是一种对磁盘中相应镜像层的检索、复用机制。所以，无论是关闭 Docker 引擎，还是重启 Docker 宿主机，只要该镜像(层)存在于本地，那么就会复用。

- 镜像生成过程：只要镜像层文件系统或其 JSON 文件内容发生了变化，就会产生新的镜像层，生成新的镜像 ID
- docker build cache 机制：这种机制是一种本地磁盘镜像层的检索复用技术，用于加快镜像的构建过程，节省 docker 宿主机的磁盘空间  对于 build cache 失效的三种情况的理解

### BuildCache 失效

docker build cache 在以下几种情况下会失效。

#### Dockerfile 文件发生变化

当 Dockerfile 文件中某个指令内容发生变化，那么从发生变化的这个指令层开始的所有镜像层 cache 全部失效。即从该指令行开始的镜像层将构建出新的镜像层，而不再使用 build cache，即使后面的指令并未发生变化。因为镜像关系本质上是一种树状关系，只要其上层节点变了，那么该发生变化节点的所有下层节点也就全部变化了。

#### ADD 或 COPY 指令内容变化

Dockerfile 文件内容没有变化，但 ADD 或 COPY 指令所复制的文件内容发生了变化，同样会使从该指令镜像层开始的后面所有镜像层的 build cache 失效。

#### RUN 指令外部依赖变化

与 ADD/COPY 指令相似。Dockerfile 文件内容没有变化，但 RUN 命令的外部依赖发生了变化，例如本例中要安装的 vim 软件源发生了变更(版本变化、下载地址变化等)，那么从发生变化的这个指令层开始的所有镜像层 cache 全部失效。

#### 指定不使用 build cache

有些时候为了确保在镜像构建过程中使用到新的数据，在镜像构建 docker build 时，通过--no-cache 选项指定不使用 build cache。

```sh
docker build --no-cache -t test:3.0
```

### 清理 dangling build cache

dangling build cache，即悬虚 build cache，指的是无法使用的 build cache。一般为悬虚镜像 dangling image 所产生的 build cache。通过 docker system prune 命令可以清除。

```sh
docker system prune
```
