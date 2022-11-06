<template><div><h1 id="json序列化" tabindex="-1"><a class="header-anchor" href="#json序列化" aria-hidden="true">#</a> JSON序列化</h1>
<nav class="table-of-contents"><ul><li><router-link to="#json">JSON</router-link></li><li><router-link to="#交换数据">交换数据</router-link></li><li><router-link to="#发送数据">发送数据</router-link></li><li><router-link to="#接收数据">接收数据</router-link></li><li><router-link to="#存储数据">存储数据</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#json数据在线解析">JSON数据在线解析</router-link></li><li><router-link to="#json序列化-1">JSON序列化</router-link><ul><li><router-link to="#结构体序列化">结构体序列化</router-link></li><li><router-link to="#将map进行序列化">将map进行序列化</router-link></li><li><router-link to="#对切片序列化">对切片序列化</router-link></li><li><router-link to="#普通类型序列化">普通类型序列化</router-link></li><li><router-link to="#序列化代码">序列化代码</router-link></li></ul></li><li><router-link to="#json的反序列化">json的反序列化</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/#" target="_blank" rel="noopener noreferrer">https://golang.org/#<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2>
<div class="custom-container danger"><p class="custom-container-title">JSON🚸</p>
<p><strong>JSON: JavaScript Object Notation（JavaScript 对象标记法）。</strong></p>
<p><strong>JSON 是一种存储和交换数据的语法。</strong></p>
<p><strong>JSON 是通过 JavaScript 对象标记法书写的文本。</strong></p>
</div>
<h2 id="交换数据" tabindex="-1"><a class="header-anchor" href="#交换数据" aria-hidden="true">#</a> 交换数据</h2>
<p>当数据在浏览器与服务器之间进行交换时，这些数据只能是文本。</p>
<p>JSON 属于文本，并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器。</p>
<p>我们也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象。</p>
<p>以这样的方式，我们能够把数据作为 JavaScript 对象来处理，无需复杂的解析和转译。</p>
<blockquote>
<p>json从2001开始推广使用，目前已经成为主流的数据格式</p>
</blockquote>
<p><img src="@source/markdown/images/xrBbT7SK6aEL89y.png" alt="image-20220313125849681"></p>
<h2 id="发送数据" tabindex="-1"><a class="header-anchor" href="#发送数据" aria-hidden="true">#</a> 发送数据</h2>
<p>如果您的数据存储在 JavaScript 对象中，您可以把该对象转换为 JSON，然后将其发送到服务器。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>var myObj = <span class="token punctuation">{</span> name<span class="token operator">:</span><span class="token string">"Bill Gates"</span><span class="token punctuation">,</span>  age<span class="token operator">:</span><span class="token number">62</span><span class="token punctuation">,</span> city<span class="token operator">:</span><span class="token string">"Seattle"</span> <span class="token punctuation">}</span>;
var myJSON =  JSON.stringify(myObj);
window.location = <span class="token string">"demo_json.php?x="</span> + myJSON;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接收数据" tabindex="-1"><a class="header-anchor" href="#接收数据" aria-hidden="true">#</a> 接收数据</h2>
<p>如果您以 JSON 格式接收到数据，您能够将其转换为 JavaScript 对象：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>var myJSON = '<span class="token punctuation">{</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Bill Gates"</span><span class="token punctuation">,</span>  <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">62</span><span class="token punctuation">,</span> <span class="token property">"city"</span><span class="token operator">:</span><span class="token string">"Seattle"</span> <span class="token punctuation">}</span>';
var myObj = JSON.parse(myJSON);
document.getElementById(<span class="token string">"demo"</span>).innerHTML = myObj.name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存储数据" tabindex="-1"><a class="header-anchor" href="#存储数据" aria-hidden="true">#</a> 存储数据</h2>
<p>在存储数据时，数据必须是某种具体的格式，并且无论您选择在何处存储它，文本永远是合法格式之一。</p>
<p>JSON 让 JavaScript 对象存储为文本成为可能。</p>
<p>把数据存储在本地存储中</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">//存储数据：</span>
myObj = <span class="token punctuation">{</span> name<span class="token operator">:</span><span class="token string">"Bill Gates"</span><span class="token punctuation">,</span>  age<span class="token operator">:</span><span class="token number">62</span><span class="token punctuation">,</span> city<span class="token operator">:</span><span class="token string">"Seattle"</span> <span class="token punctuation">}</span>;
myJSON =  JSON.stringify(myObj);
localStorage.setItem(<span class="token string">"testJSON"</span><span class="token punctuation">,</span> myJSON);

