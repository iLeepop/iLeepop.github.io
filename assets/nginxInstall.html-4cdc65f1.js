import{_ as l,r as d,o as c,c as t,b as s,d as n,e as i,a}from"./app-5539d687.js";const r={},p=a(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><p>本人的服务器系统是CentOS所以使用yum安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自动安装，这是最简单的一种方式。</p>`,4),o={href:"https://nginx.org/en/",target:"_blank",rel:"noopener noreferrer"},v=a(`<h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><p>安装完成后，检查一下Nginx有没有启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status nginx
<span class="token comment">#</span>
systemctl status nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果显示没有启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start nginx
<span class="token comment">#</span>
systemctl start nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示错误代码：<strong>Failed to start The nginx HTTP and rever...r.</strong></p><p>自己去检查一下哈，有可能是因为端口80被占用了。</p><p>再次检查Nginx状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status nginx
<span class="token comment">#</span>
systemctl status nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示Active状态是：**active（running）**即启动成功。</p><p>去浏览器查看。</p><p>Nginx默认安装位置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更改配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./conf.d
<span class="token comment">#</span>
<span class="token function">ls</span>
<span class="token comment">#空</span>
<span class="token function">touch</span> ilee.conf
<span class="token comment">#创建配置文件</span>
<span class="token function">vim</span> ilee.conf
<span class="token comment">#编辑</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">listen</span> <span class="token number">81</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">root</span> /home/page/</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-t</span>
<span class="token comment">#</span>
// nginx: the configuration <span class="token function">file</span> /etc/nginx/nginx.conf syntax is ok
// nginx: configuration <span class="token function">file</span> /etc/nginx/nginx.conf <span class="token builtin class-name">test</span> is successful
如果是fail 自己去看看配置文件是不是有错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx重新读取配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong>，云服务器需要在防火墙开启相应的端口</p><p>简单写个主页</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/page
<span class="token comment">#</span>
<span class="token function">touch</span> index.html
<span class="token function">vim</span> index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-index.html line-numbers-mode" data-ext="index.html"><pre class="language-index.html"><code>&lt;html&gt;
	&lt;body&gt;
		&lt;h1&gt;Hi,CRfilee&lt;/h1&gt;
	&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去浏览器查看。</p><p>设置开机自启（有需求就开）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="停止" tabindex="-1"><a class="header-anchor" href="#停止" aria-hidden="true">#</a> 停止</h2><p>很多方式停止，先查看nginx进程信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会显示三个nginx进程，一个master进程，两个worker进程。</p><p>我们再输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即可关闭，接着我们再次启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面再展示几个停止方法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> quit
<span class="token comment">#</span>
<span class="token comment">#査进程id 使用kill</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> nginx
<span class="token function">kill</span> <span class="token parameter variable">-quit</span> <span class="token punctuation">[</span>进程id<span class="token punctuation">]</span>
<span class="token comment">#</span>
<span class="token function">kill</span> <span class="token parameter variable">-term</span> <span class="token punctuation">[</span>进程id<span class="token punctuation">]</span>
<span class="token comment">#</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token punctuation">[</span>进程id<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动文件在 <strong>/sbin</strong> 下</li><li>配置文件在 <strong>/etc/nginx</strong> 下</li><li>日志文件在 <strong>/var/log/nginx</strong> 下</li></ul><h2 id="源码安装" tabindex="-1"><a class="header-anchor" href="#源码安装" aria-hidden="true">#</a> 源码安装</h2><p>想做更多了解可以看一下</p>`,40),u={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//nginx.org/download/nginx-1.24.0.tar.gz</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cd到新创建的文件夹，在命令行输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://nginx.org/download/nginx-1.24.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待下载完成，进行解压：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-axvf</span> nginx-1.22.1.tar.gz
<span class="token comment">#根据自己的文件名，tab补全也可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>cd进入Nginx文件目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> nginx-1.24.0/
 <span class="token comment">#查看目录结构</span>
 <span class="token function">ls</span>
 <span class="token comment">#</span>
auto //辅助安装的一些文件 lib库之类
CHANGES //版本说明 英语
CHANGES.ru //版本说明 俄语
conf //默认配置文件信息
configure //重要文件 预备执行文件
contrib
html
LICENSE
<span class="token function">man</span> //帮助文档
README
src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 <strong>./configure</strong> 支持的操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行安装操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/home/nginx
<span class="token comment">#想安哪安哪</span>
<span class="token comment">#如果提示缺lib库，缺什么下什么</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在当前目录再：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
<span class="token comment">#....</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成，进入安装目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/nginx/
<span class="token comment">#...</span>
<span class="token function">ls</span>
<span class="token comment">#</span>
conf 
html
logs
sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查Nginx版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./sbin
<span class="token comment">#</span>
<span class="token function">ls</span>
<span class="token comment">#发现里面有一个nginx文件</span>
./nginx <span class="token parameter variable">-v</span>
<span class="token comment">#一定要加./ 不然使用的nginx依旧是上所安装的nginx 可以自行比对两者的版本</span>
./nginx <span class="token parameter variable">-V</span>
<span class="token comment">#查看安装时指令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./sbin
<span class="token comment">#确保用户在./sbin目录中</span>
./nginx
<span class="token comment">#</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function b(g,h){const e=d("ExternalLinkIcon");return c(),t("div",null,[p,s("p",null,[s("a",o,[n("Nginx官网"),i(e)]),n("有详细的介绍。")]),v,s("p",null,[n("首先去"),s("a",u,[n("Nginx官网下载页面"),i(e)]),n("，找到自己想下的版本，然后复制其链接地址，例如：")]),m])}const x=l(r,[["render",b],["__file","nginxInstall.html.vue"]]);export{x as default};
