<template><div><h1 id="爬虫小案例" tabindex="-1"><a class="header-anchor" href="#爬虫小案例" aria-hidden="true">#</a> 爬虫小案例</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-1-爬虫步骤">1.1.1. 爬虫步骤</router-link></li><li><router-link to="#_1-1-2-正则表达式">1.1.2. 正则表达式</router-link></li><li><router-link to="#_1-1-3-并发爬取美图">1.1.3. 并发爬取美图</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h3 id="_1-1-1-爬虫步骤" tabindex="-1"><a class="header-anchor" href="#_1-1-1-爬虫步骤" aria-hidden="true">#</a> 1.1.1. 爬虫步骤</h3>
<ul>
<li>明确目标（确定在哪个网站搜索）</li>
<li>爬（爬下内容）</li>
<li>取（筛选想要的）</li>
<li>处理数据（按照你的想法去处理）</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io/ioutil"</span>
    <span class="token string">"net/http"</span>
    <span class="token string">"regexp"</span>
<span class="token punctuation">)</span>

<span class="token comment">//这个只是一个简单的版本只是获取QQ邮箱并且没有进行封装操作，另外爬出来的数据也没有进行去重操作</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// \d是数字</span>
    reQQEmail <span class="token operator">=</span> <span class="token string">`(\d+)@qq.com`</span>
<span class="token punctuation">)</span>

<span class="token comment">// 爬邮箱</span>
<span class="token keyword">func</span> <span class="token function">GetEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.去网站拿数据</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"https://tieba.baidu.com/p/6051076813?red_tag=1573533731"</span><span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"http.Get url"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.读取页面内容</span>
    pageBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"ioutil.ReadAll"</span><span class="token punctuation">)</span>
    <span class="token comment">// 字节转字符串</span>
    pageStr <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>pageBytes<span class="token punctuation">)</span>
    <span class="token comment">//fmt.Println(pageStr)</span>
    <span class="token comment">// 3.过滤数据，过滤qq邮箱</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reQQEmail<span class="token punctuation">)</span>
    <span class="token comment">// -1代表取全部</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment">//fmt.Println(results)</span>

    <span class="token comment">// 遍历结果</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"email:"</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"qq:"</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 处理异常</span>
<span class="token keyword">func</span> <span class="token function">HandleError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> why <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>why<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">GetEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-正则表达式" tabindex="-1"><a class="header-anchor" href="#_1-1-2-正则表达式" aria-hidden="true">#</a> 1.1.2. 正则表达式</h3>
<ul>
<li>文档：https://studygolang.com/pkgdoc</li>
<li>API
<ul>
<li>re := regexp.MustCompile(reStr)，传入正则表达式，得到正则表达式对象</li>
<li>ret := re.FindAllStringSubmatch(srcStr,-1)：用正则对象，获取页面页面，srcStr是页面内容，-1代表取全部</li>
</ul>
</li>
<li>爬邮箱</li>
<li>方法抽取</li>
<li>爬超链接</li>
<li>爬手机号
<ul>
<li>http://www.zhaohaowang.com/ 如果连接失效了自己找一个有手机号的就好了</li>
</ul>
</li>
<li>爬身份证号
<ul>
<li>http://henan.qq.com/a/20171107/069413.htm 如果连接失效了自己找一个就好了</li>
</ul>
</li>
<li>爬图片链接</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io/ioutil"</span>
    <span class="token string">"net/http"</span>
    <span class="token string">"regexp"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// w代表大小写字母+数字+下划线</span>
    reEmail <span class="token operator">=</span> <span class="token string">`\w+@\w+\.\w+`</span>
    <span class="token comment">// s?有或者没有s</span>
    <span class="token comment">// +代表出1次或多次</span>
    <span class="token comment">//\s\S各种字符</span>
    <span class="token comment">// +?代表贪婪模式</span>
    reLinke  <span class="token operator">=</span> <span class="token string">`href="(https?://[\s\S]+?)"`</span>
    rePhone  <span class="token operator">=</span> <span class="token string">`1[3456789]\d\s?\d{4}\s?\d{4}`</span>
    reIdcard <span class="token operator">=</span> <span class="token string">`[123456789]\d{5}((19\d{2})|(20[01]\d))((0[1-9])|(1[012]))((0[1-9])|([12]\d)|(3[01]))\d{3}[\dXx]`</span>
    reImg    <span class="token operator">=</span> <span class="token string">`https?://[^"]+?(\.((jpg)|(png)|(jpeg)|(gif)|(bmp)))`</span>