<span class="token comment">//接收数据：</span>
text = localStorage.getItem(<span class="token string">"testJSON"</span>);
obj =  JSON.parse(text);
document.getElementById(<span class="token string">"demo"</span>).innerHTML = obj.name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>
<p><strong>在js中，一切都是对象，因此任何的数据类型都可以用json来表示</strong></p>
</li>
<li>
<p><strong>js中可以通过键值对来表示数据</strong></p>
</li>
<li>
<p>js扩展性特别好</p>
</li>
</ol>
<h2 id="json数据在线解析" tabindex="-1"><a class="header-anchor" href="#json数据在线解析" aria-hidden="true">#</a> JSON数据在线解析</h2>
<details class="custom-container details"><summary>JSON在线解析</summary>
<p><strong>在我们做复杂的数据的时候可以选择</strong></p>
<p><a href="http://www.json.cn" target="_blank" rel="noopener noreferrer">🖱️解析网址地址<ExternalLinkIcon/></a></p>
<p><img src="http://sm.nsddd.top/smimage-20221026181140061.png" alt="image-20221026181140061"></p>
</details>
<h2 id="json序列化-1" tabindex="-1"><a class="header-anchor" href="#json序列化-1" aria-hidden="true">#</a> JSON序列化</h2>
<h3 id="结构体序列化" tabindex="-1"><a class="header-anchor" href="#结构体序列化" aria-hidden="true">#</a> 结构体序列化</h3>
<blockquote>
<p>jaon序列化是指将现有的key-value结构的数据结构（结构体，map，切片）序列化为json字符串</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: json.go                                                                                                                               
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sun 13 Mar 2022 01:48:07 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"encoding/json"</span>
<span class="token punctuation">)</span>
<span class="token keyword">type</span> M <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span> 
    Age <span class="token builtin">int</span>
    Birthday <span class="token builtin">string</span>
    sal <span class="token builtin">float64</span>
    skill <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    m <span class="token operator">:=</span> M<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span><span class="token string">"牛魔王"</span><span class="token punctuation">,</span>
        Age<span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">,</span>
        Birthday<span class="token punctuation">:</span><span class="token string">"2011-11-11"</span><span class="token punctuation">,</span>
        Sal<span class="token punctuation">:</span><span class="token number">800000.00</span><span class="token punctuation">,</span>
        Skill<span class="token punctuation">:</span><span class="token string">"牛魔权"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>     <span class="token comment">//一定要是大写</span>
    <span class="token comment">//将M序列化</span>
    data <span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">)</span>  <span class="token comment">//使用json中的Marshal方法</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化失败:err:%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//输出序列化后的结果</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化后的结果:%v"</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//字符串需要转化</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go run json.go </span>
