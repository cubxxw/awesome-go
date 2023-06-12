<template><div><ul>
<li><a href="https://github.com/cubxxw/awesome-cs-cloudnative-blockchain" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第14节-装饰器模式" tabindex="-1"><a class="header-anchor" href="#第14节-装饰器模式" aria-hidden="true">#</a> 第14节 装饰器模式</h1>
<div><a href = '13.md' style='float:left'>⬆️上一节🔗</a><a href = '15.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕Java和Golang的设计模式，设计模式介绍、创建者模式、结构型模式、行为型模式。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h2>
<p>装饰模式(Decorator Pattern)：动态地给一个对象增加一些额外的职责，就增加对象功能来说，装饰模式比生成子类实现更为灵活。装饰模式是一种对象结构型模式。</p>
<p><img src="http://sm.nsddd.top/sm202305142043595.png" alt="image-20230514204330417"></p>
<blockquote>
<p>图片来自 https://www.yuque.com/aceld/lfhu8y/nzlggd</p>
</blockquote>
<p>以上图为例，一开始有个手机（裸机Phone类），如果需要不断的为这个Phone增添某个功能从而变成一个新功能的Phone，就需要一个装饰器的类，来动态的给一个类额外添加一个指定的功能，而生成另一个类，但原先的类又没有改变，不影响原有系统的稳定。</p>
<p>在装饰器模式中，“裸机”、“有贴膜的手机”、“有手机壳的手机”、“有手机壳&amp;贴膜的手机”都是一个构件。
“贴膜装饰器”、“手机壳装饰器”是装饰器也是一个构件。</p>
<h2 id="装饰模式中的角色和职责" tabindex="-1"><a class="header-anchor" href="#装饰模式中的角色和职责" aria-hidden="true">#</a> 装饰模式中的角色和职责</h2>
<p><strong>Component（抽象构件）</strong>：它是具体构件和抽象装饰类的共同父类，声明了在具体构件中实现的业务方法，它的引入可以使客户端以一致的方式处理未被装饰的对象以及装饰之后的对象，实现客户端的透明操作。</p>
<p><strong>ConcreteComponent（具体构件）</strong>：它是抽象构件类的子类，用于定义具体的构件对象，实现了在抽象构件中声明的方法，装饰器可以给它增加额外的职责（方法）。
其标准的类图如下所示：</p>
<p><img src="http://sm.nsddd.top/sm202305142047537.png" alt="image-20230514204708448"></p>
<blockquote>
<p>图片来自 https://www.yuque.com/aceld/lfhu8y/nzlggd</p>
</blockquote>
<p>装饰器模式是一种常用的设计模式，它允许我们动态地为一个对象添加新的功能。在Go语言中，我们可以使用函数和闭包来实现装饰器模式。</p>
<p>在这种模式中，我们定义一个函数，它接收一个函数作为参数，并返回一个新的函数。新的函数可以在执行原始函数之前或之后执行一些额外的逻辑，或者替换原始函数的返回值。</p>
<p>下面是一个简单的例子，通过装饰器模式来记录函数的执行时间：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">timeTrack</span><span class="token punctuation">(</span>start time<span class="token punctuation">.</span>Time<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s took %s"</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">runSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token function">timeTrack</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"runSomething"</span><span class="token punctuation">)</span>
    <span class="token comment">// 执行一些操作</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，<code v-pre>timeTrack</code> 函数是一个装饰器函数，它接收函数的开始时间和名称作为参数，并在函数执行结束时打印出该函数的执行时间。<code v-pre>runSomething</code> 函数通过 <code v-pre>defer</code> 关键字来调用 <code v-pre>timeTrack</code> 函数，从而实现了装饰器模式。</p>
<p>除了记录执行时间，装饰器模式还可以用于实现其他功能，例如重试机制、缓存等。在Go语言中，使用装饰器模式可以让我们的代码更加灵活和易于维护。</p>
<p>总结一下，装饰器模式是一种常用的设计模式，它允许我们动态地为一个对象添加新的功能。在Go语言中，我们可以使用函数和闭包来实现装饰器模式，从而让我们的代码更加灵活和易于维护。</p>
<h2 id="代码的实现逻辑" tabindex="-1"><a class="header-anchor" href="#代码的实现逻辑" aria-hidden="true">#</a> 代码的实现逻辑</h2>
<p>接下来按照上述手机案例，结合装饰器的设计模式特点，得到对应案例的类图，如下：</p>
<p><img src="http://sm.nsddd.top/sm202305142052959.png" alt="image-20230514205225859"></p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">// ---------- 抽象层 ----------</span>
<span class="token comment">//抽象的构件</span>
<span class="token keyword">type</span> Phone <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//构件的功能</span>
<span class="token punctuation">}</span>

