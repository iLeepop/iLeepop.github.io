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
//
uname -m
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

**服务控制**
```bash
// 基本
// 启动
systemctl start [service]
// 停止
systemctl stop [service]
// 重启
systemctl restart [service]
// 启用开机启动
systemctl enable [service]
// 禁止开机启动
systemctl disable [service]
// 查看状态
systemctl status [service]
```

### ubuntu apt remove PKG
```bash
dpkg --list | grep package-name
sudo apt-get remove package-name
sudo apt-get purge package-name
sudo apt-get autoremove
sudo apt-get clean
```
