<template><div><ul>
<li><a href="https://github.com/cubxxw/awesome-cs-cloudnative-blockchain" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第9节-配置模式" tabindex="-1"><a class="header-anchor" href="#第9节-配置模式" aria-hidden="true">#</a> 第9节 配置模式</h1>
<div><a href = '8.md' style='float:left'>⬆️上一节🔗</a><a href = '10.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕Java和Golang的设计模式，设计模式介绍、创建者模式、结构型模式、行为型模式。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h2>
<p>当我们开发一个程序时，往往需要在不同的环境中运行它，比如开发环境、测试环境和生产环境。此时，我们需要对应用程序进行不同的配置，以确保在不同的环境中都能正常运行。而Go语言的设计模式中，提供了一种名为配置模式（Configuration Pattern）的解决方案，来满足这种需求。</p>
<h2 id="配置模式概述" tabindex="-1"><a class="header-anchor" href="#配置模式概述" aria-hidden="true">#</a> 配置模式概述</h2>
<p>配置模式是一种软件设计模式，它允许我们在编写代码时将配置与实现分离。该模式将应用程序的配置与其实现分离开来，以便于在多个环境中使用相同的代码库，从而提高了代码的可重用性和可维护性。</p>
<h2 id="go语言中的配置模式" tabindex="-1"><a class="header-anchor" href="#go语言中的配置模式" aria-hidden="true">#</a> Go语言中的配置模式</h2>
<p>在Go语言中，我们可以使用结构体来存储配置信息。结构体中包含了应用程序需要的所有配置信息。例如，我们可以定义一个名为Config的结构体，并在其中添加必要的配置项：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Addr     <span class="token builtin">string</span>
    Port     <span class="token builtin">int</span>
    Username <span class="token builtin">string</span>
    Password <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>当然，我们也可以使用其他的数据结构来表示配置数据，比如说 map、json、yaml …</p>
</blockquote>
<p>然后，在应用程序中，我们可以使用这个Config结构体来读取和设置配置项。例如，我们可以编写以下代码来读取配置文件并将其加载到Config结构体中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>config <span class="token operator">:=</span> <span class="token operator">&amp;</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span>

file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"config.json"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

decoder <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">NewDecoder</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
err <span class="token operator">=</span> decoder<span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>config<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们使用了标准库中的json包来解析配置文件，并将其加载到Config结构体中。然后，我们就可以使用Config结构体中的属性来访问配置信息了。</p>
<p>在实际应用中，我们还可以通过环境变量、命令行参数等方式来设置配置项。例如，我们可以编写以下代码来从命令行参数中读取并设置配置项：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> addr <span class="token builtin">string</span>
<span class="token keyword">var</span> port <span class="token builtin">int</span>
<span class="token keyword">var</span> username <span class="token builtin">string</span>
<span class="token keyword">var</span> password <span class="token builtin">string</span>

flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>addr<span class="token punctuation">,</span> <span class="token string">"addr"</span><span class="token punctuation">,</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token string">"server address"</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>port<span class="token punctuation">,</span> <span class="token string">"port"</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">,</span> <span class="token string">"server port"</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>username<span class="token punctuation">,</span> <span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"database username"</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>password<span class="token punctuation">,</span> <span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"database password"</span><span class="token punctuation">)</span>

flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

