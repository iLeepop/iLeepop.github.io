# 网络

# 基础知识

Docker 网络中的相关命令非常少，但需要掌握的底层原理相对较多。

## Network Namespace

Docker 网络的底层原理是 Linux 的 Network Namespace，所以对于 Linux Network Namespace 的理解对 Docker 网络底层原理的理解非常重要。

### 概述

Network Namespace 是 Linux 内核提供的用于实现网络虚拟化的重要功能，它能创建多 个隔离的网络空间，每个独立的网络空间内的防火墙、网卡、路由表、邻居表、协议栈都是 独立的。不管是虚拟机还是容器，当运行在独立的命名空间时，就像是一台单独的主机一样。

### 需求

下面要通过手工方式创建两个 Network Namespace，并最终让它们相互连通，即可以通 过 ping 命令测试成功。以使大家能够理解 Docker 网络的底层原理。

### 创建两个命名空间

分别创建两个命名空间 ns1 与 ns2。

```sh
#ns1 created
ip netns add ns1
#ns2 created
ip netns add ns2
#check list
ip netns list
ns2
ns1
```

因为每个网络空间都是独立的，所以每个 Network Namespace 都具有一个回环网络适配器 IO。

```sh
#
ip netns exec ns1 ip a
#
ip netns exec ns2 ip a
```

### 创建网络接口 veth pair

如果要让两个命名空间连通，则需要用到虚拟设备接口技术 veth pair。该技术需要一对 网络接口分别置于两个命名空间中。

以下命令用于创建一对网络接口 veth-ns1 与 veth-ns2。

```sh
ip link add veth-ns1 type veth peer name veth-ns2
```

此时通过 ip link 查看当前的网络地址情况，可以看到新增了两个相互连通的 veth pair， 它们都具有 MAC 地址，但它们的状态都是 DOWN，且都不具有 IP。

```sh
#查看
ip link
......
30: veth-ns2@veth-ns1: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 36:f6:38:0f:35:b0 brd ff:ff:ff:ff:ff:ff
31: veth-ns1@veth-ns2: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 02:d6:f5:5a:68:aa brd ff:ff:ff:ff:ff:ff
......
```

### 命名空间添加 veth 接口

通过 ip link set 命令，将这两个网络接口分别分配给两个命名空间。

```sh
#
ip link set veth-ns1 netns ns1
#
ip link set veth-ns2 netns ns2
```

此时分别在两个命名空间中执行 ip link 命令，可以查看到，它们中分别新增了前面指定 的一个网络接口。

```sh
ip netns exec ns1 ip link
ip netns exec ns2 ip link
```

此时再在主机中查看 ip link，发现原来的那两个网络接口已经消失了。

```sh
#查看
ip link
```

### 为 veth 接口分配 IP

前面创建的两个网络接口是没有 IP 的。下面要通过 ip netns exec 命令，为每个指定的命 名空间执行 IP 添加命令 ip addr add [ip] dev [网络接口]。

```sh
ip netns exec ns1 ip addr add 192.168.1.1/24 dev veth-ns1
ip netns exec ns2 ip addr add 192.168.1.2/24 dev veth-ns2
```

为 ns1 的 veth-ns1 网络接口分配的 IP 为 192.168.1.1，掩码为 24；为 ns2 的 veth-ns2 网 络接口分配的 IP 为 192.168.1.2，掩码为 24。

此时通过在 ns1 与 ns2 中运行 ip a 命令，便可看到为接口分配的 IP 了。

```sh
ip netns exec ns1 ip a
....
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
31: veth-ns1@if30: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 02:d6:f5:5a:68:aa brd ff:ff:ff:ff:ff:ff link-netnsid 1
    inet 192.168.1.1/24 scope global veth-ns1
       valid_lft forever preferred_lft forever
....
#ns2
ip netns exec ns2 ip a
....
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
30: veth-ns2@if31: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 36:f6:38:0f:35:b0 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 192.168.1.2/24 scope global veth-ns2
       valid_lft forever preferred_lft forever
....
```

### 启动 veth 接口

以上两个命名空间中的 veth 接口已经具有了 IP，但其状态仍为 DOWN，还没有开启。 下面要通过 ip link set dev [接口] up 来启动指定的网络接口。

```sh
ip netns exec ns1 ip link set dev veth-ns1 up
ip netns exec ns2 ip link set dev veth-ns2 up
```

