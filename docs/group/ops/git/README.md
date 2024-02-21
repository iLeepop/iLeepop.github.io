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

