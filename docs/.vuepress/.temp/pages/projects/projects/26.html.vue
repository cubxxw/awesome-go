<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第26节-sdk-设计-下-iam项目go-sdk设计和实现" tabindex="-1"><a class="header-anchor" href="#第26节-sdk-设计-下-iam项目go-sdk设计和实现" aria-hidden="true">#</a> 第26节  SDK 设计（下）：IAM项目Go SDK设计和实现</h1>
<br>
<div><a href = '25.md' style='float:left'>⬆️上一节🔗  </a><a href = '27.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#marmotedu-sdk-go设计">marmotedu-sdk-go设计</router-link><ul><li><router-link to="#marmotedu-sdk-go客户端设计">marmotedu-sdk-go客户端设计</router-link></li><li><router-link to="#项目级别客户端创建">项目级别客户端创建</router-link></li><li><router-link to="#应用级别客户端创建">应用级别客户端创建</router-link></li><li><router-link to="#服务级别客户端创建">服务级别客户端创建</router-link></li></ul></li><li><router-link to="#marmotedu-sdk-go的实现">marmotedu-sdk-go的实现</router-link><ul><li><router-link to="#restclient客户端实现">RESTClient客户端实现</router-link></li><li><router-link to="#request模块实现">Request模块实现</router-link></li><li><router-link to="#请求认证">请求认证</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>上一讲，我介绍了公有云厂商普遍采用的SDK设计方式。其实，还有一些比较优秀的SDK设计方式，比如 Kubernetes的 <a href="https://github.com/kubernetes/client-go" target="_blank" rel="noopener noreferrer">client-go<ExternalLinkIcon/></a> SDK设计方式。IAM项目参考client-go，也实现了client-go风格的SDK：<a href="https://github.com/marmotedu/marmotedu-sdk-go" target="_blank" rel="noopener noreferrer">marmotedu-sdk-go<ExternalLinkIcon/></a>。</p>
<p>和 <a href="https://time.geekbang.org/column/article/406389" target="_blank" rel="noopener noreferrer">33讲<ExternalLinkIcon/></a> 介绍的SDK设计方式相比，client-go风格的SDK具有以下优点：</p>
<ul>
<li>大量使用了Go interface特性，将接口的定义和实现解耦，可以支持多种实现方式。</li>
<li>接口调用层级跟资源的层级相匹配，调用方式更加友好。</li>
<li>多版本共存。</li>
</ul>
<p>所以，我更推荐你使用marmotedu-sdk-go。接下来，我们就来看下marmotedu-sdk-go是如何设计和实现的。</p>
<h2 id="marmotedu-sdk-go设计" tabindex="-1"><a class="header-anchor" href="#marmotedu-sdk-go设计" aria-hidden="true">#</a> marmotedu-sdk-go设计</h2>
<p>和medu-sdk-go相比，marmotedu-sdk-go的设计和实现要复杂一些，但功能更强大，使用体验也更好。</p>
<p>这里，我们先来看一个使用SDK调用iam-authz-server <code v-pre>/v1/authz</code> 接口的示例，代码保存在<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/examples/authz_clientset/main.go" target="_blank" rel="noopener noreferrer"> marmotedu-sdk-go/examples/authz_clientset/main.go<ExternalLinkIcon/></a>文件中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"context"</span>
  <span class="token string">"flag"</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"path/filepath"</span>

  <span class="token string">"github.com/ory/ladon"</span>

  metav1 <span class="token string">"github.com/marmotedu/component-base/pkg/meta/v1"</span>
  <span class="token string">"github.com/marmotedu/component-base/pkg/util/homedir"</span>

  <span class="token string">"github.com/marmotedu/marmotedu-sdk-go/marmotedu"</span>
  <span class="token string">"github.com/marmotedu/marmotedu-sdk-go/tools/clientcmd"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> iamconfig <span class="token operator">*</span><span class="token builtin">string</span>
  <span class="token keyword">if</span> home <span class="token operator">:=</span> homedir<span class="token punctuation">.</span><span class="token function">HomeDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> home <span class="token operator">!=</span> <span class="token string">""</span> <span class="token punctuation">{</span>
    iamconfig <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>
      <span class="token string">"iamconfig"</span><span class="token punctuation">,</span>
      filepath<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>home<span class="token punctuation">,</span> <span class="token string">".iam"</span><span class="token punctuation">,</span> <span class="token string">"config"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string">"(optional) absolute path to the iamconfig file"</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    iamconfig <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"iamconfig"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"absolute path to the iamconfig file"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// use the current context in iamconfig</span>
  config<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">BuildConfigFromFlags</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token operator">*</span>iamconfig<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// create the clientset</span>
  clientset<span class="token punctuation">,</span> err <span class="token operator">:=</span> marmotedu<span class="token punctuation">.</span><span class="token function">NewForConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  request <span class="token operator">:=</span> <span class="token operator">&amp;</span>ladon<span class="token punctuation">.</span>Request<span class="token punctuation">{</span>
    Resource<span class="token punctuation">:</span> <span class="token string">"resources:articles:ladon-introduction"</span><span class="token punctuation">,</span>
    Action<span class="token punctuation">:</span>   <span class="token string">"delete"</span><span class="token punctuation">,</span>
    Subject<span class="token punctuation">:</span>  <span class="token string">"users:peter"</span><span class="token punctuation">,</span>
    Context<span class="token punctuation">:</span> ladon<span class="token punctuation">.</span>Context<span class="token punctuation">{</span>
      <span class="token string">"remoteIP"</span><span class="token punctuation">:</span> <span class="token string">"192.168.0.5"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Authorize the request</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Authorize request..."</span><span class="token punctuation">)</span>
  ret<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientset<span class="token punctuation">.</span><span class="token function">Iam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AuthzV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authorize</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> request<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>AuthorizeOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Authorize response: %s.\n"</span><span class="token punctuation">,</span> ret<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码示例中，包含了下面的操作。</p>
<ul>
<li>首先，调用 <code v-pre>BuildConfigFromFlags</code> 函数，创建出SDK的配置实例config；</li>
<li>接着，调用 <code v-pre>marmotedu.NewForConfig(config)</code> 创建了IAM项目的客户端 <code v-pre>clientset</code> ;</li>
<li>最后，调用以下代码请求 <code v-pre>/v1/authz</code> 接口执行资源授权请求：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>ret<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientset<span class="token punctuation">.</span><span class="token function">Iam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AuthzV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authorize</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> request<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>AuthorizeOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>    
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>           
    <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span>    

fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Authorize response: %s.\n"</span><span class="token punctuation">,</span> ret<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用格式为<code v-pre>项目客户端.应用客户端.服务客户端.资源名.接口</code> 。</p>
<p>所以，上面的代码通过创建项目级别的客户端、应用级别的客户端和服务级别的客户端，来调用资源的API接口。接下来，我们来看下如何创建这些客户端。</p>
<h3 id="marmotedu-sdk-go客户端设计" tabindex="-1"><a class="header-anchor" href="#marmotedu-sdk-go客户端设计" aria-hidden="true">#</a> marmotedu-sdk-go客户端设计</h3>
<p>在讲客户端创建之前，我们先来看下客户端的设计思路。</p>
<p>Go项目的组织方式是有层级的：<strong>Project -&gt; Application -&gt; Service</strong>。marmotedu-sdk-go很好地体现了这种层级关系，使得SDK的调用更加易懂、易用。marmotedu-sdk-go的层级关系如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303042358912.jpeg" alt="img"></p>
<p>marmotedu-sdk-go定义了3类接口，分别代表了项目、应用和服务级别的API接口：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// 项目级别的接口</span>
<span class="token keyword">type</span> Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Iam</span><span class="token punctuation">(</span><span class="token punctuation">)</span> iam<span class="token punctuation">.</span>IamInterface
    <span class="token function">Tms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> tms<span class="token punctuation">.</span>TmsInterface
<span class="token punctuation">}</span>

<span class="token comment">// 应用级别的接口</span>
<span class="token keyword">type</span> IamInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">APIV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> apiv1<span class="token punctuation">.</span>APIV1Interface
    <span class="token function">AuthzV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> authzv1<span class="token punctuation">.</span>AuthzV1Interface
<span class="token punctuation">}</span>

<span class="token comment">// 服务级别的接口</span>
<span class="token keyword">type</span> APIV1Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">RESTClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> rest<span class="token punctuation">.</span>Interface
    SecretsGetter
    UsersGetter
    PoliciesGetter
<span class="token punctuation">}</span>

