<template><div><h1 id="redis基础" tabindex="-1"><a class="header-anchor" href="#redis基础" aria-hidden="true">#</a> redis基础</h1>
<nav class="table-of-contents"><ul><li><router-link to="#redis介绍">redis介绍</router-link><ul><li><router-link to="#redis的安装和使用">redis的安装和使用</router-link></li></ul></li><li><router-link to="#ubuntu-apt-命令安装">Ubuntu apt 命令安装</router-link><ul><li><router-link to="#启动-redis">启动 Redis</router-link></li><li><router-link to="#查看-redis-是否启动">查看 redis 是否启动？</router-link></li></ul></li><li><router-link to="#redis-配置">Redis 配置</router-link><ul><li><router-link to="#实例">实例</router-link></li></ul></li><li><router-link to="#参数说明">参数说明</router-link></li><li><router-link to="#redis-数据类型">Redis 数据类型</router-link><ul><li><router-link to="#string-字符串">String（字符串）</router-link></li><li><router-link to="#hash-哈希">Hash（哈希）</router-link></li><li><router-link to="#list-列表">List（列表）</router-link></li><li><router-link to="#set-集合">Set（集合）</router-link></li></ul></li><li><router-link to="#zset-sorted-set-有序集合">zset(sorted set：有序集合)</router-link></li><li><router-link to="#redis-命令">Redis 命令</router-link><ul><li><router-link to="#在远程服务上执行命令">在远程服务上执行命令</router-link></li></ul></li></ul></nav>
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
<h2 id="redis介绍" tabindex="-1"><a class="header-anchor" href="#redis介绍" aria-hidden="true">#</a> redis介绍</h2>
<p><strong>redis是一个nosql数据库，不是传统的关系数据库</strong></p>
<p><a href="https://redis.io" target="_blank" rel="noopener noreferrer">官网：https://redis.io<ExternalLinkIcon/></a>和http://redis.cn</p>
<p><a href="https://redisdoc.com" target="_blank" rel="noopener noreferrer">指令：https://redisdoc.com<ExternalLinkIcon/></a></p>
<blockquote>
<p>特点是性能非常高，既可以把数据加载到内存也可以把数据持久化。</p>
<p>目前完全开源，高性能的分布式内存数据库，基于内存运行并支持持久化的nosql数据库，<strong>是最热门的数据库之一，也被认为数据结构服务器</strong></p>
</blockquote>
<p><strong>特点：支持丰富的数据结构，可持续化，保证了数据的安全  ==内存高速缓存数据库==</strong></p>
<blockquote>
<p>使用C语言编写</p>
</blockquote>
<h3 id="redis的安装和使用" tabindex="-1"><a class="header-anchor" href="#redis的安装和使用" aria-hidden="true">#</a> redis的安装和使用</h3>
<p><strong>Linux直接下载</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget http://download.redis.io/releases/redis-6.0.8.tar.gz
tar xzf redis-6.0.8.tar.gz
cd redis-6.0.8
make 
#/*或者*/
make PREFIX=/usr/local/redis install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完 <strong>make</strong> 命令后，redis-6.0.8 的 <strong>src</strong> 目录下会出现编译后的 redis 服务程序 redis-server，还有用于测试的客户端程序 redis-cli：</p>
<p>下面启动 redis 服务：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cd src
# ./redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这种方式启动 redis 使用的是默认配置。也可以通过启动参数告诉 redis 使用指定配置文件使用下面命令启动。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd src
./redis-server ../redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>redis.conf</strong> 是一个默认的配置文件。我们可以根据需要使用自己的配置文件。</p>
<p><strong>默认是不支持后台启动，使用不方便，需要通过配置文件进行配置</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 redis 服务进程后，就可以使用测试客户端程序 redis-cli 和 redis 服务交互了。 比如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd src
./redis-cli
redis> set foo bar
OK
redis> get foo
"bar"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们使用的sh命令</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis-cli:命令行客户端
redis-server:服务端
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="ubuntu-apt-命令安装" tabindex="-1"><a class="header-anchor" href="#ubuntu-apt-命令安装" aria-hidden="true">#</a> Ubuntu apt 命令安装</h2>
<p>在 Ubuntu 系统安装 Redis 可以使用以下命令:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># sudo apt update
# sudo apt install redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-redis" tabindex="-1"><a class="header-anchor" href="#启动-redis" aria-hidden="true">#</a> 启动 Redis</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看-redis-是否启动" tabindex="-1"><a class="header-anchor" href="#查看-redis-是否启动" aria-hidden="true">#</a> 查看 redis 是否启动？</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令将打开以下终端：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis 127.0.0.1:6379>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>127.0.0.1 是本机 IP ，6379 是 redis 服务端口。现在我们输入 PING 命令。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis 127.0.0.1:6379> ping
PONG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上说明我们已经成功安装了redis。</p>
<p><strong>目录结构：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail redis-4.0.11<span class="token punctuation">]</span><span class="token comment"># ls -al</span>
total <span class="token number">324</span>
drwxrwxr-x   <span class="token number">6</span> root root   <span class="token number">4096</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> <span class="token builtin class-name">.</span>
drwxr-xr-x.  <span class="token number">9</span> root root   <span class="token number">4096</span> Apr  <span class="token number">1</span> <span class="token number">20</span>:50 <span class="token punctuation">..</span>
-rw-rw-r--   <span class="token number">1</span> root root <span class="token number">164219</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> 00-RELEASENOTES
-rw-rw-r--   <span class="token number">1</span> root root     <span class="token number">53</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> BUGS
-rw-rw-r--   <span class="token number">1</span> root root   <span class="token number">1815</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> CONTRIBUTING
-rw-rw-r--   <span class="token number">1</span> root root   <span class="token number">1487</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> COPYING
drwxrwxr-x   <span class="token number">6</span> root root   <span class="token number">4096</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> deps
-rw-rw-r--   <span class="token number">1</span> root root    <span class="token number">376</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> .gitignore
-rw-rw-r--   <span class="token number">1</span> root root     <span class="token number">11</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> INSTALL
-rw-rw-r--   <span class="token number">1</span> root root    <span class="token number">151</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> Makefile
-rw-rw-r--   <span class="token number">1</span> root root   <span class="token number">4223</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> MANIFESTO
-rw-rw-r--   <span class="token number">1</span> root root  <span class="token number">20543</span> Aug  <span class="token number">4</span>  <span class="token number">2018</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>windows**下载地址：**https://github.com/tporadowski/redis/releases。</p>
<p>打开一个 <strong>cmd</strong> 窗口 使用 cd 命令切换目录到 <strong><code v-pre>C:\redis</code></strong> 运行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis-server.exe redis.windows.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想方便的话，<strong>可以把 redis 的路径加到系统的环境变量里</strong>，这样就省得再输路径了，后面的那个 <code v-pre>redis.windows.conf</code> 可以省略，如果省略，会启用默认的。输入之后，会显示如下界面：</p>
<p>这时候另启一个 <code v-pre>cmd</code> 窗口，原来的不要关闭，不然就无法访问服务端了。</p>
<p>切换到 <code v-pre>redis</code> 目录下运行:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis-cli.exe -h 127.0.0.1 -p 6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置键值对:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>set myKey abc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取出键值对:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>get myKey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/01/nYFityhS3rGOm8d.jpg" alt="Redis 安装"></p>
<p><strong>redis默认有十六个数据库，初始数据库使用0号库，编号是0…15</strong></p>
<h2 id="redis-配置" tabindex="-1"><a class="header-anchor" href="#redis-配置" aria-hidden="true">#</a> Redis 配置</h2>
<p>Redis 的配置文件位于 Redis 安装目录下，文件名为 <strong>redis.conf</strong>(Windows 名为 redis.windows.conf)。</p>
<p>你可以通过 <strong>CONFIG</strong> 命令查看或设置配置项。</p>
<hr>
<p><strong>语法Redis CONFIG 命令格式如下：</strong><code v-pre>redis 127.0.0.1:6379&gt; CONFIG GET CONFIG_SETTING_NAME</code></p>
<h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis 127.0.0.1:6379> CONFIG GET loglevel

