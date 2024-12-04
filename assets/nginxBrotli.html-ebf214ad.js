import{_ as n,o as s,c as e,a}from"./app-5539d687.js";const i={},l=a(`<h1 id="brotli压缩" tabindex="-1"><a class="header-anchor" href="#brotli压缩" aria-hidden="true">#</a> Brotli压缩</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>打开命令行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc
<span class="token comment">#找一个你觉得合适的目录</span>
<span class="token function">git</span> clone https://github.com/google/ngx_brotli.git
<span class="token comment">#</span>
<span class="token builtin class-name">cd</span> ngx_brotli
<span class="token comment">#</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后要重新编译Nginx，在配置文件里面添加 <strong>--add-module=/etc/ngx_brotli</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-v</span>
<span class="token comment">#查看nginx的版本，跑官网下一个</span>
<span class="token function">wget</span> https://nginx.org/download/nginx-1.20.1.tar.gz
<span class="token comment">#这个是我的版本，下自己的对应版本</span>
<span class="token comment">#后面的就是源码安装方式</span>
<span class="token function">tar</span> <span class="token parameter variable">-axvf</span> nginx-1.20.1.tar.gz
<span class="token comment">#</span>
<span class="token builtin class-name">cd</span> ./nginx-1.20.1
<span class="token comment">#</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>等下！
<span class="token comment">#</span>
nginx <span class="token parameter variable">-V</span>
<span class="token comment">#先查一下自己安装的时的参数</span>
<span class="token comment">#将这个 --add-module=/etc/ngx_brotli 拼进去 =&gt; ... --add-module=/etc/ngx_brotli ...</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span> <span class="token punctuation">..</span><span class="token punctuation">..</span> --add-module<span class="token operator">=</span>/etc/ngx_brotli <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>紧接着，我遇到问题了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure: error: the HTTP XSLT module requires the libxml2/libxslt
libraries. You can either <span class="token keyword">do</span> not <span class="token builtin class-name">enable</span> the module or <span class="token function">install</span> the libraries.
<span class="token comment">#报错</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
yum <span class="token function">install</span> libxml2 libxml2-devel libxslt libxslt-devel
<span class="token comment">#下载相关库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure: error: the HTTP image filter module requires the GD library.
You can either <span class="token keyword">do</span> not <span class="token builtin class-name">enable</span> the module or <span class="token function">install</span> the libraries.
<span class="token comment">#报错</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
yum <span class="token function">install</span> gd gd-devel
<span class="token comment">#下载相关库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure: error: perl module ExtUtils::Embed is required
<span class="token comment">#报错</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
yum <span class="token function">install</span> perl-ExtUtils-Embed
<span class="token comment">#下载相关库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure: error: the Google perftools module requires the Google perftools
library. You can either <span class="token keyword">do</span> not <span class="token builtin class-name">enable</span> the module or <span class="token function">install</span> the library
<span class="token comment">#报错</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
yum <span class="token function">install</span> google-perftools google-perftools-devel
<span class="token comment">#下载相关库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一套下来，终归是缺什么下什么。</p><p>确认没问题后：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等进程完成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./objs/
<span class="token comment">#</span>
<span class="token function">mv</span> ./nginx /sbin/nginx
<span class="token comment">#第二个路径是我的nginx，你找你自己的</span>
nginx <span class="token parameter variable">-V</span>
<span class="token comment">#査看一下，编译参数里面有没有 --add-module=/etc/ngx_brotli 有便是成功了 没有自个找问题啊啊啊</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去你的配置文件 <strong>nginx.conf</strong> 的 server 块内编辑：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>...
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">brotli</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">brotli_comp_level</span> <span class="token number">6</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">brotli_buffers</span> <span class="token number">16</span> <span class="token number">8k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">brotli_min_length</span> <span class="token number">20</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">brotli_types</span> text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>名称</th><th>参数</th><th>详情</th></tr></thead><tbody><tr><td>brotli</td><td>on</td><td>开启brotli压缩功能</td></tr><tr><td>brotli_comp_level</td><td>1-11</td><td>压缩比例，用来指定brotli压缩比，1 压缩比最小，处理速度最快，11 压缩比最大，传输速度快，但是处理慢，也比较消耗CPU资源。默认值为 6 ,使用默认值即可</td></tr><tr><td>brotli_buffers</td><td>16 8k</td><td>设置用于压缩响应的缓冲区number和size。默认情况下，缓冲区大小等于一个内存页面。 默认值：32 4k|16 8k</td></tr><tr><td>brotli_min_length</td><td>20</td><td>设置length要压缩的响应的最小值，长度仅由Content-Length响应头字段确定。默认为 20</td></tr><tr><td>brotli_types</td><td>text/html</td><td>用来指定压缩的类型，text/html类型总是会被压缩。</td></tr></tbody></table><p>在浏览器控制台Network看到 <strong>Response Header</strong> 中的 <strong>Content-Encoding</strong> 值为 <strong>br</strong></p>`,20),t=[l];function d(c,o){return s(),e("div",null,t)}const p=n(i,[["render",d],["__file","nginxBrotli.html.vue"]]);export{p as default};
