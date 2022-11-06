<template><div><h1 id="docker平台架构图解" tabindex="-1"><a class="header-anchor" href="#docker平台架构图解" aria-hidden="true">#</a> Docker平台架构图解</h1>
<h3 id="整体说明" tabindex="-1"><a class="header-anchor" href="#整体说明" aria-hidden="true">#</a> 整体说明</h3>
<p><strong>从其架构和运行流程来看，Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职。</strong></p>
<h3 id="docker-运行的基本流程为" tabindex="-1"><a class="header-anchor" href="#docker-运行的基本流程为" aria-hidden="true">#</a> Docker 运行的基本流程为</h3>
<ol>
<li>
<p>用户是使用 Docker Client 与 Docker Daemon 建立通信，并发送请求给后者。</p>
</li>
<li>
<p>Docker Daemon 作为 Docker 架构中的主体部分，首先提供 Docker Server 的功能使其可以接受 Docker Client 的请求。</p>
</li>
<li>
<p>Docker Engine 执行 Docker 内部的一系列工作，每一项工作都是以一个 Job 的形式的存在。</p>
</li>
<li>
<p>Job 的运行过程中，当需要容器镜像时，则从 Docker Registry 中下载镜像，并通过镜像管理驱动 Graph driver将下载镜像以Graph的形式存储。</p>
</li>
<li>
<p>当需要为 Docker 创建网络环境时，通过网络管理驱动 Network driver 创建并配置 Docker 容器网络环境。</p>
</li>
<li>
<p>当需要限制 Docker 容器运行资源或执行用户指令等操作时，则通过 Execdriver 来完成。</p>
</li>
<li>
<p>Libcontainer是一项独立的容器管理包，Network driver以及Exec driver都是通过Libcontainer来实现具体对容器进行的操作。</p>
</li>
</ol>
<h3 id="整体架构" tabindex="-1"><a class="header-anchor" href="#整体架构" aria-hidden="true">#</a> 整体架构</h3>
<p><img src="https://s2.loli.net/2022/05/15/7bgROxQBVrj2Zic.png" alt="image-20220515125409171"></p>
</div></template>


