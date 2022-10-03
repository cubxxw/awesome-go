<template><div><h1 id="_1-sha" tabindex="-1"><a class="header-anchor" href="#_1-sha" aria-hidden="true">#</a> 1. sha</h1>
<p>安全散列算法SHA（Secure Hash Algorithm）是美国国家安全局 （NSA） 设计，美国国家标准与技术研究院（NIST） 发布的一系列密码散列函数，包括 SHA-1、SHA-224、SHA-256、SHA-384 和 SHA-512 等变体。主要适用于数字签名标准（DigitalSignature Standard DSS）里面定义的数字签名算法（Digital Signature Algorithm DSA）。SHA-1已经不是那边安全了，google和微软都已经弃用这个加密算法。为此，我们使用热门的比特币使用过的算法SHA-256作为实例。其它SHA算法，也可以按照这种模式进行使用。</p>
<h3 id="_1-1-1-sha1" tabindex="-1"><a class="header-anchor" href="#_1-1-1-sha1" aria-hidden="true">#</a> 1.1.1. sha1</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"crypto/sha1"</span>
    <span class="token string">"encoding/hex"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"www.5lmh.com"</span>

    <span class="token comment">//方法一</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    has <span class="token operator">:=</span> sha1<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    shastr1 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%x"</span><span class="token punctuation">,</span> has<span class="token punctuation">)</span> <span class="token comment">//将[]byte转成16进制</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shastr1<span class="token punctuation">)</span>

    <span class="token comment">//方法二</span>

    w <span class="token operator">:=</span> sha1<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment">//将str写入到w中</span>
    bw <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>       <span class="token comment">//w.Sum(nil)将w的hash转成[]byte格式</span>

    <span class="token comment">// shastr2 := fmt.Sprintf("%x", bw)    //将 bw 转成字符串</span>
    shastr2 <span class="token operator">:=</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>bw<span class="token punctuation">)</span> <span class="token comment">//将 bw 转成字符串</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shastr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    85f1dafe3287dce1d8ac1a72fe7f28faa2b0fbf7
    85f1dafe3287dce1d8ac1a72fe7f28faa2b0fbf7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>哈希值用作表示大量数据的固定大小的唯一值。数据的少量更改会在哈希值中产生不可预知的大量更改。 SHA256 算法的哈希值大小为 256 位。</p>
<h3 id="_1-1-2-sha256" tabindex="-1"><a class="header-anchor" href="#_1-1-2-sha256" aria-hidden="true">#</a> 1.1.2. sha256</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"crypto/sha256"</span>
    <span class="token string">"encoding/hex"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"www.5lmh.com"</span>

    w <span class="token operator">:=</span> sha256<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment">//将str写入到w中</span>
    bw <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>       <span class="token comment">//w.Sum(nil)将w的hash转成[]byte格式</span>

    <span class="token comment">// shastr2 := fmt.Sprintf("%x", bw)    //将 bw 转成字符串</span>
    shastr2 <span class="token operator">:=</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>bw<span class="token punctuation">)</span> <span class="token comment">//将 bw 转成字符串</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shastr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    e9c2efc35f3115c82bd97ae895b96db6a483a198a8b4b1c9bd8249129db7dbe9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-3-sha512" tabindex="-1"><a class="header-anchor" href="#_1-1-3-sha512" aria-hidden="true">#</a> 1.1.3. sha512</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"crypto/sha512"</span>
    <span class="token string">"encoding/hex"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"www.5lmh.com"</span>

    w <span class="token operator">:=</span> sha512<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment">//将str写入到w中</span>
    bw <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>       <span class="token comment">//w.Sum(nil)将w的hash转成[]byte格式</span>

    <span class="token comment">// shastr2 := fmt.Sprintf("%x", bw)    //将 bw 转成字符串</span>
    shastr2 <span class="token operator">:=</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>bw<span class="token punctuation">)</span> <span class="token comment">//将 bw 转成字符串</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shastr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    f4b68e0c8a85ddac35085eb95feb398361fe5c0421922c52dc7797c699664ee13aa4297dc7f20a9cd6615bf000dde6e91cc164988
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '81.md' style='float:left'>⬆️上一节🔗</a><a href = '83.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


