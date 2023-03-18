<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第34节-软件部署实战-下-iam系统安全加固、水平扩缩容实战" tabindex="-1"><a class="header-anchor" href="#第34节-软件部署实战-下-iam系统安全加固、水平扩缩容实战" aria-hidden="true">#</a> 第34节 软件部署实战（下）：IAM系统安全加固、水平扩缩容实战</h1>
<br>
<div><a href = '33.md' style='float:left'>⬆️上一节🔗  </a><a href = '35.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#iam应用安全性加固">IAM应用安全性加固</router-link><ul><li><router-link to="#iptables简介">iptables简介</router-link></li><li><router-link to="#网络数据包处理流程">网络数据包处理流程</router-link></li><li><router-link to="#iptables工具使用方式介绍">iptables工具使用方式介绍</router-link></li><li><router-link to="#iam安全加固-内网不安全">IAM安全加固（内网不安全）</router-link></li><li><router-link to="#iam安全加固-内网安全">IAM安全加固（内网安全）</router-link></li></ul></li><li><router-link to="#弹性伸缩">弹性伸缩</router-link><ul><li><router-link to="#系统扩容">系统扩容</router-link></li><li><router-link to="#系统缩容">系统缩容</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p>这一讲和前面两讲，都是介绍如何基于物理机/虚拟机来部署IAM的。在前面两讲，我们了解了如何部署一个高可用的 IAM 应用，今天就再来看看IAM 应用安全和弹性伸缩能力的构建方式。在这一讲中，我会带你加固IAM应用的安全性，并介绍如何具体执行扩缩容步骤。</p>
<p>接下来，我们先来看下如何加固IAM应用的安全性。</p>
<h2 id="iam应用安全性加固" tabindex="-1"><a class="header-anchor" href="#iam应用安全性加固" aria-hidden="true">#</a> IAM应用安全性加固</h2>
<p>iam-apiserver、iam-authz-server、MariaDB、Redis和MongoDB这些服务，都提供了绑定监听网卡的功能。我们可以将这些服务绑定到内网网卡上，从而只接收来自于内网的请求，通过这种方式，可以加固我们的系统。</p>
<p>我们也可以通过iptables来实现类似的功能，通过将安全问题统一收敛到iptables规则，可以使我们更容易地维护安全类设置。</p>
<p>这门课通过iptables来加固系统，使系统变得更加安全。下面，我先来对iptables工具进行一些简单的介绍。</p>
<h3 id="iptables简介" tabindex="-1"><a class="header-anchor" href="#iptables简介" aria-hidden="true">#</a> iptables简介</h3>
<p>iptables是Linux下最优秀的防火墙工具，也是Linux内核中netfilter网络子系统用户态的工具。</p>
<p>netfilter提供了一系列的接口，在一个到达本机的数据包，或者经本机转发的数据包流程中添加了一些可供用户操作的点，这些点被称为HOOK点。通过在HOOK点注册数据包处理函数，可以实现数据包转发、数据包过滤、地址转换等功能。</p>
<p>用户通过iptables工具定义各种规则，这些规则通过iptables传给内核中的netfilter。最终，netfilter会根据规则对网络包进行过滤。Linux系统一般会默认安装iptables软件。防火墙根据iptables里的规则，对收到的网络数据包进行处理。</p>
<p>iptables里的数据组织结构分为表、链、规则。</p>
<ul>
<li>**表（tables）😗*表可以提供特定的功能，每个表里包含多个链。iptables里面一共有5个表，分别是filter、nat、mangle、raw、security。这些表，分别用来实现包过滤、网络地址转换、包重构、数据追踪处理和SELinux标记设置。</li>
<li>**链（chains）😗*链是数据包传播的路径，每一条链中可以有一个或多个规则。当一个数据包到达一个链时，iptables会从链中第一条规则开始，检查该数据包是否满足规则所定义的条件。如果满足，就会根据该条规则所定义的方法，处理该数据包。否则，就继续检查下一条规则。如果该数据包不符合链中任一条规则，iptables就会根据该链预先定义的默认策略来处理数据包。</li>
<li>**规则（rules）：**规则存储在内核空间的信息包过滤表中，用来描述“如果数据包满足所描述的条件，就按照要求处理这个数据包，如果不满足，就判断下一条规则”。</li>
</ul>
<p>其中，iptables中表和链的种类及其功能，如下表所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/11/0f/112df7eb9a1258dd61e3bd0e0b6b210f.png?wh=2248x1941" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/11/0f/112df7eb9a1258dd61e3bd0e0b6b210f.png?wh=2248x1941" alt="img"><ExternalLinkIcon/></a></p>
<p>上面的表格中，五张表的处理是有顺序的。当数据包到达某一条链时，会按照RAW、MANGLE、NAT、FILTER、SECURITY的顺序进行处理。</p>
<p>到这里，我介绍了关于iptables的一些基础知识，但这还远远不够。要想使用iptables来加固你的系统，你还需要掌握iptables工具的使用方法。接下来，我先来介绍下iptables是如何处理网络数据包的。</p>
<h3 id="网络数据包处理流程" tabindex="-1"><a class="header-anchor" href="#网络数据包处理流程" aria-hidden="true">#</a> 网络数据包处理流程</h3>
<p>网络数据包的处理流程如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/9e/bb/9ece7f3001c022790f1fd1a0yy1246bb.jpg?wh=2248x1414" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/9e/bb/9ece7f3001c022790f1fd1a0yy1246bb.jpg?wh=2248x1414" alt="img"><ExternalLinkIcon/></a></p>
<p>具体可以分为两个步骤。</p>
<p>第一步，当数据包进入网卡后，它首先进入PREROUTING链，根据目的IP判断是否转发出去。</p>
<p>第二步分为两种情况：如果数据包目的地是本机，它会到达INPUT链。到达后，任何进程都会收到它。本机上的程序可以发送数据包，这些数据包会经过OUTPUT链，然后经POSTROUTING链输出；如果数据包是要转发出去，并且内核允许转发，那么数据包会经过FORWARD链，最后从POSTROUTING链输出。</p>
<h3 id="iptables工具使用方式介绍" tabindex="-1"><a class="header-anchor" href="#iptables工具使用方式介绍" aria-hidden="true">#</a> iptables工具使用方式介绍</h3>
<p>iptables的功能强大，所以使用方法也非常多样。这里，我来介绍下iptables工具的使用方式，并给出一些使用示例。</p>
<ol>
<li>命令格式</li>
</ol>
<p>iptables的语法格式为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>iptables <span class="token punctuation">[</span>-t 表名<span class="token punctuation">]</span> 命令选项 <span class="token punctuation">[</span>链名<span class="token punctuation">]</span> <span class="token punctuation">[</span>条件匹配<span class="token punctuation">]</span> <span class="token punctuation">[</span>-j 目标动作或跳转<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是一个iptables的使用示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-I</span> PREROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">8080</span> <span class="token parameter variable">-j</span> DNAT <span class="token parameter variable">--to</span> <span class="token number">10.0</span>.4.88
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里对上面涉及到的一些参数进行说明。</p>
<ul>
<li>表名/链名：指定iptables命令所操作的表/链。</li>
<li>命令选项：指定处理iptables规则的方式，例如插入、增加、删除、查看等。</li>
<li>条件匹配：指定对符合条件的数据包进行处理。</li>
<li>目标动作或跳转：防火墙处理数据包的方式。</li>
</ul>
<p>iptables的命令选项又分为管理控制选项和通用选项。</p>
<p>管理控制选项如下：</p>
<p><a href="https://static001.geekbang.org/resource/image/6d/b2/6d37f77b4cee31eea694cc588ayy3cb2.png?wh=2248x2323" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/6d/b2/6d37f77b4cee31eea694cc588ayy3cb2.png?wh=2248x2323" alt="img"><ExternalLinkIcon/></a></p>
<p>通用选项如下：</p>
<p><a href="https://static001.geekbang.org/resource/image/0b/ae/0b38f3ba2d722ccf3274a0ae0a5f79ae.png?wh=2248x1498" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/0b/ae/0b38f3ba2d722ccf3274a0ae0a5f79ae.png?wh=2248x1498" alt="img"><ExternalLinkIcon/></a></p>
<p>处理数据包的方式（目标动作或跳转）有多种，具体如下表所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/f7/dc/f796fc7905c88cf0461f4464cec8cddc.png?wh=2248x1625" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/f7/dc/f796fc7905c88cf0461f4464cec8cddc.png?wh=2248x1625" alt="img"><ExternalLinkIcon/></a></p>
<p>上面，我介绍了iptables工具的使用方式。因为内容有点多，你可能仍然不知道如何使用iptables工具。没关系，接下来你可以结合我举的一些例子来看下。</p>
<ol>
<li>命令示例</li>
</ol>
<p>下面的命令示例，默认使用了 <code v-pre>FILTER</code> 表，也即规则存放在 <code v-pre>FILTER</code> 表中，相当于每一条iptables命令都添加了<code v-pre>-t filter</code> 参数。</p>
<ol>
<li>拒绝进入防火墙的所有ICMP协议数据包：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-j</span> REJECT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>允许防火墙转发除ICMP协议以外的所有数据包：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-p</span> <span class="token operator">!</span> icmp <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>拒绝转发来自192.168.1.10主机的数据，允许转发来自192.168.0.0/24网段的数据：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.1.11 <span class="token parameter variable">-j</span> REJECT
$ iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.0.0/24 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>丢弃从外网接口（eth1）进入防火墙本机的源地址为私网地址的数据包：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.0.0/16 <span class="token parameter variable">-j</span> DROP
$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-s</span> <span class="token number">172.16</span>.0.0/12 <span class="token parameter variable">-j</span> DROP
$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-s</span> <span class="token number">10.0</span>.0.0/8 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>只允许管理员从202.13.0.0/16网段使用SSH远程登录防火墙主机：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-s</span> <span class="token number">202.13</span>.0.0/16 <span class="token parameter variable">-j</span> ACCEPT
$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>允许本机开放从TCP端口20-1024提供的应用服务：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">20</span>:1024 <span class="token parameter variable">-j</span> ACCEPT
$ iptables <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--sport</span> <span class="token number">20</span>:1024 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>允许转发来自192.168.0.0/24局域网段的DNS解析请求数据包：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.0.0/24 <span class="token parameter variable">-p</span> udp <span class="token parameter variable">--dport</span> <span class="token number">53</span> <span class="token parameter variable">-j</span> ACCEPT
$ iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-d</span> <span class="token number">192.168</span>.0.0/24 <span class="token parameter variable">-p</span> udp <span class="token parameter variable">--sport</span> <span class="token number">53</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>禁止其他主机ping防火墙主机，但是允许从防火墙上ping其他主机：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> icmp --icmp-type Echo-Request <span class="token parameter variable">-j</span> DROP
$ iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> icmp --icmp-type Echo-Reply <span class="token parameter variable">-j</span> ACCEPT
$ iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> icmp --icmp-type destination-Unreachable <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>禁止转发来自MAC地址为00：0C：29：27：55：3F的数据包和主机的数据包：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-m</span> mac --mac-source 00:0c:29:27:55:3F <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>对外开放TCP端口20、21、25、110，以及被动模式FTP端口1250-1280：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> multiport <span class="token parameter variable">--dport</span> <span class="token number">20,21</span>,25,110,1250:1280 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>禁止转发源IP地址为192.168.1.20-192.168.1.99的TCP数据包：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> iprange --src-range <span class="token number">192.168</span>.1.20-192.168.1.99 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>禁止转发与正常TCP连接无关的非syn请求数据包：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> NEW <span class="token parameter variable">-p</span> tcp <span class="token operator">!</span> <span class="token parameter variable">--syn</span> <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>拒绝访问防火墙的新数据包，但允许响应连接或与已有连接相关的数据包：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> NEW <span class="token parameter variable">-j</span> DROP
$ iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> ESTABLISHED,RELATED <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>只开放本机的web服务（80）、FTP(20、21、20450-20480)，放行外部主机发往服务器其他端口的应答数据包，将其他入站数据包都进行丢弃处理：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> multiport <span class="token parameter variable">--dport</span> <span class="token number">20,21</span>,80 <span class="token parameter variable">-j</span> ACCEPT
$ iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">20450</span>:20480 <span class="token parameter variable">-j</span> ACCEPT
$ iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> ESTABLISHED <span class="token parameter variable">-j</span> ACCEPT
$ iptables <span class="token parameter variable">-P</span> INPUT DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，我们已经了解了iptables的功能，下面来看看如何使用iptables来加固IAM应用。我把它分成内网不安全和内网安全两种情况。</p>
<h3 id="iam安全加固-内网不安全" tabindex="-1"><a class="header-anchor" href="#iam安全加固-内网不安全" aria-hidden="true">#</a> IAM安全加固（内网不安全）</h3>
<p>在设置iptables规则之前，我们需要先梳理系统的访问关系，然后根据这些访问关系设置iptables规则。访问关系如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/9a/8d/9a9b8d4283410dc842505f258128d78d.jpg?wh=2248x1386" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/9a/8d/9a9b8d4283410dc842505f258128d78d.jpg?wh=2248x1386" alt="img"><ExternalLinkIcon/></a></p>
<p>你可以看到，IAM系统服务互访关系分为下面这4种：</p>
<ul>
<li>允许公网客户端访问Nginx的80和443端口。</li>
<li>Keepalived服务之间能够互发VRRP协议包。</li>
<li>Nginx访问各节点上iam-apiserver、iam-authz-server和iam-pump组件开启的HTTP/HTTPS/GRPC服务。</li>
<li>iam服务可以从各节点访问Redis、MariaDB、MongoDB数据库。</li>
</ul>
<p>这里，我们假定IAM系统部署在一个非常大的内网中，该内网部署了很多其他团队的服务，有很多其他团队的研发、测试等人员在内网中执行各种操作。也就是说，我们处在一个不安全的内网中。这时候，如果要加固我们的系统，最安全的方式是屏蔽掉未知的来源IP。</p>
<p>内网不安全的情况下，加固系统可以分为3大步骤，每个步骤中又有一些小步骤。另外，需要新增节点或者删除节点时，也需要进行一些变更操作。下面我们来具体看下。</p>
<p><strong>第一步，设置防火墙规则。</strong></p>
<p>基于上面说到的几种互访关系，我们可以在各个节点上设置iptables规则来加固系统。我将这些规则设置编写成了go工具，用来自动生成设置这些规则的shell脚本。</p>
<p>具体设置的过程可以分为5步。</p>
<ol>
<li>进入iam项目源码根目录。</li>
<li>配置accesss.yaml（工具根据此配置，自动生成iptables设置脚本），内容如下（位于<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/access.yaml" target="_blank" rel="noopener noreferrer">configs/access.yaml<ExternalLinkIcon/></a>文件）：</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 允许登录SSH节点的来源IP，可以是固定IP(例如10.0.4.2)，也可以是个网段，0.0.0.0/0代表不限制来源IP</span>
<span class="token key atrule">ssh-source</span><span class="token punctuation">:</span> 10.0.4.0/24

<span class="token comment"># IAM应用节点列表（来源IP）</span>
<span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 10.0.4.20
  <span class="token punctuation">-</span> 10.0.4.21

<span class="token comment"># 来源IP可以访问的应用端口列表（iam-apiserver, iam-authz-server, iam-pump对外暴露的的端口）</span>
<span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token number">8080</span>
  <span class="token punctuation">-</span> <span class="token number">8443</span>
  <span class="token punctuation">-</span> <span class="token number">9090</span>
  <span class="token punctuation">-</span> <span class="token number">9443</span>
  <span class="token punctuation">-</span> <span class="token number">7070</span>

<span class="token comment"># 来源IP可以访问的数据库端口列表（Redis, MariaDB, MongoDB）</span>
<span class="token key atrule">dbports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token number">3306</span>
  <span class="token punctuation">-</span> <span class="token number">6379</span>
  <span class="token punctuation">-</span> <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的配置中，我们指定了允许登陆机器的子网、Nginx需要访问的端口列表和各节点需要访问的数据库端口列表。</p>
<ol>
<li>生成iptables初始化脚本：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> app <span class="token parameter variable">-a</span> <span class="token parameter variable">-o</span> firewall.sh
$ <span class="token function">ls</span> firewall.sh
firewall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以打开firewall.sh文件，查看该脚本设置的规则。</p>
<ol start="4">
<li>将firewall.sh脚本拷贝到10.0.4.20和10.0.4.21节点执行：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">scp</span> firewall.sh root@10.0.4.20:/tmp/
$ <span class="token function">scp</span> firewall.sh root@10.0.4.21:/tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>登陆10.0.4.20和10.0.4.21机器，执行<code v-pre>/tmp/firewall.sh</code>。</p>
<ol>
<li>在10.0.4.20（数据库节点）节点上，设置iptables规则，以允许各节点访问：</li>
</ol>
<p>因为数据库节点也位于10.0.4.20节点，所以只需要添加新的rule，并将<code v-pre>iptables -A INPUT -j DROP</code>规则放到最后执行即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> db <span class="token parameter variable">-o</span> addrules.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，将addrules.sh脚本拷贝到10.0.4.20节点执行。</p>
<p>注意，因为iptables是按顺序进行规则过滤的，所以需要将<code v-pre>iptables -A INPUT -j DROP</code>规则放在新设置规则的后面，否则执行不到新设置的规则。你可以在设置完iptables规则之后，执行下面的命令来将DROP放到最后：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-j</span> LOG --log-level <span class="token number">7</span> --log-prefix <span class="token string">"Default Deny"</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的addrules.sh脚本加入以上设置。</p>
<p><strong>第二步，设置重启自动加载iptables规则。</strong></p>
<p>前面我们在各个节点设置了iptables规则，但是这些规则在系统重启后会丢失。为了使系统重启后自动重新设置这些规则，我们需要将当前的iptables规则保存起来，让系统重启时自动加载。需要进行下面两个步骤。</p>
<ol>
<li>保存现有的规则：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> iptables-save <span class="token operator">></span> /etc/sysconfig/iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>添加下面的命令行到/etc/rc.d/rc.local文件中：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables-restore <span class="token operator">&lt;</span> /etc/sysconfig/iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第三步，自动化。</strong></p>
<p>在上面的步骤中，我们自动生成了iptables规则，并手动登陆到节点进行设置。你肯定也发现了，整个流程手动操作过多，容易出错，效率还低。你可以参考设置过程，将这些设置工作自动化，比如编写脚本，一键刷新所有节点的iptables规则。</p>
<p>另外，我们再来看下在新增节点和删除节点两种场景下，如何设置iptables规则。</p>
<p><strong>场景1：新增节点</strong></p>
<p>如果我们要扩容一个节点，也需要在新节点设置防火墙规则，并在数据库节点设置防火墙规则允许来自新节点的访问。</p>
<p>假如我们新增一个10.0.4.22节点，这里要设置防火墙规则，需要下面的4个步骤。</p>
<ol>
<li>编辑access.yaml，在hosts列表下新增10.0.4.22节点IP。编辑后内容如下：</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 允许登录SSH节点的来源IP，可以是固定IP(例如10.0.4.2)，也可以是个网段，0.0.0.0/0代表不限制来源IP</span>
<span class="token key atrule">ssh-source</span><span class="token punctuation">:</span> 10.0.4.0/24

<span class="token comment"># IAM应用节点列表（来源IP）</span>
<span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 10.0.4.20
  <span class="token punctuation">-</span> 10.0.4.21
  <span class="token punctuation">-</span> 10.0.4.22

<span class="token comment"># 来源IP可以访问的应用端口列表（iam-apiserver, iam-authz-server, iam-pump对外暴露的的端口）</span>
<span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token number">8080</span>
  <span class="token punctuation">-</span> <span class="token number">8443</span>
  <span class="token punctuation">-</span> <span class="token number">9090</span>
  <span class="token punctuation">-</span> <span class="token number">9443</span>
  <span class="token punctuation">-</span> <span class="token number">7070</span>

<span class="token comment"># 来源IP可以访问的数据库端口列表（Redis, MariaDB, MongoDB）</span>
<span class="token key atrule">dbports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token number">3306</span>
  <span class="token punctuation">-</span> <span class="token number">6379</span>
  <span class="token punctuation">-</span> <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>在10.0.4.22节点设置iptables规则：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> app <span class="token parameter variable">-a</span> <span class="token parameter variable">-o</span> firewall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将firewall.sh脚本拷贝到10.0.4.22节点，并执行。</p>
<ol>
<li>在已有节点新增规则，允许来自10.0.4.22的 Nginx服务的访问：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> app <span class="token number">10.0</span>.4.22 <span class="token parameter variable">-o</span> addrules.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将addrules.sh脚本拷贝到存量节点，并执行。</p>
<ol>
<li>在数据库节点新增iptables规则，以允许来自新节点的访问：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> db <span class="token number">10.0</span>.4.22 <span class="token parameter variable">-o</span> addrules.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将addrules.sh脚本拷贝到10.0.4.20节点执行即可。</p>
<p><strong>场景2：删除节点。</strong></p>
<p>如果我们要删除一个节点，需要在保留的节点和数据库节点中，将该节点的访问权限删除。假如我们要删除10.0.4.22节点，设置防火墙规则需要下面3个步骤。</p>
<ol>
<li>在保留节点删除10.0.4.22节点访问权限：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> app <span class="token parameter variable">--delete</span> <span class="token number">10.0</span>.4.22 <span class="token parameter variable">-o</span> delete.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将delete.sh脚本拷贝到保留节点（10.0.4.20，10.0.4.21），并执行。</p>
<ol>
<li>在数据库节点删除10.0.4.22节点访问权限：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> db <span class="token parameter variable">--delete</span> <span class="token number">10.0</span>.4.22 <span class="token parameter variable">-o</span> delete.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将delete.sh脚本拷贝到10.0.4.20节点执行即可。</p>
<ol>
<li>将下线的节点从access.yaml文件中的hosts部分删除。</li>
</ol>
<h3 id="iam安全加固-内网安全" tabindex="-1"><a class="header-anchor" href="#iam安全加固-内网安全" aria-hidden="true">#</a> IAM安全加固（内网安全）</h3>
<p>这里，我们来看第二种情况：假定我们系统部署在一个安全的内网环境中，这时候加固系统就会变得异常简单，只需要允许来源IP为内网IP的客户端访问我们提供的各类端口即可。在我们设置完iptables规则之后，后续再新增或者删除节点，就不需要再做变更了。</p>
<p>具体可以分为5个步骤。</p>
<p><strong>第一步，进入iam项目源码根目录。</strong></p>
<p><strong>第二步，配置accesss.yaml</strong>（工具根据此配置，自动生成iptables设置脚本），内容如下（<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/access.yaml" target="_blank" rel="noopener noreferrer">configs/access.yaml<ExternalLinkIcon/></a>文件）：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 允许登录SSH节点的来源IP，可以是固定IP(例如10.0.4.2)，也可以是个网段，0.0.0.0/0代表不限制来源IP</span>
<span class="token key atrule">ssh-source</span><span class="token punctuation">:</span> 10.0.4.0/24

<span class="token comment"># 来源IP可以访问的应用端口列表（iam-apiserver, iam-authz-server, iam-pump对外暴露的的端口）</span>
<span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token number">8080</span>
  <span class="token punctuation">-</span> <span class="token number">8443</span>
  <span class="token punctuation">-</span> <span class="token number">9090</span>
  <span class="token punctuation">-</span> <span class="token number">9443</span>
  <span class="token punctuation">-</span> <span class="token number">7070</span>

<span class="token comment"># 来源IP可以访问的数据库端口列表（Redis, MariaDB, MongoDB）</span>
<span class="token key atrule">dbports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token number">3306</span>
  <span class="token punctuation">-</span> <span class="token number">6379</span>
  <span class="token punctuation">-</span> <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置中，我们仅仅指定了IAM服务端口和数据库端口。</p>
<p><strong>第三步，生成iptables初始化脚本：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> app <span class="token parameter variable">--cidr</span><span class="token operator">=</span><span class="token number">10.0</span>.4.0/24 <span class="token parameter variable">-a</span> <span class="token parameter variable">-o</span> firewall.sh
$ <span class="token function">ls</span> firewall.sh
firewall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第四步，将firewall.sh脚本拷贝到10.0.4.20和10.0.4.21节点执行：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">scp</span> firewall.sh root@10.0.4.20:/tmp/
$ <span class="token function">scp</span> firewall.sh root@10.0.4.21:/tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>登陆10.0.4.20和10.0.4.21机器执行 <code v-pre>/tmp/firewall.sh</code> 。</p>
<p><strong>第五步，在10.0.4.20（数据库节点）节点上，设置iptables规则，以允许各节点访问。</strong></p>
<p>因为数据库节点也位于10.0.4.20节点，所以只需要添加新的rule，并将 <code v-pre>iptables -A INPUT -j DROP</code> 规则放到最后执行即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run tools/geniptables/main.go <span class="token parameter variable">-c</span> access.yaml <span class="token parameter variable">-t</span> db <span class="token parameter variable">--cidr</span><span class="token operator">=</span><span class="token number">10.0</span>.4.0/24 <span class="token parameter variable">-o</span> addrules.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，将 <code v-pre>addrules.sh</code> 脚本拷贝到10.0.4.20节点执行。</p>
<p>如果要增加节点，你只需要重新执行第三步，生成firewall.sh脚本，并将firewall.sh脚本拷贝到新节点上执行即可。删除节点，则不需要做任何操作。</p>
<p>接下来，我们再来看下如何对IAM应用进行弹性伸缩操作。</p>
<h2 id="弹性伸缩" tabindex="-1"><a class="header-anchor" href="#弹性伸缩" aria-hidden="true">#</a> 弹性伸缩</h2>
<p>弹性伸缩包括扩容和缩容。扩容是指当业务量越来越大时，能够很容易地增加计算节点，来分散工作负载，从而实现计算等能力的扩展。缩容是指当业务量变小时，能够很容易地减少计算节点，从而减小成本。</p>
<p>在系统上线初期，通常业务量不会很大，但是随着产品的迭代，用户量的增多，系统承载的请求量会越来越多，系统承载的压力也会越来越大。这时，就需要我们的系统架构有能力进行水平扩容，以满足业务需求，同时避免因为系统负载过高造成系统雪崩。</p>
<p>一些电商系统，在双11这类促销活动之前会提前扩容计算节点，以应对即将到来的流量高峰。但是活动过后，流量会逐渐下降，这时就需要我们的系统有能力进行缩容，以减少计算节点，从而节省成本。</p>
<p>一个可伸缩的系统架构，是我们在进行系统设计时必须要保证的。如果系统不具有伸缩性，那么当我们后期需要扩缩容时，就需要对代码进行大改，不仅会增加额外的工作量，还会拖累产品的迭代速度。而且你想想，改完之后还要测试，发布之后，还可能因为代码变更引入Bug。总之，不具伸缩性的系统架构可以说是后患无穷。</p>
<p>IAM系统在设计之初就考虑到了系统的伸缩能力，我们可以很容易地对系统进行扩缩容。下面，我来分别介绍下如何对系统进行扩容和缩容。</p>
<h3 id="系统扩容" tabindex="-1"><a class="header-anchor" href="#系统扩容" aria-hidden="true">#</a> 系统扩容</h3>
<p>系统扩容的步骤很简单，你只需要进行下面这5步：</p>
<ol>
<li>根据需要申请计算节点，如无特殊需求，计算节点的配置、操作系统等要跟已有的节点保持一致。</li>
<li>在新的节点上部署iam-apiserver、iam-authz-server、iam-pump，部署方式跟部署其他节点一样。</li>
<li>在新节点部署Nginx，并将新节点的IP加入到已有所有节点的Nginx upstream配置中，重启Nginx。</li>
<li>在新节点部署Keepalived，并将新节点的IP加入到已有所有节点的unicast_peer配置中，重启Keepalived。</li>
<li>修改iptables规则，并刷新所有机器的iptables。</li>
</ol>
<h3 id="系统缩容" tabindex="-1"><a class="header-anchor" href="#系统缩容" aria-hidden="true">#</a> 系统缩容</h3>
<p>系统缩容是系统扩容的逆向操作，也是5个步骤：</p>
<ol>
<li>根据需要，确定要删除的节点。</li>
<li>关闭待删除节点的iam-apiserver、iam-authz-server、iam-pump服务。</li>
<li>从所有保留节点的Nginx upstream配置中，删除待删除节点的IP地址, 重启Nginx。</li>
<li>从所有保留节点的Keepalived unicast_peer配置中，删除待删除节点的IP地址, 重启Keepalived。</li>
<li>修改iptables规则，并刷新所有保留机器的iptables。</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>安全对于应用软件来说至关重要，在部署应用时，也一定要评估应用的安全性，并采取一定的措施来保证安全性。</p>
<p>在进行软件部署时，保证应用安全性最简单有效的方式是使用iptables规则来加固系统。实现思路也很简单，就是使用iptables规则，只允许特定来源的IP访问特定的端口。</p>
<p>在业务正式上线之后，可能会遇到业务高峰期或低峰期。业务高峰期，可能需要添加机器，提高系统的吞吐量，可以在新机器上安装需要扩容的服务组件，并安装和配置好Nginx和Keepalived，之后将该服务器添加到Nginx的upstream中。在业务低峰期时，可以将服务器从Nginx的upstream列表中移除，并关停IAM应用的服务。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>请根据这一讲学习的内容，再增扩容一台机器。</li>
<li>思考下，你在应用部署时，还有哪些比较好的应用安全加固方法，欢迎在留言区分享。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '33.md' style='float:left'>⬆️上一节🔗  </a><a href = '35.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/projects/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


