<template><div><ul>
<li><a href="https://github.com/cubxxw/awesome-cs-cloudnative-blockchain" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第10节-原型模式" tabindex="-1"><a class="header-anchor" href="#第10节-原型模式" aria-hidden="true">#</a> 第10节 原型模式</h1>
<div><a href = '9.md' style='float:left'>⬆️上一节🔗</a><a href = '11.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕Java和Golang的设计模式，设计模式介绍、创建者模式、结构型模式、行为型模式。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="way" tabindex="-1"><a class="header-anchor" href="#way" aria-hidden="true">#</a> way</h2>
<p>当我们需要创建一个新对象时，可以使用原型模式。在该模式中，创建新对象的过程是通过<strong>克隆现有对象</strong>而不是通过实例化构造函数来完成的。这种方式可以提高对象创建的效率和灵活性，避免了每次都进行重复的初始化过程。</p>
<p><strong>使用场景：</strong></p>
<ol>
<li>当创建新对象的过程非常复杂、耗时或者需要大量资源时，可以使用原型模式来提高效率。</li>
<li>当需要创建多个类型相同但属性值有所不同的对象时，可以使用原型模式来避免重复的初始化过程。</li>
<li>当希望代码更加灵活、可扩展时，可以使用原型模式来动态生成新对象。</li>
</ol>
<p>需要注意的是，当使用原型模式时，必须确保原始对象与副本对象之间是相互独立的，即修改一个对象的属性值不应该影响到其他对象。</p>
<p>在 Golang 中，原型模式的实现需要满足以下要素：</p>
<ol>
<li>抽象原型角色：定义用于复制现有对象的Clone()方法。</li>
<li>具体原型角色：实现抽象原型角色中的Clone()方法，并定义自己的属性和方法。</li>
<li>客户端角色：使用具体原型角色中的Clone()方法来复制对象，并进行相关操作。</li>
</ol>
<h2 id="实现方法" tabindex="-1"><a class="header-anchor" href="#实现方法" aria-hidden="true">#</a> 实现方法</h2>
<p>在Go语言中，原型模式可以通过实现一个 <code v-pre>Clone()</code> 方法来完成。该方法会返回当前对象的一个副本，其属性值与原始对象相同。具体实现方式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Prototype <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Prototype
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcretePrototype <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// 属性定义</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Prototype <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcretePrototype<span class="token punctuation">{</span>
        <span class="token comment">// 属性赋值</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们定义了一个<code v-pre>Prototype</code>接口，其中包含一个<code v-pre>Clone()</code>方法。然后我们定义了一个具体的实现类ConcretePrototype，它包含了一些属性。在Clone()方法中，我们创建了一个新的<code v-pre>ConcretePrototype</code>对象，并将其属性值设置为与原始对象相同。</p>
<p>当需要创建新对象时，我们可以直接调用原始对象的Clone()方法，以获得一个与原始对象相同的副本。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> original <span class="token operator">=</span> <span class="token operator">&amp;</span>ConcretePrototype<span class="token punctuation">{</span>
    <span class="token comment">// 初始属性值</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> copy1 <span class="token operator">=</span> original<span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span>
<span class="token keyword">var</span> copy2 <span class="token operator">=</span> original<span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们首先创建了一个原始对象original。然后我们使用原始对象的Clone()方法来创建两个副本copy1和copy2，它们的属性值与原始对象相同。</p>
<h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">// 抽象原型角色：声明用于复制自己的方法</span>
<span class="token keyword">type</span> Prototype <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Prototype
<span class="token punctuation">}</span>

<span class="token comment">// 具体原型角色：实现Clone()方法并定义自己的属性和方法</span>
<span class="token keyword">type</span> ConcretePrototype <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>cp <span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Prototype <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>ConcretePrototype<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> cp<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  cp<span class="token punctuation">.</span>age<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> p<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span> <span class="token function">SetName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span> <span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> p<span class="token punctuation">.</span>age
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span> <span class="token function">SetAge</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token comment">// 客户端角色：调用具体原型角色的Clone()方法来复制对象，并进行相关操作</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 我们只需要调用一次构造方法，后面都是复制的</span>
    original <span class="token operator">:=</span> <span class="token operator">&amp;</span>ConcretePrototype<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"Original"</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
    copy1 <span class="token operator">:=</span> original<span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span>
    copy2 <span class="token operator">:=</span> original<span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>ConcretePrototype<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Original name: %s, age: %d\n"</span><span class="token punctuation">,</span> original<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> original<span class="token punctuation">.</span><span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Copy 1 name: %s, age: %d\n"</span><span class="token punctuation">,</span> copy1<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> copy1<span class="token punctuation">.</span><span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Copy 2 name: %s, age: %d\n"</span><span class="token punctuation">,</span> copy2<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> copy2<span class="token punctuation">.</span><span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    copy1<span class="token punctuation">.</span><span class="token function">SetName</span><span class="token punctuation">(</span><span class="token string">"Copy 1"</span><span class="token punctuation">)</span>
    copy2<span class="token punctuation">.</span><span class="token function">SetName</span><span class="token punctuation">(</span><span class="token string">"Copy 2"</span><span class="token punctuation">)</span>
    copy1<span class="token punctuation">.</span><span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
    copy2<span class="token punctuation">.</span><span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Original name: %s, age: %d\n"</span><span class="token punctuation">,</span> original<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> original<span class="token punctuation">.</span><span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Copy 1 name: %s, age: %d\n"</span><span class="token punctuation">,</span> copy1<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> copy1<span class="token punctuation">.</span><span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Copy 2 name: %s, age: %d\n"</span><span class="token punctuation">,</span> copy2<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> copy2<span class="token punctuation">.</span><span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token punctuation">.</span><span class="token operator">/</span>main
Original name<span class="token punctuation">:</span> Original<span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span>
Copy <span class="token number">1</span> name<span class="token punctuation">:</span> Original<span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span>
Copy <span class="token number">2</span> name<span class="token punctuation">:</span> Original<span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span>
Original name<span class="token punctuation">:</span> Original<span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span>
Copy <span class="token number">1</span> name<span class="token punctuation">:</span> Copy <span class="token number">1</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">20</span>
Copy <span class="token number">2</span> name<span class="token punctuation">:</span> Copy <span class="token number">2</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2>
<ol>
<li>提高对象创建的效率：使用原型模式可以避免每次都进行重复的初始化过程，从而提高对象创建的效率。</li>
<li>提高代码灵活性和可扩展性：通过动态生成新对象，原型模式可以使代码更加灵活和可扩展。</li>
<li>简化对象创建的过程：使用原型模式可以将对象创建的过程简化为复制现有对象，省去了繁琐的构造函数实现。</li>
<li>避免对原始对象的修改：在使用原型模式时，每个副本对象都是相互独立的，修改一个对象的属性值不会影响到其他对象。</li>
<li>方便动态获取新对象的方式：使用原型模式可以方便地根据需要动态生成新对象，无需预先定义。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '9.md' style='float:left'>⬆️上一节🔗</a><a href = '11.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/go-advancend/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


