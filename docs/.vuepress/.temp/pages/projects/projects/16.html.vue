<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第16节-gin-框架" tabindex="-1"><a class="header-anchor" href="#第16节-gin-框架" aria-hidden="true">#</a> 第16节 Gin 框架</h1>
<br>
<div><a href = '15.md' style='float:left'>⬆️上一节🔗  </a><a href = '17.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#web-服务的核心功能">Web 服务的核心功能</router-link></li><li><router-link to="#为什么选择-gin-框架">为什么选择 Gin 框架？</router-link></li><li><router-link to="#gin-是如何支持-web-服务基础功能的">Gin 是如何支持 Web 服务基础功能的？</router-link><ul><li><router-link to="#http-https-支持">HTTP/HTTPS 支持</router-link></li><li><router-link to="#json-数据格式支持">JSON 数据格式支持</router-link></li><li><router-link to="#路由匹配">路由匹配</router-link></li><li><router-link to="#路由分组">路由分组</router-link></li><li><router-link to="#一进程多服务">一进程多服务</router-link></li><li><router-link to="#参数解析、参数校验、逻辑处理、返回结果">参数解析、参数校验、逻辑处理、返回结果</router-link></li></ul></li><li><router-link to="#gin-是如何支持-web-服务高级功能的">Gin 是如何支持 Web 服务高级功能的？</router-link><ul><li><router-link to="#中间件">中间件</router-link></li><li><router-link to="#认证、requestid、跨域">认证、RequestID、跨域</router-link></li><li><router-link to="#优雅关停">优雅关停</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>在 Go 项目开发中，绝大部分情况下，我们是在写能提供某种功能的后端服务，这些功能以 RPC API 接口或者 RESTful API 接口的形式对外提供，能提供这两种 API 接口的服务也统称为 Web 服务。今天这一讲，我就通过介绍 <strong>RESTful API</strong> 风格的 Web 服务，来给你介绍下如何实现 Web 服务的核心功能。</p>
<p>那今天我们就来看下，Web 服务的核心功能有哪些，以及如何开发这些功能。</p>
<h2 id="web-服务的核心功能" tabindex="-1"><a class="header-anchor" href="#web-服务的核心功能" aria-hidden="true">#</a> Web 服务的核心功能</h2>
<p>Web 服务有很多功能，为了便于你理解，我将这些功能分成了基础功能和高级功能两大类，并总结在了下面这张图中：</p>
<p><img src="http://sm.nsddd.top/sm202302222250672.jpeg" alt="img"></p>
<p>下面，我就按图中的顺序，来串讲下这些功能。</p>
<p>要实现一个 Web 服务，首先我们要选择通信协议和通信格式。在 Go 项目开发中，有 <code v-pre>HTTP+JSON</code> 和 <code v-pre>gRPC+Protobuf</code> 两种组合可选。因为 iam-apiserver 主要提供的是 REST 风格的 API 接口，所以选择的是 <code v-pre>HTTP+JSON</code> 组合。</p>
<blockquote>
<p>⚠️ 不一样的是：Kubernetes 选择的通信协议是 gRPC，通信格式则使用 Protocol Buffers（简称 protobuf）。</p>
<p>而 Protocol Buffers 则是一种轻量级的数据序列化格式，它可以将结构化数据序列化为二进制格式，同时提供方便的语言无关性。这种格式不仅可以用于 gRPC 中的消息传递，也可以用于其他数据传输格式，例如存储和传输数据。与其他格式相比，Protocol Buffers 可以生成更小、更快的数据结构，同时也比 JSON 和 XML 等格式更易于阅读和理解。</p>
</blockquote>
<p>**Web 服务最核心的功能是路由匹配。**路由匹配其实就是根据(HTTP方法, 请求路径)匹配到处理这个请求的函数，最终由该函数处理这次请求，并返回结果，过程如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302222256592.jpeg" alt="img"></p>
<p>一次 HTTP 请求经过路由匹配，最终将请求交由<code v-pre>Delete(c *gin.Context)</code>函数来处理。变量c中存放了这次请求的参数，在 Delete 函数中，我们可以进行参数解析、参数校验、逻辑处理，最终返回结果。</p>
<p>对于大型系统，可能会有很多个 API 接口，API 接口随着需求的更新迭代，可能会有多个版本，为了便于管理，我们需要<strong>对路由进行分组</strong>。</p>
<p>有时候，我们需要在一个服务进程中，同时开启 HTTP 服务的 80 端口和 HTTPS 的 443 端口，这样我们就可以做到：</p>
<ul>
<li>对内的服务，访问 80 端口，简化服务访问复杂度；</li>
<li>对外的服务，访问更为安全的 HTTPS 服务</li>
</ul>
<p>显然，我们没必要为相同功能启动多个服务进程，所以这时候就需要 Web 服务能够支持<strong>一进程多服务</strong>的功能。</p>
<p>我们开发 Web 服务最核心的诉求是：输入一些参数，校验通过后，进行业务逻辑处理，然后返回结果。所以 Web 服务还应该能够进行<strong>参数解析</strong>、<strong>参数校验</strong>、<strong>逻辑处理</strong>、<strong>返回结果</strong>。这些都是 Web 服务的业务处理功能。</p>
<p>上面这些是 Web 服务的基本功能，此外，我们还需要支持一些高级功能。</p>
<p>在进行 HTTP 请求时，经常需要针对每一次请求都设置一些通用的操作，比如添加 Header、添加 RequestID、统计请求次数等，这就要求我们的 Web 服务能够支持<strong>中间件</strong>特性。</p>
<p>为了保证系统安全，对于每一个请求，我们都需要进行<strong>认证</strong>。<strong>Web 服务中，通常有两种认证方式，一种是基于用户名和密码，一种是基于 Token。</strong> 认证通过之后，就可以继续处理请求了。</p>
<p>为了方便定位和跟踪某一次请求，需要支持 <strong>RequestID</strong>，定位和跟踪 RequestID 主要是为了排障。</p>
<p>最后，当前的软件架构中，很多采用了前后端分离的架构。在前后端分离的架构中，前端访问地址和后端访问地址往往是不同的，浏览器为了安全，会针对这种情况设置跨域请求，所以 Web 服务需要能够处理浏览器的<strong>跨域</strong>请求。</p>
<p>到这里，我就把 Web 服务的基础功能和高级功能串讲了一遍。当然，上面只介绍了 Web 服务的核心功能，还有很多其他的功能，你可以通过学习<a href="https://github.com/gin-gonic/gin" target="_blank" rel="noopener noreferrer">Gin 的官方文档<ExternalLinkIcon/></a>来了解。</p>
<p>你可以看到，Web 服务有很多核心功能，这些功能我们可以基于 net/http 包自己封装。但在实际的项目开发中， 我们更多会选择使用基于 net/http 包进行封装的优秀开源 Web 框架。本实战项目选择了 Gin 框架。</p>
<p>接下来，我们主要看下 Gin 框架是如何实现以上核心功能的，这些功能我们在实际的开发中可以直接拿来使用。</p>
<h2 id="为什么选择-gin-框架" tabindex="-1"><a class="header-anchor" href="#为什么选择-gin-框架" aria-hidden="true">#</a> 为什么选择 Gin 框架？</h2>
<p>优秀的 Web 框架有很多，我们为什么要选择 Gin 呢？在回答这个问题之前，我们先来看下选择 Web 框架时的关注点。</p>
<p>在选择 Web 框架时，我们可以关注如下几点：</p>
<ul>
<li>
<p>路由功能；</p>
</li>
<li>
<p>是否具备 middleware/filter 能力；</p>
</li>
<li>
<p>HTTP 参数（path、query、form、header、body）解析和返回；</p>
</li>
<li>
<p>性能和稳定性；</p>
</li>
<li>
<p>使用复杂度；</p>
</li>
<li>
<p>社区活跃度。</p>
</li>
</ul>
<p>按 GitHub Star 数来排名，当前比较火的 Go Web 框架有 Gin、Beego、Echo、Revel 、Martini。经过调研，我从中选择了 Gin 框架，原因是 Gin 具有如下特性：</p>
<ol>
<li>
<p>轻量级，代码质量高，性能比较高；</p>
</li>
<li>
<p>项目目前很活跃，并有很多可用的 Middleware；</p>
</li>
<li>
<p>作为一个 Web 框架，功能齐全，使用起来简单。</p>
</li>
<li>
<p>那接下来，我就先详细介绍下 Gin 框架。</p>
</li>
</ol>
<p>Gin是用 Go 语言编写的 Web 框架，功能完善，使用简单，性能很高。Gin 核心的路由功能是通过一个定制版的<a href="https://github.com/julienschmidt/httprouter" target="_blank" rel="noopener noreferrer">HttpRouter<ExternalLinkIcon/></a>来实现的，具有很高的路由性能。</p>
<p><strong>Gin 有很多功能，这里我给你列出了它的一些核心功能：</strong></p>
<ol>
<li>
<p>支持 HTTP 方法：GET、POST、PUT、PATCH、DELETE、OPTIONS。</p>
</li>
<li>
<p>支持不同位置的 HTTP 参数：路径参数（path）、查询字符串参数（query）、表单参数（form）、HTTP 头参数（header）、消息体参数（body）。</p>
</li>
<li>
<p>支持 HTTP 路由和路由分组。</p>
</li>
<li>
<p>支持 middleware 和自定义 middleware。</p>
</li>
<li>
<p>支持自定义 Log。</p>
</li>
<li>
<p>支持 binding 和 validation，支持自定义 validator。可以 bind 如下参数：query、path、body、header、form。</p>
</li>
<li>
<p>支持重定向。</p>
</li>
<li>
<p>支持 basic auth middleware。</p>
</li>
<li>
<p>支持自定义 HTTP 配置。</p>
</li>
<li>
<p>支持优雅关闭。</p>
</li>
<li>
<p>支持 HTTP2。</p>
</li>
<li>
<p>支持设置和获取 cookie。</p>
</li>
</ol>
<h2 id="gin-是如何支持-web-服务基础功能的" tabindex="-1"><a class="header-anchor" href="#gin-是如何支持-web-服务基础功能的" aria-hidden="true">#</a> Gin 是如何支持 Web 服务基础功能的？</h2>
<p>接下来，我们先通过一个具体的例子，看下 Gin 是如何支持 Web 服务基础功能的，后面再详细介绍这些功能的用法。</p>
<p>我们创建一个 webfeature 目录，用来存放示例代码。因为要演示 HTTPS 的用法，所以需要创建证书文件。具体可以分为两步。</p>
<p>第一步，执行以下命令创建证书：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cat <span class="token operator">&lt;&lt;</span> <span class="token string">'EOF'</span> <span class="token operator">></span> ca<span class="token punctuation">.</span>pem
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token constant">BEGIN</span> <span class="token constant">CERTIFICATE</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
MIICSjCCAbOgAwIBAgIJAJHGGR4dGioHMA0GCSqGSIb3DQEBCwUAMFYxCzAJBgNV
BAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX
aWRnaXRzIFB0eSBMdGQxDzANBgNVBAMTBnRlc3RjYTAeFw0xNDExMTEyMjMxMjla
Fw0yNDExMDgyMjMxMjlaMFYxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0
YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQxDzANBgNVBAMT
BnRlc3RjYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwEDfBV5MYdlHVHJ7
<span class="token operator">+</span>L4nxrZy7mBfAVXpOc5vMYztssUI7mL2<span class="token operator">/</span>iYujiIXM<span class="token operator">+</span>weZYNTEpLdjyJdu7R5gGUu
g1jSVK<span class="token operator">/</span>EPHfc74O7AyZU34PNIP4Sh33N<span class="token operator">+</span><span class="token operator">/</span>A5YexrNgJlPY<span class="token operator">+</span>E3GdVYi4ldWJjgkAd
Qah2PH5ACLrIIC6tRka9hcaBlIECAwEAAaMgMB4wDAYDVR0TBAUwAwEB<span class="token operator">/</span>zAOBgNV
HQ8BAf8EBAMCAgQwDQYJKoZIhvcNAQELBQADgYEAHzC7jdYlzAVmddi<span class="token operator">/</span>gdAeKPau
sPBG<span class="token operator">/</span>C2HCWqHzpCUHcKuvMzDVkY<span class="token operator">/</span>MP2o6JIW2DBbY64bO<span class="token operator">/</span>FceExhjcykgaYtCH<span class="token operator">/</span>m
oIU63<span class="token operator">+</span>CFOTtR7otyQAWHqXa7q4SbCDlG7DyRFxqG0txPtGvy12lgldA2<span class="token operator">+</span>RgcigQG
Dfcog5wrJytaQ6UA0wE<span class="token operator">=</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token constant">END</span> <span class="token constant">CERTIFICATE</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token constant">EOF</span>