<span class="token punctuation">)</span>

<span class="token comment">// 处理异常</span>
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

<span class="token comment">// 抽取根据url获取内容</span>
<span class="token keyword">func</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>pageStr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"http.Get url"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.读取页面内容</span>
    pageBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"ioutil.ReadAll"</span><span class="token punctuation">)</span>
    <span class="token comment">// 字节转字符串</span>
    pageStr <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>pageBytes<span class="token punctuation">)</span>
    <span class="token keyword">return</span> pageStr
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2.抽取的爬邮箱</span>
    <span class="token comment">// GetEmail2("https://tieba.baidu.com/p/6051076813?red_tag=1573533731")</span>
    <span class="token comment">// 3.爬链接</span>
    <span class="token comment">//GetLink("http://www.baidu.com/s?wd=%E8%B4%B4%E5%90%A7%20%E7%95%99%E4%B8%8B%E9%82%AE%E7%AE%B1&amp;rsv_spt=1&amp;rsv_iqid=0x98ace53400003985&amp;issp=1&amp;f=8&amp;rsv_bp=1&amp;rsv_idx=2&amp;ie=utf-8&amp;tn=baiduhome_pg&amp;rsv_enter=1&amp;rsv_dl=ib&amp;rsv_sug2=0&amp;inputT=5197&amp;rsv_sug4=6345")</span>
    <span class="token comment">// 4.爬手机号</span>
    <span class="token comment">//GetPhone("https://www.zhaohaowang.com/")</span>
    <span class="token comment">// 5.爬身份证号</span>
    <span class="token comment">//GetIdCard("https://henan.qq.com/a/20171107/069413.htm")</span>
    <span class="token comment">// 6.爬图片</span>
    <span class="token comment">// GetImg("http://image.baidu.com/search/index?tn=baiduimage&amp;ps=1&amp;ct=201326592&amp;lm=-1&amp;cl=2&amp;nc=1&amp;ie=utf-8&amp;word=%E7%BE%8E%E5%A5%B3")</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetIdCard</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reIdcard<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 爬链接</span>
<span class="token keyword">func</span> <span class="token function">GetLink</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reLinke<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//爬手机号</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-并发爬取美图" tabindex="-1"><a class="header-anchor" href="#_1-1-3-并发爬取美图" aria-hidden="true">#</a> 1.1.3. 并发爬取美图</h3>
<p>下面的两个是即将要爬的网站，如果网址失效自己换一个就好了</p>
<ul>
<li><a href="https://www.bizhizu.cn/shouji/tag-%E5%8F%AF%E7%88%B1/1.html" target="_blank" rel="noopener noreferrer">https://www.bizhizu.cn/shouji/tag-%E5%8F%AF%E7%88%B1/1.html<ExternalLinkIcon/></a></li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io/ioutil"</span>
    <span class="token string">"net/http"</span>
    <span class="token string">"regexp"</span>
    <span class="token string">"strconv"</span>
    <span class="token string">"strings"</span>
    <span class="token string">"sync"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">HandleError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> why <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>why<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 下载图片，传入的是图片叫什么</span>
<span class="token keyword">func</span> <span class="token function">DownloadFile</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">,</span> filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ok <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"http.get.url"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"resp.body"</span><span class="token punctuation">)</span>
    filename <span class="token operator">=</span> <span class="token string">"E:/topgoer.com/src/github.com/student/3.0/img/"</span> <span class="token operator">+</span> filename
    <span class="token comment">// 写出数据</span>
    err <span class="token operator">=</span> ioutil<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> bytes<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 并发爬思路：</span>
