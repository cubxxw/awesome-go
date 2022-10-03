<template><div><h1 id="_1-操作elasticsearch" tabindex="-1"><a class="header-anchor" href="#_1-操作elasticsearch" aria-hidden="true">#</a> 1. 操作ElasticSearch</h1>
<h3 id="_1-1-1-elastic-client" tabindex="-1"><a class="header-anchor" href="#_1-1-1-elastic-client" aria-hidden="true">#</a> 1.1.1. elastic client</h3>
<p>我们使用第三方库https://github.com/olivere/elastic 来连接ES并进行操作。</p>
<p>注意下载与你的ES相同版本的client，例如我们这里使用的ES是7.2.1的版本，那么我们下载的client也要与之对应为github.com/olivere/elastic/v7。</p>
<p>使用go.mod来管理依赖：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    require (
        github.com/olivere/elastic/v7 v7.0.4
    )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"context"</span>
    <span class="token string">"fmt"</span>

    <span class="token string">"github.com/olivere/elastic/v7"</span>
<span class="token punctuation">)</span>

<span class="token comment">// Elasticsearch demo</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name    <span class="token builtin">string</span> <span class="token string">`json:"name"`</span>
    Age     <span class="token builtin">int</span>    <span class="token string">`json:"age"`</span>
    Married <span class="token builtin">bool</span>   <span class="token string">`json:"married"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    client<span class="token punctuation">,</span> err <span class="token operator">:=</span> elastic<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>elastic<span class="token punctuation">.</span><span class="token function">SetURL</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1:9200"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// Handle error</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"connect to es success"</span><span class="token punctuation">)</span>
    p1 <span class="token operator">:=</span> Person<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"lmh"</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Married<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span>
    put1<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Index</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">BodyJson</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// Handle error</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Indexed user %s to index %s, type %s\n"</span><span class="token punctuation">,</span> put1<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> put1<span class="token punctuation">.</span>Index<span class="token punctuation">,</span> put1<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"context"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"log"</span>
    <span class="token string">"os"</span>
    <span class="token string">"reflect"</span>

    <span class="token string">"gopkg.in/olivere/elastic.v7"</span> <span class="token comment">//这里使用的是版本5，最新的是6，有改动</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> client <span class="token operator">*</span>elastic<span class="token punctuation">.</span>Client
<span class="token keyword">var</span> host <span class="token operator">=</span> <span class="token string">"http://127.0.0.1:9200/"</span>

<span class="token keyword">type</span> Employee <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    FirstName <span class="token builtin">string</span>   <span class="token string">`json:"first_name"`</span>
    LastName  <span class="token builtin">string</span>   <span class="token string">`json:"last_name"`</span>
    Age       <span class="token builtin">int</span>      <span class="token string">`json:"age"`</span>
    About     <span class="token builtin">string</span>   <span class="token string">`json:"about"`</span>
    Interests <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"interests"`</span>
<span class="token punctuation">}</span>

<span class="token comment">//初始化</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    errorlog <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">"APP"</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>LstdFlags<span class="token punctuation">)</span>
    <span class="token keyword">var</span> err <span class="token builtin">error</span>
    client<span class="token punctuation">,</span> err <span class="token operator">=</span> elastic<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>elastic<span class="token punctuation">.</span><span class="token function">SetErrorLog</span><span class="token punctuation">(</span>errorlog<span class="token punctuation">)</span><span class="token punctuation">,</span> elastic<span class="token punctuation">.</span><span class="token function">SetURL</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    info<span class="token punctuation">,</span> code<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Elasticsearch returned with code %d and version %s\n"</span><span class="token punctuation">,</span> code<span class="token punctuation">,</span> info<span class="token punctuation">.</span>Version<span class="token punctuation">.</span>Number<span class="token punctuation">)</span>

    esversion<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">ElasticsearchVersion</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Elasticsearch version %s\n"</span><span class="token punctuation">,</span> esversion<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">/*下面是简单的CURD*/</span>

