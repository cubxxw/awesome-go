<template><div><h1 id="compose核心概念" tabindex="-1"><a class="header-anchor" href="#compose核心概念" aria-hidden="true">#</a> Compose核心概念</h1>
<p>[toc]</p>
<h3 id="一文件" tabindex="-1"><a class="header-anchor" href="#一文件" aria-hidden="true">#</a> 一文件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="两要素" tabindex="-1"><a class="header-anchor" href="#两要素" aria-hidden="true">#</a> 两要素</h3>
<h5 id="服务-service" tabindex="-1"><a class="header-anchor" href="#服务-service" aria-hidden="true">#</a> 服务（service）</h5>
<p><strong>一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器</strong></p>
<h5 id="工程-project" tabindex="-1"><a class="header-anchor" href="#工程-project" aria-hidden="true">#</a> 工程（project）</h5>
<p><strong>由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。</strong></p>
<h3 id="compose使用的三个步骤" tabindex="-1"><a class="header-anchor" href="#compose使用的三个步骤" aria-hidden="true">#</a> Compose使用的三个步骤</h3>
<ul>
<li>
<p><strong>编写Dockerfile定义各个微服务应用并构建出对应的镜像文件</strong></p>
</li>
<li>
<p><strong>使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。</strong></p>
</li>
<li>
<p><strong>最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线</strong></p>
</li>
</ul>
<h3 id="compose常用命令" tabindex="-1"><a class="header-anchor" href="#compose常用命令" aria-hidden="true">#</a> Compose常用命令</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-h</span>              <span class="token comment"># 查看帮助</span>

<span class="token function">docker-compose</span> up              <span class="token comment"># 启动所有docker-compose服务</span>

<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>            <span class="token comment"># 启动所有docker-compose服务并后台运行</span>

<span class="token function">docker-compose</span> down             <span class="token comment"># 停止并删除容器、网络、卷、镜像。</span>

<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span>  yml里面的服务id        
<span class="token comment"># 进入容器实例内部 docker-compose exec docker-compose.yml文件中写的服务id /bin/bash</span>

<span class="token function">docker-compose</span> <span class="token function">ps</span>           <span class="token comment"># 展示当前docker-compose编排过的运行的所有容器</span>

<span class="token function">docker-compose</span> <span class="token function">top</span>           <span class="token comment"># 展示当前docker-compose编排过的容器进程</span>

<span class="token function">docker-compose</span> logs  yml里面的服务id   <span class="token comment"># 查看容器输出日志</span>

<span class="token function">docker-compose</span> config   <span class="token comment"># 检查配置</span>

<span class="token function">docker-compose</span> config <span class="token parameter variable">-q</span> <span class="token comment"># 检查配置，有问题才有输出</span>

<span class="token function">docker-compose</span> restart  <span class="token comment"># 重启服务</span>

<span class="token function">docker-compose</span> start   <span class="token comment"># 启动服务</span>

<span class="token function">docker-compose</span> stop    <span class="token comment"># 停止服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


