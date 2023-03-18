<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第11节-设计一套科学的错误码" tabindex="-1"><a class="header-anchor" href="#第11节-设计一套科学的错误码" aria-hidden="true">#</a> 第11节 设计一套科学的错误码</h1>
<br>
<div><a href = '10.md' style='float:left'>⬆️上一节🔗  </a><a href = '12.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#如何设计一套科学的错误码">如何设计一套科学的错误码</router-link><ul><li><router-link to="#期望错误码实现的功能">期望错误码实现的功能</router-link></li></ul></li><li><router-link to="#常见的错误码设计方式">常见的错误码设计方式</router-link></li><li><router-link to="#错误码设计建议">错误码设计建议</router-link><ul><li><router-link to="#业务-code-码设计">业务 Code 码设计</router-link></li><li><router-link to="#如何设置http-status-code">如何设置HTTP Status Code</router-link></li></ul></li><li><router-link to="#iam项目错误码设计规范">IAM项目错误码设计规范</router-link><ul><li><router-link to="#code-设计规范">Code 设计规范</router-link></li><li><router-link to="#iam-api接口返回值说明">IAM API接口返回值说明</router-link></li></ul></li><li><router-link to="#如何设计错误包">如何设计错误包</router-link></li><li><router-link to="#错误包实现">错误包实现</router-link></li><li><router-link to="#如何记录错误">如何记录错误？</router-link></li><li><router-link to="#一个错误码的具体实现">一个错误码的具体实现</router-link></li><li><router-link to="#错误码实际使用方法示例">错误码实际使用方法示例</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="如何设计一套科学的错误码" tabindex="-1"><a class="header-anchor" href="#如何设计一套科学的错误码" aria-hidden="true">#</a> 如何设计一套科学的错误码</h2>
<p>现代的软件架构，很多都是对外暴露 RESTful API 接口，内部系统通信采用 RPC 协议。因为 RESTful API 接口有一些天生的优势，比如规范、调试友好、易懂，所以通常作为直接面向用户的通信规范。</p>
<p>既然是直接面向用户，那么首先就要求消息返回格式是规范的；其次，如果接口报错，还要能给用户提供一些有用的报错信息，<strong>通常需要包含 Code 码（用来唯一定位一次错误）和 Message（用来展示出错的信息）</strong>。这就需要我们设计一套规范的、科学的错误码。</p>
<p><strong>对于错误码处理有以下的建议：</strong></p>
<ol>
<li>唯一性：确保每个错误码都是唯一的，这有助于减少混淆和误解。</li>
<li>可读性：尽可能让错误码的含义清晰易懂，以便于程序员或用户快速了解错误的类型和含义。</li>
<li>层级结构：将错误码分为不同的层级结构，以便于根据错误类型进行分类和处理。</li>
<li>简洁性：错误码应该尽可能简短，以节省存储空间并提高处理效率。</li>
<li>可扩展性：考虑到未来可能出现新的错误类型，应该为错误码设计一个可扩展的架构。</li>
<li>易于维护：为了方便维护和管理，建议将错误码统一保存在一个文件或数据库中，以便于更新和维护。</li>
<li>易于定位：错误码应该包含足够的信息，以便于程序员或用户能够快速定位错误的原因和位置。</li>
<li>语义化：错误码应该尽可能地与实际错误相关，以便于程序员或用户更好地理解错误。</li>
</ol>
<h3 id="期望错误码实现的功能" tabindex="-1"><a class="header-anchor" href="#期望错误码实现的功能" aria-hidden="true">#</a> 期望错误码实现的功能</h3>
<p>RESTful API 是基于 HTTP 协议的一系列 API 开发规范，HTTP 请求结束后，无论 API 请求成功或失败，都需要让客户端感知到，以便客户端决定下一步该如何处理。</p>
<p>为了让用户拥有最好的体验，需要有一个比较好的错误码实现方式。这里我介绍下在设计错误码时，期望能够实现的功能。</p>
<p><strong>第一个功能是有业务 Code 码标识。</strong></p>
<p>因为 HTTP Code 码有限，并且都是跟 HTTP Transport 层相关的 Code 码，所以我们希望能有自己的错误 Code 码。一方面，可以根据需要自行扩展，另一方面也能够精准地定位到具体是哪个错误。同时，因为 Code 码通常是对计算机友好的 10 进制整数，基于 Code 码，计算机也可以很方便地进行一些分支处理。当然了，业务码也要有一定规则，可以通过业务码迅速定位出是哪类错误。</p>
<p><strong>第二个功能，考虑到安全，希望能够对外对内分别展示不同的错误信息。</strong></p>
<p>当开发一个对外的系统，业务出错时，需要一些机制告诉用户出了什么错误，如果能够提供一些帮助文档会更好。但是，我们不可能把所有的错误都暴露给外部用户，这不仅没必要，也不安全。所以也需要能让我们获取到更详细的内部错误信息的机制，这些内部错误信息可能包含一些敏感的数据，不宜对外展示，但可以协助我们进行问题定位。</p>
<p>所以，我们需要设计的错误码应该是规范的，能方便客户端感知到 HTTP 是否请求成功，并带有业务码和出错信息。</p>
<h2 id="常见的错误码设计方式" tabindex="-1"><a class="header-anchor" href="#常见的错误码设计方式" aria-hidden="true">#</a> 常见的错误码设计方式</h2>
<p>在业务中，大致有三种错误码实现方式。我用一次因为用户账号没有找到而请求失败的例子，分别给你解释一下：</p>
<p><strong>第一种方式，不论请求成功或失败，始终返回 <code v-pre>200 http status code</code>，在 HTTP Body 中包含用户账号没有找到的错误信息。</strong></p>
<p>例如 Facebook API 的错误 Code 设计，始终返回 200 http status code：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Syntax error \"Field picture specified more than once. This is only possible before version 2.1\" at character 23: id,name,picture,picture"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"OAuthException"</span><span class="token punctuation">,</span>
    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">2500</span><span class="token punctuation">,</span>
    <span class="token property">"fbtrace_id"</span><span class="token operator">:</span> <span class="token string">"xxxxxxxxxxx"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用固定返回200 http status code的方式，有其合理性。比如，HTTP Code 通常代表 HTTP Transport 层的状态信息。当我们收到 HTTP 请求，并返回时，HTTP Transport 层是成功的，所以从这个层面上来看，HTTP Status 固定为 200 也是合理的。</p>
