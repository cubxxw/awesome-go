import{_ as o,r as e,o as c,c as i,a as n,b as a,w as l,e as s,d as u}from"./app.bb6687c9.js";const d={},r=n("h1",{id:"go\u8BED\u8A00\u6570\u636E\u7ED3\u6784\u53CC\u5411\u94FE\u8868\u548C\u5FAA\u73AF\u94FE\u8868",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u6570\u636E\u7ED3\u6784\u53CC\u5411\u94FE\u8868\u548C\u5FAA\u73AF\u94FE\u8868","aria-hidden":"true"},"#"),s(" Go\u8BED\u8A00\u6570\u636E\u7ED3\u6784\u53CC\u5411\u94FE\u8868\u548C\u5FAA\u73AF\u94FE\u8868")],-1),k=n("p",null,"[TOC]",-1),m=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),v={href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"},b=s("https://golang.org/"),h=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),f=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),g={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},w=s("https://github.com/3293172751/golang-rearn"),q=n("hr",null,null,-1),y=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),x=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),N={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},_=s("http://nsddd.top"),H=n("hr",null,null,-1),C=n("h2",{id:"\u94FE\u8868",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u94FE\u8868","aria-hidden":"true"},"#"),s(" \u94FE\u8868")],-1),P={class:"custom-container details"},I=n("summary",null,"\u8B66\u544A\u26A0\uFE0F",-1),E=s("\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u76F8\u5173\u79FB\u6B65\u5230"),L={href:"https://github.com/3293172751/LeetCode/",target:"_blank",rel:"noopener noreferrer"},D=s("\u7B97\u6CD5\u548C\u6570\u636E\u7ED3\u6784\u4ED3\u5E93"),S=n("p",null,"\u559C\u6B22\u7684\u8BDD\uFF0C\u70B9\u8D5E\u6536\u85CF\uFF01\u{1F525}",-1),A=u(`<blockquote><p>\u5355\u5411\u94FE\u8868\u53EA\u80FD\u4ECE\u5934\u5148\u540E\u67E5\u8BE2\uFF0C\u4F46\u662F\u53CC\u5411\u94FE\u8868\u662F\u53EF\u4EE5\u53CD\u5411\u7684\uFF0C\u63D0\u9AD8\u7684\u6548\u7387</p></blockquote><p><strong>\u4EE3\u7801 \u2013 \u5220\u9664</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DelHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	flag <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token comment">//\u627E\u5230\u8981\u5220\u9664\u7ED3\u70B9\u7684no\uFF0C\u548Ctemp\u7684\u4E0B\u4E00\u4E2A\u7ED3\u70B9\u7684no\u6BD4\u8F83</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span><span class="token comment">//\u8BF4\u660E\u5230\u94FE\u8868\u7684\u6700\u540E</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> id <span class="token punctuation">{</span>
			<span class="token comment">//\u8BF4\u660E\u6211\u4EEC\u627E\u5230\u4E86.</span>
			flag <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> flag <span class="token punctuation">{</span><span class="token comment">//\u627E\u5230, \u5220\u9664</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token comment">//ok</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> temp 
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sorry, \u8981\u5220\u9664\u7684id\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5168\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5168\u4EE3\u7801" aria-hidden="true">#</a> \u5168\u4EE3\u7801</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2Aheronode</span>
<span class="token keyword">type</span> HeroNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	no       <span class="token builtin">int</span>
	name     <span class="token builtin">string</span>
	nickname <span class="token builtin">string</span>

	pre  <span class="token operator">*</span>HeroNode <span class="token comment">//\u8868\u793A\u6307\u5411\u524D\u4E00\u4E2A\u7ED3\u70B9</span>
	next <span class="token operator">*</span>HeroNode <span class="token comment">//\u8868\u793A\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u7ED9\u53CC\u5411\u94FE\u8868\u63D2\u5165\u8282\u70B9 -- \u53CC\u5411\u94FE\u8868</span>
<span class="token comment">// \u987A\u5E8F\u5F88\u91CD\u8981 --</span>
<span class="token keyword">func</span> <span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span> newHeroNode <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u601D\u8DEF</span>
	<span class="token comment">//1. \u627E\u5230\u9002\u5F53\u7684\u8282\u70B9\u4F4D\u7F6E</span>
	<span class="token comment">//2. \u521B\u5EFA\u4E00\u4E2A\u8F85\u52A9\u63A5\u70B9temp</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">var</span> flag <span class="token builtin">bool</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u8BA9\u63D2\u5165\u7ED3\u70B9\u7684no\u548Ctemp\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684no\u8FDB\u884C\u6BD4\u8F83</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u8BF4\u660E\u6700\u672B\u5C3E\uFF0C\u76F4\u63A5\u63D2\u5165\u5230\u5C3E\u90E8</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">&gt;</span> newHeroNode<span class="token punctuation">.</span>no <span class="token punctuation">{</span>
			<span class="token comment">//\u6761\u4EF6\u6210\u7ACB\uFF0C\u8BF4\u660E\u8FD9\u4E2AnewHeroNode\u63D2\u5165\u5230temp\u540E\u9762</span>
			<span class="token keyword">break</span> <span class="token comment">//\u8DF3\u51FAfor\u5FAA\u73AF  \u76F4\u63A5\u63D2\u5165</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> newHeroNode<span class="token punctuation">.</span>no <span class="token punctuation">{</span>
			<span class="token comment">//\u76F8\u7B49\u7684\u8BDD\u6211\u4EEC\u63D0\u9192\u4E0D\u5141\u8BB8\u63D2\u5165\u8FD9\u4E2Aid\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u6709\u4E86</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6709\u76F8\u540C\u7684\u8282\u70B9\uFF0C\u90A3\u4E48\u4E0D\u53EF\u4EE5\u63D2\u5165&quot;</span><span class="token punctuation">)</span>
			flag <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next

	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> flag <span class="token punctuation">{</span>
		<span class="token comment">//\u8868\u793A\u6B64\u65F6\u8FD9\u4E2A\u76F8\u7B49</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BF9\u4E0D\u8D77\uFF0C\u5DF2\u7ECF\u5B58\u5728&quot;</span><span class="token punctuation">,</span> newHeroNode<span class="token punctuation">.</span>no<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		newHeroNode<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
		newHeroNode<span class="token punctuation">.</span>pre <span class="token operator">=</span> temp <span class="token comment">//ok</span>
		<span class="token comment">//\u6B64\u65F6\u5355\u9879\u7ED3\u70B9\u5B9E\u73B0\u4E86</span>
		<span class="token comment">//\u6CE8\u610F\u987A\u5E8F\u5F88\u91CD\u8981</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> newHeroNode <span class="token comment">//ok</span>
		<span class="token punctuation">}</span>

		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newHeroNode
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">//\u663E\u793A\u94FE\u8868</span>
<span class="token comment">//\u4ECD\u7136\u4F7F\u7528\u5355\u9879\u94FE\u8868\u663E\u793A\u65B9\u5F0F</span>
<span class="token keyword">func</span> <span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u6CE8\u610F\uFF1A\u4E00\u5B9A\u8981\u7ED9\u5934\u7ED3\u70B9</span>
	<span class="token comment">//\u5148\u5224\u65AD\u8BE5\u94FE\u8868\u662F\u5426\u4E3A\u4E00\u4E2A\u7A7A\u94FE\u8868</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A7A\u94FE\u8868\u65E0\u6CD5\u663E\u793A&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u904D\u5386</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// if temp.next = nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8282\u70B9\u4FE1\u606F\u5982\u4E0B:&quot;</span><span class="token operator">+</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">,</span>
			temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>name<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span> <span class="token string">&quot;]===&gt;&quot;</span><span class="token punctuation">)</span>

		<span class="token comment">//\u5224\u65AD\u662F\u5426\u5230\u94FE\u8868\u6700\u540E</span>
		<span class="token comment">// if temp.next.next == nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }      !!!!\u62A5\u9519\u65E0\u9650\u5FAA\u73AF</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5C06\u53CC\u5411\u94FE\u8868\u9006\u5E8F\u6253\u5370\u51FA\u6765</span>
<span class="token keyword">func</span> <span class="token function">ListHeroNode2</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u6CE8\u610F\uFF1A\u4E00\u5B9A\u8981\u7ED9\u5934\u7ED3\u70B9</span>
	<span class="token comment">//\u5148\u5224\u65AD\u8BE5\u94FE\u8868\u662F\u5426\u4E3A\u4E00\u4E2A\u7A7A\u94FE\u8868</span>
	temp <span class="token operator">:=</span> head

	<span class="token comment">//\u5224\u65AD\u7A7A\u94FE\u8868</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A7A\u94FE\u8868\u65E0\u6CD5\u663E\u793A&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u8BA9temp\u5B9A\u4F4D\u5230\u53CC\u5411\u94FE\u8868\u7684\u6700\u540E\u8282\u70B9</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next <span class="token comment">//\u5426\u5219\u6307\u5411\u4E0B\u4E00\u4E2A\u7ED3\u70B9</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u6B64\u65F6\u5DF2\u7ECF\u662F\u6700\u540E\u7ED3\u70B9\u4E86</span>
	<span class="token comment">//\u904D\u5386</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53CC\u5411\u94FE\u8868\u53CD\u5411\u6253\u51FA\u8282\u70B9\u4FE1\u606F\u5982\u4E0B:&quot;</span><span class="token operator">+</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">,</span>
			temp<span class="token punctuation">.</span>no<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span> <span class="token string">&quot;]===&gt;&quot;</span><span class="token punctuation">)</span>

		<span class="token comment">//\u5224\u65AD\u662F\u5426\u5230\u4E86\u8868\u5934</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>pre

		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>pre <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">DelHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	flag <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token comment">//\u627E\u5230\u8981\u5220\u9664\u7ED3\u70B9\u7684no\uFF0C\u548Ctemp\u7684\u4E0B\u4E00\u4E2A\u7ED3\u70B9\u7684no\u6BD4\u8F83</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">//\u8BF4\u660E\u5230\u94FE\u8868\u7684\u6700\u540E</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> id <span class="token punctuation">{</span>
			<span class="token comment">//\u8BF4\u660E\u6211\u4EEC\u627E\u5230\u4E86.</span>
			flag <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> flag <span class="token punctuation">{</span> <span class="token comment">//\u627E\u5230, \u5220\u9664</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token comment">//ok</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> temp
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sorry, \u8981\u5220\u9664\u7684id\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u521D\u59CB\u5316 \u521B\u5EFA\u4E00\u4E2A\u5934\u7ED3\u70B9</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u7ED9\u9ED8\u8BA4\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;head = &quot;</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>

	<span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9</span>
	hero1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>       <span class="token number">1</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span>     <span class="token string">&quot;\u5B8B\u6C5F&quot;</span><span class="token punctuation">,</span>
		nickname<span class="token punctuation">:</span> <span class="token string">&quot;\u53CA\u65F6\u96E8&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>       <span class="token number">2</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span>     <span class="token string">&quot;\u5434\u7528&quot;</span><span class="token punctuation">,</span>
		nickname<span class="token punctuation">:</span> <span class="token string">&quot;\u547C\u98CE\u5524\u96E8&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>       <span class="token number">2</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span>     <span class="token string">&quot;\u5434\u75283&quot;</span><span class="token punctuation">,</span>
		nickname<span class="token punctuation">:</span> <span class="token string">&quot;\u547C\u98CE\u5524\u96E83&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hero1 = &quot;</span><span class="token punctuation">,</span> hero1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hero2 = &quot;</span><span class="token punctuation">,</span> hero2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hero3 = &quot;</span><span class="token punctuation">,</span> hero3<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5--------1----------&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">//3. \u52A0\u5165\u6D4B\u8BD5</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> hero2<span class="token punctuation">)</span> <span class="token comment">//\u4F20\u5165\u5934\u7ED3\u70B9\u548C\u65B0\u8282\u70B9</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> hero1<span class="token punctuation">)</span> <span class="token comment">//\u4F20\u5165\u5934\u7ED3\u70B9\u548C\u65B0\u8282\u70B9</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> hero3<span class="token punctuation">)</span> <span class="token comment">//\u4F20\u5165\u5934\u7ED3\u70B9\u548C\u65B0\u8282\u70B9</span>
	<span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>          <span class="token comment">//\u663E\u793A</span>
	<span class="token function">ListHeroNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>         <span class="token comment">//\u663E\u793A</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5--------\u5220\u9664----------&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">//4. \u5220\u9664</span>
	<span class="token function">DelHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token comment">//\u663E\u793A</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\chapter05\\ifelsedemo&gt; go run .\\main.go
head =  &amp;{0   &lt;nil&gt; &lt;nil&gt;}
hero1 =  &amp;{1 \u5B8B\u6C5F \u53CA\u65F6\u96E8 &lt;nil&gt; &lt;nil&gt;}
hero2 =  &amp;{2 \u5434\u7528 \u547C\u98CE\u5524\u96E8 &lt;nil&gt; &lt;nil&gt;}
hero3 =  &amp;{2 \u5434\u75283 \u547C\u98CE\u5524\u96E83 &lt;nil&gt; &lt;nil&gt;}
\u6D4B\u8BD5--------1----------
\u6709\u76F8\u540C\u7684\u8282\u70B9\uFF0C\u90A3\u4E48\u4E0D\u53EF\u4EE5\u63D2\u5165
\u5BF9\u4E0D\u8D77\uFF0C\u5DF2\u7ECF\u5B58\u5728 2
\u8282\u70B9\u4FE1\u606F\u5982\u4E0B:[ 1 \u5B8B\u6C5F \u53CA\u65F6\u96E8 ]===&gt;
\u8282\u70B9\u4FE1\u606F\u5982\u4E0B:[ 2 \u5434\u7528 \u547C\u98CE\u5524\u96E8 ]===&gt;
\u53CC\u5411\u94FE\u8868\u53CD\u5411\u6253\u51FA\u8282\u70B9\u4FE1\u606F\u5982\u4E0B:[ 2 \u5434\u7528 \u547C\u98CE\u5524\u96E8 ]===&gt;
\u53CC\u5411\u94FE\u8868\u53CD\u5411\u6253\u51FA\u8282\u70B9\u4FE1\u606F\u5982\u4E0B:[ 1 \u5B8B\u6C5F \u53CA\u65F6\u96E8 ]===&gt;
\u6D4B\u8BD5--------\u5220\u9664----------
\u8282\u70B9\u4FE1\u606F\u5982\u4E0B:[ 1 \u5B8B\u6C5F \u53CA\u65F6\u96E8 ]===&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go\u8BED\u8A00\u73AF\u5F62\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#go\u8BED\u8A00\u73AF\u5F62\u94FE\u8868" aria-hidden="true">#</a> Go\u8BED\u8A00\u73AF\u5F62\u94FE\u8868</h2><p><strong>\u63D2\u5165</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InsertNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">,</span> newNode <span class="token operator">*</span>CatNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5224\u65AD\u662F\u5426\u4E3A\u7B2C\u4E00</span>
	<span class="token keyword">if</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		head<span class="token punctuation">.</span>no <span class="token operator">=</span> newNode<span class="token punctuation">.</span>no
		head<span class="token punctuation">.</span>name <span class="token operator">=</span> newNode<span class="token punctuation">.</span>name
		<span class="token comment">//\u6CE8\u610F\uFF1A\u4E00\u4E2A\u7ED3\u70B9\u4E5F\u53EF\u4EE5\u5F62\u6210\u73AF\u72B6\u7684</span>
		head<span class="token punctuation">.</span>next <span class="token operator">=</span> head <span class="token comment">//\u5F62\u6210\u4E00\u4E2A\u73AF\u72B6</span>
		<span class="token comment">//\u6CE8\u610F\u4E0D\u53EF\u4EE5\u662F\xB7head.next = newNode,\u56E0\u4E3Ahead\u672C\u8EAB\u6709\u4E00\u4E2A\u7A7A\u95F4</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7F16\u53F7\u4E3A&quot;</span><span class="token punctuation">,</span> head<span class="token punctuation">.</span>no<span class="token punctuation">,</span> <span class="token string">&quot;\u7684\u7ED3\u70B9\u52A0\u5165&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u6B64\u65F6\u4E0D\u662F\u5728\u7B2C\u4E00\u4F4D    --   \u4F7F\u7528\xB7\u4E34\u65F6\u53D8\u91CF\u627E\u5230\u6700\u540E\u7684\u7ED3\u70B9</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//\u904D\u5386\u5230\u5934\u7ED3\u70B9\uFF0C\u8BF4\u660E\u5DF2\u7ECF\u627E\u5230\u4E86</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
	<span class="token comment">//\u52A0\u5165\u5230\u73AF\u72B6\u94FE\u8868\u4E2D</span>
	temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">.</span>next
	newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6253\u5370\u73AF\u5F62\u94FE\u8868</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//\u8F93\u51FA    -- \u9700\u8981\u5934\u7ED3\u70B9</span>
<span class="token keyword">func</span> <span class="token function">show</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u73AF\u5F62\u94FE\u8868\u7684\u60C5\u51B5\u5982\u4E0B:&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u7A7A\u94FE\u8868</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u662F\u4E00\u4E2A\u7A7A\u94FE\u8868&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u8282\u70B9\u7684\u4FE1\u606F\u4E3A = &quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">,</span> <span class="token string">&quot;no = &quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">.</span>no<span class="token punctuation">,</span> <span class="token string">&quot;name=&quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;==&gt;&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//\u8BF4\u660E\u5230\u961F\u5934</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5220\u9664\u73AF\u5F62\u94FE\u8868\u7ED3\u70B9</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//\u73AF\u5F62\u94FE\u8868\u7684\u5220\u9664</span>
<span class="token keyword">func</span> <span class="token function">del</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	helper <span class="token operator">:=</span> head

	<span class="token comment">//\u5982\u679C\u662F\u7A7A\u7ED3\u70B9</span>
	<span class="token keyword">if</span> temp <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u4E00\u4E2A\u7A7A\u7684\u73AF\u5F62\u94FE\u8868\u65E0\u6CD5\u5220\u9664&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u5982\u679C\u662F\u4E00\u4E2A\u7ED3\u70B9</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u5982\u679C\u662F\u4E24\u4E2A\u4EE5\u4E0A\u7684\u7ED3\u70B9</span>
	<span class="token comment">/*\u8BA9helper\u6307\u5411\u73AF\u5F62\u94FE\u8868\u7684\u6700\u540E*/</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//\u627E\u5230\u4E86\u6700\u540E,\u8BF4\u660E\u6BD4\u8F83\u5230\u6700\u540E,\u4F46\u662F\u6700\u540E\u6CA1\u6709\u6BD4\u8F83</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>no <span class="token operator">==</span> id <span class="token punctuation">{</span>
			<span class="token comment">//\u627E\u5230  -- \u53EF\u4EE5\u76F4\u63A5\u5220\u9664</span>
			<span class="token comment">//temp.next == nil</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next        <span class="token comment">//\u79FB\u52A8\u548C\u6BD4\u8F83</span>
		helper <span class="token operator">=</span> helper<span class="token punctuation">.</span>next    <span class="token comment">// \u79FB\u52A8  \u4E00\u65E6\u627E\u5230\u8981\u5220\u9664\u7684\u7ED3\u70B9</span>
		helper<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next <span class="token comment">//\u5220\u9664\u7ED3\u70B9</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u521D\u59CB\u5316\u5934\u7ED3\u70B9\uFF08\u73AF\u5F62\u91CF\u88681)</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//\u521B\u5EFA</span>
	cat1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cat1.next = &quot;</span><span class="token punctuation">,</span> cat1<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
	cat2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;\u738B\u4E94&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat4 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat5 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;\u725B\u516D&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>

	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat1<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat2<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat3<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat4<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat5<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">show</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>             <span class="token comment">//\u8F93\u51FA</span>
	<span class="token comment">//\u5220\u9664\u64CD\u4F5C</span>
	<span class="token keyword">var</span> a <span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u9009\u62E9\u5220\u9664\u7684\u6A21\u5F0F\u548C\u8F93\u51FA\u7684\u5BF9\u8C61&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
	<span class="token function">del</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	<span class="token function">show</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token comment">//\u8F93\u51FA</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5168\u4EE3\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u5168\u4EE3\u7801-1" aria-hidden="true">#</a> \u5168\u4EE3\u7801</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u5B9A\u4E49\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> CatNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	no   <span class="token builtin">int</span> <span class="token comment">//\u5B9A\u4E49\u7F16\u53F7</span>
	name <span class="token builtin">string</span>
	next <span class="token operator">*</span>CatNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">InsertNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">,</span> newNode <span class="token operator">*</span>CatNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5224\u65AD\u662F\u5426\u4E3A\u7B2C\u4E00</span>
	<span class="token keyword">if</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		head<span class="token punctuation">.</span>no <span class="token operator">=</span> newNode<span class="token punctuation">.</span>no
		head<span class="token punctuation">.</span>name <span class="token operator">=</span> newNode<span class="token punctuation">.</span>name
		<span class="token comment">//\u6CE8\u610F\uFF1A\u4E00\u4E2A\u7ED3\u70B9\u4E5F\u53EF\u4EE5\u5F62\u6210\u73AF\u72B6\u7684</span>
		head<span class="token punctuation">.</span>next <span class="token operator">=</span> head <span class="token comment">//\u5F62\u6210\u4E00\u4E2A\u73AF\u72B6</span>
		<span class="token comment">//\u6CE8\u610F\u4E0D\u53EF\u4EE5\u662F\xB7head.next = newNode,\u56E0\u4E3Ahead\u672C\u8EAB\u6709\u4E00\u4E2A\u7A7A\u95F4</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7F16\u53F7\u4E3A&quot;</span><span class="token punctuation">,</span> head<span class="token punctuation">.</span>no<span class="token punctuation">,</span> <span class="token string">&quot;\u7684\u7ED3\u70B9\u52A0\u5165&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u6B64\u65F6\u4E0D\u662F\u5728\u7B2C\u4E00\u4F4D    --   \u4F7F\u7528\xB7\u4E34\u65F6\u53D8\u91CF\u627E\u5230\u6700\u540E\u7684\u7ED3\u70B9</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//\u904D\u5386\u5230\u5934\u7ED3\u70B9\uFF0C\u8BF4\u660E\u5DF2\u7ECF\u627E\u5230\u4E86</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
	<span class="token comment">//\u52A0\u5165\u5230\u73AF\u72B6\u94FE\u8868\u4E2D</span>
	temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">.</span>next
	newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head

<span class="token punctuation">}</span>