此时再通过 ip a 命令查看两接口的状态，已经变为了 UP。

```sh
ip netns exec ns1 ip a
....
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
31: veth-ns1@if30: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue [state UP] group default qlen 1000
    link/ether 02:d6:f5:5a:68:aa brd ff:ff:ff:ff:ff:ff link-netnsid 1
    inet 192.168.1.1/24 scope global veth-ns1
       valid_lft forever preferred_lft forever
    inet6 fe80::d6:f5ff:fe5a:68aa/64 scope link
       valid_lft forever preferred_lft forever
....
#ns2
ip netns exec ns2 ip a
....
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
30: veth-ns2@if31: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue [state UP] group default qlen 1000
    link/ether 36:f6:38:0f:35:b0 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 192.168.1.2/24 scope global veth-ns2
       valid_lft forever preferred_lft forever
    inet6 fe80::34f6:38ff:fe0f:35b0/64 scope link
       valid_lft forever preferred_lft forever
....
```

### 相互 ping

此时可以通过在两个命名空间中执行 ping 命令来与对方进行连通性测试了。

```sh
ip netns exec ns1 ping 192.168.1.2
#ns2
ip netns exec ns2 ping 192.168.1.1
```

## CNM

Docker 网络架构由三个主要部分构成：CNM、Libnetwork 与 Driver。

CNM，Container Network Model，容器网络模型，其是一种网络连接的解决方案，是一 种设计规范、设计标准，其规定了 Docker 网络的基础组成要素。

CNM 中定义了三个基本要素：沙盒 Sandbox，终端 Endpoint 与网络 Network。

- 沙盒：一个独立的网络栈，其中包括以太网接口、端口号、路由表、DNS 配置等。Linux Network Namespace 是沙盒的标准实现。
- 终端：虚拟网络接口，主要负责创建连接，即将沙盒连接到网络上。一个终端只能接入 某一个网络。
- 网络：802.1d 网桥的软件实现，是需要交互的终端的集合。

## Libnetwork

CNM 是设计规范，而 Libnetwork 是开源的、由 Go 语言编写的、跨平台的 CNM 的标准实现。

Libnetwork 除了实现了 CNM 的三个组件，还实现了本地服务发现、容器负载均衡，以及网络控制层与管理层功能。

## Driver

每种不同的网络类型都有对应的不同的底层 Driver，这些 Driver 负责在主机上真正实现需要的网络功能，例如创建 veth pair 设备等。

不过，无论哪种网络类型，其工作方式都是类似的。通过调用 Docker 引擎的 API 发出请求，然后由 Libnetwork 做出框架性的处理，然后将请求转发给相应的 Driver。

通过 docker network ls 命令可以查看当前主机所连接的网络及网络类型。

```sh
docker network ls
```

## bridge 网络

bridge 网络，也称为单机桥接网络，是 Docker 默认的网络模式。该网络模式只能存在 于单个 Docker 主机上，其只能用于连接所在 Docker 主机上的容器。

### docker0 网桥

#### 查看 docker0 网桥

bridge 网络模式中具有一个默认的虚拟网桥 docker0，通过 ip a 或 ifconfig 命令都可查看 到。

```sh
ip a
....
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:8a:bf:39:c1 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:8aff:febf:39c1/64 scope link
       valid_lft forever preferred_lft forever
....
#
ifconfig
....
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:8a:bf:39:c1 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:8aff:febf:39c1/64 scope link
       valid_lft forever preferred_lft forever
....
#

```

通过 docker network inspect bridge 也可以查看到网络名称为 bridge 的网络的详情。

```sh
docker network inspect bridge
```

可以看到该网络的驱动为 bridge，其网桥名称为 docker0。只不过，目前该网络上还没 有连接任何容器。

#### docker0 网桥工作原理

在 Linux 主机上，Docker 的 bridge 网络由 Bridge 驱动创建，其在创建时会创建一个默认 的网桥 docker0。容器与网桥间是通过 veth pair 技术实现的连接，网桥与外网间是通过“网 络地址转换 NAT 技术”实现的连接，即将通信的数据包中的内网地址转换为外网地址。

Bridge 驱动的底层是基于 Linux 内核的 Linux Bridge 技术。该技术已经经历了近 20 年的 考验，这就意味着该模式是高性能且非常稳定的。

### 查看网络连接详情

#### 查看 bridge 网络整体连接

现在通过 docker network inspect 命令查看当前 bridge 网络的整体连接情况。

