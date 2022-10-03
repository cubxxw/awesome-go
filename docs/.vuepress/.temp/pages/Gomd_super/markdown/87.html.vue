<template><div><h1 id="_1-发邮件" tabindex="-1"><a class="header-anchor" href="#_1-发邮件" aria-hidden="true">#</a> 1. 发邮件</h1>
<h3 id="_1-1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-1-介绍" aria-hidden="true">#</a> 1.1.1. 介绍</h3>
<p>电子邮件的应用非常广泛，常见的如在某网站注册了一个账户，自动发送一封激活邮件，通过邮件找回密码，自动批量发送活动信息等。很显然这些应用不可能和我们自己平时发邮件一样，先打开浏览器，登录邮箱，创建邮件再发送。本文将简单介绍如何通过go代码来创建电子邮件，并连接邮件服务器发送邮件。</p>
<p>电子邮件在网络中传输和网页一样需要遵从特定的协议，常用的电子邮件协议包括 SMTP，POP3，IMAP。其中邮件的创建和发送只需要用到 SMTP协议，所以本文也只会涉及到SMTP协议。SMTP 是 Simple Mail Transfer Protocol 的简称，即简单邮件传输协议。</p>
<h3 id="_1-1-2-特征" tabindex="-1"><a class="header-anchor" href="#_1-1-2-特征" aria-hidden="true">#</a> 1.1.2. 特征</h3>
<ul>
<li>发件人，收件人，密件抄送和抄送字段</li>
<li>文字和HTML邮件正文</li>
<li>附件</li>
<li>阅读收据</li>
<li>自定义标题</li>
</ul>
<h3 id="_1-1-3-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-3-安装" aria-hidden="true">#</a> 1.1.3. 安装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    go get github.com/jordan-wright/email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>注意：此库的版本需要Go v1.5或更高版本。</em> <em>如果需要与以前的Go版本兼容，则可以在gopkg.in/jordan-wright/email.v1中使用以前的软件包。</em></p>
<p>我们需要额外一些工作。我们知道邮箱使用SMTP/POP3/IMAP等协议从邮件服务器上拉取邮件。邮件并不是直接发送到邮箱的，而是邮箱请求拉取的。所以，我们需要配置SMTP/POP3/IMAP服务器。从头搭建固然可行，而且也有现成的开源库，但是比较麻烦。现在一般的邮箱服务商都开放了SMTP/POP3/IMAP服务器。我这里拿 QQ 邮箱来举例。</p>
<ul>
<li>首先我们登录QQ邮箱，设置-&gt;账户 找到图片的位置开启<code v-pre>POP3/SMTP/IMAP</code>并且按照要求生产授权码</li>
</ul>
<p><img src="https://www.topgoer.com/static/xiangmu/image_3.png" alt="img"></p>
<h3 id="_1-1-4-代码" tabindex="-1"><a class="header-anchor" href="#_1-1-4-代码" aria-hidden="true">#</a> 1.1.4. 代码</h3>
<p>1.实现简单的邮件发送：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/smtp"</span>

    <span class="token string">"github.com/jordan-wright/email"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//设置发送方的邮箱</span>
    e<span class="token punctuation">.</span>From <span class="token operator">=</span> <span class="token string">"dj &lt;XXX@qq.com>"</span>
    <span class="token comment">// 设置接收方的邮箱</span>
    e<span class="token punctuation">.</span>To <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"XXX@qq.com"</span><span class="token punctuation">}</span>
    <span class="token comment">//设置主题</span>
    e<span class="token punctuation">.</span>Subject <span class="token operator">=</span> <span class="token string">"这是主题"</span>
    <span class="token comment">//设置文件发送的内容</span>
    e<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"www.topgoer.com是个不错的go语言中文文档"</span><span class="token punctuation">)</span>
    <span class="token comment">//设置服务器相关的配置</span>
    err <span class="token operator">:=</span> e<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">"smtp.qq.com:25"</span><span class="token punctuation">,</span> smtp<span class="token punctuation">.</span><span class="token function">PlainAuth</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"你的邮箱账号"</span><span class="token punctuation">,</span> <span class="token string">"这块是你的授权码"</span><span class="token punctuation">,</span> <span class="token string">"smtp.qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行程序就会给你设置的邮箱发送一个邮件，有的邮箱会把邮件当成垃圾邮件发到垃圾箱里面，如果找不到邮件可以去垃圾箱看下。</p>
