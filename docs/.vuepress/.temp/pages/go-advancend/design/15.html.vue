<template><div><ul>
<li><a href="https://github.com/cubxxw/awesome-cs-cloudnative-blockchain" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第15节-管道模式" tabindex="-1"><a class="header-anchor" href="#第15节-管道模式" aria-hidden="true">#</a> 第15节 管道模式</h1>
<div><a href = '14.md' style='float:left'>⬆️上一节🔗</a><a href = '16.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕Java和Golang的设计模式，设计模式介绍、创建者模式、结构型模式、行为型模式。Myblog:<a href="http://cubxxw.com/" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="管道模式" tabindex="-1"><a class="header-anchor" href="#管道模式" aria-hidden="true">#</a> 管道模式</h2>
<p>管道模式是一种Go语言设计模式，它使用管道连接一系列数据处理组件，这些组件将输入进行转换并将其输出到下一个组件。这种模式非常适合需要处理大量数据的情况，因为它可以有效地利用多核处理器来并行处理数据。</p>
<p>管道模式通过将一系列处理步骤组合成一个处理流水线来处理数据。在 Go语言 中，管道模式可以借助 Go语言 的强大并发特性和channel 来实现。</p>
<h2 id="管道的基本结构" tabindex="-1"><a class="header-anchor" href="#管道的基本结构" aria-hidden="true">#</a> 管道的基本结构</h2>
<p>管道是一种连接输入和输出组件的通信机制。它由输入端（生产者）和输出端（消费者）组成。生产者将数据写入管道，消费者从管道中读取数据，并对数据进行处理。由于管道是一个阻塞式的通信机制，当管道已满或已空时，写入或读取数据的操作将被阻塞。</p>
<p>使用管道模式的基本结构如下所示：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token function">consumer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">producer</span><span class="token punctuation">(</span>data <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        data <span class="token operator">&lt;-</span> i
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">consumer</span><span class="token punctuation">(</span>data <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们创建了一个名为data的管道，并启动了一个producer协程来向管道中写入数据。producer协程将0到9的整数写入管道，并在完成后关闭管道。同时，我们还启动了一个consumer协程来从管道中读取数据并进行打印操作。</p>
<h2 id="管道模式的应用" tabindex="-1"><a class="header-anchor" href="#管道模式的应用" aria-hidden="true">#</a> 管道模式的应用</h2>
<p>管道模式可以应用于各种场景，例如：</p>
<h3 id="数据过滤" tabindex="-1"><a class="header-anchor" href="#数据过滤" aria-hidden="true">#</a> 数据过滤</h3>
<p>管道模式可以用于对数据进行过滤，例如，从一个文件中读取数据并只保留满足特定条件的数据。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    evenNumbers <span class="token operator">:=</span> <span class="token function">filter</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">consumer</span><span class="token punctuation">(</span>evenNumbers<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">filter</span><span class="token punctuation">(</span>data <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> filterFunc <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    filteredData <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>filteredData<span class="token punctuation">)</span>
        <span class="token keyword">for</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token function">filterFunc</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                filteredData <span class="token operator">&lt;-</span> num
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> filteredData
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们创建了一个名为data的管道，并启动了一个producer协程来向管道中写入数据。然后我们通过filter函数将数据传递给一个名为evenNumbers的管道，该管道仅包含偶数。最后，我们启动了一个<code v-pre>consumer</code>协程来从<code v-pre>evenNumbers</code>管道中读取数据并进行打印操作。</p>
<h3 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换" aria-hidden="true">#</a> 数据转换</h3>
<p>管道模式可以用于对数据进行转换，例如，从一个文件中读取数据并将其转换为另一种格式。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    people <span class="token operator">:=</span> <span class="token function">transform</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>line <span class="token builtin">string</span><span class="token punctuation">)</span> person <span class="token punctuation">{</span>
        parts <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>line<span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>
        name <span class="token operator">:=</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        age<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> person<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> name<span class="token punctuation">,</span> Age<span class="token punctuation">:</span> age<span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">consumer</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">transform</span><span class="token punctuation">(</span>data <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> transformFunc <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> person<span class="token punctuation">)</span> <span class="token keyword">chan</span> person <span class="token punctuation">{</span>
    transformedData <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> person<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>transformedData<span class="token punctuation">)</span>
        <span class="token keyword">for</span> line <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
            transformedData <span class="token operator">&lt;-</span> <span class="token function">transformFunc</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> transformedData
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们创建了一个名为data的管道，并启动了一个<code v-pre>producer</code>协程来向管道中写入数据。然后我们通过<code v-pre>transform</code>函数将数据传递给一个名为 <code v-pre>people</code> 的管道，该管道包含了转换后的 <code v-pre>person</code> 对象。最后，我们启动了一个<code v-pre>consumer</code>协程来从people管道中读取数据并进行打印操作。</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">// 管道模式是一种Go语言设计模式，它使用管道连接一系列数据处理组件，</span>
<span class="token comment">// 这些组件将输入进行转换并将其输出到下一个组件。这种模式非常适合需要处理大量数据的情况，</span>
<span class="token comment">// 因为它可以有效地利用多核处理器来并行处理数据。</span>

<span class="token comment">// producer函数用于向管道中写入数据</span>
<span class="token keyword">func</span> <span class="token function">producer</span><span class="token punctuation">(</span>data <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        data <span class="token operator">&lt;-</span> i
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// filter函数用于对数据进行过滤</span>
<span class="token keyword">func</span> <span class="token function">filter</span><span class="token punctuation">(</span>data <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> filterFunc <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    filteredData <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>filteredData<span class="token punctuation">)</span>
        <span class="token keyword">for</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token function">filterFunc</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                filteredData <span class="token operator">&lt;-</span> num
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> filteredData
<span class="token punctuation">}</span>

<span class="token comment">// transform函数用于对数据进行转换</span>
<span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">transform</span><span class="token punctuation">(</span>data <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> transformFunc <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> person<span class="token punctuation">)</span> <span class="token keyword">chan</span> person <span class="token punctuation">{</span>
    transformedData <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> person<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>transformedData<span class="token punctuation">)</span>
        <span class="token keyword">for</span> line <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
            transformedData <span class="token operator">&lt;-</span> <span class="token function">transformFunc</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> transformedData
