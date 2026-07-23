<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第18节-iam-项目认证" tabindex="-1"><a class="header-anchor" href="#第18节-iam-项目认证" aria-hidden="true">#</a> 第18节 IAM 项目认证</h1>
<br>
<div><a href = '17.md' style='float:left'>⬆️上一节🔗  </a><a href = '19.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://cubxxw.com/" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#如何设计iam项目的认证功能">如何设计IAM项目的认证功能？</router-link></li><li><router-link to="#iam项目是如何实现basic认证的">IAM项目是如何实现Basic认证的？</router-link><ul><li><router-link to="#loginhandler">LoginHandler</router-link></li><li><router-link to="#refreshhandler">RefreshHandler</router-link></li><li><router-link to="#logouthandler">LogoutHandler</router-link></li></ul></li><li><router-link to="#iam项目是如何实现bearer认证的">IAM项目是如何实现Bearer认证的？</router-link><ul><li><router-link to="#iam-authz-server-bearer认证实现">iam-authz-server Bearer认证实现</router-link></li><li><router-link to="#iam-apiserver-bearer认证实现">iam-apiserver Bearer认证实现</router-link></li></ul></li><li><router-link to="#iam项目认证功能设计技巧">IAM项目认证功能设计技巧</router-link><ul><li><router-link to="#技巧1-面向接口编程">技巧1：面向接口编程</router-link></li><li><router-link to="#技巧2-使用抽象工厂模式">技巧2：使用抽象工厂模式</router-link></li><li><router-link to="#技巧3-使用策略模式">技巧3：使用策略模式</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="如何设计iam项目的认证功能" tabindex="-1"><a class="header-anchor" href="#如何设计iam项目的认证功能" aria-hidden="true">#</a> 如何设计IAM项目的认证功能？</h2>
<p>在认证功能开发之前，我们要根据需求，认真考虑下如何设计认证功能，并在设计阶段通过技术评审。那么我们先来看下，如何设计IAM项目的认证功能。</p>
<p>首先，我们要<strong>梳理清楚认证功能的使用场景和需求</strong>。</p>
<ul>
<li>IAM项目的<code v-pre>iam-apiserver</code>服务，提供了IAM系统的管理流功能接口，它的客户端可以是前端（这里也叫控制台），也可以是App端。</li>
<li>为了方便用户在Linux系统下调用，IAM项目还提供了iamctl命令行工具。</li>
<li>为了支持在第三方代码中调用<code v-pre>iam-apiserver</code>提供的API接口，还支持了API调用。</li>
<li><strong>为了提高用户在代码中调用API接口的效率，IAM项目提供了Go SDK。</strong></li>
</ul>
<p>可以看到，<code v-pre>iam-apiserver</code>有很多客户端，每种客户端适用的认证方式是有区别的。</p>
<p>控制台、App端需要登录系统，所以需要使用<code v-pre>用户名：密码</code>这种认证方式，也即Basic认证。iamctl、API调用、Go SDK因为可以不用登录系统，所以可以采用更安全的认证方式：Bearer认证。同时，Basic认证作为iam-apiserver已经集成的认证方式，仍然可以供iamctl、API调用、Go SDK使用。</p>
<blockquote>
<p><strong>这里解释一下 SDK：</strong></p>
<p>SDK 可协助软件开发人员面向特定的平台、系统或编程语言创建应用。它就像是您购买梳妆台时随板材一同提供的工具包，让您能够自行组装，只是对象是应用开发而已。您所需的构建块或开发工具它都有，而具体所含的内容则因制造商而异。</p>
<p>一个基本的 SDK 通常由编译器、调试器和<a href="https://www.redhat.com/zh/topics/api/what-are-application-programming-interfaces" target="_blank" rel="noopener noreferrer">应用编程接口（API）<ExternalLinkIcon/></a>组成，但也可能包含以下任意内容：</p>
<ul>
<li>文档</li>
<li>库</li>
<li>编辑器</li>
<li>运行时/<a href="https://www.redhat.com/zh/topics/middleware/what-is-ide" target="_blank" rel="noopener noreferrer">开发环境<ExternalLinkIcon/></a></li>
<li>测试/分析工具</li>
<li>驱动程序</li>
<li>网络协议</li>
</ul>
</blockquote>
<p>这里有个地方需要注意：如果<code v-pre>iam-apiserver</code>采用<code v-pre>Bearer Token</code>的认证方式，目前最受欢迎的Token格式是 <code v-pre>JWT Token</code>。而JWT Token需要密钥（后面统一用<code v-pre>secretKey</code>来指代），因此需要在iam-apiserver服务中为每个用户维护一个密钥，这样会增加开发和维护成本。</p>
<p>业界有一个更好的实现方式：将iam-apiserver提供的API接口注册到API网关中，通过API网关中的Token认证功能，来实现对iam-apiserver API接口的认证。有很多API网关可供选择，例如腾讯云API网关、Tyk、Kong等。</p>
<p>这里需要你注意：通过iam-apiserver创建的密钥对是提供给<code v-pre>iam-authz-server</code>使用的。</p>
<p>另外，我们还需要调用<code v-pre>iam-authz-server</code>提供的RESTful API接口：<code v-pre>/v1/authz</code>，来进行资源授权。API调用比较适合采用的认证方式是<code v-pre>Bearer</code>认证。</p>
<p>当然，<code v-pre>/v1/authz</code>也可以直接注册到API网关中。在实际的Go项目开发中，也是我推荐的一种方式。但在这里，为了展示实现Bearer认证的过程，<code v-pre>iam-authz-server</code>自己实现了Bearer认证。讲到iam-authz-server Bearer认证实现的时候，我会详细介绍这一点。</p>
<p><strong>Basic认证需要用户名和密码，Bearer认证则需要密钥</strong>，所以iam-apiserver需要将用户名/密码、密钥等信息保存在后端的MySQL中，持久存储起来。</p>
<p>在进行认证的时候，需要获取密码或密钥进行反加密，这就需要查询密码或密钥。查询密码或密钥有两种方式。</p>
<ul>
<li>一种是在请求到达时查询数据库。因为数据库的查询操作延时高，会导致API接口延时较高，所以不太适合用在数据流组件中。</li>
<li>另外一种是将密码或密钥缓存在内存中，这样请求到来时，就可以直接从内存中查询，从而提升查询速度，提高接口性能。</li>
</ul>
<p>但是，将密码或密钥缓存在内存中时，就要考虑内存和数据库的数据一致性，这会增加代码实现的复杂度。因为管控流组件对性能延时要求不那么敏感，而数据流组件则一定要实现非常高的接口性能，所以<code v-pre>iam-apiserver</code>在请求到来时查询数据库，而<code v-pre>iam-authz-server</code>则将密钥信息缓存在内存中。</p>
<p>那在这里，可以总结出一张IAM项目的认证设计图：</p>
<p><img src="http://sm.cubxxw.com/sm202302231537306.jpeg" alt="img"></p>
<p>另外，为了将控制流和数据流区分开来，密钥的CURD操作也放在了iam-apiserver中，但是iam-authz-server需要用到这些密钥信息。为了解决这个问题，目前的做法是：</p>
<ul>
<li>iam-authz-server通过gRPC API请求iam-apiserver，获取所有的密钥信息；</li>
<li>当iam-apiserver有密钥更新时，会Pub一条消息到Redis Channel中。因为iam-authz-server订阅了同一个Redis Channel，iam-authz-searver监听到channel有新消息时，会获取、解析消息，并更新它缓存的密钥信息。这样，我们就能确保iam-authz-server内存中缓存的密钥和iam-apiserver中的密钥保持一致。</li>
</ul>
<p>学到这里，你可能会问：将所有密钥都缓存在iam-authz-server中，那岂不是要占用很大的内存？别担心，这个问题我也想过，并且替你计算好了：8G的内存大概能保存约8千万个密钥信息，完全够用。后期不够用的话，可以加大内存。</p>
<p>不过这里还是有个小缺陷：如果Redis down掉，或者出现网络抖动，可能会造成iam-apiserver中和iam-authz-server内存中保存的密钥数据不一致，但这不妨碍我们学习认证功能的设计和实现。至于如何保证缓存系统的数据一致性，我会在新一期的特别放送里专门介绍下。</p>
<p>最后注意一点：Basic 认证请求和 Bearer 认证请求都可能被截获并重放。所以，为了确保Basic认证和Bearer认证的安全性，<strong>和服务端通信时都需要配合使用HTTPS协议</strong>。</p>
<h2 id="iam项目是如何实现basic认证的" tabindex="-1"><a class="header-anchor" href="#iam项目是如何实现basic认证的" aria-hidden="true">#</a> IAM项目是如何实现Basic认证的？</h2>
<p>我们已经知道，IAM项目中主要用了Basic 和 Bearer 这两种认证方式。我们要支持Basic认证和Bearer认证，并根据需要选择不同的认证方式，这很容易让我们想到使用设计模式中的策略模式来实现。所以，在IAM项目中，我将每一种认证方式都视作一个策略，通过选择不同的策略，来使用不同的认证方法。</p>
<p><strong>IAM项目实现了如下策略：</strong></p>
<ul>
<li><a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth/auto.go" target="_blank" rel="noopener noreferrer">auto策略<ExternalLinkIcon/></a>：该策略会根据HTTP头<code v-pre>Authorization: Basic XX.YY.ZZ</code>和<code v-pre>Authorization: Bearer XX.YY.ZZ</code>自动选择使用Basic认证还是Bearer认证。</li>
<li><a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth/basic.go" target="_blank" rel="noopener noreferrer">basic策略<ExternalLinkIcon/></a>：该策略实现了Basic认证。</li>
<li><a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth/jwt.go" target="_blank" rel="noopener noreferrer">jwt策略<ExternalLinkIcon/></a>：该策略实现了Bearer认证，JWT是Bearer认证的具体实现。</li>
<li><a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth/cache.go" target="_blank" rel="noopener noreferrer">cache策略<ExternalLinkIcon/></a>：该策略其实是一个Bearer认证的实现，Token采用了JWT格式，因为Token中的密钥ID是从内存中获取的，所以叫Cache认证。这一点后面会详细介绍。</li>
</ul>
<p>iam-apiserver通过创建需要的认证策略，并加载到需要认证的API路由上，来实现API认证。具体代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>jwtStrategy<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">newJWTAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span>auth<span class="token punctuation">.</span>JWTStrategy<span class="token punctuation">)</span>
g<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">,</span> jwtStrategy<span class="token punctuation">.</span>LoginHandler<span class="token punctuation">)</span>
g<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">"/logout"</span><span class="token punctuation">,</span> jwtStrategy<span class="token punctuation">.</span>LogoutHandler<span class="token punctuation">)</span>
<span class="token comment">// Refresh time can be longer than token timeout</span>
g<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">"/refresh"</span><span class="token punctuation">,</span> jwtStrategy<span class="token punctuation">.</span>RefreshHandler<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，我们通过<a href="https://github.com/marmotedu/iam/blob/75b978b722f0af3d6aefece3f9668269be3f5b2e/internal/apiserver/auth.go#L59" target="_blank" rel="noopener noreferrer">newJWTAuth<ExternalLinkIcon/></a>函数创建了<code v-pre>auth.JWTStrategy</code>类型的变量，该变量包含了一些认证相关函数。</p>
<ul>
<li>LoginHandler：实现了Basic认证，完成登陆认证。</li>
<li>RefreshHandler：重新刷新Token的过期时间。</li>
<li>LogoutHandler：用户注销时调用。登陆成功后，如果在Cookie中设置了认证相关的信息，执行LogoutHandler则会清空这些信息。</li>
</ul>
<p>下面，我来分别介绍下LoginHandler、RefreshHandler和LogoutHandler。</p>
<h3 id="loginhandler" tabindex="-1"><a class="header-anchor" href="#loginhandler" aria-hidden="true">#</a> LoginHandler</h3>
<p>这里，我们来看下LoginHandler Gin中间件，该函数定义位于<code v-pre>github.com/appleboy/gin-jwt</code>包的<a href="https://github.com/appleboy/gin-jwt/blob/v2.6.4/auth_jwt.go#L431" target="_blank" rel="noopener noreferrer">auth_jwt.go<ExternalLinkIcon/></a>文件中。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>mw <span class="token operator">*</span>GinJWTMiddleware<span class="token punctuation">)</span> <span class="token function">LoginHandler</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> mw<span class="token punctuation">.</span>Authenticator <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    mw<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">,</span> mw<span class="token punctuation">.</span><span class="token function">HTTPStatusMessageFunc</span><span class="token punctuation">(</span>ErrMissingAuthenticatorFunc<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  data<span class="token punctuation">,</span> err <span class="token operator">:=</span> mw<span class="token punctuation">.</span><span class="token function">Authenticator</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    mw<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">,</span> mw<span class="token punctuation">.</span><span class="token function">HTTPStatusMessageFunc</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Create the token</span>
  token <span class="token operator">:=</span> jwt<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>jwt<span class="token punctuation">.</span><span class="token function">GetSigningMethod</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>SigningAlgorithm<span class="token punctuation">)</span><span class="token punctuation">)</span>
  claims <span class="token operator">:=</span> token<span class="token punctuation">.</span>Claims<span class="token punctuation">.</span><span class="token punctuation">(</span>jwt<span class="token punctuation">.</span>MapClaims<span class="token punctuation">)</span>

  <span class="token keyword">if</span> mw<span class="token punctuation">.</span>PayloadFunc <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> mw<span class="token punctuation">.</span><span class="token function">PayloadFunc</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      claims<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  expire <span class="token operator">:=</span> mw<span class="token punctuation">.</span><span class="token function">TimeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>Timeout<span class="token punctuation">)</span>
  claims<span class="token punctuation">[</span><span class="token string">"exp"</span><span class="token punctuation">]</span> <span class="token operator">=</span> expire<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  claims<span class="token punctuation">[</span><span class="token string">"orig_iat"</span><span class="token punctuation">]</span> <span class="token operator">=</span> mw<span class="token punctuation">.</span><span class="token function">TimeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  tokenString<span class="token punctuation">,</span> err <span class="token operator">:=</span> mw<span class="token punctuation">.</span><span class="token function">signedString</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    mw<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">,</span> mw<span class="token punctuation">.</span><span class="token function">HTTPStatusMessageFunc</span><span class="token punctuation">(</span>ErrFailedTokenCreation<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// set cookie</span>
  <span class="token keyword">if</span> mw<span class="token punctuation">.</span>SendCookie <span class="token punctuation">{</span>
    expireCookie <span class="token operator">:=</span> mw<span class="token punctuation">.</span><span class="token function">TimeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>CookieMaxAge<span class="token punctuation">)</span>
    maxage <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>expireCookie<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> mw<span class="token punctuation">.</span><span class="token function">TimeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> mw<span class="token punctuation">.</span>CookieSameSite <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
      c<span class="token punctuation">.</span><span class="token function">SetSameSite</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>CookieSameSite<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    c<span class="token punctuation">.</span><span class="token function">SetCookie</span><span class="token punctuation">(</span>
      mw<span class="token punctuation">.</span>CookieName<span class="token punctuation">,</span>
      tokenString<span class="token punctuation">,</span>
      maxage<span class="token punctuation">,</span>
      <span class="token string">"/"</span><span class="token punctuation">,</span>
      mw<span class="token punctuation">.</span>CookieDomain<span class="token punctuation">,</span>
      mw<span class="token punctuation">.</span>SecureCookie<span class="token punctuation">,</span>
      mw<span class="token punctuation">.</span>CookieHTTPOnly<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  mw<span class="token punctuation">.</span><span class="token function">LoginResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> tokenString<span class="token punctuation">,</span> expire<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从LoginHandler函数的代码实现中，我们可以知道，LoginHandler函数会执行<code v-pre>Authenticator</code>函数，来完成Basic认证。如果认证通过，则会签发JWT Token，并执行 <code v-pre>PayloadFunc</code>函数设置Token Payload。如果我们设置了 <code v-pre>SendCookie=true</code> ，还会在Cookie中添加认证相关的信息，例如 Token、Token的生命周期等，最后执行 <code v-pre>LoginResponse</code> 方法返回Token和Token的过期时间。</p>
<p><code v-pre>Authenticator</code>、<code v-pre>PayloadFunc</code>、<code v-pre>LoginResponse</code>这三个函数，是我们在创建JWT认证策略时指定的。下面我来分别介绍下。</p>
<h4 id="authenticator-函数" tabindex="-1"><a class="header-anchor" href="#authenticator-函数" aria-hidden="true">#</a> Authenticator 函数</h4>
<p>先来看下<a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/apiserver/auth.go#L97" target="_blank" rel="noopener noreferrer">Authenticator<ExternalLinkIcon/></a>函数。Authenticator函数从HTTP Authorization Header中获取用户名和密码，并校验密码是否合法。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">authenticator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> login loginInfo
    <span class="token keyword">var</span> err <span class="token builtin">error</span>

    <span class="token comment">// support header and body both</span>
    <span class="token keyword">if</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">""</span> <span class="token punctuation">{</span>
      login<span class="token punctuation">,</span> err <span class="token operator">=</span> <span class="token function">parseWithHeader</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      login<span class="token punctuation">,</span> err <span class="token operator">=</span> <span class="token function">parseWithBody</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">,</span> jwt<span class="token punctuation">.</span>ErrFailedAuthentication
    <span class="token punctuation">}</span>

    <span class="token comment">// Get the user information by the login username.</span>
    user<span class="token punctuation">,</span> err <span class="token operator">:=</span> store<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Users</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> login<span class="token punctuation">.</span>Username<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>GetOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"get user information failed: %s"</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">,</span> jwt<span class="token punctuation">.</span>ErrFailedAuthentication
    <span class="token punctuation">}</span>

    <span class="token comment">// Compare the login password with the user password.</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> user<span class="token punctuation">.</span><span class="token function">Compare</span><span class="token punctuation">(</span>login<span class="token punctuation">.</span>Password<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">,</span> jwt<span class="token punctuation">.</span>ErrFailedAuthentication
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> user<span class="token punctuation">,</span> <span class="token boolean">nil</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Authenticator</code>函数需要获取用户名和密码。它首先会判断是否有<code v-pre>Authorization</code>请求头，如果有，则调用<code v-pre>parseWithHeader</code>函数获取用户名和密码，否则调用<code v-pre>parseWithBody</code>从Body中获取用户名和密码。如果都获取失败，则返回认证失败错误。</p>
<p>所以，IAM项目的Basic支持以下两种请求方式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">"Authorization: Basic YWRtaW46QWRtaW5AMjAyMQ=="</span> http://127.0.0.1:8080/login <span class="token comment"># 用户名:密码通过base64加码后，通过HTTP Authorization Header进行传递，因为密码非明文，建议使用这种方式。</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">'Content-Type: application/json'</span> -d<span class="token string">'{"username":"admin","password":"Admin@2021"}'</span> http://127.0.0.1:8080/login <span class="token comment"># 用户名和密码在HTTP Body中传递，因为密码是明文，所以这里不建议实际开发中，使用这种方式。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们来看下 <code v-pre>parseWithHeader</code> 是如何获取用户名和密码的。假设我们的请求为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">"Authorization: Basic YWRtaW46QWRtaW5AMjAyMQ=="</span> http://127.0.0.1:8080/login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code v-pre>YWRtaW46QWRtaW5AMjAyMQ==</code>值由以下命令生成：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">'admin:Admin@2021'</span><span class="token operator">|</span><span class="token assign-left variable">base64YWRtaW46QWRtaW5AMjAyMQ</span><span class="token operator">==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>parseWithHeader</code>实际上执行的是上述命令的逆向步骤：</p>
<ol>
<li>获取<code v-pre>Authorization</code>头的值，并调用<code v-pre>strings.SplitN</code>函数，获取一个切片变量auth，其值为 <code v-pre>[&quot;Basic&quot;,&quot;YWRtaW46QWRtaW5AMjAyMQ==&quot;]</code> 。</li>
<li>将<code v-pre>YWRtaW46QWRtaW5AMjAyMQ==</code>进行base64解码，得到<code v-pre>admin:Admin@2021</code>。</li>
<li>调用<code v-pre>strings.SplitN</code>函数获取 <code v-pre>admin:Admin@2021</code> ，得到用户名为<code v-pre>admin</code>，密码为<code v-pre>Admin@2021</code>。</li>
</ol>
<p><code v-pre>parseWithBody</code>则是调用了Gin的<code v-pre>ShouldBindJSON</code>函数，来从Body中解析出用户名和密码。</p>
<p>获取到用户名和密码之后，程序会从数据库中查询出该用户对应的加密后的密码，这里我们假设是<code v-pre>xxxx</code>。最后<code v-pre>authenticator</code>函数调用<code v-pre>user.Compare</code>来判断 <code v-pre>xxxx</code> 是否和通过<code v-pre>user.Compare</code>加密后的字符串相匹配，如果匹配则认证成功，否则返回认证失败。</p>
<h4 id="再来看下payloadfunc函数" tabindex="-1"><a class="header-anchor" href="#再来看下payloadfunc函数" aria-hidden="true">#</a> 再来看下<code v-pre>PayloadFunc</code>函数</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">payloadFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> jwt<span class="token punctuation">.</span>MapClaims <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> jwt<span class="token punctuation">.</span>MapClaims <span class="token punctuation">{</span>
        claims <span class="token operator">:=</span> jwt<span class="token punctuation">.</span>MapClaims<span class="token punctuation">{</span>
            <span class="token string">"iss"</span><span class="token punctuation">:</span> APIServerIssuer<span class="token punctuation">,</span>
            <span class="token string">"aud"</span><span class="token punctuation">:</span> APIServerAudience<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> u<span class="token punctuation">,</span> ok <span class="token operator">:=</span> data<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>User<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
            claims<span class="token punctuation">[</span>jwt<span class="token punctuation">.</span>IdentityKey<span class="token punctuation">]</span> <span class="token operator">=</span> u<span class="token punctuation">.</span>Name
            claims<span class="token punctuation">[</span><span class="token string">"sub"</span><span class="token punctuation">]</span> <span class="token operator">=</span> u<span class="token punctuation">.</span>Name
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> claims
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PayloadFunc函数会设置JWT Token中Payload部分的 iss、aud、sub、identity字段，供后面使用。</p>
<h4 id="loginresponse函数" tabindex="-1"><a class="header-anchor" href="#loginresponse函数" aria-hidden="true">#</a> LoginResponse函数</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">loginResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> code <span class="token builtin">int</span><span class="token punctuation">,</span> token <span class="token builtin">string</span><span class="token punctuation">,</span> expire time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> code <span class="token builtin">int</span><span class="token punctuation">,</span> token <span class="token builtin">string</span><span class="token punctuation">,</span> expire time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
            <span class="token string">"token"</span><span class="token punctuation">:</span>  token<span class="token punctuation">,</span>
            <span class="token string">"expire"</span><span class="token punctuation">:</span> expire<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>RFC3339<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该函数用来在Basic认证成功之后，返回Token和Token的过期时间给调用者：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">"Authorization: Basic YWRtaW46QWRtaW5AMjAyMQ=="</span> http://127.0.0.1:8080/login
<span class="token punctuation">{</span><span class="token string">"expire"</span><span class="token builtin class-name">:</span><span class="token string">"2021-09-29T01:38:49+08:00"</span>,<span class="token string">"token"</span><span class="token builtin class-name">:</span><span class="token string">"XX.YY.ZZ"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>登陆成功后，iam-apiserver会返回Token和Token的过期时间，前端可以将这些信息缓存在Cookie中或LocalStorage中，之后的请求都可以使用Token来进行认证。使用Token进行认证，不仅能够提高认证的安全性，还能够避免查询数据库，从而提高认证效率。</p>
<h3 id="refreshhandler" tabindex="-1"><a class="header-anchor" href="#refreshhandler" aria-hidden="true">#</a> RefreshHandler</h3>
<p><code v-pre>RefreshHandler</code>函数会先执行Bearer认证，如果认证通过，则会重新签发Token。</p>
<h3 id="logouthandler" tabindex="-1"><a class="header-anchor" href="#logouthandler" aria-hidden="true">#</a> LogoutHandler</h3>
<p>最后，来看下<code v-pre>LogoutHandler</code>函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mw <span class="token operator">*</span>GinJWTMiddleware<span class="token punctuation">)</span> <span class="token function">LogoutHandler</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// delete auth cookie</span>
    <span class="token keyword">if</span> mw<span class="token punctuation">.</span>SendCookie <span class="token punctuation">{</span>
        <span class="token keyword">if</span> mw<span class="token punctuation">.</span>CookieSameSite <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">SetSameSite</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>CookieSameSite<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        c<span class="token punctuation">.</span><span class="token function">SetCookie</span><span class="token punctuation">(</span>
            mw<span class="token punctuation">.</span>CookieName<span class="token punctuation">,</span>
            <span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string">"/"</span><span class="token punctuation">,</span>
            mw<span class="token punctuation">.</span>CookieDomain<span class="token punctuation">,</span>
            mw<span class="token punctuation">.</span>SecureCookie<span class="token punctuation">,</span>
            mw<span class="token punctuation">.</span>CookieHTTPOnly<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    mw<span class="token punctuation">.</span><span class="token function">LogoutResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，LogoutHandler其实是用来清空Cookie中Bearer认证相关信息的。</p>
<p>最后，我们来做个总结：Basic认证通过用户名和密码来进行认证，通常用在登陆接口/login中。用户登陆成功后，会返回JWT Token，前端会保存该JWT Token在浏览器的Cookie或LocalStorage中，供后续请求使用。</p>
<p>后续请求时，均会携带该Token，以完成Bearer认证。另外，有了登陆接口，一般还会配套/logout接口和/refresh接口，分别用来进行注销和刷新Token。</p>
<p>这里你可能会问，为什么要刷新Token？因为通过登陆接口签发的Token有过期时间，有了刷新接口，前端就可以根据需要，自行刷新Token的过期时间。过期时间可以通过iam-apiserver配置文件的<a href="https://github.com/marmotedu/iam/blob/master/configs/iam-apiserver.yaml#L66" target="_blank" rel="noopener noreferrer">jwt.timeout<ExternalLinkIcon/></a>配置项来指定。登陆后签发Token时，使用的密钥（secretKey）由<a href="https://github.com/marmotedu/iam/blob/master/configs/iam-apiserver.yaml#L65" target="_blank" rel="noopener noreferrer">jwt.key<ExternalLinkIcon/></a>配置项来指定。</p>
<h2 id="iam项目是如何实现bearer认证的" tabindex="-1"><a class="header-anchor" href="#iam项目是如何实现bearer认证的" aria-hidden="true">#</a> IAM项目是如何实现Bearer认证的？</h2>
<p>上面我们介绍了Basic认证。这里，我再来介绍下IAM项目中Bearer认证的实现方式。</p>
<p>IAM项目中有两个地方实现了Bearer认证，分别是 iam-apiserver 和 iam-authz-server。下面我来分别介绍下它们是如何实现Bearer认证的。</p>
<h3 id="iam-authz-server-bearer认证实现" tabindex="-1"><a class="header-anchor" href="#iam-authz-server-bearer认证实现" aria-hidden="true">#</a> iam-authz-server Bearer认证实现</h3>
<p>先来看下iam-authz-server是如何实现Bearer认证的。</p>
<p>iam-authz-server通过在 <code v-pre>/v1</code> 路由分组中加载cache认证中间件来使用cache认证策略：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>auth :<span class="token operator">=</span> newCacheAuth<span class="token punctuation">(</span><span class="token punctuation">)</span>
apiv1 :<span class="token operator">=</span> g.Group<span class="token punctuation">(</span><span class="token string">"/v1"</span>, auth.AuthFunc<span class="token punctuation">(</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>来看下<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/authzserver/jwt.go#L15" target="_blank" rel="noopener noreferrer">newCacheAuth<ExternalLinkIcon/></a>函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">newCacheAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> middleware<span class="token punctuation">.</span>AuthStrategy <span class="token punctuation">{</span>
    <span class="token keyword">return</span> auth<span class="token punctuation">.</span><span class="token function">NewCacheStrategy</span><span class="token punctuation">(</span><span class="token function">getSecretFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getSecretFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>auth<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>kid <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>auth<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> store<span class="token punctuation">.</span><span class="token function">GetStoreInsOr</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> auth<span class="token punctuation">.</span>Secret<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">Wrap</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"get store instance failed"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        secret<span class="token punctuation">,</span> err <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">GetSecret</span><span class="token punctuation">(</span>kid<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> auth<span class="token punctuation">.</span>Secret<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> auth<span class="token punctuation">.</span>Secret<span class="token punctuation">{</span>
            Username<span class="token punctuation">:</span> secret<span class="token punctuation">.</span>Username<span class="token punctuation">,</span>
            ID<span class="token punctuation">:</span>       secret<span class="token punctuation">.</span>SecretId<span class="token punctuation">,</span>
            Key<span class="token punctuation">:</span>      secret<span class="token punctuation">.</span>SecretKey<span class="token punctuation">,</span>
            Expires<span class="token punctuation">:</span>  secret<span class="token punctuation">.</span>Expires<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>newCacheAuth函数调用<code v-pre>auth.NewCacheStrategy</code>创建了一个cache认证策略，创建时传入了<code v-pre>getSecretFunc</code>函数，该函数会返回密钥的信息。密钥信息包含了以下字段：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Secret <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Username <span class="token builtin">string</span>
    ID       <span class="token builtin">string</span>
    Key      <span class="token builtin">string</span>
    Expires  <span class="token builtin">int64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看下cache认证策略实现的<a href="https://github.com/marmotedu/iam/blob/master/internal/pkg/middleware/auth/cache.go#L48" target="_blank" rel="noopener noreferrer">AuthFunc<ExternalLinkIcon/></a>方法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>cache CacheStrategy<span class="token punctuation">)</span> <span class="token function">AuthFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    header <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
      core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrMissingHeader<span class="token punctuation">,</span> <span class="token string">"Authorization header cannot be empty."</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
      c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> rawJWT <span class="token builtin">string</span>
    <span class="token comment">// Parse the header to get the token part.</span>
    fmt<span class="token punctuation">.</span><span class="token function">Sscanf</span><span class="token punctuation">(</span>header<span class="token punctuation">,</span> <span class="token string">"Bearer %s"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>rawJWT<span class="token punctuation">)</span>

    <span class="token comment">// Use own validation logic, see below</span>
    <span class="token keyword">var</span> secret Secret

    claims <span class="token operator">:=</span> <span class="token operator">&amp;</span>jwt<span class="token punctuation">.</span>MapClaims<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// Verify the token</span>
    parsedT<span class="token punctuation">,</span> err <span class="token operator">:=</span> jwt<span class="token punctuation">.</span><span class="token function">ParseWithClaims</span><span class="token punctuation">(</span>rawJWT<span class="token punctuation">,</span> claims<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>token <span class="token operator">*</span>jwt<span class="token punctuation">.</span>Token<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Validate the alg is HMAC signature</span>
      <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> token<span class="token punctuation">.</span>Method<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>jwt<span class="token punctuation">.</span>SigningMethodHMAC<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"unexpected signing method: %v"</span><span class="token punctuation">,</span> token<span class="token punctuation">.</span>Header<span class="token punctuation">[</span><span class="token string">"alg"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      kid<span class="token punctuation">,</span> ok <span class="token operator">:=</span> token<span class="token punctuation">.</span>Header<span class="token punctuation">[</span><span class="token string">"kid"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrMissingKID
      <span class="token punctuation">}</span>

      <span class="token keyword">var</span> err <span class="token builtin">error</span>
      secret<span class="token punctuation">,</span> err <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>kid<span class="token punctuation">)</span>
      <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrMissingSecret
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>secret<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> jwt<span class="token punctuation">.</span><span class="token function">WithAudience</span><span class="token punctuation">(</span>AuthzAudience<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> <span class="token operator">!</span>parsedT<span class="token punctuation">.</span>Valid <span class="token punctuation">{</span>
      core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrSignatureInvalid<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
      c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token function">KeyExpired</span><span class="token punctuation">(</span>secret<span class="token punctuation">.</span>Expires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tm <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span>secret<span class="token punctuation">.</span>Expires<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"2006-01-02 15:04:05"</span><span class="token punctuation">)</span>
      core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrExpired<span class="token punctuation">,</span> <span class="token string">"expired at: %s"</span><span class="token punctuation">,</span> tm<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
      c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>CtxUsername<span class="token punctuation">,</span> secret<span class="token punctuation">.</span>Username<span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// KeyExpired checks if a key has expired, if the value of user.SessionState.Expires is 0, it will be ignored.</span>
<span class="token keyword">func</span> <span class="token function">KeyExpired</span><span class="token punctuation">(</span>expires <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> expires <span class="token operator">>=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span>expires<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AuthFunc函数依次执行了以下四大步来完成JWT认证，每一步中又有一些小步骤，下面我们来一起看看。</p>
<p>第一步，从Authorization: Bearer XX.YY.ZZ请求头中获取XX.YY.ZZ，XX.YY.ZZ即为JWT Token。</p>
<p>第二步，调用github.com/dgrijalva/jwt-go包提供的ParseWithClaims函数，该函数会依次执行下面四步操作。</p>
<p>调用ParseUnverified函数，依次执行以下操作：</p>
<ol>
<li>从Token中获取第一段XX，base64解码后得到JWT Token的<code v-pre>Header{“alg”:“HS256”,“kid”:“a45yPqUnQ8gljH43jAGQdRo0bXzNLjlU0hxa”,“typ”:“JWT”}</code>。</li>
<li>从Token中获取第二段YY，base64解码后得到JWT Token的<code v-pre>Payload{“aud”:“iam.authz.marmotedu.com”,“exp”:1625104314,“iat”:1625097114,“iss”:“iamctl”,“nbf”:1625097114}</code>。</li>
<li>根据Token Header中的alg字段，获取Token加密函数。</li>
<li>最终ParseUnverified函数会返回Token类型的变量，Token类型包含 Method、Header、Claims、Valid这些重要字段，这些字段会用于后续的认证步骤中。</li>
</ol>
<p>调用传入的keyFunc获取密钥，这里来看下keyFunc的实现：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span><span class="token punctuation">(</span>token <span class="token operator">*</span>jwt<span class="token punctuation">.</span>Token<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Validate the alg is HMAC signature</span>
  <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> token<span class="token punctuation">.</span>Method<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>jwt<span class="token punctuation">.</span>SigningMethodHMAC<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"unexpected signing method: %v"</span><span class="token punctuation">,</span> token<span class="token punctuation">.</span>Header<span class="token punctuation">[</span><span class="token string">"alg"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  kid<span class="token punctuation">,</span> ok <span class="token operator">:=</span> token<span class="token punctuation">.</span>Header<span class="token punctuation">[</span><span class="token string">"kid"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrMissingKID
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> err <span class="token builtin">error</span>
  secret<span class="token punctuation">,</span> err <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>kid<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> ErrMissingSecret
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>secret<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，keyFunc接受 <code v-pre>*Token</code> 类型的变量，并获取Token Header中的kid，kid即为密钥ID：secretID。接着，调用cache.get(kid)获取密钥secretKey。cache.get函数即为getSecretFunc，getSecretFunc函数会根据kid，从内存中查找密钥信息，密钥信息中包含了secretKey。</p>
<ol>
<li>从Token中获取Signature签名字符串ZZ，也即Token的第三段。</li>
<li>获取到secretKey之后，token.Method.Verify验证Signature签名字符串ZZ，也即Token的第三段是否合法。token.Method.Verify实际上是使用了相同的加密算法和相同的secretKey加密XX.YY字符串。假设加密之后的字符串为WW，接下来会用WW和ZZ base64解码后的字符串进行比较，如果相等则认证通过，如果不相等则认证失败。</li>
</ol>
<p>**第三步，**调用KeyExpired，验证secret是否过期。secret信息中包含过期时间，你只需要拿该过期时间和当前时间对比就行。</p>
<p>**第四步，**设置HTTP Header<code v-pre>username: colin</code>。</p>
<p>到这里，iam-authz-server的Bearer认证分析就完成了。</p>
<p>我们来做个总结：iam-authz-server通过加载Gin中间件的方式，在请求<code v-pre>/v1/authz</code>接口时进行访问认证。因为Bearer认证具有过期时间，而且可以在认证字符串中携带更多有用信息，还具有不可逆加密等优点，所以**/v1/authz采用了Bearer认证，Token格式采用了JWT格式**，这也是业界在API认证中最受欢迎的认证方式。</p>
<p>Bearer认证需要secretID和secretKey，这些信息会通过gRPC接口调用，从iam-apisaerver中获取，并缓存在iam-authz-server的内存中供认证时查询使用。</p>
<p>当请求来临时，iam-authz-server Bearer认证中间件从JWT Token中解析出Header，并从Header的kid字段中获取到secretID，根据secretID查找到secretKey，最后使用secretKey加密JWT Token的Header和Payload，并与Signature部分进行对比。如果相等，则认证通过；如果不等，则认证失败。</p>
<h3 id="iam-apiserver-bearer认证实现" tabindex="-1"><a class="header-anchor" href="#iam-apiserver-bearer认证实现" aria-hidden="true">#</a> iam-apiserver Bearer认证实现</h3>
<p>再来看下 iam-apiserver的Bearer认证。</p>
<p>iam-apiserver的Bearer认证通过以下代码（位于<a href="https://github.com/marmotedu/iam/blob/v1.1.0/internal/apiserver/router.go#L65" target="_blank" rel="noopener noreferrer">router.go<ExternalLinkIcon/></a>文件中）指定使用了auto认证策略：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>v1<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>auto<span class="token punctuation">.</span><span class="token function">AuthFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们来看下<a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth/auto.go#L38" target="_blank" rel="noopener noreferrer">auto.AuthFunc()<ExternalLinkIcon/></a>的实现：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a AutoStrategy<span class="token punctuation">)</span> <span class="token function">AuthFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    operator <span class="token operator">:=</span> middleware<span class="token punctuation">.</span>AuthOperator<span class="token punctuation">{</span><span class="token punctuation">}</span>
    authHeader <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">SplitN</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>authHeader<span class="token punctuation">)</span> <span class="token operator">!=</span> authHeaderCount <span class="token punctuation">{</span>
      core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>
        c<span class="token punctuation">,</span>
        errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrInvalidAuthHeader<span class="token punctuation">,</span> <span class="token string">"Authorization header format is wrong."</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">switch</span> authHeader<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"Basic"</span><span class="token punctuation">:</span>
      operator<span class="token punctuation">.</span><span class="token function">SetStrategy</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>basic<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">"Bearer"</span><span class="token punctuation">:</span>
      operator<span class="token punctuation">.</span><span class="token function">SetStrategy</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>jwt<span class="token punctuation">)</span>
      <span class="token comment">// a.JWT.MiddlewareFunc()(c)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
      core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrSignatureInvalid<span class="token punctuation">,</span> <span class="token string">"unrecognized Authorization header."</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
      c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    operator<span class="token punctuation">.</span><span class="token function">AuthFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

    c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面代码中可以看到，AuthFunc函数会从Authorization Header中解析出认证方式是Basic还是Bearer。如果是Bearer，就会使用JWT认证策略；如果是Basic，就会使用Basic认证策略。</p>
<p>我们再来看下JWT认证策略的<a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth/jwt.go#L30" target="_blank" rel="noopener noreferrer">AuthFunc<ExternalLinkIcon/></a>函数实现：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>j JWTStrategy<span class="token punctuation">)</span> <span class="token function">AuthFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
  <span class="token keyword">return</span> j<span class="token punctuation">.</span><span class="token function">MiddlewareFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们跟随代码，可以定位到<code v-pre>MiddlewareFunc</code>函数最终调用了<code v-pre>github.com/appleboy/gin-jwt</code>包<code v-pre>GinJWTMiddleware</code>结构体的<a href="https://github.com/appleboy/gin-jwt/blob/v2.6.4/auth_jwt.go#L369" target="_blank" rel="noopener noreferrer">middlewareImpl<ExternalLinkIcon/></a>方法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mw <span class="token operator">*</span>GinJWTMiddleware<span class="token punctuation">)</span> <span class="token function">middlewareImpl</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  claims<span class="token punctuation">,</span> err <span class="token operator">:=</span> mw<span class="token punctuation">.</span><span class="token function">GetClaimsFromJWT</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    mw<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">,</span> mw<span class="token punctuation">.</span><span class="token function">HTTPStatusMessageFunc</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> claims<span class="token punctuation">[</span><span class="token string">"exp"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    mw<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> mw<span class="token punctuation">.</span><span class="token function">HTTPStatusMessageFunc</span><span class="token punctuation">(</span>ErrMissingExpField<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> claims<span class="token punctuation">[</span><span class="token string">"exp"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">float64</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
    mw<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> mw<span class="token punctuation">.</span><span class="token function">HTTPStatusMessageFunc</span><span class="token punctuation">(</span>ErrWrongFormatOfExp<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token function">int64</span><span class="token punctuation">(</span>claims<span class="token punctuation">[</span><span class="token string">"exp"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">float64</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> mw<span class="token punctuation">.</span><span class="token function">TimeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mw<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">,</span> mw<span class="token punctuation">.</span><span class="token function">HTTPStatusMessageFunc</span><span class="token punctuation">(</span>ErrExpiredToken<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"JWT_PAYLOAD"</span><span class="token punctuation">,</span> claims<span class="token punctuation">)</span>
  identity <span class="token operator">:=</span> mw<span class="token punctuation">.</span><span class="token function">IdentityHandler</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

  <span class="token keyword">if</span> identity <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>IdentityKey<span class="token punctuation">,</span> identity<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token operator">!</span>mw<span class="token punctuation">.</span><span class="token function">Authorizator</span><span class="token punctuation">(</span>identity<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mw<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusForbidden<span class="token punctuation">,</span> mw<span class="token punctuation">.</span><span class="token function">HTTPStatusMessageFunc</span><span class="token punctuation">(</span>ErrForbidden<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析上面的代码，我们可以知道，middlewareImpl的Bearer认证流程为：</p>
<p><strong>第一步</strong>：调用<code v-pre>GetClaimsFromJWT</code>函数，从HTTP请求中获取Authorization Header，并解析出Token字符串，进行认证，最后返回Token Payload。</p>
<p><strong>第二步</strong>：校验Payload中的<code v-pre>exp</code>是否超过当前时间，如果超过就说明Token过期，校验不通过。</p>
<p><strong>第三步</strong>：给gin.Context中添加<code v-pre>JWT_PAYLOAD</code>键，供后续程序使用（当然也可能用不到）。</p>
<p><strong>第四步</strong>：通过以下代码，在gin.Context中添加IdentityKey键，IdentityKey键可以在创建<code v-pre>GinJWTMiddleware</code>结构体时指定，这里我们设置为<code v-pre>middleware.UsernameKey</code>，也就是username。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
identity <span class="token operator">:=</span> mw<span class="token punctuation">.</span><span class="token function">IdentityHandler</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

<span class="token keyword">if</span> identity <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>IdentityKey<span class="token punctuation">,</span> identity<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IdentityKey键的值由IdentityHandler函数返回，IdentityHandler函数为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
    claims <span class="token operator">:=</span> jwt<span class="token punctuation">.</span><span class="token function">ExtractClaims</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

    <span class="token keyword">return</span> claims<span class="token punctuation">[</span>jwt<span class="token punctuation">.</span>IdentityKey<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述函数会从Token的Payload中获取identity域的值，identity域的值是在签发Token时指定的，它的值其实是用户名，你可以查看<a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/apiserver/auth.go#L177" target="_blank" rel="noopener noreferrer">payloadFunc<ExternalLinkIcon/></a>函数了解。</p>
<p><strong>第五步</strong>：接下来，会调用<code v-pre>Authorizator</code>方法，<code v-pre>Authorizator</code>是一个callback函数，成功时必须返回真，失败时必须返回假。<code v-pre>Authorizator</code>也是在创建GinJWTMiddleware时指定的，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">authorizator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>    
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>    
        <span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> data<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>    
            log<span class="token punctuation">.</span><span class="token function">L</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">"user `%s` is authenticated."</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>         
            <span class="token keyword">return</span> <span class="token boolean">true</span>                            
        <span class="token punctuation">}</span>                                                   
        <span class="token keyword">return</span> <span class="token boolean">false</span>                     
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>authorizator</code>函数返回了一个匿名函数，匿名函数在认证成功后，会打印一条认证成功日志。</p>
<h2 id="iam项目认证功能设计技巧" tabindex="-1"><a class="header-anchor" href="#iam项目认证功能设计技巧" aria-hidden="true">#</a> IAM项目认证功能设计技巧</h2>
<p>我在设计IAM项目的认证功能时，也运用了一些技巧，这里分享给你。</p>
<h3 id="技巧1-面向接口编程" tabindex="-1"><a class="header-anchor" href="#技巧1-面向接口编程" aria-hidden="true">#</a> 技巧1：面向接口编程</h3>
<p>在使用<a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth/auto.go#L30" target="_blank" rel="noopener noreferrer">NewAutoStrategy<ExternalLinkIcon/></a>函数创建auto认证策略时，传入了<a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth.go#L12" target="_blank" rel="noopener noreferrer">middleware.AuthStrategy<ExternalLinkIcon/></a>接口类型的参数，这意味着Basic认证和Bearer认证都可以有不同的实现，这样后期可以根据需要扩展新的认证方式。</p>
<h3 id="技巧2-使用抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#技巧2-使用抽象工厂模式" aria-hidden="true">#</a> 技巧2：使用抽象工厂模式</h3>
<p><a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/apiserver/auth.go" target="_blank" rel="noopener noreferrer">auth.go<ExternalLinkIcon/></a>文件中，通过newBasicAuth、newJWTAuth、newAutoAuth创建认证策略时，返回的都是接口。通过返回接口，可以在不公开内部实现的情况下，让调用者使用你提供的各种认证功能。</p>
<h3 id="技巧3-使用策略模式" tabindex="-1"><a class="header-anchor" href="#技巧3-使用策略模式" aria-hidden="true">#</a> 技巧3：使用策略模式</h3>
<p>在auto认证策略中，我们会根据HTTP 请求头<code v-pre>Authorization: XXX X.Y.X</code>中的XXX来选择并设置认证策略（Basic 或 Bearer）。具体可以查看<code v-pre>AutoStrategy</code>的<a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/middleware/auth/auto.go#L38" target="_blank" rel="noopener noreferrer">AuthFunc<ExternalLinkIcon/></a>函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>a AutoStrategy<span class="token punctuation">)</span> <span class="token function">AuthFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    operator <span class="token operator">:=</span> middleware<span class="token punctuation">.</span>AuthOperator<span class="token punctuation">{</span><span class="token punctuation">}</span>
    authHeader <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">SplitN</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token operator">...</span>
    <span class="token keyword">switch</span> authHeader<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"Basic"</span><span class="token punctuation">:</span>
      operator<span class="token punctuation">.</span><span class="token function">SetStrategy</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>basic<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">"Bearer"</span><span class="token punctuation">:</span>
      operator<span class="token punctuation">.</span><span class="token function">SetStrategy</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>jwt<span class="token punctuation">)</span>
      <span class="token comment">// a.JWT.MiddlewareFunc()(c)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
      core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrSignatureInvalid<span class="token punctuation">,</span> <span class="token string">"unrecognized Authorization header."</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
      c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    operator<span class="token punctuation">.</span><span class="token function">AuthFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

    c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，如果是Basic，则设置为Basic认证方法<code v-pre>operator.SetStrategy(a.basic)</code>；如果是Bearer，则设置为Bearer认证方法<code v-pre>operator.SetStrategy(a.jwt)</code>。 <code v-pre>SetStrategy</code>方法的入参是AuthStrategy类型的接口，都实现了<code v-pre>AuthFunc() gin.HandlerFunc</code>函数，用来进行认证，所以最后我们调用<code v-pre>operator.AuthFunc()(c)</code>即可完成认证。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在IAM项目中，iam-apiserver实现了Basic认证和Bearer认证，iam-authz-server实现了Bearer认证。这一讲重点介绍了iam-apiserver的认证实现。</p>
<p>用户要访问iam-apiserver，首先需要通过Basic认证，认证通过之后，会返回JWT Token和JWT Token的过期时间。前端将Token缓存在LocalStorage或Cookie中，后续的请求都通过Token来认证。</p>
<p>执行Basic认证时，iam-apiserver会从HTTP Authorization Header中解析出用户名和密码，将密码再加密，并和数据库中保存的值进行对比。如果不匹配，则认证失败，否则认证成功。认证成功之后，会返回Token，并在Token的Payload部分设置用户名，Key为 username 。</p>
<p>执行Bearer认证时，iam-apiserver会从JWT Token中解析出Header和Payload，并从Header中获取加密算法。接着，用获取到的加密算法和从配置文件中获取到的密钥对Header.Payload进行再加密，得到Signature，并对比两次的Signature是否相等。如果不相等，则返回 HTTP 401 Unauthorized 错误；如果相等，接下来会判断Token是否过期，如果过期则返回认证不通过，否则认证通过。认证通过之后，会将Payload中的username添加到gin.Context类型的变量中，供后面的业务逻辑使用。</p>
<p>我绘制了整个流程的示意图，你可以对照着再回顾一遍。</p>
<p><img src="http://sm.cubxxw.com/sm202302231608596.jpeg" alt="img"></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '17.md' style='float:left'>⬆️上一节🔗  </a><a href = '19.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