```sh
docker network inspect bridge
```

在 Containers 中可以查看到当前名称为 bridge 的网络中连接的 bb1 与 bb2 两个容器。这两个容器及宿主机，其实就是三个完全独立的 Network Namespace。

#### 查看宿主机接口

此时在宿主机上通过 ip a 命令查看当前主机的网络接口情况。

```sh
ip a
....
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 52:54:00:57:27:ea brd ff:ff:ff:ff:ff:ff
    inet 10.0.8.5/22 brd 10.0.11.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::5054:ff:fe57:27ea/64 scope link
       valid_lft forever preferred_lft forever
3: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:8a:bf:39:c1 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:8aff:febf:39c1/64 scope link
       valid_lft forever preferred_lft forever
19: vethf6a7340@if18: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether 32:5b:c0:2b:e7:97 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::305b:c0ff:fe2b:e797/64 scope link
       valid_lft forever preferred_lft forever
....
```

发现除了回环地址 lo，本地网卡 ens33，网桥 docker0 外，还有两个 veth 网络接口。这两个 veth 就是由 Libnetwork 生成的 veth pair 中的宿主机中的 EndPoint。

- 19: vethf6a7340@if18 表示这是第 5 个接口，其用于连接外部的第 4 个接口

#### 查看容器接口

```sh
docker exec [容器名称] ip a
#以下我的容器例子
docker exec mytom ip a
....
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
18: eth0@if19: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
....
```

在容器中分别使用 ip a 命令查看地址情况，可以看到均包含 eth0 的接口。 其中的接口 18，即 eth0@if19，其用于连接宿主机的第 19 个接口。

它们的接口正好与宿主机中的接口构成一对 pair。

#### 查看网桥连接

这里要使用一个专门用于网桥控制管理的命令 brctl。由于该命令默认在 Linux 中没有安 装，所以需要首先安装一个网桥的工具包 bridge-utils。

```sh
yum -y install bridge-utils
```

使用 brctl show 命令可以查看本机当前所有网桥及其连接情况。可以看到，当前宿主机 中只有一个网桥 docker0，其上连接着一个 vethxxx 的接口，就是前面连接 mytom 上的 eth0 的接口。

```sh
brctl show
....
bridge name     bridge id               STP enabled     interfaces
docker0         8000.02428abf39c1       no              vethf6a7340
....
```

#### 查看容器详情

通过 docker inspect 查看容器的详情，可以看到，其网络连接中的网关 Geteway 的 IP 地址就是 docker0 网桥的地址。

```
docker inspect mytom
```

### 网络创建

#### 创建网络

通过 docker network create 命令可以创建指定名称与类型的网络。

```sh
docker network create -d bridge bridge2
```

-d 选项用于指定要创建网络时所使用的驱动，即创建的网络类型。最后的 bridge2 则是新创建网络的名称。

#### 查看宿主机支持网络

此时通过 docker network ls 可查看到新创建的网络。

```sh
docker network ls
```

#### 查看宿主机网桥

通过 brctl show 命令可以查看到新增了一个网桥，只不过该网桥暂时还没有任何连接的 网络接口。该网桥就是在创建新的网络时自动创建的。

```sh
brctl show
....
bridge name     bridge id               STP enabled     interfaces
docker0         8000.02428abf39c1       no              vethf6a7340
....
```

### 创建容器指定网络

#### 创建容器

现在要创建一个新的 BusyBox 容器 bb，其连接在新建的 bridge2 网络上。

```sh
docker run -d --name bb --network bridge2 busybox /bin/sh -c "while true; do sleep 3600; done"
#no busybox look here
docker pull busybox[:tag]
```

在创建容器时通过--network 指定要连接到的网络，如果不指定，默认连接到默认的 bridge 网络。

#### 查看新建网络详情

此时查看 bridge2 的网络详情，可以看到容器 bb3 已经连接到了上面。

```sh
docker network inspect bridge2
....
"Containers": {
            "9ace90e54c607d2a8784628f10575471d18847b8cb5ebe2e4cc959ee922dace4": {
                "Name": "bb",
                "EndpointID": "225afc1bec099eb6ea2498f13e011c7c83f14216344f68e5d607e35e8e7e2788",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            }
        }
....
```

#### 查看宿主机网络接口

此时查看当前宿主机的网络接口情况，发现多出了两个接口。其中一个是 32 号接口，其 为网桥 br-xxx，一个是 36 号接口，其是连接 bb 的接口 vethxxx@if35。

