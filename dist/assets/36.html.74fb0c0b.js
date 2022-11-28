import{_ as o,r as e,o as c,c as i,a as n,b as a,w as l,d as u,e as s}from"./app.bb6687c9.js";const r={},d=u(`<h1 id="_1-\u57FA\u672C\u64CD\u4F5C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u64CD\u4F5C\u6D4B\u8BD5" aria-hidden="true">#</a> 1. \u57FA\u672C\u64CD\u4F5C\u6D4B\u8BD5</h1><p>\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u6D4B\u8BD5\u4E0B\u57FA\u672C\u7684\u64CD\u4F5C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">/**
\u5BA2\u6237\u7AEFdoc\u5730\u5740\uFF1Agithub.com/samuel/go-zookeeper/zk
**/</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    zk <span class="token string">&quot;github.com/samuel/go-zookeeper/zk&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">/**
 * \u83B7\u53D6\u4E00\u4E2Azk\u8FDE\u63A5
 * @return {[type]}
 */</span>
<span class="token keyword">func</span> <span class="token function">getConnect</span><span class="token punctuation">(</span>zkList <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> zk<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>zkList<span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6D4B\u8BD5\u8FDE\u63A5
 * @return
 */</span>
<span class="token keyword">func</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    zkList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;localhost:2181&quot;</span><span class="token punctuation">}</span>
    conn <span class="token operator">:=</span> <span class="token function">getConnect</span><span class="token punctuation">(</span>zkList<span class="token punctuation">)</span>

    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> flags <span class="token builtin">int32</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">//flags\u67094\u79CD\u53D6\u503C\uFF1A</span>
    <span class="token comment">//0:\u6C38\u4E45\uFF0C\u9664\u975E\u624B\u52A8\u5220\u9664</span>
    <span class="token comment">//zk.FlagEphemeral = 1:\u77ED\u6682\uFF0Csession\u65AD\u5F00\u5219\u6539\u8282\u70B9\u4E5F\u88AB\u5220\u9664</span>
    <span class="token comment">//zk.FlagSequence  = 2:\u4F1A\u81EA\u52A8\u5728\u8282\u70B9\u540E\u9762\u6DFB\u52A0\u5E8F\u53F7</span>
    <span class="token comment">//3:Ephemeral\u548CSequence\uFF0C\u5373\uFF0C\u77ED\u6682\u4E14\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7</span>
    conn<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">&quot;/go_servers&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> flags<span class="token punctuation">,</span> zk<span class="token punctuation">.</span><span class="token function">WorldACL</span><span class="token punctuation">(</span>zk<span class="token punctuation">.</span>PermAll<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// zk.WorldACL(zk.PermAll)\u63A7\u5236\u8BBF\u95EE\u6743\u9650\u6A21\u5F0F</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">20</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
\u5220\u6539\u4E0E\u589E\u4E0D\u540C\u5728\u4E8E\u5176\u51FD\u6570\u4E2D\u7684version\u53C2\u6570,\u5176\u4E2Dversion\u662F\u7528\u4E8E CAS\u652F\u6301
func (c *Conn) Set(path string, data []byte, version int32) (*Stat, error)
func (c *Conn) Delete(path string, version int32) error

demo\uFF1A
if err = conn.Delete(migrateLockPath, -1); err != nil {
    log.Error(&quot;conn.Delete(\\&quot;%s\\&quot;) error(%v)&quot;, migrateLockPath, err)
}
*/</span>

<span class="token comment">/**
 * \u6D4B\u8BD5\u4E34\u65F6\u8282\u70B9
 * @return {[type]}
 */</span>
<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    zkList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;localhost:2181&quot;</span><span class="token punctuation">}</span>
    conn <span class="token operator">:=</span> <span class="token function">getConnect</span><span class="token punctuation">(</span>zkList<span class="token punctuation">)</span>

    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">&quot;/testadaadsasdsaw&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> zk<span class="token punctuation">.</span>FlagEphemeral<span class="token punctuation">,</span> zk<span class="token punctuation">.</span><span class="token function">WorldACL</span><span class="token punctuation">(</span>zk<span class="token punctuation">.</span>PermAll<span class="token punctuation">)</span><span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">20</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u83B7\u53D6\u6240\u6709\u8282\u70B9
 */</span>
<span class="token keyword">func</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    zkList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;localhost:2181&quot;</span><span class="token punctuation">}</span>
    conn <span class="token operator">:=</span> <span class="token function">getConnect</span><span class="token punctuation">(</span>zkList<span class="token punctuation">)</span>

    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    children<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Children</span><span class="token punctuation">(</span><span class="token string">&quot;/go_servers&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v \\n&quot;</span><span class="token punctuation">,</span> children<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="35.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="37.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,5),k=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),f=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),h={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},g=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function _(q,z){const p=e("RouterLink"),t=e("ExternalLinkIcon");return c(),i("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:l(()=>[k]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[f,n("a",h,[g,a(t)])])])])])}const y=o(r,[["render",_],["__file","36.html.vue"]]);export{y as default};
