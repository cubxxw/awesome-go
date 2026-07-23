<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第23节-数据流-通过iam-authz-server设计-看数据流服务的设计" tabindex="-1"><a class="header-anchor" href="#第23节-数据流-通过iam-authz-server设计-看数据流服务的设计" aria-hidden="true">#</a> 第23节 数据流：通过iam-authz-server设计，看数据流服务的设计</h1>
<br>
<div><a href = '22.md' style='float:left'>⬆️上一节🔗  </a><a href = '24.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://cubxxw.com/" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#iam-authz-server的功能介绍">iam-authz-server的功能介绍</router-link><ul><li><router-link to="#github-com-ory-ladon包介绍">github.com/ory/ladon包介绍</router-link></li><li><router-link to="#iam-authz-server使用方法介绍">iam-authz-server使用方法介绍</router-link></li></ul></li><li><router-link to="#iam-authz-server的代码实现">iam-authz-server的代码实现</router-link><ul><li><router-link to="#iam-authz-server的配置处理">iam-authz-server的配置处理</router-link></li><li><router-link to="#iam-authz-server启动流程设计">iam-authz-server启动流程设计</router-link></li><li><router-link to="#iam-authz-server-的-restful-api请求处理流程">iam-authz-server 的 RESTful API请求处理流程</router-link></li><li><router-link to="#iam-authz-server的代码架构">iam-authz-server的代码架构</router-link></li></ul></li><li><router-link to="#iam-authz-server关键代码分析">iam-authz-server关键代码分析</router-link><ul><li><router-link to="#资源授权">资源授权</router-link></li><li><router-link to="#缓存设计">缓存设计</router-link></li><li><router-link to="#数据一致性">数据一致性</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在 <a href="https://time.geekbang.org/column/article/401190" target="_blank" rel="noopener noreferrer">28讲<ExternalLinkIcon/></a> 和 <a href="https://time.geekbang.org/column/article/402206" target="_blank" rel="noopener noreferrer">29讲<ExternalLinkIcon/></a> ，我介绍了IAM的控制流服务iam-apiserver的设计和实现。这一讲，我们再来看下IAM数据流服务iam-authz-server的设计和实现。</p>
<p>因为iam-authz-server是数据流服务，对性能要求较高，所以采用了一些机制来最大化API接口的性能。另外，为了提高开发效率，避免重复造轮子，iam-authz-server和iam-apiserver共享了大部分的功能代码。接下来，我们就来看下，iam-authz-server是如何跟iam-apiserver共享代码的，以及iam-authz-server是如何保证API接口性能的。</p>
<h2 id="iam-authz-server的功能介绍" tabindex="-1"><a class="header-anchor" href="#iam-authz-server的功能介绍" aria-hidden="true">#</a> iam-authz-server的功能介绍</h2>
<p>iam-authz-server目前的唯一功能，是通过提供 <code v-pre>/v1/authz</code> RESTful API接口完成资源授权。 <code v-pre>/v1/authz</code> 接口是通过<a href="https://github.com/ory/ladon" target="_blank" rel="noopener noreferrer">github.com/ory/ladon<ExternalLinkIcon/></a>来完成资源授权的。</p>
<p>因为iam-authz-server承载了数据流的请求，需要确保API接口具有较高的性能。为了保证API接口的性能，iam-authz-server在设计上使用了大量的缓存技术。</p>
<h3 id="github-com-ory-ladon包介绍" tabindex="-1"><a class="header-anchor" href="#github-com-ory-ladon包介绍" aria-hidden="true">#</a> github.com/ory/ladon包介绍</h3>
<p>因为iam-authz-server资源授权是通过 <code v-pre>github.com/ory/ladon</code> 来完成的，为了让你更好地理解iam-authz-server的授权策略，在这里我先介绍下 <code v-pre>github.com/ory/ladon</code> 包。</p>
<p><strong><a href="https://github.com/ory/ladon" target="_blank" rel="noopener noreferrer">Ladon<ExternalLinkIcon/></a>是用Go语言编写的用于实现访问控制策略的库，类似于RBAC（基于角色的访问控制系统，Role Based Access Control）和ACL（访问控制列表，Access Control Lists）。但是与RBAC和ACL相比，Ladon可以实现更细粒度的访问控制，并且能够在更为复杂的环境中（例如多租户、分布式应用程序和大型组织）工作。</strong></p>
<p>Ladon解决了这个问题：在特定的条件下，谁能够/不能够对哪些资源做哪些操作。为了解决这个问题，Ladon引入了授权策略。授权策略是一个有语法规范的文档，这个文档描述了谁在什么条件下能够对哪些资源做哪些操作。Ladon可以用请求的上下文，去匹配设置的授权策略，最终判断出当前授权请求是否通过。下面是一个Ladon的授权策略样例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"One policy to rule them all."</span><span class="token punctuation">,</span>
  <span class="token property">"subjects"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"users:&lt;peter|ken>"</span><span class="token punctuation">,</span> <span class="token string">"users:maria"</span><span class="token punctuation">,</span> <span class="token string">"groups:admins"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"actions"</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"delete"</span><span class="token punctuation">,</span> <span class="token string">"&lt;create|update>"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"effect"</span><span class="token operator">:</span> <span class="token string">"allow"</span><span class="token punctuation">,</span>
  <span class="token property">"resources"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"resources:articles:&lt;.*>"</span><span class="token punctuation">,</span>
    <span class="token string">"resources:printer"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"conditions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"remoteIP"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"CIDRCondition"</span><span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"cidr"</span><span class="token operator">:</span> <span class="token string">"192.168.0.1/16"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>策略（Policy）由若干元素构成，用来描述授权的具体信息，你可以把它们看成一组规则。核心元素包括主题（Subject）、操作（Action）、效力（Effect）、资源（Resource）以及生效条件（Condition）。元素保留字仅支持小写，它们在描述上没有顺序要求。对于没有特定约束条件的策略，Condition元素是可选项。一条策略包含下面6个元素：</p>