<span class="token comment">// 资源级别的客户端</span>
<span class="token keyword">type</span> SecretsGetter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> SecretInterface
<span class="token punctuation">}</span>

<span class="token comment">// 资源的接口定义</span>
<span class="token keyword">type</span> SecretInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Create</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> secret <span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
    <span class="token function">Update</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> secret <span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>UpdateOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
    <span class="token function">Delete</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>DeleteOptions<span class="token punctuation">)</span> <span class="token builtin">error</span>
    <span class="token function">DeleteCollection</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>DeleteOptions<span class="token punctuation">,</span> listOpts metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">)</span> <span class="token builtin">error</span>
    <span class="token function">Get</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>GetOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
    <span class="token function">List</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>SecretList<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
    SecretExpansion
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Interface</code> 代表了项目级别的接口，里面包含了 <code v-pre>Iam</code> 和 <code v-pre>Tms</code> 两个应用； <code v-pre>IamInterface</code> 代表了应用级别的接口，里面包含了api（iam-apiserver）和authz（iam-authz-server）两个服务级别的接口。api和authz服务中，又包含了各自服务中REST资源的CURD接口。</p>
<p>marmotedu-sdk-go通过 <code v-pre>XxxV1</code> 这种命名方式来支持不同版本的API接口，好处是可以在程序中同时调用同一个API接口的不同版本，例如：</p>
<p><code v-pre>clientset.Iam().AuthzV1().Authz().Authorize()</code> 、<code v-pre>clientset.Iam().AuthzV2().Authz().Authorize()</code> 分别调用了 <code v-pre>/v1/authz</code> 和 <code v-pre>/v2/authz</code> 两个版本的API接口。</p>
<p>上述关系也可以从目录结构中反映出来，marmotedu-sdk-go目录设计如下（只列出了一些重要的文件）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
├── examples                        <span class="token comment"># 存放SDK的使用示例</span>
├── Makefile                        <span class="token comment"># 管理SDK源码，静态代码检查、代码格式化、测试、添加版权信息等</span>
├── marmotedu
│   ├── clientset.go                <span class="token comment"># clientset实现，clientset中包含多个应用，多个服务的API接口</span>
│   ├── fake                        <span class="token comment"># clientset的fake实现，主要用于单元测试</span>
│   └── <span class="token function">service</span>                     <span class="token comment"># 按应用进行分类，存放应用中各服务API接口的具体实现</span>
│       ├── iam                     <span class="token comment"># iam应用的API接口实现，包含多个服务</span>
│       │   ├── apiserver           <span class="token comment"># iam应用中，apiserver服务的API接口，包含多个版本</span>
│       │   │   └── v1              <span class="token comment"># apiserver v1版本API接口</span>
│       │   ├── authz               <span class="token comment"># iam应用中，authz服务的API接口</span>
│       │   │   └── v1              <span class="token comment"># authz服务v1版本接口</span>
│       │   └── iam_client.go       <span class="token comment"># iam应用的客户端，包含了apiserver和authz 2个服务的客户端</span>
│       └── tms                     <span class="token comment"># tms应用的API接口实现</span>
├── pkg                             <span class="token comment"># 存放一些共享包，可对外暴露</span>
├── rest                            <span class="token comment"># HTTP请求的底层实现</span>
├── third_party                     <span class="token comment"># 存放修改过的第三方包，例如：gorequest</span>
└── tools
    └── clientcmd                   <span class="token comment"># 一些函数用来帮助创建rest.Config配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每种类型的客户端，都可以通过以下相似的方式来创建：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>config<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">BuildConfigFromFlags</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"/root/.iam/config"</span><span class="token punctuation">)</span>