<span class="token comment">// 1.初始化数据管道</span>
<span class="token comment">// 2.爬虫写出：26个协程向管道中添加图片链接</span>
<span class="token comment">// 3.任务统计协程：检查26个任务是否都完成，完成则关闭数据管道</span>
<span class="token comment">// 4.下载协程：从管道里读取链接并下载</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    <span class="token comment">// 存放图片链接的数据管道</span>
    chanImageUrls <span class="token keyword">chan</span> <span class="token builtin">string</span>
    waitGroup     sync<span class="token punctuation">.</span>WaitGroup
    <span class="token comment">// 用于监控协程</span>
    chanTask <span class="token keyword">chan</span> <span class="token builtin">string</span>
    reImg    <span class="token operator">=</span> <span class="token string">`https?://[^"]+?(\.((jpg)|(png)|(jpeg)|(gif)|(bmp)))`</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// myTest()</span>
    <span class="token comment">// DownloadFile("http://i1.shaodiyejin.com/uploads/tu/201909/10242/e5794daf58_4.jpg", "1.jpg")</span>

    <span class="token comment">// 1.初始化管道</span>
    chanImageUrls <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1000000</span><span class="token punctuation">)</span>
    chanTask <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.爬虫协程</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">27</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        waitGroup<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token function">getImgUrls</span><span class="token punctuation">(</span><span class="token string">"https://www.bizhizu.cn/shouji/tag-%E5%8F%AF%E7%88%B1/"</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">".html"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3.任务统计协程，统计26个任务是否都完成，完成则关闭管道</span>
    waitGroup<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">CheckOK</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 4.下载协程：从管道中读取链接并下载</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        waitGroup<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token function">DownloadImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    waitGroup<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 下载图片</span>
<span class="token keyword">func</span> <span class="token function">DownloadImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> url <span class="token operator">:=</span> <span class="token keyword">range</span> chanImageUrls <span class="token punctuation">{</span>
        filename <span class="token operator">:=</span> <span class="token function">GetFilenameFromUrl</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        ok <span class="token operator">:=</span> <span class="token function">DownloadFile</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
        <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s 下载成功\n"</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s 下载失败\n"</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    waitGroup<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 截取url名字</span>
<span class="token keyword">func</span> <span class="token function">GetFilenameFromUrl</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回最后一个/的位置</span>
    lastIndex <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">LastIndex</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">"/"</span><span class="token punctuation">)</span>
    <span class="token comment">// 切出来</span>
    filename <span class="token operator">=</span> url<span class="token punctuation">[</span>lastIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token comment">// 时间戳解决重名</span>
    timePrefix <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token function">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    filename <span class="token operator">=</span> timePrefix <span class="token operator">+</span> <span class="token string">"_"</span> <span class="token operator">+</span> filename
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// 任务统计协程</span>
<span class="token keyword">func</span> <span class="token function">CheckOK</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> count <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        url <span class="token operator">:=</span> <span class="token operator">&lt;-</span>chanTask
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s 完成了爬取任务\n"</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
        count<span class="token operator">++</span>
        <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">26</span> <span class="token punctuation">{</span>
            <span class="token function">close</span><span class="token punctuation">(</span>chanImageUrls<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    waitGroup<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 爬图片链接到管道</span>
<span class="token comment">// url是传的整页链接</span>
<span class="token keyword">func</span> <span class="token function">getImgUrls</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    urls <span class="token operator">:=</span> <span class="token function">getImgs</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token comment">// 遍历切片里所有链接，存入数据管道</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> url <span class="token operator">:=</span> <span class="token keyword">range</span> urls <span class="token punctuation">{</span>
        chanImageUrls <span class="token operator">&lt;-</span> url
    <span class="token punctuation">}</span>
    <span class="token comment">// 标识当前协程完成</span>
    <span class="token comment">// 每完成一个任务，写一条数据</span>
    <span class="token comment">// 用于监控协程知道已经完成了几个任务</span>
    chanTask <span class="token operator">&lt;-</span> url
    waitGroup<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取当前页图片链接</span>
<span class="token keyword">func</span> <span class="token function">getImgs</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>urls <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pageStr <span class="token operator">:=</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    re <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span>reImg<span class="token punctuation">)</span>
    results <span class="token operator">:=</span> re<span class="token punctuation">.</span><span class="token function">FindAllStringSubmatch</span><span class="token punctuation">(</span>pageStr<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"共找到%d条结果\n"</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> results <span class="token punctuation">{</span>
        url <span class="token operator">:=</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        urls <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽取根据url获取内容</span>
<span class="token keyword">func</span> <span class="token function">GetPageStr</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>pageStr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"http.Get url"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.读取页面内容</span>
    pageBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token function">HandleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"ioutil.ReadAll"</span><span class="token punctuation">)</span>
    <span class="token comment">// 字节转字符串</span>
    pageStr <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>pageBytes<span class="token punctuation">)</span>
    <span class="token keyword">return</span> pageStr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '18.md' style='float:left'>⬆️上一节🔗</a><a href = '20.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