<p>2.实现抄送功能</p>
<p>该插件有两种抄送模式即 CC（Carbon Copy）和 BCC （Blind Carbon Copy）</p>
<p>抄送功能只需要添加两个参数就好了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    e.Cc = []string{"XXX@qq.com",XXX@qq.com}
    e.Bcc = []string{"XXX@qq.com"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>全部代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/smtp"</span>

    <span class="token string">"github.com/jordan-wright/email"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//设置发送方的邮箱</span>
    e<span class="token punctuation">.</span>From <span class="token operator">=</span> <span class="token string">"dj &lt;XXX@qq.com>"</span>
    <span class="token comment">// 设置接收方的邮箱</span>
    e<span class="token punctuation">.</span>To <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"XXX@qq.com"</span><span class="token punctuation">}</span>
    <span class="token comment">//设置抄送如果抄送多人逗号隔开</span>
    e<span class="token punctuation">.</span>Cc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"XXX@qq.com"</span><span class="token punctuation">,</span>XXX@qq<span class="token punctuation">.</span>com<span class="token punctuation">}</span>
    <span class="token comment">//设置秘密抄送</span>
    e<span class="token punctuation">.</span>Bcc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"XXX@qq.com"</span><span class="token punctuation">}</span>
    <span class="token comment">//设置主题</span>
    e<span class="token punctuation">.</span>Subject <span class="token operator">=</span> <span class="token string">"这是主题"</span>
    <span class="token comment">//设置文件发送的内容</span>
    e<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"www.topgoer.com是个不错的go语言中文文档"</span><span class="token punctuation">)</span>
    <span class="token comment">//设置服务器相关的配置</span>
    err <span class="token operator">:=</span> e<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">"smtp.qq.com:25"</span><span class="token punctuation">,</span> smtp<span class="token punctuation">.</span><span class="token function">PlainAuth</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"你的邮箱账号"</span><span class="token punctuation">,</span> <span class="token string">"这块是你的授权码"</span><span class="token punctuation">,</span> <span class="token string">"smtp.qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.发送html代码的邮件</p>
