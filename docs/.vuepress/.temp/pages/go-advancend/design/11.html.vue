<template><div><ul>
<li><a href="https://github.com/cubxxw/awesome-cs-cloudnative-blockchain" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第11节-结构型模式-适配器模式" tabindex="-1"><a class="header-anchor" href="#第11节-结构型模式-适配器模式" aria-hidden="true">#</a> 第11节 结构型模式（适配器模式）</h1>
<div><a href = '10.md' style='float:left'>⬆️上一节🔗</a><a href = '12.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕Java和Golang的设计模式，设计模式介绍、创建者模式、结构型模式、行为型模式。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式" aria-hidden="true">#</a> 结构型模式</h2>
<table>
<thead>
<tr>
<th>模式名称</th>
<th>模式名称</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>结构型模式 Structural Pattern （7）</td>
<td>适配器模式 ★★★★☆</td>
<td>将一个类的接口转换成客户希望的另外一个接口。使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</td>
</tr>
<tr>
<td>桥接模式 ★★★☆☆</td>
<td>将抽象部分与实际部分分离，使它们都可以独立的变化。</td>
<td></td>
</tr>
<tr>
<td>组合模式 ★★☆☆☆</td>
<td>将对象组合成树形结构以表示“部分--整体”的层次结构。使得用户对单个对象和组合对象的使用具有一致性。</td>
<td></td>
</tr>
<tr>
<td>装饰模式 ★★★☆☆</td>
<td>动态的给一个对象添加一些额外的职责。就增加功能来说，此模式比生成子类更为灵活。</td>
<td></td>
</tr>
<tr>
<td>外观模式 ★★★★★</td>
<td>为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。</td>
<td></td>
</tr>
<tr>
<td>享元模式 ★☆☆☆☆</td>
<td>以共享的方式高效的支持大量的细粒度的对象。</td>
<td></td>
</tr>
<tr>
<td>代理模式 ★★★★☆</td>
<td>为其他对象提供一种代理以控制对这个对象的访问。</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="什么是适配器" tabindex="-1"><a class="header-anchor" href="#什么是适配器" aria-hidden="true">#</a> 什么是适配器</h2>
<p>将一个类的接口转换成客户希望的另外一个接口。使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</p>
<div class="language-mathematica ext-mathematica line-numbers-mode"><pre v-pre class="language-mathematica"><code><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>        <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token operator">|</span>   Target Interface   <span class="token operator">|</span>  <span class="token operator">&lt;-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">|</span>      Client Struct        <span class="token operator">|</span> 
<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>        <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span>                      <span class="token operator">|</span>        <span class="token operator">|</span>   <span class="token operator">-</span> adapter AdapterIface   <span class="token operator">|</span>
<span class="token operator">|</span>  TargetMethod<span class="token punctuation">(</span><span class="token punctuation">)</span> void <span class="token operator">|</span>        <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span>                      <span class="token operator">|</span>                  <span class="token operator">|</span>                     
<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>     <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>
                               <span class="token operator">|</span>       Adapter Struct         <span class="token operator">|</span>
                               <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>
                               <span class="token operator">|</span> <span class="token operator">-</span> adaptee AdapteeStructIface  <span class="token operator">|</span>
                               <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>
                               <span class="token operator">|</span> <span class="token operator">-</span> AdapterMethod<span class="token punctuation">(</span><span class="token punctuation">)</span> void        <span class="token operator">|</span>
                               <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>目标接口(Target Interface)</strong>: 这是客户端(Client)代码期望使用的接口。它定义了一个或多个方法，客户端(Client)通过这些方法来与系统进行交互。</li>
