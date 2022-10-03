<template><div><h1 id="docker-compose容器编排" tabindex="-1"><a class="header-anchor" href="#docker-compose容器编排" aria-hidden="true">#</a> docker-compose容器编排</h1>
<p>[toc]</p>
<h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3>
<blockquote>
<p>当我们容器多了需要管理了，比如docker容器之间的启动顺序和容器间网络调用</p>
</blockquote>
<p><strong>Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个 YAML 格式的配置文件docker-compose.yml，写好多个容器之间的调用关系。然后，只要一个命令，就能同时启动/关闭这些容器.</strong></p>
<p><strong>Docker-Compose是Docker官方的开源项目， 负责实现对Docker容器集群的快速编排。</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run redis 
docker run mysql 
docker run nginx
docker run orderms ok,前提条件（MySQL+redis要先启动）
.....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker建议我们每一个容器中只运行一个服务,因为docker容器本身占用资源极少,所以最好是将每个服务单独的分割开来但是这样我们又面临了一个问题？</p>
<p>如果我需要同时部署好多个服务,难道要每个服务单独写Dockerfile然后在构建镜像,构建容器,这样累都累死了,所以docker官方给我们提供了docker-compose多服务部署的工具。</p>
<p>例如要实现一个Web微服务项目，除了Web服务容器本身，往往还需要再加上后端的数据库mysql服务容器，redis服务器，注册中心。</p>
<p><strong>Compose允许用户通过一个单独的docker-compose.yml模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。</strong></p>
<p><strong>可以很容易地用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的==所有依赖==，完成构建。==Docker-Compose 解决了容器与容器之间如何管理编排的问题。==</strong></p>
<h3 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h3>
<p><a href="https://docs.docker.com/compose/compose-file/compose-file-v3/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/compose/compose-file/compose-file-v3/<ExternalLinkIcon/></a></p>
<h3 id="官网下载" tabindex="-1"><a class="header-anchor" href="#官网下载" aria-hidden="true">#</a> 官网下载</h3>
<p>https://docs.docker.com/compose/install/</p>
<h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载步骤" tabindex="-1"><a class="header-anchor" href="#卸载步骤" aria-hidden="true">#</a> 卸载步骤</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo rm /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