<span class="token comment">//创建</span>
<span class="token keyword">func</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//使用结构体</span>
    e1 <span class="token operator">:=</span> Employee<span class="token punctuation">{</span><span class="token string">"Jane"</span><span class="token punctuation">,</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token string">"I like to collect rock albums"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"music"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    put1<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Index</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Id</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">BodyJson</span><span class="token punctuation">(</span>e1<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Indexed tweet %s to index s%s, type %s\n"</span><span class="token punctuation">,</span> put1<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> put1<span class="token punctuation">.</span>Index<span class="token punctuation">,</span> put1<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>

    <span class="token comment">//使用字符串</span>
    e2 <span class="token operator">:=</span> <span class="token string">`{"first_name":"John","last_name":"Smith","age":25,"about":"I love to go rock climbing","interests":["sports","music"]}`</span>
    put2<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Index</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Id</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">BodyJson</span><span class="token punctuation">(</span>e2<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Indexed tweet %s to index s%s, type %s\n"</span><span class="token punctuation">,</span> put2<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> put2<span class="token punctuation">.</span>Index<span class="token punctuation">,</span> put2<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>

    e3 <span class="token operator">:=</span> <span class="token string">`{"first_name":"Douglas","last_name":"Fir","age":35,"about":"I like to build cabinets","interests":["forestry"]}`</span>
    put3<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Index</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Id</span><span class="token punctuation">(</span><span class="token string">"3"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">BodyJson</span><span class="token punctuation">(</span>e3<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Indexed tweet %s to index s%s, type %s\n"</span><span class="token punctuation">,</span> put3<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> put3<span class="token punctuation">.</span>Index<span class="token punctuation">,</span> put3<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//删除</span>
<span class="token keyword">func</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    res<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Id</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"delete result %s\n"</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>Result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//修改</span>
<span class="token keyword">func</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Index</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Id</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Doc</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">88</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"update age %s\n"</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>Result<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//查找</span>
<span class="token keyword">func</span> <span class="token function">gets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//通过id查找</span>
    get1<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Id</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> get1<span class="token punctuation">.</span>Found <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Got document %s in version %d from index %s, type %s\n"</span><span class="token punctuation">,</span> get1<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> get1<span class="token punctuation">.</span>Version<span class="token punctuation">,</span> get1<span class="token punctuation">.</span>Index<span class="token punctuation">,</span> get1<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//搜索</span>
<span class="token keyword">func</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">*</span>elastic<span class="token punctuation">.</span>SearchResult
    <span class="token keyword">var</span> err <span class="token builtin">error</span>
    <span class="token comment">//取所有</span>
    res<span class="token punctuation">,</span> err <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Search</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">printEmployee</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">//字段相等</span>
    q <span class="token operator">:=</span> elastic<span class="token punctuation">.</span><span class="token function">NewQueryStringQuery</span><span class="token punctuation">(</span><span class="token string">"last_name:Smith"</span><span class="token punctuation">)</span>
    res<span class="token punctuation">,</span> err <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Search</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">printEmployee</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">//条件查询</span>
    <span class="token comment">//年龄大于30岁的</span>
    boolQ <span class="token operator">:=</span> elastic<span class="token punctuation">.</span><span class="token function">NewBoolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    boolQ<span class="token punctuation">.</span><span class="token function">Must</span><span class="token punctuation">(</span>elastic<span class="token punctuation">.</span><span class="token function">NewMatchQuery</span><span class="token punctuation">(</span><span class="token string">"last_name"</span><span class="token punctuation">,</span> <span class="token string">"smith"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    boolQ<span class="token punctuation">.</span><span class="token function">Filter</span><span class="token punctuation">(</span>elastic<span class="token punctuation">.</span><span class="token function">NewRangeQuery</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Gt</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    res<span class="token punctuation">,</span> err <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Search</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">printEmployee</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">//短语搜索 搜索about字段中有 rock climbing</span>
    matchPhraseQuery <span class="token operator">:=</span> elastic<span class="token punctuation">.</span><span class="token function">NewMatchPhraseQuery</span><span class="token punctuation">(</span><span class="token string">"about"</span><span class="token punctuation">,</span> <span class="token string">"rock climbing"</span><span class="token punctuation">)</span>
    res<span class="token punctuation">,</span> err <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Search</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>matchPhraseQuery<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">printEmployee</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    <span class="token comment">//分析 interests</span>
    aggs <span class="token operator">:=</span> elastic<span class="token punctuation">.</span><span class="token function">NewTermsAggregation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">"interests"</span><span class="token punctuation">)</span>
    res<span class="token punctuation">,</span> err <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Search</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Aggregation</span><span class="token punctuation">(</span><span class="token string">"all_interests"</span><span class="token punctuation">,</span> aggs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">printEmployee</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> err<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//简单分页</span>
<span class="token keyword">func</span> <span class="token function">list</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> page <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> size <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> page <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"param error"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    res<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Search</span><span class="token punctuation">(</span><span class="token string">"megacorp"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Type</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Size</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">From</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> size<span class="token punctuation">)</span><span class="token punctuation">.</span>
        <span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">printEmployee</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> err<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//打印查询到的Employee</span>
<span class="token keyword">func</span> <span class="token function">printEmployee</span><span class="token punctuation">(</span>res <span class="token operator">*</span>elastic<span class="token punctuation">.</span>SearchResult<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> typ Employee
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> res<span class="token punctuation">.</span><span class="token function">Each</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>typ<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//从搜索结果中取数据的方法</span>
        t <span class="token operator">:=</span> item<span class="token punctuation">.</span><span class="token punctuation">(</span>Employee<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">gets</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">list</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多使用详见文档：https://godoc.org/github.com/olivere/elastic</p>
<p>赏</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '52.md' style='float:left'>⬆️上一节🔗</a><a href = '54.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