<ul>
<li>主题（Subject），主题名是唯一的，代表一个授权主题。例如，“ken” or “printer-service.mydomain.com”。</li>
<li>操作（Action），描述允许或拒绝的操作。</li>
<li>效力（Effect），描述策略产生的结果是“允许”还是“拒绝”，包括 allow（允许）和 deny（拒绝）。</li>
<li>资源（Resource），描述授权的具体数据。</li>
<li>生效条件（Condition），描述策略生效的约束条件。</li>
<li>描述（Description），策略的描述。</li>
</ul>
<p>有了授权策略，我们就可以传入请求上下文，由Ladon来决定请求是否能通过授权。下面是一个请求示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"subject"</span><span class="token operator">:</span> <span class="token string">"users:peter"</span><span class="token punctuation">,</span>
  <span class="token property">"action"</span> <span class="token operator">:</span> <span class="token string">"delete"</span><span class="token punctuation">,</span>
  <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token string">"resources:articles:ladon-introduction"</span><span class="token punctuation">,</span>
  <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"remoteIP"</span><span class="token operator">:</span> <span class="token string">"192.168.0.5"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，在 <code v-pre>remoteIP=&quot;192.168.0.5&quot;</code> 生效条件（Condition）下，针对主题（Subject） <code v-pre>users:peter</code> 对资源（Resource） <code v-pre>resources:articles:ladon-introduction</code> 的 <code v-pre>delete</code> 操作（Action），授权策略的效力（Effect）是 <code v-pre>allow</code> 的。所以Ladon会返回如下结果：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"allowed"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ladon支持很多Condition，具体见下表：</p>
