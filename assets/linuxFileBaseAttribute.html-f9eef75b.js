import{_ as n,o as s,c as a,a as e}from"./app-5539d687.js";const t={},i=e(`<h1 id="文件基本属性与管理" tabindex="-1"><a class="header-anchor" href="#文件基本属性与管理" aria-hidden="true">#</a> 文件基本属性与管理</h1><p>Linux 系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限。</p><p>为了保护系统的安全性，Linux 系统对不同的用户访问同一文件（包括目录文件）的权限做了不同的规定。</p><p>在 Linux 中我们通常使用以下两个命令来修改文件或目录的所属用户与权限：</p><ul><li>chown (change owner) ： 修改所属用户与组。</li><li>chmod (change mode) ： 修改用户的权限。</li></ul><p>在 Linux 中我们可以使用 <strong>ll</strong> 或者 <strong>ls –l</strong> 命令来显示一个文件的属性以及文件所属的用户和组，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ls -l</span>
total <span class="token number">64</span>
dr-xr-xr-x   <span class="token number">2</span> root root <span class="token number">4096</span> Dec <span class="token number">14</span>  <span class="token number">2012</span> bin
dr-xr-xr-x   <span class="token number">4</span> root root <span class="token number">4096</span> Apr <span class="token number">19</span>  <span class="token number">2012</span> boot
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例中，<strong>bin</strong> 文件的第一个属性用 <strong>d</strong> 表示。<strong>d</strong> 在 Linux 中代表该文件是一个目录文件。</p><p>在 Linux 中第一个字符代表这个文件是目录、文件或链接文件等等。</p><ul><li>当为 <strong>d</strong> 则是目录</li><li>当为 <strong>-</strong> 则是文件；</li><li>若是 <strong>l</strong> 则表示为链接文档(link file)；</li><li>若是 <strong>b</strong> 则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；</li><li>若是 <strong>c</strong> 则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。</li></ul><p>接下来的字符中，以三个为一组，且均为 <strong>rwx</strong> 的三个参数的组合。其中， <strong>r</strong> 代表可读(read)、 <strong>w</strong> 代表可写(write)、 <strong>x</strong> 代表可执行(execute)。 要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现减号 <strong>-</strong> 而已。</p><p>每个文件的属性由左边第一部分的 10 个字符来确定</p><p>从左至右用 <strong>0-9</strong> 这些数字来表示。</p><p>第 <strong>0</strong> 位确定文件类型，第 <strong>1-3</strong> 位确定属主（该文件的所有者）拥有该文件的权限。</p><p>第<strong>4-6</strong>位确定属组（所有者的同组用户）拥有该文件的权限，第<strong>7-9</strong>位确定其他用户拥有该文件的权限。</p><p>其中，第 <strong>1、4、7</strong> 位表示读权限，如果用 <strong>r</strong> 字符表示，则有读权限，如果用 <strong>-</strong> 字符表示，则没有读权限；</p><p>第 <strong>2、5、8</strong> 位表示写权限，如果用 <strong>w</strong> 字符表示，则有写权限，如果用 <strong>-</strong> 字符表示没有写权限；第 <strong>3、6、9</strong> 位表示可执行权限，如果用 <strong>x</strong> 字符表示，则有执行权限，如果用 <strong>-</strong> 字符表示，则没有执行权限。</p><h2 id="文件属主和属组" tabindex="-1"><a class="header-anchor" href="#文件属主和属组" aria-hidden="true">#</a> 文件属主和属组</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ls -l</span>
total <span class="token number">64</span>
drwxr-xr-x <span class="token number">2</span> root  root  <span class="token number">4096</span> Feb <span class="token number">15</span> <span class="token number">14</span>:46 <span class="token function">cron</span>
drwxr-xr-x <span class="token number">3</span> mysql mysql <span class="token number">4096</span> Apr <span class="token number">21</span>  <span class="token number">2014</span> mysql
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于文件来说，它都有一个特定的所有者，也就是对该文件具有所有权的用户。</p><p>同时，在Linux系统中，用户是按组分类的，一个用户属于一个或多个组。</p><p>文件所有者以外的用户又可以分为文件所属组的同组用户和其他用户。</p><p>因此，Linux系统按文件所有者、文件所有者同组用户和其他用户来规定了不同的文件访问权限。</p><p>在以上实例中，mysql 文件是一个目录文件，属主和属组都为 mysql，属主有可读、可写、可执行的权限；与属主同组的其他用户有可读和可执行的权限；其他用户也有可读和可执行的权限。</p><p>对于 root 用户来说，一般情况下，文件的权限对其不起作用。</p><h2 id="更改文件属性" tabindex="-1"><a class="header-anchor" href="#更改文件属性" aria-hidden="true">#</a> 更改文件属性</h2><h3 id="chgrp-更改文件属组" tabindex="-1"><a class="header-anchor" href="#chgrp-更改文件属组" aria-hidden="true">#</a> chgrp：更改文件属组</h3><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chgrp</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> 属组名 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数选项</p><ul><li>-R：递归更改文件属组，就是在更改某个目录文件的属组时，如果加上-R的参数，那么该目录下的所有文件的属组都会更改。</li></ul><h3 id="chown-更改文件属主-也可以同时更改文件属组" tabindex="-1"><a class="header-anchor" href="#chown-更改文件属主-也可以同时更改文件属组" aria-hidden="true">#</a> chown：更改文件属主，也可以同时更改文件属组</h3><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token punctuation">[</span>–R<span class="token punctuation">]</span> 属主名 文件名
<span class="token function">chown</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> 属主名：属组名 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 /root 目录（~）将install.log的拥有者改为bin这个账号：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">chown</span> bin install.log
<span class="token function">ls</span> <span class="token parameter variable">-l</span>
-rw-r--r--  <span class="token number">1</span> bin  <span class="token function">users</span> <span class="token number">68495</span> Jun <span class="token number">25</span> 08:53 install.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将install.log的拥有者与群组改回为root：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> root:root install.log
<span class="token function">ls</span> <span class="token parameter variable">-l</span>
-rw-r--r--  <span class="token number">1</span> root root <span class="token number">68495</span> Jun <span class="token number">25</span> 08:53 install.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chmod-更改文件9个属性" tabindex="-1"><a class="header-anchor" href="#chmod-更改文件9个属性" aria-hidden="true">#</a> chmod：更改文件9个属性</h3><p>Linux文件属性有两种设置方法，一种是数字，一种是符号。</p><p>Linux 文件的基本权限就有九个，分别是 <strong>owner/group/others(拥有者/组/其他)</strong> 三种身份各有自己的 <strong>read/write/execute</strong> 权限。</p><p>先复习一下刚刚上面提到的数据：文件的权限字符为： <strong>-rwxrwxrwx</strong> ， 这九个权限是三个三个一组的！其中，我们可以使用数字来代表各个权限，各权限的分数对照表如下：</p><ul><li>r:4</li><li>w:2</li><li>x:1</li></ul><p>每种身份(owner/group/others)各自的三个权限(r/w/x)分数是需要累加的，例如当权限为： <strong>-rwxrwx---</strong> 分数则是：</p><ul><li>owner = rwx = 4+2+1 = 7</li><li>group = rwx = 4+2+1 = 7</li><li>others= --- = 0+0+0 = 0</li></ul><p>所以等一下我们设定权限的变更时，该文件的权限数字就是 <strong>770</strong>。变更权限的指令 chmod 的语法是这样的：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">chmod</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> xyz 文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li><strong>xyz</strong> : 就是刚刚提到的数字类型的权限属性，为 <strong>rwx</strong> 属性数值的相加。</li><li><strong>-R</strong> : 进行递归(recursive)的持续变更，以及连同次目录下的所有文件都会变更</li></ul><p>举例来说，如果要将 <strong>.bashrc</strong> 这个文件所有的权限都设定启用，那么命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> .bashrc
-rw-r--r--  <span class="token number">1</span> root root <span class="token number">395</span> Jul  <span class="token number">4</span> <span class="token number">11</span>:45 .bashrc
<span class="token function">chmod</span> <span class="token number">777</span> .bashrc
<span class="token function">ls</span> <span class="token parameter variable">-al</span> .bashrc
<span class="token parameter variable">-rwxrwxrwx</span>  <span class="token number">1</span> root root <span class="token number">395</span> Jul  <span class="token number">4</span> <span class="token number">11</span>:45 .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要将权限变成 <em>-rwxr-xr--</em> ，那么权限的分数就成为 [4+2+1][4+0+1][4+0+0]=754。</p><h3 id="符号类型改变文件权限" tabindex="-1"><a class="header-anchor" href="#符号类型改变文件权限" aria-hidden="true">#</a> 符号类型改变文件权限</h3><p>还有一个改变权限的方法，从之前的介绍中我们可以发现，基本上就九个权限分别是：</p><ul><li>user：用户</li><li>group：组</li><li>others：其他</li></ul><p>那么我们就可以使用 <strong>u, g, o</strong> 来代表三种身份的权限。</p><p>此外， <strong>a</strong> 则代表 <strong>all</strong>，即全部的身份。读写的权限可以写成 <strong>r, w, x</strong>，也就是可以使用下表的方式来看：</p><table><thead><tr><th>chmod</th><th>u g o a</th><th>+(加入) -(除去) =(设定)</th><th>r w x</th><th>文件或目录</th></tr></thead></table><p>如果需要将文件权限设置为 <strong>-rwxr-xr--</strong> ，可以使用 <strong>chmod u=rwx,g=rx,o=r 文件名</strong> 来设定:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> test1    // 创建 test1 文件
<span class="token function">ls</span> <span class="token parameter variable">-al</span> test1    // 查看 test1 默认权限
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Nov <span class="token number">15</span> <span class="token number">10</span>:32 test1
<span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rx,o<span class="token operator">=</span>r  test1    // 修改 test1 权限
<span class="token function">ls</span> <span class="token parameter variable">-al</span> test1
-rwxr-xr-- <span class="token number">1</span> root root <span class="token number">0</span> Nov <span class="token number">15</span> <span class="token number">10</span>:32 test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将权限去掉而不改变其他已存在的权限，例如要拿掉全部人的可执行权限，则：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span>  a-x test1
<span class="token function">ls</span> <span class="token parameter variable">-al</span> test1
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> Nov <span class="token number">15</span> <span class="token number">10</span>:32 test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-文件与目录管理" tabindex="-1"><a class="header-anchor" href="#linux-文件与目录管理" aria-hidden="true">#</a> Linux 文件与目录管理</h2><p>我们知道 Linux 的目录结构为树状结构，最顶级的目录为根目录 <strong>/</strong>。</p><p>其他目录通过挂载可以将它们添加到树中，通过解除挂载可以移除它们。</p><p>在开始本教程前我们需要先知道什么是绝对路径与相对路径。</p><ul><li><p><strong>绝对路径：</strong> 路径的写法，由根目录 <strong>/</strong> 写起，例如： /usr/share/doc 这个目录。</p></li><li></li></ul><p><strong>相对路径：</strong> 路径的写法，不是由 <strong>/</strong> 写起，例如由 /usr/share/doc 要到 /usr/share/man 底下时，可以写成： <strong>cd ../man</strong> 这就是相对路径的写法。</p><hr><h3 id="处理目录的常用命令" tabindex="-1"><a class="header-anchor" href="#处理目录的常用命令" aria-hidden="true">#</a> 处理目录的常用命令</h3><p>接下来我们就来看几个常见的处理目录的命令吧：</p><ul><li>ls（英文全拼：list files）: 列出目录及文件名</li><li>cd（英文全拼：change directory）：切换目录</li><li>pwd（英文全拼：print work directory）：显示目前的目录</li><li>mkdir（英文全拼：make directory）：创建一个新的目录</li><li>rmdir（英文全拼：remove directory）：删除一个空的目录</li><li>cp（英文全拼：copy file）: 复制文件或目录</li><li>rm（英文全拼：remove）: 删除文件或目录</li><li>mv（英文全拼：move file）: 移动文件与目录，或修改文件与目录的名称</li></ul><p>你可以使用 <em>man [命令]</em> 来查看各个命令的使用文档，如 ：man cp。</p><h4 id="ls-列出目录" tabindex="-1"><a class="header-anchor" href="#ls-列出目录" aria-hidden="true">#</a> ls (列出目录)</h4><p>在Linux系统当中， ls 命令是最常被运行的。</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token punctuation">[</span>-aAdfFhilnrRSt<span class="token punctuation">]</span> 目录名称
<span class="token function">ls</span> <span class="token punctuation">[</span>--color<span class="token operator">=</span><span class="token punctuation">{</span>never,auto,always<span class="token punctuation">}</span><span class="token punctuation">]</span> 目录名称
<span class="token function">ls</span> <span class="token punctuation">[</span>--full-time<span class="token punctuation">]</span> 目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)</li><li>-d ：仅列出目录本身，而不是列出目录内的文件数据(常用)</li><li>-l ：长数据串列出，包含文件的属性与权限等等数据；(常用)</li></ul><p>将目录下的所有文件列出来(含属性与隐藏档)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> ~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="cd-切换目录" tabindex="-1"><a class="header-anchor" href="#cd-切换目录" aria-hidden="true">#</a> cd (切换目录)</h4><p>cd是Change Directory的缩写，这是用来变换工作目录的命令。</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>相对路径或绝对路径<span class="token punctuation">]</span>
<span class="token comment">#使用 mkdir 命令创建 c2ykk 目录</span>
<span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># mkdir c2ykk</span>

<span class="token comment">#使用绝对路径切换到 c2ykk 目录</span>
<span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cd /root/c2ykk/</span>

<span class="token comment">#使用相对路径切换到 c2ykk 目录</span>
<span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cd ./c2ykk/</span>

<span class="token comment"># 表示回到自己的家目录，亦即是 /root 这个目录</span>
<span class="token punctuation">[</span>root@ilee c2ykk<span class="token punctuation">]</span><span class="token comment"># cd ~</span>

<span class="token comment"># 表示去到目前的上一级目录，亦即是 /root 的上一级目录的意思；</span>
<span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cd ..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pwd-显示目前所在的目录" tabindex="-1"><a class="header-anchor" href="#pwd-显示目前所在的目录" aria-hidden="true">#</a> pwd (显示目前所在的目录)</h4><p>pwd 是 <strong>Print Working Directory</strong> 的缩写，也就是显示目前所在目录的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># pwd [-P]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li><strong>-P</strong> ：显示出确实的路径，而非使用链接 (link) 路径。</li></ul><p>单纯显示出目前的工作目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/root   <span class="token operator">&lt;=</span><span class="token operator">=</span> 显示目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示出实际的工作目录，而非链接档本身的目录名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cd /var/mail   &lt;== /var/mail是一个链接档</span>
<span class="token punctuation">[</span>root@ilee mail<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/var/mail         <span class="token operator">&lt;=</span><span class="token operator">=</span> 列出目前的工作目录
<span class="token punctuation">[</span>root@ilee mail<span class="token punctuation">]</span><span class="token comment"># pwd -P</span>
/var/spool/mail   <span class="token operator">&lt;=</span><span class="token operator">=</span> 显示正确的完整路径
<span class="token punctuation">[</span>root@ilee mail<span class="token punctuation">]</span><span class="token comment"># ls -ld /var/mail</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">10</span> Sep  <span class="token number">4</span> <span class="token number">17</span>:54 /var/mail -<span class="token operator">&gt;</span> spool/mail
<span class="token comment"># 因为 /var/mail 是链接档，链接到 /var/spool/mail </span>
<span class="token comment"># 所以，加上 pwd -P 的选项后，会不以链接档的数据显示，而是显示正确的完整路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mkdir-创建新目录" tabindex="-1"><a class="header-anchor" href="#mkdir-创建新目录" aria-hidden="true">#</a> mkdir (创建新目录)</h4><p>如果想要创建新的目录的话，那么就使用mkdir (make directory)吧。</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token punctuation">[</span>-mp<span class="token punctuation">]</span> 目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-m ：配置文件的权限，直接配置，不需要看默认权限 (umask)</li><li>-p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来</li></ul><p>到/tmp底下尝试创建数个新目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp</span>
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># mkdir test    &lt;==创建一名为 test 的新目录</span>
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># mkdir test1/test2/test3/test4</span>
mkdir: cannot create directory \`test1/test2/test3/test4&#39;: 
No such <span class="token function">file</span> or directory       <span class="token operator">&lt;=</span><span class="token operator">=</span> 没法直接创建此目录
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># mkdir -p test1/test2/test3/test4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加了这个 -p 的选项，可以自行帮你创建多层目录</p><p>创建权限为 <strong>rwx--x--x</strong> 的目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># mkdir -m 711 test2</span>
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># ls -l</span>
drwxr-xr-x  <span class="token number">3</span> root  root <span class="token number">4096</span> Jul <span class="token number">18</span> <span class="token number">12</span>:50 <span class="token builtin class-name">test</span>
drwxr-xr-x  <span class="token number">3</span> root  root <span class="token number">4096</span> Jul <span class="token number">18</span> <span class="token number">12</span>:53 test1
drwx--x--x  <span class="token number">2</span> root  root <span class="token number">4096</span> Jul <span class="token number">18</span> <span class="token number">12</span>:54 test2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的权限部分，如果没有加上 -m 来强制配置属性，系统会使用默认属性。</p><p>如果我们使用 -m ，如上例我们给予 -m 711 来给予新的目录 drwx--x--x 的权限。</p><h4 id="rmdir-删除空的目录" tabindex="-1"><a class="header-anchor" href="#rmdir-删除空的目录" aria-hidden="true">#</a> rmdir (删除空的目录)</h4><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">rmdir</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> 目录名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>**-p ：**从该目录起，一次删除多级空目录</li></ul><p>删除 c2ykk 目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># rmdir c2ykk/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 mkdir 实例中创建的目录(/tmp 底下)删除掉！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># ls -l   &lt;== 查看有多少目录存在</span>
drwxr-xr-x  <span class="token number">3</span> root  root <span class="token number">4096</span> Jul <span class="token number">18</span> <span class="token number">12</span>:50 <span class="token builtin class-name">test</span>
drwxr-xr-x  <span class="token number">3</span> root  root <span class="token number">4096</span> Jul <span class="token number">18</span> <span class="token number">12</span>:53 test1
drwx--x--x  <span class="token number">2</span> root  root <span class="token number">4096</span> Jul <span class="token number">18</span> <span class="token number">12</span>:54 test2
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># rmdir test   &lt;== 可直接删除掉</span>
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># rmdir test1  &lt;== 因为有内容，所以无法删除</span>
rmdir: \`test1&#39;: Directory not empty
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># rmdir -p test1/test2/test3/test4</span>
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># ls -l        &lt;== 底下的输出中test与test1不见了</span>
drwx--x--x  <span class="token number">2</span> root  root <span class="token number">4096</span> Jul <span class="token number">18</span> <span class="token number">12</span>:54 test2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 -p 这个选项，立刻就可以将 test1/test2/test3/test4 一次删除。</p><p>注意，这个 rmdir 仅能删除空的目录，你可以使用 rm 命令来删除非空目录。</p><h4 id="cp-复制文件或目录" tabindex="-1"><a class="header-anchor" href="#cp-复制文件或目录" aria-hidden="true">#</a> cp (复制文件或目录)</h4><p>cp 即拷贝文件和目录。</p><p>语法:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cp [-adfilprsu] 来源档(source) 目标档(destination)</span>
<span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cp [options] source1 source2 source3 .... directory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>**-a：**相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)</li><li>**-d：**若来源档为链接档的属性(link file)，则复制链接档属性而非文件本身；</li><li>**-f：**为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；</li><li>**-i：**若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)</li><li>**-l：**进行硬式链接(hard link)的链接档创建，而非复制文件本身；</li><li>**-p：**连同文件的属性一起复制过去，而非使用默认属性(备份常用)；</li><li>**-r：**递归持续复制，用於目录的复制行为；(常用)</li><li>**-s：**复制成为符号链接档 (symbolic link)，亦即『捷径』文件；</li><li>**-u：**若 destination 比 source 旧才升级 destination ！</li></ul><p>用 root 身份，将 root 目录下的 .bashrc 复制到 /tmp 下，并命名为 bashrc</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cp ~/.bashrc /tmp/bashrc</span>
<span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cp -i ~/.bashrc /tmp/bashrc</span>
cp: overwrite \`/tmp/bashrc&#39;? n  <span class="token operator">&lt;=</span><span class="token operator">=</span>n不覆盖，y为覆盖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rm-移除文件或目录" tabindex="-1"><a class="header-anchor" href="#rm-移除文件或目录" aria-hidden="true">#</a> rm (移除文件或目录)</h4><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">rm</span> <span class="token punctuation">[</span>-fir<span class="token punctuation">]</span> 文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；</li><li>-i ：互动模式，在删除前会询问使用者是否动作</li><li>-r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！</li><li></li></ul><p>将刚刚在 cp 的实例中创建的 bashrc 删除掉！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># rm -i bashrc</span>
rm: remove regular <span class="token function">file</span> \`bashrc&#39;? y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果加上 -i 的选项就会主动询问喔，避免你删除到错误的档名！</p><h4 id="mv-移动文件与目录-或修改名称" tabindex="-1"><a class="header-anchor" href="#mv-移动文件与目录-或修改名称" aria-hidden="true">#</a> mv (移动文件与目录，或修改名称)</h4><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># mv [-fiu] source destination</span>
<span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># mv [options] source1 source2 source3 .... directory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；</li><li>-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！</li><li>-u ：若目标文件已经存在，且 source 比较新，才会升级 (update)</li></ul><p>复制一文件，创建一目录，将文件移动到目录中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp</span>
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># cp ~/.bashrc bashrc</span>
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># mkdir mvtest</span>
<span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># mv bashrc mvtest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将某个文件移动到某个目录去，就是这样做！</p><p>将刚刚的目录名称更名为 mvtest2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee tmp<span class="token punctuation">]</span><span class="token comment"># mv mvtest mvtest2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="linux-文件内容查看" tabindex="-1"><a class="header-anchor" href="#linux-文件内容查看" aria-hidden="true">#</a> Linux 文件内容查看</h3><p>Linux系统中使用以下命令来查看文件的内容：</p><ul><li>cat：由第一行开始显示文件内容</li><li>tac：从最后一行开始显示，可以看出 tac 是 cat 的倒着写</li><li>nl ：显示的时候，输出行号</li><li>more：一页一页的显示文件内容</li><li>less：与 more 类似，可以往前翻页</li><li>head：只看头几行</li><li>tail：只看尾巴几行</li></ul><p>可以使用 *man [命令]*来查看各个命令的使用文档，如 ：man cp。</p><h4 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h4><p>由第一行开始显示文件内容</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token punctuation">[</span>-AbEnTv<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-A ：相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已</li><li>-b ：列出行号，仅针对非空白行做行号显示，空白行不标行号</li><li>-E ：将结尾的断行字节 $ 显示出来</li><li>-n ：列印出行号，连同空白行也会有行号，与 -b 的选项不同</li><li>-T ：将 [tab] 按键以 ^I 显示出来</li><li>-v ：列出一些看不出来的特殊字符</li></ul><p>査看 /etc/issue 这个文件的内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/issue</span>
CentOS release <span class="token number">6.4</span> <span class="token punctuation">(</span>Final<span class="token punctuation">)</span>
Kernel <span class="token punctuation">\\</span>r on an <span class="token punctuation">\\</span>m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tac" tabindex="-1"><a class="header-anchor" href="#tac" aria-hidden="true">#</a> tac</h4><p>tac与cat命令刚好相反，文件内容从最后一行开始显示，可以看出 tac 是 cat 的倒着写：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># tac /etc/issue</span>

Kernel <span class="token punctuation">\\</span>r on an <span class="token punctuation">\\</span>m
CentOS release <span class="token number">6.4</span> <span class="token punctuation">(</span>Final<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nl" tabindex="-1"><a class="header-anchor" href="#nl" aria-hidden="true">#</a> nl</h4><p>显示行号</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nl</span> <span class="token punctuation">[</span>-bnw<span class="token punctuation">]</span> 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-b ：指定行号指定的方式，主要有两种： -b a ：表示不论是否为空行，也同样列出行号(类似 cat -n)； -b t ：如果有空行，空的那一行不要列出行号(默认值)；</li><li>-n ：列出行号表示的方法，主要有三种： -n ln ：行号在荧幕的最左方显示； -n rn ：行号在自己栏位的最右方显示，且不加 0 ； -n rz ：行号在自己栏位的最右方显示，且加 0 ；</li><li>-w ：行号栏位的占用的位数。</li></ul><p>实例一：用 nl 列出 /etc/issue 的内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># nl /etc/issue</span>
     <span class="token number">1</span>  CentOS release <span class="token number">6.4</span> <span class="token punctuation">(</span>Final<span class="token punctuation">)</span>
     <span class="token number">2</span>  Kernel <span class="token punctuation">\\</span>r on an <span class="token punctuation">\\</span>m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> more</h4><p>一页一页翻动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># more /etc/man_db.config </span>
<span class="token comment">#</span>
<span class="token comment"># Generated automatically from man.conf.in by the</span>
<span class="token comment"># configure script.</span>
<span class="token comment">#</span>
<span class="token comment"># man.conf from man-1.6d</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
--More--<span class="token punctuation">(</span><span class="token number">28</span>%<span class="token punctuation">)</span>  <span class="token operator">&lt;=</span><span class="token operator">=</span> 重点在这一行 光标会在这里等待命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 more 这个程序的运行过程中，你有几个按键可以按的：</p><ul><li>空白键 (space)：代表向下翻一页</li><li>Enter：代表向下翻『一行』</li><li>/字串：代表在这个显示的内容当中，向下搜寻『字串』这个关键字</li><li>:f：立刻显示出档名以及目前显示的行数</li><li>q：代表立刻离开 more ，不再显示该文件内容</li><li>b 或 [ctrl]-b：代表往回翻页，不过这动作只对文件有用，对管线无用</li></ul><h4 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h4><p>一页一页翻动，以下实例输出 /etc/man.config 文件的内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># less /etc/man.config</span>
<span class="token comment">#</span>
<span class="token comment"># Generated automatically from man.conf.in by the</span>
<span class="token comment"># configure script.</span>
<span class="token comment">#</span>
<span class="token comment"># man.conf from man-1.6d</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token builtin class-name">:</span>   <span class="token operator">&lt;=</span><span class="token operator">=</span> 这里等待输入命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less运行时可以输入的命令有：</p><ul><li>空白键 ：向下翻动一页</li><li>[pagedown]：向下翻动一页</li><li>[pageup] ：向上翻动一页</li><li>/字串 ：向下搜寻『字串』的功能</li><li>?字串 ：向上搜寻『字串』的功能</li><li>n ：重复前一个搜寻 (与 / 或 ? 有关！)</li><li>N ：反向的重复前一个搜寻 (与 / 或 ? 有关！)</li><li>q ：离开 less 这个程序</li></ul><h4 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h4><p>取出文件前面几行</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">head</span> <span class="token punctuation">[</span>-n number<span class="token punctuation">]</span> 文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-n ：后面接数字，代表显示几行的意思</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># head /etc/man.config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认的情况中，显示前面 10 行，若要显示前 20 行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># head -n 20 /etc/man.config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="tail" tabindex="-1"><a class="header-anchor" href="#tail" aria-hidden="true">#</a> tail</h4><p>取出文件后面几行</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token punctuation">[</span>-n number<span class="token punctuation">]</span> 文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-n ：后面接数字，代表显示几行的意思</li><li>-f ：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># tail /etc/man.config</span>
<span class="token comment"># 默认的情况中，显示最后的十行！若要显示最后的 20 行，就得要这样：bsh</span>
<span class="token punctuation">[</span>root@ilee ~<span class="token punctuation">]</span><span class="token comment"># tail -n 20 /etc/man.config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,194),l=[i];function p(o,c){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","linuxFileBaseAttribute.html.vue"]]);export{d as default};