cat <span class="token operator">&lt;&lt;</span> <span class="token string">'EOF'</span> <span class="token operator">></span> server<span class="token punctuation">.</span>key
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token constant">BEGIN</span> <span class="token constant">PRIVATE</span> <span class="token constant">KEY</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAOHDFScoLCVJpYDD
M4HYtIdV6Ake<span class="token operator">/</span>sMNaaKdODjDMsux<span class="token operator">/</span>4tDydlumN<span class="token operator">+</span>fm<span class="token operator">+</span>AjPEK5GHhGn1BgzkWF<span class="token operator">+</span>slf
3BxhrA<span class="token operator">/</span>8dNsnunstVA7ZBgA<span class="token operator">/</span>5qQxMfGAq4wHNVX77fBZOgp9VlSMVfyd9N8YwbBY
AckOeUQadTi2X1S6OgJXgQ0m3MWhAgMBAAECgYAn7qGnM2vbjJNBm0VZCkOkTIWm
V10okw7EPJrdL2mkre9NasghNXbE1y5zDshx5Nt3KsazKOxTT8d0Jwh<span class="token operator">/</span>3KbaN<span class="token operator">+</span><span class="token constant">YY</span>
tTCbKGW0pXDRBhwUHRcuRzScjli8Rih5UOCiZkhefUTcRb6xIhZJuQy71tjaSy0p
dHZRmYyBYO2YEQ8xoQJBAPrJPhMBkzmEYFtyIEqAxQ<span class="token operator">/</span>o<span class="token operator">/</span><span class="token constant">A6E</span><span class="token operator">+</span>E4w8i<span class="token operator">+</span>KM7nQCK7q
K4JXzyXVAjLfyBZWHGM2uro<span class="token operator">/</span>fjqPggGD6QH1qXCkI4MCQQDmdKeb2TrKRh5BY1LR
81aJGKcJ2XbcDu6wMZK4oqWbTX2KiYn9GB0woM6nSr<span class="token operator">/</span>Y6iy1u145YzYxEV<span class="token operator">/</span>iMwff
DJULAkB8B2MnyzOg0pNFJqBJuH29bKCcHa8gHJzqXhNO5lAlEbMK95p<span class="token operator">/</span>P2Wi<span class="token operator">+</span>4Hd
aiEIAF1BF326QJcvYKmwSmrORp85AkAlSNxRJ50OWrfMZnBgzVjDx3xG6KsFQVk2
ol6VhqL6dFgKUORFUWBvnKSyhjJxurlPEahV6oo6<span class="token operator">+</span><span class="token constant">A</span><span class="token operator">+</span>mPhFY8eUvAkAZQyTdupP3
XEFQKctGz<span class="token operator">+</span><span class="token number">9</span><span class="token operator">+</span>gKkemDp7LBBMEMBXrGTLPhpEfcjv<span class="token operator">/</span>7KPdnFHYmhYeBTBnuVmTVWe
F98XJ7tIFfJq
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token constant">END</span> <span class="token constant">PRIVATE</span> <span class="token constant">KEY</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token constant">EOF</span>

