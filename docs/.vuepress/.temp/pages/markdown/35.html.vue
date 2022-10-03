<template><div><h1 id="container是什么" tabindex="-1"><a class="header-anchor" href="#container是什么" aria-hidden="true">#</a> container是什么</h1>
<p>[toc]</p>
<h2 id="container网络模式" tabindex="-1"><a class="header-anchor" href="#container网络模式" aria-hidden="true">#</a> container⽹络模式</h2>
<p><strong>新建的容器和已经存在的一个容器共享一个网络ip配置而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。</strong></p>
<p><img src="https://s2.loli.net/2022/05/15/6fVpoYeywxavmUu.jpg" alt="graphic"></p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<table>
<thead>
<tr>
<th>单图标</th>
<th>![img](file:///C:/Users/smile/AppData/Local/Temp/msohtmlclip1/01/clip_image004.gif) CustomIcon-663735520; [&quot;&quot;, &quot;4MyPJwAAAAAAAAAAAAAAAA==&quot;]</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>先配置一个8085</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 8085:8080  --name tomcat85 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>再配置一个8086借用8085</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 8086:8080 --network container:tomcat85 --name tomcat86 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="@source/markdown/images/QNitcHF6LbfRYoz.png" alt="image-20220515120645211"></p>
<p><strong>相当于tomcat86和tomcat85公用同一个ip同一个端口，导致端口冲突</strong></p>
<p><strong>本案例用tomcat演示不合适。。。演示坑。。。。。。o(╥﹏╥)o</strong></p>
<hr>
<h2 id="案例2" tabindex="-1"><a class="header-anchor" href="#案例2" aria-hidden="true">#</a> 案例2</h2>
<table>
<thead>
<tr>
<th>单图标</th>
<th>![img](file:///C:/Users/smile/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif) CustomIcon--1664269521; [&quot;&quot;,  &quot;L0PNnAAAAAAAAAAAAAAAAA==&quot;]</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>Alpine操作系统是一个面向安全的轻型 Linux发行版</p>
<p><strong>Alpine Linux 是一款独立的、非商业的通用 Linux 发行版，专为追求安全性、简单性和资源效率的用户而设计。 可能很多人没听说过这个 Linux 发行版本，但是经常用 Docker 的朋友可能都用过，因为他小，简单，安全而著称，所以作为基础镜像是非常好的一个选择，可谓是麻雀虽小但五脏俱全，镜像非常小巧，不到 6M的大小，所以特别适合容器打包。</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it --name alpine1 alpine /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>再开一个共用第一个网段</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it --network container:alpine1 --name alpine2 alpine /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>运行结果，验证共用搭桥</strong></p>
<p><strong>alpine1：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/ # ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
30: eth0@if31: &lt;BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:ac:11:00:08 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.8/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ # 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>alpine2：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/ # ip addr 
1: lo: &lt;LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
30: eth0@if31: &lt;BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:ac:11:00:08 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.8/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以看出，两个容器网络公用的</strong></p>
<p><strong>停掉一个alpine1，alpine2网络会怎么样</strong></p>
<blockquote>
<p>eth0@if16: 消失了。。。。。。关闭alpine1，再看看alpine2</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/text# docker exec -it alpine2 /bin/sh
/ # ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
/ # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>没有了</strong></p>
</div></template>


