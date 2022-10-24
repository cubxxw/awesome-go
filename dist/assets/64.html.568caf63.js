import{_ as c,r as p,o as i,c as o,a as n,b as a,w as l,e as u,d as s}from"./app.bf54247d.js";const k={},d=u(`<h1 id="_1-\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#_1-\u53CD\u5C04" aria-hidden="true">#</a> 1. \u53CD\u5C04</h1><p>\u53CD\u5C04\u662F\u6307\u5728\u7A0B\u5E8F\u8FD0\u884C\u671F\u5BF9\u7A0B\u5E8F\u672C\u8EAB\u8FDB\u884C\u8BBF\u95EE\u548C\u4FEE\u6539\u7684\u80FD\u529B</p><h3 id="_1-1-1-\u53D8\u91CF\u7684\u5185\u5728\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u53D8\u91CF\u7684\u5185\u5728\u673A\u5236" aria-hidden="true">#</a> 1.1.1. \u53D8\u91CF\u7684\u5185\u5728\u673A\u5236</h3><ul><li>\u53D8\u91CF\u5305\u542B\u7C7B\u578B\u4FE1\u606F\u548C\u503C\u4FE1\u606F var arr [10]int arr[0] = 10</li><li>\u7C7B\u578B\u4FE1\u606F\uFF1A\u662F\u9759\u6001\u7684\u5143\u4FE1\u606F\uFF0C\u662F\u9884\u5148\u5B9A\u4E49\u597D\u7684</li><li>\u503C\u4FE1\u606F\uFF1A\u662F\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u52A8\u6001\u6539\u53D8\u7684</li></ul><h3 id="_1-1-2-\u53CD\u5C04\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u53CD\u5C04\u7684\u4F7F\u7528" aria-hidden="true">#</a> 1.1.2. \u53CD\u5C04\u7684\u4F7F\u7528</h3><ul><li>reflect\u5305\u5C01\u88C5\u4E86\u53CD\u5C04\u76F8\u5173\u7684\u65B9\u6CD5</li><li>\u83B7\u53D6\u7C7B\u578B\u4FE1\u606F\uFF1Areflect.TypeOf\uFF0C\u662F\u9759\u6001\u7684</li><li>\u83B7\u53D6\u503C\u4FE1\u606F\uFF1Areflect.ValueOf\uFF0C\u662F\u52A8\u6001\u7684</li></ul><h3 id="_1-1-3-\u7A7A\u63A5\u53E3\u4E0E\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u7A7A\u63A5\u53E3\u4E0E\u53CD\u5C04" aria-hidden="true">#</a> 1.1.3. \u7A7A\u63A5\u53E3\u4E0E\u53CD\u5C04</h3><ul><li>\u53CD\u5C04\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u52A8\u6001\u83B7\u53D6\u7A0B\u5E8F\u7684\u5404\u79CD\u8BE6\u7EC6\u4FE1\u606F</li><li>\u53CD\u5C04\u83B7\u53D6interface\u7C7B\u578B\u4FE1\u606F</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u53CD\u5C04\u83B7\u53D6interface\u7C7B\u578B\u4FE1\u606F</span>

<span class="token keyword">func</span> <span class="token function">reflect_type</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
   <span class="token comment">// kind()\u53EF\u4EE5\u83B7\u53D6\u5177\u4F53\u7C7B\u578B</span>
   k <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
   <span class="token keyword">switch</span> k <span class="token punctuation">{</span>
   <span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Float64<span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a is float64\\n&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">case</span> reflect<span class="token punctuation">.</span>String<span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> x <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">3.4</span>
   <span class="token function">reflect_type</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53CD\u5C04\u83B7\u53D6interface\u503C\u4FE1\u606F</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u53CD\u5C04\u83B7\u53D6interface\u503C\u4FE1\u606F</span>

<span class="token keyword">func</span> <span class="token function">reflect_value</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    k <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
    <span class="token keyword">switch</span> k <span class="token punctuation">{</span>
    <span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Float64<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">Float</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">3.4</span>
    <span class="token function">reflect_value</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53CD\u5C04\u4FEE\u6539\u503C\u4FE1\u606F</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u53CD\u5C04\u4FEE\u6539\u503C</span>
<span class="token keyword">func</span> <span class="token function">reflect_set_value</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    k <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">switch</span> k <span class="token punctuation">{</span>
    <span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Float64<span class="token punctuation">:</span>
        <span class="token comment">// \u53CD\u5C04\u4FEE\u6539\u503C</span>
        v<span class="token punctuation">.</span><span class="token function">SetFloat</span><span class="token punctuation">(</span><span class="token number">6.9</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a is &quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">Float</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Ptr<span class="token punctuation">:</span>
        <span class="token comment">// Elem()\u83B7\u53D6\u5730\u5740\u6307\u5411\u7684\u503C</span>
        v<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetFloat</span><span class="token punctuation">(</span><span class="token number">7.9</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;case:&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Float</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// \u5730\u5740</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">3.4</span>
    <span class="token comment">// \u53CD\u5C04\u8BA4\u4E3A\u4E0B\u9762\u662F\u6307\u9488\u7C7B\u578B\uFF0C\u4E0D\u662Ffloat\u7C7B\u578B</span>
    <span class="token function">reflect_set_value</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main:&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-\u7ED3\u6784\u4F53\u4E0E\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#_1-1-4-\u7ED3\u6784\u4F53\u4E0E\u53CD\u5C04" aria-hidden="true">#</a> 1.1.4. \u7ED3\u6784\u4F53\u4E0E\u53CD\u5C04</h3><p>\u67E5\u770B\u7C7B\u578B\u3001\u5B57\u6BB5\u548C\u65B9\u6CD5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Id   <span class="token builtin">int</span>
    Name <span class="token builtin">string</span>
    Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED1\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>u User<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F20\u5165interface{}</span>
<span class="token keyword">func</span> <span class="token function">Poni</span><span class="token punctuation">(</span>o <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\uFF1A&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B57\u7B26\u4E32\u7C7B\u578B\uFF1A&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// \u83B7\u53D6\u503C</span>
    v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token comment">// \u53EF\u4EE5\u83B7\u53D6\u6240\u6709\u5C5E\u6027</span>
    <span class="token comment">// \u83B7\u53D6\u7ED3\u6784\u4F53\u5B57\u6BB5\u4E2A\u6570\uFF1At.NumField()</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D6\u6BCF\u4E2A\u5B57\u6BB5</span>
        f <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s : %v&quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> f<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
        <span class="token comment">// \u83B7\u53D6\u5B57\u6BB5\u7684\u503C\u4FE1\u606F</span>
        <span class="token comment">// Interface()\uFF1A\u83B7\u53D6\u5B57\u6BB5\u5BF9\u5E94\u7684\u503C</span>
        val <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;val :&quot;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;=================\u65B9\u6CD5====================&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">NumMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        m <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Method</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
    <span class="token function">Poni</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u533F\u540D\u5B57\u6BB5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Id   <span class="token builtin">int</span>
    Name <span class="token builtin">string</span>
    Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u533F\u540D\u5B57\u6BB5</span>
<span class="token keyword">type</span> Boy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    User
    Addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> Boy<span class="token punctuation">{</span>User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;bj&quot;</span><span class="token punctuation">}</span>
    t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    <span class="token comment">// Anonymous\uFF1A\u533F\u540D</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// \u503C\u4FE1\u606F</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u7ED3\u6784\u4F53\u7684\u503C</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Id   <span class="token builtin">int</span>
    Name <span class="token builtin">string</span>
    Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4FEE\u6539\u7ED3\u6784\u4F53\u503C</span>
<span class="token keyword">func</span> <span class="token function">SetValue</span><span class="token punctuation">(</span>o <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
    <span class="token comment">// \u83B7\u53D6\u6307\u9488\u6307\u5411\u7684\u5143\u7D20</span>
    v <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u53D6\u5B57\u6BB5</span>
    f <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">FieldByName</span><span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> f<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> reflect<span class="token punctuation">.</span>String <span class="token punctuation">{</span>
        f<span class="token punctuation">.</span><span class="token function">SetString</span><span class="token punctuation">(</span><span class="token string">&quot;kuteng&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;5lmh.com&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
    <span class="token function">SetValue</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u65B9\u6CD5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Id   <span class="token builtin">int</span>
    Name <span class="token builtin">string</span>
    Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>u User<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello\uFF1A&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;5lmh.com&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
    v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
    <span class="token comment">// \u83B7\u53D6\u65B9\u6CD5</span>
    m <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6784\u5EFA\u4E00\u4E9B\u53C2\u6570</span>
    args <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">{</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token string">&quot;6666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token comment">// \u6CA1\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\uFF1Avar args2 []reflect.Value</span>
    <span class="token comment">// \u8C03\u7528\u65B9\u6CD5\uFF0C\u9700\u8981\u4F20\u5165\u65B9\u6CD5\u7684\u53C2\u6570</span>
    m<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u83B7\u53D6\u5B57\u6BB5\u7684tag</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name1&quot; db:&quot;name2&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> s Student
    v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span>
    <span class="token comment">// \u7C7B\u578B</span>
    t <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u83B7\u53D6\u5B57\u6BB5</span>
    f <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>Tag<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>Tag<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-5-\u53CD\u5C04\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_1-1-5-\u53CD\u5C04\u7EC3\u4E60" aria-hidden="true">#</a> 1.1.5. \u53CD\u5C04\u7EC3\u4E60</h3><ul><li>\u4EFB\u52A1\uFF1A\u89E3\u6790\u5982\u4E0B\u914D\u7F6E\u6587\u4EF6 <ul><li>\u5E8F\u5217\u5316\uFF1A\u5C06\u7ED3\u6784\u4F53\u5E8F\u5217\u5316\u4E3A\u914D\u7F6E\u6587\u4EF6\u6570\u636E\u5E76\u4FDD\u5B58\u5230\u786C\u76D8</li><li>\u53CD\u5E8F\u5217\u5316\uFF1A\u5C06\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u53CD\u5E8F\u5217\u5316\u5230\u7A0B\u5E8F\u7684\u7ED3\u6784\u4F53</li></ul></li><li>\u914D\u7F6E\u6587\u4EF6\u6709server\u548Cmysql\u76F8\u5173\u914D\u7F6E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#this is comment
;this a comment
;[]\u8868\u793A\u4E00\u4E2Asection
[server]
ip = 10.238.2.2
port = 8080

[mysql]
username = root
passwd = admin
database = test
host = 192.168.10.10
port = 8000
timeout = 1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u5730\u5740\uFF1Ahttps://github.com/lu569368/Practise_reflex.git</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="63.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="65.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,30),r=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),f=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),g={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},q=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function y(h,w){const e=p("RouterLink"),t=p("ExternalLinkIcon");return i(),o("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[a(e,{to:"/Gomd_super/"},{default:l(()=>[r]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[f,n("a",g,[q,a(t)])])])])])}const x=c(k,[["render",y],["__file","64.html.vue"]]);export{x as default};
