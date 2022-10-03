<template><div><h1 id="_1-实时读取文件内容" tabindex="-1"><a class="header-anchor" href="#_1-实时读取文件内容" aria-hidden="true">#</a> 1. 实时读取文件内容</h1>
<p>在做日志分析的时候，需要实时的获取日志里面的内容找到了tail感觉好不错分享给大家</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>

    <span class="token string">"github.com/hpcloud/tail"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fileName <span class="token operator">:=</span> <span class="token string">"./my.log"</span>
    config <span class="token operator">:=</span> tail<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        ReOpen<span class="token punctuation">:</span>    <span class="token boolean">true</span><span class="token punctuation">,</span>                                 <span class="token comment">// 重新打开</span>
        Follow<span class="token punctuation">:</span>    <span class="token boolean">true</span><span class="token punctuation">,</span>                                 <span class="token comment">// 是否跟随</span>
        Location<span class="token punctuation">:</span>  <span class="token operator">&amp;</span>tail<span class="token punctuation">.</span>SeekInfo<span class="token punctuation">{</span>Offset<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> Whence<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 从文件的哪个地方开始读</span>
        MustExist<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                                <span class="token comment">// 文件不存在不报错</span>
        Poll<span class="token punctuation">:</span>      <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    tails<span class="token punctuation">,</span> err <span class="token operator">:=</span> tail<span class="token punctuation">.</span><span class="token function">TailFile</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"tail file failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> <span class="token punctuation">(</span>
        line <span class="token operator">*</span>tail<span class="token punctuation">.</span>Line
        ok   <span class="token builtin">bool</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        line<span class="token punctuation">,</span> ok <span class="token operator">=</span> <span class="token operator">&lt;-</span>tails<span class="token punctuation">.</span>Lines
        <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"tail file close reopen, filename:%s\n"</span><span class="token punctuation">,</span> tails<span class="token punctuation">.</span>Filename<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"line:"</span><span class="token punctuation">,</span> line<span class="token punctuation">.</span>Text<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在同级目录下面定义一个my.log文件，在文件里面写入文字敲下回车，并且保存之后，程序会自动的获取并且打印，可以根据业务需要就行修改</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '76.md' style='float:left'>⬆️上一节🔗</a><a href = '78.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


