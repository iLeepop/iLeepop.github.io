import{_ as n,o as s,c as a,a as e}from"./app-5539d687.js";const i={},l=e(`<h1 id="忘了" tabindex="-1"><a class="header-anchor" href="#忘了" aria-hidden="true">#</a> 忘了</h1><p><strong>查看端口</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-i</span> <span class="token punctuation">[</span>port<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看系统架构</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dpkg --print-architecture
//
arch
//
<span class="token function">file</span> /lib/systemd/systemd
//
<span class="token function">uname</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看64 || 32</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getconf LONG_BIT
//
<span class="token function">file</span> /bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看版本信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lsb_release <span class="token parameter variable">-a</span>
//
<span class="token function">cat</span> /etc/issue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看内核版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/version
//
<span class="token function">uname</span> <span class="token parameter variable">-a</span>
//
<span class="token function">uname</span> <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看系统可用空间</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>服务控制</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 基本
// 启动
systemctl start <span class="token punctuation">[</span>service<span class="token punctuation">]</span>
// 停止
systemctl stop <span class="token punctuation">[</span>service<span class="token punctuation">]</span>
// 重启
systemctl restart <span class="token punctuation">[</span>service<span class="token punctuation">]</span>
// 启用开机启动
systemctl <span class="token builtin class-name">enable</span> <span class="token punctuation">[</span>service<span class="token punctuation">]</span>
// 禁止开机启动
systemctl disable <span class="token punctuation">[</span>service<span class="token punctuation">]</span>
// 查看状态
systemctl status <span class="token punctuation">[</span>service<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ubuntu-apt-remove-pkg" tabindex="-1"><a class="header-anchor" href="#ubuntu-apt-remove-pkg" aria-hidden="true">#</a> ubuntu apt remove PKG</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dpkg <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> package-name
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove package-name
<span class="token function">sudo</span> <span class="token function">apt-get</span> purge package-name
<span class="token function">sudo</span> <span class="token function">apt-get</span> autoremove
<span class="token function">sudo</span> <span class="token function">apt-get</span> clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="软链接" tabindex="-1"><a class="header-anchor" href="#软链接" aria-hidden="true">#</a> 软链接</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /path/to/file /path/to/link
<span class="token comment"># 前者是源文件，后者是软链接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比如你开发了一个程序A，可以先丢进/usr/local/bin，然后软链接到/usr/bin，这样你就可以在终端中直接使用A了 注意：源文件丢到其它文件，只是为了方便记忆查询以及操作，并且不受开发影响</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/A /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取消链接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>unlink /usr/bin/A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),t=[l];function c(d,r){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","forgot.html.vue"]]);export{u as default};
