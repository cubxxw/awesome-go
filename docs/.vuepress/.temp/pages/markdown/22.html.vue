<template><div><h1 id="redis进阶" tabindex="-1"><a class="header-anchor" href="#redis进阶" aria-hidden="true">#</a> Redis进阶</h1>
<nav class="table-of-contents"><ul><li><router-link to="#redis-哈希-hash">Redis 哈希(Hash)</router-link><ul><li><router-link to="#实例">实例</router-link></li></ul></li><li><router-link to="#redis-hash-命令">Redis hash 命令</router-link></li><li><router-link to="#hash使用">hash使用</router-link><ul><li><router-link to="#列表">列表</router-link></li><li><router-link to="#set-集合">set（集合）</router-link></li></ul></li></ul></nav>
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
<h1 id="redis进阶-1" tabindex="-1"><a class="header-anchor" href="#redis进阶-1" aria-hidden="true">#</a> Redis进阶</h1>
<div class="custom-container tip"><p class="custom-container-title">官方地址</p>
<p><a href="http://redisdoc.com" target="_blank" rel="noopener noreferrer">指令：https://redisdoc.com<ExternalLinkIcon/></a></p>
<p><a href="https://redis.io" target="_blank" rel="noopener noreferrer">官网：https://redis.io<ExternalLinkIcon/></a>和http://redis.cn</p>
</div>
<h2 id="redis-哈希-hash" tabindex="-1"><a class="header-anchor" href="#redis-哈希-hash" aria-hidden="true">#</a> Redis 哈希(Hash)</h2>
<p><strong>Redis hash 是一个 string 类型的 field（字段） 和 value（值） 的映射表，hash 特别适合用于存储对象。</strong></p>
<p>Redis 中每个 hash 可以存储 232 - 1 键值对（40多亿）。</p>
<h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>127.0.0.1:6379>  HMSET key_one name "redis tutorial" description "redis basic commands for caching" likes 20 visitors 23000
OK
127.0.0.1:6379>  HGETALL key_one
1) "name"
2) "redis tutorial"
3) "description"
4) "redis basic commands for caching"
5) "likes"
6) "20"
7) "visitors"
8) "23000"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上实例中，我们设置了 redis 的一些描述信息(name, description, likes, visitors) 到哈希表的 <strong>key_one</strong> 中。</p>
<hr>
<h2 id="redis-hash-命令" tabindex="-1"><a class="header-anchor" href="#redis-hash-命令" aria-hidden="true">#</a> Redis hash 命令</h2>
<p>下表列出了 redis hash 基本的相关命令：</p>
<table>
<thead>
<tr>
<th style="text-align:left">序号</th>
<th style="text-align:left">命令及描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">[HDEL key field1 <a href="https://www.runoob.com/redis/hashes-hdel.html" target="_blank" rel="noopener noreferrer">field2]<ExternalLinkIcon/></a> 删除一个或多个哈希表字段</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hexists.html" target="_blank" rel="noopener noreferrer">HEXISTS key field<ExternalLinkIcon/></a> 查看哈希表 key 中，指定的字段是否存在。</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hget.html" target="_blank" rel="noopener noreferrer">HGET key field<ExternalLinkIcon/></a> 获取存储在哈希表中指定字段的值。</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hgetall.html" target="_blank" rel="noopener noreferrer">HGETALL key<ExternalLinkIcon/></a> 获取在哈希表中指定 key 的所有字段和值</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hincrby.html" target="_blank" rel="noopener noreferrer">HINCRBY key field increment<ExternalLinkIcon/></a> 为哈希表 key 中的指定字段的整数值加上增量 increment 。</td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hincrbyfloat.html" target="_blank" rel="noopener noreferrer">HINCRBYFLOAT key field increment<ExternalLinkIcon/></a> 为哈希表 key 中的指定字段的浮点数值加上增量 increment 。</td>
</tr>
<tr>
<td style="text-align:left">7</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hkeys.html" target="_blank" rel="noopener noreferrer">HKEYS key<ExternalLinkIcon/></a> 获取所有哈希表中的字段</td>
</tr>
<tr>
<td style="text-align:left">8</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hlen.html" target="_blank" rel="noopener noreferrer">HLEN key<ExternalLinkIcon/></a> 获取哈希表中字段的数量</td>
</tr>
<tr>
<td style="text-align:left">9</td>
<td style="text-align:left">[HMGET key field1 <a href="https://www.runoob.com/redis/hashes-hmget.html" target="_blank" rel="noopener noreferrer">field2]<ExternalLinkIcon/></a> 获取所有给定字段的值</td>
</tr>
<tr>
<td style="text-align:left">10</td>
<td style="text-align:left">[HMSET key field1 value1 <a href="https://www.runoob.com/redis/hashes-hmset.html" target="_blank" rel="noopener noreferrer">field2 value2 ]<ExternalLinkIcon/></a> 同时将多个 field-value (域-值)对设置到哈希表 key 中。</td>
</tr>
<tr>
<td style="text-align:left">11</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hset.html" target="_blank" rel="noopener noreferrer">HSET key field value<ExternalLinkIcon/></a> 将哈希表 key 中的字段 field 的值设为 value 。</td>
</tr>
<tr>
<td style="text-align:left">12</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hsetnx.html" target="_blank" rel="noopener noreferrer">HSETNX key field value<ExternalLinkIcon/></a> 只有在字段 field 不存在时，设置哈希表字段的值。</td>
</tr>
<tr>
<td style="text-align:left">13</td>
<td style="text-align:left"><a href="https://www.runoob.com/redis/hashes-hvals.html" target="_blank" rel="noopener noreferrer">HVALS key<ExternalLinkIcon/></a> 获取哈希表中所有值。</td>
</tr>
<tr>
<td style="text-align:left">14</td>
<td style="text-align:left">[HSCAN key cursor <a href="https://www.runoob.com/redis/hashes-hscan.html" target="_blank" rel="noopener noreferrer">MATCH pattern] [COUNT count]<ExternalLinkIcon/></a> 迭代哈希表中的键值对。</td>
</tr>
</tbody>
</table>
<p><a href="https://redis.io/commands" target="_blank" rel="noopener noreferrer">更多命令请参考：https://redis.io/commands<ExternalLinkIcon/></a></p>
<hr>
<h2 id="hash使用" tabindex="-1"><a class="header-anchor" href="#hash使用" aria-hidden="true">#</a> hash使用</h2>
<p><img src="@source/markdown/images/oefCXypTigtH2QK.png" alt="image-20220402113234522"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>基本操作：
hset/hget/hgetall/hdel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="hgetall的使用" tabindex="-1"><a class="header-anchor" href="#hgetall的使用" aria-hidden="true">#</a> hgetall的使用</h5>
<p><img src="@source/markdown/images/sdBHkeAEPRIy7Z5.png" alt="image-20220402113425749"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用hmset和hmget一次性获取多个
hmset lisa age name add phon 
hmget lisa age name 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="hlen" tabindex="-1"><a class="header-anchor" href="#hlen" aria-hidden="true">#</a> HLEN</h5>
<p><strong>HLEN key</strong></p>
<p>返回哈希表 <code v-pre>key</code> 中域的数量。</p>
<ul>
<li>
<p><strong>时间复杂度：</strong></p>
<p>O(1)</p>
</li>
<li>
<p><strong>返回值：</strong></p>
<p>哈希表中域的数量。当 <code v-pre>key</code> 不存在时，返回 <code v-pre>0</code> 。</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis> HSET db redis redis.com
(integer) 1

