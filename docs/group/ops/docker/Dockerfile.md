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

## 应用发布

## BuildCache

**例如创建以下 Dockerfile 文件**

```dockerfile
FROM centos:7
LABEL auth="Ilee"
COPY hello.log /var/log/
RUN yum -y install vim
CMD /bin/bash
```

### 镜像生成过程

Docker 镜像构建过程大量应用了镜像间的父子关系。即下层镜像是上层镜像的父镜像出现，下下层镜像是作为上层镜像的输入出现；上层镜像是在下层镜像的基础上变化而来的。下面将针对上面的例子逐条指令的分析镜像的构建过程。

#### **FROM centos:7**

FROM 指令是 Dockerfile 中唯一的不可缺少的指令，它为最终构建出的镜像设定了一个基础镜像 Base Image。该语句并不会产生新的镜像层，它是使用指定的镜像作为基础镜像层的。

#### **LABEL auth="Ilee"**

#### **COPY hello.log /var/log/**

#### **RUN yum -y install vim**

#### **CMD /bin/bash**

### BuildCache 机制

### BuildCache 失效
