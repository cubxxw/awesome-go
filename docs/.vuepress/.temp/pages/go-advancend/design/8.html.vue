<template><div><ul>
<li><a href="https://github.com/cubxxw/awesome-cs-cloudnative-blockchain" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第8节-建造者模式" tabindex="-1"><a class="header-anchor" href="#第8节-建造者模式" aria-hidden="true">#</a> 第8节 建造者模式</h1>
<div><a href = '7.md' style='float:left'>⬆️上一节🔗</a><a href = '9.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕Java和Golang的设计模式，设计模式介绍、创建者模式、结构型模式、行为型模式。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="建造者模式定义" tabindex="-1"><a class="header-anchor" href="#建造者模式定义" aria-hidden="true">#</a> 建造者模式定义</h2>
<p>建造者模式是一种创建者设计模式，它允许您创建具有不同配置的对象。这可以通过将对象的构造细节隐藏在一个单独的对象中来实现，该对象负责确定应该使用哪些参数，并返回正确配置的对象。</p>
<p>在Go语言中，可以使用类似于以下示例代码的结构实现建造者模式：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    FirstName <span class="token builtin">string</span>
    LastName  <span class="token builtin">string</span>
    Age       <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PersonBuilder <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    person Person
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetFirstName</span><span class="token punctuation">(</span>firstName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>PersonBuilder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>FirstName <span class="token operator">=</span> firstName
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetLastName</span><span class="token punctuation">(</span>lastName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>PersonBuilder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>LastName <span class="token operator">=</span> lastName
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetAge</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>PersonBuilder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>Age <span class="token operator">=</span> age
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>person
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，<code v-pre>PersonBuilder</code> 结构用于存储正在构建的 <code v-pre>Person</code> 对象，以及设置其属性值的方法。每个方法都返回 <code v-pre>*PersonBuilder</code>，这使得可以方便地链式调用多个方法，以在单个语句中设置多个属性。</p>
<p>最后，<code v-pre>Build</code> 方法返回正确配置的 <code v-pre>Person</code> 对象的指针。这使得可以使用单个表达式创建并初始化 <code v-pre>Person</code> 对象，如下所示：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>person <span class="token operator">:=</span> PersonBuilder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span>
    <span class="token function">SetFirstName</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">SetLastName</span><span class="token punctuation">(</span><span class="token string">"Doe"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用此方法，可以使用清晰明了的语法创建和配置复杂的对象。</p>
<h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2>
<p>以下是用 Go语言 编译出来的完整代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    FirstName <span class="token builtin">string</span>
    LastName  <span class="token builtin">string</span>
    Age       <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PersonBuilder <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    person Person
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetFirstName</span><span class="token punctuation">(</span>firstName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>PersonBuilder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>FirstName <span class="token operator">=</span> firstName
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetLastName</span><span class="token punctuation">(</span>lastName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>PersonBuilder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>LastName <span class="token operator">=</span> lastName
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetAge</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>PersonBuilder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>Age <span class="token operator">=</span> age
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>person
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建并初始化 Person 对象</span>
    person <span class="token operator">:=</span> PersonBuilder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span>
        <span class="token function">SetFirstName</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">SetLastName</span><span class="token punctuation">(</span><span class="token string">"Doe"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>FirstName<span class="token punctuation">,</span> person<span class="token punctuation">.</span>LastName<span class="token punctuation">,</span> <span class="token string">"is"</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>Age<span class="token punctuation">,</span> <span class="token string">"years old."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么要使用构建者模式" tabindex="-1"><a class="header-anchor" href="#为什么要使用构建者模式" aria-hidden="true">#</a> 为什么要使用构建者模式</h2>
<p>使用构建者模式可以更好的帮助我们管理代码，所以，有以下的优点：</p>
<p><strong>简化对象创建流程</strong></p>
<blockquote>
<p>在创建复杂对象时，有时需要执行多个步骤，例如设置属性或调用其他方法。使用构建者模式可以将这些步骤封装到单独的对象中，从而简化对象创建流程。</p>
</blockquote>
<p><strong>隐藏对象创建过程</strong></p>
<blockquote>
<p>通过将对象的创建细节隐藏在一个单独的对象中，构建者模式可以降低耦合度并提高代码的可维护性。</p>
</blockquote>
<p><strong>允许更好的控制对象创建</strong></p>
<blockquote>
<p>使用构建者模式，您可以指定要创建的对象的属性和配置选项。这使得可以轻松地扩展和修改对象创建过程。</p>
</blockquote>
<p><strong>支持链式调用</strong></p>
<blockquote>
<p>使用构建者模式可以支持链式调用语法，这使得可以在单个表达式中设置多个属性或调用多个方法。</p>
</blockquote>
<h2 id="深入刨析建造者模式" tabindex="-1"><a class="header-anchor" href="#深入刨析建造者模式" aria-hidden="true">#</a> 深入刨析建造者模式</h2>
<p>建造者模式很简单，但是在合适的场景中选择并且使用很难。</p>
<p>它可以将复杂的对象的构建过程与表示分离开来，使得构建过程可以有不同的表示。</p>
<p><strong>简单来说，构建者模式就是将一个复杂的对象的构建过程封装起来，使得这个过程可以有不同的表示方法。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    FirstName <span class="token builtin">string</span>
    LastName  <span class="token builtin">string</span>
    Age       <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Builder <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">SetFirstName</span><span class="token punctuation">(</span>firstName <span class="token builtin">string</span><span class="token punctuation">)</span> Builder
    <span class="token function">SetLastName</span><span class="token punctuation">(</span>lastName <span class="token builtin">string</span><span class="token punctuation">)</span> Builder
    <span class="token function">SetAge</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> Builder
    <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PersonBuilder <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    person Person
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetFirstName</span><span class="token punctuation">(</span>firstName <span class="token builtin">string</span><span class="token punctuation">)</span> Builder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>FirstName <span class="token operator">=</span> firstName
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetLastName</span><span class="token punctuation">(</span>lastName <span class="token builtin">string</span><span class="token punctuation">)</span> Builder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>LastName <span class="token operator">=</span> lastName
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">SetAge</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> Builder <span class="token punctuation">{</span>
    pb<span class="token punctuation">.</span>person<span class="token punctuation">.</span>Age <span class="token operator">=</span> age
    <span class="token keyword">return</span> pb
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>pb <span class="token operator">*</span>PersonBuilder<span class="token punctuation">)</span> <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>person
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建并初始化 Person 对象</span>
    person <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>PersonBuilder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">SetFirstName</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">SetLastName</span><span class="token punctuation">(</span><span class="token string">"Doe"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>FirstName<span class="token punctuation">,</span> person<span class="token punctuation">.</span>LastName<span class="token punctuation">,</span> <span class="token string">"is"</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>Age<span class="token punctuation">,</span> <span class="token string">"years old."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '7.md' style='float:left'>⬆️上一节🔗</a><a href = '9.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