redis> HSET db mysql mysql.com
(integer) 1

redis> HLEN db
(integer) 2

redis> HSET db mongodb mongodb.org
(integer) 1

redis> HLEN db
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>HKEYS key</strong></p>
<p>返回哈希表 <code v-pre>key</code> 中的所有域。</p>
<ul>
<li>
<p><strong>可用版本：</strong></p>
<blockquote>
<p>= 2.0.0</p>
</blockquote>
</li>
<li>
<p><strong>时间复杂度：</strong></p>
<p>O(N)， <code v-pre>N</code> 为哈希表的大小。</p>
</li>
<li>
<p><strong>返回值：</strong></p>
<p>一个包含哈希表中所有域的表。当 <code v-pre>key</code> 不存在时，返回一个空表。</p>
</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code># 哈希表非空

redis<span class="token operator">></span> HMSET website google www<span class="token punctuation">.</span>google<span class="token punctuation">.</span>com yahoo www<span class="token punctuation">.</span>yahoo<span class="token punctuation">.</span>com
OK

redis<span class="token operator">></span> HKEYS website
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"google"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"yahoo"</span>


# 空哈希表<span class="token operator">/</span>key不存在

redis<span class="token operator">></span> EXISTS fake_key
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

redis<span class="token operator">></span> HKEYS fake_key
<span class="token punctuation">(</span>empty list or set<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>HVALS key</strong></p>
<p>返回哈希表 <code v-pre>key</code> 中所有域的值。</p>
<ul>
<li>
<p><strong>可用版本：</strong></p>
<blockquote>
<p>= 2.0.0</p>
</blockquote>
</li>
<li>
<p><strong>时间复杂度：</strong></p>
<p>O(N)， <code v-pre>N</code> 为哈希表的大小。</p>
</li>
<li>
<p><strong>返回值：</strong></p>
<p>一个包含哈希表中所有值的表。当 <code v-pre>key</code> 不存在时，返回一个空表。</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 非空哈希表

redis> HMSET website google www.google.com yahoo www.yahoo.com
OK

redis> HVALS website
1) "www.google.com"
2) "www.yahoo.com"