<span class="token punctuation">}</span>

<span class="token comment">// consumer函数用于从管道中读取数据并进行打印操作</span>
<span class="token keyword">func</span> <span class="token function">consumer</span><span class="token punctuation">(</span>data <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这个例子中，我们创建了一个名为data的管道，并启动了一个producer协程来向管道中写入数据。</span>
    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

    <span class="token comment">// 然后我们通过filter函数将数据传递给一个名为evenNumbers的管道，该管道仅包含偶数。</span>
    evenNumbers <span class="token operator">:=</span> <span class="token function">filter</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 最后，我们启动了一个consumer协程来从evenNumbers管道中读取数据并进行打印操作。</span>
    <span class="token function">consumer</span><span class="token punctuation">(</span>evenNumbers<span class="token punctuation">)</span>

    <span class="token comment">// 在这个例子中，我们创建了一个名为data的管道，并启动了一个producer协程来向管道中写入数据。</span>
    data2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">producer</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span>

    <span class="token comment">// 然后我们通过transform函数将数据传递给一个名为people的管道，该管道包含了转换后的person对象。</span>
    people <span class="token operator">:=</span> <span class="token function">transform</span><span class="token punctuation">(</span>data2<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>line <span class="token builtin">string</span><span class="token punctuation">)</span> person <span class="token punctuation">{</span>
        parts <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>line<span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>
        name <span class="token operator">:=</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        age<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> person<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> name<span class="token punctuation">,</span> Age<span class="token punctuation">:</span> age<span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 最后，我们启动了一个consumer协程来从people管道中读取数据并进行打印操作。</span>
    <span class="token keyword">for</span> p <span class="token operator">:=</span> <span class="token keyword">range</span> people <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2>
<p><strong>管道模式的优点包括：</strong></p>
<ul>
<li>有效地利用多核处理器，实现并行处理</li>
<li>拆分逻辑，代码更容易理解，降低代码复杂度</li>
<li>可以轻松地实现数据过滤和转换</li>
<li>简化了组件之间的通信，减少了组件之间的耦合</li>
</ul>
<p><strong>缺点包括：</strong></p>
<ul>
<li>如果管道中的一个组件崩溃，整个管道都会受到影响</li>
<li>管道模式可能会导致性能下降，因为在管道中传递数据会带来一定的开销</li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '14.md' style='float:left'>⬆️上一节🔗</a><a href = '16.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/go-advancend/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