<li><strong>客户端(Client Struct)</strong>: Clients是使用目标接口(Target Interface)的结构体。他们并不知道实际使用的具体实现，而是通过目标接口(Target Interface)与系统进行交互。客户端(Client)拥有一个指向适配器(Adapter)的引用，该适配器实现了目标接口(Target Interface)，并将请求委派给被适配者(Adaptee)。</li>
<li><strong>适配器(Adapter)</strong>: 适配器(Adapter)是连接客户端(Client)和被适配者(Adaptee)的桥梁。它实现了目标接口(Target Interface)，并将客户端(Client)请求转换为被适配者(Adaptee)可以理解的形式。适配器(Adapter)通常包装了一个被适配者(Adaptee)对象，并在目标接口(Target Interface)中定义了一个或多个方法来调用适配器(Adapter)的方法。</li>
<li><strong>被适配者(Adaptee)</strong>: 被适配者(Adaptee)是系统的一部分，它是适配器(Adapter)所要调用的对象。被适配者(Adaptee)有自己独特的接口，但客户端(Client)不知道如何与其进行交互。</li>
</ul>
<p><img src="http://sm.nsddd.top/sm202305141822874.png" alt="image-20230514182249730"></p>
<h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 目标接口(Target Interface)</span>
<span class="token keyword">type</span> TargetInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 被适配者(Adaptee)</span>
<span class="token keyword">type</span> Adaptee <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Adaptee<span class="token punctuation">)</span> <span class="token function">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Specific Request"</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器(Adapter)</span>
<span class="token keyword">type</span> Adapter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    adaptee <span class="token operator">*</span>Adaptee
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ad <span class="token operator">*</span>Adapter<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> ad<span class="token punctuation">.</span>adaptee<span class="token punctuation">.</span><span class="token function">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端(Client)</span>
<span class="token keyword">type</span> Client <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">ExecuteRequest</span><span class="token punctuation">(</span>target TargetInterface<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    adaptee <span class="token operator">:=</span> <span class="token operator">&amp;</span>Adaptee<span class="token punctuation">{</span><span class="token punctuation">}</span>
    adapter <span class="token operator">:=</span> <span class="token operator">&amp;</span>Adapter<span class="token punctuation">{</span>adaptee<span class="token punctuation">:</span> adaptee<span class="token punctuation">}</span>
    client <span class="token operator">:=</span> <span class="token operator">&amp;</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span>

    result <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">ExecuteRequest</span><span class="token punctuation">(</span>adapter<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们使用了一个目标接口(Target Interface)，该接口定义了一个<code v-pre>Request()</code>方法。然后我们创建了一个被适配者(Adaptee)，它实现了不兼容的<code v-pre>SpecificRequest()</code> 方法。</p>