<span class="token comment">//\u8F93\u51FA    -- \u9700\u8981\u5934\u7ED3\u70B9</span>
<span class="token keyword">func</span> <span class="token function">show</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u73AF\u5F62\u94FE\u8868\u7684\u60C5\u51B5\u5982\u4E0B:&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u7A7A\u94FE\u8868</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u662F\u4E00\u4E2A\u7A7A\u94FE\u8868&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u8282\u70B9\u7684\u4FE1\u606F\u4E3A = &quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">,</span> <span class="token string">&quot;no = &quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">.</span>no<span class="token punctuation">,</span> <span class="token string">&quot;name=&quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;==&gt;&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//\u8BF4\u660E\u5230\u961F\u5934</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next <span class="token comment">//\u540E\u79FB</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u73AF\u5F62\u94FE\u8868\u7684\u5220\u9664</span>
<span class="token keyword">func</span> <span class="token function">del</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	helper <span class="token operator">:=</span> head

	<span class="token comment">//\u5982\u679C\u662F\u7A7A\u7ED3\u70B9</span>
	<span class="token keyword">if</span> temp <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u4E00\u4E2A\u7A7A\u7684\u73AF\u5F62\u94FE\u8868\u65E0\u6CD5\u5220\u9664&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u5982\u679C\u662F\u4E00\u4E2A\u7ED3\u70B9</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u5982\u679C\u662F\u4E24\u4E2A\u4EE5\u4E0A\u7684\u7ED3\u70B9</span>
	<span class="token comment">/*\u8BA9helper\u6307\u5411\u73AF\u5F62\u94FE\u8868\u7684\u6700\u540E*/</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//\u627E\u5230\u4E86\u6700\u540E,\u8BF4\u660E\u6BD4\u8F83\u5230\u6700\u540E,\u4F46\u662F\u6700\u540E\u6CA1\u6709\u6BD4\u8F83</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>no <span class="token operator">==</span> id <span class="token punctuation">{</span>
			<span class="token comment">//\u627E\u5230  -- \u53EF\u4EE5\u76F4\u63A5\u5220\u9664</span>
			<span class="token comment">//temp.next == nil</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next        <span class="token comment">//\u79FB\u52A8\u548C\u6BD4\u8F83</span>
		helper <span class="token operator">=</span> helper<span class="token punctuation">.</span>next    <span class="token comment">// \u79FB\u52A8  \u4E00\u65E6\u627E\u5230\u8981\u5220\u9664\u7684\u7ED3\u70B9</span>
		helper<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next <span class="token comment">//\u5220\u9664\u7ED3\u70B9</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u521D\u59CB\u5316\u5934\u7ED3\u70B9\uFF08\u73AF\u5F62\u91CF\u88681)</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//\u521B\u5EFA</span>
	cat1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cat1.next = &quot;</span><span class="token punctuation">,</span> cat1<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
	cat2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;\u738B\u4E94&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat4 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat5 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;\u725B\u516D&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>

	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat1<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat2<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat3<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat4<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat5<span class="token punctuation">)</span> <span class="token comment">//\u6DFB\u52A0</span>
	<span class="token function">show</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>             <span class="token comment">//\u8F93\u51FA</span>
	<span class="token comment">//\u5220\u9664\u64CD\u4F5C</span>
	<span class="token keyword">var</span> a <span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u9009\u62E9\u5220\u9664\u7684\u6A21\u5F0F\u548C\u8F93\u51FA\u7684\u5BF9\u8C61&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
	<span class="token function">del</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	<span class="token function">show</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token comment">//\u8F93\u51FA</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="26.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="28.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,18),B=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),V={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},G=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),R=s(")"),T=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),z={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},F=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function O(U,W){const t=e("ExternalLinkIcon"),p=e("RouterLink");return c(),i("div",null,[r,k,n("p",null,[m,n("a",v,[b,a(t)])]),h,n("p",null,[f,n("a",g,[w,a(t)])]),q,y,n("blockquote",null,[n("p",null,[x,n("a",N,[_,a(t)])])]),H,C,n("details",P,[I,n("p",null,[E,n("a",L,[D,a(t)])]),S]),A,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/"},{default:l(()=>[B]),_:1})])]),n("li",null,[n("p",null,[n("a",V,[G,a(t)]),R])]),n("li",null,[n("p",null,[T,n("a",z,[F,a(t)])])])])])}const j=o(d,[["render",O],["__file","27.html.vue"]]);export{j as default};
