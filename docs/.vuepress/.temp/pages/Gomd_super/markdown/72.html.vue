<template><div><h1 id="_1-gin简介" tabindex="-1"><a class="header-anchor" href="#_1-gin简介" aria-hidden="true">#</a> 1. gin简介</h1>
<h2 id="_1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-介绍" aria-hidden="true">#</a> 1.1. 介绍</h2>
<ul>
<li>Gin是一个golang的微框架，封装比较优雅，API友好，源码注释比较明确，具有快速灵活，容错方便等特点</li>
<li>对于golang而言，web框架的依赖要远比Python，Java之类的要小。自身的<code v-pre>net/http</code>足够简单，性能也非常不错</li>
<li>借助框架开发，不仅可以省去很多常用的封装带来的时间，也有助于团队的编码风格和形成规范</li>
</ul>
<h2 id="_1-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-2-安装" aria-hidden="true">#</a> 1.2. 安装</h2>
<p>要安装Gin软件包，您需要安装Go并首先设置Go工作区。</p>
<p>1.首先需要安装Go（需要1.10+版本），然后可以使用下面的Go命令安装Gin。</p>
<blockquote>
<p>go get -u github.com/gin-gonic/gin</p>
</blockquote>
<p>2.将其导入您的代码中：</p>
<blockquote>
<p>import &quot;github.com/gin-gonic/gin&quot;</p>
</blockquote>
<p>3.（可选）导入net/http。例如，如果使用常量，则需要这样做http.StatusOK。</p>
<blockquote>
<p>import &quot;net/http&quot;</p>
</blockquote>
<h2 id="_1-3-hello-word" tabindex="-1"><a class="header-anchor" href="#_1-3-hello-word" aria-hidden="true">#</a> 1.3. hello word</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"net/http"</span>

    <span class="token string">"github.com/gin-gonic/gin"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.创建路由</span>
   r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment">// 2.绑定路由规则，执行的函数</span>
   <span class="token comment">// gin.Context，封装了request和response</span>
   r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">"hello World!"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token comment">// 3.监听端口，默认在8080</span>
   <span class="token comment">// Run("里面不指定端口号默认为8080") </span>
   r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">":8000"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/11/A85u9WYgl17Gpdx.png" alt="hello word"></p>
<ul>
<li>gin 框架中采用的路由库是基于httprouter做的</li>
<li>地址为：https://github.com/julienschmidt/httprouter</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"net/http"</span>

    <span class="token string">"github.com/gin-gonic/gin"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">"hello word"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">"/xxxpost"</span><span class="token punctuation">,</span>getting<span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">PUT</span><span class="token punctuation">(</span><span class="token string">"/xxxput"</span><span class="token punctuation">)</span>
    <span class="token comment">//监听端口默认为8080</span>
    r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">":8000"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '71.md' style='float:left'>⬆️上一节🔗</a><a href = '73.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


