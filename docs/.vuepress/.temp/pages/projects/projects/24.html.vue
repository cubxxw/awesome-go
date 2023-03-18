<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第24节-数据处理-如何高效处理应用程序产生的数据" tabindex="-1"><a class="header-anchor" href="#第24节-数据处理-如何高效处理应用程序产生的数据" aria-hidden="true">#</a> 第24节 数据处理：如何高效处理应用程序产生的数据？</h1>
<br>
<div><a href = '23.md' style='float:left'>⬆️上一节🔗  </a><a href = '25.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#数据采集方式的分类">数据采集方式的分类</router-link></li><li><router-link to="#数据采集系统设计">数据采集系统设计</router-link><ul><li><router-link to="#设计数据采集系统时需要解决的核心问题">设计数据采集系统时需要解决的核心问题</router-link></li><li><router-link to="#数据上报功能设计">数据上报功能设计</router-link></li><li><router-link to="#数据采集功能设计">数据采集功能设计</router-link></li><li><router-link to="#数据采集应用模型">数据采集应用模型</router-link></li></ul></li><li><router-link to="#数据采集系统落地项目-iam-authz-server-iam-pump">数据采集系统落地项目：iam-authz-server + iam-pump</router-link></li><li><router-link to="#iam-authz-server-数据上报">iam-authz-server：数据上报</router-link><ul><li><router-link to="#启动服务-启动数据上报服务">启动服务：启动数据上报服务</router-link></li><li><router-link to="#运行服务-异步上报授权日志">运行服务：异步上报授权日志</router-link></li><li><router-link to="#关停服务-优雅关停数据上报">关停服务：优雅关停数据上报</router-link></li></ul></li><li><router-link to="#iam-pump-数据采集">iam-pump：数据采集</router-link><ul><li><router-link to="#初始化服务-数据采集插件定义">初始化服务：数据采集插件定义</router-link></li><li><router-link to="#初始化服务-初始化数据采集插件">初始化服务：初始化数据采集插件</router-link></li><li><router-link to="#初始化服务-健康检查">初始化服务：健康检查</router-link></li><li><router-link to="#运行服务-启动-loop-周期性消费-redis-数据">运行服务：启动 Loop 周期性消费 Redis 数据</router-link></li><li><router-link to="#关停服务-优雅关停数据采集服务">关停服务：优雅关停数据采集服务</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>一个大型应用为了后期的排障、运营等，会将一些请求数据保存在存储系统中，供日后使用。例如：应用将请求日志保存到 Elasticsearch 中，方便排障；网关将 API 请求次数、请求消息体等数据保存在数据库中，供控制台查询展示。</p>
<p>为了满足这些需求，我们需要进行数据采集，数据采集在大型应用中很常见，但我发现不少开发者设计的数据采集服务，通常会存在下面这些问题：</p>
<ul>
<li>采集服务只针对某个采集需求开发，如果采集需求有变，需要修改主代码逻辑，代码改动势必会带来潜在的 Bug，增加开发测试工作量。</li>
<li>数据采集服务会导致已有的服务请求延时变高。</li>
<li>采集数据性能差，需要较长时间才能采集完一批数据。</li>
<li>启停服务时，会导致采集的数据丢失。</li>
</ul>
<p>这一讲，我就来详细教你如何设计和落地一个数据采集服务，解决上面这些问题。</p>
<h2 id="数据采集方式的分类" tabindex="-1"><a class="header-anchor" href="#数据采集方式的分类" aria-hidden="true">#</a> 数据采集方式的分类</h2>
<p>首先，你需要知道当前数据采集有哪些方式，以便更好地理解异步数据处理方案。</p>
<p>目前，数据采集主要有两种方式，分别是同步采集和异步采集。二者的概念和优缺点如下表所示：</p>
<p><img src="http://sm.nsddd.top/sm202303042334375.jpeg" alt="图片">现代应用对性能的要求越来越高，而异步采集对应用程序的性能影响更小，因此异步采集更受开发者欢迎，得到了大规模的应用。接下来，我要介绍的 IAM Pump Server 服务，采用的就是异步采集的方式。</p>
<h2 id="数据采集系统设计" tabindex="-1"><a class="header-anchor" href="#数据采集系统设计" aria-hidden="true">#</a> 数据采集系统设计</h2>
<p>这一讲，我采用理论+实战的方式来展示如何设计一个数据采集服务，这里先来介绍下关于数据采集的理论知识，后面会有具体的实战案例。</p>
<p>在过往的项目开发中，我发现很多开发人员添加了数据采集功能后，因为同步上报数据、单线程、上报逻辑不对等原因，让整个应用程序的性能受到了严重影响。那么，如何在采集过程中不影响程序的性能？</p>
<p>答案就是让数据采集模型化。通过模型化，可以使设计出来的采集系统功能更加通用，能够满足未来的很多同类需求，我们也就不需要重复开发相同的系统了。</p>
<p>我今天就来给你详细介绍下，如何将数据采集功能模型化，以及该模型是如何解决上面说的的各种问题的。</p>
<h3 id="设计数据采集系统时需要解决的核心问题" tabindex="-1"><a class="header-anchor" href="#设计数据采集系统时需要解决的核心问题" aria-hidden="true">#</a> 设计数据采集系统时需要解决的核心问题</h3>
<p>采集系统首先需要一个数据源 Input，Input 可以是一个或者多个，Input 中的数据来自于应用程序上报。采集后的数据通常需要经过处理，比如格式化、增删字段、过滤无用的数据等，然后将处理后的数据存储到下游系统（Output）中，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303042334306.jpeg" alt="图片"></p>
<p><strong>这里，我们需要解决这 3 个核心问题：</strong></p>
<ul>
<li>进行数据采集，就需要在正常流程中多加一个上报数据环节，这势必会影响程序的性能。那么，如何让程序的性能损失最小化？</li>
<li>如果 Input 产生数据的速度大于 Output 的消费能力，产生数据堆积怎么办？</li>
<li>数据采集后需要存储到下游系统。在存储之前，我们需要对数据进行不同的处理，并可能会存储到不同的下游系统，这种可变的需求如何满足？</li>
</ul>
<p>对于让程序性能损失最小化这一点，最好的方法是异步上报。如果是异步，我们需要先把数据缓存在内存中，然后再异步上报到目标系统中。当然，为了提高上报的效率，可以采用批量上报的方式。</p>
<p>对于数据堆积这个问题，比较好的解决方法是，将采集的数据先上报到一些具有高吞吐量、可以存储大量数据的中间组件，比如 Kafka、Redis 中。这种方式也是业界标准的处理方式。</p>
<p>对于采集需求多样化这个问题，我们可以将采集程序做成插件化、可扩展的，满足可变的需求。</p>
<p>要解决这 3 个问题，其实就涉及到了数据采集系统中的两个功能点的设计，它们分别是数据上报功能和数据采集功能。接下来我们就来看下，如何设计这两个功能点。</p>
<h3 id="数据上报功能设计" tabindex="-1"><a class="header-anchor" href="#数据上报功能设计" aria-hidden="true">#</a> 数据上报功能设计</h3>
<p>为了提高异步上报的吞吐量，你可以将数据缓存在内存中（Go 中可以使用有缓冲 channel），并使用多个 worker 去消费内存中的数据。使用多个 worker ，可以充分发挥 CPU 的多核能力。另外，上报给下游系统时，你也可以采用批量上报的方式。</p>
<h3 id="数据采集功能设计" tabindex="-1"><a class="header-anchor" href="#数据采集功能设计" aria-hidden="true">#</a> 数据采集功能设计</h3>
<p>现代应用程序越来越讲究插件化、扩展性，在设计采集系统时，也应该考虑到未来的需求。比如，未来你可能需要将数据从上报到 MongoDB 切换到 HBase 中，或者同时将数据上报到 MongoDB 和 HBase 中。因此，上报给下游的程序逻辑要具有插件化的能力，并能通过配置选择需要的插件。</p>
<p>为了提高程序性能，会先把数据缓存在内存中。但是这样有个缺点：在关停程序时，内存中的数据就会丢失。所以，在程序结束之前，我们需要确保内存中的数据能够上报成功，也就是说采集程序需要实现优雅关停功能。优雅关停不仅要确保缓存中的数据被成功上报，还要确保正在处理的数据被成功上报。</p>
<p>当然了，既然是数据采集，还要能够配置采集的频率。最后，因为采集程序通常是非 API 类型的，所以还需要对外暴露一个特殊的 API，用来返回采集程序的健康状态。</p>
<h3 id="数据采集应用模型" tabindex="-1"><a class="header-anchor" href="#数据采集应用模型" aria-hidden="true">#</a> 数据采集应用模型</h3>
<p>通过上面的分析和设计，可以绘制出下面这个采集模型：</p>
<p><img src="http://sm.nsddd.top/sm202303042337956.jpeg" alt="图片"></p>
<p>异步上报需要额外的异步逻辑，会增加开发工作量和程序复杂度，所以，对于一些 Input 数据生产速度小于 Output 消费速度，并且 Output 具有高吞吐量、低延时特性的场景，也可以采用同步上报，例如同步上报给 Redis。</p>
<h2 id="数据采集系统落地项目-iam-authz-server-iam-pump" tabindex="-1"><a class="header-anchor" href="#数据采集系统落地项目-iam-authz-server-iam-pump" aria-hidden="true">#</a> 数据采集系统落地项目：iam-authz-server + iam-pump</h2>
<p>上面，我介绍了数据采集系统的架构，但是只有模型和理论，肯定还不足以解决你对数据采集程序的开发需求。所以，接下来我来介绍下如何落地上面的数据采集架构。整个架构包括两个部分，分别由不同的服务实现：</p>
<ul>
<li>iam-authz-server：实现数据上报功能。</li>
<li>iam-pump：实现数据采集功能。</li>
</ul>
<p>整个采集系统的架构，跟上面描述的数据采集架构完全一致，这里就不重复说明了。</p>
<h2 id="iam-authz-server-数据上报" tabindex="-1"><a class="header-anchor" href="#iam-authz-server-数据上报" aria-hidden="true">#</a> iam-authz-server：数据上报</h2>
<p>数据上报的最大难点，就是如何减少上报逻辑对应用性能的影响。对此，我们主要的解决思路就是异步上报数据。</p>
<p>接下来我会介绍 iam-authz-server 的数据上报设计。这是一个非常成熟的设计，在我所开发和了解的项目中被大量采用，有些项目可以承载十亿级/天的请求量。通过介绍这个设计，我们来看看异步上报的具体方法，以及上报过程中要考虑的因素。</p>
<p>iam-authz-server 的数据上报架构如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303042338170.jpeg" alt="图片"></p>
<p><strong>iam-authz-server 服务中的数据上报功能可以选择性开启</strong>，开启代码见 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/server.go#L147-L156" target="_blank" rel="noopener noreferrer">internal/authzserver/server.go<ExternalLinkIcon/></a> ，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token keyword">if</span> s<span class="token punctuation">.</span>analyticsOptions<span class="token punctuation">.</span>Enable <span class="token punctuation">{</span>                                           
        analyticsStore <span class="token operator">:=</span> storage<span class="token punctuation">.</span>RedisCluster<span class="token punctuation">{</span>KeyPrefix<span class="token punctuation">:</span> RedisKeyPrefix<span class="token punctuation">}</span>              
        analyticsIns <span class="token operator">:=</span> analytics<span class="token punctuation">.</span><span class="token function">NewAnalytics</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>analyticsOptions<span class="token punctuation">,</span> <span class="token operator">&amp;</span>analyticsStore<span class="token punctuation">)</span>    
        analyticsIns<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                                   
        s<span class="token punctuation">.</span>gs<span class="token punctuation">.</span><span class="token function">AddShutdownCallback</span><span class="token punctuation">(</span>shutdown<span class="token punctuation">.</span><span class="token function">ShutdownFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>    
            analyticsIns<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
                          
            <span class="token keyword">return</span> <span class="token boolean">nil</span>    
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    
    <span class="token punctuation">}</span>     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，当 <code v-pre>s.analyticsOptions.Enable</code> 为 <code v-pre>true</code> 时，开启数据上报功能。因为数据上报会影响程序的性能，而且在未来可能会存在禁掉数据上报功能的场景，所以在设计 iam-authz-server 时，就把数据上报功能做成了可配置的，也就是说可以通过配置文件来启用/禁用数据上报功能。配置方式也很简单：将 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/configs/iam-authz-server.yaml#L63" target="_blank" rel="noopener noreferrer">iam-authz-server.yaml<ExternalLinkIcon/></a> 的 analytics.enable 设置为 true，代表开启数据上报功能；设置为 false ，则代表关闭数据上报功能。</p>