```sh
ip a
....
32: br-a19ca8dcfc5a: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:97:8b:c1:62 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.1/16 brd 172.18.255.255 scope global br-a19ca8dcfc5a
       valid_lft forever preferred_lft forever
    inet6 fe80::42:97ff:fe8b:c162/64 scope link
       valid_lft forever preferred_lft forever
36: veth02a9a19@if35: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-a19ca8dcfc5a state UP group default
    link/ether ba:12:cb:73:91:20 brd ff:ff:ff:ff:ff:ff link-netnsid 3
    inet6 fe80::b812:cbff:fe73:9120/64 scope link
       valid_lft forever preferred_lft forever
....
```

#### 查看新增容器网络接口

此时查看容器 bb 的网络接口，发现其 35 号接口正好是宿主机 36 号接口的 pair 接口。

```sh
docker exec bb ip a
....
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
35: eth0@if36: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
    link/ether 02:42:ac:12:00:02 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.2/16 brd 172.18.255.255 scope global eth0
       valid_lft forever preferred_lft forever
....
```

#### 查看宿主机网桥

此时再查看网桥情况，发现新增网桥上增加了一个接口，而该接口正好就是宿主机上的 36 号接口。

并且，该接口与 bridge 网络不是同一 网段，所以它们之间是不能相互通信的。

```sh
brctl show
....
bridge name     bridge id               STP enabled     interfaces
br-a19ca8dcfc5a         8000.0242978bc162       no            >>veth02a9a19<<
docker0         8000.02428abf39c1       no              vethf6a7340
....
```

### 容器连接到指定网络

#### 连接到指定网络

现在要将容器 bb1 连接到新建的 bridge2 网络上。可以使用 docker network connect 命令。

```sh
#created bb1 connect bridge
docker run -d --name bb1 --network bridge busybox /bin/sh -c "while true; do sleep 3600; done"
#重新连接至bridge2
docker network connect bridge2 bb1
```

#### 查看两个网络详情

此时查看 bridge2 的网络详情中的容器情况，发现 bb 与 bb1 都在该网络上。

```sh
docker network inspect bridge2
....
 "Containers": {
            "9ace90e54c607d2a8784628f10575471d18847b8cb5ebe2e4cc959ee922dace4": {
                "Name": "bb",
                "EndpointID": "225afc1bec099eb6ea2498f13e011c7c83f14216344f68e5d607e35e8e7e2788",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            },
            "fca1467bc863fea6af9453577a1c3a1cbedc5d7b55455ffcc54dad5ae5f1667e": {
                "Name": "bb1",
                "EndpointID": "c5ea77741b223c9da6c369b6be4cfdc3b10db427b3bc0c018a6970337a42b179",
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",
                "IPv6Address": ""
            }
        },
....
```

然后再查看原来的 bridge 网络详情的容器情况，发现 bb1 仍连接在其上。即，bb1 容器 同时连接在了两个网络上。

```sh
docker network inspect bridge
....
 "Containers": {
            "132e8c4b65f7752b708371be437d57e12a6b4bae708ddd4ef8b6b5cf0a0936ab": {
                "Name": "mytom",
                "EndpointID": "f988865f7415ffe5442ff8917fc325b738054cba69738f90673813c85cde6b92",
                "MacAddress": "02:42:ac:11:00:02",
                "IPv4Address": "172.17.0.2/16",
                "IPv6Address": ""
            },
            "fca1467bc863fea6af9453577a1c3a1cbedc5d7b55455ffcc54dad5ae5f1667e": {
                "Name": "bb1",
                "EndpointID": "8e482be1c2b6a012117b8b30192b1a9a2ce2ccfce8a65657f89e8ae6f19a7c9f",
                "MacAddress": "02:42:ac:11:00:03",
                "IPv4Address": "172.17.0.3/16",
                "IPv6Address": ""
            }
        },
....
```

#### 查看容器接口

此时查看 bb1 的网络接口情况，发现其同时具有两个网络接口，分别连接在两个不同的网络上。

```sh
docker exec bb1 ip a
....
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
37: eth0@if38: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
39: eth1@if40: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
    link/ether 02:42:ac:12:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.3/16 brd 172.18.255.255 scope global eth1
       valid_lft forever preferred_lft forever
....
```

#### 查看容器详情

