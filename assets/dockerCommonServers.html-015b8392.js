import{_ as i,r as l,o as r,c as d,b as a,d as e,e as t,a as s}from"./app-5539d687.js";const c={},p=s('<h1 id="常用服务器安装" tabindex="-1"><a class="header-anchor" href="#常用服务器安装" aria-hidden="true">#</a> 常用服务器安装</h1><h2 id="mysql-普通安装" tabindex="-1"><a class="header-anchor" href="#mysql-普通安装" aria-hidden="true">#</a> MySQL 普通安装</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>可能有些 sql 的结尾没有写[;]，各位注意一下。</p></div>',3),o={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h3><p>先拉取 MySQL5.7 的镜像到本地。（任意版本皆行）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:5.7
<span class="token comment">#</span>
<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-mysql-容器" tabindex="-1"><a class="header-anchor" href="#启动-mysql-容器" aria-hidden="true">#</a> 启动 MySQL 容器</h3><p>以分离模式启动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql <span class="token parameter variable">-dp</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">666</span> mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定访问密码为 666。</p><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><p>交互方式进入。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="客户端连接-mysql" tabindex="-1"><a class="header-anchor" href="#客户端连接-mysql" aria-hidden="true">#</a> 客户端连接 mysql</h3><p>mysql 容器内，使用 mysql 客户端连接 mysql 服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
Enter password:
<span class="token comment">#</span>
mysql<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建数据库与表" tabindex="-1"><a class="header-anchor" href="#创建数据库与表" aria-hidden="true">#</a> 创建数据库与表</h3><p>通过该客户端创建一个新的数据库 test，并在其中创建一个表 emp(id, name)，用于测试该 MySQL 服务。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show databases;
#
mysql&gt; create database test;
#
mysql&gt; use test;
#
mysql&gt; creat table emp(id int, name varchar(20), depart varchar(20));
#
mysql&gt; insert into emp values(1, &#39;ilee&#39;, &#39;admin&#39;);
mysql&gt; insert into emp values(2, &#39;op&#39;, &#39;market&#39;);
mysql&gt; insert into emp values(3, &#39;ee&#39;, &#39;sales&#39;);
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navicat-连接-mysql" tabindex="-1"><a class="header-anchor" href="#navicat-连接-mysql" aria-hidden="true">#</a> Navicat 连接 mysql</h3><p>使用 Navicat 连接上这个 mysql 容器提供的 mysql 服务。然后就可以看到新建的 test 数据库与 emp 表了。</p><h3 id="字符编码问题" tabindex="-1"><a class="header-anchor" href="#字符编码问题" aria-hidden="true">#</a> 字符编码问题</h3><p>当前 mysql 容器可以正常运行了。但实际还存在两个较严重的问题，其中一个就是字符编码问题。</p><p>在表中手工插入一条包含中文的记录，提交时会报错。原因就出现字符编码上。</p><p>查看当前 mysql 中的字符编码。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variables like &#39;character%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现大多数是 latin1，不是 utf8。问题就出在这里。</p><p>要解决这个问题，需要在容器系统的/etc/mysql/conf.d 中新建一个 my.cnf 文件，在其中指定字符编码。</p><h3 id="数据安全问题" tabindex="-1"><a class="header-anchor" href="#数据安全问题" aria-hidden="true">#</a> 数据安全问题</h3><p>除了编码问题，还存在一个严重问题，就是数据安全问题。</p><p>前面新建了 test 数据库与 emp 表存放在容器系统中的/var/lib/mysql 目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mysql container</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /var/lib/mysql
<span class="token comment">#</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /var/lib/mysql/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql 的运行错误日志对于工作中异常的判断非常重要，其存放在容器系统的/var/log/mysql 目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mysql container</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /var/log/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果容器被不小心删除了，那么无论是数据文件、日志文件，还是设置字符编码的 my.cnf 文件，都将消失。</p><p>在生产中，这是绝对不允许的，所以要保证数据的安全性。</p><h2 id="mysql-生产安装" tabindex="-1"><a class="header-anchor" href="#mysql-生产安装" aria-hidden="true">#</a> MySQL 生产安装</h2><p>为了保证数据的安全性，在生产环境下安装的 mysql 容器，在启动时都会使用数据卷来持久化数据。</p><h3 id="启动-mysql-容器-1" tabindex="-1"><a class="header-anchor" href="#启动-mysql-容器-1" aria-hidden="true">#</a> 启动 MySQL 容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">666</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">3306</span>:3306 mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里指定了三个数据卷：</p><ul><li>-v /root/mysql/log:/var/log/mysql</li><li>-v /root/mysql/data:/var/lib/mysql</li><li>-v /root/mysql/conf:/etc/mysql/conf.d</li></ul><h3 id="新建-my-cnf" tabindex="-1"><a class="header-anchor" href="#新建-my-cnf" aria-hidden="true">#</a> 新建 my.cnf</h3><p>在宿主机的/root/mysql/conf 目录(数据卷目录)中新建 my.cnf 文件，并在其中键入如下内容：</p><div class="language-my.cnf line-numbers-mode" data-ext="my.cnf"><pre class="language-my.cnf"><code>[client]
default_character_set=utf8
[mysql]
default_character_set=utf8
[mysqld]
character_set_server=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启-mysql-容器" tabindex="-1"><a class="header-anchor" href="#重启-mysql-容器" aria-hidden="true">#</a> 重启 mysql 容器</h3><p>修改了 mysql 配置，需要重启 mysql 容器，以使新配置生效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="进入容器连接-mysql" tabindex="-1"><a class="header-anchor" href="#进入容器连接-mysql" aria-hidden="true">#</a> 进入容器连接 mysql</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql /bin/bash
<span class="token comment">#</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看字符编码" tabindex="-1"><a class="header-anchor" href="#查看字符编码" aria-hidden="true">#</a> 查看字符编码</h3><p>此时查看当前 mysql 的字符编码，已经全变为了 utf8。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variables like &#39;character%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建数据库与表-1" tabindex="-1"><a class="header-anchor" href="#创建数据库与表-1" aria-hidden="true">#</a> 创建数据库与表</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show databases;
#
mysql&gt; create database test;
#
mysql&gt; use test;
#
mysql&gt; creat table emp(id int, name varchar(20), depart varchar(20));
#
mysql&gt; insert into emp values(1, &#39;ilee&#39;, &#39;admin&#39;);
mysql&gt; insert into emp values(2, &#39;op&#39;, &#39;market&#39;);
mysql&gt; insert into emp values(3, &#39;ee&#39;, &#39;sales&#39;);
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navicat-插入中文记录" tabindex="-1"><a class="header-anchor" href="#navicat-插入中文记录" aria-hidden="true">#</a> Navicat 插入中文记录</h3><p>在表中插入中文记录就没有问题。</p><h3 id="查看宿主机数据卷" tabindex="-1"><a class="header-anchor" href="#查看宿主机数据卷" aria-hidden="true">#</a> 查看宿主机数据卷</h3><p>再查看宿主机中数据卷目录，已经有了文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ll mysql
<span class="token comment">#</span>
ll mysql/conf
<span class="token comment">#</span>
ll mysql/data
<span class="token comment">#</span>
ll mysql/log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-集群安装" tabindex="-1"><a class="header-anchor" href="#mysql-集群安装" aria-hidden="true">#</a> MySQL 集群安装</h2><p>单个的 MySQL 存在单点问题，且在高并发场景下性能会急剧下降。所以，生产中对于 MySQL 都是使用读写分离的主从集群。既保证了数据的安全性，又提升了性能。</p><p>下面要使用 Docker 搭建一个“一主一从”的 MySQL 读写分离集群。</p><h3 id="master-的安装与配置" tabindex="-1"><a class="header-anchor" href="#master-的安装与配置" aria-hidden="true">#</a> Master 的安装与配置</h3><h4 id="启动-master-容器" tabindex="-1"><a class="header-anchor" href="#启动-master-容器" aria-hidden="true">#</a> 启动 master 容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql_master <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">666</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql_master/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql_master/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql_master/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">3316</span>:3306 mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新建-my-cnf-1" tabindex="-1"><a class="header-anchor" href="#新建-my-cnf-1" aria-hidden="true">#</a> 新建 my.cnf</h4><div class="language-my.cnf line-numbers-mode" data-ext="my.cnf"><pre class="language-my.cnf"><code>[client]
default_character_set=utf8
[mysql]
default_character_set=utf8
[mysqld]
character_set_server=utf8
#
server_id=01
binlog-ignore-db=mysql
log-bin=master-log-bin
binlog_cache_size=1M
binlog_format=mixed
expire_logs_days=7
slave_skip_errors=1062
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重启-master-容器" tabindex="-1"><a class="header-anchor" href="#重启-master-容器" aria-hidden="true">#</a> 重启 master 容器</h4><p>修改了 mysql 配置，所以需要重启 master 容器，以使新配置生效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart mysql_master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="进入容器连接-mysql-1" tabindex="-1"><a class="header-anchor" href="#进入容器连接-mysql-1" aria-hidden="true">#</a> 进入容器连接 mysql</h4><p>进入容器并连接上 mysql 后，查看其字符编码，可以看到其是支持中文的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql_master /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
Enter password:
<span class="token punctuation">..</span>.
mysql<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variable like &#39;character%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h4><p>为当前 MySQL 创建一个用户。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create user &#39;slave&#39;@&#39;%&#39; identified by &#39;123123&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="授权用户" tabindex="-1"><a class="header-anchor" href="#授权用户" aria-hidden="true">#</a> 授权用户</h4><p>为新创建的用户授权。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; grant replication slave, replication client on *.* to &#39;slave&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="slave-的安装与配置" tabindex="-1"><a class="header-anchor" href="#slave-的安装与配置" aria-hidden="true">#</a> Slave 的安装与配置</h3><h4 id="启动-slave-容器" tabindex="-1"><a class="header-anchor" href="#启动-slave-容器" aria-hidden="true">#</a> 启动 Slave 容器</h4><p>启动 Slave 容器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql_slave <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">666</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql_slave/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql_slave/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/mysql_slave/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">3326</span>:3306 mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新建-my-cnf-2" tabindex="-1"><a class="header-anchor" href="#新建-my-cnf-2" aria-hidden="true">#</a> 新建 my.cnf</h4><p>在宿主机的/root/mysql_slave/conf 目录中新建 my.cnf 文件，并在其中键入如下内容</p><div class="language-my.cnf line-numbers-mode" data-ext="my.cnf"><pre class="language-my.cnf"><code>[client]
default_character_set=utf8
[mysql]
default_character_set=utf8
[mysqld]
character_set_server=utf8
#
server_id=02 //change
binlog-ignore-db=mysql
log-bin=slave-log-bin //change
binlog_cache_size=1M
binlog_format=mixed
expire_logs_days=7
slave_skip_errors=1062
relay_log=relay-log-bin //change
log_slave_updates=1 //change
read_only=1 //change
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重启-slave-容器" tabindex="-1"><a class="header-anchor" href="#重启-slave-容器" aria-hidden="true">#</a> 重启 slave 容器</h4><p>忽略</p><h4 id="进入容器连接-mysql-2" tabindex="-1"><a class="header-anchor" href="#进入容器连接-mysql-2" aria-hidden="true">#</a> 进入容器连接 mysql</h4><p>忽略</p><h3 id="配置主从复制" tabindex="-1"><a class="header-anchor" href="#配置主从复制" aria-hidden="true">#</a> 配置主从复制</h3><h4 id="查看-master-状态" tabindex="-1"><a class="header-anchor" href="#查看-master-状态" aria-hidden="true">#</a> 查看 master 状态</h4><p>在 master 中运行 show master status 命令，查看二进制日志文件名及要开始的位置。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#master
mysql&gt; show master status;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="slave-指定-master" tabindex="-1"><a class="header-anchor" href="#slave-指定-master" aria-hidden="true">#</a> slave 指定 master</h4><p>在 slave 中通过运行 change master to 命令来指定其要连接的 master 相关信息。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#slave
#需要连写，这里为了方便阅读，在逗号位置添加了回车
mysql&gt; change master to master_host=&#39;192.168.192.101#your own IP&#39;,
master_user=&#39;slave&#39;,
master_password=&#39;123123&#39;,
master_port=3316,master_log_file=&#39;master-log-bin.000001#you need to use SHOW MASTER STATUS  to check your master_log_file也许也不用&#39;,
master_log_pos=154,
master_connect_retry=30,
master_retry_count=3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看-slave-状态" tabindex="-1"><a class="header-anchor" href="#查看-slave-状态" aria-hidden="true">#</a> 查看 slave 状态</h4><p>在 slave 中查看 slave 状态发现，当前 slave 与 master 的同步复制还没有开始。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#slave
mysql&gt; show slave status \\G;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="slave-开启同步" tabindex="-1"><a class="header-anchor" href="#slave-开启同步" aria-hidden="true">#</a> slave 开启同步</h4><p>在 slave 中使用 start slave 命令开启 slave 的数据同步。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#slave
mysql&gt; start slave;
#此时再次查看 slave 的状态，发现同步已经开始。
mysql&gt; show slave status \\G;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>至此，一主一从的读写分离集群就搭建完毕了。下面在 master 中创建一个数据库与 表，在 slave 中如果可以查看到，则说明搭建成功。</p><h4 id="在-master-中写入" tabindex="-1"><a class="header-anchor" href="#在-master-中写入" aria-hidden="true">#</a> 在 master 中写入</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#master
mysql&gt; craete database test01;
#
mysql&gt; use test01;
#
mysql&gt; creat table emp(id int, name varchar(10), age int);
#
mysql&gt; insert into emp values(1, &#39;ilee&#39;, 21);
mysql&gt; insert into emp values(2, &#39;op&#39;, 100);
mysql&gt; insert into emp values(3, &#39;ee&#39;, 40);
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-slave-中读取" tabindex="-1"><a class="header-anchor" href="#在-slave-中读取" aria-hidden="true">#</a> 在 slave 中读取</h4><p>在 slave 中可以查看到在 master 中写入的数据，说明集群搭建成功。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#slave
mysql&gt; use test01;
mysql&gt; select * from emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>MySQL 在生产环境中的安装需要通过数据卷来解决以下三点：</p><ul><li>字符编码问题</li><li>数据安全问题</li><li>运行日志问题</li></ul></div><h2 id="redis-单机版安装" tabindex="-1"><a class="header-anchor" href="#redis-单机版安装" aria-hidden="true">#</a> Redis 单机版安装</h2><h3 id="拉取-redis" tabindex="-1"><a class="header-anchor" href="#拉取-redis" aria-hidden="true">#</a> 拉取 Redis</h3><p>首先从 docker hub 拉取 Redis 镜像，这里拉取 7.0 版。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis:7.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建数据卷目录" tabindex="-1"><a class="header-anchor" href="#创建数据卷目录" aria-hidden="true">#</a> 创建数据卷目录</h3><p>在宿主机/root 目录中创建一个目录 redis，将来用于存放外挂文件 redis.conf。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="复制-redis-conf-文件" tabindex="-1"><a class="header-anchor" href="#复制-redis-conf-文件" aria-hidden="true">#</a> 复制 redis.conf 文件</h3><p>上传一份 redis 核心配置文件 redis.conf 到宿主机目录/root/redis 中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ll redis/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改-redis-conf" tabindex="-1"><a class="header-anchor" href="#修改-redis-conf" aria-hidden="true">#</a> 修改 redis.conf</h3><h4 id="解除-ip-绑定" tabindex="-1"><a class="header-anchor" href="#解除-ip-绑定" aria-hidden="true">#</a> 解除 IP 绑定</h4><p>将 bind 行注释掉，以解除 Redis 对访问者 IP 的绑定。</p><div class="language-redis.conf line-numbers-mode" data-ext="redis.conf"><pre class="language-redis.conf"><code>#before
bind 127.0.0.1 -::1
#after
#bind 127.0.0.1 -::1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭保护模式" tabindex="-1"><a class="header-anchor" href="#关闭保护模式" aria-hidden="true">#</a> 关闭保护模式</h4><p>关闭保护模式，否则只能本机访问自己。</p><div class="language-redis.conf line-numbers-mode" data-ext="redis.conf"><pre class="language-redis.conf"><code>#change
protected-mode no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭守护模式" tabindex="-1"><a class="header-anchor" href="#关闭守护模式" aria-hidden="true">#</a> 关闭守护模式</h4><p>关闭守护模式对于 Redis 容器安装来说非常重要。由于 docker 本身就是以分离模式运行的，如果 Redis 再以该模式运行，则 Redis 无法启动。</p><div class="language-redis.conf line-numbers-mode" data-ext="redis.conf"><pre class="language-redis.conf"><code>#change
daemonize no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="指定持久化目录" tabindex="-1"><a class="header-anchor" href="#指定持久化目录" aria-hidden="true">#</a> 指定持久化目录</h4><p>这里要指定 RDB 或 AOF 的持久化目录为/data，这样无论是哪种持久化文件，均会保存到该目录。后面会指定容器中的/data 目录为数据卷挂载点目录。</p><div class="language-redis.conf line-numbers-mode" data-ext="redis.conf"><pre class="language-redis.conf"><code>#change
dir /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-redis-容器" tabindex="-1"><a class="header-anchor" href="#启动-redis-容器" aria-hidden="true">#</a> 启动 Redis 容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里指定了两个数据卷，其中一个是文件，一个是目录：</p><ul><li>-v /root/redis/redis.conf:/etc/redis/redis.conf</li><li>-v /root/redis/data:/data</li></ul><p>对于该启动命令需要注意的是，其后面运行的命令为 redis-server，且加载的配置文件为挂载点目录/etc/redis 中的 redis.conf。</p><h3 id="进入容器连接-redis" tabindex="-1"><a class="header-anchor" href="#进入容器连接-redis" aria-hidden="true">#</a> 进入容器连接 Redis</h3><p>通过 docker exec 命令进入 Redis 容器后，就可通过 redis-cli 客户端连接上这个 Redis，然后执行 Redis 命令了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis /bin/bash
<span class="token comment">#enter redis</span>
redis-cli
<span class="token comment">#</span>
<span class="token builtin class-name">set</span> name ilee
get name
<span class="token string">&quot;ilee&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-一主两从集群搭建" tabindex="-1"><a class="header-anchor" href="#redis-一主两从集群搭建" aria-hidden="true">#</a> Redis 一主两从集群搭建</h2><p>现要搭建一个“一主两从”的 Redis 集群。这三个容器的端口号都保持默认，但对外暴露出的端口号分别为 6381、6382、6383。其中，6381 的为 master，另外两个为 slave。</p><h3 id="复制三份-redis-conf" tabindex="-1"><a class="header-anchor" href="#复制三份-redis-conf" aria-hidden="true">#</a> 复制三份 redis.conf</h3><p>现仍在前面的/root/redis 目录中完成配置。复制 redis.conf 并重命名为 redis1.conf，并在文件最后添加如下配置，以对外宣布当前 redis 的 IP 与端口。注意，该 IP 为 docker 宿主机的 IP，端口号为当前 redis 对外暴露的端口号。</p><div class="language-redis1.conf line-numbers-mode" data-ext="redis1.conf"><pre class="language-redis1.conf"><code>slave-announce-ip 192.168.192.101#your own id
slave-announce-port 6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再复制并修改 redis2.conf。</p><div class="language-redis2.conf line-numbers-mode" data-ext="redis2.conf"><pre class="language-redis2.conf"><code>slave-announce-ip 192.168.192.101#your own id
slave-announce-port 6382
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再复制并修改 redis3.conf。</p><div class="language-redis3.conf line-numbers-mode" data-ext="redis3.conf"><pre class="language-redis3.conf"><code>slave-announce-ip 192.168.192.101#your own id
slave-announce-port 6383
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-master" tabindex="-1"><a class="header-anchor" href="#启动-master" aria-hidden="true">#</a> 启动 master</h3><p>首先启动 master，即启动 myredis-1 容器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-1 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/redis1.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/data/6381:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">6381</span>:6379 <span class="token punctuation">\\</span>
redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-slave" tabindex="-1"><a class="header-anchor" href="#启动-slave" aria-hidden="true">#</a> 启动 slave</h3><p>在启动 slave 的命令中需要指出其 slaveof 于谁。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-2 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/redis2.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/data/6382:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">6382</span>:6379 <span class="token punctuation">\\</span>
redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf <span class="token parameter variable">--slaveof</span> <span class="token number">192.168</span>.192.105 <span class="token number">6381</span> <span class="token comment">#there type your ip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-3 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/redis3.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/data/6383:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">6383</span>:6379 <span class="token punctuation">\\</span>
redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf <span class="token parameter variable">--slaveof</span> <span class="token number">192.168</span>.192.105 <span class="token number">6381</span> <span class="token comment">#there type your ip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系查看" tabindex="-1"><a class="header-anchor" href="#关系查看" aria-hidden="true">#</a> 关系查看</h3><p>查看这三个容器节点的 info replication，可以看到它们间的主从关系已经建立。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-1 redis-cli info replication
<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token comment">#</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-2 redis-cli info replication
<span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token comment">#</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-3 redis-cli info replication
<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据测试" tabindex="-1"><a class="header-anchor" href="#数据测试" aria-hidden="true">#</a> 数据测试</h3><p>在 master 节点 myredis-1 中写入数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-1 redis-cli
<span class="token comment">#</span>
<span class="token builtin class-name">set</span> name ilee
get name
<span class="token string">&quot;ilee&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 slave 节点 myredis-2 与 myredis-3 节点中可读出数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#myredis-2</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-2 redis-cli
<span class="token comment">#</span>
get name
<span class="token string">&quot;ilee&quot;</span>

<span class="token comment">#myredis-3</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-3 redis-cli
<span class="token comment">#</span>
get name
<span class="token string">&quot;ilee&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-高可用集群搭建" tabindex="-1"><a class="header-anchor" href="#redis-高可用集群搭建" aria-hidden="true">#</a> Redis 高可用集群搭建</h2><p>主从集群存在的问题是，其容灾方式只能采用冷处理方案，无法在生产中使用。所以，这里要搭建一个“一主两从三哨兵”的高可用集群，以达到热处理的容灾方案。</p><p>对于“一主两从”集群，仍使用前面的即可。下面直接搭建三个 Sentinel 节点的集群。这三个容器的端口号都保持默认，但对外暴露出的端口号分别为 26381、26382、26383。</p><h3 id="复制三份-sentinel-conf" tabindex="-1"><a class="header-anchor" href="#复制三份-sentinel-conf" aria-hidden="true">#</a> 复制三份 sentinel.conf</h3><p>复制 sentinel.conf 文件并重命名为 sentinel1.conf。仅修改两处：</p><ul><li>指定其要监视的 master 及[quorum]。</li><li>指定当前 sentinel 对外宣布的 IP 与端口号。其中 IP 为 docker 宿主机的 IP，端口号为其对外暴露的端口号。</li></ul><div class="language-sentinel1.conf line-numbers-mode" data-ext="sentinel1.conf"><pre class="language-sentinel1.conf"><code>sentinel monitor mymaster 192.168.192.101 6381 2 #type your myredis-1 ip/port
sentinel announce-ip 192.168.192.101 #type your ip
sentinel announce-port 26381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再复制并修改 sentinel2.conf。</p><div class="language-sentinel2.conf line-numbers-mode" data-ext="sentinel2.conf"><pre class="language-sentinel2.conf"><code>sentinel monitor mymaster 192.168.192.101 6381 2 #type your myredis-1 ip/port
sentinel announce-ip 192.168.192.101 #type your ip
sentinel announce-port 26382
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再复制并修改 sentinel3.conf。</p><div class="language-sentinel3.conf line-numbers-mode" data-ext="sentinel3.conf"><pre class="language-sentinel3.conf"><code>sentinel monitor mymaster 192.168.192.101 6381 2 #type your myredis-1 ip/port
sentinel announce-ip 192.168.192.101 #type your ip
sentinel announce-port 26383
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-sentinel" tabindex="-1"><a class="header-anchor" href="#启动-sentinel" aria-hidden="true">#</a> 启动 sentinel</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysentinel-1 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/sentinel1.conf:/etc/redis/sentinel.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">26381</span>:26379 <span class="token punctuation">\\</span>
redis:7.0 <span class="token punctuation">\\</span>
redis-sentinel /etc/redis/sentinel1.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysentinel-2 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/sentinel2.conf:/etc/redis/sentinel.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">26382</span>:26379 <span class="token punctuation">\\</span>
redis:7.0 <span class="token punctuation">\\</span>
redis-sentinel /etc/redis/sentinel2.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysentinel-3 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/redis/sentinel3.conf:/etc/redis/sentinel.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-dp</span> <span class="token number">26383</span>:26379 <span class="token punctuation">\\</span>
redis:7.0 <span class="token punctuation">\\</span>
redis-sentinel /etc/redis/sentinel3.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系查看-1" tabindex="-1"><a class="header-anchor" href="#关系查看-1" aria-hidden="true">#</a> 关系查看</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysentinel-1 redis-cli <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.192.101 <span class="token parameter variable">-p</span> <span class="token number">26381</span> info sentinel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看结果说明 sentinel 对 master 的监视成功，说明高可用集群搭建成功。连接任何一个 sentinel 容器节点查看到的信息与上面的都是相同的。</p><h3 id="故障转移测试" tabindex="-1"><a class="header-anchor" href="#故障转移测试" aria-hidden="true">#</a> 故障转移测试</h3><p>为了验证高可用性，现将充当 master 的容器 myredis-1 停掉。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop myredis-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再查看另外两个 redis 容器的状态数据，发现 myredis-2 成为了 myredis-3 的 slave，即 myredis-3 成为了新的 master。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#myredis-2</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-2 redis-cli info replication
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
<span class="token comment">#myredis-3</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-3 redis-cli info replication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次 myredis-1 容器启动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start myredis-1
<span class="token comment">#查看 myredis-1 的状态数据，发现其成为了 myredis-3 的 slave。</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-1 redis-cli info replication
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-分布式系统搭建" tabindex="-1"><a class="header-anchor" href="#redis-分布式系统搭建" aria-hidden="true">#</a> Redis 分布式系统搭建</h2><p>Redis 集群的每个节点中的保存的数据都是相同的。而 Redis 分布式系统的节点中存放的数据可以是不同的。当有数据写入请求到达分布式系统后，系统会采用虚拟槽分区算法将数据写入到相应节点。</p><p>下面要搭建一个三主三从的 Redis 分布式系统。</p><table><thead><tr><th>序号</th><th>角色</th><th>容器名称</th><th>网络模式</th><th>暴露地址</th></tr></thead><tbody><tr><td>1</td><td>master</td><td>myredis-1</td><td>host</td><td>192.168.192.101:6381</td></tr><tr><td>2</td><td>master</td><td>myredis-2</td><td>host</td><td>192.168.192.101:6382</td></tr><tr><td>3</td><td>master</td><td>myredis-3</td><td>host</td><td>192.168.192.101:6383</td></tr><tr><td>4</td><td>slave</td><td>myredis-4</td><td>host</td><td>192.168.192.101:6384</td></tr><tr><td>5</td><td>slave</td><td>myredis-5</td><td>host</td><td>192.168.192.101:6385</td></tr><tr><td>6</td><td>slave</td><td>myredis-6</td><td>host</td><td>192.168.192.101:6386</td></tr></tbody></table><h3 id="准备目录与配置文件" tabindex="-1"><a class="header-anchor" href="#准备目录与配置文件" aria-hidden="true">#</a> 准备目录与配置文件</h3><p>在/root 中 mkdir 一个名称为 cluster 的目录，并将前面的配置文件/root/redis/redis.conf 复制到这里。</p><h3 id="复制六份-redis-conf" tabindex="-1"><a class="header-anchor" href="#复制六份-redis-conf" aria-hidden="true">#</a> 复制六份 redis.conf</h3><p>复制 redis.conf 为 redis1.conf，并在其中将下面两个配置前的注释去掉。这两项配置，一个是用于开启 cluster 功能，即分布式系统功能；一个是指定其需要的配置文件名称。</p><div class="language-redis1.conf line-numbers-mode" data-ext="redis1.conf"><pre class="language-redis1.conf"><code>#
cluster-enable yes
#
#
cluster-config-file nodes-6379.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以 redis1.conf 为模板复制出 5 份，分别为 redis2.conf、redis3.conf、redis4.conf、redis5.conf、redis6.conf。这 6 份配置文件内容完全相同。</p><h3 id="启动-redis" tabindex="-1"><a class="header-anchor" href="#启动-redis" aria-hidden="true">#</a> 启动 redis</h3><p>启动 6 个 Redis 容器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-1 <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/redis1.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/data/6381:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf <span class="token parameter variable">--port</span> <span class="token number">6381</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-2 <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/redis2.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/data/6382:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf <span class="token parameter variable">--port</span> <span class="token number">6382</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-3 <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/redis3.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/data/6383:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf <span class="token parameter variable">--port</span> <span class="token number">6383</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-4 <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/redis4.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/data/6384:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf <span class="token parameter variable">--port</span> <span class="token number">6384</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-5 <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/redis5.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/data/6385:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf <span class="token parameter variable">--port</span> <span class="token number">6385</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> myredis-6 <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/redis6.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/cluster/data/6386:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis:7.0 <span class="token punctuation">\\</span>
redis-server /etc/redis/redis.conf <span class="token parameter variable">--port</span> <span class="token number">6386</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建系统" tabindex="-1"><a class="header-anchor" href="#创建系统" aria-hidden="true">#</a> 创建系统</h3><p>6 个节点启动后，它们仍是 6 个独立的 Redis，通过 redis-cli --cluster create 命令可将 6 个节点创建为一个分布式系统。--cluster replicas 1 指定每个 master 会带有一个 slave 副本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-1 redis-cli <span class="token parameter variable">--cluster</span> create --cluster-replicas <span class="token number">1</span> <span class="token number">192.168</span>.192.101:6381 <span class="token number">192.168</span>.192.101:6382 <span class="token number">192.168</span>.192.101:6383 <span class="token number">192.168</span>.192.101:6384 <span class="token number">192.168</span>.192.101:6385 <span class="token number">192.168</span>.192.101:6386
<span class="token comment">#回车后即可看到计划日志</span>
<span class="token comment">#键入 yes 后再回车</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看节点信息" tabindex="-1"><a class="header-anchor" href="#查看节点信息" aria-hidden="true">#</a> 查看节点信息</h3><p>通过 cluster nodes 命令可以查看到系统中各节点的关系及连接情况。只要能看到每个节点给出 connected，就说明分布式系统已经成功搭建。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> myredis-1 redis-cli <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">6383</span> cluster nodes
<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统操作" tabindex="-1"><a class="header-anchor" href="#系统操作" aria-hidden="true">#</a> 系统操作</h3><p>对于如何对分布式系统进行操作，例如，slot 相关查询、故障转移、动态扩容、动态缩容等，与使用虚拟机搭建的分布式系统的操作命令相同，唯一不同的就是，需要首先通过 docker exec –it 命令进入到容器内部再执行这些命令。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Redis 安装 Redis 在生产环境中的安装需要通过数据卷来解决以下两点：</p><ul><li>配置文件安全问题</li><li>持久化问题</li></ul></div>`,217);function u(m,b){const n=l("ExternalLinkIcon");return r(),d("div",null,[p,a("p",null,[e("在 "),a("a",o,[e("docker hub"),t(n)]),e(" 官网的 MySQL 官方镜像中有关于 MySQL 安装的命令。")]),v])}const k=i(c,[["render",u],["__file","dockerCommonServers.html.vue"]]);export{k as default};
