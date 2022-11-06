import{_ as e,r as p,o as c,c as u,a as n,b as a,w as l,d as i,e as s}from"./app.ebf2b957.js";const k={},r=i(`<h1 id="_1-\u67E5\u8BE2\u7ED3\u679C\u53CD\u5C04\u7ED3\u6784\u4F53-mysql" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u8BE2\u7ED3\u679C\u53CD\u5C04\u7ED3\u6784\u4F53-mysql" aria-hidden="true">#</a> 1. \u67E5\u8BE2\u7ED3\u679C\u53CD\u5C04\u7ED3\u6784\u4F53(mysql)</h1><p>\u672C\u6587\u8BB2\u89E3\u7684\u5B9E\u4F8B\u662F\u4ECEmysql\u67E5\u8BE2\u8FC7\u6765\u7684\u6570\u636E\u5982\u4F55\u53CD\u5C04\u5230\u7ED3\u6784\u4F53\u5B57\u6BB5,\u5177\u4F53\u5B9E\u73B0\u65B9\u6CD5\u5982\u4E0B\u4EE3\u7801;</p><p>\u4EE3\u7801\u76EE\u5F55\uFF1A</p><p>1129</p><p>-common</p><p>--common.go //\u662F\u5C01\u88C5\u7684\u4EE3\u7801</p><p>-main.go //\u662F\u6D4B\u8BD5\u4EE3\u7801</p><p>\u4EE3\u7801\u7684\u5C01\u88C5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> common

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;errors&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u6839\u636E\u7ED3\u6784\u4F53\u4E2Dsql\u6807\u7B7E\u6620\u5C04\u6570\u636E\u5230\u7ED3\u6784\u4F53\u4E2D\u5E76\u4E14\u8F6C\u6362\u7C7B\u578B</span>
<span class="token keyword">func</span> <span class="token function">DataToStructByTagSql</span><span class="token punctuation">(</span>data <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> obj <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    objValue <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> objValue<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6sql\u5BF9\u5E94\u7684\u503C</span>
        value <span class="token operator">:=</span> data<span class="token punctuation">[</span>objValue<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>Tag<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token comment">//\u83B7\u53D6\u5BF9\u5E94\u5B57\u6BB5\u7684\u540D\u79F0</span>
        name <span class="token operator">:=</span> objValue<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>Name
        <span class="token comment">//\u83B7\u53D6\u5BF9\u5E94\u5B57\u6BB5\u7C7B\u578B</span>
        structFieldType <span class="token operator">:=</span> objValue<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">//\u83B7\u53D6\u53D8\u91CF\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199&quot;string\u7C7B\u578B&quot;</span>
        val <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token keyword">var</span> err <span class="token builtin">error</span>
        <span class="token keyword">if</span> structFieldType <span class="token operator">!=</span> val<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u7C7B\u578B\u8F6C\u6362</span>
            val<span class="token punctuation">,</span> err <span class="token operator">=</span> <span class="token function">TypeConversion</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> structFieldType<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u7C7B\u578B\u8F6C\u6362</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u8BBE\u7F6E\u7C7B\u578B\u503C</span>
        objValue<span class="token punctuation">.</span><span class="token function">FieldByName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u7C7B\u578B\u8F6C\u6362</span>
<span class="token keyword">func</span> <span class="token function">TypeConversion</span><span class="token punctuation">(</span>value <span class="token builtin">string</span><span class="token punctuation">,</span> ntype <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;string&quot;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;time.Time&quot;</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">ParseInLocation</span><span class="token punctuation">(</span><span class="token string">&quot;2006-01-02 15:04:05&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> time<span class="token punctuation">.</span>Local<span class="token punctuation">)</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;Time&quot;</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">ParseInLocation</span><span class="token punctuation">(</span><span class="token string">&quot;2006-01-02 15:04:05&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> time<span class="token punctuation">.</span>Local<span class="token punctuation">)</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;int&quot;</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;int8&quot;</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token function">int8</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;int32&quot;</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;int64&quot;</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;float32&quot;</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token function">float32</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ntype <span class="token operator">==</span> <span class="token string">&quot;float64&quot;</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>

    <span class="token comment">//else if .......\u589E\u52A0\u5176\u4ED6\u4E00\u4E9B\u7C7B\u578B\u7684\u8F6C\u6362</span>

    <span class="token keyword">return</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u77E5\u7684\u7C7B\u578B\uFF1A&quot;</span> <span class="token operator">+</span> ntype<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u7684\u6D4B\u8BD5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>

    <span class="token string">&quot;github.com/student/1129/common&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//Product Product\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Product <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID           <span class="token builtin">int64</span>  <span class="token string">\`json:&quot;id&quot; sql:&quot;id&quot;\`</span>
    ProductClass <span class="token builtin">string</span> <span class="token string">\`json:&quot;ProductClass&quot; sql:&quot;ProductClass&quot;\`</span>
    ProductName  <span class="token builtin">string</span> <span class="token string">\`json:&quot;ProductName&quot; sql:&quot;productName&quot;\`</span>
    ProductNum   <span class="token builtin">int64</span>  <span class="token string">\`json:&quot;ProductNum&quot; sql:&quot;productNum&quot;\`</span>
    ProductImage <span class="token builtin">string</span> <span class="token string">\`json:&quot;ProductImage&quot; sql:&quot;productImage&quot;\`</span>
    ProductURL   <span class="token builtin">string</span> <span class="token string">\`json:&quot;ProductUrl&quot; sql:&quot;productUrl&quot; \`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u8FD9\u5757\u662F\u6A21\u62DFmysql\u83B7\u53D6\u5355\u6761\u7684\u6570\u636E\u53CD\u5C04\u5230\u7ED3\u6784\u4F53</span>
    data <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ProductClass&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;5lmh.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productNum&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;40&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productImage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://www.5lmh.com/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productUrl&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://www.5lmh.com/&quot;</span><span class="token punctuation">}</span>
    productResult <span class="token operator">:=</span> <span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span>
    common<span class="token punctuation">.</span><span class="token function">DataToStructByTagSql</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> productResult<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>productResult<span class="token punctuation">)</span>
    <span class="token comment">//\u8FD9\u5757\u662F\u6A21\u62DFmysql\u83B7\u53D6\u6240\u6709\u7684\u6570\u636E\u53CD\u5C04\u5230\u7ED3\u6784\u4F53</span>
    Alldata <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ProductClass&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;5lmh.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productNum&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;40&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productImage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://www.5lmh.com/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productUrl&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://www.5lmh.com/&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ProductClass&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;5lmh.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productNum&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;40&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productImage&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://www.5lmh.com/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;productUrl&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://www.5lmh.com/&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> productArray <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Product
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> Alldata <span class="token punctuation">{</span>
        Allproduct <span class="token operator">:=</span> <span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span>
        common<span class="token punctuation">.</span><span class="token function">DataToStructByTagSql</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> Allproduct<span class="token punctuation">)</span>
        productArray <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>productArray<span class="token punctuation">,</span> Allproduct<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> vv <span class="token operator">:=</span> <span class="token keyword">range</span> productArray <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>vv<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="83.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="85.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,13),d=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),q=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),f={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},g=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function y(w,h){const o=p("RouterLink"),t=p("ExternalLinkIcon");return c(),u("div",null,[r,n("ul",null,[n("li",null,[n("p",null,[a(o,{to:"/Gomd_super/"},{default:l(()=>[d]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[q,n("a",f,[g,a(t)])])])])])}const P=e(k,[["render",y],["__file","84.html.vue"]]);export{P as default};