<p>接着，我们创建了一个适配器(Adapter)，它实现了目标接口(Target Interface)，并将适配请求委托给被适配者(Adaptee)的<code v-pre>SpecificRequest()</code>方法。</p>
<p>最后，我们创建了一个客户端(Client)，它可以执行任何符合目标接口(Target Interface)的请求。在这个例子中，我们将适配器(Adapter)传递给客户端(Client)，并调用<code v-pre>ExecuteRequest()</code>方法。<code v-pre>ExecuteRequest()</code>方法向适配器(Adapter)发出请求，该适配器(Adapter)将请求转换为被适配者(Adaptee)可以理解的形式并返回结果。</p>
<p>这个例子演示了如何使用Go语言实现适配器模式来解决不兼容的接口问题。</p>
<h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2>
<p>一般在调用第三方接口的时候会选择使用适配器模式</p>
<p>比如说 Kubernetes 源码中对 docker 或者 containerd 的时候，选择使用适配器包装，包装为 Kubernetes 中的规范。</p>
<p>虽然现在在 Kubernetes 的新版本源码中被废弃了，但是在之前很长一段时间依旧是选择的适配器。</p>
<p>模拟相关的代码实现：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">// Target Interface, 需要适配成的接口</span>
<span class="token keyword">type</span> ContainerRuntime <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">RunContainer</span><span class="token punctuation">(</span>image <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token comment">// 被适配者(Adaptee), docker</span>
<span class="token keyword">type</span> Docker <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Docker<span class="token punctuation">)</span> <span class="token function">StartContainer</span><span class="token punctuation">(</span>image <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Starting container with image %s using Docker...\n"</span><span class="token punctuation">,</span> image<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器(Adapter), 将docker转换为ContainerRuntime接口</span>
<span class="token keyword">type</span> DockerAdapter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    docker <span class="token operator">*</span>Docker
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>da <span class="token operator">*</span>DockerAdapter<span class="token punctuation">)</span> <span class="token function">RunContainer</span><span class="token punctuation">(</span>image <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> da<span class="token punctuation">.</span>docker<span class="token punctuation">.</span><span class="token function">StartContainer</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 被适配者(Adaptee), containerd</span>
<span class="token keyword">type</span> Containerd <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Containerd<span class="token punctuation">)</span> <span class="token function">CreateContainer</span><span class="token punctuation">(</span>image <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Creating container with image %s using Containerd...\n"</span><span class="token punctuation">,</span> image<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端(Client), Kubernetes</span>
<span class="token keyword">type</span> Kubernetes <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>k <span class="token operator">*</span>Kubernetes<span class="token punctuation">)</span> <span class="token function">HandleContainer</span><span class="token punctuation">(</span>runtime ContainerRuntime<span class="token punctuation">,</span> image <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    runtime<span class="token punctuation">.</span><span class="token function">RunContainer</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    docker <span class="token operator">:=</span> <span class="token operator">&amp;</span>Docker<span class="token punctuation">{</span><span class="token punctuation">}</span>
    dockerAdapter <span class="token operator">:=</span> <span class="token operator">&amp;</span>DockerAdapter<span class="token punctuation">{</span>docker<span class="token punctuation">:</span> docker<span class="token punctuation">}</span>
    containerd <span class="token operator">:=</span> <span class="token operator">&amp;</span>Containerd<span class="token punctuation">{</span><span class="token punctuation">}</span>
    kubernetes <span class="token operator">:=</span> <span class="token operator">&amp;</span>Kubernetes<span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// Kubernetes 使用 docker</span>
    kubernetes<span class="token punctuation">.</span><span class="token function">HandleContainer</span><span class="token punctuation">(</span>dockerAdapter<span class="token punctuation">,</span> <span class="token string">"nginx"</span><span class="token punctuation">)</span>

    <span class="token comment">// Kubernetes 使用 containerd，需要创建一个新的Adapter将containerd适配成ContainerRuntime接口</span>
    containerdAdapter <span class="token operator">:=</span> <span class="token operator">&amp;</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        <span class="token operator">*</span>Containerd
    <span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    containerdAdapter<span class="token punctuation">.</span>Containerd <span class="token operator">=</span> containerd

    kubernetes<span class="token punctuation">.</span><span class="token function">HandleContainer</span><span class="token punctuation">(</span>containerdAdapter<span class="token punctuation">,</span> <span class="token string">"nginx"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在本示例中，我们有两个具体的被适配者(Adaptee)：Docker和Containerd。它们都实现了不同的接口，但我们想要将它们适配为统一的ContainerRuntime接口。</p>
<p>为此，我们创建了一个目标接口(ContainerRuntime)，其中只定义了一个<code v-pre>RunContainer()</code>方法。我们还创建了两个被适配者(Adaptee)：Docker和Containerd，它们分别实现了不同的方法来启动容器。</p>
<p>然后，我们创建了一个适配器(Adapter)，将Docker适配成ContainerRuntime接口。DockerAdapter结构体包装了一个指向Docker对象的引用，并实现了ContainerRuntime接口的<code v-pre>RunContainer()</code>方法。</p>
<p>最后，我们创建了一个客户端(Client)，即Kubernetes。Kubernetes结构体包含一个<code v-pre>HandleContainer()</code>方法，该方法接受一个ContainerRuntime类型参数和一个镜像名称(image)，并使用给定的运行时(runtime)来启动容器。</p>
<p>在本例中，我们使用DockerAdapter将Docker适配成ContainerRuntime接口，并将其传递给Kubernetes。然后，我们创建了一个新的containerdAdapter，将Containerd适配成ContainerRuntime接口，并将其传递给Kubernetes。这样，我们就可以使用不同的容器运行时来启动容器，并且Kubernetes不需要知道底层容器运行时的细节。</p>
<p>因此，本示例演示了如何使用适配器模式来解决Kubernetes与不同容器运行时之间的兼容性问题。</p>
<h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2>
<p><strong>优点</strong>：</p>
<p>(1) 将目标类和适配者类解耦，通过引入一个适配器类来重用现有的适配者类，无须修改原有结构。</p>
<p>(2) 增加了类的透明性和复用性，将具体的业务实现过程封装在适配者类中，对于客户端类而言是透明的，而且提高了适配者的复用性，同一个适配者类可以在多个不同的系统中复用。</p>
<p>(3) 灵活性和扩展性都非常好，可以很方便地更换适配器，也可以在不修改原有代码的基础上增加新的适配器类，完全符合“开闭原则”。</p>
<p><strong>缺点:</strong></p>
<p>适配器中置换适配者类的某些方法比较麻烦。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '10.md' style='float:left'>⬆️上一节🔗</a><a href = '12.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


