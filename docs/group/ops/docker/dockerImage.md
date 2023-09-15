# 镜像

## 简介

## 镜像仓库

## 自动化镜像

## 镜像分层

## 镜像文件系统

## 镜像摘要

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