clientset<span class="token punctuation">,</span> err <span class="token operator">:=</span> xxxx<span class="token punctuation">.</span><span class="token function">NewForConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>/root/.iam/config</code> 为配置文件，里面包含了服务的地址和认证信息。<code v-pre>BuildConfigFromFlags</code> 函数加载配置文件，创建并返回 <code v-pre>rest.Config</code> 类型的配置变量，并通过 <code v-pre>xxxx.NewForConfig</code> 函数创建需要的客户端。<code v-pre>xxxx</code> 是所在层级的client包，例如 iam、tms。</p>
<p>marmotedu-sdk-go客户端定义了3类接口，这可以带来两个好处。</p>
<p>第一，API接口调用格式规范，层次清晰，可以使API接口调用更加清晰易记。</p>
<p>第二，可以根据需要，自行选择客户端类型，调用灵活。举个例子，在A服务中需要同时用到iam-apiserver 和 iam-authz-server提供的接口，就可以创建应用级别的客户端IamClient，然后通过 <code v-pre>iamclient.APIV1()</code> 和 <code v-pre>iamclient.AuthzV1()</code> ，来切换调用不同服务的API接口。</p>
<p>接下来，我们来看看如何创建三个不同级别的客户端。</p>
<h3 id="项目级别客户端创建" tabindex="-1"><a class="header-anchor" href="#项目级别客户端创建" aria-hidden="true">#</a> 项目级别客户端创建</h3>
<p><code v-pre>Interface</code> 对应的客户端实现为<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/marmotedu/clientset.go#L20-L23" target="_blank" rel="noopener noreferrer">Clientset<ExternalLinkIcon/></a>，所在的包为 <a href="https://github.com/marmotedu/marmotedu-sdk-go/tree/v1.0.2/marmotedu" target="_blank" rel="noopener noreferrer">marmotedu-sdk-go/marmotedu<ExternalLinkIcon/></a>，Clientset客户端的创建方式为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>config<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">BuildConfigFromFlags</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"/root/.iam/config"</span><span class="token punctuation">)</span>
clientset<span class="token punctuation">,</span> err <span class="token operator">:=</span> marmotedu<span class="token punctuation">.</span><span class="token function">NewForConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方式为 <code v-pre>clientset.应用.服务.资源名.接口</code> ，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>rsp<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientset<span class="token punctuation">.</span><span class="token function">Iam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AuthzV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考示例为 <a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/examples/authz_clientset/main.go" target="_blank" rel="noopener noreferrer">marmotedu-sdk-go/examples/authz_clientset/main.go<ExternalLinkIcon/></a>。</p>
<h3 id="应用级别客户端创建" tabindex="-1"><a class="header-anchor" href="#应用级别客户端创建" aria-hidden="true">#</a> 应用级别客户端创建</h3>
<p><code v-pre>IamInterface</code> 对应的客户端实现为<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/marmotedu/service/iam/iam_client.go#L22-L25" target="_blank" rel="noopener noreferrer">IamClient<ExternalLinkIcon/></a>，所在的包为 <a href="https://github.com/marmotedu/marmotedu-sdk-go/tree/v1.0.2/marmotedu/service/iam" target="_blank" rel="noopener noreferrer">marmotedu-sdk-go/marmotedu/service/iam<ExternalLinkIcon/></a>，IamClient客户端的创建方式为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>config<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">BuildConfigFromFlags</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"/root/.iam/config"</span><span class="token punctuation">)</span>
iamclient<span class="token punctuation">,</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> iam<span class="token punctuation">.</span><span class="token function">NewForConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方式为 <code v-pre>iamclient.服务.资源名.接口</code> ，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>rsp<span class="token punctuation">,</span> err <span class="token operator">:=</span> iamclient<span class="token punctuation">.</span><span class="token function">AuthzV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考示例为 <a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/examples/authz_iam/main.go" target="_blank" rel="noopener noreferrer">marmotedu-sdk-go/examples/authz_iam/main.go<ExternalLinkIcon/></a>。</p>
<h3 id="服务级别客户端创建" tabindex="-1"><a class="header-anchor" href="#服务级别客户端创建" aria-hidden="true">#</a> 服务级别客户端创建</h3>
<p><code v-pre>AuthzV1Interface</code> 对应的客户端实现为<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/marmotedu/service/iam/authz/v1/authz_client.go#L21-L23" target="_blank" rel="noopener noreferrer">AuthzV1Client<ExternalLinkIcon/></a>，所在的包为 <a href="https://github.com/marmotedu/marmotedu-sdk-go/tree/v1.0.2/marmotedu/service/iam/authz/v1" target="_blank" rel="noopener noreferrer">marmotedu-sdk-go/marmotedu/service/iam/authz/v1<ExternalLinkIcon/></a>，AuthzV1Client客户端的创建方式为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>config<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">BuildConfigFromFlags</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"/root/.iam/config"</span><span class="token punctuation">)</span>
client<span class="token punctuation">,</span> err <span class="token operator">:=</span> v1<span class="token punctuation">.</span><span class="token function">NewForConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方式为 <code v-pre>client.资源名.接口</code> ，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>rsp<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Authz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考示例为 <a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/examples/authz/main.go" target="_blank" rel="noopener noreferrer">marmotedu-sdk-go/examples/authz/main.go<ExternalLinkIcon/></a>。</p>
<p>上面我介绍了marmotedu-sdk-go的客户端创建方法，接下来我们再来看下，这些客户端具体是如何执行REST API请求的。</p>
<h2 id="marmotedu-sdk-go的实现" tabindex="-1"><a class="header-anchor" href="#marmotedu-sdk-go的实现" aria-hidden="true">#</a> marmotedu-sdk-go的实现</h2>
<p>marmotedu-sdk-go的实现和medu-sdk-go一样，也是采用分层结构，分为API层和基础层。如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303042359805.jpeg" alt="img"></p>
<p><a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/client.go#L95-L105" target="_blank" rel="noopener noreferrer">RESTClient<ExternalLinkIcon/></a>是整个SDK的核心，RESTClient向下通过调用<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/request.go#L28-L50" target="_blank" rel="noopener noreferrer">Request<ExternalLinkIcon/></a>模块，来完成HTTP请求方法、请求路径、请求体、认证信息的构建。Request模块最终通过调用<a href="https://github.com/parnurzeal/gorequest" target="_blank" rel="noopener noreferrer">gorequest<ExternalLinkIcon/></a>包提供的方法，完成HTTP的POST、PUT、GET、DELETE等请求，获取HTTP返回结果，并解析到指定的结构体中。RESTClient向上提供 <code v-pre>Post()</code> 、 <code v-pre>Put()</code> 、 <code v-pre>Get()</code> 、 <code v-pre>Delete()</code> 等方法来供客户端完成HTTP请求。</p>
<p>marmotedu-sdk-go提供了两类客户端，分别是RESTClient客户端和基于RESTClient封装的客户端。</p>
<ul>
<li>RESTClient：Raw类型的客户端，可以通过指定HTTP的请求方法、请求路径、请求参数等信息，直接发送HTTP请求，例如 <code v-pre>client.Get().AbsPath(&quot;/version&quot;).Do().Into()</code> 。</li>
<li>基于RESTClient封装的客户端：例如AuthzV1Client、APIV1Client等，执行特定REST资源、特定API接口的请求，方便开发者调用。</li>
</ul>
<p>接下来，我们具体看下如何创建RESTClient客户端，以及Request模块的实现。</p>
<h3 id="restclient客户端实现" tabindex="-1"><a class="header-anchor" href="#restclient客户端实现" aria-hidden="true">#</a> RESTClient客户端实现</h3>
<p>我通过下面两个步骤，实现了RESTClient客户端。</p>
<p><strong>第一步，创建</strong><a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/config.go#L29-L60" target="_blank" rel="noopener noreferrer">rest.Config<ExternalLinkIcon/></a><strong>类型的变量。</strong></p>
<p><a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/tools/clientcmd/client_config.go#L190-L203" target="_blank" rel="noopener noreferrer">BuildConfigFromFlags<ExternalLinkIcon/></a>函数通过加载yaml格式的配置文件，来创建 <code v-pre>rest.Config</code> 类型的变量，加载的yaml格式配置文件内容为：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">user</span><span class="token punctuation">:</span>
  <span class="token comment">#token: # JWT Token</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> admin <span class="token comment"># iam 用户名</span>
  <span class="token key atrule">password</span><span class="token punctuation">:</span> Admin@2020 <span class="token comment"># iam 密码</span>
  <span class="token comment">#secret-id: # 密钥 ID</span>
  <span class="token comment">#secret-key: # 密钥 Key</span>
  <span class="token key atrule">client-certificate</span><span class="token punctuation">:</span> /home/colin/.iam/cert/admin.pem <span class="token comment"># 用于 TLS 的客户端证书文件路径</span>
  <span class="token key atrule">client-key</span><span class="token punctuation">:</span> /home/colin/.iam/cert/admin<span class="token punctuation">-</span>key.pem <span class="token comment"># 用于 TLS 的客户端 key 文件路径</span>
  <span class="token comment">#client-certificate-data:</span>
  <span class="token comment">#client-key-data:</span>