# 空哈希表/不存在的key

redis> EXISTS not_exists
(integer) 0

redis> HVALS not_exists
(empty list or set)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3>
<p><strong>Redis列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）</strong></p>
<p>一个列表最多可以包含 232 - 1 个元素 (4294967295, 每个列表超过40亿个元素)。</p>
<blockquote>
<p>lish 列表是简单的字符串列表，按照插入顺序排序，你可以添加一个元素到列表的头部或者尾部，可以重复，是有序的</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>127.0.0.1:6379> lpush city beijin shanghai tianjing wuhan
(integer) 4
127.0.0.1:6379> lrange city 0 -1
1) "wuhan"
2) "tianjing"
3) "shanghai"
4) "beijin"
127.0.0.1:6379> lrange city 0 0
1) "wuhan"
127.0.0.1:6379> lrange city 0 5
1) "wuhan"
2) "tianjing"
3) "shanghai"
4) "beijin"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/02/fB9YvjhP8QSVuZR.png" alt="image-20220402124146272"></p>
<p><strong>从左边开始取出，和顺序相反，相当于链表</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>lpush/rpush/lrange/lpop/rpop/del
lpush:右边插入
rpush:左边插入
lrange:截取范围（使用正数或者是负数下标，-1表示倒数第一个）
lpop：从链表左边弹出数据，踢掉
rpop：从链表右边弹出数据，踢掉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/02/rPpANRyFCkKOg4W.png" alt="image-20220402125803165"></p>
<p><strong>lish长度</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>127.0.0.1:6379> llen city
(integer) 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果不存在，则key被解释为一个空列表，返回0</p>
</blockquote>
<h3 id="set-集合" tabindex="-1"><a class="header-anchor" href="#set-集合" aria-hidden="true">#</a> set（集合）</h3>
<p><strong>set是string类型的==无序集合==。底层是hash table数据结构，set也是存放很多字符串元素，字符串元素是无序的，而且==元素的值不能重复==。</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">></span> llen city
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">></span> sadd emile xiongxinwei<span class="token variable">@nsddd.top</span> <span class="token number">3293172751</span>nss<span class="token variable">@gmail.com</span> xiongxinwei<span class="token variable">@mail.com</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">></span> SMEMBERS emile
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"3293172751nss@gmail.com"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"xiongxinwei@nsddd.top"</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">"xiongxinwei@mail.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sisemmber :判断值是否是成员
srem :删除指定值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


