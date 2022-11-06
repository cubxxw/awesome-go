<template><div><h1 id="_1-md5" tabindex="-1"><a class="header-anchor" href="#_1-md5" aria-hidden="true">#</a> 1. md5</h1>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"crypto/md5"</span>
    <span class="token string">"encoding/hex"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"www.topgoer.com"</span>

    <span class="token comment">//方法一</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    has <span class="token operator">:=</span> md5<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    md5str1 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%x"</span><span class="token punctuation">,</span> has<span class="token punctuation">)</span> <span class="token comment">//将[]byte转成16进制</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>md5str1<span class="token punctuation">)</span>

    <span class="token comment">//方法二</span>

    w <span class="token operator">:=</span> md5<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment">//将str写入到w中</span>
    bw <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>       <span class="token comment">//w.Sum(nil)将w的hash转成[]byte格式</span>

    <span class="token comment">// md5str2 := fmt.Sprintf("%x", bw)    //将 bw 转成字符串</span>
    md5str2 <span class="token operator">:=</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>bw<span class="token punctuation">)</span> <span class="token comment">//将 bw 转成字符串</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>md5str2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    df02d4af01fdbe9aa21f72acaf6b7cfa
    df02d4af01fdbe9aa21f72acaf6b7cfa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '79.md' style='float:left'>⬆️上一节🔗</a><a href = '81.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