<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">8443</span> <span class="token comment"># iam api-server 地址</span>
  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s <span class="token comment"># 请求 api-server 超时时间</span>
  <span class="token comment">#max-retries: # 最大重试次数，默认为 0</span>
  <span class="token comment">#retry-interval: # 重试间隔，默认为 1s</span>
  <span class="token comment">#tls-server-name: # TLS 服务器名称</span>
  <span class="token comment">#insecure-skip-tls-verify: # 设置为 true 表示跳过 TLS 安全验证模式，将使得 HTTPS 连接不安全</span>
  <span class="token key atrule">certificate-authority</span><span class="token punctuation">:</span> /home/colin/.iam/cert/ca.pem <span class="token comment"># 用于 CA 授权的 cert 文件路径</span>
  <span class="token comment">#certificate-authority-data:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置文件中，我们可以指定服务的地址、用户名/密码、密钥、TLS证书、超时时间、重试次数等信息。</p>
<p>创建方法如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>config<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">BuildConfigFromFlags</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token operator">*</span>iamconfig<span class="token punctuation">)</span>    
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>                                                  
    <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的代码中，<code v-pre>*iamconfig</code> 是yaml格式的配置文件路径。<code v-pre>BuildConfigFromFlags</code> 函数中，调用<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/tools/clientcmd/loader.go#L32-L56" target="_blank" rel="noopener noreferrer">LoadFromFile<ExternalLinkIcon/></a>函数来解析yaml配置文件。LoadFromFile最终是通过 <code v-pre>yaml.Unmarshal</code> 的方式来解析yaml格式的配置文件的。</p>
