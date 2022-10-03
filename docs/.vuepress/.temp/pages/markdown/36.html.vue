<template><div><h1 id="自定义网络格式" tabindex="-1"><a class="header-anchor" href="#自定义网络格式" aria-hidden="true">#</a> 自定义网络格式</h1>
<p>[toc]</p>
<h2 id="docker-link" tabindex="-1"><a class="header-anchor" href="#docker-link" aria-hidden="true">#</a> docker link</h2>
<blockquote>
<p>这个是一个过时的东西了</p>
</blockquote>
<h2 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 8081:8080   --name tomcat81 billygoo/tomcat8-jdk8
docker run -d -p 8082:8080   --name tomcat82 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上述成功启动并用docker exec进入各自容器实例内部</strong></p>
<h2 id="在tomcat82中ping-tomcat81" tabindex="-1"><a class="header-anchor" href="#在tomcat82中ping-tomcat81" aria-hidden="true">#</a> 在tomcat82中ping tomcat81</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@ubuntu:/home/smile<span class="token comment"># docker exec -it tomcat82 bash</span>
root@518bce78283a:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">26</span>: eth0@if27: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:06 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.6/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
root@518bce78283a:/usr/local/tomcat<span class="token comment"># ping 172.17.0.5</span>
PING <span class="token number">172.17</span>.0.5 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.5<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.5: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">2.56</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.5: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.110</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.5: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.106</span> ms
^C
--- <span class="token number">172.17</span>.0.5 <span class="token function">ping</span> statistics ---
<span class="token number">3</span> packets transmitted, <span class="token number">3</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 2018ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.106</span>/0.927/2.565/1.158 ms

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>能ping通</strong></p>
<p><strong>同样反也能通</strong></p>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2>
<p><strong>在docker中ip是变化的，所以我们选择用容器名称去ping通</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@98ec1a7378a7:/usr/local/tomcat# ping tomcat82
ping: tomcat82: Name or service not known
root@98ec1a7378a7:/usr/local/tomcat# ping tomcat81
ping: tomcat81: Name or service not known
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>或者可以选择添加hosts映射，但是注意，映射的时候ip也是写死的，所以我们必须要按照服务名去ping</strong></p>
<h2 id="after自定义网络引入" tabindex="-1"><a class="header-anchor" href="#after自定义网络引入" aria-hidden="true">#</a> after自定义网络引入</h2>
<p><strong>自定义桥接网络,自定义网络默认使用的是桥接网络bridge</strong></p>
<h2 id="新建自定义网络" tabindex="-1"><a class="header-anchor" href="#新建自定义网络" aria-hidden="true">#</a> 新建自定义网络</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker network create xiongxinwei@mail_network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看网络：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/text# docker network ls
NETWORK ID     NAME                       DRIVER    SCOPE
ec8278ac6963   bridge                     bridge    local
c68651290784   host                       host      local
5e7ee4274242   none                       null      local
6c8b594b19ad   xiongxinwei@mail_network   bridge    local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们需要把tomcat81和tomcat81统统加入到自定义网络来保证服务名互相通信</strong></p>
<h2 id="新建容器加入自定义网络" tabindex="-1"><a class="header-anchor" href="#新建容器加入自定义网络" aria-hidden="true">#</a> 新建容器加入自定义网络</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 8081:8080 --network xiongxinwei@mail_network  --name tomcat81 billygoo/tomcat8-jdk8
docker run -d -p 8082:8080 --network xiongxinwei@mail_network  --name tomcat82 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/05/15/s29kbCmWy4jeinp.png" alt="image-20220515124337089"></p>
<h2 id="已经存在的容器修改为自定义网络" tabindex="-1"><a class="header-anchor" href="#已经存在的容器修改为自定义网络" aria-hidden="true">#</a> 已经存在的容器修改为自定义网络</h2>
<p>创建容器时不指定网络时默认是桥接网络，后续更改容器的网络有两种方式：</p>
<p><strong>第一种：停止并删掉容器，重新创建容器指定网络连接（不建议）</strong></p>
<p><strong>第二种：直接修改容器的网络</strong></p>
<ol>
<li>创建自定义网络</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker network create 网络名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>解除容器所绑定的现有网络</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker network disconnect 网络名称 容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>容器重新指定网络连接</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker network connect 网络名称 容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>重启容器</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker restart 容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>查看容器详细信息</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker inspect 容器名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-下创建自定义网络-并在运行容器时绑定网络和ip" tabindex="-1"><a class="header-anchor" href="#docker-下创建自定义网络-并在运行容器时绑定网络和ip" aria-hidden="true">#</a> docker 下创建自定义网络，并在运行容器时绑定网络和ip</h2>
<p>Docker安装后，默认会创建三种网络类型，bridge、host和none，可通过如下命令查看</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>　　docker network ls 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://sm.nsddd.top//typora/720144-20210209104212204-1769428363.png?mail:3293172751@qq.com" alt="img"></p>
<h3 id="bridge-网络桥接" tabindex="-1"><a class="header-anchor" href="#bridge-网络桥接" aria-hidden="true">#</a> bridge:网络桥接</h3>
<p>默认情况下启动、创建容器都是用该模式，所以每次Docker容器重启时会按照顺序获取对应ip地址，这就导致容器每次重启，ip都发生变化</p>
<h3 id="none-无指定网络" tabindex="-1"><a class="header-anchor" href="#none-无指定网络" aria-hidden="true">#</a> none：无指定网络</h3>
<p>启动容器时，可以通过<code v-pre>–network=none</code>，Docker容器不会分配局域网ip</p>
<h3 id="host-主机网络" tabindex="-1"><a class="header-anchor" href="#host-主机网络" aria-hidden="true">#</a> host：主机网络</h3>
<p>Docker容器的网络会附属在主机上，两者是互通的。</p>
<h3 id="创建自定义网络和固定ip" tabindex="-1"><a class="header-anchor" href="#创建自定义网络和固定ip" aria-hidden="true">#</a> 创建自定义网络和固定ip</h3>
<p>创建自定义网络类型，并且指定网段</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token parameter variable">--driver</span><span class="token operator">=</span>bridge <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">192.168</span>.0.1 <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">192.168</span>.0.0/16 mynetwork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>--driver</code>：驱动程序类型</li>
<li><code v-pre>--subnet</code>：代表网段的CIDR格式的子网</li>
<li><code v-pre>--gateway</code>：主子网的IPV4和IPV6的网关</li>
<li><code v-pre>mynetwork</code>：是自定义网络名称</li>
</ul>
<p><strong>通过docker network ls可以查看到网络类型中多了一个mynetwork</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span>
<span class="token function">docker</span> network inspect mynetwork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用docker network inspect mynetwork 查看网络信息</p>
<p><img src="https://sm.nsddd.top//typora/720144-20210209105133125-1384179463.png?mail:3293172751@qq.com" alt="img"></p>
<p>使用新的网络类型创建并启动容器</p>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code>docker run -d --name=consul -p 8500:8500 \
--net=mynetwork --ip=192.168.0.2 \
-e CONSUL_BIND_INTERFACE=eth0 \
--restart=always consul agent \
--server=true --bootstrap-expect=1 --client=0.0.0.0 -ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义网络命令和介绍" tabindex="-1"><a class="header-anchor" href="#自定义网络命令和介绍" aria-hidden="true">#</a> 自定义网络命令和介绍</h2>
<table>
<thead>
<tr>
<th style="text-align:left">自定义网络命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker network create</td>
<td style="text-align:left">创建自定义网络</td>
</tr>
<tr>
<td style="text-align:left">docker network inspect</td>
<td style="text-align:left">查看自定义网络详情</td>
</tr>
<tr>
<td style="text-align:left">docker network ls</td>
<td style="text-align:left">查看网络列表</td>
</tr>
<tr>
<td style="text-align:left">docker network connect</td>
<td style="text-align:left">不同的自定义网络互相连接</td>
</tr>
<tr>
<td style="text-align:left">docker network rm</td>
<td style="text-align:left">删除自定义网络</td>
</tr>
</tbody>
</table>
<p><strong>我们尝试查看一下自定义网络详情</strong></p>
<p><img src="https://sm.nsddd.top//typora/image-20220916205821816.png?mail:3293172751@qq.com" alt="image-20220916205821816"></p>
<h2 id="查看tomcat81的ip" tabindex="-1"><a class="header-anchor" href="#查看tomcat81的ip" aria-hidden="true">#</a> 查看tomcat81的ip</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/text# docker exec -it tomcat81 bash
root@83cabf17ff0b:/usr/local/tomcat# ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
33: eth0@if34: &lt;BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:ac:12:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.18.0.2/16 brd 172.18.255.255 scope global eth0
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登陆tomcat82并ping-tomcat81" tabindex="-1"><a class="header-anchor" href="#登陆tomcat82并ping-tomcat81" aria-hidden="true">#</a> 登陆tomcat82并ping tomcat81</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/home/smile# docker exec -it tomcat82 bash
root@394fa3fe7ecc:/usr/local/tomcat# ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
35: eth0@if36: &lt;BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 02:42:ac:12:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.18.0.3/16 brd 172.18.255.255 scope global eth0
       valid_lft forever preferred_lft forever
root@394fa3fe7ecc:/usr/local/tomcat# ping tomcat81
PING tomcat81 (172.18.0.2) 56(84) bytes of data.
64 bytes from 172.18.0.2 (172.18.0.2): icmp_seq=1 ttl=64 time=1.21 ms
64 bytes from 172.18.0.2 (172.18.0.2): icmp_seq=2 ttl=64 time=0.110 ms
^C
--- tomcat81 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.110/0.660/1.211/0.551 ms

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以ping通了</strong></p>
<p><strong>所以我们做多个容器的规划，一定要走容器名</strong></p>
<h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2>
<ul>
<li>
<p><strong>自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）</strong></p>
</li>
<li>
<p><strong>自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）</strong></p>
</li>
<li>
<p><strong>自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）</strong></p>
</li>
</ul>
<p><strong>自定义网络可以在容器之间提供自动的DNS解析</strong></p>
</div></template>