<p>这里，我建议你在设计程序时，将未来的可能变量考虑进去，并将这些变量做成可配置的。这样，如果哪天需求变化，我们就能通过修改配置文件，而不是修改代码的方式来满足需求。这种方式可以将应用程序的变动局限在配置文件中，从而大大减小现网服务出现故障的概率，做到只变更配置文件就可以缩短发布变更的周期。</p>
<p>在上面的代码中，通过 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L64-L79" target="_blank" rel="noopener noreferrer">NewAnalytics<ExternalLinkIcon/></a> 创建一个数据上报服务，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewAnalytics</span><span class="token punctuation">(</span>options <span class="token operator">*</span>AnalyticsOptions<span class="token punctuation">,</span> store storage<span class="token punctuation">.</span>AnalyticsHandler<span class="token punctuation">)</span> <span class="token operator">*</span>Analytics <span class="token punctuation">{</span>                              
    ps <span class="token operator">:=</span> options<span class="token punctuation">.</span>PoolSize                                                                                             
    recordsBufferSize <span class="token operator">:=</span> options<span class="token punctuation">.</span>RecordsBufferSize                                                                     
    workerBufferSize <span class="token operator">:=</span> recordsBufferSize <span class="token operator">/</span> <span class="token function">uint64</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span>                                                                 
    log<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token string">"Analytics pool worker buffer size"</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span><span class="token function">Uint64</span><span class="token punctuation">(</span><span class="token string">"workerBufferSize"</span><span class="token punctuation">,</span> workerBufferSize<span class="token punctuation">)</span><span class="token punctuation">)</span>                   
                                                                                                                       
    recordsChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>AnalyticsRecord<span class="token punctuation">,</span> recordsBufferSize<span class="token punctuation">)</span>                                                      
                                                                                                                       
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Analytics<span class="token punctuation">{</span>                                                                                                 
        store<span class="token punctuation">:</span>                      store<span class="token punctuation">,</span>                                                                             
        poolSize<span class="token punctuation">:</span>                   ps<span class="token punctuation">,</span>                                                                                
        recordsChan<span class="token punctuation">:</span>                recordsChan<span class="token punctuation">,</span>                                                                       
        workerBufferSize<span class="token punctuation">:</span>           workerBufferSize<span class="token punctuation">,</span>                                                                 
        recordsBufferFlushInterval<span class="token punctuation">:</span> options<span class="token punctuation">.</span>FlushInterval<span class="token punctuation">,</span>                                                  
    <span class="token punctuation">}</span>                                                                                                                  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的代码根据传入的参数，创建 Analytics 类型的变量并返回，变量中有 5 个字段需要你关注：</p>
