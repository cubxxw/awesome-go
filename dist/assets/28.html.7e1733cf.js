import{_ as p,r as e,o as i,c as l,a as n,b as a,w as c,e as s,d as u}from"./app.9b66d8ca.js";const r={},d=n("h1",{id:"\u7EA6\u745F\u592B\u95EE\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EA6\u745F\u592B\u95EE\u9898","aria-hidden":"true"},"#"),s(" \u7EA6\u745F\u592B\u95EE\u9898")],-1),k=n("p",null,"[toc]",-1),v=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),m={href:"https://pkg.go.dev/std",target:"_blank",rel:"noopener noreferrer"},b=s("https://pkg.go.dev/std"),f=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),_=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),h={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},y=s("https://github.com/3293172751/golang-rearn"),g=n("hr",null,null,-1),w=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),N=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),x={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},B=s("http://nsddd.top"),q=n("h2",{id:"\u7EA6\u745F\u592B\u95EE\u9898-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EA6\u745F\u592B\u95EE\u9898-1","aria-hidden":"true"},"#"),s(" \u7EA6\u745F\u592B\u95EE\u9898")],-1),C={class:"custom-container details"},P=n("summary",null,"\u8B66\u544A\u26A0\uFE0F",-1),E=s("\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u76F8\u5173\u79FB\u6B65\u5230"),L={href:"https://github.com/3293172751/LeetCode/",target:"_blank",rel:"noopener noreferrer"},S=s("\u7B97\u6CD5\u548C\u6570\u636E\u7ED3\u6784\u4ED3\u5E93"),A=n("p",null,"\u559C\u6B22\u7684\u8BDD\uFF0C\u70B9\u8D5E\u6536\u85CF\uFF01\u{1F525}",-1),V=u(`<p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//\u7EA6\u745F\u592B\u95EE\u9898</span>

<span class="token comment">// Boy \u5B9A\u4E49\u5C0F\u5B69\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Boy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	no   <span class="token builtin">int</span>
	Next <span class="token operator">*</span>Boy
<span class="token punctuation">}</span>

<span class="token comment">//\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u521B\u5EFA\u5355\u5411\u7684\u73AF\u5F62\u94FE\u8868</span>
<span class="token comment">//num :\u73AF\u5F62\u94FE\u8868\u7684\u5143\u7D20\u4E2A\u6570</span>
<span class="token comment">//*Boy :\u8FD4\u56DE\u8BE5\u73AF\u5F62\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u5C0F\u5B69\u7684\u6307\u9488</span>

<span class="token keyword">func</span> <span class="token function">CreateCircle</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Boy <span class="token punctuation">{</span>
	<span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u7A7A\u8282\u70B9</span>
	first <span class="token operator">:=</span> <span class="token operator">&amp;</span>Boy<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//\u8FD9\u4E2A\u6307\u9488\u6307\u5411\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
	curBoy <span class="token operator">:=</span> <span class="token operator">&amp;</span>Boy<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u8FD9\u4E2A\u6307\u9488\u6307\u5411</span>

	<span class="token comment">//\u5143\u7D20\u4E2A\u6570\u5224\u65AD</span>
	<span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5143\u7D20\u4E2A\u6570\u4E0D\u80FD\u5C0F\u4E8E1&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> first
	<span class="token punctuation">}</span>

	<span class="token comment">//\u5FAA\u73AF\u7684\u6784\u5EFA\u8FD9\u4E2A\u94FE\u8868</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		boy <span class="token operator">:=</span> <span class="token operator">&amp;</span>Boy<span class="token punctuation">{</span>
			no<span class="token punctuation">:</span> i<span class="token punctuation">,</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//\u7B2C\u4E00\u4E2A\u5C0F\u5B69\u6BD4\u8F83\u7279\u6B8A</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
			first <span class="token operator">=</span> boy  <span class="token comment">//\u6307\u9488\u5C31\u4E0D\u80FD\u52A8\u4E86\uFF0C\u6240\u4EE5\u597D\u9700\u8981\u4E00\u4E2A\u8F85\u52A9\u6307\u9488 curBoy</span>
			curBoy <span class="token operator">=</span> boy <span class="token comment">//\u5E2E\u5FD9\u7684\u6307\u9488 curBoy</span>
			<span class="token comment">//\u5F62\u6210\u95ED\u73AF</span>
			curBoy<span class="token punctuation">.</span>Next <span class="token operator">=</span> first
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u5F53\u524D\u662F1	\u65B0\u76842</span>
			curBoy<span class="token punctuation">.</span>Next <span class="token operator">=</span> boy
			<span class="token comment">//curBoy\u5411\u540E\u9762\u79FB\u52A81\u4F4D</span>
			curBoy <span class="token operator">=</span> boy
			<span class="token comment">//\u6700\u540E\u8FD9\u4E2A\u6307\u5411\u5F00\u5934\u5F62\u6210\u73AF</span>
			curBoy<span class="token punctuation">.</span>Next <span class="token operator">=</span> first
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> first
<span class="token punctuation">}</span>

<span class="token comment">// ShowCircle \u663E\u793A\u73AF\u5F62\u5355\u5411\u94FE\u8868</span>
<span class="token keyword">func</span> <span class="token function">ShowCircle</span><span class="token punctuation">(</span>first <span class="token operator">*</span>Boy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u7A7A\u94FE\u8868\u5224\u65AD</span>
	<span class="token keyword">if</span> first <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u94FE\u8868\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//first\u662F\u4E00\u4E2A\u6307\u9488\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2A\u6307\u9488</span>
	curBoy <span class="token operator">:=</span> first
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u5B69\u7684id=%d&quot;</span><span class="token punctuation">,</span> curBoy<span class="token punctuation">.</span>no<span class="token punctuation">)</span>
		<span class="token comment">//\u5F53\u5230\u8FBE\u6700\u540E\u4E00\u4E2A\u65F6\u5019\uFF0C\u9000\u51FA</span>
		<span class="token keyword">if</span> curBoy<span class="token punctuation">.</span>Next <span class="token operator">==</span> first <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		curBoy <span class="token operator">=</span> curBoy<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// first \u5934\u8282\u70B9</span>
<span class="token comment">// startNo \u5F00\u59CB\u6570\u6570\u7684\u4F4D\u7F6E</span>
<span class="token comment">// stepNum \u6BCF\u6B21\u6570\u51E0\u4E2A,\u6B65\u957F</span>

<span class="token keyword">func</span> <span class="token function">PlayGame</span><span class="token punctuation">(</span>first <span class="token operator">*</span>Boy<span class="token punctuation">,</span> startNo <span class="token builtin">int</span><span class="token punctuation">,</span> stepNum <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//1.\u7A7A\u94FE\u8868\u5224\u65AD</span>
	<span class="token keyword">if</span> first<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A7A\u7684\u94FE\u8868\uFF0C\u6CA1\u6709\u5C0F\u5B69&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//2.\u9700\u8981\u5B9A\u4E49\u8F85\u52A9\u6307\u9488\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5220\u9664\u5143\u7D20</span>
	tail <span class="token operator">:=</span> first <span class="token comment">//tail \u5C3E\u5DF4\uFF0C\u4E00\u5F00\u59CB\u4ED6\u4FE9\u5B9E\u5728\u4E00\u8D77\u7684</span>
	<span class="token comment">//3.\u6211\u4EEC\u79FB\u52A8tail\uFF0C\u8BA9tail\u6307\u5411first\u7684\u5C3E\u5DF4</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> tail<span class="token punctuation">.</span>Next <span class="token operator">==</span> first <span class="token punctuation">{</span>
			<span class="token keyword">break</span> <span class="token comment">//\u6B64\u65F6\u79FB\u52A8\u5230\u5C3E\u5DF4\u4E86</span>
		<span class="token punctuation">}</span>
		tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>

	<span class="token comment">//4.\u8BA9first\u79FB\u52A8\u5230startNo[\u540E\u9762\u6211\u4EEC\u5220\u9664\u5143\u7D20\uFF0C\u5C31\u4EE5first\u4E3A\u51C6]</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> startNo<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u8FD9\u4E24\u4E2A\u6807\u8BB0\u90FD\u5F80\u4E0B\u8D70</span>
		first <span class="token operator">=</span> first<span class="token punctuation">.</span>Next
		tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>

	<span class="token comment">//5.\u5F00\u59CB\u6570stepNum\uFF0C\u7136\u540E\u5C31\u5220\u9664first\u5F53\u524D\u6240\u5728\u7684\u5143\u7D20</span>
	<span class="token comment">//\u5220\u9664\u4E00\u4E2A\u5143\u7D20\u7684\u64CD\u4F5C\u662F\u8FD9\u6837\u7684</span>
	<span class="token comment">//a:\u5148\u8BA9first\u5411\u4E0B\u8D70\u4E00\u6B65\uFF0C\u628A\u8FD9\u4E2A\u9700\u8981\u5220\u9664\u7684\u5143\u7D20\u7A7A\u51FA\u6765</span>
	<span class="token comment">// first = first.Next</span>
	<span class="token comment">//b:\u8BA9\u5C3E\u90E8tail\u7684Next\u6307\u5411\u65B0\u7684first,\u8DF3\u8FC7\u7A7A\u51FA\u6765\u7684\u5143\u7D20\uFF0C\u8FD9\u6837\u5C31\u628A\u7A7A\u51FA\u6765\u7684\u5143\u7D20\u5220\u9664\u4E86</span>
	<span class="token comment">//tail = first</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u8FD9\u4E24\u4E2A\u6807\u8BB0\u540C\u65F6\u6309\u7167\u6B65\u957F\u5F80\u4E0B\u8D70\uFF0C\u4E00\u6B65\u4E00\u6B65\u8D70\uFF0C\u603B\u79FB\u52A8stepNum-1\u7684</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> stepNum<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			first <span class="token operator">=</span> first<span class="token punctuation">.</span>Next
			tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7F16\u53F7%d\u7684\u5143\u7D20\u88AB\u5254\u9664--&gt;&quot;</span><span class="token punctuation">,</span> first<span class="token punctuation">.</span>no<span class="token punctuation">)</span>
		<span class="token comment">//\u6267\u884C\u5220\u9664 a\uFF0Cb\u4E24\u6B65</span>
		first <span class="token operator">=</span> first<span class="token punctuation">.</span>Next
		tail<span class="token punctuation">.</span>Next <span class="token operator">=</span> first

		<span class="token comment">//\u5F53\u53EA\u5269\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684\u65F6\u5019\u5C31\u9000\u51FA</span>
		<span class="token comment">//\u5373 \u4E24\u4E2A\u6807\u8BB0\u91CD\u5408\u4E86\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5728\u524D\u9762\u8BA9\u4E24\u4E2A\u6807\u8BB0\u5206\u5F00\u4E86</span>
		<span class="token keyword">if</span> tail <span class="token operator">==</span> first <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6700\u540E\u5254\u9664\u7684\u5143\u7D20\u662F%d&quot;</span><span class="token punctuation">,</span> first<span class="token punctuation">.</span>no<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	first <span class="token operator">:=</span> <span class="token function">CreateCircle</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
	<span class="token function">ShowCircle</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u663E\u793A\u7ED3\u675F&quot;</span><span class="token punctuation">)</span>

	<span class="token function">PlayGame</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="27.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="29.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,4),D=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),G={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},I=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),R=s(")"),z=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),F={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},T=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function W(Y,j){const t=e("ExternalLinkIcon"),o=e("RouterLink");return i(),l("div",null,[d,k,n("p",null,[v,n("a",m,[b,a(t)])]),f,n("p",null,[_,n("a",h,[y,a(t)])]),g,w,n("blockquote",null,[n("p",null,[N,n("a",x,[B,a(t)])])]),q,n("details",C,[P,n("p",null,[E,n("a",L,[S,a(t)])]),A]),V,n("ul",null,[n("li",null,[n("p",null,[a(o,{to:"/"},{default:c(()=>[D]),_:1})])]),n("li",null,[n("p",null,[n("a",G,[I,a(t)]),R])]),n("li",null,[n("p",null,[z,n("a",F,[T,a(t)])])])])])}const J=p(r,[["render",W],["__file","28.html.vue"]]);export{J as default};
