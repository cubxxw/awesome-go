<template><div><ul>
<li><a href="https://github.com/cubxxw/MIT6.824-DistributedSystem" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第2节-分布式系统抽象和工具" tabindex="-1"><a class="header-anchor" href="#第2节-分布式系统抽象和工具" aria-hidden="true">#</a> 第2节 分布式系统抽象和工具</h1>
<br>
<div><a href = '1.md' style='float:left'>⬆️上一节🔗  </a><a href = '3.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕⚠️ According to the MIT 6.824 Collaboration policy, which prevents students from obtaining Solutions through GitHub, the source repository is for personal use only, and the documentation uses an open source protocol for learning. Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#分布式系统">分布式系统</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="分布式系统" tabindex="-1"><a class="header-anchor" href="#分布式系统" aria-hidden="true">#</a> 分布式系统</h2>
<p>这门课程是有关应用的基础架构的。所以，贯穿整个课程，我会以分离的方式介绍：第三方的应用程序，和这些应用程序所基于的，我们课程中主要介绍的一些基础架构。基础架构的类型主要是存储，通信（网络）和计算。</p>
<p><img src="http://sm.nsddd.top/smsadfaf.png" alt="img"></p>
<p>我们会讨论包含所有这三个部分的基础设施，但实际上我们最关注的是存储，因为这是一个定义明确且有用的抽象概念，并且通常比较直观。人们知道如何构建和使用储存系统，知道如何去构建一种多副本，容错的，高性能分布式存储实现。</p>
<p>我们还会讨论一些计算系统，比如今天会介绍的MapReduce。我们也会说一些关于通信的问题，但是主要的出发点是通信是我们建立分布式系统所用的工具。比如计算机可能需要通过网络相互通信，但是可能需要保证一定的可靠性，所以我们会提到一些通信。实际上我们更多是使用已有的通信方式，如果你想了解更多关于通信系统的问题，在6.829这门课程有更多的介绍。</p>
<p>对于存储和计算，我们的目标是为了能够设计一些简单接口，让第三方应用能够使用这些分布式的存储和计算，这样才能简单的在这些基础架构之上，构建第三方应用程序。这里的意思是，我们希望通过这种抽象的接口，将分布式特性隐藏在整个系统内。尽管这几乎是无法实现的梦想，但是我们确实希望建立这样的接口，这样从应用程序的角度来看，整个系统是一个非分布式的系统，就像一个文件系统或者一个大家知道如何编程的普通系统，并且有一个非常简单的模型语句。我们希望构建一个接口，它看起来就像一个非分布式存储和计算系统一样，但是实际上又是一个有极高的性能和容错性的分布式系统。</p>
<p><img src="http://sm.nsddd.top/smimage-20221118224445326.png" alt="image-20221118224445326"></p>
<p>随着课程的进行，我们会知道，很难能找到一个抽象来描述分布式的存储或者计算，使得它们能够像非分布式系统一样有简单易懂的接口。但是，人们在这方面的做的越来越好，我们会尝试学习人们在构建这样的抽象时的一些收获。</p>
<p>当我们在考虑这些抽象的时候，第一个出现的话题就是实现。人们在构建分布系统时，使用了很多的工具，例如：</p>
<ul>
<li></li>
</ul>
<p>RPC（Remote Procedure Call）。RPC的目标就是掩盖我们正在不可靠网络上通信的事实。</p>
<ul>
<li></li>
</ul>
<p>另一个我们会经常看到的实现相关的内容就是线程。这是一种编程技术，使得我们可以利用多核心计算机。对于本课程而言，更重要的是，线程提供了一种结构化的并发操作方式，这样，从程序员角度来说可以简化并发操作。</p>
<ul>
<li></li>
</ul>
<p>因为我们会经常用到线程，我们需要在实现的层面上，花费一定的时间来考虑并发控制，比如锁。</p>
<p><img src="http://sm.nsddd.top/smimage-20221118224648925.png" alt="image-20221118224648925"></p>
<p>关于这些实现思想会在课程中出现，我们也会在许多论文中看到。对于你来说，你将会在实验中面对这些问题。你需要编程实现分布式系统，而这些工具不仅是普通的编程工具，同时也是非常重要的用来构建分布式系统的工具</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '1.md' style='float:left'>⬆️上一节🔗  </a><a href = '3.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/mit-6-824/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


