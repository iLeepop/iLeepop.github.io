import{_ as n,o as s,c as a,a as p}from"./app-5539d687.js";const e={},t=p(`<h1 id="ababa" tabindex="-1"><a class="header-anchor" href="#ababa" aria-hidden="true">#</a> ababa</h1><p>粗糙看看：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//pt1-类型Type</span>

<span class="token comment">//---------原始类型---------</span>
<span class="token keyword">let</span> numA<span class="token operator">:</span> Number <span class="token operator">=</span> <span class="token number">1</span> 
<span class="token keyword">let</span> nickname<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string">&#39;ilee&#39;</span>
<span class="token keyword">let</span> nicknameMix<span class="token operator">:</span> <span class="token punctuation">(</span>Number <span class="token operator">|</span> String<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;cray&#39;</span> <span class="token comment">//联合类型</span>

<span class="token comment">//---------数组类型---------</span>
<span class="token keyword">let</span> arr<span class="token operator">:</span> Number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arrcomp<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">//不推荐</span>
<span class="token keyword">let</span> arrStr<span class="token operator">:</span> String<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arrMix<span class="token operator">:</span> <span class="token punctuation">(</span>Number <span class="token operator">|</span> String<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>

<span class="token comment">//---------类型别名---------</span>
<span class="token keyword">type</span> <span class="token class-name">DynamicNS</span> <span class="token operator">=</span> Number <span class="token operator">|</span> String <span class="token comment">//创建别名</span>
<span class="token keyword">let</span> dy1<span class="token operator">:</span> DynamicNS <span class="token operator">=</span> <span class="token string">&#39;ilee&#39;</span>
<span class="token keyword">let</span> dy2<span class="token operator">:</span> DynamicNS <span class="token operator">=</span> <span class="token number">2325</span>
<span class="token keyword">type</span> <span class="token class-name">DynamicNSArr</span> <span class="token operator">=</span> <span class="token punctuation">(</span>Number <span class="token operator">|</span> String<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//创建别名</span>
<span class="token keyword">type</span> <span class="token class-name">DynamicNSArrOthr</span> <span class="token operator">=</span> Number <span class="token operator">|</span> String<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> dya1<span class="token operator">:</span> DynamicNSArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">345</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> dyao1<span class="token operator">:</span> DynamicNSArrOthr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> dyao2<span class="token operator">:</span> DynamicNSArrOthr <span class="token operator">=</span> <span class="token number">1</span>


<span class="token comment">//---------函数类型---------</span>
<span class="token comment">//无返回值</span>
<span class="token keyword">function</span> <span class="token function">SayHi</span><span class="token punctuation">(</span>val1<span class="token operator">:</span> String<span class="token punctuation">,</span> val2<span class="token operator">:</span> Number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
<span class="token comment">//有返回值</span>
<span class="token keyword">const</span> SayBye <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token operator">:</span> String<span class="token punctuation">,</span> val2<span class="token operator">:</span> Number<span class="token punctuation">)</span><span class="token operator">:</span> Number <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val2 <span class="token comment">//Number type</span>
    
<span class="token punctuation">}</span>
<span class="token comment">//第二种方式</span>
<span class="token keyword">const</span> <span class="token function-variable function">SayJo</span><span class="token operator">:</span> <span class="token punctuation">(</span>val1<span class="token operator">:</span> String<span class="token punctuation">,</span> val2<span class="token operator">:</span> Number<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">void</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
<span class="token comment">//函数可选值</span>
<span class="token comment">//参数后加? 可设置可选值</span>
<span class="token keyword">const</span> <span class="token function-variable function">Jump</span><span class="token operator">:</span> <span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> step<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">Number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>start<span class="token punctuation">,</span> step<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>step<span class="token punctuation">)</span> <span class="token keyword">return</span> start
    <span class="token keyword">let</span> temp<span class="token operator">:</span> Number
    temp <span class="token operator">=</span> start <span class="token operator">+</span> step
    <span class="token keyword">return</span> start
<span class="token punctuation">}</span>

<span class="token function">Jump</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//无可选值</span>
<span class="token function">Jump</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">//---------对象类型---------</span>
<span class="token keyword">let</span> p<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> String<span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token function">SayYe</span><span class="token punctuation">(</span>val<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;ilee&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
    <span class="token function">SayYe</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Yeeeeeee&#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//对象类型可选值</span>
<span class="token keyword">function</span> <span class="token function">myAxios</span><span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token punctuation">{</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> method<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//---------接口---------interface</span>
<span class="token class-name"><span class="token keyword">interface</span></span> <span class="token constant">IP</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">SayName</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">IPt</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">SayTu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1<span class="token operator">:</span> <span class="token constant">IP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;ilee&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
    <span class="token function">SayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ilee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//接口继承</span>
<span class="token keyword">interface</span> <span class="token class-name">p2d</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token comment">//extends 前者继承后者的所有属性</span>
<span class="token keyword">interface</span> <span class="token class-name">p3d</span> <span class="token keyword">extends</span> <span class="token class-name">p2d</span> <span class="token punctuation">{</span>z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span> <span class="token comment">//简洁</span>
<span class="token comment">//等同于</span>
<span class="token keyword">interface</span> <span class="token class-name">p3dcp</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> pd<span class="token operator">:</span> p2d <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    y <span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> pd2<span class="token operator">:</span> p3d <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    z<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>

<span class="token comment">//---------元组---------Tuple</span>
<span class="token comment">//数组特例 确切知道包含多少元素</span>
<span class="token keyword">let</span> position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token comment">//不能多于两个元素</span>
<span class="token keyword">let</span> positionS<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>

<span class="token comment">//---------类型推论---------</span>
<span class="token comment">//TS中 没有指明类型的地方 TS的类型推论机制会帮助提供类型</span>
<span class="token comment">//常发生在 1、声明变量并初始化时 2、决定函数返回值时</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">function</span> <span class="token function">ty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// return 1</span>
    <span class="token comment">// return &#39;a&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//---------类型断言---------</span>
<span class="token keyword">const</span> alink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLAnchorElement
<span class="token comment">//另一种写法</span>
<span class="token keyword">const</span> alink1 <span class="token operator">=</span> <span class="token operator">&lt;</span>HTMLAnchorElement<span class="token operator">&gt;</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span>
alink<span class="token punctuation">.</span>href
alink1<span class="token punctuation">.</span>href

<span class="token comment">//---------字面量类型---------</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&#39;Hello TS&#39;</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">&#39;Hello TS&#39;</span>
<span class="token comment">//光标拖至两个变量上 可以发现str1的类型为string 而str2的类型为 &quot;Hello TS&quot;</span>
<span class="token comment">//原因 因为str1是一个变量(let) 它的值可以是任意字符串 所以类型为string</span>
<span class="token comment">//str2是一个常量(const) 它的值不能变化 只能是 &quot;Hello TS&quot; 所以它的类型为 &quot;Hello TS&quot;</span>
<span class="token comment">//这里的 &quot;Hello TS&quot; 就是字面量类型</span>
<span class="token comment">//某个特定的字符串也可以作为TS中的类型</span>
<span class="token keyword">const</span> str22<span class="token operator">:</span> <span class="token string">&#39;ilee&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;ilee&#39;</span> <span class="token comment">//改了后面的值会报错 类型和值必须一样</span>
<span class="token keyword">let</span> num1<span class="token operator">:</span> <span class="token number">18</span> <span class="token operator">=</span> <span class="token number">18</span>
<span class="token comment">//字面量类型配合 联合类型一起使用</span>
<span class="token comment">//用来表示一组明确的可选值列表</span>
<span class="token comment">//相比于string类型 使用字面量更精确严谨</span>

<span class="token comment">//---------枚举---------</span>
<span class="token comment">//类似于字面量加联合类型组合的功能</span>
<span class="token comment">//可以表示一组明确的可选值</span>
<span class="token comment">//定义一组命名常量</span>
<span class="token comment">//数字枚举有默认增长值</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>Up<span class="token punctuation">,</span> Down<span class="token punctuation">,</span> Left<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> Right<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">changeDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span><span class="token comment">//类似访问对象类型的值</span>

<span class="token comment">//字符串枚举 必须赋予初始值</span>
<span class="token keyword">enum</span> Ds <span class="token punctuation">{</span><span class="token constant">A</span><span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token constant">C</span><span class="token operator">=</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span>

<span class="token comment">//枚举不仅用作类型 还能够提供值</span>
<span class="token comment">//枚举类型会被编译为js代码</span>
<span class="token comment">//推荐使用字面量类型加联合类型组合的方式 相比于枚举更直观简洁高效</span>

<span class="token comment">//---------any类型---------</span>
<span class="token keyword">let</span> obja<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
obja<span class="token punctuation">.</span>add <span class="token operator">=</span> <span class="token number">10</span>
<span class="token function">obja</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> obja
<span class="token comment">//使用any类型 便失去typescript所有的类型保护优势 不推荐使用</span>
<span class="token comment">//可以临时使用any 来书写很长很复杂的类型</span>
<span class="token keyword">let</span> o
<span class="token keyword">function</span> <span class="token function">testf</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//当声明变量时不提供类型也不提供默认值 函数参数不加类型 都隐式具有any类型</span>

<span class="token comment">//---------typeof---------</span>
<span class="token comment">//可以在类型上下文中引用变量或属性的类型</span>
<span class="token keyword">let</span> pa <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">typeFormat</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">typeFormat</span><span class="token punctuation">(</span>pa<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">typeFormat2</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token keyword">typeof</span> pa<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> pa1 <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
<span class="token function">typeFormat2</span><span class="token punctuation">(</span>pa<span class="token punctuation">)</span>
<span class="token function">typeFormat</span><span class="token punctuation">(</span>pa1<span class="token punctuation">)</span>
<span class="token comment">//typeof获取变量的类型</span>
<span class="token comment">//只能用来查询变量或属性的类型</span>

<span class="token comment">//---------高级类型---------</span>
<span class="token comment">//class类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    gender<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
    <span class="token punctuation">}</span>
    <span class="token comment">//不能存在多个构造函数 不要为构造函数指定返回值</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&#39;ilee&#39;</span><span class="token punctuation">)</span>
_p<span class="token punctuation">.</span>age
_p<span class="token punctuation">.</span>gender
<span class="token comment">//class 不仅提供class的语法功能 也作为一种类型存在</span>

<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">=</span> <span class="token number">1</span>
    y<span class="token operator">=</span> <span class="token number">2</span>
    <span class="token function">scale</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">*=</span> n
        <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">*=</span> n
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _po <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
_po<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment">//class 的继承</span>
<span class="token comment">//第一种方式 继承父类</span>
<span class="token keyword">class</span> <span class="token class-name">PointKid</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    k<span class="token operator">=</span> <span class="token number">9</span>
    <span class="token function">coculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> _pok <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PointKid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
_pok<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
_pok<span class="token punctuation">.</span><span class="token function">coculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//第二种方式 实现接口</span>
<span class="token comment">// interface IP {</span>
<span class="token comment">//     name: string</span>
<span class="token comment">//     age: number</span>
<span class="token comment">//     SayName(val?: string): void</span>
<span class="token comment">// }该块代码已经在上面得到实现</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">IPK</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">IP</span></span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function">SayName</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sslee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token comment">//必须实现接口的所有方法和属性</span>

<span class="token comment">//类成员可见性</span>
<span class="token comment">//public protected private</span>
<span class="token comment">//多态 继承 封装 面向对象三大特性</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//public 默认可见性</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//受保护的 仅对所在类和子类(非实例对象 例如new A())</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span> <span class="token comment">//仅对实例对象不可见</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//私有的 只在当前类中可见 实例对象及子类都不可见</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">AK</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>aaa<span class="token comment">//protected 子类可以访问</span>
        <span class="token comment">// this.a 不可访问</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
_a<span class="token punctuation">.</span>aa
<span class="token comment">// _a.a</span>
<span class="token comment">// _a.aaa</span>

<span class="token comment">//只读属性</span>
<span class="token comment">//用来防止在构造函数之外对属性进行赋值</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">AKK</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> ag<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">22</span>
    <span class="token keyword">readonly</span> name <span class="token operator">=</span> <span class="token number">13</span> <span class="token comment">//变成字面量类型了</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ag <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// this.ag = 21 //因为有readonly修饰符 所以变成只读属性了</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//---------类型兼容性---------</span>
<span class="token keyword">let</span> _arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
_arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//TS是结构化类型系统</span>
<span class="token comment">//类型检查关注的是值所具有的形状</span>
<span class="token comment">//TS认为两个类型具有相同的值 便属于同一个类型</span>
<span class="token keyword">class</span> <span class="token class-name">Pt1</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Pt2</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> pt<span class="token operator">:</span> Pt1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pt2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Pt3</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token comment">//Pt3 的成员至少与Pt1相同 所以Pt1兼容Pt3 成员多的Pt3可以赋值给成员少的Pt1</span>
<span class="token keyword">let</span> _pt<span class="token operator">:</span> Pt1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pt3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// let _pt3: Pt3 = new Pt1() 成员少的不能赋值给成员多的</span>

<span class="token comment">//接口兼容性</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">PI1</span></span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">PI2</span></span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">PI3</span></span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token comment">// let _pi1: PI1</span>
<span class="token comment">// let _pi2: PI2 = _pi1 //报错 变量_pi1在使用前已经被分配</span>
<span class="token comment">// let _pi3: PI3</span>
<span class="token comment">// _pi2 = _pi3 //报错 变量_pi3在使用前已经被分配</span>

<span class="token comment">//</span>
<span class="token keyword">let</span> _pt3<span class="token operator">:</span> <span class="token constant">PI2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pt3</span>

<span class="token comment">//函数兼容性</span>
<span class="token comment">//需要考虑 1、参数个数 2、参数类型 3、返回值类型</span>
<span class="token comment">//参数少的可以赋值给参数多的</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">F1</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">F2</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token comment">// let f1: F1</span>
<span class="token comment">// let f2: F2 = f1 //报错 变量f1在使用前已经被分配</span>

<span class="token comment">//参数类型</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">F3</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> Pt1<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">F4</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> Pt3<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token comment">//Pt3的成员多于Pt1 所以Pt1作为参数可以赋值给参数多的Pt3</span>
<span class="token comment">// let f3: F3</span>
<span class="token comment">// let f4: F4</span>
<span class="token comment">// f4 = f3 //报错 变量f3在使用前已经被分配</span>

<span class="token comment">//返回值类型</span>

<span class="token comment">//---------交叉类型---------&amp;</span>
<span class="token comment">//类似于接口继承 用于组合多个类型为一个类型</span>
<span class="token keyword">type</span> <span class="token class-name">PIx</span> <span class="token operator">=</span> <span class="token constant">PI1</span> <span class="token operator">&amp;</span> <span class="token constant">PI3</span>
<span class="token comment">//同时具备这两个接口的所有属性类型</span>
<span class="token comment">//相当于</span>
<span class="token keyword">type</span> <span class="token class-name">PIxb</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> _obj<span class="token operator">:</span> PIx <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    z<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>

<span class="token comment">//交叉类型和接口继承的对比</span>
<span class="token punctuation">{</span><span class="token comment">//包裹一下 没其他意思QAQ</span>
    <span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
        <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
        <span class="token comment">// fn: (val: string) =&gt; string //报错 同名属性之间 处理类型冲突的方式不同</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">interface</span> <span class="token class-name">Bb</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">&amp;</span> Bb
    <span class="token comment">//交叉类型不会报错</span>
    <span class="token comment">//相当于 (简单理解)</span>
    <span class="token comment">// fn: (val: string | number) =&gt; string</span>
<span class="token punctuation">}</span>

<span class="token comment">//---------泛型---------</span>
<span class="token comment">//保证类型安全的前提下 让函数与多种类型一起工作 从而实现复用 常用于函数 接口 class中</span>
<span class="token keyword">function</span> <span class="token function">id</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val
<span class="token punctuation">}</span>
<span class="token comment">//改造让该函数接受任意类型 但是失去了TS的类型保护</span>
<span class="token keyword">function</span> <span class="token function">idb</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val
<span class="token punctuation">}</span>
<span class="token comment">//改造为泛型函数</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">idm</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>val<span class="token operator">:</span> Type<span class="token punctuation">)</span><span class="token operator">:</span> Type <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val
<span class="token punctuation">}</span>

<span class="token keyword">const</span> idmnr <span class="token operator">=</span> <span class="token generic-function"><span class="token function">idm</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> idmsr <span class="token operator">=</span> <span class="token generic-function"><span class="token function">idm</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;ilee&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//可以省略&lt;Type&gt;</span>
<span class="token comment">//可以根据用户传入的参数来自动判断Type的类型</span>
<span class="token comment">//类型参数推断机制</span>
<span class="token keyword">let</span> idmsrb <span class="token operator">=</span> <span class="token function">idm</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//Type变成字面量类型了</span>

<span class="token comment">//泛型约束</span>
<span class="token comment">//有些类型不具有特定属性 会导致代码异常 所以需要添加约束来收缩了类型</span>
<span class="token comment">//例如val.length属性 不一定每种类型都有 例如number就没有</span>
<span class="token keyword">interface</span> <span class="token class-name">Ilength</span> <span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">idys</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type <span class="token keyword">extends</span> Ilength<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>val<span class="token operator">:</span> Type<span class="token punctuation">)</span><span class="token operator">:</span> Type <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> val
<span class="token punctuation">}</span>

<span class="token comment">// idys(1) //报错 number没有length属性</span>
<span class="token function">idys</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//keyof</span>
<span class="token comment">//接收一个对象类型 生成其键的名称(可能是字符串或数字)的联合类型</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getProp</span><span class="token generic class-name"><span class="token operator">&lt;</span>Type<span class="token punctuation">,</span> Key <span class="token keyword">extends</span> <span class="token keyword">keyof</span> Type<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> Type<span class="token punctuation">,</span> key<span class="token operator">:</span> Key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> _ps <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
<span class="token function">getProp</span><span class="token punctuation">(</span>_ps<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
<span class="token function">getProp</span><span class="token punctuation">(</span>_ps<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//在此示例中 keyof Type获取的是_ps对象的所有键的联合类型 &#39;name | age&#39;</span>

<span class="token comment">//泛型接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Ifx<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token function-variable function">id</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> Type<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Type
    <span class="token function-variable function">ids</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Type<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">//Js数组在Ts中就是一个泛型接口</span>
arrStr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//string数组</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//number数组</span>

<span class="token comment">//泛型类</span>
<span class="token keyword">class</span> <span class="token class-name">fxC<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    val<span class="token operator">:</span> Type
    <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> Type<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Type
<span class="token punctuation">}</span>

<span class="token comment">//---------索引签名类型---------</span>
<span class="token keyword">interface</span> <span class="token class-name">AnyObject</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> _aobj<span class="token operator">:</span> AnyObject <span class="token operator">=</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MyArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myarr<span class="token operator">:</span> MyArray<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span>

<span class="token comment">//---------映射类型---------</span>
<span class="token comment">//基于旧类型创建新类型(对象类型)</span>
<span class="token keyword">type</span> <span class="token class-name">PropKeys</span> <span class="token operator">=</span> <span class="token string">&#39;X&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Y&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Z&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">Type1</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token comment">//映射类型简写</span>
<span class="token keyword">type</span> <span class="token class-name">Type2</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>Key <span class="token keyword">in</span> PropKeys<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token comment">//映射类型只能在类型别名中使用 不能在接口中使用</span>

<span class="token keyword">type</span> <span class="token class-name">Props</span> <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> c<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Type3</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>key <span class="token keyword">in</span> <span class="token keyword">keyof</span> Props<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span> <span class="token comment">//keyof Props 得到的是 &#39;a&#39; | &#39;b&#39; | &#39;c&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">Type4<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Tp4</span> <span class="token operator">=</span> Type4<span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span>
<span class="token keyword">let</span> _tp4<span class="token operator">:</span> Tp4 <span class="token operator">=</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TypeA</span> <span class="token operator">=</span> Props<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">TypeB</span> <span class="token operator">=</span> Props<span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">TypeBC</span> <span class="token operator">=</span> Props<span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token class-name">TypeABC</span> <span class="token operator">=</span> Props<span class="token punctuation">[</span><span class="token keyword">keyof</span> Props<span class="token punctuation">]</span>

<span class="token comment">//typescript 类型声明文件</span>
<span class="token comment">/*
.ts文件：
    既包含类型信息又包含可执行代码
    可以被编译为.js文件 执行代码
    用于编写程序代码的地方
.d.ts文件：
    只包含类型信息的类型声明文件
    不会生成.js文件 仅用于提供类型信息
    为Js提供类型信息
*/</span>

<span class="token comment">//一般包都含有*.d.ts文件 提供类型声明</span>
<span class="token comment">//若没有 则需要去typescript官方网站查看有没有提供类型声明文件</span>
<span class="token comment">//有的话 则执行npm/yarn命令下载类型声明文件 npm i -D @type/*</span>

<span class="token comment">//创建自己的类型声明文件 1、项目内共享类型 2、为已有JS文件提供类型声明</span>
<span class="token comment">//如果多个.ts文件中都用到同一个类型 此时可以创建.d.ts文件提供该类型 实现类型共享</span>
<span class="token comment">//步骤 创建index.d.ts 类型声明文件</span>
<span class="token comment">//使用export导出</span>
<span class="token comment">//在需要使用共享类型的.ts文件中 通过import导入即可</span>


<span class="token comment">//在导入.js文件 TS自动加载与.js同名的.d.ts文件 以提供类型声明</span>
<span class="token comment">//declare关键字 为其它地方(比如.js文件)已存在的变量声明类型 而不是创建一个新的变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很久之前学的，平时也不用，记不住了就看看...</p><p>🤡</p>`,5),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","tsStart.html.vue"]]);export{k as default};
