<template><div><h1 id="redis介绍" tabindex="-1"><a class="header-anchor" href="#redis介绍" aria-hidden="true">#</a> Redis介绍</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-1-redis-简介">1.1.1. Redis 简介</router-link></li><li><router-link to="#_1-1-2-redis-优势">1.1.2. Redis 优势</router-link></li><li><router-link to="#_1-1-3-redis使用">1.1.3. redis使用</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h3 id="_1-1-1-redis-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-1-redis-简介" aria-hidden="true">#</a> 1.1.1. Redis 简介</h3>
<p>Redis 是完全开源免费的，遵守BSD协议，是一个高性能的key-value数据库。</p>
<p>Redis 与其他 key - value 缓存产品有以下三个特点：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    Redis支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用。
    Redis不仅仅支持简单的key-value类型的数据，同时还提供string、list（链表）、set（集合）、hash表等数据结构的存储。
    Redis支持数据的备份，即master-slave模式的数据备份。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-redis-优势" tabindex="-1"><a class="header-anchor" href="#_1-1-2-redis-优势" aria-hidden="true">#</a> 1.1.2. Redis 优势</h3>
<p>性能极高 – Redis能读的速度是110000次/s,写的速度是81000次/s ，单机能够达到15w qps，通常适合做缓存。</p>
<p>丰富的数据类型 – Redis支持二进制案例的 Strings, Lists, Hashes, Sets 及 Ordered Sets 数据类型操作。</p>
<p>原子 – Redis的所有操作都是原子性的，意思就是要么成功执行要么失败完全不执行。单个操作是原子性的。多个操作也支持事务，即原子性，通过MULTI和EXEC指令包起来。</p>
<p>丰富的特性 – Redis还支持 publish/subscribe, 通知, key 过期等等特性。</p>
<p>Redis与其他key-value存储有什么不同？</p>
<p>Redis有着更为复杂的数据结构并且提供对他们的原子性操作，这是一个不同于其他数据库的进化路径。Redis的数据类型都是基于基本数据结构的同时对程序员透明，无需进行额外的抽象。</p>
<p>Redis运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时需要权衡内存，因为数据量不能大于硬件内存。在内存数据库方面的另一个优点是，相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样Redis可以做很多内部复杂性很强的事情。同时，在磁盘格式方面他们是紧凑的以追加的方式产生的，因为他们并不需要进行随机访问。</p>
<h3 id="_1-1-3-redis使用" tabindex="-1"><a class="header-anchor" href="#_1-1-3-redis使用" aria-hidden="true">#</a> 1.1.3. redis使用</h3>
<p>使用第三方开源的redis库: github.com/garyburd/redigo/redis</p>
<p>命令行输入 ：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    go get github.com/garyburd/redigo/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '25.md' style='float:left'>⬆️上一节🔗</a><a href = '27.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


