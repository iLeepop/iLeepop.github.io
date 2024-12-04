import{_ as n,o as s,c as a,a as e}from"./app-5539d687.js";const o={},t=e(`<h1 id="值与变量" tabindex="-1"><a class="header-anchor" href="#值与变量" aria-hidden="true">#</a> 值与变量</h1><p>什么是值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;ilee&#39;</span>
<span class="token number">79</span>
<span class="token comment">//以上两个都是值</span>
<span class="token comment">//打印一下</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ilee&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">79</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么是变量：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&#39;ilee&#39;</span>
<span class="token keyword">const</span> city <span class="token operator">=</span> <span class="token string">&#39;beijing&#39;</span>
<span class="token comment">//以上就是变量</span>
<span class="token comment">//打印一下</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量会被创建在你的内存中，并且将值存储在这个变量中。</p><p>可以将变量看成一个盒子，而值就是盒子里面的东西，想要使用这个值，只需要使用这个盒子就行了。</p><h2 id="var、let、const区别" tabindex="-1"><a class="header-anchor" href="#var、let、const区别" aria-hidden="true">#</a> var、let、const区别</h2><p><strong>区别1：</strong><code>var</code>存在<strong>变量提升</strong>，而<code>let</code>和<code>const</code>不存在<strong>变量提升。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
等同于
<span class="token keyword">var</span> str
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token comment">//输出undefined</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token comment">//报错 Cannot access &#39;str&#39; before initialization</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不难看出，<code>str</code>是在<code>log</code>后定义的，但<code>var</code>存在<strong>变量提升</strong>，所以打印<code>str</code>时，<strong>会去找有没有<code>str</code>的定义</strong>，若有，则将<strong>定义提前</strong>，但<strong>赋值的顺序</strong>仍在<code>log</code>后，故<code>log</code>打印的结果是<code>undefined</code>。</p><p><strong>区别2：</strong><code>var</code>定义的变量可以<strong>声明多次</strong>，而<code>let</code>，<code>const</code>定义的变量只能<strong>声明一次</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">//输出hello</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span>	<span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment">//报错 Identifier &#39;b&#39; has already been declared</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token comment">//报错 Identifier &#39;c&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>var</code>定义的变量二次声明后，后者定义的内容会<strong>覆盖前面</strong>的，但不会报错，而<code>let</code>，<code>const</code>则不行。</p><p><strong>区别3：</strong><code>var</code>、<code>let</code>声明的变量<strong>可以再次赋值</strong>，而<code>const</code>声明的变量<strong>不能再次赋值</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
a <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">//输出2</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment">//输出2</span>

<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token comment">//报错 Assignment to constant variable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错内容是对常数变量(常量)进行赋值，说明<code>const</code>定义的是常量，常量是不能修改的。但是<strong>注意</strong>，只是<code>const</code>声明的变量，<strong>但常量里面包含的内容还是可以改的</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">1234</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
obj <span class="token operator">=</span> <span class="token number">1234</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">//第一次输出{c: 1234}</span>
<span class="token comment">//第二次报错 Assignment to constant variable</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">//输出 [&#39;hello&#39;, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>区别4：</strong><code>var</code>声明的变量<strong>没有自身的作用域</strong>，而<code>let</code>、<code>const</code>声明的变量<strong>有自身的作用域</strong>。</p><p>在<code>JS</code>中是没有块级作用域的，例如在<strong>函数内<code>var</code>声明的变量，在函数外也可以调用</strong>，但<code>let</code>、<code>const</code>声明的变量有自身的作用域，在<strong>函数内定义的变量只能在函数内使用</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span>
<span class="token comment">//报错 ReferenceError: num2 is not defined</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> num3 <span class="token operator">=</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span>
<span class="token comment">//报错 ReferenceError: num3 is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h2><p>一般变量的命名都遵循小驼峰命名法。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> secondName <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">let</span> thirdPersonName <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也有其它的命名方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fisrt_name <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> second_name <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">let</span> third_person_name <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，想怎么取名是你的自由，但是在整体上一定要符合一定的风格，不能让其它人阅读的时候产生误会。</p><p>不过，有关于命名。<code>JavaScript</code>还是做出了一部分限制，比如一部分特殊的字符就不能用作变量名：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> three<span class="token operator">&amp;</span> <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">//error</span>
<span class="token comment">//不能以数字开头</span>
<span class="token keyword">let</span> 3three <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">//error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上。<code>JavaScript</code>的变量名，只能包含：<strong>数字，字母，下划线，以及$符合</strong>。</p><p>AND，<code>JavaScript</code>所保留的关键字也是不能作为变量名使用的，那些关键字在这里就不一一赘述了。</p><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>一共有几种数据类型：</p><ol><li>Number：基本数字类型，浮点，整数都可以</li><li>String：一串字符</li><li>Boolean：逻辑类型，就只有两个值<code>true</code>和<code>false</code></li><li>Undefined：还没有被赋值的变量</li><li>Null：空值</li><li>Symbol(ES2015)：独特且不能被修改的值</li><li>BigInt(ES2020)：特别大的数字</li></ol><p>事实上，<code>JavaScript</code>在定义变量时，并不需要指明变量的类型（虽然方便，但其实有一定缺陷）。</p><p>因为变量并没有类型，是被存储在其中的值有类型，这也是为什么<code>js</code>中，我们可以将不同类型的值赋值给同一个变量，称之为动态变量。</p><p>可以使用<code>typeof</code>去查看一个值的类型：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> ok <span class="token operator">=</span> <span class="token boolean">true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token comment">// 输出 true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> ok<span class="token punctuation">)</span> <span class="token comment">//输出 boolean</span>

<span class="token keyword">let</span> yetok
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> yetok<span class="token punctuation">)</span> <span class="token comment">//输出 undefined</span>

yetok <span class="token operator">=</span> <span class="token boolean">false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> yetok<span class="token punctuation">)</span> <span class="token comment">//输出 boolean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),p=[t];function c(l,i){return s(),a("div",null,p)}const d=n(o,[["render",c],["__file","jsValue.html.vue"]]);export{d as default};
