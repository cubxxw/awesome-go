import{_ as i,r as o,o as u,c as r,a as n,b as a,w as t,e as s,d as c}from"./app.d1688da4.js";const k={},d=n("h1",{id:"\u722C\u866B\u5C0F\u6848\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u722C\u866B\u5C0F\u6848\u4F8B","aria-hidden":"true"},"#"),s(" \u722C\u866B\u5C0F\u6848\u4F8B")],-1),v={class:"table-of-contents"},m=s("1.1.1. \u722C\u866B\u6B65\u9AA4"),b=s("1.1.2. \u6B63\u5219\u8868\u8FBE\u5F0F"),f=s("1.1.3. \u5E76\u53D1\u722C\u53D6\u7F8E\u56FE"),g=s("END \u94FE\u63A5"),h=c(`<p>[toc]</p><h3 id="_1-1-1-\u722C\u866B\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u722C\u866B\u6B65\u9AA4" aria-hidden="true">#</a> 1.1.1. \u722C\u866B\u6B65\u9AA4</h3><ul><li>\u660E\u786E\u76EE\u6807\uFF08\u786E\u5B9A\u5728\u54EA\u4E2A\u7F51\u7AD9\u641C\u7D22\uFF09</li><li>\u722C\uFF08\u722C\u4E0B\u5185\u5BB9\uFF09</li><li>\u53D6\uFF08\u7B5B\u9009\u60F3\u8981\u7684\uFF09</li><li>\u5904\u7406\u6570\u636E\uFF08\u6309\u7167\u4F60\u7684\u60F3\u6CD5\u53BB\u5904\u7406\uFF09</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io/ioutil&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;regexp&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u8FD9\u4E2A\u53EA\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u7248\u672C\u53EA\u662F\u83B7\u53D6QQ\u90AE\u7BB1\u5E76\u4E14\u6CA1\u6709\u8FDB\u884C\u5C01\u88C5\u64CD\u4F5C\uFF0C\u53E6\u5916\u722C\u51FA\u6765\u7684\u6570\u636E\u4E5F\u6CA1\u6709\u8FDB\u884C\u53BB\u91CD\u64CD\u4F5C</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// \\d\u662F\u6570\u5B57</span>
    reQQEmail <span class="token operator">=</span> <span class="token string">\`(\\d+)@qq.com\`</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u722C\u90AE\u7BB1</span>
<span class="token keyword">func</span> <span class="token function">GetEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.\u53BB\u7F51\u7AD9\u62FF\u6570\u636E</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;https://tieba.baidu.com/p/6051076813?red_tag=1573533731&quot;</span><span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;http.Get url&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.\u8BFB\u53D6\u9875\u9762\u5185\u5BB9</span>
    pageBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;ioutil.ReadAll&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5B57\u8282\u8F6C\u5B57\u7B26\u4E32</span>
    pageStr <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>pageBytes<span class="token punctuation">)</span>
    <span class="token comment">//fmt.Println(pageStr)</span>
    <span class="token comment">// 3.\u8FC7\u6EE4\u6570\u636E\uFF0C\u8FC7\u6EE4qq\u90AE\u7BB1</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reQQEmail<span class="token punctuation">)</span>
    <span class="token comment">// -1\u4EE3\u8868\u53D6\u5168\u90E8</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">//fmt.Println(results)</span>

    <span class="token comment">// \u904D\u5386\u7ED3\u679C</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;email:&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;qq:&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5904\u7406\u5F02\u5E38</span>
<span class="token keyword">func</span> <span class="token function">HandleError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> why <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>why<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">GetEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 1.1.2. \u6B63\u5219\u8868\u8FBE\u5F0F</h3><ul><li>\u6587\u6863\uFF1Ahttps://studygolang.com/pkgdoc</li><li>API <ul><li>re := regexp.MustCompile(reStr)\uFF0C\u4F20\u5165\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5F97\u5230\u6B63\u5219\u8868\u8FBE\u5F0F\u5BF9\u8C61</li><li>ret := re.FindAllStringSubmatch(srcStr,-1)\uFF1A\u7528\u6B63\u5219\u5BF9\u8C61\uFF0C\u83B7\u53D6\u9875\u9762\u9875\u9762\uFF0CsrcStr\u662F\u9875\u9762\u5185\u5BB9\uFF0C-1\u4EE3\u8868\u53D6\u5168\u90E8</li></ul></li><li>\u722C\u90AE\u7BB1</li><li>\u65B9\u6CD5\u62BD\u53D6</li><li>\u722C\u8D85\u94FE\u63A5</li><li>\u722C\u624B\u673A\u53F7 <ul><li>http://www.zhaohaowang.com/ \u5982\u679C\u8FDE\u63A5\u5931\u6548\u4E86\u81EA\u5DF1\u627E\u4E00\u4E2A\u6709\u624B\u673A\u53F7\u7684\u5C31\u597D\u4E86</li></ul></li><li>\u722C\u8EAB\u4EFD\u8BC1\u53F7 <ul><li>http://henan.qq.com/a/20171107/069413.htm \u5982\u679C\u8FDE\u63A5\u5931\u6548\u4E86\u81EA\u5DF1\u627E\u4E00\u4E2A\u5C31\u597D\u4E86</li></ul></li><li>\u722C\u56FE\u7247\u94FE\u63A5</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io/ioutil&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;regexp&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// w\u4EE3\u8868\u5927\u5C0F\u5199\u5B57\u6BCD+\u6570\u5B57+\u4E0B\u5212\u7EBF</span>
    reEmail <span class="token operator">=</span> <span class="token string">\`\\w+@\\w+\\.\\w+\`</span>
    <span class="token comment">// s?\u6709\u6216\u8005\u6CA1\u6709s</span>
    <span class="token comment">// +\u4EE3\u8868\u51FA1\u6B21\u6216\u591A\u6B21</span>
    <span class="token comment">//\\s\\S\u5404\u79CD\u5B57\u7B26</span>
    <span class="token comment">// +?\u4EE3\u8868\u8D2A\u5A6A\u6A21\u5F0F</span>
    reLinke  <span class="token operator">=</span> <span class="token string">\`href=&quot;(https?://[\\s\\S]+?)&quot;\`</span>
    rePhone  <span class="token operator">=</span> <span class="token string">\`1[3456789]\\d\\s?\\d{4}\\s?\\d{4}\`</span>
    reIdcard <span class="token operator">=</span> <span class="token string">\`[123456789]\\d{5}((19\\d{2})|(20[01]\\d))((0[1-9])|(1[012]))((0[1-9])|([12]\\d)|(3[01]))\\d{3}[\\dXx]\`</span>
    reImg    <span class="token operator">=</span> <span class="token string">\`https?://[^&quot;]+?(\\.((jpg)|(png)|(jpeg)|(gif)|(bmp)))\`</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5904\u7406\u5F02\u5E38</span>
<span class="token keyword">func</span> <span class="token function">HandleError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> why <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>why<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetEmail2</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reEmail<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u62BD\u53D6\u6839\u636Eurl\u83B7\u53D6\u5185\u5BB9</span>
<span class="token keyword">func</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>pageStr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;http.Get url&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.\u8BFB\u53D6\u9875\u9762\u5185\u5BB9</span>
    pageBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;ioutil.ReadAll&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5B57\u8282\u8F6C\u5B57\u7B26\u4E32</span>
    pageStr <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>pageBytes<span class="token punctuation">)</span>
    <span class="token keyword">return</span> pageStr
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2.\u62BD\u53D6\u7684\u722C\u90AE\u7BB1</span>
    <span class="token comment">// GetEmail2(&quot;https://tieba.baidu.com/p/6051076813?red_tag=1573533731&quot;)</span>
    <span class="token comment">// 3.\u722C\u94FE\u63A5</span>
    <span class="token comment">//GetLink(&quot;http://www.baidu.com/s?wd=%E8%B4%B4%E5%90%A7%20%E7%95%99%E4%B8%8B%E9%82%AE%E7%AE%B1&amp;rsv_spt=1&amp;rsv_iqid=0x98ace53400003985&amp;issp=1&amp;f=8&amp;rsv_bp=1&amp;rsv_idx=2&amp;ie=utf-8&amp;tn=baiduhome_pg&amp;rsv_enter=1&amp;rsv_dl=ib&amp;rsv_sug2=0&amp;inputT=5197&amp;rsv_sug4=6345&quot;)</span>
    <span class="token comment">// 4.\u722C\u624B\u673A\u53F7</span>
    <span class="token comment">//GetPhone(&quot;https://www.zhaohaowang.com/&quot;)</span>
    <span class="token comment">// 5.\u722C\u8EAB\u4EFD\u8BC1\u53F7</span>
    <span class="token comment">//GetIdCard(&quot;https://henan.qq.com/a/20171107/069413.htm&quot;)</span>
    <span class="token comment">// 6.\u722C\u56FE\u7247</span>
    <span class="token comment">// GetImg(&quot;http://image.baidu.com/search/index?tn=baiduimage&amp;ps=1&amp;ct=201326592&amp;lm=-1&amp;cl=2&amp;nc=1&amp;ie=utf-8&amp;word=%E7%BE%8E%E5%A5%B3&quot;)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetIdCard</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reIdcard<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u722C\u94FE\u63A5</span>
<span class="token keyword">func</span> <span class="token function">GetLink</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reLinke<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u722C\u624B\u673A\u53F7</span>
<span class="token keyword">func</span> <span class="token function">GetPhone</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>rePhone<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetImg</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reImg<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-\u5E76\u53D1\u722C\u53D6\u7F8E\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u5E76\u53D1\u722C\u53D6\u7F8E\u56FE" aria-hidden="true">#</a> 1.1.3. \u5E76\u53D1\u722C\u53D6\u7F8E\u56FE</h3><p>\u4E0B\u9762\u7684\u4E24\u4E2A\u662F\u5373\u5C06\u8981\u722C\u7684\u7F51\u7AD9\uFF0C\u5982\u679C\u7F51\u5740\u5931\u6548\u81EA\u5DF1\u6362\u4E00\u4E2A\u5C31\u597D\u4E86</p>`,9),w={href:"https://www.bizhizu.cn/shouji/tag-%E5%8F%AF%E7%88%B1/1.html",target:"_blank",rel:"noopener noreferrer"},y=s("https://www.bizhizu.cn/shouji/tag-%E5%8F%AF%E7%88%B1/1.html"),q=c(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io/ioutil&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;regexp&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
    <span class="token string">&quot;strings&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">HandleError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> why <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>why<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0B\u8F7D\u56FE\u7247\uFF0C\u4F20\u5165\u7684\u662F\u56FE\u7247\u53EB\u4EC0\u4E48</span>
<span class="token keyword">func</span> <span class="token function">DownloadFile</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">,</span> filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ok <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;http.get.url&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;resp.body&quot;</span><span class="token punctuation">)</span>
    filename <span class="token operator">=</span> <span class="token string">&quot;E:/topgoer.com/src/github.com/student/3.0/img/&quot;</span> <span class="token operator">+</span> filename
    <span class="token comment">// \u5199\u51FA\u6570\u636E</span>
    err <span class="token operator">=</span> ioutil<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> bytes<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5E76\u53D1\u722C\u601D\u8DEF\uFF1A</span>
<span class="token comment">// 1.\u521D\u59CB\u5316\u6570\u636E\u7BA1\u9053</span>
<span class="token comment">// 2.\u722C\u866B\u5199\u51FA\uFF1A26\u4E2A\u534F\u7A0B\u5411\u7BA1\u9053\u4E2D\u6DFB\u52A0\u56FE\u7247\u94FE\u63A5</span>
<span class="token comment">// 3.\u4EFB\u52A1\u7EDF\u8BA1\u534F\u7A0B\uFF1A\u68C0\u67E526\u4E2A\u4EFB\u52A1\u662F\u5426\u90FD\u5B8C\u6210\uFF0C\u5B8C\u6210\u5219\u5173\u95ED\u6570\u636E\u7BA1\u9053</span>
<span class="token comment">// 4.\u4E0B\u8F7D\u534F\u7A0B\uFF1A\u4ECE\u7BA1\u9053\u91CC\u8BFB\u53D6\u94FE\u63A5\u5E76\u4E0B\u8F7D</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// \u5B58\u653E\u56FE\u7247\u94FE\u63A5\u7684\u6570\u636E\u7BA1\u9053</span>
    chanImageUrls <span class="token keyword">chan</span> <span class="token builtin">string</span>
    waitGroup     sync<span class="token punctuation">.</span>WaitGroup
    <span class="token comment">// \u7528\u4E8E\u76D1\u63A7\u534F\u7A0B</span>
    chanTask <span class="token keyword">chan</span> <span class="token builtin">string</span>
    reImg    <span class="token operator">=</span> <span class="token string">\`https?://[^&quot;]+?(\\.((jpg)|(png)|(jpeg)|(gif)|(bmp)))\`</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// myTest()</span>
    <span class="token comment">// DownloadFile(&quot;http://i1.shaodiyejin.com/uploads/tu/201909/10242/e5794daf58_4.jpg&quot;, &quot;1.jpg&quot;)</span>

    <span class="token comment">// 1.\u521D\u59CB\u5316\u7BA1\u9053</span>
    chanImageUrls <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1000000</span><span class="token punctuation">)</span>
    chanTask <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.\u722C\u866B\u534F\u7A0B</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">27</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        waitGroup<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token function">getImgUrls</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.bizhizu.cn/shouji/tag-%E5%8F%AF%E7%88%B1/&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.html&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3.\u4EFB\u52A1\u7EDF\u8BA1\u534F\u7A0B\uFF0C\u7EDF\u8BA126\u4E2A\u4EFB\u52A1\u662F\u5426\u90FD\u5B8C\u6210\uFF0C\u5B8C\u6210\u5219\u5173\u95ED\u7BA1\u9053</span>
    waitGroup<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">CheckOK</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 4.\u4E0B\u8F7D\u534F\u7A0B\uFF1A\u4ECE\u7BA1\u9053\u4E2D\u8BFB\u53D6\u94FE\u63A5\u5E76\u4E0B\u8F7D</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        waitGroup<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token function">DownloadImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    waitGroup<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0B\u8F7D\u56FE\u7247</span>
<span class="token keyword">func</span> <span class="token function">DownloadImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> url <span class="token operator">:=</span> <span class="token keyword">range</span> chanImageUrls <span class="token punctuation">{</span>
        filename <span class="token operator">:=</span> <span class="token function">GetFilenameFromUrl</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        ok <span class="token operator">:=</span> <span class="token function">DownloadFile</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
        <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s \u4E0B\u8F7D\u6210\u529F\\n&quot;</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s \u4E0B\u8F7D\u5931\u8D25\\n&quot;</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    waitGroup<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u622A\u53D6url\u540D\u5B57</span>
<span class="token keyword">func</span> <span class="token function">GetFilenameFromUrl</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD4\u56DE\u6700\u540E\u4E00\u4E2A/\u7684\u4F4D\u7F6E</span>
    lastIndex <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">LastIndex</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5207\u51FA\u6765</span>
    filename <span class="token operator">=</span> url<span class="token punctuation">[</span>lastIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token comment">// \u65F6\u95F4\u6233\u89E3\u51B3\u91CD\u540D</span>
    timePrefix <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token function">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    filename <span class="token operator">=</span> timePrefix <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> filename
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4EFB\u52A1\u7EDF\u8BA1\u534F\u7A0B</span>
<span class="token keyword">func</span> <span class="token function">CheckOK</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> count <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        url <span class="token operator">:=</span> <span class="token operator">&lt;-</span>chanTask
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s \u5B8C\u6210\u4E86\u722C\u53D6\u4EFB\u52A1\\n&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
        count<span class="token operator">++</span>
        <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">26</span> <span class="token punctuation">{</span>
            <span class="token function">close</span><span class="token punctuation">(</span>chanImageUrls<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    waitGroup<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u722C\u56FE\u7247\u94FE\u63A5\u5230\u7BA1\u9053</span>
<span class="token comment">// url\u662F\u4F20\u7684\u6574\u9875\u94FE\u63A5</span>
<span class="token keyword">func</span> <span class="token function">getImgUrls</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    urls <span class="token operator">:=</span> <span class="token function">getImgs</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token comment">// \u904D\u5386\u5207\u7247\u91CC\u6240\u6709\u94FE\u63A5\uFF0C\u5B58\u5165\u6570\u636E\u7BA1\u9053</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> url <span class="token operator">:=</span> <span class="token keyword">range</span> urls <span class="token punctuation">{</span>
        chanImageUrls <span class="token operator">&lt;-</span> url
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6807\u8BC6\u5F53\u524D\u534F\u7A0B\u5B8C\u6210</span>
    <span class="token comment">// \u6BCF\u5B8C\u6210\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u5199\u4E00\u6761\u6570\u636E</span>
    <span class="token comment">// \u7528\u4E8E\u76D1\u63A7\u534F\u7A0B\u77E5\u9053\u5DF2\u7ECF\u5B8C\u6210\u4E86\u51E0\u4E2A\u4EFB\u52A1</span>
    chanTask <span class="token operator">&lt;-</span> url
    waitGroup<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u9875\u56FE\u7247\u94FE\u63A5</span>
<span class="token keyword">func</span> <span class="token function">getImgs</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>urls <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reImg<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5171\u627E\u5230%d\u6761\u7ED3\u679C\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        url <span class="token operator">:=</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        urls <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u62BD\u53D6\u6839\u636Eurl\u83B7\u53D6\u5185\u5BB9</span>
<span class="token keyword">func</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>pageStr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;http.Get url&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.\u8BFB\u53D6\u9875\u9762\u5185\u5BB9</span>
    pageBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;ioutil.ReadAll&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5B57\u8282\u8F6C\u5B57\u7B26\u4E32</span>
    pageStr <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>pageBytes<span class="token punctuation">)</span>
    <span class="token keyword">return</span> pageStr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="18.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="20.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,3),_=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),S={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},E=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),G=s(")"),x=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),P={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},A=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function I(B,C){const p=o("router-link"),e=o("ExternalLinkIcon"),l=o("RouterLink");return u(),r("div",null,[d,n("nav",v,[n("ul",null,[n("li",null,[a(p,{to:"#_1-1-1-\u722C\u866B\u6B65\u9AA4"},{default:t(()=>[m]),_:1})]),n("li",null,[a(p,{to:"#_1-1-2-\u6B63\u5219\u8868\u8FBE\u5F0F"},{default:t(()=>[b]),_:1})]),n("li",null,[a(p,{to:"#_1-1-3-\u5E76\u53D1\u722C\u53D6\u7F8E\u56FE"},{default:t(()=>[f]),_:1})]),n("li",null,[a(p,{to:"#end-\u94FE\u63A5"},{default:t(()=>[g]),_:1})])])]),h,n("ul",null,[n("li",null,[n("a",w,[y,a(e)])])]),q,n("ul",null,[n("li",null,[n("p",null,[a(l,{to:"/Gomd_super/"},{default:t(()=>[_]),_:1})])]),n("li",null,[n("p",null,[n("a",S,[E,a(e)]),G])]),n("li",null,[n("p",null,[x,n("a",P,[A,a(e)])])])])])}const D=i(k,[["render",I],["__file","19.html.vue"]]);export{D as default};