<p>但是这个方式的缺点也很明显：对于每一次请求，我们都要去解析 HTTP Body，从中解析出错误码和错误信息。实际上，大部分情况下，我们对于成功的请求，要么直接转发，要么直接解析到某个结构体中；对于失败的请求，我们也希望能够更直接地感知到请求失败。这种方式对性能会有一定的影响，对客户端不友好。所以我不建议你使用这种方式。</p>
<p><strong>第二种方式，返回http 404 Not Found错误码，并在 Body 中返回简单的错误信息。</strong></p>
<p>例如：Twitter API 的错误设计，会根据错误类型，返回合适的 HTTP Code，并在 Body 中返回错误信息和自定义业务 Code。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">400</span> Bad Request
x-connection-hash<span class="token operator">:</span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
set-cookie<span class="token operator">:</span> guest_id=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Date<span class="token operator">:</span> Thu<span class="token punctuation">,</span> <span class="token number">01</span> Jun <span class="token number">2017</span> <span class="token number">03</span><span class="token operator">:</span><span class="token number">04</span><span class="token operator">:</span><span class="token number">23</span> GMT
Content-Length<span class="token operator">:</span> <span class="token number">62</span>
x-response-time<span class="token operator">:</span> <span class="token number">5</span>
strict-transport-security<span class="token operator">:</span> max-age=<span class="token number">631138519</span>
Connection<span class="token operator">:</span> keep-alive
Content-Type<span class="token operator">:</span> application/json; charset=utf<span class="token number">-8</span>
Server<span class="token operator">:</span> tsa_b

