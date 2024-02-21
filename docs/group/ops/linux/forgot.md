# 忘了

**查看端口**

```bash
lsof -i [port]
```

**查看系统架构**

```bash
dpkg --print-architecture
//
arch
//
file /lib/systemd/systemd
```

**查看64 || 32**

```bash
getconf LONG_BIT
//
file /bin/ls
```

**查看版本信息**

```bash
lsb_release -a
//
cat /etc/issue
```

**查看内核版本**

```bash
cat /proc/version
//
uname -a
//
uname -r
```

**查看系统可用空间**

```bash
df -h
```