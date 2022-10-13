import{_ as i,r as o,o as l,c as u,a as n,b as a,w as t,d as s,e as r}from"./app.5dbe8dec.js";const d="/assets/image-20221003164439481.2783df30.png",k="/assets/image-20221003164451431.138ebd9f.png",v="/assets/qiFHySImWTN1c7M-1664787055363-105.0568c223.png",m={},b=n("h1",{id:"golang\u9762\u5BF9\u5BF9\u8C61\u601D\u60F3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#golang\u9762\u5BF9\u5BF9\u8C61\u601D\u60F3","aria-hidden":"true"},"#"),s(" Golang\u9762\u5BF9\u5BF9\u8C61\u601D\u60F3")],-1),g={class:"table-of-contents"},f=s("\u9762\u5BF9\u5BF9\u8C61\u7F16\u7A0B"),y=s("\u6307\u5B9A\u53D8\u91CF\u503C"),q=s("\u5DE5\u5382\u6A21\u5F0F"),h=s("\u62BD\u8C61"),w=s("\u9762\u5BF9\u5BF9\u8C61\u7279\u5F81"),_=s("\u5C01\u88C5"),x=s("\u7EE7\u627F"),S=s("\u7EE7\u627F\u7684\u6DF1\u5165\u8BA8\u8BBA"),A=s("END \u94FE\u63A5"),P=n("p",null,"[toc]",-1),N=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),B={href:"https://pkg.go.dev/std",target:"_blank",rel:"noopener noreferrer"},G=s("https://pkg.go.dev/std"),C=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),E=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),V={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},D=s("https://github.com/3293172751/golang-rearn"),I=n("hr",null,null,-1),W=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),L=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),Q={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},j=s("http://nsddd.top"),z=r(`<hr><h2 id="\u9762\u5BF9\u5BF9\u8C61\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9762\u5BF9\u5BF9\u8C61\u7F16\u7A0B" aria-hidden="true">#</a> \u9762\u5BF9\u5BF9\u8C61\u7F16\u7A0B</h2><blockquote><p>\u9762\u5BF9\u5BF9\u8C61\u7684\u7F16\u7A0B\u6B65\u9AA4\uFF1A</p><ol><li>\u58F0\u660E\u7ED3\u6784\u4F53\uFF0C\u786E\u5B9A\u7ED3\u6784\u4F53\u540D</li><li>\u7F16\u5199\u7ED3\u6784\u4F53\u5B57\u6BB5</li><li>\u7F16\u5199\u7ED3\u6784\u4F53\u65B9\u6CD5</li></ol></blockquote><p><strong>\u6848\u4F8B\u8054\u7CFB\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>	
<span class="token punctuation">)</span>

<span class="token comment">/*
\u5B66\u751F\u6848\u4F8B\uFF1A
\u7F16\u5199\u4E00\u4E2AStudent\u7ED3\u6784\u4F53\uFF0C\u5305\u542Bname\u3001gender\u3001age\u3001id\u3001score\u5B57\u6BB5\uFF0C\u5206\u522B\u4E3Astring\u3001string\u3001int\u3001int\u3001float64\u7C7B\u578B\u3002
\u7ED3\u6784\u4F53\u4E2D\u58F0\u660E\u4E00\u4E2Asay\u65B9\u6CD5\uFF0C\u8FD4\u56DEstring\u7C7B\u578B\uFF0C\u65B9\u6CD5\u8FD4\u56DE\u4FE1\u606F\u4E2D\u5305\u542B\u6240\u6709\u5B57\u6BB5\u503C\u3002
\u5728main\u65B9\u6CD5\u4E2D\uFF0C\u521B\u5EFAStudent\u7ED3\u6784\u4F53\u5B9E\u4F8B(\u53D8\u91CF)\uFF0C\u5E76\u8BBF\u95EEsay\u65B9\u6CD5\uFF0C\u5E76\u5C06\u8C03\u7528\u7ED3\u679C\u6253\u5370\u8F93\u51FA\u3002
*/</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	gender <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
	id <span class="token builtin">int</span>
	score <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>student <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token builtin">string</span> <span class="token punctuation">{</span>

	infoStr <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;student\u7684\u4FE1\u606F name=[%v] gender=[%v], age=[%v] id=[%v] score=[%v]&quot;</span><span class="token punctuation">,</span>
		student<span class="token punctuation">.</span>name<span class="token punctuation">,</span> student<span class="token punctuation">.</span>gender<span class="token punctuation">,</span> student<span class="token punctuation">.</span>age<span class="token punctuation">,</span> student<span class="token punctuation">.</span>id<span class="token punctuation">,</span> student<span class="token punctuation">.</span>score<span class="token punctuation">)</span>

	<span class="token keyword">return</span> infoStr
<span class="token punctuation">}</span>

<span class="token comment">/*
1)\u7F16\u7A0B\u521B\u5EFA\u4E00\u4E2ABox\u7ED3\u6784\u4F53\uFF0C\u5728\u5176\u4E2D\u58F0\u660E\u4E09\u4E2A\u5B57\u6BB5\u8868\u793A\u4E00\u4E2A\u7ACB\u65B9\u4F53\u7684\u957F\u3001\u5BBD\u548C\u9AD8\uFF0C\u957F\u5BBD\u9AD8\u8981\u4ECE\u7EC8\u7AEF\u83B7\u53D6
2)\u58F0\u660E\u4E00\u4E2A\u65B9\u6CD5\u83B7\u53D6\u7ACB\u65B9\u4F53\u7684\u4F53\u79EF\u3002
3)\u521B\u5EFA\u4E00\u4E2ABox\u7ED3\u6784\u4F53\u53D8\u91CF\uFF0C\u6253\u5370\u7ED9\u5B9A\u5C3A\u5BF8\u7684\u7ACB\u65B9\u4F53\u7684\u4F53\u79EF
*/</span>
<span class="token keyword">type</span> Box <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token builtin">len</span> <span class="token builtin">float64</span>
	width <span class="token builtin">float64</span>
	height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u58F0\u660E\u4E00\u4E2A\u65B9\u6CD5\u83B7\u53D6\u7ACB\u65B9\u4F53\u7684\u4F53\u79EF</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>box <span class="token operator">*</span>Box<span class="token punctuation">)</span> <span class="token function">getVolumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> box<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">*</span> box<span class="token punctuation">.</span>width <span class="token operator">*</span> box<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>


<span class="token comment">// \u666F\u533A\u95E8\u7968\u6848\u4F8B</span>
<span class="token comment">// \u4E00\u4E2A\u666F\u533A\u6839\u636E\u6E38\u4EBA\u7684\u5E74\u9F84\u6536\u53D6\u4E0D\u540C\u4EF7\u683C\u7684\u95E8\u7968\uFF0C\u6BD4\u5982\u5E74\u9F84\u5927\u4E8E18\uFF0C\u6536\u8D3920\u5143\uFF0C\u5176\u5B83\u60C5\u51B5\u95E8\u7968\u514D\u8D39.</span>
<span class="token comment">// \u8BF7\u7F16\u5199Visitor\u7ED3\u6784\u4F53\uFF0C\u6839\u636E\u5E74\u9F84\u6BB5\u51B3\u5B9A\u80FD\u591F\u8D2D\u4E70\u7684\u95E8\u7968\u4EF7\u683C\u5E76\u8F93\u51FA</span>

<span class="token keyword">type</span> Visitor <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>visitor <span class="token operator">*</span>Visitor<span class="token punctuation">)</span> <span class="token function">showPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> visitor<span class="token punctuation">.</span>Age <span class="token operator">&gt;=</span> <span class="token number">90</span> <span class="token operator">||</span> visitor<span class="token punctuation">.</span>Age <span class="token operator">&lt;=</span><span class="token number">8</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8003\u8651\u5230\u5B89\u5168\uFF0C\u5C31\u4E0D\u8981\u73A9\u4E86&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> visitor<span class="token punctuation">.</span>Age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6E38\u5BA2\u7684\u540D\u5B57\u4E3A %v \u5E74\u9F84\u4E3A %v \u6536\u8D3920\u5143 \\n&quot;</span><span class="token punctuation">,</span> visitor<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> visitor<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6E38\u5BA2\u7684\u540D\u5B57\u4E3A %v \u5E74\u9F84\u4E3A %v \u514D\u8D39 \\n&quot;</span><span class="token punctuation">,</span> visitor<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> visitor<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u6D4B\u8BD5</span>
	<span class="token comment">//\u521B\u5EFA\u4E00\u4E2AStudent\u5B9E\u4F8B\u53D8\u91CF</span>
	<span class="token keyword">var</span> stu <span class="token operator">=</span> Student<span class="token punctuation">{</span>
		name <span class="token punctuation">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
		gender <span class="token punctuation">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
		age <span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
		id <span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
		score <span class="token punctuation">:</span> <span class="token number">99.98</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">//\u6D4B\u8BD5\u4EE3\u7801</span>
	<span class="token keyword">var</span> box Box
	box<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">=</span> <span class="token number">1.1</span>
	box<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">2.0</span>
	box<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">3.0</span>
	volumn <span class="token operator">:=</span> box<span class="token punctuation">.</span><span class="token function">getVolumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F53\u79EF\u4E3A=%.2f\\n&quot;</span><span class="token punctuation">,</span> volumn<span class="token punctuation">)</span>
    <span class="token comment">/*\u683C\u5F0F\u5316\u8F93\u51FA\uFF0C\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570\u70B9*/</span>

	<span class="token comment">//\u6D4B\u8BD5</span>
	<span class="token keyword">var</span> v Visitor
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>v<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
		<span class="token keyword">if</span> v<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;n&quot;</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9000\u51FA\u7A0B\u5E8F....&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4F60\u7684\u5E74\u9F84&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>v<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
		v<span class="token punctuation">.</span><span class="token function">showPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go build -o main main.go </span>
<span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># ./main</span>
student\u7684\u4FE1\u606F <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token punctuation">[</span>tom<span class="token punctuation">]</span> <span class="token assign-left variable">gender</span><span class="token operator">=</span><span class="token punctuation">[</span>male<span class="token punctuation">]</span>, <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span> <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">]</span> <span class="token assign-left variable">score</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">99.98</span><span class="token punctuation">]</span>
\u4F53\u79EF\u4E3A<span class="token operator">=</span><span class="token number">6.60</span>\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57
\u5F20\u4E09
\u8BF7\u8F93\u5165\u4F60\u7684\u5E74\u9F84
<span class="token number">19</span>
\u6E38\u5BA2\u7684\u540D\u5B57\u4E3A \u5F20\u4E09 \u5E74\u9F84\u4E3A <span class="token number">19</span> \u6536\u8D3920\u5143 
\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57
\u674E\u56DB
\u8BF7\u8F93\u5165\u4F60\u7684\u5E74\u9F84
<span class="token number">8</span>
\u8003\u8651\u5230\u5B89\u5168\uFF0C\u5C31\u4E0D\u8981\u73A9\u4E86
\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57
n
\u9000\u51FA\u7A0B\u5E8F<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6307\u5B9A\u53D8\u91CF\u503C" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u53D8\u91CF\u503C" aria-hidden="true">#</a> \u6307\u5B9A\u53D8\u91CF\u503C</h2><p><strong>Golang\u5728\u521B\u5EFA\u7ED3\u6784\u4F53\u65F6\u5019\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u5B57\u6BB5\u503C</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>	
<span class="token punctuation">)</span>
<span class="token keyword">type</span> Stu <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u65B9\u6CD5 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1. \u5728\u521B\u5EFA\u7ED3\u6784\u4F53\u53D8\u91CF\u65F6\uFF0C\u628A\u5B57\u6BB5\u540D\u548C\u5B57\u6BB5\u503C\u5199\u5728\u4E00\u8D77, \u8FD9\u79CD\u5199\u6CD5\uFF0C\u5C31\u4E0D\u4F9D\u8D56\u5B57\u6BB5\u7684\u5B9A\u4E49\u987A\u5E8F</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> stu3 <span class="token operator">=</span> Stu<span class="token punctuation">{</span>
		Name <span class="token punctuation">:</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span>
		Age <span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
stu4 <span class="token operator">:=</span> Stu<span class="token punctuation">{</span>
	Age <span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
	Name <span class="token punctuation">:</span> <span class="token string">&quot;mary&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">,</span> stu2<span class="token punctuation">,</span> stu3<span class="token punctuation">,</span> stu4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. \u5728\u521B\u5EFA\u7ED3\u6784\u4F53\u53D8\u91CF\u65F6\uFF0C\u5C31\u76F4\u63A5\u6307\u5B9A\u5B57\u6BB5\u7684\u503C\uFF0C\u987A\u5E8F\u4E0D\u53EF\u98A0\u5012</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> stu1 <span class="token operator">=</span> Stu<span class="token punctuation">{</span><span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">}</span> <span class="token comment">// stu1---&gt; \u7ED3\u6784\u4F53\u6570\u636E\u7A7A\u95F4</span>
stu2 <span class="token operator">:=</span> Stu<span class="token punctuation">{</span><span class="token string">&quot;\u5C0F\u660E~&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u270D\uFE0F <strong>\u53EF\u4EE5\u4F7F\u7528\u7ED3\u6784\u4F53\u6307\u9488\uFF08\u91CD\u8981\uFF09</strong></p><blockquote><p>\u8FD4\u56DE\u7684\u662F\u4E00\u79CD\u6307\u9488\u7C7B\u578B</p></blockquote><p><strong>3. \u8FD4\u56DE\u7ED3\u6784\u4F53\u7684\u6307\u9488\u7C7B\u578B(!!!)</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> stu5 <span class="token operator">*</span>Stu <span class="token operator">=</span> <span class="token operator">&amp;</span>Stu<span class="token punctuation">{</span><span class="token string">&quot;\u5C0F\u738B&quot;</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">}</span>  
<span class="token comment">/*\u6216*/</span>
stu6 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Stu<span class="token punctuation">{</span><span class="token string">&quot;\u5C0F\u738B~&quot;</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u5728\u7ED3\u6784\u4F53\u4E2D stu5--&gt; \u5730\u5740 ---&gt; \u7ED3\u6784\u4F53\u6570\u636E[xxxx,xxx]</strong></p></blockquote><p><strong>4. \u521B\u5EFA\u7ED3\u6784\u4F53\u6307\u9488\u53D8\u91CF\u65F6\uFF0C\u628A\u5B57\u6BB5\u540D\u548C\u5B57\u6BB5\u503C\u5199\u5728\u4E00\u8D77, \u8FD9\u79CD\u5199\u6CD5\uFF0C\u5C31\u4E0D\u4F9D\u8D56\u5B57\u6BB5\u7684\u5B9A\u4E49\u987A\u5E8F</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> stu7 <span class="token operator">=</span> <span class="token operator">&amp;</span>Stu<span class="token punctuation">{</span>
	Name <span class="token punctuation">:</span> <span class="token string">&quot;\u5C0F\u674E&quot;</span><span class="token punctuation">,</span>
	Age <span class="token punctuation">:</span><span class="token number">49</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
stu8 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Stu<span class="token punctuation">{</span>
	Age <span class="token punctuation">:</span><span class="token number">59</span><span class="token punctuation">,</span>
	Name <span class="token punctuation">:</span> <span class="token string">&quot;\u5C0F\u674E~&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>stu5<span class="token punctuation">,</span> <span class="token operator">*</span>stu6<span class="token punctuation">,</span> <span class="token operator">*</span>stu7<span class="token punctuation">,</span> <span class="token operator">*</span>stu8<span class="token punctuation">)</span>   <span class="token comment">//\u53D6\u503C</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stu5<span class="token punctuation">,</span> stu6<span class="token punctuation">,</span> stu7<span class="token punctuation">,</span> stu8<span class="token punctuation">)</span>   <span class="token comment">//\u53D6\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u6A21\u5F0F</h2><p><strong>Golang\u4E2D\u6CA1\u6709\u6784\u9020\u51FD\u6570\uFF0C\u901A\u5E38\u53EF\u4EE5\u7528\u5DE5\u5382\u6A21\u5F0F\u6765\u89E3\u51B3\u95EE\u9898</strong></p><blockquote><p>\u5F53\u6211\u4EEC\u7684\u7ED3\u6784\u4F53\u9996\u5B57\u6BCD\u662F\u5927\u5199\u7684\u53EF\u4EE5\u5728\u5176\u4ED6\u5305\u4F7F\u7528\u8FD9\u4E2A\u7ED3\u6784\u4F53,<strong>\u90A3\u4E48\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u5C0F\u5199\u7684\u4E5F\u80FD\u5728\u5176\u4ED6\u5305\u4F7F\u7528,\u6B64\u65F6\u5C31\u9700\u8981\u5DE5\u5382\u6A21\u5F0F\u6765\u89E3\u51B3,\u4F7F\u7528\u5DE5\u5382\u6A21\u5F0F\u5B9E\u73B0\u630E\u5305\u8BBF\u95EE\u7ED3\u6784\u4F53\u5B9E\u4F8B</strong></p></blockquote><p><strong>\u6211\u5148\u4F7F\u7528vim\u67E5\u770B\u4E0B\u6587\u4EF6\u8DEF\u5F84</strong></p><p><img src="`+d+'" alt="image-20221003164439481"></p><p><strong>\u4F7F\u7528\u5927\u5199\u5B57\u6BCD\u76F4\u63A5\u8BBF\u95EE\u5305\u4E2D\u7684\u7ED3\u6784\u4F53</strong></p><img src="'+k+`" alt="image-20221003164451431" style="zoom:80%;"><p><strong>\u5982\u679Cstudent\u7ED3\u6784\u4F53\u9996\u5B57\u6BCD\u662F\u5C0F\u5199\u7684,\u53EA\u80FD\u5728model\u4E2D\u4F7F\u7528,\u6B64\u65F6\u901A\u8FC7\u5DE5\u5382\u6A21\u5F0F\u89E3\u51B3</strong></p><p>\u5728model\u5305\u4E2D\u521B\u5EFA\u4E00\u4E2A\u65B9\u6CD5,\u8FD4\u56DE\u6307\u9488\u7C7B\u578B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewStudent</span><span class="token punctuation">(</span>n <span class="token builtin">string</span><span class="token punctuation">,</span>s <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token operator">*</span>student<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>student<span class="token punctuation">{</span>
        Name <span class="token punctuation">:</span> n<span class="token punctuation">,</span>
        Score <span class="token punctuation">:</span> s<span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5728main\u5305\u4E2D\u4F7F\u7528</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//\u9996\u5B57\u6BCD\u5C0F\u5199\u4F7F\u7528\u65B9\u6CD5</span>
	<span class="token keyword">var</span> stu <span class="token operator">=</span> model<span class="token punctuation">.</span><span class="token function">NewStudent</span><span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span><span class="token number">88.8</span><span class="token punctuation">)</span>
    <span class="token comment">/*stu\u662F\u6307\u5411\u7ED3\u6784\u4F53\u7684\u6307\u9488*/</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>stu<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;name=&quot;</span><span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">&quot;Score=&quot;</span><span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Score<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8FD9\u79CD\u65B9\u6CD5\u5C31\u88AB\u79F0\u4E3A\u5DE5\u5382\u6A21\u5F0F</strong></p><blockquote><p>\u5982\u679Cscore \u662F\u4E00\u4E2A\u5C0F\u5199\u7684,\u5728\u5176\u4ED6\u5305\u4E0D\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE,\u600E\u4E48\u6837\u8BBF\u95EE\u5B83\u5462?</p><p>\u6211\u4EEC\u53EF\u4EE5\u518D\u52A0\u5165\u63D0\u4F9B\u4E00\u4E2A\u65B9\u6CD5</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>student<span class="token punctuation">)</span> <span class="token function">GetScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">*</span>s<span class="token punctuation">.</span>score<span class="token punctuation">)</span>   <span class="token comment">//ok,*\u53EF\u4EE5\u7701\u7565</span>
<span class="token punctuation">}</span><span class="token number">66</span>
<span class="token comment">/*main\u8BBF\u95EE*/</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">GetScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62BD\u8C61" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61" aria-hidden="true">#</a> \u62BD\u8C61</h2><blockquote><p>\u9762\u5BF9\u5BF9\u8C61\u7684\u601D\u60F3\u53EF\u4EE5\u7B80\u5316\u4E3A\u4E00\u79CD\u62BD\u8C61\u7684\u6A21\u578B,\u628A\u4E00\u7C7B\u4E8B\u7269\u7684\u5171\u6709\u5C5E\u6027(\u5B57\u6BB5)\u548C\u65B9\u6CD5\u63D0\u53D6\u51FA\u6765,\u5F62\u6210\u4E00\u4E2A\u7269\u7406\u6A21\u578B(\u6A21\u677F),\u8FD9\u79CD\u7814\u7A76\u95EE\u9898\u7684\u65B9\u6CD5\u79F0\u4E4B\u4E3A<strong>\u62BD\u8C61</strong></p></blockquote><blockquote><p>\u94F6\u884C\u5B58\u53D6\u6B3E</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53Account</span>
<span class="token keyword">type</span> Account <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	AccountNo <span class="token builtin">string</span>
	Pwd <span class="token builtin">string</span>
	Balance <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//1. \u65B9\u6CD5 == \u5B58\u6B3E</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>account <span class="token operator">*</span>Account<span class="token punctuation">)</span> <span class="token function">Deposite</span><span class="token punctuation">(</span>money <span class="token builtin">float64</span><span class="token punctuation">,</span> pwd <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">//\u770B\u4E0B\u8F93\u5165\u7684\u5BC6\u7801\u662F\u5426\u6B63\u786E</span>
	<span class="token keyword">if</span> pwd <span class="token operator">!=</span> account<span class="token punctuation">.</span>Pwd <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u6B63\u786E&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>

	<span class="token comment">//\u770B\u770B\u5B58\u6B3E\u91D1\u989D\u662F\u5426\u6B63\u786E</span>
    <span class="token keyword">if</span> money <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u91D1\u989D\u4E0D\u6B63\u786E&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	account<span class="token punctuation">.</span>Balance <span class="token operator">+=</span> money
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B58\u6B3E\u6210\u529F~~&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53D6\u6B3E</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>account <span class="token operator">*</span>Account<span class="token punctuation">)</span> <span class="token function">WithDraw</span><span class="token punctuation">(</span>money <span class="token builtin">float64</span><span class="token punctuation">,</span> pwd <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">//\u770B\u4E0B\u8F93\u5165\u7684\u5BC6\u7801\u662F\u5426\u6B63\u786E</span>
	<span class="token keyword">if</span> pwd <span class="token operator">!=</span> account<span class="token punctuation">.</span>Pwd <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u6B63\u786E&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token comment">//\u770B\u770B\u53D6\u6B3E\u91D1\u989D\u662F\u5426\u6B63\u786E</span>
	<span class="token keyword">if</span> money <span class="token operator">&lt;=</span> <span class="token number">0</span>  <span class="token operator">||</span> money <span class="token operator">&gt;</span> account<span class="token punctuation">.</span>Balance <span class="token punctuation">{</span>
        <span class="token comment">/* \u6216\u8005money\u5927\u4E8E\u4F60\u7684\u4F59\u989D,,\u6CA1\u529E\u6CD5\u53D6\u51FA*/</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u91D1\u989D\u4E0D\u6B63\u786E&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	account<span class="token punctuation">.</span>Balance <span class="token operator">-=</span> money
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u6B3E\u6210\u529F~~&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u67E5\u8BE2\u4F59\u989Dquery</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>account <span class="token operator">*</span>Account<span class="token punctuation">)</span> <span class="token function">Query</span><span class="token punctuation">(</span>pwd <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">//\u770B\u4E0B\u8F93\u5165\u7684\u5BC6\u7801\u662F\u5426\u6B63\u786E</span>
	<span class="token keyword">if</span> pwd <span class="token operator">!=</span> account<span class="token punctuation">.</span>Pwd <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u6B63\u786E&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u7684\u8D26\u53F7\u4E3A=%v \u4F59\u989D=%v \\n&quot;</span><span class="token punctuation">,</span> account<span class="token punctuation">.</span>AccountNo<span class="token punctuation">,</span> account<span class="token punctuation">.</span>Balance<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	account <span class="token operator">:=</span> Account<span class="token punctuation">{</span>
		AccountNo <span class="token punctuation">:</span> <span class="token string">&quot;gs1111111&quot;</span><span class="token punctuation">,</span>
		Pwd <span class="token punctuation">:</span> <span class="token string">&quot;666666&quot;</span><span class="token punctuation">,</span>
		Balance <span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u8FD9\u91CC\u53EF\u4EE5\u505A\u7684\u66F4\u52A0\u7075\u6D3B\uFF0C\u5C31\u662F\u8BA9\u7528\u6237\u901A\u8FC7\u63A7\u5236\u53F0\u6765\u8F93\u5165\u547D\u4EE4...</span>
	<span class="token comment">//\u83DC\u5355....</span>
	account<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;666666&quot;</span><span class="token punctuation">)</span>
	account<span class="token punctuation">.</span><span class="token function">Deposite</span><span class="token punctuation">(</span><span class="token number">200.0</span><span class="token punctuation">,</span> <span class="token string">&quot;666666&quot;</span><span class="token punctuation">)</span>
	account<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;666666&quot;</span><span class="token punctuation">)</span>
	account<span class="token punctuation">.</span><span class="token function">WithDraw</span><span class="token punctuation">(</span><span class="token number">150.0</span><span class="token punctuation">,</span> <span class="token string">&quot;666666&quot;</span><span class="token punctuation">)</span>
	account<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;666666&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@mail golang]# go run Account.go 
\u4F60\u7684\u8D26\u53F7\u4E3A=gs1111111 \u4F59\u989D=100 
\u5B58\u6B3E\u6210\u529F~~
\u4F60\u7684\u8D26\u53F7\u4E3A=gs1111111 \u4F59\u989D=300 
\u53D6\u6B3E\u6210\u529F~~
\u4F60\u7684\u8D26\u53F7\u4E3A=gs1111111 \u4F59\u989D=150 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9762\u5BF9\u5BF9\u8C61\u7279\u5F81" tabindex="-1"><a class="header-anchor" href="#\u9762\u5BF9\u5BF9\u8C61\u7279\u5F81" aria-hidden="true">#</a> \u9762\u5BF9\u5BF9\u8C61\u7279\u5F81</h2><p><strong>\u5C01\u88C5:\u628A\u62BD\u8C61\u51FA\u7684\u5B57\u6BB5\u548C\u5BF9\u5B57\u6BB5\u7684\u64CD\u4F5C,\u5C01\u88C5\u5728\u4E00\u8D77,\u6570\u636E\u4FDD\u5B58\u5728\u5185\u90E8</strong></p><p>\u6BD4\u5982\u8BF4\u4E0A\u9762\u53D6\u6B3E\u8FC7\u7A0B,\u4FDD\u8BC1\u4E86\u6570\u636E\u5408\u7406\u6027:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>account <span class="token operator">*</span>Account<span class="token punctuation">)</span> <span class="token function">WithDraw</span><span class="token punctuation">(</span>money <span class="token builtin">float64</span><span class="token punctuation">,</span> pwd <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>

	<span class="token comment">//\u770B\u4E0B\u8F93\u5165\u7684\u5BC6\u7801\u662F\u5426\u6B63\u786E</span>
	<span class="token keyword">if</span> pwd <span class="token operator">!=</span> account<span class="token punctuation">.</span>Pwd <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u6B63\u786E&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token comment">//\u770B\u770B\u53D6\u6B3E\u91D1\u989D\u662F\u5426\u6B63\u786E</span>
	<span class="token keyword">if</span> money <span class="token operator">&lt;=</span> <span class="token number">0</span>  <span class="token operator">||</span> money <span class="token operator">&gt;</span> account<span class="token punctuation">.</span>Balance <span class="token punctuation">{</span>
        <span class="token comment">/* \u6216\u8005money\u5927\u4E8E\u4F60\u7684\u4F59\u989D,,\u6CA1\u529E\u6CD5\u53D6\u51FA*/</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u8F93\u5165\u7684\u91D1\u989D\u4E0D\u6B63\u786E&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	account<span class="token punctuation">.</span>Balance <span class="token operator">-=</span> money
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u6B3E\u6210\u529F~~&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5" aria-hidden="true">#</a> \u5C01\u88C5</h2><p><strong>main\u5305</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;/c/golang/chapter11/encapsulate/model&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p <span class="token operator">:=</span> model<span class="token punctuation">.</span><span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;smith&quot;</span><span class="token punctuation">)</span>   <span class="token comment">//\u5DE5\u5382\u6A21\u5F0F</span>
	p<span class="token punctuation">.</span><span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>    <span class="token comment">//\u5E74\u9F84\u65B9\u6CD5</span>
	p<span class="token punctuation">.</span><span class="token function">SetSal</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>  <span class="token comment">//\u85AA\u6C34</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>   
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot; age =&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span><span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot; sal = &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span><span class="token function">GetSal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u5E74\u9F84\u9700\u8981\u7528\u5230\u65B9\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>madel\u5305</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> model
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>     <span class="token comment">//\u5C0F\u5199,\u4E0D\u80FD\u8BBF\u95EEperson</span>
	Name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>   			<span class="token comment">//\u5176\u5B83\u5305\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE..</span>
	sal <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5199\u4E00\u4E2A\u5DE5\u5382\u6A21\u5F0F\u7684\u51FD\u6570\uFF0C\u76F8\u5F53\u4E8E\u6784\u9020\u51FD\u6570  -- \u8BBF\u95EEperson</span>
<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>person <span class="token punctuation">{</span>
    <span class="token comment">/*if....*/</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
		Name <span class="token punctuation">:</span> name<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u4E3A\u4E86\u8BBF\u95EEage \u548C sal \u6211\u4EEC\u7F16\u5199\u4E00\u5BF9SetXxx\u7684\u65B9\u6CD5\u548CGetXxx\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token function">SetAge</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> age <span class="token operator">&gt;</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&lt;</span><span class="token number">150</span> <span class="token punctuation">{</span>
		p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E74\u9F84\u8303\u56F4\u4E0D\u6B63\u786E..&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">//\u7ED9\u7A0B\u5E8F\u5458\u7ED9\u4E00\u4E2A\u9ED8\u8BA4\u503C</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> p<span class="token punctuation">.</span>age
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token function">SetSal</span><span class="token punctuation">(</span>sal <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> sal <span class="token operator">&gt;=</span> <span class="token number">3000</span> <span class="token operator">&amp;&amp;</span> sal <span class="token operator">&lt;=</span> <span class="token number">30000</span> <span class="token punctuation">{</span>
		p<span class="token punctuation">.</span>sal <span class="token operator">=</span> sal
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u85AA\u6C34\u8303\u56F4\u4E0D\u6B63\u786E..&quot;</span><span class="token punctuation">)</span>	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token function">GetSal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> p<span class="token punctuation">.</span>sal
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u53EF\u4EE5\u770B\u5230Go\u8BED\u8A00\u7684\u5DE5\u5382\u6A21\u5F0F\u548Cget\u3001set\u65B9\u6CD5\u548CJava\u7684\u9762\u5BF9\u5BF9\u8C61\u5F88\u63A5\u8FD1</p></div><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><p><strong>\u9762\u5BF9\u5BF9\u8C61\u7684\u7279\u6027\u53EF\u4EE5\u89E3\u51B3\u4EE3\u7801\u7684\u590D\u7528</strong></p><blockquote><p>\u5BF9\u5C0F\u5B66\u751F\u8003\u8BD5\u6210\u7EE9\u7684\u8BBE\u7F6E</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">type</span> Pupil <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u663E\u793A\u6210\u7EE9  - - \u65B9\u6CD5*/</span>
<span class="token keyword">func</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Pupil<span class="token punctuation">)</span> <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u751F\u540D = %v, \u5E74\u9F84 = %v \u6210\u7EE9 = %v&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>p<span class="token punctuation">.</span>Age<span class="token punctuation">,</span>p<span class="token punctuation">.</span>Score<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u5F55\u5165\u5206\u6570*/</span>
<span class="token keyword">func</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Pupil<span class="token punctuation">)</span> <span class="token function">SetScore</span><span class="token punctuation">(</span>score <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> score <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">||</span>score <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8303\u56F4&quot;</span><span class="token punctuation">)</span>
    	<span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>Score <span class="token operator">=</span> score
<span class="token punctuation">}</span>

<span class="token comment">/*\u663E\u793A\u72B6\u6001*/</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Pupil<span class="token punctuation">)</span> <span class="token function">tesing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u5B66\u751F\u6B63\u5728\u8003\u8BD5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p <span class="token operator">:=</span> Pupil<span class="token punctuation">{</span>
        Name <span class="token punctuation">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
        Age <span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span><span class="token function">tesing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span><span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@mail golang]# go run Account.go 
\u5C0F\u5B66\u751F\u6B63\u5728\u8003\u8BD5
\u8BF7\u8F93\u5165\u5C0F\u5B66\u751F\u6210\u7EE9:
102
\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8303\u56F4
\u5B66\u751F\u540D = tom, \u5E74\u9F84 = 10 \u6210\u7EE9 = 0\u5C0F\u5B66\u751F\u6B63\u5728\u8003\u8BD5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6B64\u65F6\u5982\u679C\u8FD8\u6709\u5927\u5B66\u751F\u7684\u8BDD,\u6211\u4EEC\u9700\u8981\u518D\u521B\u5EFA\u4E00\u4E2A\u7ED3\u6784\u4F53Graduate,\u590D\u5236\u4E00\u4EFD\u65B9\u6CD5\u51FA\u6765,\u5C31\u4F1A\u51FA\u73B0\u5927\u91CF\u7684\u4EE3\u7801\u5197\u4F59,\u6B64\u65F6\u9700\u8981\u7528\u5230\u7EE7\u627F\u3002</strong></p><blockquote><p>\u7EE7\u627F\u53EF\u4EE5\u89E3\u51B3\u4EE3\u7801\u590D\u7528\u95EE\u9898,\u4F7F\u7F16\u7A0B\u66F4\u52A0\u9760\u8FD1\u4EBA\u7C7B\u7684\u601D\u8003\u601D\u7EF4\u3002</p></blockquote><blockquote><p>\u5728Golang\u4E2D\u901A\u8FC7\u4E86<strong>\u533F\u540D\u7ED3\u6784\u4F53\u6765\u5B9E\u73B0\u4E86\u7EE7\u627F\u7279\u6027\u3002</strong></p></blockquote><p><img src="`+v+`" alt="image-20220114145510709"></p><p><strong>\u4E5F\u5C31\u662F\u8BF4,\u5728Golang\u4E2D,\u5982\u679C\u4E00\u4E2Astruct\u5D4C\u5957\u4E86\u53E6\u4E00\u4E2A\u533F\u540D\u7ED3\u6784\u4F53,\u90A3\u4E48\u8FD9\u4E2A\u7ED3\u6784\u4F53\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u4F60\u4EEC\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u548C\u65B9\u6CD5,\u4ECE\u800C\u5B9E\u73B0\u4E86\u7EE7\u627F\u7279\u6027</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> Good <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Price <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Book <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Goods <span class="token comment">//\u8FD9\u91CC\u5C31\u662F\u5D4C\u5957\u533F\u540D\u7ED3\u6784\u4F53Goods</span>
	Writer <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6211\u4EEC\u5BF9\u4E0A\u9762\u5B66\u751F\u7684\u6848\u4F8B\u8FDB\u884C\u7EE7\u627F\u6539\u8FDB</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//\u6539\u5199\u5171\u6709\u7684\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5C06Pupil\u548CGraduate\u65B9\u6CD5\u7ED1\u5B9A\u5230*student</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>stu <span class="token operator">*</span>Student<span class="token punctuation">)</span> ShowInfo<span class="token punctuation">{</span>
     fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u751F\u540D = %v, \u5E74\u9F84 = %v \u6210\u7EE9 = %v&quot;</span><span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Age<span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Score<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u5F55\u5165\u5206\u6570*/</span>
<span class="token keyword">func</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">SetScore</span><span class="token punctuation">(</span>score <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> score <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">||</span>score <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8303\u56F4&quot;</span><span class="token punctuation">)</span>
    	<span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>Score <span class="token operator">=</span> score
<span class="token punctuation">}</span>

<span class="token comment">/*\u663E\u793A\u72B6\u6001   --  \u5927\u5B66\u751F\u548C\u5C0F\u5B66\u751F\u4E0D\u4E00\u6837 -- \u4FDD\u7559  -- \u5927\u5B66\u751F*/</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Graduate<span class="token punctuation">)</span> <span class="token function">testing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u5B66\u751F\u6B63\u5728\u8003\u8BD5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Pupil <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Student       <span class="token comment">//\u5D4C\u5165\u4E86student\u7684\u533F\u540D\u7ED3\u6784\u4F53   - -  \u7EE7\u627F</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Graduate <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Student       <span class="token comment">//\u5D4C\u5165\u4E86student\u7684\u533F\u540D\u7ED3\u6784\u4F53   - -  \u7EE7\u627F</span>
<span class="token punctuation">}</span>
<span class="token comment">/*\u663E\u793A\u72B6\u6001*/</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Pupil<span class="token punctuation">)</span> <span class="token function">tesing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u5B66\u751F\u6B63\u5728\u8003\u8BD5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>Pupil<span class="token punctuation">{</span><span class="token punctuation">}</span>
    P<span class="token punctuation">.</span>Student<span class="token punctuation">.</span>Name  <span class="token operator">=</span> <span class="token string">&quot;lihua&quot;</span>
	p<span class="token punctuation">.</span>Student<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">8</span>
    p<span class="token punctuation">.</span><span class="token function">testing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>Student<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>Student<span class="token punctuation">.</span><span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EE7\u627F\u7684\u6DF1\u5165\u8BA8\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F\u7684\u6DF1\u5165\u8BA8\u8BBA" aria-hidden="true">#</a> \u7EE7\u627F\u7684\u6DF1\u5165\u8BA8\u8BBA</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u56E0\u4E3A\u5728Golang\u4E2D\u662F\u6CA1\u6709\u591A\u6001\u7684\uFF0CJava\u4E2D\u7684\u591A\u6001\u6070\u597D\u662F\u975E\u5E38\u96BE\u7684\uFF0C\u5728Golang\u4E2D\u4E5F\u662F\u53EF\u4EE5\u5F88\u597D\u7684\u5B9E\u73B0</p></div><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A<span class="token punctuation">)</span> <span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//\u5927\u5199\u65B9\u6CD5</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A Sayok&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A<span class="token punctuation">)</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//\u5C0F\u5199\u65B9\u6CD5</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A hello&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> B <span class="token keyword">struct</span><span class="token punctuation">{</span>
    A
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> b B
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span>
    <span class="token comment">//b.Name = &quot;tom&quot;  -- \u4E0D\u53EF\u4EE5</span>
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span>
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span><span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span><span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@mail golang]# go run Account.go 
A Sayok tom
A hello tom
{{tom 19}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**\u7531\u6B64\u53EF\u89C1,\u79C1\u6709\u7684\u53EF\u4EE5\u7EE7\u627F\u4F7F\u7528\uFF0C\u800C\u4E14\u65B9\u6CD5hello\u548CSayok\u65B9\u6CD5\u65E0\u8BBA\u662F\u79C1\u6709\u7684\u8FD8\u662F\u516C\u6709\u7684\u90FD\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u9996\u5B57\u6BCD\u5927\u5199\u6216\u8005\u5C0F\u5199\u5747\u53EF\u4EE5 **</p><p><strong>\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u53EF\u4EE5\u628AA\u53BB\u6389,\u8FDB\u884C\u7B80\u5316,\u7F16\u8BD1\u5668\u4E5F\u53EF\u4EE5\u8BC6\u522B(\u7F16\u8BD1\u5668\u4F1A\u81EA\u5DF1\u627E)</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>    <span class="token keyword">var</span> b B
    b<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span>
    b<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span>
    b<span class="token punctuation">.</span><span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5F53\u533F\u540D\u7ED3\u6784\u4F53\u548C\u7ED3\u6784\u4F53\u4E2D\u7684\u53D8\u91CF\u91CD\u590D\u65F6\u5019,\u7F16\u8BD1\u5668\u4F1A\u91C7\u7528\u5C31\u8FD1\u539F\u5219</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> B <span class="token keyword">struct</span><span class="token punctuation">{</span>
    A
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	b<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;jack&quot;</span>   <span class="token comment">//\u6B64\u65F6\u627E\u7684\u662F\u81EA\u8EAB\u7684</span>
    <span class="token comment">/* \u5982\u679C\u8981\u7ED9A\u7684Name\u8D4B\u503C,\u5C31\u5FC5\u987B\u8981\u4F7F\u7528*/</span>
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;lisa&quot;</span>
    b<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>      <span class="token comment">//\u627E\u7684\u662FA</span>
    b<span class="token punctuation">.</span><span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">//\u627E\u7684\u662F\u81EA\u8EAB\u7684Name\u548CA\u7684Age</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7ED3\u6784\u4F53\u5D4C\u5165\u4E86\u4E24\u4E2A\u6216\u8005\u591A\u4E2A\u533F\u540D\u7ED3\u6784\u4F53,\u5982\u679C\u4E24\u4E2A\u533F\u540D\u7ED3\u6784\u4F53\u6709\u76F8\u540C\u7684\u5B57\u6BB5\u548C\u65B9\u6CD5(\u540C\u65F6\u7ED3\u6784\u4F53\u672C\u8EAB\u6CA1\u6709\u76F8\u540C\u7684\u5B57\u6BB5\u548C\u65B9\u6CD5),\u5728\u8BBF\u95EE\u65F6,\u5C31\u5FC5\u987B\u8981\u6307\u5B9A\u533F\u540D\u7ED3\u6784\u4F53\u7684\u540D\u5B57,\u5426\u5219\u7F16\u8BD1\u4F1A\u62A5\u9519</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>    <span class="token comment">//\u76F8\u540C\u5B57\u6BB5</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> B <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>    <span class="token comment">//\u76F8\u540C\u5B57\u6BB5</span>
    score <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> C <span class="token keyword">struct</span><span class="token punctuation">{</span>
	A
	B
<span class="token comment">/*\u5982\u679C\u672C\u8EAB\u6709Name\u5219\u4E0D\u4F1A\u62A5\u9519,\u5C31\u8FD1\u539F\u5219*/</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> c C
    c<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span>      <span class="token comment">//\u4F1A\u62A5\u9519!!!!!</span>
    c<span class="token punctuation">.</span>A<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;lisa&quot;</span>   <span class="token comment">//\u6307\u5B9AA</span>
    c<span class="token punctuation">.</span>B<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;jack&quot;</span>   <span class="token comment">//\u6307\u5B9AB   </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u79CD\u60C5\u51B5\u4E5F\u88AB\u79F0\u4E3A<strong>\u591A\u91CD\u7EE7\u627F</strong>,\u4E3A\u4E86\u4FDD\u8BC1\u4EE3\u7801\u7B80\u6D01\u6027,\u5EFA\u8BAE\u5C3D\u91CF\u4E0D\u4F7F\u7528\u591A\u91CD\u7EE7\u627F\u3002</p></blockquote><p><strong>\u5D4C\u5957\u533F\u540D\u7ED3\u6784\u4F53\u540E,\u53EF\u4EE5\u5728\u521B\u5EFA\u7ED3\u6784\u53D8\u91CF\u65F6,\u76F4\u63A5\u6307\u5B9A\u5404\u4E2A\u533F\u540D\u7ED3\u6784\u4F53\u5B57\u6BB5\u7684\u503C</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	c <span class="token operator">:=</span> C<span class="token punctuation">{</span>
        B<span class="token punctuation">{</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        A<span class="token punctuation">{</span><span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\u540E\u9762\u9700\u8981\u6709<code>,</code></p></blockquote><p><strong>\u7ED3\u6784\u4F53\u4E2D\u53EF\u4EE5\u53EA\u5199\u7C7B\u578B</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>    <span class="token comment">//\u76F8\u540C\u5B57\u6BB5</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> C <span class="token keyword">struct</span><span class="token punctuation">{</span>
	A
	<span class="token builtin">int</span>   <span class="token comment">//\u8868\u793A\u7684\u662F\u533F\u540D\u5B57\u6BB5</span>
<span class="token punctuation">}</span>
<span class="token comment">/*\u4F7F\u7528int\u65B9\u6CD5*/</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> c C
    c<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;lihua&quot;</span>
    c<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">100</span>
    c<span class="token punctuation">.</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">20</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int=&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">.</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c= &quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@mail golang]# go run main.go 
int= 20
c= {{lihua 100} 20}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="10.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="12.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,91),F=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),J={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},R=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),T=s(")"),X=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),H={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},M=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function Y(K,O){const p=o("router-link"),e=o("ExternalLinkIcon"),c=o("RouterLink");return l(),u("div",null,[b,n("nav",g,[n("ul",null,[n("li",null,[a(p,{to:"#\u9762\u5BF9\u5BF9\u8C61\u7F16\u7A0B"},{default:t(()=>[f]),_:1})]),n("li",null,[a(p,{to:"#\u6307\u5B9A\u53D8\u91CF\u503C"},{default:t(()=>[y]),_:1})]),n("li",null,[a(p,{to:"#\u5DE5\u5382\u6A21\u5F0F"},{default:t(()=>[q]),_:1})]),n("li",null,[a(p,{to:"#\u62BD\u8C61"},{default:t(()=>[h]),_:1})]),n("li",null,[a(p,{to:"#\u9762\u5BF9\u5BF9\u8C61\u7279\u5F81"},{default:t(()=>[w]),_:1})]),n("li",null,[a(p,{to:"#\u5C01\u88C5"},{default:t(()=>[_]),_:1})]),n("li",null,[a(p,{to:"#\u7EE7\u627F"},{default:t(()=>[x]),_:1})]),n("li",null,[a(p,{to:"#\u7EE7\u627F\u7684\u6DF1\u5165\u8BA8\u8BBA"},{default:t(()=>[S]),_:1})]),n("li",null,[a(p,{to:"#end-\u94FE\u63A5"},{default:t(()=>[A]),_:1})])])]),P,n("p",null,[N,n("a",B,[G,a(e)])]),C,n("p",null,[E,n("a",V,[D,a(e)])]),I,W,n("blockquote",null,[n("p",null,[L,n("a",Q,[j,a(e)])])]),z,n("ul",null,[n("li",null,[n("p",null,[a(c,{to:"/"},{default:t(()=>[F]),_:1})])]),n("li",null,[n("p",null,[n("a",J,[R,a(e)]),T])]),n("li",null,[n("p",null,[X,n("a",H,[M,a(e)])])])])])}const Z=i(m,[["render",Y],["__file","11.html.vue"]]);export{Z as default};
