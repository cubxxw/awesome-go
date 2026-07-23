<template><div><h1 id="_1-rabbitmq安装" tabindex="-1"><a class="header-anchor" href="#_1-rabbitmq安装" aria-hidden="true">#</a> 1. RabbitMQ安装</h1>
<h3 id="_1-1-1-win下安装" tabindex="-1"><a class="header-anchor" href="#_1-1-1-win下安装" aria-hidden="true">#</a> 1.1.1. win下安装</h3>
<h4 id="第一步-下载并安装erlang" tabindex="-1"><a class="header-anchor" href="#第一步-下载并安装erlang" aria-hidden="true">#</a> 第一步：下载并安装erlang</h4>
<ul>
<li>原因：RabbitMQ服务端代码是使用并发式语言Erlang编写的，安装Rabbit MQ的前提是安装Erlang。</li>
<li>下载地址：http://www.erlang.org/downloads</li>
</ul>
<p><img src="https://s2.loli.net/2022/04/10/lwFpGNCnh1vma87.png" alt="img"></p>
<p>根据本机位数选择erlang下载版本。</p>
<ul>
<li>下载完是这么个东西：</li>
</ul>
<p><img src="https://s2.loli.net/2022/04/10/Kk4yr1FBM3vPxZQ.png" alt="img"></p>
<ul>
<li>双击，点next就可以。</li>
</ul>
<p><img src="https://s2.loli.net/2022/04/10/PXUsTuogZwJ5b9c.png" alt="img"></p>
<ul>
<li>选择一个自己想保存的地方，然后next、finish就可以。</li>
</ul>
<p><img src="https://s2.loli.net/2022/04/10/OhBKdczXZG9Ros4.png" alt="img"> <img src="https://s2.loli.net/2022/04/10/VnF3D6PoaiM9UlA.png" alt="img"></p>
<ul>
<li>安装完事儿后要记得配置一下系统的环境变量。 此电脑--&gt;鼠标右键“属性”--&gt;高级系统设置--&gt;环境变量--&gt;“新建”系统环境变量</li>
</ul>
<p><img src="https://s2.loli.net/2022/04/10/YDeUCVW2xk1uXj9.png" alt="img"></p>
<p>变量名：ERLANG_HOME</p>
<p>变量值就是刚才erlang的安装地址，点击确定。</p>
<ul>
<li>然后双击系统变量path</li>
</ul>
<p>点击“新建”，将%ERLANG_HOME%\bin加入到path中。</p>
<ul>
<li>最后windows键+R键，输入cmd，再输入erl，看到版本号就说明erlang安装成功了。</li>
</ul>
<p><img src="https://s2.loli.net/2022/04/10/s7w5xQHT8Xphj6r.png" alt="img"></p>
<h4 id="第二步-下载并安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#第二步-下载并安装rabbitmq" aria-hidden="true">#</a> 第二步：下载并安装RabbitMQ</h4>
<ul>
<li>下载地址：http://www.rabbitmq.com/download.html</li>
</ul>
<p><img src="https://www.topgoer.com/static/9.3/20.png" alt="img"></p>
<ul>
<li>双击下载后的.exe文件，安装过程与erlang的安装过程相同。</li>
<li>RabbitMQ安装好后接下来安装RabbitMQ-Plugins。打开命令行cd，输入RabbitMQ的sbin目录。</li>
</ul>
<p>我的目录是：E:\RabbitMQ\rabbitmq_server-3.8.1\sbin</p>
<p>然后在后面输入rabbitmq-plugins enable rabbitmq_management命令进行安装</p>
<p><img src="https://www.topgoer.com/static/9.3/21.png" alt="img"></p>
<p>如果出现下面的提示表示运行成功</p>
<p><img src="https://www.topgoer.com/static/9.3/23.png" alt="img"></p>
<p>输入命令：rabbitmq-server.bat</p>
<p>如果出现下面的提示表示启动成功</p>
<p><img src="https://www.topgoer.com/static/9.3/24.png" alt="img"></p>
<p>rabbitmq启动成功，浏览器中<a href="http://localhost:15672%EF%BC%8C/" target="_blank" rel="noopener noreferrer">http://localhost:15672，<ExternalLinkIcon/></a></p>
<p><img src="https://www.topgoer.com/static/9.3/25.png" alt="img"></p>
<p>输入guest,guest进入rabbitMQ管理控制台：</p>
<p><img src="https://www.topgoer.com/static/9.3/26.png" alt="img"></p>
<p><strong>注意</strong></p>
<p>上面的安装步骤如果出现下面错误</p>
<ul>
<li>输入rabbitmq-plugins enable rabbitmq_management命令出现</li>
</ul>
<p><img src="https://www.topgoer.com/static/9.3/22.png" alt="img"></p>
<p>这样的提示解决办法</p>
<p>解决方法：</p>
<p>将 <code v-pre>C:\Users\Administrator\.erlang.cookie</code></p>
<p>同步至<code v-pre>C:\Windows\System32\config\systemprofile\.erlang.cookie</code></p>
<p>同时删除：<code v-pre>C:\Users\Administrator\AppData\Roaming\RabbitMQ目录</code></p>
<p>重新输入rabbitmq-plugins enable rabbitmq_management命令</p>
<ul>
<li>运行命令：rabbitmq-server.bat</li>
</ul>
<p>如果出现下面的提示：</p>
<p><img src="https://www.topgoer.com/static/9.3/27.png" alt="img"></p>
<p>这个是因为rabbit已经启动了，不能再次启动，通过tasklist指令，发现进程是存在的：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    tasklist | find /i "erl"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://www.topgoer.com/static/9.3/28.png" alt="img"></p>
<p>如果有结果，那么说明已经启动了，通过任务管理器kill掉进程再次启动即可。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ctrl+alt+delete`进入`任务管理器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://www.topgoer.com/static/9.3/29.png" alt="img"></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '43.md' style='float:left'>⬆️上一节🔗</a><a href = '45.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