<p><strong>第二步，根据rest.Config类型的变量，创建RESTClient客户端。</strong></p>
<p>通过<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/config.go#L191-L237" target="_blank" rel="noopener noreferrer">RESTClientFor<ExternalLinkIcon/></a>函数来创建RESTClient客户端：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">RESTClientFor</span><span class="token punctuation">(</span>config <span class="token operator">*</span>Config<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>RESTClient<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    baseURL<span class="token punctuation">,</span> versionedAPIPath<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">defaultServerURLFor</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>

    <span class="token comment">// Get the TLS options for this client config</span>
    tlsConfig<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">TLSConfigFor</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>

    <span class="token comment">// Only retry when get a server side error.</span>
    client <span class="token operator">:=</span> gorequest<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">TLSClientConfig</span><span class="token punctuation">(</span>tlsConfig<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Timeout</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>Timeout<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Retry</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>MaxRetries<span class="token punctuation">,</span> config<span class="token punctuation">.</span>RetryInterval<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">)</span>
    <span class="token comment">// NOTICE: must set DoNotClearSuperAgent to true, or the client will clean header befor http.Do</span>
    client<span class="token punctuation">.</span>DoNotClearSuperAgent <span class="token operator">=</span> <span class="token boolean">true</span>

    <span class="token operator">...</span>

    clientContent <span class="token operator">:=</span> ClientContentConfig<span class="token punctuation">{</span>
        Username<span class="token punctuation">:</span>           config<span class="token punctuation">.</span>Username<span class="token punctuation">,</span>
        Password<span class="token punctuation">:</span>           config<span class="token punctuation">.</span>Password<span class="token punctuation">,</span>
        SecretID<span class="token punctuation">:</span>           config<span class="token punctuation">.</span>SecretID<span class="token punctuation">,</span>
        SecretKey<span class="token punctuation">:</span>          config<span class="token punctuation">.</span>SecretKey<span class="token punctuation">,</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">NewRESTClient</span><span class="token punctuation">(</span>baseURL<span class="token punctuation">,</span> versionedAPIPath<span class="token punctuation">,</span> clientContent<span class="token punctuation">,</span> client<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RESTClientFor函数调用<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/url_utils.go#L69-L81" target="_blank" rel="noopener noreferrer">defaultServerURLFor(config)<ExternalLinkIcon/></a>生成基本的HTTP请求路径：baseURL=http://127.0.0.1:8080，versionedAPIPath=/v1。然后，通过<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/config.go#L241-L298" target="_blank" rel="noopener noreferrer">TLSConfigFor<ExternalLinkIcon/></a>函数生成TLS配置，并调用 <code v-pre>gorequest.New()</code> 创建gorequest客户端，将客户端配置信息保存在变量中。最后，调用<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/client.go#L109-L130" target="_blank" rel="noopener noreferrer">NewRESTClient<ExternalLinkIcon/></a>函数创建RESTClient客户端。</p>
<p>RESTClient客户端提供了以下方法，来供调用者完成HTTP请求：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RESTClient<span class="token punctuation">)</span> <span class="token function">APIVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> scheme<span class="token punctuation">.</span>GroupVersion
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RESTClient<span class="token punctuation">)</span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RESTClient<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RESTClient<span class="token punctuation">)</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RESTClient<span class="token punctuation">)</span> <span class="token function">Put</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RESTClient<span class="token punctuation">)</span> <span class="token function">Verb</span><span class="token punctuation">(</span>verb <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，RESTClient提供了 <code v-pre>Delete</code> 、 <code v-pre>Get</code> 、 <code v-pre>Post</code> 、 <code v-pre>Put</code> 方法，分别用来执行HTTP的DELETE、GET、POST、PUT方法，提供的 <code v-pre>Verb</code> 方法可以灵活地指定HTTP方法。这些方法都返回了 <code v-pre>Request</code> 类型的变量。<code v-pre>Request</code> 类型的变量提供了一些方法，用来完成具体的HTTP请求，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
  <span class="token keyword">type</span> Response <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Allowed <span class="token builtin">bool</span>   <span class="token string">`json:"allowed"`</span>
    Denied  <span class="token builtin">bool</span>   <span class="token string">`json:"denied,omitempty"`</span>
    Reason  <span class="token builtin">string</span> <span class="token string">`json:"reason,omitempty"`</span>
    Error   <span class="token builtin">string</span> <span class="token string">`json:"error,omitempty"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>authz<span class="token punctuation">)</span> <span class="token function">Authorize</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> request <span class="token operator">*</span>ladon<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>AuthorizeOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token operator">*</span>Response<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token operator">&amp;</span>Response<span class="token punctuation">{</span><span class="token punctuation">}</span>                                         
    err <span class="token operator">=</span> c<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Resource</span><span class="token punctuation">(</span><span class="token string">"authz"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">VersionedParams</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Body</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Do</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Into</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中， <code v-pre>c.client</code> 是RESTClient客户端，通过调用RESTClient客户端的 <code v-pre>Post</code> 方法，返回了 <code v-pre>*Request</code> 类型的变量。</p>
<p><code v-pre>*Request</code> 类型的变量提供了 <code v-pre>Resource</code> 和 <code v-pre>VersionedParams</code> 方法，来构建请求HTTP URL中的路径 <code v-pre>/v1/authz</code> ；通过 <code v-pre>Body</code> 方法，指定了HTTP请求的Body。</p>
<p>到这里，我们分别构建了HTTP请求需要的参数：HTTP Method、请求URL、请求Body。所以，之后就可以调用 <code v-pre>Do</code> 方法来执行HTTP请求，并将返回结果通过 <code v-pre>Into</code> 方法保存在传入的result变量中。</p>
<h3 id="request模块实现" tabindex="-1"><a class="header-anchor" href="#request模块实现" aria-hidden="true">#</a> Request模块实现</h3>
<p>RESTClient客户端的方法会返回Request类型的变量，Request类型的变量提供了一系列的方法用来构建HTTP请求参数，并执行HTTP请求。</p>
<p>所以，Request模块可以理解为最底层的通信层，我们来看下Request模块具体是如何完成HTTP请求的。</p>
<p>我们先来看下<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/rest/request.go#L28-L50" target="_blank" rel="noopener noreferrer">Request结构体<ExternalLinkIcon/></a>的定义：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> RESTClient <span class="token keyword">struct</span> <span class="token punctuation">{</span>           
    <span class="token comment">// base is the root URL for all invocations of the client    </span>
    base <span class="token operator">*</span>url<span class="token punctuation">.</span>URL    
    <span class="token comment">// group stand for the client group, eg: iam.api, iam.authz                       </span>
    group <span class="token builtin">string</span>                                                                          
    <span class="token comment">// versionedAPIPath is a path segment connecting the base URL to the resource root    </span>
    versionedAPIPath <span class="token builtin">string</span>                                      
    <span class="token comment">// content describes how a RESTClient encodes and decodes responses.    </span>
    content ClientContentConfig    
    Client  <span class="token operator">*</span>gorequest<span class="token punctuation">.</span>SuperAgent    
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Request <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  c <span class="token operator">*</span>RESTClient

  timeout time<span class="token punctuation">.</span>Duration

  <span class="token comment">// generic components accessible via method setters</span>
  verb       <span class="token builtin">string</span>
  pathPrefix <span class="token builtin">string</span>
  subpath    <span class="token builtin">string</span>
  params     url<span class="token punctuation">.</span>Values
  headers    http<span class="token punctuation">.</span>Header

  <span class="token comment">// structural elements of the request that are part of the IAM API conventions</span>
  <span class="token comment">// namespace    string</span>
  <span class="token comment">// namespaceSet bool</span>
  resource     <span class="token builtin">string</span>
  resourceName <span class="token builtin">string</span>
  subresource  <span class="token builtin">string</span>

  <span class="token comment">// output</span>
  err  <span class="token builtin">error</span>
  body <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看下Request结构体提供的方法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">AbsPath</span><span class="token punctuation">(</span>segments <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Body</span><span class="token punctuation">(</span>obj <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> Result
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Name</span><span class="token punctuation">(</span>resourceName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Param</span><span class="token punctuation">(</span>paramName<span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Prefix</span><span class="token punctuation">(</span>segments <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">RequestURI</span><span class="token punctuation">(</span>uri <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Resource</span><span class="token punctuation">(</span>resource <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">SetHeader</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">,</span> values <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">SubResource</span><span class="token punctuation">(</span>subresources <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Suffix</span><span class="token punctuation">(</span>segments <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Timeout</span><span class="token punctuation">(</span>d time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">URL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>url<span class="token punctuation">.</span>URL
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Verb</span><span class="token punctuation">(</span>verb <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">VersionedParams</span><span class="token punctuation">(</span>v <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过Request结构体的定义和使用方法，我们不难猜测出：Request模块通过 <code v-pre>Name</code> 、 <code v-pre>Resource</code> 、 <code v-pre>Body</code> 、 <code v-pre>SetHeader</code> 等方法来设置Request结构体中的各个字段。这些字段最终用来构建出一个HTTP请求，并通过 <code v-pre>Do</code> 方法来执行HTTP请求。</p>
<p>那么，如何构建并执行一个HTTP请求呢？我们可以通过以下5步，来构建并执行HTTP请求：</p>
<ol>
<li>构建HTTP URL；</li>
<li>构建HTTP Method；</li>
<li>构建HTTP Body；</li>
<li>执行HTTP请求；</li>
<li>保存HTTP返回结果。</li>
</ol>
<p>接下来，我们就来具体看下Request模块是如何构建这些请求参数，并发送HTTP请求的。</p>
<p><strong>第一步，构建HTTP URL。</strong></p>
<p>首先，通过<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/rest/url_utils.go#L69-L81" target="_blank" rel="noopener noreferrer">defaultServerURLFor<ExternalLinkIcon/></a>函数返回了<code v-pre>http://iam.api.marmotedu.com:8080</code> 和 <code v-pre>/v1</code> ，并将二者分别保存在了Request类型结构体变量中 <code v-pre>c</code> 字段的 <code v-pre>base</code> 字段和 <code v-pre>versionedAPIPath</code> 字段中。</p>
<p>通过 <a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/rest/request.go#L379-L416" target="_blank" rel="noopener noreferrer">Do<ExternalLinkIcon/></a> 方法执行HTTP时，会调用<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/rest/request.go#L392" target="_blank" rel="noopener noreferrer">r.URL()<ExternalLinkIcon/></a>方法来构建请求URL。 <code v-pre>r.URL</code> 方法中，通过以下代码段构建了HTTP请求URL：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">URL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>url<span class="token punctuation">.</span>URL <span class="token punctuation">{</span>
    p <span class="token operator">:=</span> r<span class="token punctuation">.</span>pathPrefix
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>resource<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        p <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>resource<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>resourceName<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>subpath<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>subresource<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        p <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> r<span class="token punctuation">.</span>resourceName<span class="token punctuation">,</span> r<span class="token punctuation">.</span>subresource<span class="token punctuation">,</span> r<span class="token punctuation">.</span>subpath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
                                                                                   
    finalURL <span class="token operator">:=</span> <span class="token operator">&amp;</span>url<span class="token punctuation">.</span>URL<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>c<span class="token punctuation">.</span>base <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token operator">*</span>finalURL <span class="token operator">=</span> <span class="token operator">*</span>r<span class="token punctuation">.</span>c<span class="token punctuation">.</span>bas
    <span class="token punctuation">}</span>
 
    finalURL<span class="token punctuation">.</span>Path <span class="token operator">=</span> p
    <span class="token operator">...</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>p := r.pathPrefix</code> 和 <code v-pre>r.c.base</code> ，是通过 <code v-pre>defaultServerURLFor</code> 调用返回的 <code v-pre>v1</code> 和 <code v-pre>http://iam.api.marmotedu.com:8080</code> 来构建的。</p>
<p><code v-pre>resourceName</code> 通过 <code v-pre>func (r *Request) Resource(resource string) *Request</code> 来指定，例如 <code v-pre>authz</code> 。</p>
<p>所以，最终我们构建的请求URL为 <code v-pre>http://iam.api.marmotedu.com:8080/v1/authz</code> 。</p>
<p><strong>第二步，构建HTTP Method。</strong></p>
<p>HTTP Method通过RESTClient提供的 <code v-pre>Post</code> 、<code v-pre>Delete</code> 、<code v-pre>Get</code> 等方法来设置，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RESTClient<span class="token punctuation">)</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request <span class="token punctuation">{</span>                                                                                 
    <span class="token keyword">return</span> c<span class="token punctuation">.</span><span class="token function">Verb</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">)</span>                                                                                              
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RESTClient<span class="token punctuation">)</span> <span class="token function">Verb</span><span class="token punctuation">(</span>verb <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request <span class="token punctuation">{</span>                                                                      
    <span class="token keyword">return</span> <span class="token function">NewRequest</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Verb</span><span class="token punctuation">(</span>verb<span class="token punctuation">)</span>                                                                                    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>NewRequest(c).Verb(verb)</code> 最终设置了Request结构体的 <code v-pre>verb</code> 字段，供 <code v-pre>Do</code> 方法使用。</p>
<p><strong>第三步，构建HTTP Body。</strong></p>
<p>HTTP Body通过Request结构体提供的Body方法来指定：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Body</span><span class="token punctuation">(</span>obj <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>Request <span class="token punctuation">{</span>                    
    <span class="token keyword">if</span> v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> v<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> reflect<span class="token punctuation">.</span>Struct <span class="token punctuation">{</span>              
        r<span class="token punctuation">.</span><span class="token function">SetHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>c<span class="token punctuation">.</span>content<span class="token punctuation">.</span>ContentType<span class="token punctuation">)</span>                
    <span class="token punctuation">}</span>                                                                                                                  
                                                                                                                       
    r<span class="token punctuation">.</span>body <span class="token operator">=</span> obj                                                                                                       
                                                                                                                       
    <span class="token keyword">return</span> r                                                                                                           
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第四步，执行HTTP请求。</strong></p>
<p>通过Request结构体提供的Do方法来执行具体的HTTP请求，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Request<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> Result <span class="token punctuation">{</span>
  client <span class="token operator">:=</span> r<span class="token punctuation">.</span>c<span class="token punctuation">.</span>Client
  client<span class="token punctuation">.</span>Header <span class="token operator">=</span> r<span class="token punctuation">.</span>headers

  <span class="token keyword">if</span> r<span class="token punctuation">.</span>timeout <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> cancel context<span class="token punctuation">.</span>CancelFunc
    ctx<span class="token punctuation">,</span> cancel <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> r<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span>

    <span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  client<span class="token punctuation">.</span><span class="token function">WithContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>

  resp<span class="token punctuation">,</span> body<span class="token punctuation">,</span> errs <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">CustomMethod</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>verb<span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">URL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">EndBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">combineErr</span><span class="token punctuation">(</span>resp<span class="token punctuation">,</span> body<span class="token punctuation">,</span> errs<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Result<span class="token punctuation">{</span>
      response<span class="token punctuation">:</span> <span class="token operator">&amp;</span>resp<span class="token punctuation">,</span>
      err<span class="token punctuation">:</span>      err<span class="token punctuation">,</span>
      body<span class="token punctuation">:</span>     body<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  decoder<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>c<span class="token punctuation">.</span>content<span class="token punctuation">.</span>Negotiator<span class="token punctuation">.</span><span class="token function">Decoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Result<span class="token punctuation">{</span>
      response<span class="token punctuation">:</span> <span class="token operator">&amp;</span>resp<span class="token punctuation">,</span>
      err<span class="token punctuation">:</span>      err<span class="token punctuation">,</span>
      body<span class="token punctuation">:</span>     body<span class="token punctuation">,</span>
      decoder<span class="token punctuation">:</span>  decoder<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> Result<span class="token punctuation">{</span>
    response<span class="token punctuation">:</span> <span class="token operator">&amp;</span>resp<span class="token punctuation">,</span>
    body<span class="token punctuation">:</span>     body<span class="token punctuation">,</span>
    decoder<span class="token punctuation">:</span>  decoder<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Do方法中，使用了Request结构体变量中各个字段的值，通过 <code v-pre>client.CustomMethod</code> 来执行HTTP请求。 <code v-pre>client</code> 是 <code v-pre>*gorequest.SuperAgent</code> 类型的客户端。</p>
<p><strong>第五步，保存HTTP返回结果。</strong></p>
<p>通过Request结构体的 <code v-pre>Into</code> 方法来保存HTTP返回结果：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r Result<span class="token punctuation">)</span> <span class="token function">Into</span><span class="token punctuation">(</span>v <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>                                          
        <span class="token keyword">return</span> r<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>                                                                                 
                                                         
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>decoder <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>                                                                    
        <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"serializer doesn't exist"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>                            
                             
    <span class="token keyword">if</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>decoder<span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token operator">&amp;</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err                                                                    
    <span class="token punctuation">}</span>                                                                                        
                                                             
    <span class="token keyword">return</span> <span class="token boolean">nil</span>                                                                      
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>r.body</code> 是在Do方法中，执行完HTTP请求后设置的，它的值为HTTP请求返回的Body。</p>
<h3 id="请求认证" tabindex="-1"><a class="header-anchor" href="#请求认证" aria-hidden="true">#</a> 请求认证</h3>
<p>接下来，我再来介绍下marmotedu-sdk-go另外一个比较核心的功能：请求认证。</p>
<p>marmotedu-sdk-go支持两种认证方式：</p>
<ul>
<li>Basic认证：通过给请求添加 <code v-pre>Authorization: Basic xxxx</code> 来实现。</li>
<li>Bearer认证：通过给请求添加 <code v-pre>Authorization: Bearer xxxx</code> 来实现。这种方式又支持直接指定JWT Token，或者通过指定密钥对由SDK自动生成JWT Token。</li>
</ul>
<p>Basic认证和Bearer认证，我在 <a href="https://time.geekbang.org/column/article/398410" target="_blank" rel="noopener noreferrer">25讲<ExternalLinkIcon/></a>介绍过，你可以返回查看下。</p>
<p>认证头是RESTClient客户端发送HTTP请求时指定的，具体实现位于<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/request.go#L53-L102" target="_blank" rel="noopener noreferrer">NewRequest<ExternalLinkIcon/></a>函数中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">switch</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> c<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">HasTokenAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        r<span class="token punctuation">.</span><span class="token function">SetHeader</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"Bearer %s"</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>content<span class="token punctuation">.</span>BearerToken<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> c<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">HasKeyAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        tokenString <span class="token operator">:=</span> auth<span class="token punctuation">.</span><span class="token function">Sign</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>content<span class="token punctuation">.</span>SecretID<span class="token punctuation">,</span> c<span class="token punctuation">.</span>content<span class="token punctuation">.</span>SecretKey<span class="token punctuation">,</span> <span class="token string">"marmotedu-sdk-go"</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>group<span class="token operator">+</span><span class="token string">".marmotedu.com"</span><span class="token punctuation">)</span>
        r<span class="token punctuation">.</span><span class="token function">SetHeader</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"Bearer %s"</span><span class="token punctuation">,</span> tokenString<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> c<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">HasBasicAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">// TODO: get token and set header</span>
        r<span class="token punctuation">.</span><span class="token function">SetHeader</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">,</span> <span class="token string">"Basic "</span><span class="token operator">+</span><span class="token function">basicAuth</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>content<span class="token punctuation">.</span>Username<span class="token punctuation">,</span> c<span class="token punctuation">.</span>content<span class="token punctuation">.</span>Password<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码会根据配置信息，自动判断使用哪种认证方式。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲中，我介绍了Kubernetes client-go风格的SDK实现方式。和公有云厂商的SDK设计相比，client-go风格的SDK设计有很多优点。</p>
<p>marmotedu-sdk-go在设计时，通过接口实现了3类客户端，分别是项目级别的客户端、应用级别的客户端和服务级别的客户端。开发人员可以根据需要，自行创建客户端类型。</p>
<p>marmotedu-sdk-go通过<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/config.go#L191-L237" target="_blank" rel="noopener noreferrer">RESTClientFor<ExternalLinkIcon/></a>，创建了RESTClient类型的客户端，RESTClient向下通过调用<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.2/rest/request.go#L28-L50" target="_blank" rel="noopener noreferrer">Request<ExternalLinkIcon/></a>模块，来完成HTTP请求方法、请求路径、请求体、认证信息的构建。Request模块最终通过调用<a href="https://github.com/parnurzeal/gorequest" target="_blank" rel="noopener noreferrer">gorequest<ExternalLinkIcon/></a>包提供的方法，完成HTTP的POST、PUT、GET、DELETE等请求，获取HTTP返回结果，并解析到指定的结构体中。RESTClient向上提供 <code v-pre>Post()</code> 、 <code v-pre>Put()</code> 、 <code v-pre>Get()</code> 、 <code v-pre>Delete()</code> 等方法，来供客户端完成HTTP请求。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>阅读<a href="https://github.com/marmotedu/marmotedu-sdk-go/blob/v1.0.3/rest/url_utils.go#L69-L81" target="_blank" rel="noopener noreferrer">defaultServerURLFor<ExternalLinkIcon/></a>源码，思考下defaultServerURLFor是如何构建请求地址 <code v-pre>http://iam.api.marmotedu.com:8080</code> 和API版本 <code v-pre>/v1</code> 的。</li>
<li>使用<a href="https://github.com/parnurzeal/gorequest" target="_blank" rel="noopener noreferrer">gorequest<ExternalLinkIcon/></a>包，编写一个可以执行以下HTTP请求的示例：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token function">curl</span> <span class="token parameter variable">-XPOST</span> http://example.com/v1/user <span class="token parameter variable">-d</span> <span class="token string">'{"username":"colin","address":"shenzhen"}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '25.md' style='float:left'>⬆️上一节🔗  </a><a href = '27.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