config <span class="token operator">:=</span> <span class="token operator">&amp;</span>Config<span class="token punctuation">{</span>
    Addr<span class="token punctuation">:</span>     addr<span class="token punctuation">,</span>
    Port<span class="token punctuation">:</span>     port<span class="token punctuation">,</span>
    Username<span class="token punctuation">:</span> username<span class="token punctuation">,</span>
    Password<span class="token punctuation">:</span> password<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们使用了标准库中的flag包来解析命令行参数，并将其设置到Config结构体中。</p>
<h2 id="配置模式初级写法" tabindex="-1"><a class="header-anchor" href="#配置模式初级写法" aria-hidden="true">#</a> 配置模式初级写法</h2>
<p>在初级实现中，我们可以使用一个结构体来存储数据库的配置信息：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> DBConfig <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Host     <span class="token builtin">string</span>
    Port     <span class="token builtin">int</span>
    User     <span class="token builtin">string</span>
    Password <span class="token builtin">string</span>
    Database <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们可以编写一个函数来读取这个结构体并建立与数据库的连接：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewDB</span><span class="token punctuation">(</span>config <span class="token operator">*</span>DBConfig<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>sql<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s:%s@tcp(%s:%d)/%s"</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>User<span class="token punctuation">,</span> config<span class="token punctuation">.</span>Password<span class="token punctuation">,</span> config<span class="token punctuation">.</span>Host<span class="token punctuation">,</span> config<span class="token punctuation">.</span>Port<span class="token punctuation">,</span> config<span class="token punctuation">.</span>Database<span class="token punctuation">)</span>
    db<span class="token punctuation">,</span> err <span class="token operator">:=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"mysql"</span><span class="token punctuation">,</span> dsn<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> db<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们使用了标准库中的 <code v-pre>database/sql</code> 包来建立与数据库的连接。该函数将从DBConfig结构体中获取配置信息，并根据这些信息创建DSN字符串（数据源名称），然后使用 <code v-pre>sql.Open()</code> 函数建立与数据库的连接。</p>
<h2 id="数据库的配置模式高级写法" tabindex="-1"><a class="header-anchor" href="#数据库的配置模式高级写法" aria-hidden="true">#</a> 数据库的配置模式高级写法</h2>
<p>在高级实现中，我们可以进一步提高代码的可重用性和灵活性，使其更加符合开闭原则。具体而言，我们可以使用接口来定义一个抽象的数据库连接对象，并让具体的数据库驱动实现该接口。这样，我们就可以通过简单的配置文件、环境变量、命令行参数等方式来切换不同的数据库驱动，而不需要对应用程序进行大规模的修改。</p>
<p>首先，我们需要定义一个抽象的数据库连接对象：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> DBConnector <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Connect</span><span class="token punctuation">(</span><span class="token operator">*</span>DBConfig<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>sql<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们可以编写具体的数据库驱动实现该接口。例如，我们可以编写一个名为MySQLConnector的结构体来实现MySQL数据库的连接：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> MySQLConnector <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MySQLConnector<span class="token punctuation">)</span> <span class="token function">Connect</span><span class="token punctuation">(</span>config <span class="token operator">*</span>DBConfig<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>sql<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s:%s@tcp(%s:%d)/%s"</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>User<span class="token punctuation">,</span> config<span class="token punctuation">.</span>Password<span class="token punctuation">,</span> config<span class="token punctuation">.</span>Host<span class="token punctuation">,</span> config<span class="token punctuation">.</span>Port<span class="token punctuation">,</span> config<span class="token punctuation">.</span>Database<span class="token punctuation">)</span>
    <span class="token keyword">return</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"mysql"</span><span class="token punctuation">,</span> dsn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们可以编写一个工厂函数来根据配置文件中的信息创建不同的数据库连接对象：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewDBConnector</span><span class="token punctuation">(</span>config <span class="token operator">*</span>DBConfig<span class="token punctuation">)</span> <span class="token punctuation">(</span>DBConnector<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> config<span class="token punctuation">.</span>Driver <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"mysql"</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">&amp;</span>MySQLConnector<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token keyword">case</span> <span class="token string">"postgres"</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">&amp;</span>PostgresConnector<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"invalid database driver"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们使用了switch语句来判断当前配置文件中指定的数据库驱动，并返回相应的数据库连接对象。如果该驱动不存在，则返回一个错误。</p>
<p>最后，我们可以再次编写一个函数来建立与数据库的连接，并将其封装在一个结构体中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> DB <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    connector DBConnector
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>db <span class="token operator">*</span>DB<span class="token punctuation">)</span> <span class="token function">Connect</span><span class="token punctuation">(</span>config <span class="token operator">*</span>DBConfig<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>sql<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> db<span class="token punctuation">.</span>connector<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们使用了一个DB结构体来封装具体的数据库连接对象，并提供了一个Connect()方法来建立与数据库的连接。在该方法中，我们调用具体的数据库连接对象的Connect()方法来建立连接。</p>
<h2 id="常见写法" tabindex="-1"><a class="header-anchor" href="#常见写法" aria-hidden="true">#</a> 常见写法</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">// Option 是配置选项</span>
<span class="token keyword">type</span> Option <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>config<span class="token punctuation">)</span>

<span class="token comment">// config 是需要配置的对象</span>
<span class="token keyword">type</span> config <span class="token keyword">struct</span><span class="token punctuation">{</span>
    host <span class="token builtin">string</span>
    port <span class="token builtin">int</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们定义了一个 <code v-pre>Option</code> 函数类型和一个 <code v-pre>config</code> 结构体类型。 <code v-pre>config</code> 结构体是需要配置的对象，而 <code v-pre>Option</code> 则是用于设置 <code v-pre>config</code> 的选项。</p>
<p>接下来，我们可以定义一些 <code v-pre>Option</code> 函数以设置 <code v-pre>config</code> 对象的不同属性，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">WithHost</span><span class="token punctuation">(</span>host <span class="token builtin">string</span><span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span>host <span class="token operator">=</span> host
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithPort</span><span class="token punctuation">(</span>port <span class="token builtin">int</span><span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span>port <span class="token operator">=</span> port
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些 <code v-pre>Option</code> 函数将返回一个函数，该函数将获取指向 <code v-pre>config</code> 对象的指针并设置其相关属性。例如，<code v-pre>WithHost</code> 函数将获取 <code v-pre>host</code> 参数并将其设置为 <code v-pre>config</code> 对象的 <code v-pre>host</code> 属性。</p>
<p>现在，我们可以创建一个名为 <code v-pre>NewConfig</code> 的函数，该函数接受一个或多个 <code v-pre>Option</code> 函数，并使用这些函数来创建一个配置对象，如下所示：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewConfig</span><span class="token punctuation">(</span>opts <span class="token operator">...</span>Option<span class="token punctuation">)</span> <span class="token operator">*</span>config <span class="token punctuation">{</span>
    <span class="token comment">// 创建默认配置</span>
    cfg <span class="token operator">:=</span> <span class="token operator">&amp;</span>config<span class="token punctuation">{</span>
        host<span class="token punctuation">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
        port<span class="token punctuation">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 应用所有选项</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> opt <span class="token operator">:=</span> <span class="token keyword">range</span> opts <span class="token punctuation">{</span>
        <span class="token function">opt</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> cfg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此函数中，我们首先创建一个默认的 <code v-pre>config</code> 对象（此处为 <code v-pre>localhost:8080</code>）。然后，我们遍历所有传入的选项函数，并使用它们来修改 <code v-pre>config</code> 对象。最后，我们返回配置对象。</p>
<p>最后，我们可以使用如下方式使用此代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建带有定制选项的配置对象</span>
    cfg <span class="token operator">:=</span> <span class="token function">NewConfig</span><span class="token punctuation">(</span>
        <span class="token function">WithHost</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">WithPort</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"host: %s, port: %d"</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span>host<span class="token punctuation">,</span> cfg<span class="token punctuation">.</span>port<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码将输出：<code v-pre>host: 127.0.0.1, port: 8888</code>。这说明我们成功地使用配置者模式创建了一个可以定制的配置对象。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>配置模式是一种非常有用的软件设计模式，它允许我们将配置与实现分离开来，以便于在不同的环境中使用相同的代码库。在Go语言中，我们可以使用结构体来存储配置信息，并通过各种方式（如配置文件、环境变量、命令行参数等）来设置配置项。这种方式不仅提高了代码的可重用性和可维护性，还可以让应用程序在不同环境中更加灵活和可配置。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '8.md' style='float:left'>⬆️上一节🔗</a><a href = '10.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/go-advancend/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


