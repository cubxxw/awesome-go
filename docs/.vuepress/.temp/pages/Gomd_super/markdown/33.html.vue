<template><div><h1 id="_1-redis连接池" tabindex="-1"><a class="header-anchor" href="#_1-redis连接池" aria-hidden="true">#</a> 1. Redis连接池</h1>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"github.com/garyburd/redigo/redis"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> pool <span class="token operator">*</span>redis<span class="token punctuation">.</span>Pool  <span class="token comment">//创建redis连接池</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    pool <span class="token operator">=</span> <span class="token operator">&amp;</span>redis<span class="token punctuation">.</span>Pool<span class="token punctuation">{</span>     <span class="token comment">//实例化一个连接池</span>
        MaxIdle<span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">,</span>    <span class="token comment">//最初的连接数量</span>
        <span class="token comment">// MaxActive:1000000,    //最大连接数量</span>
        MaxActive<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>    <span class="token comment">//连接池最大连接数量,不确定可以用0（0表示自动定义），按需分配</span>
        IdleTimeout<span class="token punctuation">:</span><span class="token number">300</span><span class="token punctuation">,</span>    <span class="token comment">//连接关闭时间 300秒 （300秒不使用自动关闭）    </span>
        Dial<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>redis<span class="token punctuation">.</span>Conn <span class="token punctuation">,</span><span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>     <span class="token comment">//要连接的redis数据库</span>
            <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span><span class="token string">"localhost:6379"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    c <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//从连接池，取一个链接</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//函数运行结束 ，把连接放回连接池</span>

        <span class="token boolean">_</span><span class="token punctuation">,</span>err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">"Set"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        r<span class="token punctuation">,</span>err <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">"Get"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"get abc faild :"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
        pool<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//关闭连接池</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Redis命令行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    127.0.0.1:6379> get abc
    "200"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '32.md' style='float:left'>⬆️上一节🔗</a><a href = '34.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


