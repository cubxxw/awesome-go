<template><div><h1 id="_1-验证码" tabindex="-1"><a class="header-anchor" href="#_1-验证码" aria-hidden="true">#</a> 1. 验证码</h1>
<p>验证码套件可实现图像和音频验证码的生成和验证。</p>
<p>验证码解决方案是具有定义长度的数字序列0-9。验证码有两种表示形式：图像和音频。</p>
<p>图像表示是经过PNG编码的图像，上面印有解决方案，使得计算机难以使用OCR对其进行求解。</p>
<p>音频表示形式是WAVE编码（8 kHz无符号8位）声音，带有语音解决方案（当前为英语，俄语，中文和日语）。为了使计算机难以解决音频验证码，发音数字的声音具有随机的速度和音调，并且声音中随机混有背景噪声。</p>
<p>该程序包不需要外部文件或库来生成验证码表示形式。它是独立的。</p>
<p>为了一次性获得验证码，该程序包包括一个存储验证码ID，其解决方案和到期时间的内存存储。在调用Verify或VerifyString之后，立即将使用过的验证码从存储中删除，而未使用的验证码（用户使用验证码加载页面但未提交表单）将在预定义的到期时间后自动收集。开发人员还可以通过实现Store接口并向SetCustomStore注册对象来提供自定义存储（例如，在数据库中保存验证码ID和解决方案）。</p>
<p>验证码是通过调用New创建的，该函数返回验证码ID。但是，它们的表示是通过调用WriteImage或WriteAudio函数即时创建的。创建的表示形式不会存储在任何地方，但是随后对具有相同ID的这些函数的调用将编写相同的验证码解决方案。重新加载功能将为提供的验证码创建一个新的不同解决方案，如果用户在不重新加载整个页面的情况下无法解决显示的验证码，则允许用户“重新加载”验证码。验证和VerifyString用于验证给定的解决方案是给定的验证码ID的正确解决方案。</p>
<p>服务器提供了一个http.Handler，可以从URL自动提供验证码的图像和音频表示。它也可以用来重新加载验证码。有关详细信息，请参阅服务器功能文档，或查看“ capexample”子目录中的示例。</p>
<h3 id="_1-1-1-图片实例" tabindex="-1"><a class="header-anchor" href="#_1-1-1-图片实例" aria-hidden="true">#</a> 1.1.1. 图片实例</h3>
<p><img src="https://s2.loli.net/2022/04/11/sjCnNHJ73pVwQhO.png" alt="img"></p>
<h3 id="_1-1-2-更多" tabindex="-1"><a class="header-anchor" href="#_1-1-2-更多" aria-hidden="true">#</a> 1.1.2. 更多</h3>
<p>查看官网地址：https://github.com/dchest/captcha</p>
<h3 id="_1-1-3-实例" tabindex="-1"><a class="header-anchor" href="#_1-1-3-实例" aria-hidden="true">#</a> 1.1.3. 实例</h3>
<h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    go get github.com/dchest/captcha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-4-代码" tabindex="-1"><a class="header-anchor" href="#_1-1-4-代码" aria-hidden="true">#</a> 1.1.4. 代码</h3>
<p>具体实例可以查看capexample目录，有生成的验证码图片。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"github.com/dchest/captcha"</span>
    <span class="token string">"io"</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/http"</span>
    <span class="token string">"text/template"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> formTemplate <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"example"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>formTemplateSrc<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">showFormHandler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path <span class="token operator">!=</span> <span class="token string">"/"</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">NotFound</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    d <span class="token operator">:=</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        CaptchaId <span class="token builtin">string</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        captcha<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> formTemplate<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">processFormHandler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    w<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"text/html; charset=utf-8"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>captcha<span class="token punctuation">.</span><span class="token function">VerifyString</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">FormValue</span><span class="token punctuation">(</span><span class="token string">"captchaId"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">FormValue</span><span class="token punctuation">(</span><span class="token string">"captchaSolution"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">"Wrong captcha solution! No robots allowed!\n"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">"Great job, human! You solved the captcha.\n"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">"&lt;br>&lt;a href='/'>Try another one&lt;/a>"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> showFormHandler<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/process"</span><span class="token punctuation">,</span> processFormHandler<span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token string">"/captcha/"</span><span class="token punctuation">,</span> captcha<span class="token punctuation">.</span><span class="token function">Server</span><span class="token punctuation">(</span>captcha<span class="token punctuation">.</span>StdWidth<span class="token punctuation">,</span> captcha<span class="token punctuation">.</span>StdHeight<span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Server is at localhost:8666"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">"localhost:8666"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> formTemplateSrc <span class="token operator">=</span> <span class="token string">`&lt;!doctype html>
&lt;head>&lt;title>Captcha Example&lt;/title>&lt;/head>
&lt;body>
&lt;script>
function setSrcQuery(e, q) {
    var src  = e.src;
    var p = src.indexOf('?');
    if (p >= 0) {
        src = src.substr(0, p);
    }
    e.src = src + "?" + q
}
function playAudio() {
    var le = document.getElementById("lang");
    var lang = le.options[le.selectedIndex].value;
    var e = document.getElementById('audio')
    setSrcQuery(e, "lang=" + lang)
    e.style.display = 'block';
    e.autoplay = 'true';
    return false;
}
function changeLang() {
    var e = document.getElementById('audio')
    if (e.style.display == 'block') {
        playAudio();
    }
}
function reload() {
    setSrcQuery(document.getElementById('image'), "reload=" + (new Date()).getTime());
    setSrcQuery(document.getElementById('audio'), (new Date()).getTime());
    return false;
}
&lt;/script>
&lt;select id="lang" onchange="changeLang()">
    &lt;option value="en">English&lt;/option>
    &lt;option value="ja">Japanese&lt;/option>
    &lt;option value="ru">Russian&lt;/option>
    &lt;option value="zh">Chinese&lt;/option>
&lt;/select>
&lt;form action="/process" method=post>
&lt;p>Type the numbers you see in the picture below:&lt;/p>
&lt;p>&lt;img id=image src="/captcha/{{.CaptchaId}}.png" alt="Captcha image">&lt;/p>
&lt;a href="#" onclick="reload()">Reload&lt;/a> | &lt;a href="#" onclick="playAudio()">Play Audio&lt;/a>
&lt;audio id=audio controls style="display:none" src="/captcha/{{.CaptchaId}}.wav" preload=none>
  You browser doesn't support audio.
  &lt;a href="/captcha/download/{{.CaptchaId}}.wav">Download file&lt;/a> to play it in the external player.
&lt;/audio>
&lt;input type=hidden name=captchaId value="{{.CaptchaId}}">&lt;br>
&lt;input name=captchaSolution>
&lt;input type=submit value=Submit>
&lt;/form>
`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '85.md' style='float:left'>⬆️上一节🔗</a><a href = '87.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