<ul>
<li>store： <a href="https://github.com/marmotedu/iam/blob/v1.0.6/pkg/storage/storage.go#L65-L71" target="_blank" rel="noopener noreferrer">storage.AnalyticsHandler<ExternalLinkIcon/></a> 接口类型，提供了 <code v-pre>Connect() bool</code>和 <code v-pre>AppendToSetPipelined(string, byte)</code>函数，分别用来连接 storage 和上报数据给 storage。iam-authz-server 用了 redis storage。</li>
<li>recordsChan：授权日志会缓存在 recordsChan 带缓冲 channel 中，其长度可以通过 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/configs/iam-authz-server.yaml#L65" target="_blank" rel="noopener noreferrer">iam-authz-server.yaml<ExternalLinkIcon/></a> 配置文件中的 <code v-pre>analytics.records-buffer-size</code> 配置。</li>
<li>poolSize：指定开启 worker 的个数，也就是开启多少个 Go 协程来消费 recordsChan 中的消息。</li>
<li>workerBufferSize：批量投递给下游系统的的消息数。通过批量投递，可以进一步提高消费能力、减少 CPU 消耗。</li>
<li>recordsBufferFlushInterval：设置最迟多久投递一次，也就是投递数据的超时时间。</li>
</ul>
<p><code v-pre>analytics.ecords-buffer-size</code> 和 <code v-pre>analytics.pool-size</code> 建议根据部署机器的 CPU 和内存来配置。在应用真正上线前，我建议你通过压力和负载测试，来配置一个合适的值。</p>
<p>Analytics提供了 3 种方法：</p>
<ul>
<li>Start()，用来启动数据上报服务。</li>
<li>Stop()，用来关停数据上报服务。主程序在收到系统的终止命令后，调用 Stop 方法优雅关停数据上报服务，确保缓存中的数据都上报成功。</li>
<li>RecordHit(record *AnalyticsRecord) error，用来记录 AnalyticsRecord 的数据。</li>
</ul>
<p>通过 NewXxx （NewAnalytics）返回一个 Xxx （Analytics）类型的结构体，Xxx（Analytics） 类型带有一些方法，如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">NewAnalytics</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">*</span>Analytics <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Analytics<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Analytics<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Analytics<span class="token punctuation">)</span> <span class="token function">RecordHit</span><span class="token punctuation">(</span>record <span class="token operator">*</span>AnalyticsRecord<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实，上述代码段是一种常见的 Go 代码 <strong>编写方式/设计模式</strong>。你在以后的开发生涯中，会经常遇到这种设计方式。使用上述代码设计方式有下面两个好处。</p>
<ul>
<li>**功能模块化：**将数据上报的功能封装成一个服务模块，数据和方法都围绕着 Xxx 结构体来展开。这和 C++、Java、Python 的类有相似的地方，你可以这么理解：Xxx 相当于类，NewXxx 相当于初始化一个类实例，Start、Stop、RecordHit 是这个类提供的方法。功能模块化可以使程序逻辑更加清晰，功能更独立、更好维护，也可以供其他应用使用。</li>
<li>**方便数据传递：**可以将数据存放在 Xxx 结构体字段中，供不同的方法共享使用，如果有并发，数据共享时，注意要给非并发安全的类型加锁，例如recordsChan。</li>
</ul>
<p>接下来，我会介绍 iam-authz-server 服务中跟数据上报相关的 3 部分核心代码，分别是启动数据上报服务、异步上报授权日志和优雅关停数据上报。</p>
<h3 id="启动服务-启动数据上报服务" tabindex="-1"><a class="header-anchor" href="#启动服务-启动数据上报服务" aria-hidden="true">#</a> 启动服务：启动数据上报服务</h3>
<p>在服务启动时，首先要启动数据上报功能模块。我们通过调用 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L87-L100" target="_blank" rel="noopener noreferrer">analyticsIns.Start()<ExternalLinkIcon/></a> 启动数据上报服务。Start 代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Analytics<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    analytics <span class="token operator">=</span> r
    r<span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// start worker pool</span>
    atomic<span class="token punctuation">.</span><span class="token function">SwapUint32</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>shouldStop<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> r<span class="token punctuation">.</span>poolSize<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        r<span class="token punctuation">.</span>poolWg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> r<span class="token punctuation">.</span><span class="token function">recordWorker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// stop analytics workers</span>
    <span class="token keyword">go</span> r<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有一点需要你注意，数据上报和数据采集都大量应用了 Go 协程来并发地执行操作，为了防止潜在的并发读写引起的Bug，建议你的测试程序编译时加上 <code v-pre>-race</code>，例如<code v-pre>go build -race cmd/iam-authz-server/authzserver.go</code>。然后，在测试过程中，观察程序日志，看有无并发问题出现。</p>
<p>Start 中会开启 poolSize 个数的 worker 协程，这些协程共同消费 recordsChan 中的消息，消费逻辑见 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L128-L173" target="_blank" rel="noopener noreferrer">recordWorker()<ExternalLinkIcon/></a> ，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Analytics<span class="token punctuation">)</span> <span class="token function">recordWorker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">defer</span> r<span class="token punctuation">.</span>poolWg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// this is buffer to send one pipelined command to redis</span>
  <span class="token comment">// use r.recordsBufferSize as cap to reduce slice re-allocations</span>
  recordsBuffer <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>workerBufferSize<span class="token punctuation">)</span>

  <span class="token comment">// read records from channel and process</span>
  lastSentTS <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    readyToSend <span class="token operator">:=</span> <span class="token boolean">false</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> record<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>r<span class="token punctuation">.</span>recordsChan<span class="token punctuation">:</span>
      <span class="token comment">// check if channel was closed and it is time to exit from worker</span>
      <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        <span class="token comment">// send what is left in buffer</span>
        r<span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">AppendToSetPipelined</span><span class="token punctuation">(</span>analyticsKeyName<span class="token punctuation">,</span> recordsBuffer<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// we have new record - prepare it and add to buffer</span>

      <span class="token keyword">if</span> encoded<span class="token punctuation">,</span> err <span class="token operator">:=</span> msgpack<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>record<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Error encoding analytics data: %s"</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        recordsBuffer <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>recordsBuffer<span class="token punctuation">,</span> encoded<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// identify that buffer is ready to be sent</span>
      readyToSend <span class="token operator">=</span> <span class="token function">uint64</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>recordsBuffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> r<span class="token punctuation">.</span>workerBufferSize

    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>recordsBufferFlushInterval<span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token comment">// nothing was received for that period of time</span>
      <span class="token comment">// anyways send whatever we have, don't hold data too long in buffer</span>
      readyToSend <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// send data to Redis and reset buffer</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>recordsBuffer<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>readyToSend <span class="token operator">||</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>lastSentTS<span class="token punctuation">)</span> <span class="token operator">>=</span> recordsBufferForcedFlushInterval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      r<span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">AppendToSetPipelined</span><span class="token punctuation">(</span>analyticsKeyName<span class="token punctuation">,</span> recordsBuffer<span class="token punctuation">)</span>
      recordsBuffer <span class="token operator">=</span> recordsBuffer<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span>
      lastSentTS <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>recordWorker 函数会将接收到的授权日志保存在 recordsBuffer 切片中，当数组内元素个数为 workerBufferSize ，或者距离上一次投递时间间隔为 recordsBufferFlushInterval 时，就会将 recordsBuffer 数组中的数据上报给目标系统（Input）。
