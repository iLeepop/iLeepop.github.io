# 又tm忘了

**根据当前分支创建分支**

```bash
git checkout -b branch-name
# 同时会切换到指定分支
```

**克隆分支**

```bash
git clone -b branch-name git/https://address/repo
```

**同步远端分支变化**

```bash
git fetch
#
git branch -a
#
```

**不能 ping 到 github 了**

```bash
ping github.com
# 看能不能 ping 通，ping 的 id 是多少
ssh -Tv github.com
# 网上找到 github.com 的对应解析地址
# 去改 host
```

**新机器配密钥**
```bash
// 创建密钥
ssh-keygen -t rsa -C "your_email@example.com"
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
// 查看配置
git config --global --list
// 修改邮箱和名称
git config --global user.email "youremail@example.com"
git config --global user.name "Your Name"
// 将生成的公钥添加到 git 仓库
```