cat <span class="token operator">&lt;&lt;</span> <span class="token string">'EOF'</span> <span class="token operator">></span> server<span class="token punctuation">.</span>pem
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token constant">BEGIN</span> <span class="token constant">CERTIFICATE</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
MIICnDCCAgWgAwIBAgIBBzANBgkqhkiG9w0BAQsFADBWMQswCQYDVQQGEwJBVTET
MBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50ZXJuZXQgV2lkZ2l0cyBQ
dHkgTHRkMQ8wDQYDVQQDEwZ0ZXN0Y2EwHhcNMTUxMTA0MDIyMDI0WhcNMjUxMTAx
MDIyMDI0WjBlMQswCQYDVQQGEwJVUzERMA8GA1UECBMISWxsaW5vaXMxEDAOBgNV
BAcTB0NoaWNhZ28xFTATBgNVBAoTDEV4YW1wbGUsIENvLjEaMBgGA1UEAxQRKi50
ZXN0Lmdvb2dsZS5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAOHDFSco
LCVJpYDDM4HYtIdV6Ake<span class="token operator">/</span>sMNaaKdODjDMsux<span class="token operator">/</span>4tDydlumN<span class="token operator">+</span>fm<span class="token operator">+</span>AjPEK5GHhGn1Bg
zkWF<span class="token operator">+</span>slf3BxhrA<span class="token operator">/</span>8dNsnunstVA7ZBgA<span class="token operator">/</span>5qQxMfGAq4wHNVX77fBZOgp9VlSMVfyd
9N8YwbBYAckOeUQadTi2X1S6OgJXgQ0m3MWhAgMBAAGjazBpMAkGA1UdEwQCMAAw
CwYDVR0PBAQDAgXgME8GA1UdEQRIMEaCECoudGVzdC5nb29nbGUuZnKCGHdhdGVy
em9vaS50ZXN0Lmdvb2dsZS5iZYISKi50ZXN0LnlvdXR1YmUuY29thwTAqAEDMA0G
CSqGSIb3DQEBCwUAA4GBAJFXVifQNub1LUP4JlnX5lXNlo8FxZ2a12AFQs<span class="token operator">+</span>bzoJ6
hM044EDjqyxUqSbVePK0ni3w1fHQB5rY9yYC5f8G7aqqTY1QOhoUk8ZTSTRpnkTh
y4jjdvTZeLDVBlueZUTDRmy2feY5aZIU18vFDK08dTG0A87pppuv1LNIR3loveU8
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token constant">END</span> <span class="token constant">CERTIFICATE</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token constant">EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步，创建 main.go 文件：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"log"</span>
  <span class="token string">"net/http"</span>
  <span class="token string">"sync"</span>
  <span class="token string">"time"</span>
  <span class="token string">"github.com/gin-gonic/gin"</span>
  <span class="token string">"golang.org/x/sync/errgroup"</span>