1) "loglevel"
2) "notice"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2>
<p>redis.conf 配置项说明如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">序号</th>
<th style="text-align:left">配置项</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left"><code v-pre>daemonize no</code></td>
<td style="text-align:left">Redis 默认不是以守护进程的方式运行，可以通过该配置项修改，使用 yes 启用守护进程（Windows 不支持守护线程的配置为 no ）</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"><code v-pre>pidfile /var/run/redis.pid</code></td>
<td style="text-align:left">当 Redis 以守护进程方式运行时，Redis 默认会把 pid 写入 /var/run/redis.pid 文件，可以通过 pidfile 指定</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left"><code v-pre>port 6379</code></td>
<td style="text-align:left">指定 Redis 监听端口，默认端口为 6379，作者在自己的一篇博文中解释了为什么选用 6379 作为默认端口，因为 6379 在手机按键上 MERZ 对应的号码，而 MERZ 取自意大利歌女 Alessia Merz 的名字</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"><code v-pre>bind 127.0.0.1</code></td>
<td style="text-align:left">绑定的主机地址</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left"><code v-pre>timeout 300</code></td>
<td style="text-align:left">当客户端闲置多长秒后关闭连接，如果指定为 0 ，表示关闭该功能</td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left"><code v-pre>loglevel notice</code></td>
<td style="text-align:left">指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning，默认为 notice</td>
</tr>
<tr>
<td style="text-align:left">7</td>
<td style="text-align:left"><code v-pre>logfile stdout</code></td>
<td style="text-align:left">日志记录方式，默认为标准输出，如果配置 Redis 为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给 /dev/null</td>
</tr>
<tr>
<td style="text-align:left">8</td>
<td style="text-align:left"><code v-pre>databases 16</code></td>
<td style="text-align:left">设置数据库的数量，默认数据库为0，可以使用SELECT 命令在连接上指定数据库id</td>
</tr>
<tr>
<td style="text-align:left">9</td>
<td style="text-align:left"><code v-pre>save &lt;seconds&gt; &lt;changes&gt;</code>Redis 默认配置文件中提供了三个条件：<strong>save 900 1save 300 10save 60 10000</strong>分别表示 900 秒（15 分钟）内有 1 个更改，300 秒（5 分钟）内有 10 个更改以及 60 秒内有 10000 个更改。</td>
<td style="text-align:left">指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合</td>
</tr>
<tr>
<td style="text-align:left">10</td>
<td style="text-align:left"><code v-pre>rdbcompression yes</code></td>
<td style="text-align:left">指定存储至本地数据库时是否压缩数据，默认为 yes，Redis 采用 LZF 压缩，如果为了节省 CPU 时间，可以关闭该选项，但会导致数据库文件变的巨大</td>
</tr>
<tr>
<td style="text-align:left">11</td>
<td style="text-align:left"><code v-pre>dbfilename dump.rdb</code></td>
<td style="text-align:left">指定本地数据库文件名，默认值为 dump.rdb</td>
</tr>
<tr>
<td style="text-align:left">12</td>
<td style="text-align:left"><code v-pre>dir ./</code></td>
<td style="text-align:left">指定本地数据库存放目录</td>
</tr>
<tr>
<td style="text-align:left">13</td>
<td style="text-align:left"><code v-pre>slaveof &lt;masterip&gt; &lt;masterport&gt;</code></td>
<td style="text-align:left">设置当本机为 slave 服务时，设置 master 服务的 IP 地址及端口，在 Redis 启动时，它会自动从 master 进行数据同步</td>
</tr>
<tr>
<td style="text-align:left">14</td>
<td style="text-align:left"><code v-pre>masterauth &lt;master-password&gt;</code></td>
<td style="text-align:left">当 master 服务设置了密码保护时，slave 服务连接 master 的密码</td>
</tr>
<tr>
<td style="text-align:left">15</td>
<td style="text-align:left"><code v-pre>requirepass foobared</code></td>
<td style="text-align:left">设置 Redis 连接密码，如果配置了连接密码，客户端在连接 Redis 时需要通过 AUTH <password> 命令提供密码，默认关闭</td>
</tr>
<tr>
<td style="text-align:left">16</td>
<td style="text-align:left"><code v-pre> maxclients 128</code></td>
<td style="text-align:left">设置同一时间最大客户端连接数，默认无限制，Redis 可以同时打开的客户端连接数为 Redis 进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis 会关闭新的连接并向客户端返回 max number of clients reached 错误信息</td>
</tr>
<tr>
<td style="text-align:left">17</td>
<td style="text-align:left"><code v-pre>maxmemory &lt;bytes&gt;</code></td>
<td style="text-align:left">指定 Redis 最大内存限制，Redis 在启动时会把数据加载到内存中，达到最大内存后，Redis 会先尝试清除已到期或即将到期的 Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis 新的 vm 机制，会把 Key 存放内存，Value 会存放在 swap 区</td>
</tr>
<tr>
<td style="text-align:left">18</td>
<td style="text-align:left"><code v-pre>appendonly no</code></td>
<td style="text-align:left">指定是否在每次更新操作后进行日志记录，Redis 在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 redis 本身同步数据文件是按上面 save 条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为 no</td>
</tr>
<tr>
<td style="text-align:left">19</td>
<td style="text-align:left"><code v-pre>appendfilename appendonly.aof</code></td>
<td style="text-align:left">指定更新日志文件名，默认为 appendonly.aof</td>
</tr>
<tr>
<td style="text-align:left">20</td>
<td style="text-align:left"><code v-pre>appendfsync everysec</code></td>
<td style="text-align:left">指定更新日志条件，共有 3 个可选值：<strong>no</strong>：表示等操作系统进行数据缓存同步到磁盘（快）<strong>always</strong>：表示每次更新操作后手动调用 fsync() 将数据写到磁盘（慢，安全）<strong>everysec</strong>：表示每秒同步一次（折中，默认值）</td>
</tr>
<tr>
<td style="text-align:left">21</td>
<td style="text-align:left"><code v-pre>vm-enabled no</code></td>
<td style="text-align:left">指定是否启用虚拟内存机制，默认值为 no，简单的介绍一下，VM 机制将数据分页存放，由 Redis 将访问量较少的页即冷数据 swap 到磁盘上，访问多的页面由磁盘自动换出到内存中（在后面的文章我会仔细分析 Redis 的 VM 机制）</td>
</tr>
<tr>
<td style="text-align:left">22</td>
<td style="text-align:left"><code v-pre>vm-swap-file /tmp/redis.swap</code></td>
<td style="text-align:left">虚拟内存文件路径，默认值为 /tmp/redis.swap，不可多个 Redis 实例共享</td>
</tr>
<tr>
<td style="text-align:left">23</td>
<td style="text-align:left"><code v-pre>vm-max-memory 0</code></td>
<td style="text-align:left">将所有大于 vm-max-memory 的数据存入虚拟内存，无论 vm-max-memory 设置多小，所有索引数据都是内存存储的(Redis 的索引数据 就是 keys)，也就是说，当 vm-max-memory 设置为 0 的时候，其实是所有 value 都存在于磁盘。默认值为 0</td>
</tr>
<tr>
<td style="text-align:left">24</td>
<td style="text-align:left"><code v-pre>vm-page-size 32</code></td>
<td style="text-align:left">Redis swap 文件分成了很多的 page，一个对象可以保存在多个 page 上面，但一个 page 上不能被多个对象共享，vm-page-size 是要根据存储的 数据大小来设定的，作者建议如果存储很多小对象，page 大小最好设置为 32 或者 64bytes；如果存储很大大对象，则可以使用更大的 page，如果不确定，就使用默认值</td>
</tr>
<tr>
<td style="text-align:left">25</td>
<td style="text-align:left"><code v-pre>vm-pages 134217728</code></td>
<td style="text-align:left">设置 swap 文件中的 page 数量，由于页表（一种表示页面空闲或使用的 bitmap）是在放在内存中的，，在磁盘上每 8 个 pages 将消耗 1byte 的内存。</td>
</tr>
<tr>
<td style="text-align:left">26</td>
<td style="text-align:left"><code v-pre>vm-max-threads 4</code></td>
<td style="text-align:left">设置访问swap文件的线程数,最好不要超过机器的核数,如果设置为0,那么所有对swap文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为4</td>
</tr>
<tr>
<td style="text-align:left">27</td>
<td style="text-align:left"><code v-pre>glueoutputbuf yes</code></td>
<td style="text-align:left">设置在向客户端应答时，是否把较小的包合并为一个包发送，默认为开启</td>
</tr>
<tr>
<td style="text-align:left">28</td>
<td style="text-align:left"><code v-pre>hash-max-zipmap-entries 64 hash-max-zipmap-value 512</code></td>
<td style="text-align:left">指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法</td>
</tr>
<tr>
<td style="text-align:left">29</td>
<td style="text-align:left"><code v-pre>activerehashing yes</code></td>
<td style="text-align:left">指定是否激活重置哈希，默认为开启（后面在介绍 Redis 的哈希算法时具体介绍）</td>
</tr>
<tr>
<td style="text-align:left">30</td>
<td style="text-align:left"><code v-pre>include /path/to/local.conf</code></td>
<td style="text-align:left">指定包含其它的配置文件，可以在同一主机上多个Redis实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="redis-数据类型" tabindex="-1"><a class="header-anchor" href="#redis-数据类型" aria-hidden="true">#</a> Redis 数据类型</h2>
<p>Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。</p>
<hr>
<h3 id="string-字符串" tabindex="-1"><a class="header-anchor" href="#string-字符串" aria-hidden="true">#</a> String（字符串）</h3>
<p>string 是 redis 最基本的类型，你可以理解成与 Memcached 一模一样的类型，一个 key 对应一个 value。</p>
<p>string 类型是二进制安全的。意思是 redis 的 string 可以包含任何数据。比如jpg图片或者序列化的对象。</p>
<p>string 类型是 Redis 最基本的数据类型，string 类型的值最大能存储 512MB。</p>
<h4 id="实例-1" tabindex="-1"><a class="header-anchor" href="#实例-1" aria-hidden="true">#</a> 实例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis 127.0.0.1:6379> SET runoob "菜鸟教程"
OK
redis 127.0.0.1:6379> GET runoob
"菜鸟教程"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上实例中我们使用了 Redis 的 <strong>SET</strong> 和 <strong>GET</strong> 命令。键为 runoob，对应的值为 <strong>菜鸟教程</strong>。</p>
<p>**注意：**一个键最大能存储 512MB。</p>
<hr>
<h3 id="hash-哈希" tabindex="-1"><a class="header-anchor" href="#hash-哈希" aria-hidden="true">#</a> Hash（哈希）</h3>
<p><strong>类似于map，一个map可以有多个key-value，数据以hash方式管理，也是有多对key-value</strong></p>
<p>Redis hash 是一个键值(key=&gt;value)对集合。</p>
<p>Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象。</p>
<h4 id="实例-2" tabindex="-1"><a class="header-anchor" href="#实例-2" aria-hidden="true">#</a> 实例</h4>
<p><strong>DEL runoob</strong> 用于删除前面测试用过的 key，不然会报错：<strong>(error) WRONGTYPE Operation against a key holding the wrong kind of value</strong></p>
<p><img src="https://s2.loli.net/2022/04/01/I4pEjxlWCeTRO8J.jpg" alt="img"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis 127.0.0.1:6379> DEL runoob
redis 127.0.0.1:6379> HMSET runoob field1 "Hello" field2 "World"
"OK"
redis 127.0.0.1:6379> HGET runoob field1
"Hello"
redis 127.0.0.1:6379> HGET runoob field2
"World"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例中我们使用了 Redis <strong>HMSET, HGET</strong> 命令，<strong>HMSET</strong> 设置了两个 <strong>field=&gt;value</strong> 对, HGET 获取对应 <strong>field</strong> 对应的 <strong>value</strong>。</p>
<p><strong>每个 hash 可以存储 232 -1 键值对</strong>（40多亿）。</p>
<hr>
<h3 id="list-列表" tabindex="-1"><a class="header-anchor" href="#list-列表" aria-hidden="true">#</a> List（列表）</h3>
<p>Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。（栈+队列）</p>
<h4 id="实例-3" tabindex="-1"><a class="header-anchor" href="#实例-3" aria-hidden="true">#</a> 实例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis 127.0.0.1:6379> DEL runoob
redis 127.0.0.1:6379> lpush runoob redis
(integer) 1
redis 127.0.0.1:6379> lpush runoob mongodb
(integer) 2
redis 127.0.0.1:6379> lpush runoob rabbitmq
(integer) 3
redis 127.0.0.1:6379> lrange runoob 0 10
1) "rabbitmq"
2) "mongodb"
3) "redis"
redis 127.0.0.1:6379>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列表最多可存储 232 - 1 元素 (4294967295, 每个列表可存储40多亿)。</p>
<hr>
<h3 id="set-集合" tabindex="-1"><a class="header-anchor" href="#set-集合" aria-hidden="true">#</a> Set（集合）</h3>
<p>Redis 的 Set 是 string 类型的无序集合。</p>
<p>集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。</p>
<h4 id="sadd-命令" tabindex="-1"><a class="header-anchor" href="#sadd-命令" aria-hidden="true">#</a> sadd 命令</h4>
<p>添加一个 string 元素到 key 对应的 set 集合中，成功返回 1，如果元素已经在集合中返回 0。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sadd key member
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="实例-4" tabindex="-1"><a class="header-anchor" href="#实例-4" aria-hidden="true">#</a> 实例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis 127.0.0.1:6379> DEL runoob
redis 127.0.0.1:6379> sadd runoob redis
(integer) 1
redis 127.0.0.1:6379> sadd runoob mongodb
(integer) 1
redis 127.0.0.1:6379> sadd runoob rabbitmq
(integer) 1
redis 127.0.0.1:6379> sadd runoob rabbitmq
(integer) 0
redis 127.0.0.1:6379> smembers runoob

