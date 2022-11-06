import{_ as o,r as e,o as c,c as i,a as n,b as a,w as u,d as l,e as s}from"./app.ebf2b957.js";const r={},d=l(`<h1 id="_1-time" tabindex="-1"><a class="header-anchor" href="#_1-time" aria-hidden="true">#</a> 1. Time</h1><p>\u65F6\u95F4\u548C\u65E5\u671F\u662F\u6211\u4EEC\u7F16\u7A0B\u4E2D\u7ECF\u5E38\u4F1A\u7528\u5230\u7684\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u4E86Go\u8BED\u8A00\u5185\u7F6E\u7684time\u5305\u7684\u57FA\u672C\u7528\u6CD5\u3002</p><h3 id="_1-1-1-time\u5305" tabindex="-1"><a class="header-anchor" href="#_1-1-1-time\u5305" aria-hidden="true">#</a> 1.1.1. time\u5305</h3><p>time\u5305\u63D0\u4F9B\u4E86\u65F6\u95F4\u7684\u663E\u793A\u548C\u6D4B\u91CF\u7528\u7684\u51FD\u6570\u3002\u65E5\u5386\u7684\u8BA1\u7B97\u91C7\u7528\u7684\u662F\u516C\u5386\u3002</p><h3 id="_1-1-2-\u65F6\u95F4\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u65F6\u95F4\u7C7B\u578B" aria-hidden="true">#</a> 1.1.2. \u65F6\u95F4\u7C7B\u578B</h3><p>time.Time\u7C7B\u578B\u8868\u793A\u65F6\u95F4\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7time.Now()\u51FD\u6570\u83B7\u53D6\u5F53\u524D\u7684\u65F6\u95F4\u5BF9\u8C61\uFF0C\u7136\u540E\u83B7\u53D6\u65F6\u95F4\u5BF9\u8C61\u7684\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u7B49\u4FE1\u606F\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">timeDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u65F6\u95F4</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;current time:%v\\n&quot;</span><span class="token punctuation">,</span> now<span class="token punctuation">)</span>

    year <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//\u5E74</span>
    month <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//\u6708</span>
    day <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">//\u65E5</span>
    hour <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//\u5C0F\u65F6</span>
    minute <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u5206\u949F</span>
    second <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u79D2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d-%02d-%02d %02d:%02d:%02d\\n&quot;</span><span class="token punctuation">,</span> year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">,</span> hour<span class="token punctuation">,</span> minute<span class="token punctuation">,</span> second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-\u65F6\u95F4\u6233" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u65F6\u95F4\u6233" aria-hidden="true">#</a> 1.1.3. \u65F6\u95F4\u6233</h3><p>\u65F6\u95F4\u6233\u662F\u81EA1970\u5E741\u67081\u65E5\uFF0808:00:00GMT\uFF09\u81F3\u5F53\u524D\u65F6\u95F4\u7684\u603B\u6BEB\u79D2\u6570\u3002\u5B83\u4E5F\u88AB\u79F0\u4E3AUnix\u65F6\u95F4\u6233\uFF08UnixTimestamp\uFF09\u3002</p><p>\u57FA\u4E8E\u65F6\u95F4\u5BF9\u8C61\u83B7\u53D6\u65F6\u95F4\u6233\u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">timestampDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">//\u83B7\u53D6\u5F53\u524D\u65F6\u95F4</span>
    timestamp1 <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//\u65F6\u95F4\u6233</span>
    timestamp2 <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u7EB3\u79D2\u65F6\u95F4\u6233</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;current timestamp1:%v\\n&quot;</span><span class="token punctuation">,</span> timestamp1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;current timestamp2:%v\\n&quot;</span><span class="token punctuation">,</span> timestamp2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528time.Unix()\u51FD\u6570\u53EF\u4EE5\u5C06\u65F6\u95F4\u6233\u8F6C\u4E3A\u65F6\u95F4\u683C\u5F0F\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">timestampDemo2</span><span class="token punctuation">(</span>timestamp <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    timeObj <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//\u5C06\u65F6\u95F4\u6233\u8F6C\u4E3A\u65F6\u95F4\u683C\u5F0F</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>timeObj<span class="token punctuation">)</span>
    year <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//\u5E74</span>
    month <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//\u6708</span>
    day <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">//\u65E5</span>
    hour <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//\u5C0F\u65F6</span>
    minute <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u5206\u949F</span>
    second <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u79D2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d-%02d-%02d %02d:%02d:%02d\\n&quot;</span><span class="token punctuation">,</span> year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">,</span> hour<span class="token punctuation">,</span> minute<span class="token punctuation">,</span> second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-\u65F6\u95F4\u95F4\u9694" tabindex="-1"><a class="header-anchor" href="#_1-1-4-\u65F6\u95F4\u95F4\u9694" aria-hidden="true">#</a> 1.1.4. \u65F6\u95F4\u95F4\u9694</h3><p>time.Duration\u662Ftime\u5305\u5B9A\u4E49\u7684\u4E00\u4E2A\u7C7B\u578B\uFF0C\u5B83\u4EE3\u8868\u4E24\u4E2A\u65F6\u95F4\u70B9\u4E4B\u95F4\u7ECF\u8FC7\u7684\u65F6\u95F4\uFF0C\u4EE5\u7EB3\u79D2\u4E3A\u5355\u4F4D\u3002time.Duration\u8868\u793A\u4E00\u6BB5\u65F6\u95F4\u95F4\u9694\uFF0C\u53EF\u8868\u793A\u7684\u6700\u957F\u65F6\u95F4\u6BB5\u5927\u7EA6290\u5E74\u3002</p><p>time\u5305\u4E2D\u5B9A\u4E49\u7684\u65F6\u95F4\u95F4\u9694\u7C7B\u578B\u7684\u5E38\u91CF\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    Nanosecond  Duration <span class="token operator">=</span> <span class="token number">1</span>
    Microsecond          <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Nanosecond
    Millisecond          <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Microsecond
    Second               <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Millisecond
    Minute               <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> Second
    Hour                 <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> Minute
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5982\uFF1Atime.Duration\u8868\u793A1\u7EB3\u79D2\uFF0Ctime.Second\u8868\u793A1\u79D2\u3002</p><h3 id="_1-1-5-\u65F6\u95F4\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-1-5-\u65F6\u95F4\u64CD\u4F5C" aria-hidden="true">#</a> 1.1.5. \u65F6\u95F4\u64CD\u4F5C</h3><h4 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> Add</h4><p>\u6211\u4EEC\u5728\u65E5\u5E38\u7684\u7F16\u7801\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u8981\u6C42\u65F6\u95F4+\u65F6\u95F4\u95F4\u9694\u7684\u9700\u6C42\uFF0CGo\u8BED\u8A00\u7684\u65F6\u95F4\u5BF9\u8C61\u6709\u63D0\u4F9BAdd\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    func (t Time) Add(d Duration) Time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6C42\u4E00\u4E2A\u5C0F\u65F6\u4E4B\u540E\u7684\u65F6\u95F4\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    later <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span> <span class="token comment">// \u5F53\u524D\u65F6\u95F4\u52A01\u5C0F\u65F6\u540E\u7684\u65F6\u95F4</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>later<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> Sub</h4><p>\u6C42\u4E24\u4E2A\u65F6\u95F4\u4E4B\u95F4\u7684\u5DEE\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    func (t Time) Sub(u Time) Duration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u4E00\u4E2A\u65F6\u95F4\u6BB5t-u\u3002\u5982\u679C\u7ED3\u679C\u8D85\u51FA\u4E86Duration\u53EF\u4EE5\u8868\u793A\u7684\u6700\u5927\u503C/\u6700\u5C0F\u503C\uFF0C\u5C06\u8FD4\u56DE\u6700\u5927\u503C/\u6700\u5C0F\u503C\u3002\u8981\u83B7\u53D6\u65F6\u95F4\u70B9t-d\uFF08d\u4E3ADuration\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528t.Add(-d)\u3002</p><h4 id="equal" tabindex="-1"><a class="header-anchor" href="#equal" aria-hidden="true">#</a> Equal</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    func (t Time) Equal(u Time) bool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5224\u65AD\u4E24\u4E2A\u65F6\u95F4\u662F\u5426\u76F8\u540C\uFF0C\u4F1A\u8003\u8651\u65F6\u533A\u7684\u5F71\u54CD\uFF0C\u56E0\u6B64\u4E0D\u540C\u65F6\u533A\u6807\u51C6\u7684\u65F6\u95F4\u4E5F\u53EF\u4EE5\u6B63\u786E\u6BD4\u8F83\u3002\u672C\u65B9\u6CD5\u548C\u7528t==u\u4E0D\u540C\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u8FD8\u4F1A\u6BD4\u8F83\u5730\u70B9\u548C\u65F6\u533A\u4FE1\u606F\u3002</p><h4 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> Before</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    func (t Time) Before(u Time) bool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679Ct\u4EE3\u8868\u7684\u65F6\u95F4\u70B9\u5728u\u4E4B\u524D\uFF0C\u8FD4\u56DE\u771F\uFF1B\u5426\u5219\u8FD4\u56DE\u5047\u3002</p><h4 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> After</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    func (t Time) After(u Time) bool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679Ct\u4EE3\u8868\u7684\u65F6\u95F4\u70B9\u5728u\u4E4B\u540E\uFF0C\u8FD4\u56DE\u771F\uFF1B\u5426\u5219\u8FD4\u56DE\u5047\u3002</p><h3 id="_1-1-6-\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#_1-1-6-\u5B9A\u65F6\u5668" aria-hidden="true">#</a> 1.1.6. \u5B9A\u65F6\u5668</h3><p>\u4F7F\u7528time.Tick(\u65F6\u95F4\u95F4\u9694)\u6765\u8BBE\u7F6E\u5B9A\u65F6\u5668\uFF0C\u5B9A\u65F6\u5668\u7684\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u901A\u9053\uFF08channel\uFF09\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">tickDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A1\u79D2\u95F4\u9694\u7684\u5B9A\u65F6\u5668</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> ticker <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token comment">//\u6BCF\u79D2\u90FD\u4F1A\u6267\u884C\u7684\u4EFB\u52A1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-7-\u65F6\u95F4\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_1-1-7-\u65F6\u95F4\u683C\u5F0F\u5316" aria-hidden="true">#</a> 1.1.7. \u65F6\u95F4\u683C\u5F0F\u5316</h3><p>\u65F6\u95F4\u7C7B\u578B\u6709\u4E00\u4E2A\u81EA\u5E26\u7684\u65B9\u6CD5Format\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662FGo\u8BED\u8A00\u4E2D\u683C\u5F0F\u5316\u65F6\u95F4\u6A21\u677F\u4E0D\u662F\u5E38\u89C1\u7684Y-m-d H:M:S\u800C\u662F\u4F7F\u7528Go\u7684\u8BDE\u751F\u65F6\u95F42006\u5E741\u67082\u53F715\u70B904\u5206\uFF08\u8BB0\u5FC6\u53E3\u8BC0\u4E3A2006 1 2 3 4\uFF09\u3002\u4E5F\u8BB8\u8FD9\u5C31\u662F\u6280\u672F\u4EBA\u5458\u7684\u6D6A\u6F2B\u5427\u3002</p><p>\u8865\u5145\uFF1A\u5982\u679C\u60F3\u683C\u5F0F\u5316\u4E3A12\u5C0F\u65F6\u65B9\u5F0F\uFF0C\u9700\u6307\u5B9APM\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">formatDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u683C\u5F0F\u5316\u7684\u6A21\u677F\u4E3AGo\u7684\u51FA\u751F\u65F6\u95F42006\u5E741\u67082\u53F715\u70B904\u5206 Mon Jan</span>
    <span class="token comment">// 24\u5C0F\u65F6\u5236</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;2006-01-02 15:04:05.000 Mon Jan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 12\u5C0F\u65F6\u5236</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;2006-01-02 03:04:05.000 PM Mon Jan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;2006/01/02 15:04&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;15:04 2006/01/02&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;2006/01/02&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u89E3\u6790\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u65F6\u95F4" aria-hidden="true">#</a> \u89E3\u6790\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u65F6\u95F4</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span>
<span class="token comment">// \u52A0\u8F7D\u65F6\u533A</span>
loc<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">LoadLocation</span><span class="token punctuation">(</span><span class="token string">&quot;Asia/Shanghai&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6309\u7167\u6307\u5B9A\u65F6\u533A\u548C\u6307\u5B9A\u683C\u5F0F\u89E3\u6790\u5B57\u7B26\u4E32\u65F6\u95F4</span>
timeObj<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">ParseInLocation</span><span class="token punctuation">(</span><span class="token string">&quot;2006/01/02 15:04:05&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2019/08/04 14:15:20&quot;</span><span class="token punctuation">,</span> loc<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>timeObj<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>timeObj<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="54.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="56.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,48),k=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),m={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),h=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),f={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},g=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function x(_,w){const p=e("RouterLink"),t=e("ExternalLinkIcon");return c(),i("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:u(()=>[k]),_:1})])]),n("li",null,[n("p",null,[n("a",m,[v,a(t)]),b])]),n("li",null,[n("p",null,[h,n("a",f,[g,a(t)])])])])])}const y=o(r,[["render",x],["__file","55.html.vue"]]);export{y as default};