<span class="token punctuation">)</span>
type Product struct <span class="token punctuation">{</span>
  Username    string    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">json:"username" binding:"required"</span><span class="token template-punctuation string">`</span></span>
  Name        string    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">json:"name" binding:"required"</span><span class="token template-punctuation string">`</span></span>
  Category    string    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">json:"category" binding:"required"</span><span class="token template-punctuation string">`</span></span>
  Price       int       <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">json:"price" binding:"gte=0"</span><span class="token template-punctuation string">`</span></span>
  Description string    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">json:"description"</span><span class="token template-punctuation string">`</span></span>
  CreatedAt   time<span class="token punctuation">.</span>Time <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">json:"createdAt"</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
type productHandler struct <span class="token punctuation">{</span>
  sync<span class="token punctuation">.</span>RWMutex
  products map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>Product
<span class="token punctuation">}</span>
func <span class="token function">newProductHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>productHandler <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>productHandler<span class="token punctuation">{</span>
    <span class="token literal-property property">products</span><span class="token operator">:</span> <span class="token function">make</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>Product<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>productHandler<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span><span class="token parameter">c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  u<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  defer u<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 1. 参数解析</span>
  <span class="token keyword">var</span> product Product
  <span class="token keyword">if</span> <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token constant">H</span><span class="token punctuation">{</span><span class="token string-property property">"error"</span><span class="token operator">:</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 2. 参数校验</span>
  <span class="token keyword">if</span> _<span class="token punctuation">,</span> <span class="token literal-property property">ok</span> <span class="token operator">:</span><span class="token operator">=</span> u<span class="token punctuation">.</span>products<span class="token punctuation">[</span>product<span class="token punctuation">.</span>Name<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token constant">H</span><span class="token punctuation">{</span><span class="token string-property property">"error"</span><span class="token operator">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"product %s already exist"</span><span class="token punctuation">,</span> product<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  product<span class="token punctuation">.</span>CreatedAt <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 3. 逻辑处理</span>
  u<span class="token punctuation">.</span>products<span class="token punctuation">[</span>product<span class="token punctuation">.</span>Name<span class="token punctuation">]</span> <span class="token operator">=</span> product
  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Register product %s success"</span><span class="token punctuation">,</span> product<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
  <span class="token comment">// 4. 返回结果</span>
  c<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> product<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>productHandler<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token parameter">c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  u<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  defer u<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  product<span class="token punctuation">,</span> <span class="token literal-property property">ok</span> <span class="token operator">:</span><span class="token operator">=</span> u<span class="token punctuation">.</span>products<span class="token punctuation">[</span>c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusNotFound<span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token constant">H</span><span class="token punctuation">{</span><span class="token string-property property">"error"</span><span class="token operator">:</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"can not found product %s"</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  c<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> product<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
func <span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span> http<span class="token punctuation">.</span>Handler <span class="token punctuation">{</span>
  <span class="token literal-property property">router</span> <span class="token operator">:</span><span class="token operator">=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">productHandler</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token function">newProductHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 路由分组、中间件、认证</span>
  <span class="token literal-property property">v1</span> <span class="token operator">:</span><span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/v1"</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">productv1</span> <span class="token operator">:</span><span class="token operator">=</span> v1<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/products"</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 路由匹配</span>
      productv1<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> productHandler<span class="token punctuation">.</span>Create<span class="token punctuation">)</span>
      productv1<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">":name"</span><span class="token punctuation">,</span> productHandler<span class="token punctuation">.</span>Get<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> router
<span class="token punctuation">}</span>
func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> eg errgroup<span class="token punctuation">.</span>Group
  <span class="token comment">// 一进程多端口</span>
  <span class="token literal-property property">insecureServer</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
    <span class="token literal-property property">Addr</span><span class="token operator">:</span>         <span class="token string">":8080"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Handler</span><span class="token operator">:</span>      <span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ReadTimeout</span><span class="token operator">:</span>  <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
    <span class="token literal-property property">WriteTimeout</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token literal-property property">secureServer</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
    <span class="token literal-property property">Addr</span><span class="token operator">:</span>         <span class="token string">":8443"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Handler</span><span class="token operator">:</span>      <span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ReadTimeout</span><span class="token operator">:</span>  <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
    <span class="token literal-property property">WriteTimeout</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  eg<span class="token punctuation">.</span><span class="token function">Go</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> error <span class="token punctuation">{</span>
    <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> insecureServer<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> http<span class="token punctuation">.</span>ErrServerClosed <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  eg<span class="token punctuation">.</span><span class="token function">Go</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> error <span class="token punctuation">{</span>
    <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> secureServer<span class="token punctuation">.</span><span class="token function">ListenAndServeTLS</span><span class="token punctuation">(</span><span class="token string">"server.pem"</span><span class="token punctuation">,</span> <span class="token string">"server.key"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> http<span class="token punctuation">.</span>ErrServerClosed <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> eg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行以上代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ go run main<span class="token punctuation">.</span>go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开另外一个终端，请求 HTTP 接口：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ go run main<span class="token punctuation">.</span>go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例代码存放地址为webfeature。</p>
<p>另外，Gin 项目仓库中也包含了很多使用示例，如果你想详细了解，可以参考 gin examples。</p>
<p>下面，我来详细介绍下 Gin 是如何支持 Web 服务基础功能的。</p>
<h3 id="http-https-支持" tabindex="-1"><a class="header-anchor" href="#http-https-支持" aria-hidden="true">#</a> HTTP/HTTPS 支持</h3>
<p>因为 Gin 是基于 net/http 包封装的一个 Web 框架，所以它天然就支持 HTTP/HTTPS。在上述代码中，通过以下方式开启一个 HTTP 服务：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">insecureServer</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
  <span class="token literal-property property">Addr</span><span class="token operator">:</span>         <span class="token string">":8080"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Handler</span><span class="token operator">:</span>      <span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ReadTimeout</span><span class="token operator">:</span>  <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
  <span class="token literal-property property">WriteTimeout</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
<span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> insecureServer<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以下方式开启一个 HTTPS 服务：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">secureServer</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
  <span class="token literal-property property">Addr</span><span class="token operator">:</span>         <span class="token string">":8443"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Handler</span><span class="token operator">:</span>      <span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ReadTimeout</span><span class="token operator">:</span>  <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
  <span class="token literal-property property">WriteTimeout</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
<span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> secureServer<span class="token punctuation">.</span><span class="token function">ListenAndServeTLS</span><span class="token punctuation">(</span><span class="token string">"server.pem"</span><span class="token punctuation">,</span> <span class="token string">"server.key"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-数据格式支持" tabindex="-1"><a class="header-anchor" href="#json-数据格式支持" aria-hidden="true">#</a> JSON 数据格式支持</h3>
<p>Gin 支持多种数据通信格式，例如 application/json、application/xml。可以通过c.ShouldBindJSON函数，将 Body 中的 JSON 格式数据解析到指定的 Struct 中，通过c.JSON函数返回 JSON 格式的数据。</p>
<h3 id="路由匹配" tabindex="-1"><a class="header-anchor" href="#路由匹配" aria-hidden="true">#</a> 路由匹配</h3>
<p>Gin 支持两种路由匹配规则。</p>
<p>**第一种匹配规则是精确匹配。**例如，路由为 <code v-pre>/products/:name</code>，匹配情况如下表所示：</p>
<p><img src="https://static001.geekbang.org/resource/image/11/df/11be05d7fe7f935e01725e2635f315df.jpg?wh=2248x1418" alt="img"></p>
<p>**第二种匹配规则是模糊匹配。**例如，路由为 /products/*name，匹配情况如下表所示：</p>
<p><img src="https://static001.geekbang.org/resource/image/b5/7b/b5ccd9924e53dd90a64af6002967b67b.jpg?wh=2248x1636" alt="img"></p>
<h3 id="路由分组" tabindex="-1"><a class="header-anchor" href="#路由分组" aria-hidden="true">#</a> 路由分组</h3>
<p>Gin 通过 Group 函数实现了路由分组的功能。路由分组是一个非常常用的功能，可以将相同版本的路由分为一组，也可以将相同 RESTful 资源的路由分为一组。例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">v1</span> <span class="token operator">:</span><span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/v1"</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token function">BasicAuth</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span>Accounts<span class="token punctuation">{</span><span class="token string-property property">"foo"</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token string-property property">"colin"</span><span class="token operator">:</span> <span class="token string">"colin404"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">productv1</span> <span class="token operator">:</span><span class="token operator">=</span> v1<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/products"</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 路由匹配</span>
        productv1<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> productHandler<span class="token punctuation">.</span>Create<span class="token punctuation">)</span>
        productv1<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">":name"</span><span class="token punctuation">,</span> productHandler<span class="token punctuation">.</span>Get<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">orderv1</span> <span class="token operator">:</span><span class="token operator">=</span> v1<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/orders"</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 路由匹配</span>
        orderv1<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> orderHandler<span class="token punctuation">.</span>Create<span class="token punctuation">)</span>
        orderv1<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">":name"</span><span class="token punctuation">,</span> orderHandler<span class="token punctuation">.</span>Get<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token literal-property property">v2</span> <span class="token operator">:</span><span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/v2"</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token function">BasicAuth</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span>Accounts<span class="token punctuation">{</span><span class="token string-property property">"foo"</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token string-property property">"colin"</span><span class="token operator">:</span> <span class="token string">"colin404"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">productv2</span> <span class="token operator">:</span><span class="token operator">=</span> v2<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/products"</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 路由匹配</span>
        productv2<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> productHandler<span class="token punctuation">.</span>Create<span class="token punctuation">)</span>
        productv2<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">":name"</span><span class="token punctuation">,</span> productHandler<span class="token punctuation">.</span>Get<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过将路由分组，可以对相同分组的路由做统一处理。比如上面那个例子，我们可以通过代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">v1</span> <span class="token operator">:</span><span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/v1"</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token function">BasicAuth</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span>Accounts<span class="token punctuation">{</span><span class="token string-property property">"foo"</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token string-property property">"colin"</span><span class="token operator">:</span> <span class="token string">"colin404"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>给所有属于 v1 分组的路由都添加 gin.BasicAuth 中间件，以实现认证功能。中间件和认证，这里你先不用深究，下面讲高级功能的时候会介绍到。</p>
<h3 id="一进程多服务" tabindex="-1"><a class="header-anchor" href="#一进程多服务" aria-hidden="true">#</a> 一进程多服务</h3>
<p>我们可以通过以下方式实现一进程多服务：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> eg errgroup<span class="token punctuation">.</span>Group
<span class="token literal-property property">insecureServer</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token literal-property property">secureServer</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
eg<span class="token punctuation">.</span><span class="token function">Go</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> error <span class="token punctuation">{</span>
  <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> insecureServer<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> http<span class="token punctuation">.</span>ErrServerClosed <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> err
<span class="token punctuation">}</span><span class="token punctuation">)</span>
eg<span class="token punctuation">.</span><span class="token function">Go</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> error <span class="token punctuation">{</span>
  <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> secureServer<span class="token punctuation">.</span><span class="token function">ListenAndServeTLS</span><span class="token punctuation">(</span><span class="token string">"server.pem"</span><span class="token punctuation">,</span> <span class="token string">"server.key"</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> http<span class="token punctuation">.</span>ErrServerClosed <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> eg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码实现了两个相同的服务，分别监听在不同的端口。这里需要注意的是，为了不阻塞启动第二个服务，我们需要把 ListenAndServe 函数放在 goroutine 中执行，并且调用 eg.Wait() 来阻塞程序进程，从而让两个 HTTP 服务在 goroutine 中持续监听端口，并提供服务。</p>
<h3 id="参数解析、参数校验、逻辑处理、返回结果" tabindex="-1"><a class="header-anchor" href="#参数解析、参数校验、逻辑处理、返回结果" aria-hidden="true">#</a> 参数解析、参数校验、逻辑处理、返回结果</h3>
<p>此外，Web 服务还应该具有参数解析、参数校验、逻辑处理、返回结果 4 类功能，因为这些功能联系紧密，我们放在一起来说。</p>
<p>在 productHandler 的 Create 方法中，我们通过<code v-pre>c.ShouldBindJSON</code>来解析参数，接下来自己编写校验代码，然后将 product 信息保存在内存中（也就是业务逻辑处理），最后通过c.JSON返回创建的 product 信息。代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>productHandler<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span><span class="token parameter">c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  u<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  defer u<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 1. 参数解析</span>
  <span class="token keyword">var</span> product Product
  <span class="token keyword">if</span> <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token constant">H</span><span class="token punctuation">{</span><span class="token string-property property">"error"</span><span class="token operator">:</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 2. 参数校验</span>
  <span class="token keyword">if</span> _<span class="token punctuation">,</span> <span class="token literal-property property">ok</span> <span class="token operator">:</span><span class="token operator">=</span> u<span class="token punctuation">.</span>products<span class="token punctuation">[</span>product<span class="token punctuation">.</span>Name<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token constant">H</span><span class="token punctuation">{</span><span class="token string-property property">"error"</span><span class="token operator">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"product %s already exist"</span><span class="token punctuation">,</span> product<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  product<span class="token punctuation">.</span>CreatedAt <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 3. 逻辑处理</span>
  u<span class="token punctuation">.</span>products<span class="token punctuation">[</span>product<span class="token punctuation">.</span>Name<span class="token punctuation">]</span> <span class="token operator">=</span> product
  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Register product %s success"</span><span class="token punctuation">,</span> product<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
  <span class="token comment">// 4. 返回结果</span>
  c<span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> product<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那这个时候，你可能会问：HTTP 的请求参数可以存在不同的位置，Gin 是如何解析的呢？这里，我们先来看下 HTTP 有哪些参数类型。HTTP 具有以下 5 种参数类型：</p>
<ol>
<li>
<p>路径参数（path）。例如<code v-pre>gin.Default().GET(&quot;/user/:name&quot;, nil)</code>， name 就是路径参数。</p>
</li>
<li>
<p>查询字符串参数（query）。例如<code v-pre>/welcome?firstname=Lingfei&amp;lastname=Kong</code>，firstname 和 lastname 就是查询字符串参数。</p>
</li>
<li>
<p>表单参数（form）。例如<code v-pre>curl -X POST -F 'username=colin' -F 'password=colin1234' http://mydomain.com/login</code>，username 和 password 就是表单参数。</p>
</li>
<li>
<p>HTTP 头参数（header）。例如<code v-pre>curl -X POST -H 'Content-Type: application/json' -d '{&quot;username&quot;:&quot;colin&quot;,&quot;password&quot;:&quot;colin1234&quot;}' http://mydomain.com/login</code>，Content-Type 就是 HTTP 头参数。</p>
</li>
<li>
<p>消息体参数（body）。例如<code v-pre>curl -X POST -H 'Content-Type: application/json' -d '{&quot;username&quot;:&quot;colin&quot;,&quot;password&quot;:&quot;colin1234&quot;}' http://mydomain.com/login</code>，username 和 password 就是消息体参数。</p>
</li>
</ol>
<p>Gin 提供了一些函数，来分别读取这些 HTTP 参数，每种类别会提供两种函数，一种函数可以直接读取某个参数的值，另外一种函数会把同类 HTTP 参数绑定到一个 Go 结构体中。比如，有如下路径参数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">"/:name/:id"</span><span class="token punctuation">,</span> nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以直接读取每个参数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">name</span> <span class="token operator">:</span><span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
<span class="token literal-property property">action</span> <span class="token operator">:</span><span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">"action"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将所有的路径参数，绑定到结构体中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type Person struct <span class="token punctuation">{</span>
    <span class="token constant">ID</span> string <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">uri:"id" binding:"required,uuid"</span><span class="token template-punctuation string">`</span></span>
    Name string <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">uri:"name" binding:"required"</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindUri</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
    <span class="token comment">// normal code</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gin 在绑定参数时，是通过结构体的 tag 来判断要绑定哪类参数到结构体中的。这里要注意，不同的 HTTP 参数有不同的结构体 tag。</p>
<ol>
<li>
<p>路径参数：uri。</p>
</li>
<li>
<p>查询字符串参数：form。</p>
</li>
<li>
<p>表单参数：form。</p>
</li>
<li>
<p>HTTP 头参数：header。</p>
</li>
<li>
<p>消息体参数：会根据 Content-Type，自动选择使用 json 或者 xml，也可以调用 ShouldBindJSON 或者 ShouldBindXML 直接指定使用哪个 tag。</p>
</li>
</ol>
<p>针对每种参数类型，Gin 都有对应的函数来获取和绑定这些参数。这些函数都是基于如下两个函数进行封装的：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ShouldBindWith(obj interface{}, b binding.Binding) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>非常重要的一个函数，很多 ShouldBindXXX 函数底层都是调用 ShouldBindWith 函数来完成参数绑定的。该函数会根据传入的绑定引擎，将参数绑定到传入的结构体指针中，**如果绑定失败，只返回错误内容，但不终止 HTTP 请求。**ShouldBindWith 支持多种绑定引擎，例如 binding.JSON、binding.Query、binding.Uri、binding.Header 等，更详细的信息你可以参考 binding.go。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>MustBindWith(obj interface{}, b binding.Binding) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是另一个非常重要的函数，很多 BindXXX 函数底层都是调用 MustBindWith 函数来完成参数绑定的。该函数会根据传入的绑定引擎，将参数绑定到传入的结构体指针中，**如果绑定失败，返回错误并终止请求，返回 HTTP 400 错误。**MustBindWith 所支持的绑定引擎跟 ShouldBindWith 函数一样。</p>
<p>Gin 基于 ShouldBindWith 和 MustBindWith 这两个函数，又衍生出很多新的 Bind 函数。这些函数可以满足不同场景下获取 HTTP 参数的需求。Gin 提供的函数可以获取 5 个类别的 HTTP 参数。</p>
<ol>
<li>
<p>路径参数：ShouldBindUri、BindUri；</p>
</li>
<li>
<p>查询字符串参数：ShouldBindQuery、BindQuery；</p>
</li>
<li>
<p>表单参数：ShouldBind；</p>
</li>
<li>
<p>HTTP 头参数：ShouldBindHeader、BindHeader；</p>
</li>
<li>
<p>消息体参数：ShouldBindJSON、BindJSON 等。</p>
</li>
</ol>
<p>每个类别的 Bind 函数，详细信息你可以参考Gin 提供的 Bind 函数。</p>
<p>这里要注意，Gin 并没有提供类似 ShouldBindForm、BindForm 这类函数来绑定表单参数，但我们可以通过 ShouldBind 来绑定表单参数。当 HTTP 方法为 GET 时，ShouldBind 只绑定 Query 类型的参数；当 HTTP 方法为 POST 时，会先检查 content-type 是否是 json 或者 xml，如果不是，则绑定 Form 类型的参数。</p>
<p>所以，ShouldBind 可以绑定 Form 类型的参数，但前提是 HTTP 方法是 POST，并且 content-type 不是 application/json、application/xml。</p>
<p>在 Go 项目开发中，我建议使用 ShouldBindXXX，这样可以确保我们设置的 HTTP Chain（Chain 可以理解为一个 HTTP 请求的一系列处理插件）能够继续被执行。</p>
<h2 id="gin-是如何支持-web-服务高级功能的" tabindex="-1"><a class="header-anchor" href="#gin-是如何支持-web-服务高级功能的" aria-hidden="true">#</a> Gin 是如何支持 Web 服务高级功能的？</h2>
<p>上面介绍了 Web 服务的基础功能，这里我再来介绍下高级功能。Web 服务可以具备多个高级功能，但比较核心的高级功能是中间件、认证、RequestID、跨域和优雅关停。</p>
<h3 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h3>
<p>Gin 支持中间件，HTTP 请求在转发到实际的处理函数之前，会被一系列加载的中间件进行处理。在中间件中，可以解析 HTTP 请求做一些逻辑处理，例如：跨域处理或者生成 X-Request-ID 并保存在 context 中，以便追踪某个请求。处理完之后，可以选择中断并返回这次请求，也可以选择将请求继续转交给下一个中间件处理。当所有的中间件都处理完之后，请求才会转给路由函数进行处理。具体流程如下图：</p>
<p><img src="https://static001.geekbang.org/resource/image/f0/80/f0783cb9ee8cffa969f846ebe8eae880.jpg?wh=2248x1655" alt="img"></p>
<p>通过中间件，可以实现对所有请求都做统一的处理，提高开发效率，并使我们的代码更简洁。但是，因为所有的请求都需要经过中间件的处理，可能会增加请求延时。对于中间件特性，我有如下建议：</p>
<p>中间件做成可加载的，通过配置文件指定程序启动时加载哪些中间件。</p>
<p>只将一些通用的、必要的功能做成中间件。</p>
<p>在编写中间件时，一定要保证中间件的代码质量和性能。</p>
<p>在 Gin 中，可以通过 gin.Engine 的 Use 方法来加载中间件。中间件可以加载到不同的位置上，而且不同的位置作用范围也不同，例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">router</span> <span class="token operator">:</span><span class="token operator">=</span> gin<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span><span class="token function">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span><span class="token function">Recovery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 中间件作用于所有的HTTP请求</span>
<span class="token literal-property property">v1</span> <span class="token operator">:</span><span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">"/v1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span><span class="token function">BasicAuth</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span>Accounts<span class="token punctuation">{</span><span class="token string-property property">"foo"</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token string-property property">"colin"</span><span class="token operator">:</span> <span class="token string">"colin404"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 中间件作用于v1 group</span>
v1<span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">,</span> Login<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span><span class="token function">BasicAuth</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span>Accounts<span class="token punctuation">{</span><span class="token string-property property">"foo"</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token string-property property">"colin"</span><span class="token operator">:</span> <span class="token string">"colin404"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//中间件只作用于/v1/login API接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gin 框架本身支持了一些中间件。</p>
<ol>
<li>
<p>**gin.Logger()：**Logger 中间件会将日志写到 gin.DefaultWriter，gin.DefaultWriter 默认为 os.Stdout。</p>
</li>
<li>
<p>**gin.Recovery()：**Recovery 中间件可以从任何 panic 恢复，并且写入一个 500 状态码。</p>
</li>
<li>
<p>**gin.CustomRecovery(handle gin.RecoveryFunc)：**类似 Recovery 中间件，但是在恢复时还会调用传入的 handle 方法进行处理。</p>
</li>
<li>
<p>**gin.BasicAuth()：**HTTP 请求基本认证（使用用户名和密码进行认证）。</p>
</li>
</ol>
<p>另外，Gin 还支持自定义中间件。中间件其实是一个函数，函数类型为 gin.HandlerFunc，HandlerFunc 底层类型为 func(*Context)。如下是一个 Logger 中间件的实现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"log"</span>
  <span class="token string">"time"</span>
  <span class="token string">"github.com/gin-gonic/gin"</span>
<span class="token punctuation">)</span>
func <span class="token function">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">t</span> <span class="token operator">:</span><span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 设置变量example</span>
    c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"example"</span><span class="token punctuation">,</span> <span class="token string">"12345"</span><span class="token punctuation">)</span>
    <span class="token comment">// 请求之前</span>
    c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 请求之后</span>
    <span class="token literal-property property">latency</span> <span class="token operator">:</span><span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>latency<span class="token punctuation">)</span>
    <span class="token comment">// 访问我们发送的状态</span>
    <span class="token literal-property property">status</span> <span class="token operator">:</span><span class="token operator">=</span> c<span class="token punctuation">.</span>Writer<span class="token punctuation">.</span><span class="token function">Status</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">r</span> <span class="token operator">:</span><span class="token operator">=</span> gin<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  r<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">"/test"</span><span class="token punctuation">,</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">example</span> <span class="token operator">:</span><span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">MustGet</span><span class="token punctuation">(</span><span class="token string">"example"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
    <span class="token comment">// it would print: "12345"</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// Listen and serve on 0.0.0.0:8080</span>
  r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">":8080"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，还有很多开源的中间件可供我们选择，我把一些常用的总结在了表格里：</p>
<p><img src="https://static001.geekbang.org/resource/image/67/10/67137697a09d9f37bd87a81bf322f510.jpg?wh=1832x1521" alt="img"></p>
<h3 id="认证、requestid、跨域" tabindex="-1"><a class="header-anchor" href="#认证、requestid、跨域" aria-hidden="true">#</a> 认证、RequestID、跨域</h3>
<p>认证、RequestID、跨域这三个高级功能，都可以通过 Gin 的中间件来实现，例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">router</span> <span class="token operator">:</span><span class="token operator">=</span> gin<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 认证</span>
router<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span><span class="token function">BasicAuth</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span>Accounts<span class="token punctuation">{</span><span class="token string-property property">"foo"</span><span class="token operator">:</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token string-property property">"colin"</span><span class="token operator">:</span> <span class="token string">"colin404"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// RequestID</span>
router<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>requestid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>requestid<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
    <span class="token literal-property property">Generator</span><span class="token operator">:</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> string <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"test"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 跨域</span>
<span class="token comment">// CORS for https://foo.com and https://github.com origins, allowing:</span>
<span class="token comment">// - PUT and PATCH methods</span>
<span class="token comment">// - Origin header</span>
<span class="token comment">// - Credentials share</span>
<span class="token comment">// - Preflight requests cached for 12 hours</span>
router<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>cors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>cors<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
    <span class="token literal-property property">AllowOrigins</span><span class="token operator">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">{</span><span class="token string">"https://foo.com"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AllowMethods</span><span class="token operator">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">{</span><span class="token string">"PUT"</span><span class="token punctuation">,</span> <span class="token string">"PATCH"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AllowHeaders</span><span class="token operator">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">{</span><span class="token string">"Origin"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ExposeHeaders</span><span class="token operator">:</span>    <span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">{</span><span class="token string">"Content-Length"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AllowCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AllowOriginFunc</span><span class="token operator">:</span> <span class="token function">func</span><span class="token punctuation">(</span>origin string<span class="token punctuation">)</span> bool <span class="token punctuation">{</span>
        <span class="token keyword">return</span> origin <span class="token operator">==</span> <span class="token string">"https://github.com"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">MaxAge</span><span class="token operator">:</span> <span class="token number">12</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Hour<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优雅关停" tabindex="-1"><a class="header-anchor" href="#优雅关停" aria-hidden="true">#</a> 优雅关停</h3>
<p>Go 项目上线后，我们还需要不断迭代来丰富项目功能、修复 Bug 等，这也就意味着，我们要不断地重启 Go 服务。对于 HTTP 服务来说，如果访问量大，重启服务的时候可能还有很多连接没有断开，请求没有完成。如果这时候直接关闭服务，这些连接会直接断掉，请求异常终止，这就会对用户体验和产品口碑造成很大影响。因此，这种关闭方式不是一种优雅的关闭方式。</p>
<p>这时候，我们期望 HTTP 服务可以在处理完所有请求后，正常地关闭这些连接，也就是优雅地关闭服务。我们有两种方法来优雅关闭 HTTP 服务，分别是借助第三方的 Go 包和自己编码实现。</p>
<p>方法一：借助第三方的 Go 包</p>
<p>如果使用第三方的 Go 包来实现优雅关闭，目前用得比较多的包是fvbock/endless。我们可以使用 fvbock/endless 来替换掉 net/http 的 ListenAndServe 方法，例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">router</span> <span class="token operator">:</span><span class="token operator">=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token comment">// [...]</span>
endless<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":4242"</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：编码实现</p>
<p>借助第三方包的好处是可以稍微减少一些编码工作量，但缺点是引入了一个新的依赖包，因此我更倾向于自己编码实现。Go 1.8 版本或者更新的版本，http.Server 内置的 Shutdown 方法，已经实现了优雅关闭。下面是一个示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// +build go1.8</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"context"</span>
  <span class="token string">"log"</span>
  <span class="token string">"net/http"</span>
  <span class="token string">"os"</span>
  <span class="token string">"os/signal"</span>
  <span class="token string">"syscall"</span>
  <span class="token string">"time"</span>
  <span class="token string">"github.com/gin-gonic/gin"</span>
<span class="token punctuation">)</span>
func <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">router</span> <span class="token operator">:</span><span class="token operator">=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">"Welcome Gin Server"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token literal-property property">srv</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
    <span class="token literal-property property">Addr</span><span class="token operator">:</span>    <span class="token string">":8080"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Handler</span><span class="token operator">:</span> router<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// Initializing the server in a goroutine so that</span>
  <span class="token comment">// it won't block the graceful shutdown handling below</span>
  go <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> srv<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> nil <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> http<span class="token punctuation">.</span>ErrServerClosed <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"listen: %s\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// Wait for interrupt signal to gracefully shutdown the server with</span>
  <span class="token comment">// a timeout of 5 seconds.</span>
  <span class="token literal-property property">quit</span> <span class="token operator">:</span><span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span>chan os<span class="token punctuation">.</span>Signal<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment">// kill (no param) default send syscall.SIGTERM</span>
  <span class="token comment">// kill -2 is syscall.SIGINT</span>
  <span class="token comment">// kill -9 is syscall.SIGKILL but can't be catch, so don't need add it</span>
  signal<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span>quit<span class="token punctuation">,</span> syscall<span class="token punctuation">.</span><span class="token constant">SIGINT</span><span class="token punctuation">,</span> syscall<span class="token punctuation">.</span><span class="token constant">SIGTERM</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">-</span>quit
  log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Shutting down server..."</span><span class="token punctuation">)</span>
  <span class="token comment">// The context is used to inform the server it has 5 seconds to finish</span>
  <span class="token comment">// the request it is currently handling</span>
  ctx<span class="token punctuation">,</span> <span class="token literal-property property">cancel</span> <span class="token operator">:</span><span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
  defer <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token literal-property property">err</span> <span class="token operator">:</span><span class="token operator">=</span> srv<span class="token punctuation">.</span><span class="token function">Shutdown</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">"Server forced to shutdown:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Server exiting"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例中，需要把 srv.ListenAndServe 放在 goroutine 中执行，这样才不会阻塞到 srv.Shutdown 函数。因为我们把 srv.ListenAndServe 放在了 goroutine 中，所以需要一种可以让整个进程常驻的机制。</p>
<p>这里，我们借助了有缓冲 channel，并且调用 signal.Notify 函数将该 channel 绑定到 SIGINT、SIGTERM 信号上。这样，收到 SIGINT、SIGTERM 信号后，quilt 通道会被写入值，从而结束阻塞状态，程序继续运行，执行 srv.Shutdown(ctx)，优雅关停 HTTP 服务。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天我们主要学习了 Web 服务的核心功能，以及如何开发这些功能。在实际的项目开发中， 我们一般会使用基于 net/http 包进行封装的优秀开源 Web 框架。</p>
<p>当前比较火的 Go Web 框架有 Gin、Beego、Echo、Revel、Martini。你可以根据需要进行选择。我比较推荐 Gin，Gin 也是目前比较受欢迎的 Web 框架。Gin Web 框架支持 Web 服务的很多基础功能，例如 HTTP/HTTPS、JSON 格式的数据、路由分组和匹配、一进程多服务等。</p>
<p>另外，Gin 还支持 Web 服务的一些高级功能，例如 中间件、认证、RequestID、跨域和优雅关停等。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<p>使用 Gin 框架编写一个简单的 Web 服务，要求该 Web 服务可以解析参数、校验参数，并进行一些简单的业务逻辑处理，最终返回处理结果。欢迎在留言区分享你的成果，或者遇到的问题。</p>
<p>思考下，如何给 iam-apiserver 的 /healthz 接口添加一个限流中间件，用来限制请求 /healthz 的频率。</p>
<p>欢迎你在留言区与我交流讨论，我们下一讲见。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '15.md' style='float:left'>⬆️上一节🔗  </a><a href = '17.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