1) "redis"
2) "rabbitmq"
3) "mongodb"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**以上实例中 rabbitmq 添加了两次，但根据集合内元素的唯一性，第二次插入的元素将被忽略。</p>
<p>集合中最大的成员数为 232 - 1(4294967295, 每个集合可存储40多亿个成员)。</p>
<hr>
<h2 id="zset-sorted-set-有序集合" tabindex="-1"><a class="header-anchor" href="#zset-sorted-set-有序集合" aria-hidden="true">#</a> zset(sorted set：有序集合)</h2>
<p>Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。</p>
<p>不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。</p>
<p>zset的成员是唯一的,但分数(score)却可以重复。</p>
<h4 id="zadd-命令" tabindex="-1"><a class="header-anchor" href="#zadd-命令" aria-hidden="true">#</a> zadd 命令</h4>
<p>添加元素到集合，元素在集合中存在则更新对应score</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>zadd key score member 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="实例-5" tabindex="-1"><a class="header-anchor" href="#实例-5" aria-hidden="true">#</a> 实例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>redis 127.0.0.1:6379> DEL runoob
redis 127.0.0.1:6379> zadd runoob 0 redis
(integer) 1
redis 127.0.0.1:6379> zadd runoob 0 mongodb
(integer) 1
redis 127.0.0.1:6379> zadd runoob 0 rabbitmq
(integer) 1
redis 127.0.0.1:6379> zadd runoob 0 rabbitmq
(integer) 0
redis 127.0.0.1:6379> ZRANGEBYSCORE runoob 0 1000
1) "mongodb"
2) "rabbitmq"
3) "redis"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-命令" tabindex="-1"><a class="header-anchor" href="#redis-命令" aria-hidden="true">#</a> Redis 命令</h2>
<p>Redis 命令用于在 redis 服务上执行操作。</p>
<p>要在 redis 服务上执行命令需要一个 redis 客户端。Redis 客户端在我们之前下载的的 redis 的安装包中。</p>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<p>Redis 客户端的基本语法为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="实例-6" tabindex="-1"><a class="header-anchor" href="#实例-6" aria-hidden="true">#</a> 实例</h4>
<p>以下实例讲解了如何启动 redis 客户端：</p>
<p>启动 redis 服务器，打开终端并输入命令 <strong>redis-cli</strong>，该命令会连接本地的 redis 服务。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ redis-cli
redis 127.0.0.1:6379>
redis 127.0.0.1:6379> PING

PONG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上实例中我们连接到本地的 redis 服务并执行 <strong>PING</strong> 命令，该命令用于检测 redis 服务是否启动。</p>
<hr>
<h3 id="在远程服务上执行命令" tabindex="-1"><a class="header-anchor" href="#在远程服务上执行命令" aria-hidden="true">#</a> 在远程服务上执行命令</h3>
<p>如果需要在远程 redis 服务上执行命令，同样我们使用的也是 <strong>redis-cli</strong> 命令。</p>
<h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ redis-cli -h host -p port -a password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="实例-7" tabindex="-1"><a class="header-anchor" href="#实例-7" aria-hidden="true">#</a> 实例</h4>
<p>以下实例演示了如何连接到主机为 127.0.0.1，端口为 6379 ，密码为 mypass 的 redis 服务上。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$redis-cli -h 127.0.0.1 -p 6379 -a "mypass"
redis 127.0.0.1:6379>
redis 127.0.0.1:6379> PING

PONG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/01/t8lB15EQwTkcIYK.png" alt="image-20220401222142927"></p>
</div></template>


