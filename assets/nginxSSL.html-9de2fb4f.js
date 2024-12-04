import{_ as s,o as n,c as a,a as e}from"./app-5539d687.js";const t={},i=e(`<h1 id="ssl" tabindex="-1"><a class="header-anchor" href="#ssl" aria-hidden="true">#</a> SSL</h1><p>去下载你的ssl证书文件。</p><p>上传到服务器，解压。</p><p>得到 <strong>.crt</strong> 以及 <strong>.key</strong> 文件。</p><p>打开 <strong>nginx.conf</strong> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx/
<span class="token comment">#</span>
<span class="token function">vim</span> nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>...
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">listen</span>       [::]:443 ssl http2</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  _</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">root</span>         /usr/share/nginx/html</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">ssl_certificate</span> <span class="token string">&quot;/opt/home/ssl/cra2yk1k/c2ytb.crt&quot;</span></span><span class="token punctuation">;</span><span class="token comment">#这里填你的 .crt文件</span>
        <span class="token directive"><span class="token keyword">ssl_certificate_key</span> <span class="token string">&quot;/opt/home/ssl/cra2yk1k/c2yt.key&quot;</span></span><span class="token punctuation">;</span><span class="token comment">#这里也是 .key</span>
        <span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:SSL:1m</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_session_timeout</span>  <span class="token number">10m</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_ciphers</span> HIGH:!aNULL:!MD5</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

         <span class="token comment"># Load configuration files for the default server block.</span>
        <span class="token directive"><span class="token keyword">include</span> /etc/nginx/default.d/*.conf</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">404</span> /404.html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">location</span> = /40x.html</span> <span class="token punctuation">{</span>
        	<span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span>
        	<span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[i];function l(p,o){return n(),a("div",null,c)}const d=s(t,[["render",l],["__file","nginxSSL.html.vue"]]);export{d as default};