<span class="token punctuation">{</span><span class="token property">"errors"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">"code"</span><span class="token operator">:</span><span class="token number">215</span><span class="token punctuation">,</span><span class="token property">"message"</span><span class="token operator">:</span><span class="token string">"Bad Authentication data."</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式比第一种要好一些，通过http status code可以使客户端非常直接地感知到请求失败，并且提供给客户端一些错误信息供参考。但是仅仅靠这些信息，还不能准确地定位和解决问题。</p>
<p><strong>第三种方式，返回http 404 Not Found错误码，并在 Body 中返回详细的错误信息。</strong></p>
<p>例如：微软 Bing API 的错误设计，会根据错误类型，返回合适的 HTTP Code，并在 Body 中返回详尽的错误信息。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">400</span>
Date<span class="token operator">:</span> Thu<span class="token punctuation">,</span> <span class="token number">01</span> Jun <span class="token number">2017</span> <span class="token number">03</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">55</span> GMT
Content-Length<span class="token operator">:</span> <span class="token number">276</span>
Connection<span class="token operator">:</span> keep-alive
Content-Type<span class="token operator">:</span> application/json; charset=utf<span class="token number">-8</span>
Server<span class="token operator">:</span> Microsoft-IIS/<span class="token number">10.0</span>
X-Content-Type-Options<span class="token operator">:</span> nosniff

<span class="token punctuation">{</span><span class="token property">"SearchResponse"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"Version"</span><span class="token operator">:</span><span class="token string">"2.2"</span><span class="token punctuation">,</span><span class="token property">"Query"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"SearchTerms"</span><span class="token operator">:</span><span class="token string">"api error codes"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">"Errors"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">"Code"</span><span class="token operator">:</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token property">"Message"</span><span class="token operator">:</span><span class="token string">"Required parameter is missing."</span><span class="token punctuation">,</span><span class="token property">"Parameter"</span><span class="token operator">:</span><span class="token string">"SearchRequest.AppId"</span><span class="token punctuation">,</span><span class="token property">"HelpUrl"</span><span class="token operator">:</span><span class="token string">"http\u003a\u002f\u002fmsdn.microsoft.com\u002fen-us\u002flibrary\u002fdd251042.aspx"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是我比较推荐的一种方式，既能通过http status code使客户端方便地知道请求出错，又可以使用户根据返回的信息知道哪里出错，以及如何解决问题。同时，返回了机器友好的业务 Code 码，可以在有需要时让程序进一步判断处理。</p>
<h2 id="错误码设计建议" tabindex="-1"><a class="header-anchor" href="#错误码设计建议" aria-hidden="true">#</a> 错误码设计建议</h2>
<p><strong>综合刚才讲到的，我们可以总结出一套优秀的错误码设计思路：</strong></p>
<ul>
<li>有区别于http status code的业务码，业务码需要有一定规则，可以通过业务码判断出是哪类错误。</li>
<li>请求出错时，可以通过http status code直接感知到请求出错。</li>
<li>需要在请求出错时，返回详细的信息，通常包括 3 类信息：
<ul>
<li>业务 Code 码</li>
<li>错误信息</li>
<li>参考文档（可选）</li>
</ul>
</li>
<li>返回的错误信息，需要是可以直接展示给用户的安全信息，也就是说不能包含敏感信息；同时也要有内部更详细的错误信息，方便 debug。</li>
<li>返回的数据格式应该是固定的、规范的。</li>
<li>错误信息要保持简洁，并且提供有用的信息。</li>
</ul>
<p>这里其实还有两个功能点需要我们实现：业务 Code 码设计，以及请求出错时，如何设置http status code。</p>
<h3 id="业务-code-码设计" tabindex="-1"><a class="header-anchor" href="#业务-code-码设计" aria-hidden="true">#</a> 业务 Code 码设计</h3>
<p>在实际开发中，引入业务Code码有下面几个好处：</p>
<ul>
<li>可以非常方便地定位问题和定位代码行（看到错误码知道什么意思、grep错误码可以定位到错误码所在行、某个错误类型的唯一标识）。</li>
<li>错误码包含一定的信息，通过错误码可以判断出错误级别、错误模块和具体错误信息。</li>
<li>Go中的HTTP服务器开发都是引用 <code v-pre>net/http</code> 包，该包中只有60个错误码，基本都是跟HTTP请求相关的错误码，在一个大型系统中，这些错误码完全不够用，而且这些错误码跟业务没有任何关联，满足不了业务的需求。引入业务的Code码，则可以解决这些问题。</li>
<li>业务开发过程中，可能需要判断错误是哪种类型，以便做相应的逻辑处理，通过定制的错误可以很容易做到这点，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">==</span> code<span class="token punctuation">.</span>ErrBind <span class="token punctuation">{</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要注意，业务Code码可以是一个整数，也可以是一个整型字符串，还可以是一个字符型字符串，它是错误的唯一标识。</p>
<p><strong>⚠️ Code 码设计规范：纯数字表示，不同部位代表不同的服务，不同的模块。</strong></p>
<p><strong>错误代码说明：100101:</strong></p>
<ul>
<li><strong>10:</strong> 服务。</li>
<li><strong>01:</strong> 某个服务下的某个模块。</li>
<li><strong>01:</strong> 模块下的错误码序号，每个模块可以注册100个错误。</li>
</ul>
<p>通过<code v-pre>100101</code>可以知道这个错误是<strong>服务 A</strong>，<strong>数据库</strong>模块下的<strong>记录没有找到错误</strong>。</p>
<blockquote>
<p>你可能会问：按这种设计，每个模块下最多能注册100个错误，是不是有点少？其实在我看来，如果每个模块的错误码超过100个，要么说明这个模块太大了，建议拆分；要么说明错误码设计得不合理，共享性差，需要重新设计。</p>
</blockquote>
<h3 id="如何设置http-status-code" tabindex="-1"><a class="header-anchor" href="#如何设置http-status-code" aria-hidden="true">#</a> 如何设置HTTP Status Code</h3>
<p><strong>Go net/http包提供了60个错误码</strong>，大致分为如下5类：</p>
<ul>
<li><code v-pre>1XX -</code> （指示信息）表示请求已接收，继续处理。</li>
<li><code v-pre>2XX -</code> （请求成功）表示成功处理了请求的状态代码。</li>
<li><code v-pre>3XX -</code> （请求被重定向）表示要完成请求，需要进一步操作。通常，这些状态代码用来重定向。</li>
<li><code v-pre>4XX -</code> （请求错误）这些状态代码表示请求可能出错，妨碍了服务器的处理，通常是客户端出错，需要客户端做进一步的处理。</li>
<li><code v-pre>5XX -</code> （服务器错误）这些状态代码表示服务器在尝试处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是客户端的问题。</li>
</ul>
<p>可以看到HTTP Code有很多种，如果每个Code都做错误映射，会面临很多问题。比如，研发同学不太好判断错误属于哪种<code v-pre>http status code</code>，到最后很可能会导致错误或者<code v-pre>http status code</code>不匹配，变成一种形式。而且，客户端也难以应对这么多的HTTP错误码。</p>
<p>所以，这里建议<code v-pre>http status code</code>不要太多，基本上只需要这3个HTTP Code:</p>
<ul>
<li>200 - 表示请求成功执行。</li>
<li>400 - 表示客户端出问题。</li>
<li>500 - 表示服务端出问题。</li>
</ul>
<p><strong>如果觉得这3个错误码不够用，最多可以加如下3个错误码：</strong></p>
<ul>
<li>401 - 表示认证失败。</li>
<li>403 - 表示授权失败。</li>
<li>404 - 表示资源找不到，这里的资源可以是<code v-pre>URL</code>或者<code v-pre>RESTful</code>资源。</li>
</ul>
<p>将错误码控制在适当的数目内，客户端比较容易处理和判断，开发也比较容易进行错误码映射。</p>
<h2 id="iam项目错误码设计规范" tabindex="-1"><a class="header-anchor" href="#iam项目错误码设计规范" aria-hidden="true">#</a> IAM项目错误码设计规范</h2>
<p>接下来，我们来看下IAM项目的错误码是如何设计的。</p>
<h3 id="code-设计规范" tabindex="-1"><a class="header-anchor" href="#code-设计规范" aria-hidden="true">#</a> Code 设计规范</h3>
<p>先来看下IAM项目业务的Code码设计规范，具体实现可参考<a href="https://github.com/marmotedu/iam/tree/master/internal/pkg/code" target="_blank" rel="noopener noreferrer">internal/pkg/code目录<ExternalLinkIcon/></a>。IAM项目的错误码设计规范符合上面介绍的错误码设计思路和规范，具体规范见下。</p>
<p>Code 代码从 <strong>100001</strong> 开始，1000 以下为 <code v-pre>github.com/marmotedu/errors</code> 保留 code。</p>
<blockquote>
<p>比如错误代码100101，其中 10 代表服务；中间的 01 代表某个服务下的某个模块；最后的 01 代表模块下的错误码序号，每个模块可以注册 100 个错误。</p>
</blockquote>
<p><strong>错误代码说明：</strong><code v-pre>100001</code></p>
<p><img src="http://sm.nsddd.top/sm202302212227600.png" alt="image-20230221222717542"></p>
<p><strong>服务和模块说明</strong></p>
<p><img src="http://sm.nsddd.top/sm202302212229011.png" alt="img">
<strong>通用：说明所有服务都适用的错误，提高复用性，避免重复造轮子。</strong></p>
<p><strong>错误信息规范说明</strong></p>
<ul>
<li>对外暴露的错误，统一大写开头，结尾不要加<code v-pre>.</code>。</li>
<li>对外暴露的错误要简洁，并能准确说明问题。</li>
<li>对外暴露的错误说明，应该是 <code v-pre>该怎么做</code> 而不是 <code v-pre>哪里错了</code>。</li>
</ul>
<p>这里你需要注意，错误信息是直接暴露给用户的，不能包含敏感信息。</p>
<h3 id="iam-api接口返回值说明" tabindex="-1"><a class="header-anchor" href="#iam-api接口返回值说明" aria-hidden="true">#</a> IAM API接口返回值说明</h3>
<p>如果返回结果中存在 <code v-pre>code</code> 字段，则表示调用 API 接口失败。例如：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">100101</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Database error"</span><span class="token punctuation">,</span>
  <span class="token property">"reference"</span><span class="token operator">:</span> <span class="token string">"https://github.com/marmotedu/iam/tree/master/docs/guide/zh-CN/faq/iam-apiserver"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述返回中 <code v-pre>code</code> 表示错误码，<code v-pre>message</code> 表示该错误的具体信息。每个错误同时也对应一个 HTTP 状态码。比如上述错误码对应了 HTTP 状态码 <code v-pre>500(Internal Server Error)</code>。另外，在出错时，也返回了<code v-pre>reference</code>字段，该字段包含了可以解决这个错误的文档链接地址。</p>
<p>关于IAM 系统支持的错误码，我给你列了一个表格，你可以看看：</p>
<p><img src="http://sm.nsddd.top/sm202302212230006.png" alt="image-20230221223015911"></p>
<p><img src="http://sm.nsddd.top/sm202302212230302.png" alt="image-20230221223033185"></p>
<h2 id="如何设计错误包" tabindex="-1"><a class="header-anchor" href="#如何设计错误包" aria-hidden="true">#</a> 如何设计错误包</h2>
<p>在 Go 项目开发中，错误是我们必须要处理的一个事项。除了我们上一讲学习过的错误码，处理错误也离不开错误包。</p>
<p>业界有很多优秀的、开源的错误包可供选择，例如 Go 标准库自带的errors包、<code v-pre>github.com/pkg/errors</code>包。但是这些包目前还不支持业务错误码，很难满足生产级应用的需求。所以，在实际开发中，我们有必要开发出适合自己错误码设计的错误包。当然，<strong>我们也没必要自己从 0 开发，可以基于一些优秀的包来进行二次封装。</strong></p>
<p>要想设计一个优秀的错误包，我们首先得知道一个优秀的错误包需要具备哪些功能。在我看来，至少需要有下面这六个功能：</p>
<p>**首先，应该能支持错误堆栈。**我们来看下面一段代码，假设保存在<a href="https://github.com/marmotedu/gopractise-demo/blob/master/errors/bad.go" target="_blank" rel="noopener noreferrer">bad.go<ExternalLinkIcon/></a>文件中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"log"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"call func got failed: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"call func success"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"func called error"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"func called error"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>执行上面的代码</strong>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run bad.go
<span class="token number">2021</span>/07/02 08:06:55 call func got failed: func called error
<span class="token builtin class-name">exit</span> status <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时我们想定位问题，但不知道具体是哪行代码报的错误，只能靠猜，还不一定能猜到。为了解决这个问题，我们可以加一些Debug信息，来协助我们定位问题。这样做在测试环境是没问题的，但是在线上环境，一方面修改、发布都比较麻烦，另一方面问题可能比较难重现。这时候我们会想，要是能打印错误的堆栈就好了。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token number">2021</span>/07/02 <span class="token number">14</span>:17:03 call func got failed: func called error
main.funcB
  /home/colin/workspace/golang/src/github.com/marmotedu/gopractise-demo/errors/good.go:27
main.funcA
  /home/colin/workspace/golang/src/github.com/marmotedu/gopractise-demo/errors/good.go:19
main.main
  /home/colin/workspace/golang/src/github.com/marmotedu/gopractise-demo/errors/good.go:10
runtime.main
  /home/colin/go/go1.16.2/src/runtime/proc.go:225
runtime.goexit
  /home/colin/go/go1.16.2/src/runtime/asm_amd64.s:1371
<span class="token builtin class-name">exit</span> status <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的错误输出，我们可以很容易地知道是哪行代码报的错，从而极大提高问题定位的效率，降低定位的难度。所以，在我看来，一个优秀的errors包，首先需要支持错误堆栈。</p>
<p>**其次，能够支持不同的打印格式。**例如<code v-pre>%+v</code>、<code v-pre>%v</code>、<code v-pre>%s</code>等格式，可以根据需要打印不同丰富度的错误信息。</p>
<p>**再次，能支持Wrap/Unwrap功能，也就是在已有的错误上，追加一些新的信息。**例如<code v-pre>errors.Wrap(err, &quot;open file failed&quot;)</code> 。Wrap通常用在调用函数中，调用函数可以基于被调函数报错时的错误Wrap一些自己的信息，丰富报错信息，方便后期的错误定位，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">Wrap</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"call funcB failed"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"func called error"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"func called error"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要注意，不同的错误类型，Wrap函数的逻辑也可以不同。另外，在调用Wrap时，也会生成一个错误堆栈节点。我们既然能够嵌套error，那有时候还可能需要获取被嵌套的error，这时就需要错误包提供<code v-pre>Unwrap</code>函数。</p>
<p><strong>还有，错误包应该有<code v-pre>Is</code>方法</strong>。在实际开发中，我们经常需要判断某个error是否是指定的error。在Go 1.13之前，也就是没有wrapping error的时候，我们要判断error是不是同一个，可以使用如下方法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">==</span> os<span class="token punctuation">.</span>ErrNotExist <span class="token punctuation">{</span>	<span class="token comment">// normal code}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是现在，因为有了wrapping error，这样判断就会有问题。因为你根本不知道返回的err是不是一个嵌套的error，嵌套了几层。这种情况下，我们的错误包就需要提供<code v-pre>Is</code>函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> target <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当err和target是同一个，或者err是一个wrapping error的时候，如果target也包含在这个嵌套error链中，返回true，否则返回fasle。</p>
<p><strong>另外，错误包应该支持</strong> <code v-pre>As</code> <strong>函数。</strong></p>
<p>在Go 1.13之前，没有wrapping error的时候，我们要把error转为另外一个error，一般都是使用type assertion或者type switch，也就是类型断言。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> perr<span class="token punctuation">,</span> ok <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>os<span class="token punctuation">.</span>PathError<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>perr<span class="token punctuation">.</span>Path<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是现在，返回的err可能是嵌套的error，甚至好几层嵌套，这种方式就不能用了。所以，我们可以通过实现 <code v-pre>As</code> 函数来完成这种功能。现在我们把上面的例子，用 <code v-pre>As</code> 函数实现一下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> perr <span class="token operator">*</span>os<span class="token punctuation">.</span>PathError
<span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">As</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token operator">&amp;</span>perr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>perr<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以完全实现类型断言的功能，而且还更强大，因为它可以处理 <code v-pre>wrapping error</code>。</p>
<p>**最后，能够支持两种错误创建方式：非格式化创建和格式化创建。**例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"file not found"</span><span class="token punctuation">)</span>
errors<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"file %s not found"</span><span class="token punctuation">,</span> <span class="token string">"iam-apiserver"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面，我们介绍了一个优秀的错误包应该具备的功能。一个好消息是，Github上有不少实现了这些功能的错误包，其中<code v-pre>github.com/pkg/errors</code>包最受欢迎。所以，我基于<code v-pre>github.com/pkg/errors</code>包进行了二次封装，用来支持上一讲所介绍的错误码。</p>
<h2 id="错误包实现" tabindex="-1"><a class="header-anchor" href="#错误包实现" aria-hidden="true">#</a> 错误包实现</h2>
<p>明确优秀的错误包应该具备的功能后，我们来看下错误包的实现。实现的源码存放在<a href="https://github.com/marmotedu/errors" target="_blank" rel="noopener noreferrer">github.com/marmotedu/errors<ExternalLinkIcon/></a>。</p>
<p>我通过在文件<a href="https://github.com/marmotedu/errors/blob/master/errors.go#L299" target="_blank" rel="noopener noreferrer">github.com/pkg/errors/errors.go<ExternalLinkIcon/></a>中增加新的<code v-pre>withCode</code>结构体，来引入一种新的错误类型，该错误类型可以记录错误码、stack、cause和具体的错误信息。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> withCode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    err   <span class="token builtin">error</span> <span class="token comment">// error 错误</span>
    code  <span class="token builtin">int</span> <span class="token comment">// 业务错误码</span>
    cause <span class="token builtin">error</span> <span class="token comment">// cause error</span>
    <span class="token operator">*</span>stack <span class="token comment">// 错误堆栈</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面，我们通过一个示例，来了解下<code v-pre>github.com/marmotedu/errors</code>所提供的功能。假设下述代码保存在<code v-pre>errors.go</code>文件中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>

  <span class="token string">"github.com/marmotedu/errors"</span>
  code <span class="token string">"github.com/marmotedu/sample-code"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">bindUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// %s: Returns the user-safe error string mapped to the error code or the error message if none is specified.</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"====================> %s &lt;===================="</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s\n\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">// %v: Alias for %s.</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"====================> %v &lt;===================="</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v\n\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">// %-v: Output caller details, useful for troubleshooting.</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"====================> %-v &lt;===================="</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%-v\n\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">// %+v: Output full error stack details, useful for debugging.</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"====================> %+v &lt;===================="</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%+v\n\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">// %#-v: Output caller details, useful for troubleshooting with JSON formatted output.</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"====================> %#-v &lt;===================="</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#-v\n\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">// %#+v: Output full error stack details, useful for debugging with JSON formatted output.</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"====================> %#+v &lt;===================="</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#+v\n\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">// do some business process based on the error type</span>
    <span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">IsCode</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> code<span class="token punctuation">.</span>ErrEncodingFailed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"this is a ErrEncodingFailed error"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">IsCode</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"this is a ErrDatabase error"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// we can also find the cause error</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span><span class="token function">Cause</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">bindUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// Step3: Wrap the error with a new error message and a new error code if needed.</span>
    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">WrapC</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> code<span class="token punctuation">.</span>ErrEncodingFailed<span class="token punctuation">,</span> <span class="token string">"encoding user 'Lingfei Kong' failed."</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">queryDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// Step2: Wrap the error with a new error message.</span>
    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">Wrap</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"get user failed."</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">queryDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token comment">// Step1. Create error with specified error code.</span>
  <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> <span class="token string">"user 'Lingfei Kong' not found."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，通过<a href="https://github.com/marmotedu/errors/blob/v1.0.2/errors.go#L306" target="_blank" rel="noopener noreferrer">WithCode<ExternalLinkIcon/></a>函数来创建新的withCode类型的错误；通过<a href="https://github.com/marmotedu/errors/blob/v1.0.2/errors.go#L314" target="_blank" rel="noopener noreferrer">WrapC<ExternalLinkIcon/></a>来将一个error封装成一个withCode类型的错误；通过<a href="https://github.com/marmotedu/errors/blob/v1.0.2/code.go#L121" target="_blank" rel="noopener noreferrer">IsCode<ExternalLinkIcon/></a>来判断一个error链中是否包含指定的code。</p>
<p>withCode错误实现了一个<code v-pre>func (w *withCode) Format(state fmt.State, verb rune)</code>方法，该方法用来打印不同格式的错误信息，见下表：</p>
<p><img src="http://sm.nsddd.top/sm202302212256819.png" alt="image-20230221225636739"></p>
<p>例如，<code v-pre>%+v</code>会打印以下错误信息：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>get user failed<span class="token punctuation">.</span> <span class="token operator">-</span> #<span class="token number">1</span> <span class="token punctuation">[</span><span class="token operator">/</span>home<span class="token operator">/</span>colin<span class="token operator">/</span>workspace<span class="token operator">/</span>golang<span class="token operator">/</span>src<span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>marmotedu<span class="token operator">/</span>gopractise<span class="token operator">-</span>demo<span class="token operator">/</span>errors<span class="token operator">/</span>errortrack_errors<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">19</span> <span class="token punctuation">(</span>main<span class="token punctuation">.</span>getUser<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">100101</span><span class="token punctuation">)</span> Database <span class="token builtin">error</span><span class="token punctuation">;</span> user 'Lingfei Kong' not found<span class="token punctuation">.</span> <span class="token operator">-</span> #<span class="token number">0</span> <span class="token punctuation">[</span><span class="token operator">/</span>home<span class="token operator">/</span>colin<span class="token operator">/</span>workspace<span class="token operator">/</span>golang<span class="token operator">/</span>src<span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>marmotedu<span class="token operator">/</span>gopractise<span class="token operator">-</span>demo<span class="token operator">/</span>errors<span class="token operator">/</span>errortrack_errors<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">26</span> <span class="token punctuation">(</span>main<span class="token punctuation">.</span>queryDatabase<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">100101</span><span class="token punctuation">)</span> Database <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么你可能会问，这些错误信息中的<code v-pre>100101</code>错误码，还有<code v-pre>Database error</code>这种对外展示的报错信息等等，是从哪里获取的？这里我简单解释一下。</p>
<p>首先， <code v-pre>withCode</code> 中包含了int类型的错误码，例如<code v-pre>100101</code>。</p>
<p>其次，当使用<code v-pre>github.com/marmotedu/errors</code>包的时候，需要调用<code v-pre>Register</code>或者<code v-pre>MustRegister</code>，将一个Coder注册到<code v-pre>github.com/marmotedu/errors</code>开辟的内存中，数据结构为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var codes = map[int]Coder{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Coder是一个接口，定义为：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> Coder <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token comment">// HTTP status that should be used for the associated error code.</span>
    <span class="token function">HTTPStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>

    <span class="token comment">// External (user) facing error text.</span>
    <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>

    <span class="token comment">// Reference returns the detail documents for user.</span>
    <span class="token function">Reference</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>

    <span class="token comment">// Code returns the code of the coder</span>
    <span class="token function">Code</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样 <code v-pre>withCode</code> 的<code v-pre>Format</code>方法，就能够通过 <code v-pre>withCode</code> 中的code字段获取到对应的Coder，并通过Coder提供的HTTPStatus、String、Reference、Code函数，来获取 <code v-pre>withCode</code> 中code的详细信息，最后格式化打印。</p>
<p><strong>这里要注意，我们实现了两个注册函数：<code v-pre>Register</code>和<code v-pre>MustRegister</code>，二者唯一区别是：当重复定义同一个错误Code时，<code v-pre>MustRegister</code>会panic，这样可以防止后面注册的错误覆盖掉之前注册的错误。在实际开发中，建议使用<code v-pre>MustRegister</code>。</strong></p>
<p><code v-pre>XXX()</code>和<code v-pre>MustXXX()</code>的函数命名方式，是一种Go代码设计技巧，在Go代码中经常使用，例如Go标准库中<code v-pre>regexp</code>包提供的<code v-pre>Compile</code>和<code v-pre>MustCompile</code>函数。和<code v-pre>XXX</code>相比，<code v-pre>MustXXX</code> 会在某种情况不满足时panic。因此使用<code v-pre>MustXXX</code>的开发者看到函数名就会有一个心理预期：使用不当，会造成程序panic。</p>
<p>最后，我还有一个建议：在实际的生产环境中，我们可以使用JSON格式打印日志，JSON格式的日志可以非常方便的供日志系统解析。我们可以根据需要，选择<code v-pre>%#-v</code>或<code v-pre>%#+v</code>两种格式。</p>
<p>错误包在代码中，经常被调用，所以我们要保证错误包一定要是高性能的，否则很可能会影响接口的性能。这里，我们再来看下<code v-pre>github.com/marmotedu/errors</code>包的性能。</p>
<p>在这里，我们把这个错误包跟go标准库的 <code v-pre>errors</code> 包，以及 <code v-pre>github.com/pkg/errors</code> 包进行对比，来看看它们的性能：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$  go <span class="token builtin class-name">test</span> <span class="token parameter variable">-test.bench</span><span class="token operator">=</span>BenchmarkErrors <span class="token parameter variable">-benchtime</span><span class="token operator">=</span><span class="token string">"3s"</span>
goos: linux
goarch: amd64
pkg: github.com/marmotedu/errors
BenchmarkErrors/errors-stack-10-8           <span class="token number">57658672</span>          <span class="token number">61.8</span> ns/op        <span class="token number">16</span> B/op         <span class="token number">1</span> allocs/op
BenchmarkErrors/pkg/errors-stack-10-8        <span class="token number">2265558</span>        <span class="token number">1547</span> ns/op       <span class="token number">320</span> B/op         <span class="token number">3</span> allocs/op
BenchmarkErrors/marmot/errors-stack-10-8     <span class="token number">1903532</span>        <span class="token number">1772</span> ns/op       <span class="token number">360</span> B/op         <span class="token number">5</span> allocs/op
BenchmarkErrors/errors-stack-100-8           <span class="token number">4883659</span>         <span class="token number">734</span> ns/op        <span class="token number">16</span> B/op         <span class="token number">1</span> allocs/op
BenchmarkErrors/pkg/errors-stack-100-8       <span class="token number">1202797</span>        <span class="token number">2881</span> ns/op       <span class="token number">320</span> B/op         <span class="token number">3</span> allocs/op
BenchmarkErrors/marmot/errors-stack-100-8    <span class="token number">1000000</span>        <span class="token number">3116</span> ns/op       <span class="token number">360</span> B/op         <span class="token number">5</span> allocs/op
BenchmarkErrors/errors-stack-1000-8           <span class="token number">505636</span>        <span class="token number">7159</span> ns/op        <span class="token number">16</span> B/op         <span class="token number">1</span> allocs/op
BenchmarkErrors/pkg/errors-stack-1000-8       <span class="token number">327681</span>       <span class="token number">10646</span> ns/op       <span class="token number">320</span> B/op         <span class="token number">3</span> allocs/op
BenchmarkErrors/marmot/errors-stack-1000-8             <span class="token number">304160</span>       <span class="token number">11896</span> ns/op       <span class="token number">360</span> B/op         <span class="token number">5</span> allocs/op
PASS
ok    github.com/marmotedu/errors  <span class="token number">39</span>.200s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code v-pre>github.com/marmotedu/errors</code>和<code v-pre>github.com/pkg/errors</code>包的性能基本持平。在对比性能时，重点关注<strong>ns/op</strong>，也即每次error操作耗费的纳秒数。另外，我们还需要测试不同error嵌套深度下的error操作性能，嵌套越深，性能越差。例如：在嵌套深度为10的时候， <code v-pre>github.com/pkg/errors</code> 包 <code v-pre>ns/op</code> 值为1547， <code v-pre>github.com/marmotedu/errors</code> 包 <code v-pre>ns/op</code>  值为1772。可以看到，二者性能基本保持一致。</p>
<p>具体性能数据对比见下表：</p>
<p><img src="http://sm.nsddd.top/sm202302212258478.png" alt="imgasdfas"></p>
<p>我们是通过<a href="https://github.com/marmotedu/errors/blob/v1.0.2/bench_test.go#L39" target="_blank" rel="noopener noreferrer">BenchmarkErrors<ExternalLinkIcon/></a>测试函数来测试error包性能的，你感兴趣可以打开链接看看。</p>
<h2 id="如何记录错误" tabindex="-1"><a class="header-anchor" href="#如何记录错误" aria-hidden="true">#</a> 如何记录错误？</h2>
<p>上面，我们一起看了怎么设计一个优秀的错误包，那如何用我们设计的错误包来记录错误呢？</p>
<p>根据我的开发经验，我推荐两种记录错误的方式，可以帮你快速定位问题。</p>
<p>方式一：通过<code v-pre>github.com/marmotedu/errors</code>包提供的错误堆栈能力，来跟踪错误。</p>
<p>具体你可以看看下面的代码示例。以下代码保存在<a href="https://github.com/marmotedu/gopractise-demo/blob/master/errors/errortrack_errors.go" target="_blank" rel="noopener noreferrer">errortrack_errors.go<ExternalLinkIcon/></a>中。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>

  <span class="token string">"github.com/marmotedu/errors"</span>

  code <span class="token string">"github.com/marmotedu/sample-code"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%+v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">queryDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">Wrap</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"get user failed."</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">queryDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> <span class="token string">"user 'Lingfei Kong' not found."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述的代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run errortrack_errors.go
get user failed. - <span class="token comment">#1 [/home/colin/workspace/golang/src/github.com/marmotedu/gopractise-demo/errors/errortrack_errors.go:19 (main.getUser)] (100101) Database error; user 'Lingfei Kong' not found. - #0 [/home/colin/workspace/golang/src/github.com/marmotedu/gopractise-demo/errors/errortrack_errors.go:26 (main.queryDatabase)] (100101) Database error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，打印的日志中打印出了详细的错误堆栈，包括错误发生的函数、文件名、行号和错误信息，通过这些错误堆栈，我们可以很方便地定位问题。</p>
<p>你使用这种方法时，我推荐的用法是，在错误最开始处使用 <code v-pre>errors.WithCode()</code> 创建一个 withCode类型的错误。上层在处理底层返回的错误时，可以根据需要，使用Wrap函数基于该错误封装新的错误信息。如果要包装的error不是用<code v-pre>github.com/marmotedu/errors</code>包创建的，建议用 <code v-pre>errors.WithCode()</code> 新建一个error。</p>
<p>方式二：在错误产生的最原始位置调用日志包记录函数，打印错误信息，其他位置直接返回（当然，也可以选择性的追加一些错误信息，方便故障定位）。示例代码（保存在<a href="https://github.com/marmotedu/gopractise-demo/blob/master/errors/errortrack_log.go" target="_blank" rel="noopener noreferrer">errortrack_log.go<ExternalLinkIcon/></a>）如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>

  <span class="token string">"github.com/marmotedu/errors"</span>
  <span class="token string">"github.com/marmotedu/log"</span>

  code <span class="token string">"github.com/marmotedu/sample-code"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">queryDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">queryDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  opts <span class="token operator">:=</span> <span class="token operator">&amp;</span>log<span class="token punctuation">.</span>Options<span class="token punctuation">{</span>
    Level<span class="token punctuation">:</span>            <span class="token string">"info"</span><span class="token punctuation">,</span>
    Format<span class="token punctuation">:</span>           <span class="token string">"console"</span><span class="token punctuation">,</span>
    EnableColor<span class="token punctuation">:</span>      <span class="token boolean">true</span><span class="token punctuation">,</span>
    EnableCaller<span class="token punctuation">:</span>     <span class="token boolean">true</span><span class="token punctuation">,</span>
    OutputPaths<span class="token punctuation">:</span>      <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"test.log"</span><span class="token punctuation">,</span> <span class="token string">"stdout"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    ErrorOutputPaths<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  log<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span>
  <span class="token keyword">defer</span> log<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  err <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> <span class="token string">"user 'Lingfei Kong' not found."</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"%v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run errortrack_log.go
<span class="token number">2021</span>-07-03 <span class="token number">14</span>:37:31.597  ERROR  errors/errortrack_log.go:41  Database error
Database error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当错误发生时，调用log包打印错误。通过log包的caller功能，可以定位到log语句的位置，也就是定位到错误发生的位置。你使用这种方式来打印日志时，我有两个建议。</p>
<ul>
<li>只在错误产生的最初位置打印日志，其他地方直接返回错误，一般不需要再对错误进行封装。</li>
<li>当代码调用第三方包的函数时，第三方包函数出错时打印错误信息。比如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Chdir</span><span class="token punctuation">(</span><span class="token string">"/root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>    log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"change dir failed: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="一个错误码的具体实现" tabindex="-1"><a class="header-anchor" href="#一个错误码的具体实现" aria-hidden="true">#</a> 一个错误码的具体实现</h2>
<p>接下来，我们看一个依据上一讲介绍的错误码规范的具体错误码实现<code v-pre>github.com/marmotedu/sample-code</code>。</p>
<p><code v-pre>sample-code</code>实现了两类错误码，分别是通用错误码（<a href="https://github.com/marmotedu/sample-code/blob/master/base.go" target="_blank" rel="noopener noreferrer">sample-code/base.go<ExternalLinkIcon/></a>）和业务模块相关的错误码（<a href="https://github.com/marmotedu/sample-code/blob/master/apiserver.go" target="_blank" rel="noopener noreferrer">sample-code/apiserver.go<ExternalLinkIcon/></a>）。</p>
<p>首先，我们来看通用错误码的定义：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// 通用: 基本错误</span>
<span class="token comment">// Code must start with 1xxxxx</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    <span class="token comment">// ErrSuccess - 200: OK.</span>
    ErrSuccess <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">100001</span>

    <span class="token comment">// ErrUnknown - 500: Internal server error.</span>
    ErrUnknown

    <span class="token comment">// ErrBind - 400: Error occurred while binding the request body to the struct.</span>
    ErrBind

    <span class="token comment">// ErrValidation - 400: Validation failed.</span>
    ErrValidation

    <span class="token comment">// ErrTokenInvalid - 401: Token invalid.</span>
    ErrTokenInvalid
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在代码中，我们通常使用整型常量（ErrSuccess）来代替整型错误码（100001），因为使用ErrSuccess时，一看就知道它代表的错误类型，可以方便开发者使用。</p>
<p>错误码用来指代一个错误类型，该错误类型需要包含一些有用的信息，例如对应的HTTP Status Code、对外展示的Message，以及跟该错误匹配的帮助文档。所以，我们还需要实现一个Coder来承载这些信息。这里，我们定义了一个实现了<code v-pre>github.com/marmotedu/errors.Coder</code>接口的<code v-pre>ErrCode</code>结构体：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// ErrCode implements `github.com/marmotedu/errors`.Coder interface.</span>
<span class="token keyword">type</span> ErrCode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// C refers to the code of the ErrCode.</span>
    C <span class="token builtin">int</span>

    <span class="token comment">// HTTP status that should be used for the associated error code.</span>
    HTTP <span class="token builtin">int</span>

    <span class="token comment">// External (user) facing error text.</span>
    Ext <span class="token builtin">string</span>

    <span class="token comment">// Ref specify the reference document.</span>
    Ref <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code v-pre>ErrCode</code>结构体包含了以下信息：</p>
<ul>
<li>int类型的业务码。</li>
<li>对应的HTTP Status Code。</li>
<li>暴露给外部用户的消息。</li>
<li>错误的参考文档。</li>
</ul>
<p>下面是一个具体的Coder示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>coder <span class="token operator">:=</span> <span class="token operator">&amp;</span>ErrCode<span class="token punctuation">{</span>
    C<span class="token punctuation">:</span>    <span class="token number">100001</span><span class="token punctuation">,</span>
    HTTP<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    Ext<span class="token punctuation">:</span>  <span class="token string">"OK"</span><span class="token punctuation">,</span>
    Ref<span class="token punctuation">:</span>  <span class="token string">"https://github.com/marmotedu/sample-code/blob/master/README.md"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们就可以调用<code v-pre>github.com/marmotedu/errors</code>包提供的<code v-pre>Register</code>或者<code v-pre>MustRegister</code>函数，将Coder注册到<code v-pre>github.com/marmotedu/errors</code>包维护的内存中。</p>
<p>一个项目有很多个错误码，如果每个错误码都手动调用<code v-pre>MustRegister</code>函数会很麻烦，这里我们通过代码自动生成的方法，来生成register函数调用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>//go:generate codegen <span class="token parameter variable">-type</span><span class="token operator">=</span>int
//go:generate codegen <span class="token parameter variable">-type</span><span class="token operator">=</span>int <span class="token parameter variable">-doc</span> <span class="token parameter variable">-output</span> ./error_code_generated.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>//go:generate codegen -type=int</code> 会调用<a href="https://github.com/marmotedu/iam/tree/master/tools/codegen" target="_blank" rel="noopener noreferrer">codegen<ExternalLinkIcon/></a>工具，生成<a href="https://github.com/marmotedu/sample-code/blob/master/sample_code_generated.go" target="_blank" rel="noopener noreferrer">sample_code_generated.go<ExternalLinkIcon/></a>源码文件：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">register</span><span class="token punctuation">(</span>ErrSuccess<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">"OK"</span><span class="token punctuation">)</span>
  <span class="token function">register</span><span class="token punctuation">(</span>ErrUnknown<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">"Internal server error"</span><span class="token punctuation">)</span>
  <span class="token function">register</span><span class="token punctuation">(</span>ErrBind<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">"Error occurred while binding the request body to the struct"</span><span class="token punctuation">)</span>
  <span class="token function">register</span><span class="token punctuation">(</span>ErrValidation<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">"Validation failed"</span><span class="token punctuation">)</span>
    <span class="token comment">// other register function call</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些<a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/pkg/code/code.go#L58" target="_blank" rel="noopener noreferrer">register<ExternalLinkIcon/></a>调用放在init函数中，在加载程序的时候被初始化。</p>
<p>这里要注意，在注册的时候，我们会检查HTTP Status Code，只允许定义200、400、401、403、404、500这6个HTTP错误码。这里通过程序保证了错误码是符合HTTP Status Code使用要求的。</p>
<p><code v-pre>//go:generate codegen -type=int -doc -output ./error_code_generated.md</code>会生成错误码描述文档 <a href="https://github.com/marmotedu/sample-code/blob/master/error_code_generated.md" target="_blank" rel="noopener noreferrer">error_code_generated.md<ExternalLinkIcon/></a>。当我们提供API文档时，也需要记着提供一份错误码描述文档，这样客户端才可以根据错误码，知道请求是否成功，以及具体发生哪类错误，好针对性地做一些逻辑处理。</p>
<p><code v-pre>codegen</code>工具会根据错误码注释生成<code v-pre>sample_code_generated.go</code>和<code v-pre>error_code_generated.md</code>文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// ErrSuccess - <span class="token number">200</span>: OK. ErrSuccess int <span class="token operator">=</span> iota + <span class="token number">100001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>codegen工具之所以能够生成<code v-pre>sample_code_generated.go</code>和<code v-pre>error_code_generated.md</code>，是因为我们的错误码注释是有规定格式的：<code v-pre>// &lt;错误码整型常量&gt; - &lt;对应的HTTP Status Code&gt;: &lt;External Message&gt;.</code>。</p>
<p>codegen工具可以在IAM项目根目录下，执行以下命令来安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> tools.install.codegen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完 <code v-pre>codegen</code> 工具后，可以在 <code v-pre>github.com/marmotedu/sample-code</code> 包根目录下执行 <code v-pre>go generate</code> 命令，来生成<code v-pre>sample_code_generated.go</code>和<code v-pre>error_code_generated.md</code>。这里有个技巧需要你注意：生成的文件建议统一用 <code v-pre>xxxx_generated.xx</code> 来命名，这样通过 <code v-pre>generated</code> ，我们就知道这个文件是代码自动生成的，有助于我们理解和使用。</p>
<p>在实际的开发中，我们可以将错误码独立成一个包，放在 <code v-pre>internal/pkg/code/</code>目录下，这样可以方便整个应用调用。例如IAM的错误码就放在IAM项目根目录下的<a href="https://github.com/marmotedu/iam/tree/master/internal/pkg/code" target="_blank" rel="noopener noreferrer">internal/pkg/code/<ExternalLinkIcon/></a>目录下。</p>
<p>我们的错误码是分服务和模块的，所以这里建议你把相同的服务放在同一个Go源文件中，例如IAM的错误码存放文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ls</span> base.go apiserver.go authzserver.go apiserver.go  authzserver.go  base.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个应用中会有多个服务，例如IAM应用中，就包含了<code v-pre>iam-apiserver</code>、<code v-pre>iam-authz-server</code>、<code v-pre>iam-pump</code>三个服务。这些服务有一些通用的错误码，为了便于维护，可以将这些通用的错误码统一放在<code v-pre>base.go</code>源码文件中。其他的错误码，我们可以按服务分别放在不同的文件中：<code v-pre>iam-apiserver</code>服务的错误码统一放在<code v-pre>apiserver.go</code>文件中；<code v-pre>iam-authz-server</code>的错误码统一存放在<code v-pre>authzserver.go</code>文件中。其他服务以此类推。</p>
<p>另外，同一个服务中不同模块的错误码，可以按以下格式来组织：相同模块的错误码放在同一个<code v-pre>const</code>代码块中，不同模块的错误码放在不同的const代码块中。每个const代码块的开头注释就是该模块的错误码定义。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// iam-apiserver: user errors.</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    <span class="token comment">// ErrUserNotFound - 404: User not found.</span>
    ErrUserNotFound <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">110001</span>

    <span class="token comment">// ErrUserAlreadyExist - 400: User already exist.</span>
    ErrUserAlreadyExist
<span class="token punctuation">)</span>

<span class="token comment">// iam-apiserver: secret errors.</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    <span class="token comment">// ErrEncrypt - 400: Secret reach the max count.</span>
    ErrReachMaxCount <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">110101</span>

    <span class="token comment">//  ErrSecretNotFound - 404: Secret not found.</span>
    ErrSecretNotFound
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，我们还需要将错误码定义记录在项目的文件中，供开发者查阅、遵守和使用，例如IAM项目的错误码定义记录文档为<a href="https://github.com/marmotedu/iam/blob/master/docs/guide/zh-CN/api/code_specification.md" target="_blank" rel="noopener noreferrer">code_specification.md<ExternalLinkIcon/></a>。这个文档中记录了错误码说明、错误描述规范和错误记录规范等。</p>
<h2 id="错误码实际使用方法示例" tabindex="-1"><a class="header-anchor" href="#错误码实际使用方法示例" aria-hidden="true">#</a> 错误码实际使用方法示例</h2>
<p>上面，我讲解了错误包和错误码的实现方式，那你一定想知道在实际开发中我们是如何使用的。这里，我就举一个在gin web框架中使用该错误码的例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Response defines project response format which in marmotedu organization.</span>
<span class="token keyword">type</span> Response <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Code      errors<span class="token punctuation">.</span>Code <span class="token string">`json:"code,omitempty"`</span>
    Message   <span class="token builtin">string</span>      <span class="token string">`json:"message,omitempty"`</span>
    Reference <span class="token builtin">string</span>      <span class="token string">`json:"reference,omitempty"`</span>
    Data      <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">`json:"data,omitempty"`</span>
<span class="token punctuation">}</span>

<span class="token comment">// WriteResponse used to write an error and JSON data into response.</span>
<span class="token keyword">func</span> <span class="token function">WriteResponse</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">,</span> data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        coder <span class="token operator">:=</span> errors<span class="token punctuation">.</span><span class="token function">ParseCoder</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

        c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>coder<span class="token punctuation">.</span><span class="token function">HTTPStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Response<span class="token punctuation">{</span>
            Code<span class="token punctuation">:</span>      coder<span class="token punctuation">.</span><span class="token function">Code</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            Message<span class="token punctuation">:</span>   coder<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            Reference<span class="token punctuation">:</span> coder<span class="token punctuation">.</span><span class="token function">Reference</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            Data<span class="token punctuation">:</span>      data<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> Response<span class="token punctuation">{</span>Data<span class="token punctuation">:</span> data<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetUser</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"get user function called."</span><span class="token punctuation">,</span> <span class="token string">"X-Request-Id"</span><span class="token punctuation">,</span> requestid<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// Get the user by the `username` from the database.</span>
    user<span class="token punctuation">,</span> err <span class="token operator">:=</span> store<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Users</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>GetOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrUserNotFound<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，通过<code v-pre>WriteResponse</code>统一处理错误。在 <code v-pre>WriteResponse</code> 函数中，如果<code v-pre>err != nil</code>，则从error中解析出Coder，并调用Coder提供的方法，获取错误相关的Http Status Code、int类型的业务码、暴露给用户的信息、错误的参考文档链接，并返回JSON格式的信息。如果 <code v-pre>err == nil</code> 则返回200和数据。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '10.md' style='float:left'>⬆️上一节🔗  </a><a href = '12.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


