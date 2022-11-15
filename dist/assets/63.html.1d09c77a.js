import{_ as p,r as e,o,c as l,a as n,b as a,w as c,d as u,e as s}from"./app.60443488.js";const r={},d=u(`<h1 id="_1-\u6570\u636E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a> 1. \u6570\u636E\u683C\u5F0F</h1><h3 id="_1-1-1-\u6570\u636E\u683C\u5F0F\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u6570\u636E\u683C\u5F0F\u4ECB\u7ECD" aria-hidden="true">#</a> 1.1.1. \u6570\u636E\u683C\u5F0F\u4ECB\u7ECD</h3><ul><li>\u662F\u7CFB\u7EDF\u4E2D\u6570\u636E\u4EA4\u4E92\u4E0D\u53EF\u7F3A\u5C11\u7684\u5185\u5BB9</li><li>\u8FD9\u91CC\u4E3B\u8981\u4ECB\u7ECDJSON\u3001XML\u3001MSGPack</li></ul><h3 id="_1-1-2-json" tabindex="-1"><a class="header-anchor" href="#_1-1-2-json" aria-hidden="true">#</a> 1.1.2. JSON</h3><ul><li>json\u662F\u5B8C\u5168\u72EC\u7ACB\u4E8E\u8BED\u8A00\u7684\u6587\u672C\u683C\u5F0F\uFF0C\u662Fk-v\u7684\u5F62\u5F0F name:zs</li><li>\u5E94\u7528\u573A\u666F\uFF1A\u524D\u540E\u7AEF\u4EA4\u4E92\uFF0C\u7CFB\u7EDF\u95F4\u6570\u636E\u4EA4\u4E92</li></ul><p><img src="https://www.topgoer.com/static/changyongbiaozhunku/1.png" alt="img"></p><ul><li>json\u4F7F\u7528go\u8BED\u8A00\u5185\u7F6E\u7684encoding/json \u6807\u51C6\u5E93</li><li>\u7F16\u7801json\u4F7F\u7528json.Marshal()\u51FD\u6570\u53EF\u4EE5\u5BF9\u4E00\u7EC4\u6570\u636E\u8FDB\u884CJSON\u683C\u5F0F\u7684\u7F16\u7801</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    func Marshal(v interface{}) ([]byte, error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B\u8FC7\u7ED3\u6784\u4F53\u751F\u6210json</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name  <span class="token builtin">string</span>
    Hobby <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token string">&quot;5lmh.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5973&quot;</span><span class="token punctuation">}</span>
    <span class="token comment">// \u7F16\u7801json</span>
    b<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json err &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u683C\u5F0F\u5316\u8F93\u51FA</span>
    b<span class="token punctuation">,</span> err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">MarshalIndent</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;     &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json err &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="struct-tag" tabindex="-1"><a class="header-anchor" href="#struct-tag" aria-hidden="true">#</a> struct tag</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    type Person struct {
        //&quot;-&quot;\u662F\u5FFD\u7565\u7684\u610F\u601D
        Name  string \`json:&quot;-&quot;\`
        Hobby string \`json:&quot;hobby&quot; \`
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B\u901A\u8FC7map\u751F\u6210json</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    student <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    student<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;5lmh.com&quot;</span>
    student<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">18</span>
    student<span class="token punctuation">[</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;man&quot;</span>
    b<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u89E3\u7801json\u4F7F\u7528json.Unmarshal()\u51FD\u6570\u53EF\u4EE5\u5BF9\u4E00\u7EC4\u6570\u636E\u8FDB\u884CJSON\u683C\u5F0F\u7684\u89E3\u7801</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    func Unmarshal(data []byte, v interface{}) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B\u89E3\u6790\u5230\u7ED3\u6784\u4F53</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Age       <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age,string&quot;\`</span>
    Name      <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
    Niubility <span class="token builtin">bool</span>   <span class="token string">\`json:&quot;niubility&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5047\u6570\u636E</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">\`{&quot;age&quot;:&quot;18&quot;,&quot;name&quot;:&quot;5lmh.com&quot;,&quot;marry&quot;:false}\`</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> p Person
    err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token operator">&amp;</span>p<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B\u89E3\u6790\u5230interface</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5047\u6570\u636E</span>
    <span class="token comment">// int\u548Cfloat64\u90FD\u5F53float64</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">\`{&quot;age&quot;:1.3,&quot;name&quot;:&quot;5lmh.com&quot;,&quot;marry&quot;:false}\`</span><span class="token punctuation">)</span>

    <span class="token comment">// \u58F0\u660E\u63A5\u53E3</span>
    <span class="token keyword">var</span> i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token operator">&amp;</span>i<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u81EA\u52A8\u8F6C\u5230map</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token comment">// \u53EF\u4EE5\u5224\u65AD\u7C7B\u578B</span>
    m <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> vv <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot;\u662Ffloat64\u7C7B\u578B&quot;</span><span class="token punctuation">,</span> vv<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot;\u662Fstring\u7C7B\u578B&quot;</span><span class="token punctuation">,</span> vv<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5176\u4ED6&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-xml" tabindex="-1"><a class="header-anchor" href="#_1-1-3-xml" aria-hidden="true">#</a> 1.1.3. XML</h3><ul><li>\u662F\u53EF\u6269\u5C55\u6807\u8BB0\u8BED\u8A00\uFF0C\u5305\u542B\u58F0\u660E\u3001\u6839\u6807\u7B7E\u3001\u5B50\u5143\u7D20\u548C\u5C5E\u6027</li><li>\u5E94\u7528\u573A\u666F\uFF1A\u914D\u7F6E\u6587\u4EF6\u4EE5\u53CAwebService</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
    &lt;servers version=&quot;1&quot;&gt;
        &lt;server&gt;
            &lt;serverName&gt;Shanghai_VPN&lt;/serverName&gt;
            &lt;serverIP&gt;127.0.0.1&lt;/serverIP&gt;
        &lt;/server&gt;
        &lt;server&gt;
            &lt;serverName&gt;Beijing_VPN&lt;/serverName&gt;
            &lt;serverIP&gt;127.0.0.2&lt;/serverIP&gt;
        &lt;/server&gt;
    &lt;/servers&gt;
package main

import (
   &quot;encoding/xml&quot;
   &quot;fmt&quot;
   &quot;io/ioutil&quot;
)

// \u62BD\u53D6\u5355\u4E2Aserver\u5BF9\u8C61
type Server struct {
   ServerName string \`xml:&quot;serverName&quot;\`
   ServerIP   string \`xml:&quot;serverIP&quot;\`
}

type Servers struct {
   Name    xml.Name \`xml:&quot;servers&quot;\`
   Version int   \`xml:&quot;version&quot;\`
   Servers []Server \`xml:&quot;server&quot;\`
}

func main() {
   data, err := ioutil.ReadFile(&quot;D:/my.xml&quot;)
   if err != nil {
      fmt.Println(err)
      return
   }
   var servers Servers
   err = xml.Unmarshal(data, &amp;servers)
   if err != nil {
      fmt.Println(err)
      return
   }
   fmt.Printf(&quot;xml: %#v\\n&quot;, servers)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-msgpack" tabindex="-1"><a class="header-anchor" href="#_1-1-4-msgpack" aria-hidden="true">#</a> 1.1.4. MSGPack</h3><ul><li>MSGPack\u662F\u4E8C\u8FDB\u5236\u7684json\uFF0C\u6027\u80FD\u66F4\u5FEB\uFF0C\u66F4\u7701\u7A7A\u95F4</li><li>\u9700\u8981\u5B89\u88C5\u7B2C\u4E09\u65B9\u5305\uFF1Ago get -u github.com/vmihailenco/msgpack</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;github.com/vmihailenco/msgpack&quot;</span>
   <span class="token string">&quot;io/ioutil&quot;</span>
   <span class="token string">&quot;math/rand&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   Name <span class="token builtin">string</span>
   Age  <span class="token builtin">int</span>
   Sex  <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E8C\u8FDB\u5236\u5199\u51FA</span>
<span class="token keyword">func</span> <span class="token function">writerJson</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> persons <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Person
   <span class="token comment">// \u5047\u6570\u636E</span>
   <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
      p <span class="token operator">:=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>
         Name<span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;name%d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>
         Age<span class="token punctuation">:</span>  rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         Sex<span class="token punctuation">:</span>  <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      persons <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>persons<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// \u4E8C\u8FDB\u5236json\u5E8F\u5217\u5316</span>
   data<span class="token punctuation">,</span> err <span class="token operator">:=</span> msgpack<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>persons<span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   err <span class="token operator">=</span> ioutil<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E8C\u8FDB\u5236\u8BFB\u53D6</span>
<span class="token keyword">func</span> <span class="token function">readJson</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> persons <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Person
   <span class="token comment">// \u8BFB\u6587\u4EF6</span>
   data<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// \u53CD\u5E8F\u5217\u5316</span>
   err <span class="token operator">=</span> msgpack<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token operator">&amp;</span>persons<span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> persons <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//err := writerJson(&quot;D:/person.dat&quot;)</span>
   <span class="token comment">//if err != nil {</span>
   <span class="token comment">// fmt.Println(err)</span>
   <span class="token comment">// return</span>
   <span class="token comment">//}</span>
   err <span class="token operator">:=</span> <span class="token function">readJson</span><span class="token punctuation">(</span><span class="token string">&quot;D:/person.dat&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="62.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="64.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,29),k=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),g=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),f={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},q=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function h(y,w){const i=e("RouterLink"),t=e("ExternalLinkIcon");return o(),l("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[a(i,{to:"/Gomd_super/"},{default:c(()=>[k]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[g,n("a",f,[q,a(t)])])])])])}const _=p(r,[["render",h],["__file","63.html.vue"]]);export{_ as default};