recordWorker()中有些设计技巧，很值得你参考。</p>
<ul>
<li>使用 <a href="https://github.com/vmihailenco/msgpack" target="_blank" rel="noopener noreferrer">msgpack<ExternalLinkIcon/></a> 序列化消息：msgpack 是一个高效的二进制序列化格式。它像 JSON 一样，让你可以在各种语言之间交换数据。但是它比 JSON 更快、更小。</li>
<li>支持 Batch Windows：当 worker 的消息数达到指定阈值时，会批量投递消息给 Redis，阈值判断代码为<code v-pre>readyToSend = uint64(len(recordsBuffer)) == r.workerBufferSize</code>。</li>
<li>超时投递：为了避免因为产生消息太慢，一直达不到 Batch Windows，无法投递消息这种情况，投递逻辑也支持超时投递，通过 <code v-pre>case &lt;-time.After(r.recordsBufferFlushInterval)</code>代码段实现。</li>
<li>支持优雅关停：当 recordsChan 关闭时，将 recordsBuffer 中的消息批量投递给 Redis，之后退出 worker 协程。</li>
</ul>
<p>这里有个注意事项：投递完成后，你需要重置 recordsBuffer 和计时器，否则会重复投递数据：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>recordsBuffer <span class="token operator">=</span> recordsBuffer<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">]</span>lastSentTS <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里还设置了一个最大的超时时间 recordsBufferForcedFlushInterval，确保消息最迟被投递的时间间隔。也就是说， iam-authz-server 强制要求最大投递间隔为 recordsBufferForcedFlushInterval 秒，这是为了防止配置文件将 recordsBufferFlushInterval 设得过大。</p>
<h3 id="运行服务-异步上报授权日志" tabindex="-1"><a class="header-anchor" href="#运行服务-异步上报授权日志" aria-hidden="true">#</a> 运行服务：异步上报授权日志</h3>
<p>开启了数据上报服务后，当有授权日志产生时，程序就会自动上报数据。接下来，我会详细介绍下如何高效上报数据。</p>
<p>iam-authz-server 会在授权成功时调用 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/authorization/authorizer/authorizer.go#L100-L115" target="_blank" rel="noopener noreferrer">LogGrantedAccessRequest<ExternalLinkIcon/></a> 函数，在授权失败时调用 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/authorization/authorizer/authorizer.go#L71-L97" target="_blank" rel="noopener noreferrer">LogRejectedAccessRequest<ExternalLinkIcon/></a> 函数。并且，在这两个函数中，调用 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L115-L126" target="_blank" rel="noopener noreferrer">RecordHit <ExternalLinkIcon/></a>函数，记录授权日志。</p>
<p>iam-authz-server 通过调用 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L115-L126" target="_blank" rel="noopener noreferrer">RecordHit(record *AnalyticsRecord) error<ExternalLinkIcon/></a> 函数，异步缓存授权日志。调用 RecordHit 后，会将 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L26-L35" target="_blank" rel="noopener noreferrer">AnalyticsRecord<ExternalLinkIcon/></a> 类型的消息存放到 recordsChan 有缓冲 channel 中。</p>
<p>这里要注意：在缓存前，需要判断上报服务是否在优雅关停中，如果在关停中，则丢弃该消息：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> atomic<span class="token punctuation">.</span><span class="token function">LoadUint32</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>shouldStop<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过将授权日志缓写入 recordsChan 有缓冲 channel 中，LogGrantedAccessRequest 和 LogRejectedAccessRequest 函数可以不用等待授权日志上报成功就返回，这样就使得整个授权请求的性能损耗几乎为零。</p>
<h3 id="关停服务-优雅关停数据上报" tabindex="-1"><a class="header-anchor" href="#关停服务-优雅关停数据上报" aria-hidden="true">#</a> 关停服务：优雅关停数据上报</h3>
<p>完成数据上报之后的下一步，就是要优雅地将数据上报关停。为了确保在应用关停时，缓存中的数据和正在投递中的数据都能够投递到 Redis，iam-authz-server 实现了数据上报关停功能，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>gs<span class="token punctuation">.</span><span class="token function">AddShutdownCallback</span><span class="token punctuation">(</span>shutdown<span class="token punctuation">.</span><span class="token function">ShutdownFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    analyticsIns<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当收到 os.Interrupt 和 syscall.SIGTERM 系统信号后，调用 analyticsIns.Stop()函数，关停数据上报服务， <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L103-L112" target="_blank" rel="noopener noreferrer">Stop<ExternalLinkIcon/></a> 函数会停止接收新的授权日志，并等待正在上报的数据上报完成。</p>
<p>上面我介绍了数据上报部分的功能设计，接下来，我来介绍下数据采集部分的功能设计。</p>
<h2 id="iam-pump-数据采集" tabindex="-1"><a class="header-anchor" href="#iam-pump-数据采集" aria-hidden="true">#</a> iam-pump：数据采集</h2>
<p><strong>iam-authz-server 将数据上报到 Redis，iam-pump 消费 Redis 中的数据，并保存在 MongoDB 中做持久化存储。</strong></p>
<p><strong>iam-pump 的设计要点是：</strong> 插件化、可配置地将 Redis 中的数据处理后存储到下游系统中，并且实现优雅关停功能，这些也是设计数据采集程序的要点和难点所在。下面，我们就来看下 iam-pump 是如何插件化地实现一个数据采集程序的。这个数据采集程序的设计思路，在我开发的大型企业应用中有实际的落地验证，你可以放心使用。</p>
<p>iam-pump 数据采集架构如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303042349253.jpeg" alt="图片"></p>
<p>在iam-pump服务启动时，要启动数据采集功能，启动代码见 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/server.go#L58" target="_blank" rel="noopener noreferrer">internal/pump/server.go<ExternalLinkIcon/></a>。</p>
<p>接下来，我会介绍下 <code v-pre>iam-pump</code> 服务中的 5 部分核心代码：</p>
<ul>
<li>数据采集插件定义。</li>
<li>初始化数据采集插件。</li>
<li>健康检查。</li>
<li>启动 Loop 周期性消费 Redis 数据。</li>
<li>优雅关停数据采集服务。</li>
</ul>
<h3 id="初始化服务-数据采集插件定义" tabindex="-1"><a class="header-anchor" href="#初始化服务-数据采集插件定义" aria-hidden="true">#</a> 初始化服务：数据采集插件定义</h3>
<p>数据采集组件设计的核心是插件化，这里我<strong>将需要上报的系统抽象成一个个的 pump</strong>，那么如何定义 pump 接口呢？接口定义需要参考实际的采集需求，通常来说，至少需要下面这几个函数。</p>
<ul>
<li>**New：**创建一个 pump。</li>
<li>**Init：**初始化一个 pump，例如，可以在 Init 中创建下游系统的网络连接。</li>
<li>**WriteData：**往下游系统写入数据。为了提高性能，最好支持批量写入。</li>
<li>**SetFilters：**设置是否过滤某条数据，这也是一个非常常见的需求，因为不是所有的数据都是需要的。</li>
<li>**SetTimeout：**设置超时时间。我就在开发过程中遇到过一个坑，连接 Kafka 超时，导致整个采集程序超时。所以这里需要有超时处理，通过超时处理，可以保证整个采集框架正常运行。</li>
</ul>
<p>我之前开发过公有云的网关服务，网关服务需要把网关的请求数据转存到 MongoDB 中。我们的网关服务曾经遇到一个比较大的坑：有些用户会通过网关上传非常大的文件（百 M 级别），这些数据转存到 MongoDB 中，快速消耗了 MongoDB 的存储空间（500G 存储空间）。为了避免这个问题，在转存数据时，需要过滤掉一些比较详细的数据，所以 iam-pump 添加了 SetOmitDetailedRecording 来过滤掉详细的数据。</p>
<p>所以，最后 iam-pump 的插件接口定义为 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/pumps/pump.go#L15-L26" target="_blank" rel="noopener noreferrer">internal/pump/pumps/pump.go<ExternalLinkIcon/></a> ：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Pump <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
  <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Pump
  <span class="token function">Init</span><span class="token punctuation">(</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
  <span class="token function">WriteData</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
  <span class="token function">SetFilters</span><span class="token punctuation">(</span>analytics<span class="token punctuation">.</span>AnalyticsFilters<span class="token punctuation">)</span>
  <span class="token function">GetFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> analytics<span class="token punctuation">.</span>AnalyticsFilters
  <span class="token function">SetTimeout</span><span class="token punctuation">(</span>timeout <span class="token builtin">int</span><span class="token punctuation">)</span>
  <span class="token function">GetTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
  <span class="token function">SetOmitDetailedRecording</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span>
  <span class="token function">GetOmitDetailedRecording</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你在实际开发中，如果有更多的需求，可以在 Pump interface 定义中继续添加需要的处理函数。</p>
<h3 id="初始化服务-初始化数据采集插件" tabindex="-1"><a class="header-anchor" href="#初始化服务-初始化数据采集插件" aria-hidden="true">#</a> 初始化服务：初始化数据采集插件</h3>
<p>定义好插件之后，需要初始化插件。在 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/server.go#L97-L124" target="_blank" rel="noopener noreferrer">initialize<ExternalLinkIcon/></a> 函数中初始化 pumps：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>pumpServer<span class="token punctuation">)</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pmps <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>pumps<span class="token punctuation">.</span>Pump<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>pumps<span class="token punctuation">)</span><span class="token punctuation">)</span>
  i <span class="token operator">:=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> key<span class="token punctuation">,</span> pmp <span class="token operator">:=</span> <span class="token keyword">range</span> s<span class="token punctuation">.</span>pumps <span class="token punctuation">{</span>
    pumpTypeName <span class="token operator">:=</span> pmp<span class="token punctuation">.</span>Type
    <span class="token keyword">if</span> pumpTypeName <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span>
      pumpTypeName <span class="token operator">=</span> key
    <span class="token punctuation">}</span>

    pmpType<span class="token punctuation">,</span> err <span class="token operator">:=</span> pumps<span class="token punctuation">.</span><span class="token function">GetPumpByName</span><span class="token punctuation">(</span>pumpTypeName<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Pump load error (skipping): %s"</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      pmpIns <span class="token operator">:=</span> pmpType<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      initErr <span class="token operator">:=</span> pmpIns<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span>pmp<span class="token punctuation">.</span>Meta<span class="token punctuation">)</span>
      <span class="token keyword">if</span> initErr <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Pump init error (skipping): %s"</span><span class="token punctuation">,</span> initErr<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">"Init Pump: %s"</span><span class="token punctuation">,</span> pmpIns<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        pmpIns<span class="token punctuation">.</span><span class="token function">SetFilters</span><span class="token punctuation">(</span>pmp<span class="token punctuation">.</span>Filters<span class="token punctuation">)</span>
        pmpIns<span class="token punctuation">.</span><span class="token function">SetTimeout</span><span class="token punctuation">(</span>pmp<span class="token punctuation">.</span>Timeout<span class="token punctuation">)</span>
        pmpIns<span class="token punctuation">.</span><span class="token function">SetOmitDetailedRecording</span><span class="token punctuation">(</span>pmp<span class="token punctuation">.</span>OmitDetailedRecording<span class="token punctuation">)</span>
        pmps<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> pmpIns
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    i<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>initialize 会创建、初始化，并调用 SetFilters、SetTimeout、SetOmitDetailedRecording 来设置这些 pump。Filters、Timeout、OmitDetailedRecording 等信息在 pump 的配置文件中指定。</p>
<p>这里有个技巧你也可以注意下：pump 配置文件支持通用的配置，也支持自定义的配置，配置结构为 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/options/options.go#L18-L24" target="_blank" rel="noopener noreferrer">PumpConfig<ExternalLinkIcon/></a> ：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> PumpConfig <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Type                  <span class="token builtin">string</span>
  Filters               analytics<span class="token punctuation">.</span>AnalyticsFilters
  Timeout               <span class="token builtin">int</span>
  OmitDetailedRecording <span class="token builtin">bool</span>
  Meta                  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pump 自定义的配置可以存放在 map 类型的变量 Meta 中。通用配置可以使配置共享，减少开发和维护工作量，自定义配置可以适配不同pump的差异化配置。</p>
<h3 id="初始化服务-健康检查" tabindex="-1"><a class="header-anchor" href="#初始化服务-健康检查" aria-hidden="true">#</a> 初始化服务：健康检查</h3>
<p>因为 iam-pump 是一个非 API 服务，为了监控其运行状态，这里也设置了一个健康检查接口。iam-pump 组件通过调用 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/server/server.go#L15-L25" target="_blank" rel="noopener noreferrer">server.ServeHealthCheck<ExternalLinkIcon/></a> 函数启动一个 HTTP 服务，ServeHealthCheck 函数代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ServeHealthCheck</span><span class="token punctuation">(</span>healthPath <span class="token builtin">string</span><span class="token punctuation">,</span> healthAddress <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token operator">+</span>healthPath<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    w<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Content-type"</span><span class="token punctuation">,</span> <span class="token string">"application/json"</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span><span class="token function">WriteHeader</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">`{"status": "ok"}`</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span>healthAddress<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Error serving health check endpoint: %s"</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该函数启动了一个 HTTP 服务，服务监听地址通过 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/configs/iam-pump.yaml#L7" target="_blank" rel="noopener noreferrer">health-check-address<ExternalLinkIcon/></a> 配置，健康检查路径通过 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/configs/iam-pump.yaml#L6" target="_blank" rel="noopener noreferrer">health-check-path<ExternalLinkIcon/></a> 配置。如果请求 <code v-pre>http://&lt;health-check-address&gt;/&lt;health-check-path&gt;</code>返回<code v-pre>{&quot;status&quot;: &quot;ok&quot;}</code>，说明 iam-pump 可以正常工作。</p>
<p>这里的健康检查只是简单返回了一个字符串，实际开发中，可以封装更复杂的逻辑。比如，检查进程是否可以成功 ping 通数据库，进程内的工作进程是否处于 worker 状态等。</p>
<p>iam-pump 默认的健康检查请求地址为<code v-pre>http://127.0.0.1:7070/healthz</code> 。</p>
<h3 id="运行服务-启动-loop-周期性消费-redis-数据" tabindex="-1"><a class="header-anchor" href="#运行服务-启动-loop-周期性消费-redis-数据" aria-hidden="true">#</a> 运行服务：启动 Loop 周期性消费 Redis 数据</h3>
<p>初始化 pumps 之后，就可以通过 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/server.go#L58-L95" target="_blank" rel="noopener noreferrer">Run<ExternalLinkIcon/></a> 函数启动消费逻辑了。在 Run 函数中，会定期（通过配置 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/configs/iam-pump.yaml#L5" target="_blank" rel="noopener noreferrer">purge-delay<ExternalLinkIcon/></a> 设置轮训时间）从 Redis 中获取所有数据，经过 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/server.go#L72" target="_blank" rel="noopener noreferrer">msgpack.Unmarshal<ExternalLinkIcon/></a> 解压后，传给 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/server.go#L126" target="_blank" rel="noopener noreferrer">writeToPumps<ExternalLinkIcon/></a> 处理：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s preparedPumpServer<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span>stopCh <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>secInterval<span class="token punctuation">)</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
  <span class="token keyword">defer</span> ticker<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C<span class="token punctuation">:</span>
      analyticsValues <span class="token operator">:=</span> s<span class="token punctuation">.</span>analyticsStore<span class="token punctuation">.</span><span class="token function">GetAndDeleteSet</span><span class="token punctuation">(</span>storage<span class="token punctuation">.</span>AnalyticsKeyName<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>analyticsValues<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token comment">// Convert to something clean</span>
        keys <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>analyticsValues<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> analyticsValues <span class="token punctuation">{</span>
          decoded <span class="token operator">:=</span> analytics<span class="token punctuation">.</span>AnalyticsRecord<span class="token punctuation">{</span><span class="token punctuation">}</span>
          err <span class="token operator">:=</span> msgpack<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>decoded<span class="token punctuation">)</span>
          log<span class="token punctuation">.</span><span class="token function">Debugf</span><span class="token punctuation">(</span><span class="token string">"Decoded Record: %v"</span><span class="token punctuation">,</span> decoded<span class="token punctuation">)</span>
          <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Couldn't unmarshal analytics data: %s"</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> s<span class="token punctuation">.</span>omitDetails <span class="token punctuation">{</span>
              decoded<span class="token punctuation">.</span>Policies <span class="token operator">=</span> <span class="token string">""</span>
              decoded<span class="token punctuation">.</span>Deciders <span class="token operator">=</span> <span class="token string">""</span>
            <span class="token punctuation">}</span>
            keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span>decoded<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Send to pumps</span>
        <span class="token function">writeToPumps</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> s<span class="token punctuation">.</span>secInterval<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token comment">// exit consumption cycle when receive SIGINT and SIGTERM signal</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>stopCh<span class="token punctuation">:</span>
      log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"stop purge loop"</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>writeToPumps 函数通过调用 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/server.go#L165-L213" target="_blank" rel="noopener noreferrer">execPumpWriting<ExternalLinkIcon/></a> 函数，异步调用 pump 的 WriteData 函数写入数据。execPumpWriting 函数中有一些设计技巧，你可以注意下这两个：</p>
<ul>
<li>将一些通用的处理，例如 Filters、Timeout、OmitDetailedRecording 放在 pump 之外处理，这样可以减少 pump 中代码的重复性。</li>
<li>优雅关停。通过如下代码实现优雅关停功能：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>stopCh<span class="token punctuation">:</span>
        log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"stop purge loop"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码需要放在 writeToPumps 之后，这样可以确保所有数据都成功写入 pumps 之后，再停止采集逻辑。</p>
<h3 id="关停服务-优雅关停数据采集服务" tabindex="-1"><a class="header-anchor" href="#关停服务-优雅关停数据采集服务" aria-hidden="true">#</a> 关停服务：优雅关停数据采集服务</h3>
<p>在关停服务时，为了确保正在处理的数据被成功存储，还需要提供优雅关停功能。iam-pump 通过 channel 传递 SIGINT 和 SIGTERM 信号，当消费逻辑收到这两个信号后，会退出消费循环，见 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/pump/server.go#L58" target="_blank" rel="noopener noreferrer">Run<ExternalLinkIcon/></a> 函数。代码如下：</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>
func (s preparedPumpServer) Run(stopCh &lt;-chan struct{}) error {    
    ticker := time.NewTicker(time.Duration(s.secInterval) * time.Second)    
    defer ticker.Stop()                                                     
    
    for {    
        select {    
        case &lt;-ticker.C:    
         // 消费逻辑
         ...
        // exit consumption cycle when receive SIGINT and SIGTERM signal
        case &lt;-stopCh:    
            log.Info("stop purge loop")    
    
            return nil
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我主要介绍了如何将数据采集需求转化成一个数据采集模型，并从这个模型出发，设计出一个可扩展、高性能的数据采集服务，并通过 iam-pump 组件来落地该采集模型。</p>
<p>最后，我还想给你一个建议：在开发中，你也可以将一些功能抽象成一些通用的模型，并为该模型实现基本框架（引擎），然后将一些需要定制化的部分插件化。通过这种方式，可以设计出一个高扩展的服务，使得服务不仅能够满足现在的需求，还能够满足未来的需求。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>思考下，如何设计一个数据上报和数据采集应用，设计时有哪些点需要注意？</li>
<li>动手练习下，启动 iam-authz-server 和 iam-pump 服务，验证整个流程。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '23.md' style='float:left'>⬆️上一节🔗  </a><a href = '25.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/projects/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


