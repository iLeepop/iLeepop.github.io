import{_ as n,o as s,c as a,a as e}from"./app-5539d687.js";const l={},i=e(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h1><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p>创建 <code>.sh</code> 文件时，别忘了在第一行加上 <code>#!/bin/bash</code>，保存后别忘了 <code>chmod +x</code> 或者 <code>chmod 777</code></p><h3 id="创建常量-变量" tabindex="-1"><a class="header-anchor" href="#创建常量-变量" aria-hidden="true">#</a> 创建常量\\变量</h3><h4 id="创建全局常量" tabindex="-1"><a class="header-anchor" href="#创建全局常量" aria-hidden="true">#</a> 创建全局常量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 readonly 创建全局常量，设置只读属性，不可覆写</span>
<span class="token builtin class-name">readonly</span> <span class="token assign-left variable">AUTHOR</span><span class="token operator">=</span><span class="token string">&quot;ilee&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建全局变量" tabindex="-1"><a class="header-anchor" href="#创建全局变量" aria-hidden="true">#</a> 创建全局变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">2024</span>
<span class="token assign-left variable">style</span><span class="token operator">=</span><span class="token string">&quot;dark&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="引用变量和常量" tabindex="-1"><a class="header-anchor" href="#引用变量和常量" aria-hidden="true">#</a> 引用变量和常量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 $ 或者 \${} 引用变量和常量</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Author: <span class="token variable">$Author</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Time: <span class="token variable">$time</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Style: <span class="token variable">\${style}</span>&quot;</span>
<span class="token comment"># 一般 \${} 引用都是因为要和其它命令或者字符串使用</span>
<span class="token comment"># 例如</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Author: <span class="token variable">\${AUTHOR}</span>is a good man&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建函数内变量" tabindex="-1"><a class="header-anchor" href="#创建函数内变量" aria-hidden="true">#</a> 创建函数内变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 local 创建函数内变量，函数外无法使用</span>
<span class="token function-name function">say_bye</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;funl&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Goodbye, <span class="token variable">$name</span>!&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通过特殊语句赋值" tabindex="-1"><a class="header-anchor" href="#通过特殊语句赋值" aria-hidden="true">#</a> 通过特殊语句赋值</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> /home/pi<span class="token variable">\`</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> /home/pi<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="弃用变量" tabindex="-1"><a class="header-anchor" href="#弃用变量" aria-hidden="true">#</a> 弃用变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 弃用变量</span>
<span class="token builtin class-name">unset</span> <span class="token function">time</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$time</span> <span class="token comment"># 输出空</span>
<span class="token comment"># 不可弃用常量</span>
<span class="token builtin class-name">unset</span> AUTHOR <span class="token comment"># 会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="赋值字符串" tabindex="-1"><a class="header-anchor" href="#赋值字符串" aria-hidden="true">#</a> 赋值字符串</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 字符串赋值使用 &quot;&quot; 或 &#39;&#39; 都可以</span>
<span class="token assign-left variable">fname</span><span class="token operator">=</span><span class="token string">&quot;funl&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$fname</span>
<span class="token assign-left variable">lname</span><span class="token operator">=</span><span class="token string">&#39;ilee&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$lname</span>

<span class="token comment"># 创建有回车的字符串或者其它转义字符</span>
<span class="token assign-left variable">long_str</span><span class="token operator">=</span><span class="token string">&quot;\\
one <span class="token entity" title="\\n">\\n</span>\\
two <span class="token entity" title="\\n">\\n</span>\\
three <span class="token entity" title="\\n">\\n</span>\\
... <span class="token entity" title="\\n">\\n</span>\\
&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$long_str</span> <span class="token comment"># -e 开启转义 带换行的字符串</span>

<span class="token assign-left variable">spec_str</span><span class="token operator">=</span><span class="token string">&quot;hi <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$name</span><span class="token entity" title="\\&quot;">\\&quot;</span>, <span class="token entity" title="\\n">\\n</span>&quot;</span> 
<span class="token builtin class-name">echo</span> <span class="token variable">$spec_str</span> <span class="token comment"># 带引号的字符串 hi &quot;funl&quot;,</span>

<span class="token comment"># 单双引号拼接值</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;funl&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hi &quot;</span><span class="token variable">$name</span><span class="token string">&quot;&quot;</span> <span class="token comment"># hi funl</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hi <span class="token variable">\${name}</span>&quot;</span> <span class="token comment"># hi funl</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;hi &#39;</span><span class="token variable">$name</span><span class="token string">&#39;&#39;</span> <span class="token comment"># hi funl</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;hi &#39;</span><span class="token variable">\${name}</span><span class="token string">&#39;&#39;</span> <span class="token comment"># hi \${name}</span>
<span class="token comment"># 尽可能使用双引号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串方法" tabindex="-1"><a class="header-anchor" href="#字符串方法" aria-hidden="true">#</a> 字符串方法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;funl&quot;</span>
<span class="token comment"># 获取字符串长度</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>name}</span>
<span class="token comment"># or </span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>name<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>

<span class="token comment"># 根据索引获取字符串子集</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${name<span class="token operator">:</span>0<span class="token operator">:</span>3}</span> <span class="token comment"># 从0开始，取3个字符，即 fun</span>
<span class="token comment"># 索引无需多言，从 0 开始的...异世界！</span>

<span class="token comment"># 获取特定字符的索引</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> fn<span class="token variable">\`</span></span> <span class="token comment"># 1</span>
<span class="token comment"># 这里的索引是从 1 开始的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>某些 shell 还可以定义整数变量，这里不做过多展开</strong></em></p><h4 id="创建数组" tabindex="-1"><a class="header-anchor" href="#创建数组" aria-hidden="true">#</a> 创建数组</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用空格分割</span>
<span class="token assign-left variable">my_num_array</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token assign-left variable">my_str_array</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;funl&quot;</span> <span class="token string">&quot;ilee&quot;</span> <span class="token string">&quot;funl_ilee&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 根据下标赋值</span>
my_num_array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span>
my_str_array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;funl&quot;</span>
<span class="token comment">#根据下标取值</span>
<span class="token assign-left variable">one</span><span class="token operator">=</span><span class="token variable">\${my_num_array<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable">\${my_str_array<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>
<span class="token comment"># 创建关联数组，在我看来就是 map 或者对象</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> mmma
<span class="token assign-left variable">mmma</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;funl&quot;</span> <span class="token punctuation">[</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2024</span><span class="token punctuation">)</span>
mmma<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;ilee&quot;</span>
mmma<span class="token punctuation">[</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2024</span>

<span class="token comment"># 数组长度</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>my_num_array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token comment"># or</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>my_str_array<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊的环境变量" tabindex="-1"><a class="header-anchor" href="#特殊的环境变量" aria-hidden="true">#</a> 特殊的环境变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
<span class="token builtin class-name">echo</span> <span class="token environment constant">$HOME</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h3><p>有一个实例 .sh 文件如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;args lens: <span class="token variable">$#</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;all args: <span class="token variable">$*</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;all args: &quot;</span><span class="token variable">$@</span><span class="token string">&quot;&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;fst arg: <span class="token variable">$1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;sec arg: <span class="token variable">$2</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;now Process ID: <span class="token variable">$$</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./test.sh <span class="token number">1</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>@ 和 * 的区别</strong></p><ul><li>*： 输出所有参数，以空格分隔，相当于一个整体</li><li>@： 输出所有参数，以空格分隔，每个都是单独的参数</li></ul><h3 id="算术表达式" tabindex="-1"><a class="header-anchor" href="#算术表达式" aria-hidden="true">#</a> 算术表达式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment"># 求和：</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">+</span> $b<span class="token variable">))</span></span>
<span class="token comment"># or</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a + $b<span class="token variable">\`</span></span>

<span class="token comment"># 减法：</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">-</span> $b<span class="token variable">))</span></span>
<span class="token comment"># or</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a - $b<span class="token variable">\`</span></span>

<span class="token comment"># 乘法：</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">*</span> $b<span class="token variable">))</span></span>
<span class="token comment"># or</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a <span class="token punctuation">\\</span>* $b<span class="token variable">\`</span></span>

<span class="token comment"># 除法：</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">/</span> $b<span class="token variable">))</span></span>
<span class="token comment"># or</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a / $b<span class="token variable">\`</span></span>

<span class="token comment"># 模运算 求余：</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">%</span> $b<span class="token variable">))</span></span>
<span class="token comment"># or</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a % $b<span class="token variable">\`</span></span>

<span class="token comment"># 赋值：</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">$b</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面运用到了 <code>echo</code> 的一个特性，使用 <code>echo</code> 可以打印出另一个命令的执行结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">[</span>command<span class="token punctuation">]</span><span class="token variable">\`</span></span> <span class="token comment"># 使用反引号!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 逻辑运算符：</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">==</span> $b<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">!=</span> $b<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">&gt;</span> $b<span class="token variable">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>$a <span class="token operator">&lt;</span> $b<span class="token variable">))</span></span>

<span class="token comment"># 关系运算符：</span>
<span class="token comment"># 等于</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-eq</span> <span class="token variable">$b</span><span class="token punctuation">]</span> <span class="token comment"># equal</span>
<span class="token keyword">fi</span>
<span class="token comment"># 不等于</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-ne</span> <span class="token variable">$b</span><span class="token punctuation">]</span> <span class="token comment"># not equal</span>
<span class="token keyword">fi</span>
<span class="token comment"># 大于</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token variable">$b</span><span class="token punctuation">]</span> <span class="token comment"># greater than</span>
<span class="token keyword">fi</span>
<span class="token comment"># 小于</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token variable">$b</span><span class="token punctuation">]</span> <span class="token comment"># less than</span>
<span class="token keyword">fi</span>
<span class="token comment"># 大于等于</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-ge</span> <span class="token variable">$b</span><span class="token punctuation">]</span> <span class="token comment"># greater than or equal</span>
<span class="token keyword">fi</span>
<span class="token comment"># 小于等于</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-le</span> <span class="token variable">$b</span><span class="token punctuation">]</span> <span class="token comment"># less than or equal</span>
<span class="token keyword">fi</span>

<span class="token comment"># 布尔运算符：</span>
<span class="token comment"># 非</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span>true <span class="token punctuation">]</span> <span class="token comment"># not equal 返回 false</span>
<span class="token keyword">fi</span>
<span class="token comment"># 与</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token boolean">true</span> <span class="token parameter variable">-a</span> <span class="token boolean">false</span> <span class="token punctuation">]</span> <span class="token comment"># and 返回 false</span>
<span class="token keyword">fi</span>
<span class="token comment"># 或</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token boolean">true</span> <span class="token parameter variable">-o</span> <span class="token boolean">false</span> <span class="token punctuation">]</span> <span class="token comment"># or 返回 true</span>
<span class="token keyword">fi</span>

<span class="token comment"># 逻辑与：</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token punctuation">]</span> <span class="token comment"># and 返回 false</span>
<span class="token keyword">fi</span>
<span class="token comment"># 逻辑或：</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span> <span class="token punctuation">]</span> <span class="token comment"># or  返回 true</span>
<span class="token keyword">fi</span>

<span class="token comment"># 字符串运算符</span>
<span class="token assign-left variable">name1</span><span class="token operator">=</span><span class="token string">&quot;funl&quot;</span>
<span class="token assign-left variable">name2</span><span class="token operator">=</span><span class="token string">&quot;ilee&quot;</span>
<span class="token comment"># 相等</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$name1</span> <span class="token operator">=</span> <span class="token variable">$name2</span> <span class="token punctuation">]</span> <span class="token comment"># 返回 false</span>
<span class="token keyword">fi</span>
<span class="token comment"># 不等</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$name1</span> <span class="token operator">!=</span> <span class="token variable">$name2</span> <span class="token punctuation">]</span> <span class="token comment"># 返回 true</span>
<span class="token keyword">fi</span>
<span class="token comment"># 字符串长度是否为0</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$name1</span> <span class="token punctuation">]</span> <span class="token comment"># 返回 false</span>
<span class="token keyword">fi</span>
<span class="token comment"># 字符串长度是否不为0</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token variable">$name1</span> <span class="token punctuation">]</span> <span class="token comment"># 返回 true</span>
<span class="token keyword">fi</span>
<span class="token comment"># 字符串是否为空 不为空返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token variable">$name1</span><span class="token punctuation">]</span> <span class="token comment"># 返回 true</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件运算符" tabindex="-1"><a class="header-anchor" href="#文件运算符" aria-hidden="true">#</a> 文件运算符</h4><p><strong>相当重要</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 路径</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;./file&quot;</span>
<span class="token comment"># 文件是否是 块设备文件 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-b</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否是 字符设备文件 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-c</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否是 目录 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否是 普通文件 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否设置了 SGID 位 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-g</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否设置了 Sticky Bit 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-k</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否是 有名管道 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-p</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否设置了 SUID 位 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-u</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否可读 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否可写 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-w</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否可执行 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 文件是否为空（文件大小为 0） 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 检测文件是否存在 是返回 true</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 判断某个文件是否是 socket</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-S</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>

<span class="token comment"># 判断某个文件是否存在并且是符号链接</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-L</span> <span class="token variable">$file</span> <span class="token punctuation">]</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h3><p><code>sh</code> 不可以有空的流程分支</p><h4 id="if-判断" tabindex="-1"><a class="header-anchor" href="#if-判断" aria-hidden="true">#</a> IF 判断</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>

<span class="token comment"># 单分支 if fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token variable">$b</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 双分支 if else fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token variable">$b</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 b&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于等于 b&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 多分支 if elif else fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token variable">$a</span> <span class="token parameter variable">-eq</span> <span class="token variable">$b</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 b&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 单行表示</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token variable">$a</span> <span class="token parameter variable">-eq</span> <span class="token variable">$b</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 判断语句格式</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token variable">$a</span> <span class="token parameter variable">-eq</span> <span class="token variable">$b</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">fi</span>
<span class="token comment"># 可以直接使用 &gt; &lt; == !=</span>
<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> $a <span class="token operator">&gt;</span> $b <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> FOR 循环</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 标准写法</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
    <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token comment"># 等效写法</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
    <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token comment"># 单行表示</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable">$i</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token keyword">done</span>

<span class="token comment"># 无线循环</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> <span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token punctuation">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> WHILE 循环</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 标准写法</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span>condition<span class="token punctuation">]</span> <span class="token comment"># condition 可以是变量、表达式、命令</span>
<span class="token keyword">do</span>
    <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token comment"># 无线循环</span>
<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span>
    <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
    <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="until-循环" tabindex="-1"><a class="header-anchor" href="#until-循环" aria-hidden="true">#</a> UNTIL 循环</h4><p><code>until</code> 在 <code>condition</code> 为 <code>true</code> 时退出循环</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 标准写法</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span>condition<span class="token punctuation">]</span> <span class="token comment"># condition 可以是变量、表达式、命令</span>
<span class="token keyword">do</span>
    <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-esac-多分支语句" tabindex="-1"><a class="header-anchor" href="#case-esac-多分支语句" aria-hidden="true">#</a> case-esac 多分支语句</h4><p>每个分支以 <code>xxx)</code>开始，以 <code>;;</code> 结束</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> var <span class="token keyword">in</span>
    pattern1<span class="token punctuation">)</span>
        <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    pattern2<span class="token punctuation">)</span>
        <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="break-和-continue" tabindex="-1"><a class="header-anchor" href="#break-和-continue" aria-hidden="true">#</a> BREAK 和 CONTINUE</h4><ul><li><code>BREAK</code> 退出所有循环</li><li><code>CONTINUE</code> 退出当前循环，并进入下一次循环</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span> 
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;type num:&quot;</span>
    <span class="token builtin class-name">read</span> <span class="token variable">$var</span>
    <span class="token keyword">case</span> var <span class="token keyword">in</span>
        <span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;the num is <span class="token variable">$var</span>&quot;</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;the num is not 1,2,3&quot;</span>
            <span class="token builtin class-name">break</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span> 
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;type num:&quot;</span>
    <span class="token builtin class-name">read</span> <span class="token variable">$var</span>
    <span class="token keyword">case</span> var <span class="token keyword">in</span>
        <span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;the num is <span class="token variable">$var</span>&quot;</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;the num is not 1,2,3&quot;</span>
            <span class="token builtin class-name">continue</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中使用了 <code>read</code>，它是一个命令，用于从标准输入（键盘）读取一个字符串。</p><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><p><code>sh</code> 函数在调用前一定要先声明函数，然后再调用，没有声明提升</p><h4 id="函数创建" tabindex="-1"><a class="header-anchor" href="#函数创建" aria-hidden="true">#</a> 函数创建</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># () 中间无需参数</span>
<span class="token keyword">function</span> <span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment"># 也可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数调用" tabindex="-1"><a class="header-anchor" href="#函数调用" aria-hidden="true">#</a> 函数调用</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;nothing&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 直接使用函数名即可</span>
func1

<span class="token comment"># 传参</span>
func1 <span class="token string">&quot;hello&quot;</span> <span class="token string">&quot;world&quot;</span>

<span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># 在函数内部，使用之前提过的 $ 符号来获取参数，大于 10 个参数时，\${n} 取参</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token comment"># hello</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$2</span> <span class="token comment"># world</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$*</span> <span class="token comment"># hello world</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$@</span> <span class="token comment"># hello world</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$#</span> <span class="token comment"># 2</span>
    <span class="token punctuation">[</span>command<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># </span>
<span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span>
    <span class="token builtin class-name">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token function-name function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;world&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token number">2024</span>
<span class="token punctuation">}</span>

func1
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span> <span class="token comment"># 使用 $? 获取上一个函数的返回值</span>
func2
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>return 的限制， return 只能返回 0-255 之间的整型数字</strong></p><h3 id="输入输出重定向" tabindex="-1"><a class="header-anchor" href="#输入输出重定向" aria-hidden="true">#</a> 输入输出重定向</h3><h4 id="普通" tabindex="-1"><a class="header-anchor" href="#普通" aria-hidden="true">#</a> 普通</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出重定向 类似于</span>
<span class="token builtin class-name">echo</span> <span class="token number">123</span> <span class="token operator">&gt;</span> /dev/null
<span class="token comment"># 没有输出到终端 而是输出到一个空设备上了</span>

<span class="token comment"># command &gt; file</span>
<span class="token builtin class-name">echo</span> <span class="token number">123</span> <span class="token operator">&gt;</span> <span class="token number">123</span>.txt
<span class="token function">cat</span> <span class="token number">123</span>.txt <span class="token comment"># 输出 123</span>
<span class="token builtin class-name">echo</span> <span class="token number">123456</span> <span class="token operator">&gt;</span> <span class="token number">123</span>.txt
<span class="token function">cat</span> <span class="token number">123</span>.txt <span class="token comment"># 输出 123456 注意覆盖了之前的内容</span>

<span class="token comment"># command &lt; file</span>
<span class="token function">cat</span> <span class="token operator">&lt;</span> <span class="token number">123</span>.txt <span class="token comment"># 输出 123456</span>
<span class="token comment"># 等同于</span>
<span class="token function">cat</span> <span class="token number">123</span>.txt <span class="token comment"># 就是将 123.txt 作为参数给 cat 命令了 (但其实并不是)</span>

<span class="token comment"># command &gt;&gt; file</span>
<span class="token builtin class-name">echo</span> <span class="token number">123</span> <span class="token operator">&gt;&gt;</span> <span class="token number">123</span>.txt
<span class="token function">cat</span> <span class="token number">123</span>.txt <span class="token comment"># 输出 123456123 注意看是追加了内容123 而不是覆盖</span>

<span class="token comment"># command &lt; file &gt; file</span>
<span class="token function">touch</span> <span class="token number">321</span>.txt
<span class="token function">cat</span> <span class="token number">123</span>.txt <span class="token comment"># 输出 123456123</span>
<span class="token builtin class-name">echo</span> <span class="token operator">&lt;</span> <span class="token number">123</span>.txt <span class="token operator">&gt;</span> <span class="token number">321</span>.txt <span class="token comment"># 将 123.txt 的内容写入到 321.txt 中</span>
<span class="token function">cat</span> <span class="token number">321</span>.txt <span class="token comment"># 输出 123456123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="深入" tabindex="-1"><a class="header-anchor" href="#深入" aria-hidden="true">#</a> 深入</h4><p>std 代表标准 <code>standard</code><code>Unix/Linux</code> 命令运行时都会打开三个文件</p><ul><li><code>stdin</code>: 文件描述符 0， <code>Unix</code> 程序默认从 <code>stdin</code> 读取</li><li><code>stdout</code>: 文件描述符 1， <code>Unix</code> 程序默认向 <code>stdout</code> 输出</li><li><code>stderr</code>: 文件描述符 2， <code>Unix</code> 程序默认向 <code>stderr</code> 输出错误信息</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># command 文件描述符&gt;file</span>
<span class="token comment"># command 2&gt;file</span>
<span class="token function">cat</span> <span class="token number">3211</span>.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>error.txt <span class="token comment"># 将 cat 3211.txt 中发生的错误信息输出到 error.txt</span>
<span class="token function">cat</span> error.txt <span class="token comment"># cat: 3211.txt: No such file or directory</span>

<span class="token comment"># command 2&gt;&gt;file</span>
<span class="token function">cat</span> <span class="token number">3212</span>.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&gt;</span>error.txt <span class="token comment"># 将 cat 3211.txt 中发生的错误信息追加到 error.txt</span>
<span class="token function">cat</span> error.txt <span class="token comment"># cat: 3211.txt: No such file or directory cat: 3212.txt: No such file or directory</span>

<span class="token comment"># command &gt; file 文件描述符&gt;&amp;文件描述符</span>
<span class="token comment"># command &gt; file 2&gt;&amp;1 将标准输出和标准错误输出都重定向到文件</span>
<span class="token function">cat</span> <span class="token number">3211</span>.txt <span class="token operator">&gt;</span> error.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token comment"># 将 cat 3211.txt 中发生的错误信息和标准输出合并一起覆盖到 error.txt</span>

<span class="token comment"># command &gt;&gt; file 2&gt;&amp;1</span>
<span class="token function">cat</span> <span class="token number">3211</span>.txt <span class="token operator">&gt;&gt;</span> error.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token comment"># 将 cat 3211.txt 中发生的错误信息和标准输出合并一起追加到 error.txt</span>

<span class="token comment"># 文件描述符&lt;file</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span> <span class="token number">123</span>.txt <span class="token comment"># 将文件描述符 3 绑定到 123.txt 文件</span>
<span class="token function">cat</span> <span class="token operator">&lt;</span><span class="token file-descriptor important">&amp;3</span> <span class="token comment"># 输出 123345123</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&lt;&amp;</span>- <span class="token comment"># 关闭文件描述符 谨慎使用 谨慎使用 电脑可能会卡掉</span>

<span class="token comment"># command &lt;&lt; tag</span>
<span class="token comment"># 是 Here Document 的一种语法</span>
<span class="token comment"># 这个玩意很迷</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">tag<span class="token bash punctuation"> <span class="token operator">&gt;</span> <span class="token number">123</span>.txt <span class="token comment"># 将 tag 之前的内容写入到 123.txt 文件中</span></span>
909
tag</span>
<span class="token comment"># tag 用什么都可以 一般都用 EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入其它-sh-文件" tabindex="-1"><a class="header-anchor" href="#引入其它-sh-文件" aria-hidden="true">#</a> 引入其它 .sh 文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前在 1.sh 中</span>
<span class="token builtin class-name">source</span> <span class="token number">123</span>.sh
<span class="token comment"># or</span>
<span class="token builtin class-name">.</span> <span class="token number">123</span>.sh

<span class="token builtin class-name">echo</span> <span class="token string">&quot;here is 1.sh&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前在 123.sh 中</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;here is 123.sh&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当某个文件被引入后，它是否可执行就不重要了，只要引入它的文件为可执行就行了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./1.sh <span class="token comment"># 输出：here is 123.sh here is 1.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取其它命令的返回值" tabindex="-1"><a class="header-anchor" href="#获取其它命令的返回值" aria-hidden="true">#</a> 获取其它命令的返回值</h3><p>这些其实都可以上网去查的，这里就不多说了</p><h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h2><ul><li>当脚本执行代码过多时，使用函数将关联的代码封装起来，方便管理</li><li>为了更灵活的使用，可以针对不同参数执行不同的代码，例如当前环境没有相应的依赖时，执行相应的安装代码，有则不进行安装</li><li>脚本执行过程中，可以实时输出标准输出以及错误信息输出至日志，方便调试</li><li>跟编程一样，脚本是为了更好的利用系统环境，减少重复的工作，提高效率，减少出错率</li></ul>`,85),t=[i];function p(c,o){return s(),a("div",null,t)}const d=n(l,[["render",p],["__file","shell.html.vue"]]);export{d as default};
