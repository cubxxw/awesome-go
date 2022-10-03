import{_ as i,r as e,o as l,c,a as n,b as s,w as u,e as p,d as a}from"./app.2cadb53f.js";const r={},d=p(`<h1 id="_1-flag" tabindex="-1"><a class="header-anchor" href="#_1-flag" aria-hidden="true">#</a> 1. Flag</h1><p>Go\u8BED\u8A00\u5185\u7F6E\u7684flag\u5305\u5B9E\u73B0\u4E86\u547D\u4EE4\u884C\u53C2\u6570\u7684\u89E3\u6790\uFF0Cflag\u5305\u4F7F\u5F97\u5F00\u53D1\u547D\u4EE4\u884C\u5DE5\u5177\u66F4\u4E3A\u7B80\u5355\u3002</p><h3 id="_1-1-1-os-args" tabindex="-1"><a class="header-anchor" href="#_1-1-1-os-args" aria-hidden="true">#</a> 1.1.1. os.Args</h3><p>\u5982\u679C\u4F60\u53EA\u662F\u7B80\u5355\u7684\u60F3\u8981\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u53EF\u4EE5\u50CF\u4E0B\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u4E00\u6837\u4F7F\u7528os.Args\u6765\u83B7\u53D6\u547D\u4EE4\u884C\u53C2\u6570\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//os.Args demo</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//os.Args\u662F\u4E00\u4E2A[]string</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> index<span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> os<span class="token punctuation">.</span>Args <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;args[%d]=%v\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u4E0A\u9762\u7684\u4EE3\u7801\u6267\u884Cgo build -o &quot;args_demo&quot;\u7F16\u8BD1\u4E4B\u540E\uFF0C\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    $ ./args_demo a b c d
    args[0]=./args_demo
    args[1]=a
    args[2]=b
    args[3]=c
    args[4]=d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>os.Args\u662F\u4E00\u4E2A\u5B58\u50A8\u547D\u4EE4\u884C\u53C2\u6570\u7684\u5B57\u7B26\u4E32\u5207\u7247\uFF0C\u5B83\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u662F\u6267\u884C\u6587\u4EF6\u7684\u540D\u79F0\u3002</p><h3 id="_1-1-2-flag\u5305\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-2-flag\u5305\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 1.1.2. flag\u5305\u57FA\u672C\u4F7F\u7528</h3>`,9),k=a("\u672C\u6587\u4ECB\u7ECD\u4E86flag\u5305\u7684\u5E38\u7528\u51FD\u6570\u548C\u57FA\u672C\u7528\u6CD5\uFF0C\u66F4\u8BE6\u7EC6\u7684\u5185\u5BB9\u8BF7\u67E5\u770B"),g={href:"https://studygolang.com/pkgdoc",target:"_blank",rel:"noopener noreferrer"},v=a("\u5B98\u65B9\u6587\u6863"),m=a("\u3002"),f=p(`<h4 id="\u5BFC\u5165flag\u5305" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165flag\u5305" aria-hidden="true">#</a> \u5BFC\u5165flag\u5305</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import flag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="flag\u53C2\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#flag\u53C2\u6570\u7C7B\u578B" aria-hidden="true">#</a> flag\u53C2\u6570\u7C7B\u578B</h4><p>flag\u5305\u652F\u6301\u7684\u547D\u4EE4\u884C\u53C2\u6570\u7C7B\u578B\u6709bool\u3001int\u3001int64\u3001uint\u3001uint64\u3001float float64\u3001string\u3001duration\u3002</p><table><thead><tr><th>flag\u53C2\u6570</th><th>\u6709\u6548\u503C</th></tr></thead><tbody><tr><td>\u5B57\u7B26\u4E32flag</td><td>\u5408\u6CD5\u5B57\u7B26\u4E32</td></tr><tr><td>\u6574\u6570flag</td><td>1234\u30010664\u30010x1234\u7B49\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u8D1F\u6570\u3002</td></tr><tr><td>\u6D6E\u70B9\u6570flag</td><td>\u5408\u6CD5\u6D6E\u70B9\u6570</td></tr><tr><td>bool\u7C7B\u578Bflag</td><td>1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False\u3002</td></tr><tr><td>\u65F6\u95F4\u6BB5flag</td><td>\u4EFB\u4F55\u5408\u6CD5\u7684\u65F6\u95F4\u6BB5\u5B57\u7B26\u4E32\u3002\u5982\u201D300ms\u201D\u3001\u201D-1.5h\u201D\u3001\u201D2h45m\u201D\u3002 \u5408\u6CD5\u7684\u5355\u4F4D\u6709\u201Dns\u201D\u3001\u201Dus\u201D /\u201C\xB5s\u201D\u3001\u201Dms\u201D\u3001\u201Ds\u201D\u3001\u201Dm\u201D\u3001\u201Dh\u201D\u3002</td></tr></tbody></table><h3 id="_1-1-3-\u5B9A\u4E49\u547D\u4EE4\u884Cflag\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u5B9A\u4E49\u547D\u4EE4\u884Cflag\u53C2\u6570" aria-hidden="true">#</a> 1.1.3. \u5B9A\u4E49\u547D\u4EE4\u884Cflag\u53C2\u6570</h3><p>\u6709\u4EE5\u4E0B\u4E24\u79CD\u5E38\u7528\u7684\u5B9A\u4E49\u547D\u4EE4\u884Cflag\u53C2\u6570\u7684\u65B9\u6CD5\u3002</p><h4 id="flag-type" tabindex="-1"><a class="header-anchor" href="#flag-type" aria-hidden="true">#</a> flag.Type()</h4><p>\u57FA\u672C\u683C\u5F0F\u5982\u4E0B\uFF1A</p><p><code>flag.Type(flag\u540D, \u9ED8\u8BA4\u503C, \u5E2E\u52A9\u4FE1\u606F)*Type</code>\u4F8B\u5982\u6211\u4EEC\u8981\u5B9A\u4E49\u59D3\u540D\u3001\u5E74\u9F84\u3001\u5A5A\u5426\u4E09\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6309\u5982\u4E0B\u65B9\u5F0F\u5B9A\u4E49\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>name <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">)</span>
age <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">)</span>
married <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">&quot;married&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5A5A\u5426&quot;</span><span class="token punctuation">)</span>
delay <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;\u65F6\u95F4\u95F4\u9694&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6name\u3001age\u3001married\u3001delay\u5747\u4E3A\u5BF9\u5E94\u7C7B\u578B\u7684\u6307\u9488\u3002</p><h4 id="flag-typevar" tabindex="-1"><a class="header-anchor" href="#flag-typevar" aria-hidden="true">#</a> flag.TypeVar()</h4><p>\u57FA\u672C\u683C\u5F0F\u5982\u4E0B\uFF1A flag.TypeVar(Type\u6307\u9488, flag\u540D, \u9ED8\u8BA4\u503C, \u5E2E\u52A9\u4FE1\u606F) \u4F8B\u5982\u6211\u4EEC\u8981\u5B9A\u4E49\u59D3\u540D\u3001\u5E74\u9F84\u3001\u5A5A\u5426\u4E09\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6309\u5982\u4E0B\u65B9\u5F0F\u5B9A\u4E49\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> name <span class="token builtin">string</span>
<span class="token keyword">var</span> age <span class="token builtin">int</span>
<span class="token keyword">var</span> married <span class="token builtin">bool</span>
<span class="token keyword">var</span> delay time<span class="token punctuation">.</span>Duration
flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>married<span class="token punctuation">,</span> <span class="token string">&quot;married&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5A5A\u5426&quot;</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">DurationVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>delay<span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;\u65F6\u95F4\u95F4\u9694&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="flag-parse" tabindex="-1"><a class="header-anchor" href="#flag-parse" aria-hidden="true">#</a> flag.Parse()</h4><p>\u901A\u8FC7\u4EE5\u4E0A\u4E24\u79CD\u65B9\u6CD5\u5B9A\u4E49\u597D\u547D\u4EE4\u884Cflag\u53C2\u6570\u540E\uFF0C\u9700\u8981\u901A\u8FC7\u8C03\u7528flag.Parse()\u6765\u5BF9\u547D\u4EE4\u884C\u53C2\u6570\u8FDB\u884C\u89E3\u6790\u3002</p><p>\u652F\u6301\u7684\u547D\u4EE4\u884C\u53C2\u6570\u683C\u5F0F\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>-flag xxx \uFF08\u4F7F\u7528\u7A7A\u683C\uFF0C\u4E00\u4E2A-\u7B26\u53F7\uFF09</li><li>--flag xxx \uFF08\u4F7F\u7528\u7A7A\u683C\uFF0C\u4E24\u4E2A-\u7B26\u53F7\uFF09</li><li>-flag=xxx \uFF08\u4F7F\u7528\u7B49\u53F7\uFF0C\u4E00\u4E2A-\u7B26\u53F7\uFF09</li><li>--flag=xxx \uFF08\u4F7F\u7528\u7B49\u53F7\uFF0C\u4E24\u4E2A-\u7B26\u53F7\uFF09</li></ul><p>\u5176\u4E2D\uFF0C\u5E03\u5C14\u7C7B\u578B\u7684\u53C2\u6570\u5FC5\u987B\u4F7F\u7528\u7B49\u53F7\u7684\u65B9\u5F0F\u6307\u5B9A\u3002</p><p>Flag\u89E3\u6790\u5728\u7B2C\u4E00\u4E2A\u975Eflag\u53C2\u6570\uFF08\u5355\u4E2A\u201D-\u201C\u4E0D\u662Fflag\u53C2\u6570\uFF09\u4E4B\u524D\u505C\u6B62\uFF0C\u6216\u8005\u5728\u7EC8\u6B62\u7B26\u201D\u2013\u201C\u4E4B\u540E\u505C\u6B62\u3002</p><h3 id="_1-1-4-flag\u5176\u4ED6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-4-flag\u5176\u4ED6\u51FD\u6570" aria-hidden="true">#</a> 1.1.4. flag\u5176\u4ED6\u51FD\u6570</h3><ul><li>flag.Args() ////\u8FD4\u56DE\u547D\u4EE4\u884C\u53C2\u6570\u540E\u7684\u5176\u4ED6\u53C2\u6570\uFF0C\u4EE5[]string\u7C7B\u578B</li><li>flag.NArg() //\u8FD4\u56DE\u547D\u4EE4\u884C\u53C2\u6570\u540E\u7684\u5176\u4ED6\u53C2\u6570\u4E2A\u6570</li><li>flag.NFlag() //\u8FD4\u56DE\u4F7F\u7528\u7684\u547D\u4EE4\u884C\u53C2\u6570\u4E2A\u6570</li></ul><h3 id="_1-1-5-\u5B8C\u6574\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-5-\u5B8C\u6574\u793A\u4F8B" aria-hidden="true">#</a> 1.1.5. \u5B8C\u6574\u793A\u4F8B</h3><h4 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5B9A\u4E49\u547D\u4EE4\u884C\u53C2\u6570\u65B9\u5F0F1</span>
    <span class="token keyword">var</span> name <span class="token builtin">string</span>
    <span class="token keyword">var</span> age <span class="token builtin">int</span>
    <span class="token keyword">var</span> married <span class="token builtin">bool</span>
    <span class="token keyword">var</span> delay time<span class="token punctuation">.</span>Duration
    flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>married<span class="token punctuation">,</span> <span class="token string">&quot;married&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5A5A\u5426&quot;</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">DurationVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>delay<span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5EF6\u8FDF\u7684\u65F6\u95F4\u95F4\u9694&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">//\u89E3\u6790\u547D\u4EE4\u884C\u53C2\u6570</span>
    flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> married<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token comment">//\u8FD4\u56DE\u547D\u4EE4\u884C\u53C2\u6570\u540E\u7684\u5176\u4ED6\u53C2\u6570</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>flag<span class="token punctuation">.</span><span class="token function">Args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//\u8FD4\u56DE\u547D\u4EE4\u884C\u53C2\u6570\u540E\u7684\u5176\u4ED6\u53C2\u6570\u4E2A\u6570</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>flag<span class="token punctuation">.</span><span class="token function">NArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//\u8FD4\u56DE\u4F7F\u7528\u7684\u547D\u4EE4\u884C\u53C2\u6570\u4E2A\u6570</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>flag<span class="token punctuation">.</span><span class="token function">NFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-6-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-6-\u4F7F\u7528" aria-hidden="true">#</a> 1.1.6. \u4F7F\u7528</h3><p>\u547D\u4EE4\u884C\u53C2\u6570\u4F7F\u7528\u63D0\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    $ ./flag_demo -help
    Usage of ./flag_demo:
      -age int
            \u5E74\u9F84 (default 18)
      -d duration
            \u65F6\u95F4\u95F4\u9694
      -married
            \u5A5A\u5426
      -name string
            \u59D3\u540D (default &quot;\u5F20\u4E09&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B63\u5E38\u4F7F\u7528\u547D\u4EE4\u884Cflag\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    $ ./flag_demo -name pprof --age 28 -married=false -d=1h30m
    pprof 28 false 1h30m0s
    []
    0
    4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u975Eflag\u547D\u4EE4\u884C\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    $ ./flag_demo a b c
    \u5F20\u4E09 18 false 0s
    [a b c]
    3
    0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="55.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="57.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,35),b=a("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),h={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},_=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),q=a(")"),x=a("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),y={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},w=a("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function A(V,E){const t=e("ExternalLinkIcon"),o=e("RouterLink");return l(),c("div",null,[d,n("p",null,[k,n("a",g,[v,s(t)]),m]),f,n("ul",null,[n("li",null,[n("p",null,[s(o,{to:"/Gomd_super/"},{default:u(()=>[b]),_:1})])]),n("li",null,[n("p",null,[n("a",h,[_,s(t)]),q])]),n("li",null,[n("p",null,[x,n("a",y,[w,s(t)])])])])])}const N=i(r,[["render",A],["__file","56.html.vue"]]);export{N as default};
