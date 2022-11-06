<template><div><h1 id="select操作" tabindex="-1"><a class="header-anchor" href="#select操作" aria-hidden="true">#</a> Select操作</h1>
<nav class="table-of-contents"><ul><li><router-link to="#delect操作">delect操作</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="delect操作" tabindex="-1"><a class="header-anchor" href="#delect操作" aria-hidden="true">#</a> delect操作</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>

    <span class="token boolean">_</span> <span class="token string">"github.com/go-sql-driver/mysql"</span>
    <span class="token string">"github.com/jmoiron/sqlx"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    UserId   <span class="token builtin">int</span>    <span class="token string">`db:"user_id"`</span>
    Username <span class="token builtin">string</span> <span class="token string">`db:"username"`</span>
    Sex      <span class="token builtin">string</span> <span class="token string">`db:"sex"`</span>
    Email    <span class="token builtin">string</span> <span class="token string">`db:"email"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Place <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Country <span class="token builtin">string</span> <span class="token string">`db:"country"`</span>
    City    <span class="token builtin">string</span> <span class="token string">`db:"city"`</span>
    TelCode <span class="token builtin">int</span>    <span class="token string">`db:"telcode"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> Db <span class="token operator">*</span>sqlx<span class="token punctuation">.</span>DB

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    database<span class="token punctuation">,</span> err <span class="token operator">:=</span> sqlx<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"mysql"</span><span class="token punctuation">,</span> <span class="token string">"root:root@tcp(127.0.0.1:3306)/test"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"open mysql failed,"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    Db <span class="token operator">=</span> database
    <span class="token keyword">defer</span> db<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 注意这行代码要写在上面err判断的下面</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> person <span class="token punctuation">[</span><span class="token punctuation">]</span>Person
    err <span class="token operator">:=</span> Db<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>person<span class="token punctuation">,</span> <span class="token string">"select user_id, username, sex, email from person where user_id=?"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"exec failed, "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"select succ:"</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    select succ: [{1 stu001 man stu01@qq.com}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '21.md' style='float:left'>⬆️上一节🔗</a><a href = '23.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