序列化后的结果:<span class="token punctuation">{</span><span class="token string">"Name"</span><span class="token builtin class-name">:</span><span class="token string">"牛魔王"</span>,<span class="token string">"Age"</span>:20,<span class="token string">"Birthday"</span><span class="token builtin class-name">:</span><span class="token string">"2011-11-11"</span>,<span class="token string">"Sal"</span>:800000,<span class="token string">"Skill"</span><span class="token builtin class-name">:</span><span class="token string">"牛魔权"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在www.json.cn上验证</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"Name"</span><span class="token operator">:</span><span class="token string">"牛魔王"</span><span class="token punctuation">,</span>
    <span class="token property">"Age"</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token property">"Birthday"</span><span class="token operator">:</span><span class="token string">"2011-11-11"</span><span class="token punctuation">,</span>
    <span class="token property">"Sal"</span><span class="token operator">:</span><span class="token number">800000</span><span class="token punctuation">,</span>
    <span class="token property">"Skill"</span><span class="token operator">:</span><span class="token string">"牛魔权"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将map进行序列化" tabindex="-1"><a class="header-anchor" href="#将map进行序列化" aria-hidden="true">#</a> 将map进行序列化</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">testMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>inferface<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//key为字符串，值为任意类型</span>
    <span class="token comment">//使用map先make</span>
    a <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    a<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"红孩儿"</span>
    a<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">19</span>
    a<span class="token punctuation">[</span><span class="token string">"adress"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"wuhan"</span>
    
    data <span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">//使用json中的Marshal方法</span>
    <span class="token comment">//map是引用传递，所以不需要取地址符号</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化失败:err:%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//输出序列化后的结果</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化后的结果:%v"</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//字符串需要转化</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译和序列化</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>序列化后的结果<span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"adress"</span><span class="token operator">:</span><span class="token string">"wuhan"</span><span class="token punctuation">,</span><span class="token property">"age"</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"红孩儿"</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>
    <span class="token property">"adress"</span><span class="token operator">:</span><span class="token string">"wuhan"</span><span class="token punctuation">,</span>
    <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"红孩儿"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对切片序列化" tabindex="-1"><a class="header-anchor" href="#对切片序列化" aria-hidden="true">#</a> 对切片序列化</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token function">funcSlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//复杂化，一个切片中有很多map</span>
    <span class="token keyword">var</span> slice  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">var</span> s <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//使用map先make</span>
    s <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    s<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"张三"</span>
    s<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span>
    s<span class="token punctuation">[</span><span class="token string">"adress"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"wuhan"</span>
    slice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span>s<span class="token punctuation">)</span>
    s <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">var</span> u <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    u <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    u<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"张三"</span>
    u<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span>
    u<span class="token punctuation">[</span><span class="token string">"adress"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"wuhan"</span>
    slice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span>u<span class="token punctuation">)</span>
    
    data <span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>  <span class="token comment">//使用json中的Marshal方法</span>
    <span class="token comment">//map是引用传递，所以不需要取地址符号</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化失败:err:%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//输出序列化后的结果</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化后的结果:%v\n"</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//字符串需要转化    </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="普通类型序列化" tabindex="-1"><a class="header-anchor" href="#普通类型序列化" aria-hidden="true">#</a> 普通类型序列化</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">testnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	ver num <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">12313.122</span>
    data <span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment">//使用json中的Marshal方法</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
    	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化失败:err:%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="序列化代码" tabindex="-1"><a class="header-anchor" href="#序列化代码" aria-hidden="true">#</a> 序列化代码</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: json.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sun 13 Mar 2022 01:48:07 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"encoding/json"</span>
<span class="token punctuation">)</span>
<span class="token keyword">type</span> M <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span> 
    Age <span class="token builtin">int</span> 
    Birthday <span class="token builtin">string</span>
    Sal <span class="token builtin">float64</span>
    Skill <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    m <span class="token operator">:=</span> M<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span><span class="token string">"牛魔王"</span><span class="token punctuation">,</span>
        Age<span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">,</span>
        Birthday<span class="token punctuation">:</span><span class="token string">"2011-11-11"</span><span class="token punctuation">,</span>
        Sal<span class="token punctuation">:</span><span class="token number">800000.00</span><span class="token punctuation">,</span>
        Skill<span class="token punctuation">:</span><span class="token string">"牛魔权"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>   
    <span class="token comment">//将M序列化</span>
    data <span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>m<span class="token punctuation">)</span>  <span class="token comment">//使用json中的Marshal方法</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化失败:err:%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
    <span class="token comment">//输出序列化后的结果</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"结构体序列化后的结果:%v\n"</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//字符串需要转化</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">testMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//key为字符串，值为任意类型</span>
    <span class="token comment">//使用map先make</span>
    a <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    a<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"红孩儿"</span>
    a<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">19</span>
    a<span class="token punctuation">[</span><span class="token string">"adress"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"wuhan"</span>
    
    data <span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">//使用json中的Marshal方法</span>
    <span class="token comment">//map是引用传递，所以不需要取地址符号</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化失败:err:%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
    <span class="token comment">//输出序列化后的结果</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"map序列化后的结果:%v\n"</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//字符串需要转化</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">testSlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//复杂化，一个切片中有很多map</span>
    <span class="token keyword">var</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">var</span> s <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//使用map先make</span>
    s <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    s<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"张三"</span>
    s<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span>
    s<span class="token punctuation">[</span><span class="token string">"adress"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"wuhan"</span>
    slice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span>s<span class="token punctuation">)</span>

    <span class="token keyword">var</span> u <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    u <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    u<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"张三"</span>
    u<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span>
    u<span class="token punctuation">[</span><span class="token string">"adress"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"wuhan"</span>
    slice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span>u<span class="token punctuation">)</span>

    data <span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>  <span class="token comment">//使用json中的Marshal方法</span>
    <span class="token comment">//map是引用传递，所以不需要取地址符号</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化失败:err:%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
    <span class="token comment">//输出序列化后的结果</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice切片序列化后的结果:%v\n"</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//字符串需要转化</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">testNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> num <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">12313.122</span>
    data <span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment">//使用json中的Marshal方法</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化失败:err:%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"普通数字序列化后的结果:%v\n"</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment">//字符串需要转化</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                                                                                  
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
    <span class="token function">testMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">testSlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">testNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span># <span class="token keyword">go</span> run json<span class="token punctuation">.</span><span class="token keyword">go</span> 
结构体序列化后的结果<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"Name"</span><span class="token punctuation">:</span><span class="token string">"牛魔王"</span><span class="token punctuation">,</span><span class="token string">"Age"</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">"Birthday"</span><span class="token punctuation">:</span><span class="token string">"2011-11-11"</span><span class="token punctuation">,</span><span class="token string">"Sal"</span><span class="token punctuation">:</span><span class="token number">800000</span><span class="token punctuation">,</span><span class="token string">"Skill"</span><span class="token punctuation">:</span><span class="token string">"牛魔权"</span><span class="token punctuation">}</span>

<span class="token keyword">map</span>序列化后的结果<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">"adress"</span><span class="token punctuation">:</span><span class="token string">"wuhan"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"红孩儿"</span><span class="token punctuation">}</span>

slice切片序列化后的结果<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"adress"</span><span class="token punctuation">:</span><span class="token string">"wuhan"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"张三"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"adress"</span><span class="token punctuation">:</span><span class="token string">"wuhan"</span><span class="token punctuation">,</span><span class="token string">"age"</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"张三"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

普通数字序列化后的结果<span class="token punctuation">:</span><span class="token number">12313.122</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>www.json.cn序列化：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"Name"</span><span class="token operator">:</span><span class="token string">"牛魔王"</span><span class="token punctuation">,</span>
        <span class="token property">"Age"</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">"Birthday"</span><span class="token operator">:</span><span class="token string">"2011-11-11"</span><span class="token punctuation">,</span>
        <span class="token property">"Sal"</span><span class="token operator">:</span><span class="token number">800000</span><span class="token punctuation">,</span>
        <span class="token property">"Skill"</span><span class="token operator">:</span><span class="token string">"牛魔权"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"adress"</span><span class="token operator">:</span><span class="token string">"wuhan"</span><span class="token punctuation">,</span>
        <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"红孩儿"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"adress"</span><span class="token operator">:</span><span class="token string">"wuhan"</span><span class="token punctuation">,</span>
            <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"张三"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"adress"</span><span class="token operator">:</span><span class="token string">"wuhan"</span><span class="token punctuation">,</span>
            <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"张三"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token number">12313.122</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json的反序列化" tabindex="-1"><a class="header-anchor" href="#json的反序列化" aria-hidden="true">#</a> json的反序列化</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> M <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span> <span class="token string">`json: "姓名"`</span> 
    Age <span class="token builtin">int</span>   <span class="token string">`json : "年龄"`</span>
    Birthday <span class="token builtin">string</span>   <span class="token string">`json : "出生`</span>
    Sal <span class="token builtin">float64</span>		<span class="token string">`json : "战斗力"`</span>
    Skill <span class="token builtin">string</span>	<span class="token string">`json : "绝招"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>结构体序列化后的结果:<span class="token punctuation">{</span><span class="token string">"姓名"</span><span class="token builtin class-name">:</span><span class="token string">"牛魔王"</span>,<span class="token string">"年龄"</span>:20,<span class="token string">"Birthday"</span><span class="token builtin class-name">:</span><span class="token string">"2011-11-11"</span>,<span class="token string">"战斗力"</span>:800000,<span class="token string">"绝招"</span><span class="token builtin class-name">:</span><span class="token string">"牛魔权"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>因为在type中的字段需要首字母大写，否则挎包调用无法调用</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>json.Unmarshal([]byte(str),&amp;monster)       //反序列化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>案例</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"encoding/json"</span>
<span class="token punctuation">)</span>

<span class="token comment">//定义一个结构体</span>
<span class="token keyword">type</span> Monster <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>  
	Age <span class="token builtin">int</span> 
	Birthday <span class="token builtin">string</span> <span class="token comment">//....</span>
	Sal <span class="token builtin">float64</span>
	Skill <span class="token builtin">string</span>
<span class="token punctuation">}</span>


<span class="token comment">//演示将json字符串，反序列化成struct</span>
<span class="token keyword">func</span> <span class="token function">unmarshalStruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//说明str 在项目开发中，是通过网络传输获取到.. 或者是读取文件获取到</span>
	str <span class="token operator">:=</span> <span class="token string">"{\"Name\":\"牛魔王~~~\",\"Age\":500,\"Birthday\":\"2011-11-11\",\"Sal\":8000,\"Skill\":\"牛魔拳\"}"</span>

	<span class="token comment">//定义一个Monster实例</span>
	<span class="token keyword">var</span> monster Monster

	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>monster<span class="token punctuation">)</span>       
    <span class="token comment">//必须要使用引用传递才可以改变函数外面的值</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"unmarshal err=%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"反序列化后 monster=%v monster.Name=%v \n"</span><span class="token punctuation">,</span> monster<span class="token punctuation">,</span> monster<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token comment">//将map进行序列化</span>
<span class="token keyword">func</span> <span class="token function">testMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">//定义一个map</span>
	<span class="token keyword">var</span> a <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    
	<span class="token comment">//使用map,需要make</span>
	a <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	a<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"红孩儿~~~~~~"</span>
	a<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">30</span>
	a<span class="token punctuation">[</span><span class="token string">"address"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"洪崖洞"</span>

	<span class="token comment">//将a这个map进行序列化</span>
	<span class="token comment">//将monster 序列化</span>
	data<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"序列化错误 err=%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//输出序列化后的结果</span>
	<span class="token comment">//fmt.Printf("a map 序列化后=%v\n", string(data))</span>
	<span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//演示将json字符串，反序列化成map</span>
<span class="token keyword">func</span> <span class="token function">unmarshalMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//str := "{\"address\":\"洪崖洞\",\"age\":30,\"name\":\"红孩儿\"}"</span>
	str <span class="token operator">:=</span> <span class="token function">testMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//定义一个map</span>
	<span class="token keyword">var</span> a <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> 

	<span class="token comment">//反序列化</span>
	<span class="token comment">//注意：反序列化map,不需要make,因为make操作被封装到 Unmarshal函数</span>
	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"unmarshal err=%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"反序列化后 a=%v\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//演示将json字符串，反序列化成切片</span>
<span class="token keyword">func</span> <span class="token function">unmarshalSlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	str <span class="token operator">:=</span> <span class="token string">"[{\"address\":\"北京\",\"age\":\"7\",\"name\":\"jack\"},"</span> <span class="token operator">+</span> 
		<span class="token string">"{\"address\":[\"墨西哥\",\"夏威夷\"],\"age\":\"20\",\"name\":\"tom\"}]"</span>
	<span class="token comment">//当一个字符串很长的时候，换行可以使用`+`进行字符串的拼接</span>
	<span class="token comment">//定义一个slice</span>
	<span class="token keyword">var</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">//反序列化，不需要make,因为make操作被封装到 Unmarshal函数</span>
	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"unmarshal err=%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"反序列化后 slice=%v\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ·<span class="token punctuation">{</span>
	<span class="token function">unmarshalStruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">unmarshalMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">unmarshalSlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意以下四点：</p>
<ul>
<li>反序列化map,不需要make,因为make操作被封装到 Unmarshal函数</li>
</ul>
<ul>
<li>如果是程序中读取的字符串，是不需要加<code v-pre>\</code>转移字符的</li>
<li>当一个字符串很长的时候，换行可以使用<code v-pre>+</code>进行字符串的拼接</li>
<li><strong>反序列化和序列化的类型应该保持一致，不能篡改</strong></li>
</ul>
</div>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '15.md' style='float:left'>⬆️上一节🔗</a><a href = '17.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


