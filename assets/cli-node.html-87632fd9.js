import{_ as n,o as s,c as a,a as p}from"./app-5539d687.js";const t={},e=p(`<h1 id="cli-node" tabindex="-1"><a class="header-anchor" href="#cli-node" aria-hidden="true">#</a> CLI Node</h1><p>使用 Node 搭建 CLI 工具。</p><p>首先，需要安装 Node.js， Node.js 是一个基于 JavaScript 的 JavaScript 运行环境，它允许我们使用 JavaScript 编写服务器端代码。</p><h2 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h2><p>额，我应该写了点什么，但是，在这里我不会写。</p><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> mycli
<span class="token builtin class-name">cd</span> mycli
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建入口文件" tabindex="-1"><a class="header-anchor" href="#创建入口文件" aria-hidden="true">#</a> 创建入口文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> bin
<span class="token builtin class-name">cd</span> bin
<span class="token function">touch</span> index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-cli-工具" tabindex="-1"><a class="header-anchor" href="#安装-cli-工具" aria-hidden="true">#</a> 安装 CLI 工具</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i yargs inquirer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="编写代码" tabindex="-1"><a class="header-anchor" href="#编写代码" aria-hidden="true">#</a> 编写代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token hashbang comment">#!/usr/bin/env node</span>
<span class="token keyword">import</span> yargs <span class="token keyword">from</span> <span class="token string">&quot;yargs&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hideBin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;yargs/helpers&quot;</span>

<span class="token keyword">const</span> argv <span class="token operator">=</span> <span class="token function">yargs</span><span class="token punctuation">(</span><span class="token function">hideBin</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 预先定义方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">serve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">port</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

argv<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&#39;serve [port]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;start the server&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">yargs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> yargs<span class="token punctuation">.</span><span class="token function">positional</span><span class="token punctuation">(</span><span class="token string">&#39;port&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&#39;port to bind on&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 描述 会出现在 使用了 --help 之后 </span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// 默认值</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">argv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 此处会执行设定的方法 argv 中携带了参数</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>argv<span class="token punctuation">.</span>verbose<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">start server on : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>argv<span class="token punctuation">.</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">// 判断是否有参数选项</span>
  <span class="token function">serve</span><span class="token punctuation">(</span>argv<span class="token punctuation">.</span>port<span class="token punctuation">)</span> <span class="token comment">// 调用先前定义的方法</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;verbose&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// 名字 --verbose</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&#39;v&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 别名 -v</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 值类型</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Run with verbose logging&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 描述</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否默认携带</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 需要符合链式编程 才能达到效果</span>
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&#39;open [url]&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;open the browser&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">yargs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> yargs<span class="token punctuation">.</span><span class="token function">positional</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">describe</span><span class="token operator">:</span> <span class="token string">&#39;the web url&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;https://xxxxxx.com&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">argv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">func1</span><span class="token punctuation">(</span>argv<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&#39;whoami&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;set usr name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">yargs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试一下" tabindex="-1"><a class="header-anchor" href="#测试一下" aria-hidden="true">#</a> 测试一下</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./index.js serve <span class="token number">9000</span>
// 预期输出
// start server on <span class="token builtin class-name">:</span> <span class="token number">9000</span>
// <span class="token number">9000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-package-json-中配置" tabindex="-1"><a class="header-anchor" href="#在-package-json-中配置" aria-hidden="true">#</a> 在 package.json 中配置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;mycli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bin/index.js&quot;</span>
<span class="token punctuation">}</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="再来" tabindex="-1"><a class="header-anchor" href="#再来" aria-hidden="true">#</a> 再来！</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token builtin class-name">.</span>
// 安装到全局
mycli <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，应该没什么问题了，按照自己的想法扩展吧。</p><h2 id="后话" tabindex="-1"><a class="header-anchor" href="#后话" aria-hidden="true">#</a> 后话</h2><p>可以使用 chalk 和 ora 来装饰你的 cli，具体用法自行搜索。</p><p>。。。</p><p>哈哈哈</p><p>chalk:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>chalk<span class="token punctuation">.</span><span class="token function">greenBright</span><span class="token punctuation">(</span><span class="token string">&#39;Hee Haa&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它的返回值是 String， 可以写入你的 cli 的实现方法中。</p><p>ora:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span><span class="token string">&#39;Spinner is running&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// init 对象</span>
spinner<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 启动！</span>
spinner<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// euh?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法示例" tabindex="-1"><a class="header-anchor" href="#方法示例" aria-hidden="true">#</a> 方法示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> inquirer <span class="token keyword">from</span> <span class="token string">&#39;inquirer&#39;</span> <span class="token comment">// 控制终端输入的</span>
<span class="token keyword">import</span> chalk <span class="token keyword">from</span> <span class="token string">&#39;chalk&#39;</span> <span class="token comment">// 颜色 字体 包括类似于 css 的样式</span>
<span class="token keyword">import</span> ora <span class="token keyword">from</span> <span class="token string">&#39;ora&#39;</span> <span class="token comment">// 一些加载样式</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sayname</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> usr <span class="token operator">=</span> <span class="token keyword">await</span> inquirer<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Enter your name: &#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 提示输入 name</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
  usr<span class="token punctuation">.</span>name <span class="token operator">=</span> usr<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span><span class="token string">&#39;Spinner is running&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 没有用 需要 .start()</span>
  <span class="token comment">// 通常是需要 await 的情况下使用</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">greenBright</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hi, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>usr<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","cli-node.html.vue"]]);export{r as default};