查看 bb1 容器详情，可以看到其连接在两个网络上，具有两个 IP。

```sh
docker inspect bb1
....
"Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "192c8fb3873c78366d2bfdd96f3004970f3a24d99072914a009e2c473abe9bd1",
                    "EndpointID": "8e482be1c2b6a012117b8b30192b1a9a2ce2ccfce8a65657f89e8ae6f19a7c9f",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:11:00:03",
                    "DriverOpts": null
                },
                "bridge2": {
                    "IPAMConfig": {},
                    "Links": null,
                    "Aliases": [
                        "fca1467bc863"
                    ],
                    "NetworkID": "a19ca8dcfc5a2b5f021e3ea7d2b1708fb7d7a143796a9f338e043db51ce721f7",
                    "EndpointID": "c5ea77741b223c9da6c369b6be4cfdc3b10db427b3bc0c018a6970337a42b179",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:03",
                    "DriverOpts": {}
                }
            }
....
```

#### 容器互 ping

容器 bb 与 bb1 互 ping 是可以 ping 通的。

```sh
#bb
docker exec bb ping 172.18.0.3 -c 3
#bb1
docker exec bb1 ping 172.18.0.2
```

但 bb 要 ping 容器 bb1 的另一网段的 IP 是 ping 不通的。:x:

```sh
docker exec bb ping 172.17.0.3
```

#### 容器互 ping 容器名

除了可以直接 ping 通指定的 IP 外，还可以直接去 ping 对方的容器名称。

```sh
docker exec bb ping bb1
```

该方式在生产中非常重要。因为生产中容器的 IP 可能会发生变化，但容器名称一般是 不会变的。如果某服务总是直接通过 IP 与容器相连接，那么一旦容器 IP 变化，则该服务将 连接不上容器。但如果是通过容器名称相连接的，那么无论容器 IP 如何变化，都将不影响 服务与容器的连接。

#### 创建定向连接容器

对于自定义的 bridge 网络，其具有一个特性：该网络上的容器可以通过容器名互 ping。 但默认的 bridge 网络是不行的。如果在默认的 bridge 网络上实现通过容器名进行的连接， 则需要创建容器时通过--link 选项指定。

```sh
docker run -d --name bb2 --link bb1 busybox /bin/sh -c "while true; do sleep 3600; done"
```

此时容器 bb2 直接通过 bb1 的容器名称就是连接上 bb1。

```sh
docker exec bb2 ping bb1
```

但容器 bb2 是无法通过容器名称来连接 bb 的。然后 bb1 也无法通过容器名称连接 bb2。

所以，--link 指定的连接是一种定向连接，是带有指向性与方向性的。

```sh
docker exec bb2 ping bb
^C
docker exec bb1 ping bb2
ping: bad address 'bb2'
```

#### 创建共享网络命名空间容器

在创建容器时可以指定其与某已经存在的容器共享 Network Namespace，但要求该已经存在的容器采用的是 bridge 网络模式。

```sh
docker run -d --name bb1-1 --network container:bb1 busybox /bin/sh -c "while true; do sleep 3600; done"
```

上面的命令创建了一个 bb1-1 的容器，其共享了 bb1 容器的 Network Namespace。 查看两个容器的接口情况，发现完全相同。

```sh
#bb1-1
docker exec bb1-1 ip a
....
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
37: eth0@if38: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
39: eth1@if40: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
    link/ether 02:42:ac:12:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.3/16 brd 172.18.255.255 scope global eth1
       valid_lft forever preferred_lft forever
....
#bb1
docker exec bb1 ip a
....
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
37: eth0@if38: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
39: eth1@if40: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
    link/ether 02:42:ac:12:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.18.0.3/16 brd 172.18.255.255 scope global eth1
       valid_lft forever preferred_lft forever
....
```

查看容器 bb1-1 的详情，可以发现，其没有自身的网络设置。因为其共享的 bb1 容器的网络设置。

```sh
docker inspect bb1-1
....
 "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {}
        }
....
```

## none 网络

none 网络，即没有网络。容器仍是一个独立的 Network Namespace，但没有网络接口， 没有 IP。

### 创建 none 网络容器

在 docker run 命令中，通过--network none 选项指定创建的容器没有网络功能。

```sh
docker run -d --name bb3 --network none busybox /bin/sh -c "while true; do sleep 3600; done"
```

### 查看容器详情

通过 docker inspect 命令查看该容器的详情，发现其没有 IP，没有网关，没有 MAC 地址。

