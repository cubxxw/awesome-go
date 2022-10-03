<template><div><h1 id="bridge是什么" tabindex="-1"><a class="header-anchor" href="#bridge是什么" aria-hidden="true">#</a> bridge是什么</h1>
<nav class="table-of-contents"><ul><li><router-link to="#bridge是什么-1">bridge是什么</router-link></li><li><router-link to="#查看-bridge-网络的详细信息-并通过-grep-获取名称项">查看 bridge 网络的详细信息，并通过 grep 获取名称项</router-link></li><li><router-link to="#案例说明">案例说明</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="bridge是什么-1" tabindex="-1"><a class="header-anchor" href="#bridge是什么-1" aria-hidden="true">#</a> bridge是什么</h2>
<p>Docker 服务默认会创建一个 docker0 网桥（其上有一个 docker0 内部接口），该桥接网络的名称为docker0，<strong>它在内核层连通了其他的物理或虚拟网卡，这就将所有容器和本地主机都放到同一个物理网络。Docker 默认指定了 docker0 接口 的 IP 地址和子网掩码，==让主机和容器之间可以通过网桥相互通信。==</strong></p>
<blockquote>
<p>网桥就是docker0，宿主机和容器之间通信需要网桥，容器与容器通信也要网桥</p>
</blockquote>
<h2 id="查看-bridge-网络的详细信息-并通过-grep-获取名称项" tabindex="-1"><a class="header-anchor" href="#查看-bridge-网络的详细信息-并通过-grep-获取名称项" aria-hidden="true">#</a> 查看 bridge 网络的详细信息，并通过 grep 获取名称项</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/# docker network inspect bridge | grep name
            "com.docker.network.bridge.name": "docker0",
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>config</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/# ifconfig
docker0: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        inet6 fe80::42:1cff:fea2:e40d  prefixlen 64  scopeid 0x20&lt;link>
        ether 02:42:1c:a2:e4:0d  txqueuelen 0  (Ethernet)
        RX packets 6300  bytes 262863 (262.8 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 6448  bytes 44884020 (44.8 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

ens33: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.121.129  netmask 255.255.255.0  broadcast 192.168.121.255
        inet6 fe80::b367:9300:1119:6132  prefixlen 64  scopeid 0x20&lt;link>
        ether 00:0c:29:28:be:81  txqueuelen 1000  (Ethernet)
        RX packets 496051  bytes 650135348 (650.1 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 111754  bytes 9680017 (9.6 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例说明" tabindex="-1"><a class="header-anchor" href="#案例说明" aria-hidden="true">#</a> 案例说明</h2>
<p>1 Docker使用Linux桥接，在宿主机虚拟一个Docker容器网桥(docker0)，Docker启动一个容器时会根据Docker网桥的网段分配给容器一个IP地址，称为Container-IP，同时Docker网桥是每个容器的默认网关。因为在<strong>同一宿主机内的容器都接入同一个网桥，这样容器之间就能够通过容器的Container-IP直接通信。</strong></p>
<p>2 docker run 的时候，**没有指定network的话默认使用的网桥模式就是bridge，使用的就是docker0。**在宿主机ifconfig,就可以看到docker0和自己create的network(后面讲)eth0，eth1，eth2……代表网卡一，网卡二，网卡三……，lo代表127.0.0.1，即localhost，inet addr用来表示网卡的IP地址</p>
<p><strong>3. 网桥docker0创建一对对等虚拟设备接口一个叫veth，另一个叫eth0，成对匹配。</strong></p>
<ul>
<li>
<p>整个宿主机的网桥模式都是docker0，类似一个交换机有一堆接口，每个接口叫veth，在本地主机和容器内分别创建一个虚拟接口，并让他们彼此联通（这样一对接口叫veth pair）；</p>
</li>
<li>
<p>每个容器实例内部也有一块网卡，<strong>每个接口叫eth0；</strong></p>
</li>
<li>
<p>docker0上面的每个veth匹配某个容器实例内部的<strong>eth0，两两配对，一一匹配。</strong></p>
</li>
</ul>
<p><strong>通过上述，将宿主机上的所有容器都连接到这个内部网络上，两个容器在同一个网络下,会从这个网关下各自拿到分配的ip，此时两个容器的网络是互通的。</strong></p>
<p><img src="https://s2.loli.net/2022/05/14/L7nUF49qlckbRph.jpg" alt="graphic"></p>
<blockquote>
<p>网桥就是docker0，宿主机和容器之间通信需要网桥，容器与容器通信也要网桥</p>
</blockquote>
<p>代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 8081:8080  --name tomcat81 billygoo/tomcat8-jdk8

docker run -d -p 8082:8080  --name tomcat82 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两两匹配验证</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@ubuntu:/<span class="token comment"># docker ps |grep tomcat</span>
518bce78283a   billygoo/tomcat8-jdk8   <span class="token string">"catalina.sh run"</span>        <span class="token number">14</span> seconds ago   Up <span class="token number">13</span> seconds                   <span class="token number">0.0</span>.0.0:8082-<span class="token operator">></span><span class="token number">8080</span>/tcp, :::8082-<span class="token operator">></span><span class="token number">8080</span>/tcp   tomcat82
98ec1a7378a7   billygoo/tomcat8-jdk8   <span class="token string">"catalina.sh run"</span>        <span class="token number">15</span> seconds ago   Up <span class="token number">15</span> seconds                   <span class="token number">0.0</span>.0.0:8081-<span class="token operator">></span><span class="token number">8080</span>/tcp, :::8081-<span class="token operator">></span><span class="token number">8080</span>/tcp   tomcat81
root@ubuntu:/<span class="token comment"># ip addr |tail -n 8</span>
<span class="token number">25</span>: veth7ad0904@if24: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default 
    link/ether 06:dd:54:bd:8b:4b brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">3</span>
    inet6 fe80::4dd:54ff:febd:8b4b/64 scope <span class="token function">link</span> 
       valid_lft forever preferred_lft forever
<span class="token number">27</span>: vethb119ebb@if26: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default 
    link/ether <span class="token number">76</span>:40:af:cd:83:b8 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">4</span>
    inet6 fe80::7440:afff:fecd:83b8/64 scope <span class="token function">link</span> 
       valid_lft forever preferred_lft forever
root@ubuntu:/<span class="token comment"># docker exec -it tomcat81 bash</span>
root@98ec1a7378a7:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">24</span>: eth0@if25: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:05 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.5/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
root@98ec1a7378a7:/usr/local/tomcat<span class="token comment"># exit </span>
<span class="token builtin class-name">exit</span>
root@ubuntu:/<span class="token comment"># docker exec -it tomcat82 bash</span>
root@518bce78283a:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">26</span>: eth0@if27: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default 
    link/ether 02:42:ac:11:00:06 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.6/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/05/14/JeaFpNfcnDSr7s2.jpg" alt="graphic"></p>
<p><strong>由此可见：</strong></p>
<ul>
<li>veth7ad0904@if24和eth0@if25成对出现</li>
<li>vethb119ebb@if26和eth0@if27成对出现</li>
</ul>
<blockquote>
<p>验证了网桥docker0创建一对对等虚拟设备接口一个叫veth，另一个叫eth0，成对匹配。</p>
</blockquote>
</div></template>