<p>代码实现：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/smtp"</span>

    <span class="token string">"github.com/jordan-wright/email"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//设置发送方的邮箱</span>
    e<span class="token punctuation">.</span>From <span class="token operator">=</span> <span class="token string">"dj &lt;XXX@qq.com>"</span>
    <span class="token comment">// 设置接收方的邮箱</span>
    e<span class="token punctuation">.</span>To <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"XXX@qq.com"</span><span class="token punctuation">}</span>
    <span class="token comment">//设置主题</span>
    e<span class="token punctuation">.</span>Subject <span class="token operator">=</span> <span class="token string">"这是主题"</span>
    <span class="token comment">//设置文件发送的内容</span>
    e<span class="token punctuation">.</span>HTML <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">`
    &lt;h1>&lt;a href="http://www.topgoer.com/">go语言中文网站&lt;/a>&lt;/h1>    
    `</span><span class="token punctuation">)</span>
    <span class="token comment">//设置服务器相关的配置</span>
    err <span class="token operator">:=</span> e<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">"smtp.qq.com:25"</span><span class="token punctuation">,</span> smtp<span class="token punctuation">.</span><span class="token function">PlainAuth</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"你的邮箱账号"</span><span class="token punctuation">,</span> <span class="token string">"这块是你的授权码"</span><span class="token punctuation">,</span> <span class="token string">"smtp.qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.实现邮件附件的发送</p>
<p>直接调用<code v-pre>AttachFile</code>即可</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/smtp"</span>

    <span class="token string">"github.com/jordan-wright/email"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//设置发送方的邮箱</span>
    e<span class="token punctuation">.</span>From <span class="token operator">=</span> <span class="token string">"dj &lt;XXX@qq.com>"</span>
    <span class="token comment">// 设置接收方的邮箱</span>
    e<span class="token punctuation">.</span>To <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"XXX@qq.com"</span><span class="token punctuation">}</span>
    <span class="token comment">//设置主题</span>
    e<span class="token punctuation">.</span>Subject <span class="token operator">=</span> <span class="token string">"这是主题"</span>
    <span class="token comment">//设置文件发送的内容</span>
    e<span class="token punctuation">.</span>HTML <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">`
    &lt;h1>&lt;a href="http://www.topgoer.com/">go语言中文网站&lt;/a>&lt;/h1>    
    `</span><span class="token punctuation">)</span>
    <span class="token comment">//这块是设置附件</span>
    e<span class="token punctuation">.</span><span class="token function">AttachFile</span><span class="token punctuation">(</span><span class="token string">"./test.txt"</span><span class="token punctuation">)</span>
    <span class="token comment">//设置服务器相关的配置</span>
    err <span class="token operator">:=</span> e<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">"smtp.qq.com:25"</span><span class="token punctuation">,</span> smtp<span class="token punctuation">.</span><span class="token function">PlainAuth</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"你的邮箱账号"</span><span class="token punctuation">,</span> <span class="token string">"这块是你的授权码"</span><span class="token punctuation">,</span> <span class="token string">"smtp.qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.连接池</p>
<p>实际上每次调用Send时都会和 SMTP 服务器建立一次连接，如果发送邮件很多很频繁的话可能会有性能问题。email提供了连接池，可以复用网络连接：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/smtp"</span>
    <span class="token string">"os"</span>
    <span class="token string">"sync"</span>
    <span class="token string">"time"</span>

    <span class="token string">"github.com/jordan-wright/email"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>email<span class="token punctuation">.</span>Email<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    p<span class="token punctuation">,</span> err <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewPool</span><span class="token punctuation">(</span>
        <span class="token string">"smtp.qq.com:25"</span><span class="token punctuation">,</span>
        <span class="token number">4</span><span class="token punctuation">,</span>
        smtp<span class="token punctuation">.</span><span class="token function">PlainAuth</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"XXX@qq.com"</span><span class="token punctuation">,</span> <span class="token string">"你的授权码"</span><span class="token punctuation">,</span> <span class="token string">"smtp.qq.com"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">"failed to create pool:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> e <span class="token operator">:=</span> <span class="token keyword">range</span> ch <span class="token punctuation">{</span>
                err <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
                <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                    fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">"email:%v sent error:%v\n"</span><span class="token punctuation">,</span> e<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        e <span class="token operator">:=</span> email<span class="token punctuation">.</span><span class="token function">NewEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        e<span class="token punctuation">.</span>From <span class="token operator">=</span> <span class="token string">"dj &lt;XXX@qq.com>"</span>
        e<span class="token punctuation">.</span>To <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"XXX@qq.com"</span><span class="token punctuation">}</span>
        e<span class="token punctuation">.</span>Subject <span class="token operator">=</span> <span class="token string">"Awesome web"</span>
        e<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"Awesome Web %d"</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        ch <span class="token operator">&lt;-</span> e
    <span class="token punctuation">}</span>

    <span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面程序中，我们创建 4 goroutine 共用一个连接池发送邮件，发送 10 封邮件后程序退出。为了等邮件都发送完成或失败，程序才退出，我们使用了sync.WaitGroup。由于使用了 goroutine，邮件顺序不能保证。</p>
<p>参考：https://github.com/darjun/go-daily-lib</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '86.md' style='float:left'>⬆️上一节🔗</a><a href = '88.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


