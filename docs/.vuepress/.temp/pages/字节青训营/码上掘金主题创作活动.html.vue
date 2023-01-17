<template><div><h1 id="当青训营遇上码上掘金" tabindex="-1"><a class="header-anchor" href="#当青训营遇上码上掘金" aria-hidden="true">#</a> 当青训营遇上码上掘金</h1>
<h2 id="题目—主题-3-寻友之旅" tabindex="-1"><a class="header-anchor" href="#题目—主题-3-寻友之旅" aria-hidden="true">#</a> 题目—主题 3：寻友之旅</h2>
<p>小青要找小码去玩，他们的家在一条直线上，当前小青在地点 N ，小码在地点 K （0≤N , K≤100 000），并且小码在自己家原地不动等待小青。小青有两种交通方式可选：步行和公交。</p>
<p>步行：小青可以在一分钟内从任意节点 X 移动到节点 X-1 或 X+1
公交：小青可以在一分钟内从任意节点 X 移动到节点 2×X （公交不可以向后走）</p>
<p><strong>请帮助小青通知小码，小青最快到达时间是多久？</strong></p>
<p>输入： 两个整数 N 和 K
输出： 小青到小码家所需的最短时间（以分钟为单位）</p>
<h2 id="解题代码" tabindex="-1"><a class="header-anchor" href="#解题代码" aria-hidden="true">#</a> 解题代码</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> N<span class="token punctuation">,</span> K <span class="token builtin">int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printn</span><span class="token punctuation">(</span><span class="token string">"请分别输入两个地点坐标~"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>N<span class="token punctuation">,</span> <span class="token operator">&amp;</span>K<span class="token punctuation">)</span>
    steps <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> N <span class="token operator">!=</span> K <span class="token punctuation">{</span>
        <span class="token keyword">if</span> K <span class="token operator">></span> N <span class="token punctuation">{</span>
            <span class="token keyword">if</span> K<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                K <span class="token operator">/=</span> <span class="token number">2</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                K<span class="token operator">++</span>
            <span class="token punctuation">}</span>
            steps<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            N<span class="token operator">++</span>
            steps<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// minute</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>steps<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<p>这段程序的思路是：</p>
<ol>
<li>当 N 和 K 不相等时，如果 K 大于 N，那么小青可以使用公交车</li>
<li>如果K是偶数，就除以2，如果K是奇数，就加1，步数加1</li>
<li>如果N大于K，就让N加1，步数加1。</li>
<li>当 N 和 K 相等时，循环结束，最后输出步数。</li>
</ol>
<p>这样小青就可以告诉小码，他最快到达小码家的时间了。</p>
<p>小青的旅途充满了期待和激动，他沿着这条直线走着，有时候步行，有时候坐公交，追寻着与小码相聚的梦想。如李清照所说：“花自飘零水自流。一种相思，两处闲愁。此情无计可消除，才下眉头，却上心头。”</p>
<p>小青和小码的友谊如此美好，相聚是多么的甜蜜。让我们一起祝福他们，愿他们永远幸福。</p>
</div></template>


