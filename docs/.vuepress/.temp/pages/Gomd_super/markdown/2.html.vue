<template><div><h1 id="socket编程" tabindex="-1"><a class="header-anchor" href="#socket编程" aria-hidden="true">#</a> socket编程</h1>
<nav class="table-of-contents"><ul><li><router-link to="#socket图解">socket图解</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p><code v-pre>Socket</code>是BSD UNIX的进程通信机制，通常也称作”套接字”，用于描述IP地址和端口，是一个通信链的句柄。<code v-pre>Socket</code>可以理解为<code v-pre>TCP/IP</code>网络的<code v-pre>API</code>，它定义了许多函数或例程，程序员可以用它们来开发<code v-pre>TCP/IP</code>网络上的应用程序。电脑上运行的应用程序通常通过”套接字”向网络发出请求或者应答网络请求。</p>
<h2 id="socket图解" tabindex="-1"><a class="header-anchor" href="#socket图解" aria-hidden="true">#</a> socket图解</h2>
<p>Socket是应用层与TCP/IP协议族通信的中间软件抽象层。在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket后面，对用户来说只需要调用Socket规定的相关函数，让Socket去组织符合指定的协议数据然后进行通信。</p>
<p><img src="http://sm.nsddd.top/smbjaST7yZI5RuNCV.png?xxw@nsddd.top" alt="socket图解"></p>
<ul>
<li><code v-pre>Socket</code>又称“套接字”，应用程序通常通过“套接字”向网络发出请求或者应答网络请求</li>
<li>常用的Socket类型有两种：流式<code v-pre>Socket</code>和数据报式<code v-pre>Socket</code>，流式是一种面向连接的Socket，针对于面向连接的TCP服务应用，数据报式<code v-pre>Socket</code>是一种无连接的<code v-pre>Socket</code>，针对于无连接的UDP服务应用</li>
<li><code v-pre>TCP</code>：比较靠谱，面向连接，比较慢</li>
<li><code v-pre>UDP</code>：不是太靠谱，比较快</li>
</ul>
<p>举个例子：TCP就像货到付款的快递，送到家还必须见到你人才算一整套流程。UDP就像某快递快递柜一扔就走管你收到收不到，一般直播用UDP。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '1.md' style='float:left'>⬆️上一节🔗</a><a href = '3.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


