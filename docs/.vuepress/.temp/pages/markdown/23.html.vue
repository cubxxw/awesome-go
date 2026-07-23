<template><div><h1 id="go语言操作redis" tabindex="-1"><a class="header-anchor" href="#go语言操作redis" aria-hidden="true">#</a> Go语言操作redis</h1>
<nav class="table-of-contents"><ul><li><router-link to="#go语言操作redis-1">Go语言操作redis</router-link></li><li><router-link to="#连接本地服务器">连接本地服务器</router-link></li><li><router-link to="#传统连接redis">传统连接redis:</router-link></li><li><router-link to="#连接池">连接池</router-link></li><li><router-link to="#连接池核心代码">连接池核心代码</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/#" target="_blank" rel="noopener noreferrer">https://golang.org/#<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://cubxxw.com" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<h2 id="go语言操作redis-1" tabindex="-1"><a class="header-anchor" href="#go语言操作redis-1" aria-hidden="true">#</a> Go语言操作redis</h2>
<p><strong>使用Go语言操作redis需要安装第三方开源的redis库：<a href="https://github.com/garyburd/redigo/redis" target="_blank" rel="noopener noreferrer">github.com/garyburd/redigo/redis<ExternalLinkIcon/></a></strong></p>
<p>现在的地址：https://github.com/gomodule/redigo/tree/master/redis</p>
<p><strong>在gopath下面安装指令：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go get github.com/garyburd/redigo/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>前提：安装git</strong></p>
<h2 id="连接本地服务器" tabindex="-1"><a class="header-anchor" href="#连接本地服务器" aria-hidden="true">#</a> 连接本地服务器</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
    <span class="token string">"github.com/garyburd/redigo/redis"</span>
	<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span>err <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span><span class="token string">"127.0.0.1:6379"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Ptintln</span><span class="token punctuation">(</span><span class="token string">"err  = "</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
       	<span class="token keyword">return</span> 
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn succ..."</span><span class="token punctuation">,</span>conn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在我们调用github.com/garyburd/redigo/redis需要挎包</strong></p>
<h2 id="传统连接redis" tabindex="-1"><a class="header-anchor" href="#传统连接redis" aria-hidden="true">#</a> 传统连接redis:</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>conn := redis.Dial()
使用conn
conn.Close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连接池" tabindex="-1"><a class="header-anchor" href="#连接池" aria-hidden="true">#</a> 连接池</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>conn1
conn2
conn3
用完不关，此时用完还是可以连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Golang需要操作redis，直接通过连接池</strong></p>
<ol>
<li>事先初始化一定数量的连接，放在连接池</li>
<li>当Go需要操作redis时候，直接从redis连接池中取出连接</li>
</ol>
<blockquote>
<p>这样可以节约临时获取redis时间，提高效率</p>
</blockquote>
<h2 id="连接池核心代码" tabindex="-1"><a class="header-anchor" href="#连接池核心代码" aria-hidden="true">#</a> 连接池核心代码</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> pool <span class="token operator">*</span>redis<span class="token punctuation">.</span>Pool
pool <span class="token operator">=</span> <span class="token operator">&amp;</span>redis<span class="token punctuation">.</span>Pool<span class="token punctuation">{</span>
	Maxldle<span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">,</span>      <span class="token comment">//最大空闲，连接数目</span>
	MaxActive<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>    <span class="token comment">//表示和数据库的最大连接数</span>
	IdleTimeout<span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span>   <span class="token comment">//最大空闲时间</span>
	Dial<span class="token punctuation">:</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>redis<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span><span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//初始化连接代码，连接哪一个ip的redis</span>
	<span class="token keyword">return</span> redis<span class="token punctuation">,</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"top"</span><span class="token punctuation">,</span><span class="token string">"localhost:6379"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
c <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//从连接池中取出一个链接</span>
pool<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//关闭连接池</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**最大连接数是最多的有多少连接，<code v-pre>MaxActive:0,</code>表示没有限制，但是系统是有限制的（并发和MaxIdle数目）  **</p>
<p><strong>pool.Close()   关闭连接池后就不可以再从连接池中取出连接了</strong></p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
    <span class="token string">"github.com/garyburd/redigo/redis"</span>
<span class="token punctuation">)</span>

<span class="token comment">//定义一个全局变量</span>
<span class="token keyword">var</span> pool <span class="token operator">*</span>redis<span class="token punctuation">.</span>Pool
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//注意：init函数是先执行的，在主函数执行之前执行init函数</span>
    
    pool <span class="token operator">=</span> <span class="token operator">&amp;</span>redis<span class="token punctuation">.</span>Pool<span class="token punctuation">{</span>
        Maxldle<span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">,</span>      <span class="token comment">//最大空闲，连接数目</span>
        MaxActive<span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">,</span>    <span class="token comment">//表示和数据库的最大连接数</span>
        IdleTimeout<span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span>   <span class="token comment">//最大空闲时间</span>
        Dial<span class="token punctuation">:</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>redis<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span><span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//初始化连接代码，连接哪一个ip的redis</span>
        <span class="token keyword">return</span> redis<span class="token punctuation">,</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"top"</span><span class="token punctuation">,</span><span class="token string">"localhost:6379"</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//先从pool取出一个连接</span>
    conn<span class="token punctuation">,</span>err <span class="token operator">:=</span> pool<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err<span class="token operator">!=</span> ok<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err = "</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">//defer 延迟关闭，defer是在函数都执行完毕后关闭资源</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span>err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">"set"</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"汤姆猫"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err<span class="token operator">!=</span> ok<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn.Do err = "</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//取出</span>
    r<span class="token punctuation">,</span>err <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>conn<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">"Get"</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//转为字符串</span>
    <span class="token keyword">if</span> err<span class="token operator">!=</span> ok<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn.Do err = "</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"r = "</span><span class="token punctuation">,</span>r<span class="token punctuation">)</span>
    
  
<span class="token punctuation">}</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>yum</em></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>r = 汤姆猫
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>如果我们要从pool中取出连接，一定要保证连接池是没有关闭的！！！！！！</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pool.Close()
conn2 := pool.Get()
  _,err := conn2.Do("set","name","汤姆猫")
    if err!= ok{
        fmt.Println("conn.Do err = ",err)
    }
    
    //取出2
    r2,err := redis.String(conn.Do("Get","name"))
    //转为字符串
    if err!= ok{
        fmt.Println("conn2.Do err = ",err)
    }
    fmt.Println("r2 = ",r2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '22.md' style='float:left'>⬆️上一节🔗</a><a href = '24.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


