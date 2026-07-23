<template><div><h1 id="_1-哈希算法" tabindex="-1"><a class="header-anchor" href="#_1-哈希算法" aria-hidden="true">#</a> 1. 哈希算法</h1>
<h3 id="_1-1-1-使用场景" tabindex="-1"><a class="header-anchor" href="#_1-1-1-使用场景" aria-hidden="true">#</a> 1.1.1. 使用场景</h3>
<ul>
<li>对用户输入的密码进行加密</li>
<li>用户登录时对用户的密码进行比对</li>
</ul>
<h3 id="_1-1-2-例子" tabindex="-1"><a class="header-anchor" href="#_1-1-2-例子" aria-hidden="true">#</a> 1.1.2. 例子</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"errors"</span>
    <span class="token string">"fmt"</span>

    <span class="token string">"golang.org/x/crypto/bcrypt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    userPassword <span class="token operator">:=</span> <span class="token string">"123456"</span>
    passwordbyte<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GeneratePassword</span><span class="token punctuation">(</span>userPassword<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"加密出错了"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>passwordbyte<span class="token punctuation">)</span>
    <span class="token comment">// passwordstring := string(passwordbyte)</span>
    <span class="token comment">// fmt.Println(passwordstring)</span>
    <span class="token comment">//模拟这个字符串是从数据库读取出来的 值是12345678</span>
    mysql_password <span class="token operator">:=</span> <span class="token string">"$2a$10$I8WaWXgiBw8j/IBejb3t/.s5NoOYLvoQzL6mIM2g3TEu4z0HenzqK"</span>
    isOk<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">ValidatePassword</span><span class="token punctuation">(</span>userPassword<span class="token punctuation">,</span> mysql_password<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>isOk <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"密码错误"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>isOk<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//GeneratePassword 给密码就行加密操作</span>
<span class="token keyword">func</span> <span class="token function">GeneratePassword</span><span class="token punctuation">(</span>userPassword <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> bcrypt<span class="token punctuation">.</span><span class="token function">GenerateFromPassword</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>userPassword<span class="token punctuation">)</span><span class="token punctuation">,</span> bcrypt<span class="token punctuation">.</span>DefaultCost<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//ValidatePassword 密码比对</span>
<span class="token keyword">func</span> <span class="token function">ValidatePassword</span><span class="token punctuation">(</span>userPassword <span class="token builtin">string</span><span class="token punctuation">,</span> hashed <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>isOK <span class="token builtin">bool</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">=</span> bcrypt<span class="token punctuation">.</span><span class="token function">CompareHashAndPassword</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>hashed<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>userPassword<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"密码比对错误！"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<p><code v-pre>golang.org/x/crypto/bcrypt</code>这个包下载有些难度，需要的小伙伴可以自行百度</p>
<p>官网地址：http://golang.org/x/crypto/bcrypt</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '77.md' style='float:left'>⬆️上一节🔗</a><a href = '79.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


