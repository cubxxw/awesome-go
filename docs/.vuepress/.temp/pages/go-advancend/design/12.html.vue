<template><div><ul>
<li><a href="https://github.com/cubxxw/awesome-cs-cloudnative-blockchain" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第12节-桥接模式" tabindex="-1"><a class="header-anchor" href="#第12节-桥接模式" aria-hidden="true">#</a> 第12节 桥接模式</h1>
<div><a href = '11.md' style='float:left'>⬆️上一节🔗</a><a href = '13.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕Java和Golang的设计模式，设计模式介绍、创建者模式、结构型模式、行为型模式。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h2>
<p>在Go语言中，桥接模式（Bridge Pattern）是一种结构型设计模式。它允许你将抽象部分和实现部分分离开来，使它们能够独立地变化。</p>
<p>这种模式的设计关键思想是<strong>使用组合而不是继承</strong>来组织代码，Golang 中通过接口和结构体实现。</p>
<h2 id="简单实现" tabindex="-1"><a class="header-anchor" href="#简单实现" aria-hidden="true">#</a> 简单实现</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Implementor <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">OperationImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 组合</span>
<span class="token keyword">type</span> Abstraction <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    imp Implementor
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Abstraction<span class="token punctuation">)</span> <span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>imp<span class="token punctuation">.</span><span class="token function">OperationImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteImplementorA <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>imp <span class="token operator">*</span>ConcreteImplementorA<span class="token punctuation">)</span> <span class="token function">OperationImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"ConcreteImplementorA operation"</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteImplementorB <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>imp <span class="token operator">*</span>ConcreteImplementorB<span class="token punctuation">)</span> <span class="token function">OperationImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"ConcreteImplementorB operation"</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    abstraction <span class="token operator">:=</span> <span class="token operator">&amp;</span>Abstraction<span class="token punctuation">{</span><span class="token operator">&amp;</span>ConcreteImplementorA<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>abstraction<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    abstraction<span class="token punctuation">.</span>imp <span class="token operator">=</span> <span class="token operator">&amp;</span>ConcreteImplementorB<span class="token punctuation">{</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>abstraction<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们定义了一个抽象类<code v-pre>Abstraction</code>及其实现类<code v-pre>ConcreteImplementorA</code>和<code v-pre>ConcreteImplementorB</code>。抽象类<code v-pre>Abstraction</code>包含一个对实现类<code v-pre>Implementor</code>的引用，并定义了一个<code v-pre>Operation()</code>方法，该方法委托给实现类的<code v-pre>OperationImp()</code>方法执行。这样，在使用时，可以根据需要灵活地切换实现类。</p>
<p>在<code v-pre>main()</code>函数中，我们首先创建一个指向<code v-pre>ConcreteImplementorA</code>的指针并调用<code v-pre>Operation()</code>方法。然后，我们将实现类更改为<code v-pre>ConcreteImplementorB</code>，并再次调用<code v-pre>Operation()</code>方法来验证实现的灵活性。</p>
<h2 id="逻辑实现" tabindex="-1"><a class="header-anchor" href="#逻辑实现" aria-hidden="true">#</a> 逻辑实现</h2>
<p>我们如果需要对某个物品和颜色进行操作，使用 桥接可以了将他们之间联系起来</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">// 抽象部分 - 形状</span>
<span class="token keyword">type</span> Shape <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现部分 - 颜色 </span>
<span class="token keyword">type</span> Color <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">ApplyColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现部分 - 红色</span>
<span class="token keyword">type</span> RedColor <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RedColor<span class="token punctuation">)</span> <span class="token function">ApplyColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Applying red color"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// .... 其他颜色</span>


<span class="token comment">// 扩展抽象部分 - 圆形</span>
<span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    color Color <span class="token comment">// 引用实现部分颜色</span>
<span class="token punctuation">}</span>

<span class="token comment">// ... 其他形状</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Drawing circle"</span><span class="token punctuation">)</span>
    s<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">ApplyColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用实现部分的方法</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    circle <span class="token operator">:=</span> <span class="token operator">&amp;</span>Circle<span class="token punctuation">{</span><span class="token operator">&amp;</span>RedColor<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    circle<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们定义了一个抽象类<code v-pre>Shape</code>及其实现类<code v-pre>Circle</code>。抽象类<code v-pre>Shape</code>规定了形状应有的行为<code v-pre>Draw()</code>，并包含一个对实现类<code v-pre>Color</code>的引用。</p>
<p>我们还定义了实现类<code v-pre>RedColor</code>，并实现了它的方法<code v-pre>ApplyColor()</code>。然后，我们扩展了抽象类<code v-pre>Shape</code>，定义了一个圆形类<code v-pre>Circle</code>，它继承了<code v-pre>Shape</code>，并且它的行为<code v-pre>Draw()</code>中调用了实现类的<code v-pre>ApplyColor()</code>方法。</p>
<p>在<code v-pre>main()</code>函数中，我们创建了一个指向<code v-pre>Circle</code>的指针，并将其颜色设置为<code v-pre>RedColor</code>。然后，我们调用<code v-pre>Draw()</code>方法，该方法输出了“Drawing circle”并调用了<code v-pre>RedColor</code>实现类的方法。</p>
<h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2>
<p><strong>优点：</strong></p>
<ol>
<li>提高代码重用性和灵活性：适配器模式可以将现有的代码与新的代码组合在一起，从而提高代码的重用性和灵活性。</li>
<li>简化代码实现：适配器模式可以隐藏复杂的逻辑，简化代码实现过程。</li>
<li>提高系统可靠性：适配器模式可以降低系统间的耦合度，增强系统的可靠性和稳定性。</li>
</ol>
<p><strong>缺点：</strong></p>
<ol>
<li>过多使用适配器会增加系统复杂性：如果过多地使用适配器模式，会增加系统的复杂性，降低代码的可读性和可维护性。</li>
<li>增加系统运行时间和空间开销：适配器模式需要进行额外的逻辑处理，因此会增加系统的运行时间和空间开销。</li>
<li>可能存在适配器不兼容问题：由于适配器模式的实现方式不同，可能存在适配器不兼容问题。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '11.md' style='float:left'>⬆️上一节🔗</a><a href = '13.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