<p><img src="https://static001.geekbang.org/resource/image/b8/dd/b84d2a1dc0e9ac07605a867594d734dd.jpg?wh=1920x1521" alt="图片"></p>
<p>至于如何使用这些Condition，你可以参考 <a href="https://github.com/marmotedu/geekbang-go/blob/master/LadonCondition%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B.md" target="_blank" rel="noopener noreferrer">Ladon Condition使用示例<ExternalLinkIcon/></a>。此外，Ladon还支持自定义Condition。</p>
<p>另外，Ladon还支持授权审计，用来记录授权历史。我们可以通过在ladon.Ladon中附加一个ladon.AuditLogger来实现：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">"github.com/ory/ladon"</span>
<span class="token keyword">import</span> manager <span class="token string">"github.com/ory/ladon/manager/memory"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    warden <span class="token operator">:=</span> ladon<span class="token punctuation">.</span>Ladon<span class="token punctuation">{</span>
        Manager<span class="token punctuation">:</span> manager<span class="token punctuation">.</span><span class="token function">NewMemoryManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        AuditLogger<span class="token punctuation">:</span> <span class="token operator">&amp;</span>ladon<span class="token punctuation">.</span>AuditLoggerInfo<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们提供了<code v-pre>ladon.AuditLoggerInfo</code>，该AuditLogger会在授权时打印调用的策略到标准错误。AuditLogger是一个interface：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// AuditLogger tracks denied and granted authorizations.</span>
<span class="token keyword">type</span> AuditLogger <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">LogRejectedAccessRequest</span><span class="token punctuation">(</span>request <span class="token operator">*</span>Request<span class="token punctuation">,</span> pool Policies<span class="token punctuation">,</span> deciders Policies<span class="token punctuation">)</span>
    <span class="token function">LogGrantedAccessRequest</span><span class="token punctuation">(</span>request <span class="token operator">*</span>Request<span class="token punctuation">,</span> pool Policies<span class="token punctuation">,</span> deciders Policies<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要实现一个新的AuditLogger，你只需要实现AuditLogger接口就可以了。比如，我们可以实现一个AuditLogger，将授权日志保存到Redis或者MySQL中。</p>
<p>Ladon支持跟踪一些授权指标，比如 deny、allow、not match、error。你可以通过实现<code v-pre>ladon.Metric</code>接口，来对这些指标进行处理。<code v-pre>ladon.Metric</code>接口定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Metric is used to expose metrics about authz</span>
<span class="token keyword">type</span> Metric <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token comment">// RequestDeniedBy is called when we get explicit deny by policy</span>
    <span class="token function">RequestDeniedBy</span><span class="token punctuation">(</span>Request<span class="token punctuation">,</span> Policy<span class="token punctuation">)</span>
    <span class="token comment">// RequestAllowedBy is called when a matching policy has been found.</span>
    <span class="token function">RequestAllowedBy</span><span class="token punctuation">(</span>Request<span class="token punctuation">,</span> Policies<span class="token punctuation">)</span>
    <span class="token comment">// RequestNoMatch is called when no policy has matched our request</span>
    <span class="token function">RequestNoMatch</span><span class="token punctuation">(</span>Request<span class="token punctuation">)</span>
    <span class="token comment">// RequestProcessingError is called when unexpected error occured</span>
    <span class="token function">RequestProcessingError</span><span class="token punctuation">(</span>Request<span class="token punctuation">,</span> Policy<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，你可以通过下面的示例，将这些指标暴露给<code v-pre>prometheus</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> prometheusMetrics <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>mtr <span class="token operator">*</span>prometheusMetrics<span class="token punctuation">)</span> <span class="token function">RequestDeniedBy</span><span class="token punctuation">(</span>r ladon<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> p ladon<span class="token punctuation">.</span>Policy<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mtr <span class="token operator">*</span>prometheusMetrics<span class="token punctuation">)</span> <span class="token function">RequestAllowedBy</span><span class="token punctuation">(</span>r ladon<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> policies ladon<span class="token punctuation">.</span>Policies<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mtr <span class="token operator">*</span>prometheusMetrics<span class="token punctuation">)</span> <span class="token function">RequestNoMatch</span><span class="token punctuation">(</span>r ladon<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mtr <span class="token operator">*</span>prometheusMetrics<span class="token punctuation">)</span> <span class="token function">RequestProcessingError</span><span class="token punctuation">(</span>r ladon<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    warden <span class="token operator">:=</span> ladon<span class="token punctuation">.</span>Ladon<span class="token punctuation">{</span>
        Manager<span class="token punctuation">:</span> manager<span class="token punctuation">.</span><span class="token function">NewMemoryManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Metric<span class="token punctuation">:</span>  <span class="token operator">&amp;</span>prometheusMetrics<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用Ladon的过程中，有两个地方需要你注意：</p>
<ul>
<li>所有检查都区分大小写，因为主题值可能是区分大小写的ID。</li>
<li>如果ladon.Ladon无法将策略与请求匹配，会默认授权结果为拒绝，并返回错误。</li>
</ul>
<h3 id="iam-authz-server使用方法介绍" tabindex="-1"><a class="header-anchor" href="#iam-authz-server使用方法介绍" aria-hidden="true">#</a> iam-authz-server使用方法介绍</h3>
<p>上面，我介绍了iam-authz-server的资源授权功能，这里介绍下如何使用iam-authz-server，也就是如何调用 <code v-pre>/v1/authz</code> 接口完成资源授权。你可以通过下面的3大步骤，来完成资源授权请求。</p>
<p><strong>第一步，登陆 iam-apiserver，创建授权策略和密钥。</strong></p>
<p>这一步又分为3个小步骤。</p>
<ol>
<li>登陆iam-apiserver系统，获取访问令牌：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">token</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">'Content-Type: application/json'</span> -d<span class="token string">'{"username":"admin","password":"Admin@2021"}'</span> http://127.0.0.1:8080/login <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> .token<span class="token variable">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>创建授权策略：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">"Content-Type: application/json"</span> -H<span class="token string">"Authorization: Bearer <span class="token variable">$token</span>"</span> -d<span class="token string">'{"metadata":{"name":"authztest"},"policy":{"description":"One policy to rule them all.","subjects":["users:&lt;peter|ken>","users:maria","groups:admins"],"actions":["delete","&lt;create|update>"],"effect":"allow","resources":["resources:articles:&lt;.*>","resources:printer"],"conditions":{"remoteIP":{"type":"CIDRCondition","options":{"cidr":"192.168.0.1/16"}}}}}'</span> http://127.0.0.1:8080/v1/policies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>创建密钥，并从请求结果中提取secretID 和 secretKey：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">"Content-Type: application/json"</span> -H<span class="token string">"Authorization: Bearer <span class="token variable">$token</span>"</span> -d<span class="token string">'{"metadata":{"name":"authztest"},"expires":0,"description":"admin secret"}'</span> http://127.0.0.1:8080/v1/secrets
<span class="token punctuation">{</span><span class="token string">"metadata"</span>:<span class="token punctuation">{</span><span class="token string">"id"</span>:23,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"authztest"</span>,<span class="token string">"createdAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-04-08T07:24:50.071671422+08:00"</span>,<span class="token string">"updatedAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-04-08T07:24:50.071671422+08:00"</span><span class="token punctuation">}</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"admin"</span>,<span class="token string">"secretID"</span><span class="token builtin class-name">:</span><span class="token string">"ZuxvXNfG08BdEMqkTaP41L2DLArlE6Jpqoox"</span>,<span class="token string">"secretKey"</span><span class="token builtin class-name">:</span><span class="token string">"7Sfa5EfAPIwcTLGCfSvqLf0zZGCjF3l8"</span>,<span class="token string">"expires"</span>:0,<span class="token string">"description"</span><span class="token builtin class-name">:</span><span class="token string">"admin secret"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步，生成访问 iam-authz-server的 token。</strong></p>
<p>iamctl 提供了 <code v-pre>jwt sigin</code> 子命令，可以根据 secretID 和 secretKey 签发 Token，方便使用。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iamctl jwt sign ZuxvXNfG08BdEMqkTaP41L2DLArlE6Jpqoox 7Sfa5EfAPIwcTLGCfSvqLf0zZGCjF3l8 <span class="token comment"># iamctl jwt sign $secretID $secretKey</span>
eyJhbGciOiJIUzI1NiIsImtpZCI6Ilp1eHZYTmZHMDhCZEVNcWtUYVA0MUwyRExBcmxFNkpwcW9veCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXV0aHoubWFybW90ZWR1LmNvbSIsImV4cCI6MTYxNzg0NTE5NSwiaWF0IjoxNjE3ODM3OTk1LCJpc3MiOiJpYW1jdGwiLCJuYmYiOjE2MTc4Mzc5OTV9.za9yLM7lHVabPAlVQLCqXEaf8sTU6sodAsMXnmpXjMQ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以通过 <code v-pre>iamctl jwt show &lt;token&gt;</code> 来查看Token的内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iamctl jwt show eyJhbGciOiJIUzI1NiIsImtpZCI6Ilp1eHZYTmZHMDhCZEVNcWtUYVA0MUwyRExBcmxFNkpwcW9veCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXV0aHoubWFybW90ZWR1LmNvbSIsImV4cCI6MTYxNzg0NTE5NSwiaWF0IjoxNjE3ODM3OTk1LCJpc3MiOiJpYW1jdGwiLCJuYmYiOjE2MTc4Mzc5OTV9.za9yLM7lHVabPAlVQLCqXEaf8sTU6sodAsMXnmpXjMQ
Header:
<span class="token punctuation">{</span>
    <span class="token string">"alg"</span><span class="token builtin class-name">:</span> <span class="token string">"HS256"</span>,
    <span class="token string">"kid"</span><span class="token builtin class-name">:</span> <span class="token string">"ZuxvXNfG08BdEMqkTaP41L2DLArlE6Jpqoox"</span>,
    <span class="token string">"typ"</span><span class="token builtin class-name">:</span> <span class="token string">"JWT"</span>
<span class="token punctuation">}</span>
Claims:
<span class="token punctuation">{</span>
    <span class="token string">"aud"</span><span class="token builtin class-name">:</span> <span class="token string">"iam.authz.marmotedu.com"</span>,
    <span class="token string">"exp"</span><span class="token builtin class-name">:</span> <span class="token number">1617845195</span>,
    <span class="token string">"iat"</span><span class="token builtin class-name">:</span> <span class="token number">1617837995</span>,
    <span class="token string">"iss"</span><span class="token builtin class-name">:</span> <span class="token string">"iamctl"</span>,
    <span class="token string">"nbf"</span><span class="token builtin class-name">:</span> <span class="token number">1617837995</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们生成的Token包含了下面这些信息：</strong></p>
<p><strong>Header</strong></p>
<ul>
<li><code v-pre>alg</code>：生成签名的算法。</li>
<li><code v-pre>kid</code>：密钥ID。</li>
<li><code v-pre>typ</code>：Token的类型，这里是JWT。</li>
</ul>
<p><strong>Claims</strong></p>
<ul>
<li><code v-pre>aud</code>：JWT Token的接受者。</li>
<li><code v-pre>exp</code>：JWT Token的过期时间（UNIX时间格式）。</li>
<li><code v-pre>iat</code>：JWT Token的签发时间（UNIX时间格式）。</li>
<li><code v-pre>iss</code>：签发者，因为我们是用 iamctl 工具签发的，所以这里的签发者是 iamctl。</li>
<li><code v-pre>nbf</code>：JWT Token的生效时间（UNIX时间格式），默认是签发时间。</li>
</ul>
<p><strong>第三步，调用 <code v-pre>/v1/authz</code>接口，完成资源授权请求。</strong></p>
<p>请求方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">'Content-Type: application/json'</span> -H<span class="token string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6Ilp1eHZYTmZHMDhCZEVNcWtUYVA0MUwyRExBcmxFNkpwcW9veCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXV0aHoubWFybW90ZWR1LmNvbSIsImV4cCI6MTYxNzg0NTE5NSwiaWF0IjoxNjE3ODM3OTk1LCJpc3MiOiJpYW1jdGwiLCJuYmYiOjE2MTc4Mzc5OTV9.za9yLM7lHVabPAlVQLCqXEaf8sTU6sodAsMXnmpXjMQ'</span> -d<span class="token string">'{"subject":"users:maria","action":"delete","resource":"resources:articles:ladon-introduction","context":{"remoteIP":"192.168.0.5"}}'</span> http://127.0.0.1:9090/v1/authz
<span class="token punctuation">{</span><span class="token string">"allowed"</span>:true<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果授权通过，会返回：<code v-pre>{&quot;allowed&quot;:true}</code> 。 如果授权失败，则返回：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span><span class="token string">"allowed"</span>:false,<span class="token string">"denied"</span>:true,<span class="token string">"reason"</span><span class="token builtin class-name">:</span><span class="token string">"Request was denied by default"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="iam-authz-server的代码实现" tabindex="-1"><a class="header-anchor" href="#iam-authz-server的代码实现" aria-hidden="true">#</a> iam-authz-server的代码实现</h2>
<p>接下来，我们来看下iam-authz-server的具体实现，我会从配置处理、启动流程、请求处理流程和代码架构4个方面来讲解。</p>
<h3 id="iam-authz-server的配置处理" tabindex="-1"><a class="header-anchor" href="#iam-authz-server的配置处理" aria-hidden="true">#</a> iam-authz-server的配置处理</h3>
<p>iam-authz-server服务的main函数位于<a href="https://github.com/marmotedu/iam/blob/v1.0.4/cmd/iam-authz-server/authzserver.go" target="_blank" rel="noopener noreferrer">authzserver.go<ExternalLinkIcon/></a>文件中，你可以跟读代码，了解iam-authz-server的代码实现。iam-authz-server的服务框架设计跟iam-apiserver的服务框架设计保持一致，也是有3种配置：Options配置、组件配置和HTTP服务配置。</p>
<p><strong>Options配置见<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/authzserver/options/options.go" target="_blank" rel="noopener noreferrer">options.go<ExternalLinkIcon/></a>文件：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> Options <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    RPCServer               <span class="token builtin">string</span>
    ClientCA                <span class="token builtin">string</span>
    GenericServerRunOptions <span class="token operator">*</span>genericoptions<span class="token punctuation">.</span>ServerRunOptions
    InsecureServing         <span class="token operator">*</span>genericoptions<span class="token punctuation">.</span>InsecureServingOptions
    SecureServing           <span class="token operator">*</span>genericoptions<span class="token punctuation">.</span>SecureServingOptions
    RedisOptions            <span class="token operator">*</span>genericoptions<span class="token punctuation">.</span>RedisOptions
    FeatureOptions          <span class="token operator">*</span>genericoptions<span class="token punctuation">.</span>FeatureOptions
    Log                     <span class="token operator">*</span>log<span class="token punctuation">.</span>Options
    AnalyticsOptions        <span class="token operator">*</span>analytics<span class="token punctuation">.</span>AnalyticsOptions
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和iam-apiserver相比，iam-authz-server多了 <code v-pre>AnalyticsOptions</code>，用来配置iam-authz-server内的Analytics服务，Analytics服务会将授权日志异步写入到Redis中。</p>
<p>iam-apiserver和iam-authz-server共用了GenericServerRunOptions、InsecureServing、SecureServing、FeatureOptions、RedisOptions、Log这些配置。所以，我们只需要用简单的几行代码，就可以将很多配置项都引入到iam-authz-server的命令行参数中，这也是命令行参数分组带来的好处：批量共享。</p>
<h3 id="iam-authz-server启动流程设计" tabindex="-1"><a class="header-anchor" href="#iam-authz-server启动流程设计" aria-hidden="true">#</a> iam-authz-server启动流程设计</h3>
<p>接下来，我们来详细看下iam-authz-server的启动流程。</p>
<p>iam-authz-server的启动流程也和iam-apiserver基本保持一致。二者比较大的不同在于Options参数配置和应用初始化内容。另外，和iam-apiserver相比，iam-authz-server只提供了REST API服务。启动流程如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042314376.jpeg" alt="img"></p>
<h3 id="iam-authz-server-的-restful-api请求处理流程" tabindex="-1"><a class="header-anchor" href="#iam-authz-server-的-restful-api请求处理流程" aria-hidden="true">#</a> iam-authz-server 的 RESTful API请求处理流程</h3>
<p>iam-authz-server的请求处理流程也是清晰、规范的，具体流程如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042314667.jpeg" alt="img"></p>
<p>**首先，**我们通过API调用（<code v-pre>&lt;HTTP Method&gt; + &lt;HTTP Request Path&gt;</code>）请求iam-authz-server提供的RESTful API接口 <code v-pre>POST /v1/authz</code> 。</p>
<p>**接着，**Gin Web框架接收到HTTP请求之后，会通过认证中间件完成请求的认证，iam-authz-server采用了Bearer认证方式。</p>
<p>**然后，**请求会被我们加载的一系列中间件所处理，例如跨域、RequestID、Dump等中间件。</p>
<p>**最后，**根据<code v-pre>&lt;HTTP Method&gt; + &lt;HTTP Request Path&gt;</code>进行路由匹配。</p>
<p>比如，我们请求的RESTful API是<code v-pre>POST /v1/authz</code>，Gin Web框架会根据 HTTP Method 和 HTTP Request Path，查找注册的Controllers，最终匹配到 <a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/authzserver/controller/v1/authorize/authorize.go#L33" target="_blank" rel="noopener noreferrer">authzController.Authorize<ExternalLinkIcon/></a> Controller。在 Authorize Controller中，会先解析请求参数，接着校验请求参数、调用业务层的方法进行资源授权，最后处理业务层的返回结果，返回最终的 HTTP 请求结果。</p>
<h3 id="iam-authz-server的代码架构" tabindex="-1"><a class="header-anchor" href="#iam-authz-server的代码架构" aria-hidden="true">#</a> iam-authz-server的代码架构</h3>
<p>iam-authz-server的代码设计和iam-apiserver一样，遵循简洁架构设计。</p>
<p>iam-authz-server的代码架构也分为4层，分别是</p>
<ul>
<li>模型层（Models）</li>
<li>控制层（Controller）</li>
<li>业务层 （Service）</li>
<li>仓库层（Repository）</li>
</ul>
<p>从控制层、业务层到仓库层，从左到右层级依次加深。模型层独立于其他层，可供其他层引用。如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042315040.jpeg" alt="img"></p>
<p>iam-authz-server 和 iam-apiserver 的代码架构有这三点不同：</p>
<ul>
<li>iam-authz-server 客户端不支持前端和命令行。</li>
<li>iam-authz-server 仓库层对接的是iam-apiserver微服务，而非数据库。</li>
<li>iam-authz-server 业务层的代码存放在目录<a href="https://github.com/marmotedu/iam/tree/v1.0.4/internal/authzserver/authorization" target="_blank" rel="noopener noreferrer">authorization<ExternalLinkIcon/></a>中。</li>
</ul>
<h2 id="iam-authz-server关键代码分析" tabindex="-1"><a class="header-anchor" href="#iam-authz-server关键代码分析" aria-hidden="true">#</a> iam-authz-server关键代码分析</h2>
<p>和 iam-apiserver 一样，<code v-pre>iam-authz-server</code> 也包含了一些优秀的设计思路和关键代码，这里我来一一介绍下。</p>
<h3 id="资源授权" tabindex="-1"><a class="header-anchor" href="#资源授权" aria-hidden="true">#</a> 资源授权</h3>
<p>先来看下，iam-authz-server是如何实现资源授权的。</p>
<p>我们可以调用iam-authz-server的 <code v-pre>/v1/authz</code> API接口，实现资源的访问授权。 <code v-pre>/v1/authz</code> 对应的controller方法是<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/authzserver/controller/v1/authorize/authorize.go#L33" target="_blank" rel="noopener noreferrer">Authorize<ExternalLinkIcon/></a>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>AuthzController<span class="token punctuation">)</span> <span class="token function">Authorize</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> r ladon<span class="token punctuation">.</span>Request
  <span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrBind<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  auth <span class="token operator">:=</span> authorization<span class="token punctuation">.</span><span class="token function">NewAuthorizer</span><span class="token punctuation">(</span>authorizer<span class="token punctuation">.</span><span class="token function">NewAuthorization</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>store<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> r<span class="token punctuation">.</span>Context <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    r<span class="token punctuation">.</span>Context <span class="token operator">=</span> ladon<span class="token punctuation">.</span>Context<span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  r<span class="token punctuation">.</span>Context<span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span>
  rsp <span class="token operator">:=</span> auth<span class="token punctuation">.</span><span class="token function">Authorize</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">)</span>

  core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> rsp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该函数使用 <code v-pre>github.com/ory/ladon</code> 包进行资源访问授权，授权流程如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042316433.jpeg" alt="img"></p>
<p><strong>具体分为以下几个步骤：</strong></p>
<p>第一步，在Authorize方法中调用 <code v-pre>c.ShouldBind(&amp;r)</code> ，将API请求参数解析到 <code v-pre>ladon.Request</code> 类型的结构体变量中。</p>
<p>第二步，调用<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/authzserver/authorization/authorizer.go#L21" target="_blank" rel="noopener noreferrer">authorization.NewAuthorizer<ExternalLinkIcon/></a>函数，该函数会创建并返回包含Manager和AuditLogger字段的<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/authzserver/authorization/authorizer.go#L16" target="_blank" rel="noopener noreferrer">Authorizer<ExternalLinkIcon/></a>类型的变量。</p>
<p>Manager包含一些函数，比如 Create、Update和FindRequestCandidates等，用来对授权策略进行增删改查。AuditLogger包含 LogRejectedAccessRequest 和 LogGrantedAccessRequest 函数，分别用来记录被拒绝的授权请求和被允许的授权请求，将其作为审计数据使用。</p>
<p>第三步，调用<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/authzserver/authorization/authorizer.go#L31" target="_blank" rel="noopener noreferrer">auth.Authorize<ExternalLinkIcon/></a>函数，对请求进行访问授权。auth.Authorize函数内容如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Authorizer<span class="token punctuation">)</span> <span class="token function">Authorize</span><span class="token punctuation">(</span>request <span class="token operator">*</span>ladon<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token operator">*</span>authzv1<span class="token punctuation">.</span>Response <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token string">"authorize request"</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token string">"request"</span><span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">:=</span> a<span class="token punctuation">.</span>warden<span class="token punctuation">.</span><span class="token function">IsAllowed</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>authzv1<span class="token punctuation">.</span>Response<span class="token punctuation">{</span>
      Denied<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      Reason<span class="token punctuation">:</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&amp;</span>authzv1<span class="token punctuation">.</span>Response<span class="token punctuation">{</span>
    Allowed<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该函数会调用 <code v-pre>a.warden.IsAllowed(request)</code> 完成资源访问授权。IsAllowed函数会调用 <code v-pre>FindRequestCandidates(r)</code> 查询所有的策略列表，这里要注意，我们只需要查询请求用户的policy列表。在Authorize函数中，我们将username存入ladon Request的context中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>r<span class="token punctuation">.</span>Context<span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">GetHeader</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/authzserver/authorization/manager.go#L54" target="_blank" rel="noopener noreferrer">FindRequestCandidates<ExternalLinkIcon/></a>函数中，我们可以从Request中取出username，并根据username查询缓存中的policy列表，FindRequestCandidates实现如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>PolicyManager<span class="token punctuation">)</span> <span class="token function">FindRequestCandidates</span><span class="token punctuation">(</span>r <span class="token operator">*</span>ladon<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">(</span>ladon<span class="token punctuation">.</span>Policies<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    username <span class="token operator">:=</span> <span class="token string">""</span>
  
    <span class="token keyword">if</span> user<span class="token punctuation">,</span> ok <span class="token operator">:=</span> r<span class="token punctuation">.</span>Context<span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
      username <span class="token operator">=</span> user
    <span class="token punctuation">}</span>
  
    policies<span class="token punctuation">,</span> err <span class="token operator">:=</span> m<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">List</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">Wrap</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"list policies failed"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  
    ret <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>ladon<span class="token punctuation">.</span>Policy<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>policies<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> policy <span class="token operator">:=</span> <span class="token keyword">range</span> policies <span class="token punctuation">{</span>
      ret <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ret<span class="token punctuation">,</span> policy<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">return</span> ret<span class="token punctuation">,</span> <span class="token boolean">nil</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IsAllowed函数代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>Ladon<span class="token punctuation">)</span> <span class="token function">IsAllowed</span><span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    policies<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span>Manager<span class="token punctuation">.</span><span class="token function">FindRequestCandidates</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> l<span class="token punctuation">.</span><span class="token function">metric</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RequestProcessingError</span><span class="token punctuation">(</span><span class="token operator">*</span>r<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">DoPoliciesAllow</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> policies<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IsAllowed会调用 <code v-pre>DoPoliciesAllow(r, policies)</code> 函数进行权限校验。如果权限校验不通过（请求在指定条件下不能够对资源做指定操作），就调用 <code v-pre>LogRejectedAccessRequest</code> 函数记录拒绝的请求，并返回值为非nil的error，error中记录了授权失败的错误信息。如果权限校验通过，则调用 <code v-pre>LogGrantedAccessRequest</code> 函数记录允许的请求，并返回值为nil的error。</p>
<p>为了降低请求延时，LogRejectedAccessRequest和LogGrantedAccessRequest会将授权记录存储在Redis中，之后由iam-pump进程读取Redis，并将授权记录持久化存储在MongoDB中。</p>
<h3 id="缓存设计" tabindex="-1"><a class="header-anchor" href="#缓存设计" aria-hidden="true">#</a> 缓存设计</h3>
<p>iam-authz-server主要用来做资源访问授权，属于数据流的组件，对接口访问性能有比较高的要求，所以该组件采用了缓存的机制。如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042320793.jpeg" alt="img"></p>
<p>iam-authz-server组件通过<strong>缓存密钥和授权策略信息</strong>到内存中，加快密钥和授权策略的查询速度。通过<strong>缓存授权记录</strong>到内存中，提高了授权数据的写入速度，从而大大降低了授权请求接口的延时。</p>
<p>上面的缓存机制用到了Redis key-value存储，所以在iam-authz-server初始化阶段，需要先建立Redis连接（位于<a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/server.go#L132" target="_blank" rel="noopener noreferrer">initialize<ExternalLinkIcon/></a>函数中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">go</span> storage<span class="token punctuation">.</span><span class="token function">ConnectToRedis</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">buildStorageConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个代码会维护一个Redis连接，如果Redis连接断掉，会尝试重连。这种方式可以使我们在调用Redis接口进行数据读写时，不用考虑连接断开的问题。</p>
<p>接下来，我们就来详细看看，iam-authz-server是如何实现缓存机制的。</p>
<p><strong>先来看下密钥和策略缓存。</strong></p>
<p>iam-authz-server通过<a href="https://github.com/marmotedu/iam/tree/v1.0.5/internal/authzserver/load" target="_blank" rel="noopener noreferrer">load<ExternalLinkIcon/></a>包来完成密钥和策略的缓存。</p>
<p>在iam-authz-server进程启动时，会创建并启动一个Load服务（位于<a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/server.go#L144" target="_blank" rel="noopener noreferrer">initialize<ExternalLinkIcon/></a>函数中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>load<span class="token punctuation">.</span><span class="token function">NewLoader</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> cacheIns<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**先来看创建Load服务。**创建Load服务时，传入了cacheIns参数，cacheIns是一个实现了<a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/load/load.go#L16" target="_blank" rel="noopener noreferrer">Loader<ExternalLinkIcon/></a>接口的实例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Loader <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**然后看启动Load服务。**通过Load实例的 <a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/load/load.go#L37" target="_blank" rel="noopener noreferrer">Start<ExternalLinkIcon/></a> 方法来启动Load服务：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>Load<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">startPubSubLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> l<span class="token punctuation">.</span><span class="token function">reloadQueueLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> l<span class="token punctuation">.</span><span class="token function">reloadLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    l<span class="token punctuation">.</span><span class="token function">DoReload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start函数先启动了3个协程，再调用 <code v-pre>l.DoReload()</code> 完成一次密钥和策略的同步：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>Load<span class="token punctuation">)</span> <span class="token function">DoReload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> l<span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">Reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"faild to refresh target storage: %s"</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    log<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token string">"refresh target storage succ"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们说了，创建Load服务时，传入的cacheIns实例是一个实现了Loader接口的实例，所以在<a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/load/load.go#L119" target="_blank" rel="noopener noreferrer">DoReload<ExternalLinkIcon/></a>方法中，可以直接调用Reload方法。cacheIns的Reload方法会从iam-apiserver中同步密钥和策略信息到iam-authz-server缓存中。</p>
<p>我们再来看下，startPubSubLoop、reloadQueueLoop、reloadLoop 这3个Go协程分别完成了什么功能。</p>
<h4 id="startpubsubloop协程" tabindex="-1"><a class="header-anchor" href="#startpubsubloop协程" aria-hidden="true">#</a> startPubSubLoop协程</h4>
<p><a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/load/redis_signals.go#L46" target="_blank" rel="noopener noreferrer">startPubSubLoop<ExternalLinkIcon/></a>函数通过<a href="https://github.com/marmotedu/iam/blob/v1.0.5/pkg/storage/redis_cluster.go#L897" target="_blank" rel="noopener noreferrer">StartPubSubHandler<ExternalLinkIcon/></a>函数，订阅Redis的 <code v-pre>iam.cluster.notifications</code> channel，并注册一个回调函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span><span class="token punctuation">(</span>v <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleRedisEvent</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/load/redis_signals.go#L65" target="_blank" rel="noopener noreferrer">handleRedisEvent<ExternalLinkIcon/></a>函数中，会将消息解析为<a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/load/redis_signals.go#L32" target="_blank" rel="noopener noreferrer">Notification<ExternalLinkIcon/></a>类型的消息，并判断Command的值。如果是NoticePolicyChanged或NoticeSecretChanged，就会向 <code v-pre>reloadQueue</code> channel中写入一个回调函数。因为我们不需要用回调函数做任何事情，所以这里回调函数是nil。 <code v-pre>reloadQueue</code> 主要用来告诉程序，需要完成一次密钥和策略的同步。</p>
<h4 id="reloadqueueloop协程" tabindex="-1"><a class="header-anchor" href="#reloadqueueloop协程" aria-hidden="true">#</a> reloadQueueLoop协程</h4>
<p>reloadQueueLoop函数会监听 <code v-pre>reloadQueue</code> ，当发现有新的消息（这里是回调函数）写入时，会实时将消息缓存到 <code v-pre>requeue</code> 切片中，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>Load<span class="token punctuation">)</span> <span class="token function">reloadQueueLoop</span><span class="token punctuation">(</span>cb <span class="token operator">...</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
      <span class="token keyword">select</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token operator">&lt;-</span>l<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span>
      <span class="token keyword">case</span> fn <span class="token operator">:=</span> <span class="token operator">&lt;-</span>reloadQueue<span class="token punctuation">:</span>
        requeueLock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        requeue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>requeue<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
        requeueLock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"Reload queued"</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
          cb<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reloadloop协程" tabindex="-1"><a class="header-anchor" href="#reloadloop协程" aria-hidden="true">#</a> reloadLoop协程</h4>
<p>通过<a href="https://github.com/marmotedu/iam/blob/v1.0.5/internal/authzserver/load/load.go#L81" target="_blank" rel="noopener noreferrer">reloadLoop<ExternalLinkIcon/></a>函数启动一个timer定时器，每隔1秒会检查 <code v-pre>requeue</code> 切片是否为空，如果不为空，则调用 <code v-pre>l.DoReload</code> 方法，从<code v-pre>iam-apiserver</code>中拉取密钥和策略，并缓存在内存中。</p>
<p>密钥和策略的缓存模型如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042324045.jpeg" alt="img"></p>
<p><strong>密钥和策略缓存的具体流程如下：</strong></p>
<p>接收上游消息（这里是从Redis中接收），将消息缓存到切片或者带缓冲的channel中，并启动一个消费协程去消费这些消息。这里的消费协程是reloadLoop，reloadLoop会每隔1s判断 <code v-pre>requeue</code> 切片是否长度为0，如果不为0，则执行 <code v-pre>l.DoReload()</code> 缓存密钥和策略。</p>
<p><strong>讲完了密钥和策略缓存，再来看下授权日志缓存。</strong></p>
<p>在启动iam-authz-server时，还会启动一个Analytics服务，代码如下（位于<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/server.go#L147-L156" target="_blank" rel="noopener noreferrer">internal/authzserver/server.go<ExternalLinkIcon/></a>文件中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> s<span class="token punctuation">.</span>analyticsOptions<span class="token punctuation">.</span>Enable <span class="token punctuation">{</span>    
    analyticsStore <span class="token operator">:=</span> storage<span class="token punctuation">.</span>RedisCluster<span class="token punctuation">{</span>KeyPrefix<span class="token punctuation">:</span> RedisKeyPrefix<span class="token punctuation">}</span>    
    analyticsIns <span class="token operator">:=</span> analytics<span class="token punctuation">.</span><span class="token function">NewAnalytics</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>analyticsOptions<span class="token punctuation">,</span> <span class="token operator">&amp;</span>analyticsStore<span class="token punctuation">)</span>    
    analyticsIns<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
    s<span class="token punctuation">.</span>gs<span class="token punctuation">.</span><span class="token function">AddShutdownCallback</span><span class="token punctuation">(</span>shutdown<span class="token punctuation">.</span><span class="token function">ShutdownFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>    
        analyticsIns<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    

        <span class="token keyword">return</span> <span class="token boolean">nil</span>    
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L64-L79" target="_blank" rel="noopener noreferrer">NewAnalytics<ExternalLinkIcon/></a>函数会根据配置，创建一个Analytics实例：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创建了一个带缓冲的 <code v-pre>recordsChan</code> ：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>recordsChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>AnalyticsRecord<span class="token punctuation">,</span> recordsBufferSize<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>recordsChan</code> 存放的数据类型为<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L26-L35" target="_blank" rel="noopener noreferrer">AnalyticsRecord<ExternalLinkIcon/></a>，缓冲区的大小为 <code v-pre>recordsBufferSize</code> （通过 <code v-pre>--analytics.records-buffer-size</code> 选项指定）。可以通过<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L115-L126" target="_blank" rel="noopener noreferrer">RecordHit<ExternalLinkIcon/></a>函数，向<code v-pre>recordsChan</code> 中写入 AnalyticsRecord 类型的数据：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Analytics<span class="token punctuation">)</span> <span class="token function">RecordHit</span><span class="token punctuation">(</span>record <span class="token operator">*</span>AnalyticsRecord<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>                                                     
    <span class="token comment">// check if we should stop sending records 1st                                                                     </span>
    <span class="token keyword">if</span> atomic<span class="token punctuation">.</span><span class="token function">LoadUint32</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>shouldStop<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>                                                                          
        <span class="token keyword">return</span> <span class="token boolean">nil</span>                                                                                                     
    <span class="token punctuation">}</span>                                                                                                                  
                                                                                                                       
    <span class="token comment">// just send record to channel consumed by pool of workers                                                         </span>
    <span class="token comment">// leave all data crunching and Redis I/O work for pool workers                                                    </span>
    r<span class="token punctuation">.</span>recordsChan <span class="token operator">&lt;-</span> record                                                                                            
                                                                                                                       
    <span class="token keyword">return</span> <span class="token boolean">nil</span>                                                                                                         
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>iam-authz-server是通过调用 LogGrantedAccessRequest 和 LogRejectedAccessRequest 函数来记录授权日志的。在记录授权日志时，会将授权日志写入 <code v-pre>recordsChan</code> channel中。<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/authorization/authorizer/authorizer.go#L100-L115" target="_blank" rel="noopener noreferrer">LogGrantedAccessRequest<ExternalLinkIcon/></a>函数代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>auth <span class="token operator">*</span>Authorization<span class="token punctuation">)</span> <span class="token function">LogGrantedAccessRequest</span><span class="token punctuation">(</span>r <span class="token operator">*</span>ladon<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> p ladon<span class="token punctuation">.</span>Policies<span class="token punctuation">,</span> d ladon<span class="token punctuation">.</span>Policies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conclusion <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"policies %s allow access"</span><span class="token punctuation">,</span> <span class="token function">joinPoliciesNames</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>                               
    rstring<span class="token punctuation">,</span> pstring<span class="token punctuation">,</span> dstring <span class="token operator">:=</span> <span class="token function">convertToString</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> p<span class="token punctuation">,</span> d<span class="token punctuation">)</span>                          
    record <span class="token operator">:=</span> analytics<span class="token punctuation">.</span>AnalyticsRecord<span class="token punctuation">{</span>                     
        TimeStamp<span class="token punctuation">:</span>  time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>                              
        Username<span class="token punctuation">:</span>   r<span class="token punctuation">.</span>Context<span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span>                 
        Effect<span class="token punctuation">:</span>     ladon<span class="token punctuation">.</span>AllowAccess<span class="token punctuation">,</span>                       
        Conclusion<span class="token punctuation">:</span> conclusion<span class="token punctuation">,</span>                              
        Request<span class="token punctuation">:</span>    rstring<span class="token punctuation">,</span>       
        Policies<span class="token punctuation">:</span>   pstring<span class="token punctuation">,</span>                                                   
        Deciders<span class="token punctuation">:</span>   dstring<span class="token punctuation">,</span>                                                   
    <span class="token punctuation">}</span>                           
                           
    record<span class="token punctuation">.</span><span class="token function">SetExpiry</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token boolean">_</span> <span class="token operator">=</span> analytics<span class="token punctuation">.</span><span class="token function">GetAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RecordHit</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>record<span class="token punctuation">)</span>         
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码，会创建AnalyticsRecord类型的结构体变量，并调用RecordHit将变量的值写入 <code v-pre>recordsChan</code> channel中。将授权日志写入 <code v-pre>recordsChan</code>  channel中，而不是直接写入Redis中，这可以大大减少写入延时，减少接口的响应延时。</p>
<p>还有一个worker进程从recordsChan中读取数据，并在数据达到一定阈值之后，批量写入Redis中。在<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L87-L100" target="_blank" rel="noopener noreferrer">Start<ExternalLinkIcon/></a>函数中，我们创建了一批worker，worker个数可以通过 <code v-pre>--analytics.pool-size</code> 来指定 。Start函数内容如下：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码通过 <code v-pre>go r.recordWorker()</code> 创建了 由<code v-pre>poolSize</code> 指定个数的<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/analytics/analytics.go#L128-L173" target="_blank" rel="noopener noreferrer">recordWorker<ExternalLinkIcon/></a>（worker），recordWorker函数会从 <code v-pre>recordsChan</code> 中读取授权日志并存入recordsBuffer中，recordsBuffer的大小为workerBufferSize，workerBufferSize计算公式为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>ps <span class="token operator">:=</span> options<span class="token punctuation">.</span>PoolSize
recordsBufferSize <span class="token operator">:=</span> options<span class="token punctuation">.</span>RecordsBufferSize
workerBufferSize <span class="token operator">:=</span> recordsBufferSize <span class="token operator">/</span> <span class="token function">uint64</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，options.PoolSize由命令行参数 <code v-pre>--analytics.pool-size</code> 指定，代表worker 的个数，默认 50；options.RecordsBufferSize由命令行参数 <code v-pre>--analytics.records-buffer-size</code> 指定，代表缓存的授权日志消息数。也就是说，我们把缓存的记录平均分配给所有的worker。</p>
<p>当recordsBuffer存满或者达到投递最大时间后，调用 <code v-pre>r.Store.AppendToSetPipelined(analyticsKeyName, recordsBuffer)</code> 将记录批量发送给Redis，为了提高传输速率，这里将日志内容编码为msgpack格式后再传输。</p>
<p>上面的缓存方法可以抽象成一个缓存模型，满足实际开发中的大部分需要异步转存的场景，如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042326755.jpeg" alt="img"></p>
<p>Producer将数据投递到带缓冲的channel中，后端有多个worker消费channel中的数据，并进行批量投递。你可以设置批量投递的条件，一般至少包含<strong>最大投递日志数</strong>和<strong>最大投递时间间隔</strong>这两个。</p>
<p>通过以上缓冲模型，你可以将日志转存的时延降到最低。</p>
<h3 id="数据一致性" tabindex="-1"><a class="header-anchor" href="#数据一致性" aria-hidden="true">#</a> 数据一致性</h3>
<p>上面介绍了 iam-authz-server的 <code v-pre>/v1/authz</code> 接口，为了最大化地提高性能，采用了大量的缓存设计。因为数据会分别在持久化存储和内存中都存储一份，就可能会出现数据不一致的情况。所以，我们也要确保缓存中的数据和数据库中的数据是一致的。数据一致性架构如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042326342.jpeg" alt="img"></p>
<p><strong>密钥和策略同步流程如下：</strong></p>
<ol>
<li>通过iam-webconsole请求iam-apiserver创建（或更新、删除）密钥（或策略）。</li>
<li>iam-apiserver收到“写”请求后，会向Redis <code v-pre>iam.cluster.notifications</code> channel发送PolicyChanged或SecretChanged消息。</li>
<li>Loader收到消息后，会触发cache loader实例执行 <code v-pre>Reload</code> 方法，重新从iam-apiserver中同步密钥和策略信息。</li>
</ol>
<p>Loader不会关心 <code v-pre>Reload</code> 方法的具体实现，只会在收到指定消息时，执行 <code v-pre>Reload</code> 方法。通过这种方式，我们可以实现不同的缓存策略。</p>
<p>在cache实例的 <code v-pre>Reload</code> 方法中，我们其实是调用仓库层Secret和Policy的List方法来获取密钥和策略列表。仓库层又是通过执行gRPC请求，从iam-apiserver中获取密钥和策略列表。</p>
<p>cache的<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/authzserver/load/cache/cache.go#L105-L132" target="_blank" rel="noopener noreferrer">Reload<ExternalLinkIcon/></a>方法，会将获取到的密钥和策略列表缓存在<a href="https://github.com/dgraph-io/ristretto" target="_blank" rel="noopener noreferrer">ristretto<ExternalLinkIcon/></a>类型的Cache中，供业务层调用。业务层代码位于<a href="https://github.com/marmotedu/iam/tree/v1.0.6/internal/authzserver/authorization" target="_blank" rel="noopener noreferrer">internal/authzserver/authorization<ExternalLinkIcon/></a>目录下。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲中，我介绍了IAM数据流服务iam-authz-server的设计和实现。iam-authz-server提供了 <code v-pre>/v1/authz</code> RESTful API接口，供第三方用户完成资源授权功能，具体是使用Ladon包来完成资源授权的。Ladon包解决了“在特定的条件下，谁能够/不能够对哪些资源做哪些操作”的问题。</p>
<p>iam-authz-server的配置处理、启动流程和请求处理流程跟iam-apiserver保持一致。此外，iam-authz-server也实现了简洁架构。</p>
<p>iam-authz-server通过缓存密钥和策略信息、缓存授权日志来提高 <code v-pre>/v1/authz</code> 接口的性能。</p>
<p>在缓存密钥和策略信息时，为了和iam-apiserver中的密钥和策略信息保持一致，使用了Redis Pub/Sub机制。当iam-apiserver有密钥/策略变更时，会往指定的Redis channel Pub一条消息。iam-authz-server订阅相同的channel，在收到新消息时，会解析消息，并重新从iam-apiserver中获取密钥和策略信息，缓存在内存中。</p>
<p>iam-authz-server执行完资源授权之后，会将授权日志存放在一个带缓冲的channel中。后端有多个worker消费channel中的数据，并进行批量投递。可以设置批量投递的条件，例如最大投递日志数和最大投递时间间隔。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ol>
<li>iam-authz-server和iam-apiserver共用了应用框架（包括一些配置项）和HTTP服务框架层的代码，请阅读iam-authz-server代码，看下IAM项目是如何实现代码复用的。</li>
<li>iam-authz-server使用了<a href="https://github.com/dgraph-io/ristretto" target="_blank" rel="noopener noreferrer">ristretto<ExternalLinkIcon/></a>来缓存密钥和策略信息，请调研下业界还有哪些优秀的缓存包可供使用，欢迎在留言区分享。</li>
</ol>
<ul><li><div><a href = '22.md' style='float:left'>⬆️上一节🔗  </a><a href = '24.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/projects/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


