import{_ as c,r as p,o as l,c as i,a as n,b as a,w as o,e as s,d as u}from"./app.64dac66d.js";const r={},k={href:"https://github.com/3293172751",target:"_blank",rel:"noopener noreferrer"},d=s("author"),m=n("h1",{id:"\u7B2C6\u8282-\u89E3\u6790\u6A21\u5757\u7684\u5B9E\u73B0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C6\u8282-\u89E3\u6790\u6A21\u5757\u7684\u5B9E\u73B0","aria-hidden":"true"},"#"),s(" \u7B2C6\u8282 \u89E3\u6790\u6A21\u5757\u7684\u5B9E\u73B0")],-1),v=s("\u56DE\u5230\u76EE\u5F55"),b=s("\u4E0A\u4E00\u8282"),h=s("\u2764\uFE0F\u{1F495}\u{1F495}Go\u8BED\u8A00\u9AD8\u7EA7\u7BC7\u7AE0,\u5728\u6B64\u4E4B\u524D\u5EFA\u8BAE\u60A8\u5148\u4E86\u89E3\u57FA\u7840\u548C\u8FDB\u9636\u7BC7\u3002Myblog:"),_={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},f=s("http://nsddd.top"),g={id:"go\u8BED\u8A00\u57FA\u7840\u7BC7",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u57FA\u7840\u7BC7","aria-hidden":"true"},"#",-1),y=s(),w={href:"https://github.com/3293172751/Block_Chain/blob/master/TOC.md",target:"_blank",rel:"noopener noreferrer"},S=s("Go\u8BED\u8A00\u57FA\u7840\u7BC7"),T={id:"go\u8BED\u8A00100\u7BC7\u8FDB\u9636",tabindex:"-1"},P=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00100\u7BC7\u8FDB\u9636","aria-hidden":"true"},"#",-1),x=s(),C={href:"https://github.com/3293172751/Block_Chain/blob/master/Gomd_super/README.md",target:"_blank",rel:"noopener noreferrer"},E=s("Go\u8BED\u8A00100\u7BC7\u8FDB\u9636"),L=n("hr",null,null,-1),B=n("p",null,"[TOC]",-1),G=n("h3",{id:"\u89E3\u6790\u6A21\u5757\u7684\u529F\u80FD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u89E3\u6790\u6A21\u5757\u7684\u529F\u80FD","aria-hidden":"true"},"#"),s(" \u89E3\u6790\u6A21\u5757\u7684\u529F\u80FD")],-1),R=n("li",null,"\u4ECERead Channel\u4E2D\u8BFB\u53D6\u6BCF\u884C\u65E5\u5FD7\u6570\u636E",-1),A=s("\u6B63\u5219\u8868\u8FBE\u5F0F\u63D0\u53D6\u6240\u9700\u8981\u7684\u76D1\u63A7\u6570\u636E\uFF08path\uFF0Cstatus,method\u7B49\uFF09 "),I={href:"https://github.com/3293172751/Block_Chain/blob/master/Gomd_super/zhenze.md",target:"_blank",rel:"noopener noreferrer"},M=s("\u6B63\u5219\u8868\u8FBE\u5F0F\u6559\u7A0B"),N=n("li",null,"\u5199\u5165\u5230write channel",-1),F=u(`<h3 id="\u89E3\u6790\u6A21\u5757\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u6A21\u5757\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u89E3\u6790\u6A21\u5757\u7684\u5B9E\u73B0</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LogProcess<span class="token punctuation">)</span> <span class="token function">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u89E3\u6790\u6A21\u5757</span>
	<span class="token comment">/* \u8F93\u5165\u6570\u636E\uFF1A
	[07/July/2022:18:01:41 +0000] http &quot;GET /foo?query=t HTTP/1.0&quot; 200 2133 &quot;-&quot;
	&quot;KeepAliveClient&quot; &quot;-&quot; 1.005 1.854
	*/</span>
	<span class="token comment">//\u5904\u7406\u6570\u636E--\u5C06data\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u4FEE\u6539\u4E3A\u5176\u5927\u5199\u683C\u5F0F\u3002\u5BF9\u4E8E\u975EASCII\u5B57\u7B26\uFF0C\u5B83\u7684\u5927\u5199\u683C\u5F0F\u9700\u8981\u67E5\u8868\u8F6C\u6362</span>
	r <span class="token operator">:=</span> regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span><span class="token string">\`\\[([^\\]]+)\\]\\s+(.*?)\\s+\\&quot;(.*?)\\&quot;\\s+(\\d{3})\\s+(\\d+)\\s+\\&quot;([^&quot;]+
	)\\&quot;\\s+\\&quot;(.*?)\\&quot;\\s+\\&quot;([\\d\\.-]+)\\&quot;\\s+([\\d\\.-]+)\\s+([\\d\\.-]+)\`</span><span class="token punctuation">)</span>

	loc<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">LoadLocation</span><span class="token punctuation">(</span><span class="token string">&quot;Asia/Shanghai&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u6211\u4EEC\u7528\u7684\u662F\u4E0A\u6D77\u65F6\u533A</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>                                <span class="token comment">//\u53EF\u4EE5\u5FFD\u7565err\u4E00\u822C\u4E0D\u4F1A\u6709\u9519</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;time error:%s&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> l<span class="token punctuation">.</span>rc <span class="token punctuation">{</span>
		ret <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">FindStringSubmatch</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u5339\u914D\u6570\u636E\u5185\u5BB9\uFF0C\u6B63\u5219\u62EC\u53F7\u5185\u5BB9\u5339\u914D\u5230\u8FD4\u56DE\u5230</span>
		<span class="token comment">//fmt.Println(ret)</span>
		<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">14</span> <span class="token punctuation">{</span> <span class="token comment">//\u6B63\u5219\u8868\u8FBE\u5F0F\u6709\u5341\u4E09\u4E2A\u62EC\u53F7</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;FindStringSubmatch fail:&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">continue</span> <span class="token comment">//\u7EE7\u7EED\u4E0B\u4E00\u6B21\u5339\u914D</span>
		<span class="token punctuation">}</span>

		message <span class="token operator">:=</span> <span class="token operator">&amp;</span>Message<span class="token punctuation">{</span><span class="token punctuation">}</span>
		t<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">ParseInLocation</span><span class="token punctuation">(</span><span class="token string">&quot;09/Jan/2006:15:04:05 +0000&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> loc<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;parseninlocation error:%s&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		message<span class="token punctuation">.</span>TimeLocal <span class="token operator">=</span> t
		byteSent<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>ret<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u5C06string\u7C7B\u578B\u8F6C\u5316\u4E3Aint</span>
		<span class="token comment">// if err != nil {</span>
		<span class="token comment">// 	panic(fmt.Sprintf(&quot;parseninlocation error:%s&quot;, err.Error(), ret[4]))</span>
		<span class="token comment">// }</span>
		message<span class="token punctuation">.</span>BytesSent <span class="token operator">=</span> byteSent

		<span class="token comment">//\u7B2C\u516D\u4E2A\u62EC\u53F7\u5339\u914D\u7684\u662FGET /foo?query=t HTTP/1.0</span>
		reqSli <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>ret<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u6309\u7167\u7A7A\u683C\u5207\u5272\u7B2C\u516D\u4E2A\u5B57\u6BB5</span>
		<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>reqSli<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">3</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;strings.split fail&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u957F\u5EA6\u4E0D\u662F3\u8BF4\u660E\u62A5\u9519\u4E86</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>

		message<span class="token punctuation">.</span>Method <span class="token operator">=</span> reqSli<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

		u<span class="token punctuation">,</span> err <span class="token operator">:=</span> url<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>reqSli<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;url parse fail&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		message<span class="token punctuation">.</span>Path <span class="token operator">=</span> u<span class="token punctuation">.</span>Path <span class="token comment">//\u6B64\u65F6\u53EF\u4EE5\u76F4\u63A5\u4ECE\u7ED3\u6784\u4F53\u4E2D\u53D6\u5230path</span>

		message<span class="token punctuation">.</span>Scheme <span class="token operator">=</span> ret<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token comment">//HTTP/1.0\u534F\u8BAE\u53EF\u4EE5\u76F4\u63A5\u8D4B\u503C\u7ED9mess</span>
		message<span class="token punctuation">.</span>Status <span class="token operator">=</span> ret<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span>

		<span class="token comment">//UpstreamTime, RequestTime    float64   //\u76D1\u63A7\u6570\u636E  1.005 1.854\u5728\u5341\u4E8C\u5230\u5341\u4E09</span>
		upstreamTime<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span>ret<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token comment">//\u8F6C\u5316\u4E3Afloat64</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">,</span> ret<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		requestTime<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span>ret<span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token comment">//\u8F6C\u5316\u4E3Afloat64</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">,</span> ret<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		message<span class="token punctuation">.</span>UpstreamTime <span class="token operator">=</span> upstreamTime
		message<span class="token punctuation">.</span>RequestTime <span class="token operator">=</span> requestTime

		l<span class="token punctuation">.</span>wc <span class="token operator">&lt;-</span> message <span class="token comment">//data\u662Fbyte\u7C7B\u578B\uFF0C\u9700\u8981\u8F6C\u5316\u4E3Astring\u7C7B\u578B</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2>`,3),V=s("\u56DE\u5230\u76EE\u5F55"),H=s("\u4E0A\u4E00\u8282"),z=s("\u4E0B\u4E00\u8282"),D=n("hr",null,null,-1),J={href:"https://github.com/3293172751/Block_Chain/blob/master/Git/git-contributor.md",target:"_blank",rel:"noopener noreferrer"},O=s("\u53C2\u4E0E\u8D21\u732E\u2764\uFE0F\u{1F495}\u{1F495}");function U(K,j){const t=p("ExternalLinkIcon"),e=p("RouterLink");return l(),i("div",null,[n("ul",null,[n("li",null,[n("a",k,[d,a(t)])])]),m,n("ul",null,[n("li",null,[a(e,{to:"/go-advancend/"},{default:o(()=>[v]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/5.html"},{default:o(()=>[b]),_:1})])]),n("blockquote",null,[n("p",null,[h,n("a",_,[f,a(t)])]),n("h3",g,[q,y,n("strong",null,[n("a",w,[S,a(t)])])]),n("h3",T,[P,x,n("strong",null,[n("a",C,[E,a(t)])])])]),L,B,G,n("ol",null,[R,n("li",null,[A,n("ul",null,[n("li",null,[n("a",I,[M,a(t)])])])]),N]),F,n("ul",null,[n("li",null,[a(e,{to:"/go-advancend/"},{default:o(()=>[V]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/5.html"},{default:o(()=>[H]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/7.html"},{default:o(()=>[z]),_:1})])]),D,n("ul",null,[n("li",null,[n("a",J,[O,a(t)])])])])}const W=c(r,[["render",U],["__file","6.html.vue"]]);export{W as default};