<span class="token comment">//装饰器基础类（该类本应该为interface，但是Golang interface语法不可以有成员属性）</span>
<span class="token keyword">type</span> Decorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	phone Phone
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Decorator<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token comment">// ----------- 实现层 -----------</span>
<span class="token comment">// 具体的构件</span>
<span class="token keyword">type</span> HuaWei <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>hw <span class="token operator">*</span>HuaWei<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"秀出了HuaWei手机"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> XiaoMi <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>xm <span class="token operator">*</span>XiaoMi<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"秀出了XiaoMi手机"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体的装饰器类</span>
<span class="token keyword">type</span> MoDecorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Decorator   <span class="token comment">//继承基础装饰器类(主要继承Phone成员属性)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>md <span class="token operator">*</span>MoDecorator<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	md<span class="token punctuation">.</span>phone<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//调用被装饰构件的原方法</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"贴膜的手机"</span><span class="token punctuation">)</span> <span class="token comment">//装饰额外的方法</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewMoDecorator</span><span class="token punctuation">(</span>phone Phone<span class="token punctuation">)</span> Phone <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>MoDecorator<span class="token punctuation">{</span>Decorator<span class="token punctuation">{</span>phone<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> KeDecorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Decorator   <span class="token comment">//继承基础装饰器类(主要继承Phone成员属性)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>kd <span class="token operator">*</span>KeDecorator<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	kd<span class="token punctuation">.</span>phone<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"手机壳的手机"</span><span class="token punctuation">)</span> <span class="token comment">//装饰额外的方法</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewKeDecorator</span><span class="token punctuation">(</span>phone Phone<span class="token punctuation">)</span> Phone <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>KeDecorator<span class="token punctuation">{</span>Decorator<span class="token punctuation">{</span>phone<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// ------------ 业务逻辑层 ---------</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> huawei Phone
	huawei <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>HuaWei<span class="token punctuation">)</span>
	huawei<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	 <span class="token comment">//调用原构件方法</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"---------"</span><span class="token punctuation">)</span>
	<span class="token comment">//用贴膜装饰器装饰，得到新功能构件</span>
	<span class="token keyword">var</span> moHuawei Phone
	moHuawei <span class="token operator">=</span> <span class="token function">NewMoDecorator</span><span class="token punctuation">(</span>huawei<span class="token punctuation">)</span> <span class="token comment">//通过HueWei ---> MoHuaWei</span>
	moHuawei<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//调用装饰后新构件的方法</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"---------"</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> keHuawei Phone
	keHuawei <span class="token operator">=</span> <span class="token function">NewKeDecorator</span><span class="token punctuation">(</span>huawei<span class="token punctuation">)</span> <span class="token comment">//通过HueWei ---> KeHuaWei</span>
	keHuawei<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"---------"</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> keMoHuaWei Phone
	keMoHuaWei <span class="token operator">=</span> <span class="token function">NewMoDecorator</span><span class="token punctuation">(</span>keHuawei<span class="token punctuation">)</span> <span class="token comment">//通过KeHuaWei ---> KeMoHuaWei</span>
	keMoHuaWei<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>秀出了HuaWei手机
---------
秀出了HuaWei手机
贴膜的手机
---------
秀出了HuaWei手机
手机壳的手机
---------
秀出了HuaWei手机
手机壳的手机
贴膜的手机
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3>
<ul>
<li>装饰器模式通过将功能分离到不同的装饰器中，使得代码更加灵活和易于维护。</li>
<li>可以在不修改原始对象的情况下动态地为其添加新的功能。</li>
<li>可以通过组合不同的装饰器来实现不同的功能组合。</li>
</ul>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3>
<ul>
<li>由于装饰器模式增加了许多小类和对象，因此会增加系统的复杂性。</li>
<li>可能会导致过多的装饰器嵌套，使得代码难以理解和维护。</li>
<li>如果装饰器和原始对象的接口不一致，可能需要额外的适配器代码来实现兼容性。</li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '13.md' style='float:left'>⬆️上一节🔗</a><a href = '15.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


