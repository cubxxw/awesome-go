<template><div><h1 id="docker网络模式" tabindex="-1"><a class="header-anchor" href="#docker网络模式" aria-hidden="true">#</a> docker网络模式</h1>
<nav class="table-of-contents"><ul><li><router-link to="#总体介绍">总体介绍</router-link></li><li><router-link to="#查看配置">查看配置</router-link></li></ul></nav>
<h3 id="总体介绍" tabindex="-1"><a class="header-anchor" href="#总体介绍" aria-hidden="true">#</a> 总体介绍</h3>
<p><img src="@source/markdown/images/udMYZbpm9a1vLHJ.jpg" alt="graphic"></p>
<div class="custom-container warning"><p class="custom-container-title">docker网络的几种模式</p>
<ul>
<li><strong>bridge模式：使用--network bridge指定，默认使用docker0</strong></li>
<li><strong>host模式：使用--network host指定</strong></li>
<li><strong>none模式：使用--network none指定</strong></li>
<li><strong>container模式：使用--network container:NAME或者容器ID指定</strong></li>
</ul>
</div>
<p><strong>容器实例内默认网络IP生产规则</strong></p>
<blockquote>
<p>最常用的是brige，每一个容器都分配、设置ip等</p>
</blockquote>
<h2 id="查看配置" tabindex="-1"><a class="header-anchor" href="#查看配置" aria-hidden="true">#</a> 查看配置</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker inspect cc5b5241882b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@ubuntu:/<span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE              COMMAND                  CREATED         STATUS                          PORTS     NAMES
cc5b5241882b   ubuntu             <span class="token string">"/bin/bash"</span>              <span class="token number">2</span> minutes ago   Up <span class="token number">2</span> minutes                              clever_bhaskara
7f569561ca8b   centos             <span class="token string">"/bin/bash"</span>              <span class="token number">25</span> hours ago    Up <span class="token number">25</span> hours                               adoring_yalow
c6b2169449f4   ubuntu             <span class="token string">"bash"</span>                   <span class="token number">3</span> days ago      Up <span class="token number">26</span> hours                               ubuntu2
f19e7fbc3d18   v2fly/v2fly-core   <span class="token string">"/usr/bin/v2ray -con…"</span>   <span class="token number">3</span> days ago      Restarting <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">36</span> seconds ago             tcp
root@ubuntu:/<span class="token comment"># docker inspect cc5b5241882b|tail -n 20</span>
            <span class="token string">"Networks"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"bridge"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"IPAMConfig"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"Links"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"Aliases"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"NetworkID"</span><span class="token builtin class-name">:</span> <span class="token string">"ec8278ac6963d2f67b27468ab0dc576299afa9b3031363db4af8669dcd8fcb8f"</span>,
                    <span class="token string">"EndpointID"</span><span class="token builtin class-name">:</span> <span class="token string">"772735b884867983a80845cc7c38d14b6d0aeec4df4e8c471ab245290eade275"</span>,
                    <span class="token string">"Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">"172.17.0.1"</span>,
                    <span class="token string">"IPAddress"</span><span class="token builtin class-name">:</span> <span class="token string">"172.17.0.4"</span>,
                    <span class="token string">"IPPrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">"IPv6Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                    <span class="token string">"GlobalIPv6Address"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                    <span class="token string">"GlobalIPv6PrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">"MacAddress"</span><span class="token builtin class-name">:</span> <span class="token string">"02:42:ac:11:00:04"</span>,
                    <span class="token string">"DriverOpts"</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
root@ubuntu:/<span class="token comment"># docker inspect c6b2169449f4 |tail -n 20</span>
            <span class="token string">"Networks"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"bridge"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"IPAMConfig"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"Links"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"Aliases"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"NetworkID"</span><span class="token builtin class-name">:</span> <span class="token string">"ec8278ac6963d2f67b27468ab0dc576299afa9b3031363db4af8669dcd8fcb8f"</span>,
                    <span class="token string">"EndpointID"</span><span class="token builtin class-name">:</span> <span class="token string">"7aee530f602f7a61405e5e9a78df90e7a4f3130bd9368fe5d4f7452fe3581663"</span>,
                    <span class="token string">"Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">"172.17.0.1"</span>,
                    <span class="token string">"IPAddress"</span><span class="token builtin class-name">:</span> <span class="token string">"172.17.0.2"</span>,
                    <span class="token string">"IPPrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">"IPv6Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                    <span class="token string">"GlobalIPv6Address"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                    <span class="token string">"GlobalIPv6PrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">"MacAddress"</span><span class="token builtin class-name">:</span> <span class="token string">"02:42:ac:11:00:02"</span>,
                    <span class="token string">"DriverOpts"</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>IPAddress是人人一份，相互独立的</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker rm -f cc5b5241882b
docker run -it --name ubuntu bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>再看ip，<code v-pre>&quot;IPAddress&quot;: &quot;172.17.0.4&quot;</code></strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@ubuntu:/<span class="token comment"># docker inspect f54ae7bf8dfa |tail -n 20</span>
            <span class="token string">"Networks"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"bridge"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"IPAMConfig"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"Links"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"Aliases"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"NetworkID"</span><span class="token builtin class-name">:</span> <span class="token string">"ec8278ac6963d2f67b27468ab0dc576299afa9b3031363db4af8669dcd8fcb8f"</span>,
                    <span class="token string">"EndpointID"</span><span class="token builtin class-name">:</span> <span class="token string">"420339ad649a5470ddc54765644a9829752f7021fc5a7685db88b60f89921b8a"</span>,
                    <span class="token string">"Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">"172.17.0.1"</span>,
                    <span class="token string">"IPAddress"</span><span class="token builtin class-name">:</span> <span class="token string">"172.17.0.4"</span>,
                    <span class="token string">"IPPrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">"IPv6Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                    <span class="token string">"GlobalIPv6Address"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                    <span class="token string">"GlobalIPv6PrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">"MacAddress"</span><span class="token builtin class-name">:</span> <span class="token string">"02:42:ac:11:00:04"</span>,
                    <span class="token string">"DriverOpts"</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>!!! : docker容器内部的ip是有可能会发生改变的</strong></p>
<blockquote>
<p>我们在平常使用的时候注意不能固定，这是很危险的</p>
</blockquote>
</div></template>


