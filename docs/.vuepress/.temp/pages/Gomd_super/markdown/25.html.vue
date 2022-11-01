<template><div><h1 id="mysql事务" tabindex="-1"><a class="header-anchor" href="#mysql事务" aria-hidden="true">#</a> MySQL事务</h1>
<nav class="table-of-contents"><ul><li><router-link to="#mysql事务特性">mysql事务特性</router-link></li><li><router-link to="#使用的包导入">使用的包导入</router-link></li><li><router-link to="#golang-mysql事务应用">golang MySQL事务应用</router-link></li><li><router-link to="#查看mysql">查看MySQL</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="mysql事务特性" tabindex="-1"><a class="header-anchor" href="#mysql事务特性" aria-hidden="true">#</a> mysql事务特性</h2>
<ul>
<li>原子性</li>
<li>一致性</li>
<li>隔离性</li>
<li>持久性</li>
</ul>
<h2 id="使用的包导入" tabindex="-1"><a class="header-anchor" href="#使用的包导入" aria-hidden="true">#</a> 使用的包导入</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">(</span>“github.com/jmoiron/sqlx"<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="golang-mysql事务应用" tabindex="-1"><a class="header-anchor" href="#golang-mysql事务应用" aria-hidden="true">#</a> golang MySQL事务应用</h2>
<ol>
<li><code v-pre>Db.Begin()</code>        开始事务</li>
<li><code v-pre>Db.Commit()</code>        提交事务</li>
<li><code v-pre>Db.Rollback()</code>     回滚事务</li>
</ol>
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
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> Db<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin failed :"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        r<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">"insert into person(username, sex, email)values(?, ?, ?)"</span><span class="token punctuation">,</span> <span class="token string">"stu001"</span><span class="token punctuation">,</span> <span class="token string">"man"</span><span class="token punctuation">,</span> <span class="token string">"stu01@qq.com"</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"exec failed, "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        id<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"exec failed, "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"insert succ:"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>

        r<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">"insert into person(username, sex, email)values(?, ?, ?)"</span><span class="token punctuation">,</span> <span class="token string">"stu001"</span><span class="token punctuation">,</span> <span class="token string">"man"</span><span class="token punctuation">,</span> <span class="token string">"stu01@qq.com"</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"exec failed, "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        id<span class="token punctuation">,</span> err <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"exec failed, "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"insert succ:"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>

        conn<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>insert succ: 2
insert succ: 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看mysql" tabindex="-1"><a class="header-anchor" href="#查看mysql" aria-hidden="true">#</a> 查看MySQL</h2>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>    mysql<span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> person<span class="token punctuation">;</span>
    <span class="token operator">+</span><span class="token comment">---------+----------+------+--------------+</span>
    <span class="token operator">|</span> user_id <span class="token operator">|</span> username <span class="token operator">|</span> sex  <span class="token operator">|</span> email        <span class="token operator">|</span>
    <span class="token operator">+</span><span class="token comment">---------+----------+------+--------------+</span>
    <span class="token operator">|</span>       <span class="token number">2</span> <span class="token operator">|</span> stu001   <span class="token operator">|</span> man  <span class="token operator">|</span> stu01<span class="token variable">@qq.com</span> <span class="token operator">|</span>
    <span class="token operator">|</span>       <span class="token number">3</span> <span class="token operator">|</span> stu001   <span class="token operator">|</span> man  <span class="token operator">|</span> stu01<span class="token variable">@qq.com</span> <span class="token operator">|</span>
    <span class="token operator">+</span><span class="token comment">---------+----------+------+--------------+</span>
    <span class="token number">2</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '24.md' style='float:left'>⬆️上一节🔗</a><a href = '26.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