```sh
docker inspect bb3
....
"Networks": {
                "none": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "ea6673259f3e4fe0ba522e76289599b5431f10c15561ac7a527018ea882cf8d1",
                    "EndpointID": "1e0bdd22f193dc6ec88cfb1c6311094c03867f20d64237a8def3c41f98818664",
                    "Gateway": "",
                    "IPAddress": "",
                    "IPPrefixLen": 0,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "",
                    "DriverOpts": null
                }
            }
....
```

### 查看容器网络接口

通过 ip a 命令查看容器的网络接口，发现其只有一个回环地址 lo，没有其它接口。

```sh
docker exec bb3 ip a
....
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
....
```

## host 网络

host 网络，即与宿主机 host 共用一个 Network Namespace。该网络类型的容器没有独立 的网络空间，没有独立的 IP，全部与 host 共用。

### 创建 host 网络容器

在 docker run 命令中，通过--network host 选项指定创建的容器为 host 网络。

```sh
docker run -d --name bb4 --network host busybox /bin/sh -c "while true; do sleep 3600; done"
```

### 查看网络详情

通过 docker network inspect host 命令查看网络详情，发现容器 bb4 连接在该网络上，但容器 bb4 却没有 IP、MAC，并且该网络模式中没有网关 Gateway。因为该网络模式实际相当于没有网络，容器与宿主机共用 Network Namespace，根本就不需要网络连接。

```sh
docker network inspect host
....
 "Containers": {
            "3d8343ce59c192370ccf2d81e70edc5703e8fd8c3309c6dda791486d2c8fb1dd": {
                "Name": "bb4",
                "EndpointID": "0a6a4d1b4a0bf3bba480e87644182a2631c59d10916a9f2dfcc26fa96f2e1dd3",
                "MacAddress": "",
                "IPv4Address": "",
                "IPv6Address": ""
            }
        },
....
```

### 查看 host 与容器网络接口

通过 ip a 与 docker exec bb4 ip a 命令分别查看宿主机与容器 bb4 的网络接口，发现是一 样的。因为它们共用一个 Network Namespace，所以也就共用了所有网络接口。

```sh
docker inspect bb4
....
"Networks": {
                "host": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "c3167c0817bcf33e9170b9ddc3b578c34526ff10e7f1710b5f93cf09d749ca1a",
                    "EndpointID": "0a6a4d1b4a0bf3bba480e87644182a2631c59d10916a9f2dfcc26fa96f2e1dd3",
                    "Gateway": "",
                    "IPAddress": "",
                    "IPPrefixLen": 0,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "",
                    "DriverOpts": null
                }
            }
....
```

### 关于端口映射

由于容器与宿主机共用一个 Network Namespace，所以无论是 IP 还是应用程序的 Port， 容器与宿主机的都是相同的，所以对于容器中应用程序的 Port 不存在映射的问题，host 中 的 Port 与容器中的 Port 相同。

```sh
docker run --name mytomcat --network host -dp 8081:8080 tomcat:8.5.49
#no tomcat execute
docker pull tomcat:8.5.49
```

上面的 tomcat 容器由于指定了网络模式为 host，在启动时指定的端口映射不会起作用。 系统给出的 WARNING 指出，当使用 host 网络模式时，已发布的端口号被丢弃。 此时，通过仍需通过 8080 端口访问。

也正因为 host 与容器中的应用使用的是相同的端口号，所以当采用 host 网络模式时， 在一个宿主机中只能启动一个应用的一个容器，否则会出现端口号冲突问题。

## AFTER ALL

### Docker 网络理论基础

一个 Network Namespece 就代表一个独立的主机。一个容器就对应一个 Namespece，所 以一个容器就代表了网络中的一个独立主机。 CNM 是规范，Libnetwork 是 CNM 规范的实现，Driver 是 Libnetwork 中不同网络模式的实现。

### bridge 网络

加入网络的容器具有独立的 namespace，具有自己独立的网络接口与 IP。默认的网络模 式，是使用最多的网络模式。

### none 网络

加入网络的容器具有独立的 namespace，但其根本就没有连接外网的网络接口，也就不可能会有 IP 了。

### host 网络

加入网络的容器没有自己独立的 namespace，没有自己独立的网络接口与 IP，全部与宿主机共享。 加入网络的容器无需再暴露端口号了，其端口号直接就在宿主机的 namespce 中。
