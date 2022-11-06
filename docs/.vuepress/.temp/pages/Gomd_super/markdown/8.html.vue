<template><div><h1 id="并发介绍" tabindex="-1"><a class="header-anchor" href="#并发介绍" aria-hidden="true">#</a> 并发介绍</h1>
<nav class="table-of-contents"><ul><li><router-link to="#进程和线程">进程和线程</router-link></li><li><router-link to="#并发和并行">并发和并行</router-link></li><li><router-link to="#并发">并发</router-link></li><li><router-link to="#并行">并行</router-link></li><li><router-link to="#协程和线程">协程和线程</router-link></li><li><router-link to="#goroutine-只是由官方实现的超级-线程池-。">goroutine 只是由官方实现的超级&quot;线程池&quot;。</router-link></li><li><router-link to="#并发不是并行">并发不是并行：</router-link></li><li><router-link to="#goroutine-奉行通过通信来共享内存-而不是共享内存来通信。">goroutine 奉行通过通信来共享内存，而不是共享内存来通信。</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    A. 进程是程序在操作系统中的一次执行过程，系统进行资源分配和调度的一个独立单位。
    B. 线程是进程的一个执行实体,是CPU调度和分派的基本单位,它是比进程更小的能独立运行的基本单位。
    C.一个进程可以创建和撤销多个线程;同一个进程中的多个线程之间可以并发执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发和并行" tabindex="-1"><a class="header-anchor" href="#并发和并行" aria-hidden="true">#</a> 并发和并行</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    A. 多线程程序在一个核的cpu上运行，就是并发。
    B. 多线程程序在多个核的cpu上运行，就是并行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发" tabindex="-1"><a class="header-anchor" href="#并发" aria-hidden="true">#</a> 并发</h2>
<p><img src="https://www.topgoer.com/static/7.1/1.png" alt="并发"></p>
<h2 id="并行" tabindex="-1"><a class="header-anchor" href="#并行" aria-hidden="true">#</a> 并行</h2>
<p><img src="https://www.topgoer.com/static/7.1/2.png" alt="并行"></p>
<h2 id="协程和线程" tabindex="-1"><a class="header-anchor" href="#协程和线程" aria-hidden="true">#</a> 协程和线程</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>协程：独立的栈空间，共享堆空间，调度由用户自己控制，本质上有点类似于用户级线程，这些用户级线程的调度也是自己实现的。
线程：一个线程上可以跑多个协程，协程是轻量级的线程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goroutine-只是由官方实现的超级-线程池-。" tabindex="-1"><a class="header-anchor" href="#goroutine-只是由官方实现的超级-线程池-。" aria-hidden="true">#</a> goroutine 只是由官方实现的超级&quot;线程池&quot;。</h2>
<p>每个实力<code v-pre>4~5KB</code>的栈内存占用和由于实现机制而大幅减少的创建和销毁开销是go高并发的根本原因。</p>
<h2 id="并发不是并行" tabindex="-1"><a class="header-anchor" href="#并发不是并行" aria-hidden="true">#</a> 并发不是并行：</h2>
<p>并发主要由切换时间片来实现&quot;同时&quot;运行，并行则是直接利用多核实现多线程的运行，go可以设置使用核数，以发挥多核计算机的能力。</p>
<h2 id="goroutine-奉行通过通信来共享内存-而不是共享内存来通信。" tabindex="-1"><a class="header-anchor" href="#goroutine-奉行通过通信来共享内存-而不是共享内存来通信。" aria-hidden="true">#</a> goroutine 奉行通过通信来共享内存，而不是共享内存来通信。</h2>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '7.md' style='float:left'>⬆️上一节🔗</a><a href = '9.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


