import{_ as i,r as o,o as c,c as u,a as n,b as a,w as t,e as s,d as r}from"./app.f18da10e.js";const d={},k=n("h1",{id:"mysql\u4E8B\u52A1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mysql\u4E8B\u52A1","aria-hidden":"true"},"#"),s(" MySQL\u4E8B\u52A1")],-1),v={class:"table-of-contents"},m=s("mysql\u4E8B\u52A1\u7279\u6027"),b=s("\u4F7F\u7528\u7684\u5305\u5BFC\u5165"),q=s("golang MySQL\u4E8B\u52A1\u5E94\u7528"),g=s("\u67E5\u770BMySQL"),f=s("END \u94FE\u63A5"),h=r(`<p>[toc]</p><h2 id="mysql\u4E8B\u52A1\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#mysql\u4E8B\u52A1\u7279\u6027" aria-hidden="true">#</a> mysql\u4E8B\u52A1\u7279\u6027</h2><ul><li>\u539F\u5B50\u6027</li><li>\u4E00\u81F4\u6027</li><li>\u9694\u79BB\u6027</li><li>\u6301\u4E45\u6027</li></ul><h2 id="\u4F7F\u7528\u7684\u5305\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7684\u5305\u5BFC\u5165" aria-hidden="true">#</a> \u4F7F\u7528\u7684\u5305\u5BFC\u5165</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">(</span>\u201Cgithub.com/jmoiron/sqlx&quot;<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="golang-mysql\u4E8B\u52A1\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#golang-mysql\u4E8B\u52A1\u5E94\u7528" aria-hidden="true">#</a> golang MySQL\u4E8B\u52A1\u5E94\u7528</h2><ol><li><code>Db.Begin()</code> \u5F00\u59CB\u4E8B\u52A1</li><li><code>Db.Commit()</code> \u63D0\u4EA4\u4E8B\u52A1</li><li><code>Db.Rollback()</code> \u56DE\u6EDA\u4E8B\u52A1</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
    <span class="token keyword">import</span> <span class="token punctuation">(</span>
        <span class="token string">&quot;fmt&quot;</span>

        <span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
        <span class="token string">&quot;github.com/jmoiron/sqlx&quot;</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        UserId   <span class="token builtin">int</span>    <span class="token string">\`db:&quot;user_id&quot;\`</span>
        Username <span class="token builtin">string</span> <span class="token string">\`db:&quot;username&quot;\`</span>
        Sex      <span class="token builtin">string</span> <span class="token string">\`db:&quot;sex&quot;\`</span>
        Email    <span class="token builtin">string</span> <span class="token string">\`db:&quot;email&quot;\`</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">type</span> Place <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        Country <span class="token builtin">string</span> <span class="token string">\`db:&quot;country&quot;\`</span>
        City    <span class="token builtin">string</span> <span class="token string">\`db:&quot;city&quot;\`</span>
        TelCode <span class="token builtin">int</span>    <span class="token string">\`db:&quot;telcode&quot;\`</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> Db <span class="token operator">*</span>sqlx<span class="token punctuation">.</span>DB

    <span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        database<span class="token punctuation">,</span> err <span class="token operator">:=</span> sqlx<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root:root@tcp(127.0.0.1:3306)/test&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;open mysql failed,&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        Db <span class="token operator">=</span> database
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> Db<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;begin failed :&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        r<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">&quot;insert into person(username, sex, email)values(?, ?, ?)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stu001&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;man&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stu01@qq.com&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exec failed, &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        id<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exec failed, &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;insert succ:&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>

        r<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">&quot;insert into person(username, sex, email)values(?, ?, ?)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stu001&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;man&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stu01@qq.com&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exec failed, &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        id<span class="token punctuation">,</span> err <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exec failed, &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            conn<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;insert succ:&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>

        conn<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8F93\u51FA\u7ED3\u679C\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>insert succ: 2
insert succ: 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770Bmysql" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Bmysql" aria-hidden="true">#</a> \u67E5\u770BMySQL</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>    mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> person<span class="token punctuation">;</span>
    <span class="token operator">+</span><span class="token comment">---------+----------+------+--------------+</span>
    <span class="token operator">|</span> user_id <span class="token operator">|</span> username <span class="token operator">|</span> sex  <span class="token operator">|</span> email        <span class="token operator">|</span>
    <span class="token operator">+</span><span class="token comment">---------+----------+------+--------------+</span>
    <span class="token operator">|</span>       <span class="token number">2</span> <span class="token operator">|</span> stu001   <span class="token operator">|</span> man  <span class="token operator">|</span> stu01<span class="token variable">@qq.com</span> <span class="token operator">|</span>
    <span class="token operator">|</span>       <span class="token number">3</span> <span class="token operator">|</span> stu001   <span class="token operator">|</span> man  <span class="token operator">|</span> stu01<span class="token variable">@qq.com</span> <span class="token operator">|</span>
    <span class="token operator">+</span><span class="token comment">---------+----------+------+--------------+</span>
    <span class="token number">2</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="24.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="26.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,14),_=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),y={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),w=s(")"),E=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),C={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},L=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function D(P,S){const e=o("router-link"),l=o("RouterLink"),p=o("ExternalLinkIcon");return c(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(e,{to:"#mysql\u4E8B\u52A1\u7279\u6027"},{default:t(()=>[m]),_:1})]),n("li",null,[a(e,{to:"#\u4F7F\u7528\u7684\u5305\u5BFC\u5165"},{default:t(()=>[b]),_:1})]),n("li",null,[a(e,{to:"#golang-mysql\u4E8B\u52A1\u5E94\u7528"},{default:t(()=>[q]),_:1})]),n("li",null,[a(e,{to:"#\u67E5\u770Bmysql"},{default:t(()=>[g]),_:1})]),n("li",null,[a(e,{to:"#end-\u94FE\u63A5"},{default:t(()=>[f]),_:1})])])]),h,n("ul",null,[n("li",null,[n("p",null,[a(l,{to:"/Gomd_super/"},{default:t(()=>[_]),_:1})])]),n("li",null,[n("p",null,[n("a",y,[x,a(p)]),w])]),n("li",null,[n("p",null,[E,n("a",C,[L,a(p)])])])])])}const I=i(d,[["render",D],["__file","25.html.vue"]]);export{I as default};
