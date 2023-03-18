import{_ as l,r as o,o as p,c as u,a as n,b as a,w as i,e as s,d as c}from"./app.bdc458db.js";const d={},r={href:"https://github.com/3293172751",target:"_blank",rel:"noopener noreferrer"},v=s("author"),m=n("h1",{id:"\u7B2C15\u8282-cobra",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C15\u8282-cobra","aria-hidden":"true"},"#"),s(" \u7B2C15\u8282 Cobra")],-1),k=s("\u56DE\u5230\u76EE\u5F55"),b=s("\u4E0A\u4E00\u8282"),g=s("\u2764\uFE0F\u{1F495}\u{1F495}Go\u8BED\u8A00\u9AD8\u7EA7\u7BC7\u7AE0,\u5728\u6B64\u4E4B\u524D\u5EFA\u8BAE\u60A8\u5148\u4E86\u89E3\u57FA\u7840\u548C\u8FDB\u9636\u7BC7\u3002Myblog:"),h={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},f=s("http://nsddd.top"),q={id:"go\u8BED\u8A00\u57FA\u7840\u7BC7",tabindex:"-1"},T=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u57FA\u7840\u7BC7","aria-hidden":"true"},"#",-1),w=s(),I={href:"https://github.com/3293172751/Block_Chain/blob/master/TOC.md",target:"_blank",rel:"noopener noreferrer"},E=s("Go\u8BED\u8A00\u57FA\u7840\u7BC7"),S={id:"go\u8BED\u8A00100\u7BC7\u8FDB\u9636",tabindex:"-1"},O=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00100\u7BC7\u8FDB\u9636","aria-hidden":"true"},"#",-1),C=s(),R={href:"https://github.com/3293172751/Block_Chain/blob/master/Gomd_super/README.md",target:"_blank",rel:"noopener noreferrer"},x=s("Go\u8BED\u8A00100\u7BC7\u8FDB\u9636"),A=c(`<hr><p>[TOC]</p><h2 id="cobra-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#cobra-\u7B80\u4ECB" aria-hidden="true">#</a> cobra \u7B80\u4ECB</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>cobra \u662F\u4E00\u4E2A\u7528\u4E8E\u751F\u6210\u547D\u4EE4\u884C\u5DE5\u5177\u7684\u6846\u67B6 \uFF08\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\uFF09</li><li>\u975E\u5E38\u7B80\u5355\uFF0C\u6613\u7528</li><li>\u4F7F\u7528\u5B83\u7684\u9879\u76EE\u5F88\u591A \uFF08kubernetes\u3001etcd\u3001hugo\u3001docker\u2026\u2026)</li></ul><p><strong>\u5F00\u6E90\u5730\u5740\uFF1Ahttps://github.com/spf13/cobra</strong></p></div><h2 id="cobra-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#cobra-\u5B89\u88C5" aria-hidden="true">#</a> Cobra \u5B89\u88C5</h2><ul><li><code>-u</code> \uFF1Aupdate</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go get -u github.com/spf13/cobra@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u4E2D\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u5BFC\u5165" aria-hidden="true">#</a> \u9879\u76EE\u4E2D\u5BFC\u5165</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> <span class="token string">&quot;github.com/spf13/cobra&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cobra-cli" tabindex="-1"><a class="header-anchor" href="#cobra-cli" aria-hidden="true">#</a> cobra-cli</h2><p><code>cobra-cli</code>\u662F\u4E00\u4E2A\u547D\u4EE4\u884C\u7A0B\u5E8F\uFF0C\u7528\u4E8E\u751F\u6210 Cobra \u5E94\u7528\u7A0B\u5E8F\u548C\u547D\u4EE4\u6587\u4EF6\u3002\u5B83\u5C06\u5F15\u5BFC\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u811A\u624B\u67B6\u4EE5\u5FEB\u901F\u5F00\u53D1\u57FA\u4E8E Cobra \u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u8FD9\u662F\u5C06 Cobra \u5408\u5E76\u5230\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u6700\u7B80\u5355\u65B9\u6CD5\u3002</p><p>\u5B83\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C\u6765\u5B89\u88C5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> install github<span class="token punctuation">.</span>com<span class="token operator">/</span>spf13<span class="token operator">/</span>cobra<span class="token operator">-</span>cli@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cobra-\u9879\u76EE\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#cobra-\u9879\u76EE\u521B\u5EFA" aria-hidden="true">#</a> cobra \u9879\u76EE\u521B\u5EFA</h2><p>\u5EFA\u8BAE\u4F7F\u7528Go Module \u6A21\u5F0F\uFF0C\u9996\u5148\uFF0C\u521B\u5EFA\u4E00\u4E2AGo Module\u9879\u76EE\uFF0C\u540D\u79F0\u91C7\u7528 <code>clid</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>mkdir clid<span class="token punctuation">;</span> cd clid 
<span class="token keyword">go</span> mod init clid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4E00\u822C\u4F7F\u7528\u4E0A\u9762\u7684\u65B9\u6CD5\u6709\u70B9\u9EBB\u70E6\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5E2E\u52A9\u4F60\u751F\u6210\u5F00\u6E90\u534F\u8BAE\u548C\u4E00\u4E9B\u4E1C\u897F\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cobra init clid  <span class="token parameter variable">-a</span> xiongxinwei <span class="token parameter variable">-l</span> MIT 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),y={class:"custom-container warning"},N=n("p",{class:"custom-container-title"},"\u{1F4DC} \u5BF9\u4E0A\u9762\u7684\u89E3\u91CA",-1),_=s("\u9ED8\u8BA4\u4F7F\u7528\u7684 "),L={href:"https://github.com/c-ub/cub/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer"},D=s("Apache License 2.0 "),P=s("\xA9 \u534F\u8BAE"),H=n("li",null,[s("\u53EF\u4EE5\u6307\u5B9A\u4F5C\u8005 "),n("code",null,"-a")],-1),F=n("li",null,[s("\u53EF\u4EE5\u6307\u5B9A\u534F\u8BAE "),n("code",null,"-l"),s(" (MIT / Apache)")],-1),U=c(`<h2 id="\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a> \u7F16\u8BD1</h2><p>\u6211\u4EEC\u521B\u5EFA\u5B8C\u4E4B\u540E\u662F\u53EF\u4EE5\u76F4\u63A5\u7528 <code>go build</code> \u7F16\u8BD1\u9879\u76EE\u7684\uFF1A</p><details class="custom-container details"><summary>\u7F16\u8BD1\u4FE1\u606F\u5C55\u5F00</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS D:clid<span class="token operator">&gt;</span> go build
PS D:clid<span class="token operator">&gt;</span> <span class="token function">ls</span>

    Directory: D:clid

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:32                cmd
-a---          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:49        <span class="token number">4336640</span> clid.exe
-a---          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:04            <span class="token number">177</span> go.mod
-a---          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:04            <span class="token number">896</span> go.sum
-a---          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:32          <span class="token number">11358</span> LICENSE
-a---          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:49            <span class="token number">622</span> main.go

PS D:clid<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>clid.exe
A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:

Cobra is a CLI library <span class="token keyword">for</span> Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="main-go" tabindex="-1"><a class="header-anchor" href="#main-go" aria-hidden="true">#</a> main.go</h3><p>\u6211\u4EEC\u89C2\u5BDF<code>main.go</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
Copyright \xA9 2022 xiongxinwei

Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;go-advancend-code/cobra/cmd&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5F88\u7B80\u5355\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C31\u53EA\u6709 <code>cmd.Execute()</code></p><p><code>Execute</code>\u5C06\u6240\u6709\u5B50\u547D\u4EE4\u6DFB\u52A0\u5230\u6839\u547D\u4EE4\u5E76\u9002\u5F53\u8BBE\u7F6E\u6807\u5FD7\u3002\u5B83\u7531<code>main.main()</code>\u8C03\u7528\u3002\u5B83\u53EA\u9700\u8981\u5728<code>rootCmd</code>\u4E0A\u53D1\u751F\u4E00\u6B21\u3002</p></blockquote><p><em>\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u53BB\u770B <code>root.go</code>\u6587\u4EF6\u4E86</em></p><h3 id="root-go" tabindex="-1"><a class="header-anchor" href="#root-go" aria-hidden="true">#</a> root.go</h3><p><strong><code>cmd/root.go</code> \u76EE\u5F55\uFF1A</strong></p><p>\u8FD9\u4E2A\u76EE\u5F55\u662F\u4F1A\u5F71\u54CD\u5230\u9879\u76EE\u7684\u534F\u8BAE\u7684~</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
Copyright \xA9 2022 xiongxinwei

Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>



<span class="token comment">// rootCmd represents the base command when called without any subcommands</span>
<span class="token keyword">var</span> rootCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;cobra&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;A brief description of your application&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span> 
    <span class="token string">\`A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.\`</span><span class="token punctuation">,</span>
	<span class="token comment">// Uncomment the following line if your bare application</span>
	<span class="token comment">// has an action associated with it:</span>
	<span class="token comment">// Run: func(cmd *cobra.Command, args []string) { },</span>
<span class="token punctuation">}</span>

<span class="token comment">// Execute adds all child commands to the root command and sets flags appropriately.</span>
<span class="token comment">// This is called by main.main(). It only needs to happen once to the rootCmd.</span>
<span class="token keyword">func</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> rootCmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Here you will define your flags and configuration settings.</span>
	<span class="token comment">// Cobra supports persistent flags, which, if defined here,</span>
	<span class="token comment">// will be global for your application.</span>

	<span class="token comment">// rootCmd.PersistentFlags().StringVar(&amp;cfgFile, &quot;config&quot;, &quot;&quot;, &quot;config file (default is $HOME/.cobra.yaml)&quot;)</span>

	<span class="token comment">// Cobra also supports local flags, which will only run</span>
	<span class="token comment">// when this action is called directly.</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BoolP</span><span class="token punctuation">(</span><span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;t&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Help message for toggle&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u4E0A\u9762\u6709 <code>run</code> \u3001<code>short</code>\u3001<code>Long</code></p><p>\u662F\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4FEE\u6539\u8FD9\u4E9B\u4FE1\u606F\u6765\u8C03\u6574\u8F93\u51FA\u4FE1\u606F</p></div><p>\u4FEE\u6539 <code>long</code> \uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> rootCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;cobra&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;A brief description of your application&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span>  <span class="token string">\`\u4E00\u4E2A\u5E2E\u52A9\u4FE1\u606F\`</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS D:clid<span class="token operator">&gt;</span> go run .<span class="token punctuation">\\</span>main.go
\u4E00\u4E2A\u5E2E\u52A9\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E3A\u547D\u4EE4\u52A0\u4E0A\u4E00\u4E2A\u5B50\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u547D\u4EE4\u52A0\u4E0A\u4E00\u4E2A\u5B50\u547D\u4EE4" aria-hidden="true">#</a> \u4E3A\u547D\u4EE4\u52A0\u4E0A\u4E00\u4E2A\u5B50\u547D\u4EE4</h2><p><strong>\u6DFB\u52A0\u4E00\u4E2A\u540D\u53EB <code>test</code> \u7684\u5B50\u547D\u4EE4</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cobra add test -a xiongxinwei -l MIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6548\u679C</strong> \u53EF\u4EE5\u770B\u51FA\u6765 <code>cmd</code>\u76EE\u5F55\u4E0B\u591A\u4E86\u4E00\u4E2A <code>test.go</code> \uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS D:clid<span class="token operator">&gt;</span> <span class="token builtin class-name">pwd</span>

Path
----
D:clid

PS D:clid<span class="token operator">&gt;</span> <span class="token function">ls</span> cmd

    Directory: D:clid<span class="token punctuation">\\</span>cmd

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:52           <span class="token number">1973</span> root.go

PS D:clid<span class="token operator">&gt;</span> cobra <span class="token function">add</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">test</span> created at D:clid
PS D:clid<span class="token operator">&gt;</span> <span class="token function">ls</span> cmd       

    Directory: D:clid<span class="token punctuation">\\</span>cmd

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:52           <span class="token number">1973</span> root.go
-a---          <span class="token number">2022</span>/11/15     <span class="token number">9</span>:58           <span class="token number">1064</span> test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4FEE\u6539\u57FA\u672C\u4FE1\u606F\u8FD0\u884C\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// testCmd represents the test command</span>
<span class="token keyword">var</span> testCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;\u6D4B\u8BD5use&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;\u6D4B\u8BD5short&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span>  <span class="token string">\`\u6D4B\u8BD5long\u4FE1\u606F\`</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5run&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS D:clid<span class="token operator">&gt;</span> go run .<span class="token punctuation">\\</span>main.go
\u4E00\u4E2A\u5E2E\u52A9\u4FE1\u606F

Usage:
  cobra <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  completion  Generate the autocompletion script <span class="token keyword">for</span> the specified shell
  <span class="token builtin class-name">help</span>        Help about any <span class="token builtin class-name">command</span>
  \u6D4B\u8BD5use       \u6D4B\u8BD5short

Flags:
  -h, <span class="token parameter variable">--help</span>     <span class="token builtin class-name">help</span> <span class="token keyword">for</span> cobra
  -t, <span class="token parameter variable">--toggle</span>   Help message <span class="token keyword">for</span> toggle

Use <span class="token string">&quot;cobra [command] --help&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C1D\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>clid.exe \u6D4B\u8BD5use
\u6D4B\u8BD5run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u4E00\u6B21\u5C1D\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS D:clid<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>clid.exe \u6D4B\u8BD5use <span class="token parameter variable">-h</span>
\u6D4B\u8BD5long\u4FE1\u606F

Usage:
  cobra \u6D4B\u8BD5use <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> \u6D4B\u8BD5use
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">so</p><p>\u6240\u4EE5\u6211\u4EEC\u7A81\u7136\u660E\u767D\u4E86\uFF0C\u539F\u6765\u8FD9\u4E2A\u547D\u4EE4\u4E3B\u8981\u662F\u57FA\u4E8E \u4E3B\u547D\u4EE4 <code>root.go</code> \u4E0B\u9762\u7684\uFF0C<code>root.go</code> \u5C31\u662F <code>cobra</code></p><p>\u6211\u4EEC\u5C31\u53EF\u4EE5\u57FA\u4E8E\u6B64\u8BBE\u7F6E\u4E00\u7CFB\u5217\u5B50\u547D\u4EE4</p></div><h3 id="\u7ED1\u5B9A\u7236\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u7236\u547D\u4EE4" aria-hidden="true">#</a> \u7ED1\u5B9A\u7236\u547D\u4EE4</h3><p>\u6BCF\u4E2A\u5B50\u547D\u4EE4\u90FD\u6709\u4E00\u4E2A <code>init</code> \u51FD\u6570\uFF0C\u5C31\u662F\u7528\u6765\u7ED1\u5B9A\u7684~</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>testCmd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u521B\u5EFA\u4E00\u4E2A <code>version</code> \u547D\u4EE4</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cobra add version -a xiongxinwei -l MIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u4FEE\u6539\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
Copyright \xA9 2022 xiongxinwei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// versionCmd represents the version command</span>
<span class="token keyword">var</span> versionCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;version&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;A brief description of your command&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span> <span class="token string">\`A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.\`</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version called&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// rootCmd.AddCommand(versionCmd)</span>

	testCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>versionCmd<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>PS D<span class="token punctuation">:</span>clid<span class="token operator">&gt;</span> <span class="token keyword">go</span> build               
PS D<span class="token punctuation">:</span>clid<span class="token operator">&gt;</span> <span class="token punctuation">.</span>\\clid<span class="token punctuation">.</span>exe test  
\u6D4B\u8BD5run
PS D<span class="token punctuation">:</span>clid<span class="token operator">&gt;</span> <span class="token punctuation">.</span>\\clid<span class="token punctuation">.</span>exe version
Error<span class="token punctuation">:</span> unknown command <span class="token string">&quot;version&quot;</span> <span class="token keyword">for</span> <span class="token string">&quot;cobra&quot;</span>
Run &#39;cobra <span class="token operator">--</span>help&#39; <span class="token keyword">for</span> usage<span class="token punctuation">.</span>
PS D<span class="token punctuation">:</span>clid<span class="token operator">&gt;</span> <span class="token punctuation">.</span>\\clid<span class="token punctuation">.</span>exe test version
version called
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u53EF\u4EE5\u770B\u5230\u7ED1\u5B9A\u5230 <code>test</code> \u4E0A\u9762\u4E86\uFF0C\u5F53\u7136\u4F60\u53EF\u4EE5\u53D6\u6D88\u6CE8\u91CA\uFF0C\u540C\u65F6\u7ED1\u5B9A\u4E24\u4E2A~</strong></p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token function">PS</span> D:\\\u6587\u6863\\\u6700\u8FD1\u7684\\awesome-golang\\docs\\go-advancend\\code\\cobra\\clid&gt; <span class="token punctuation">.</span>\\clid<span class="token punctuation">.</span>exe test version
version called
<span class="token function">PS</span> D:\\\u6587\u6863\\\u6700\u8FD1\u7684\\awesome-golang\\docs\\go-advancend\\code\\cobra\\clid&gt; <span class="token punctuation">.</span>\\clid<span class="token punctuation">.</span>exe version
version called
<span class="token function">PS</span> D:\\\u6587\u6863\\\u6700\u8FD1\u7684\\awesome-golang\\docs\\go-advancend\\code\\cobra\\clid&gt; <span class="token punctuation">.</span>\\clid<span class="token punctuation">.</span>exe test
\u6D4B\u8BD5run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u4E3A\u547D\u4EE4\u6DFB\u52A0\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u547D\u4EE4\u6DFB\u52A0\u9009\u9879" aria-hidden="true">#</a> \u4E3A\u547D\u4EE4\u6DFB\u52A0\u9009\u9879</h2><p>\u8FD9\u4E2A\u6211\u4EEC\u5C31\u9700\u8981\u53BB <code>init()</code> \u51FD\u6570\u4E2D\u6DFB\u52A0\u65B9\u6CD5\u4E86\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
Copyright \xA9 2022 xiongxinwei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// versionCmd represents the version command</span>
<span class="token keyword">var</span> versionCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;version&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;\u5173\u4E8E\u7248\u672C\u4FE1\u606F\u77ED\u63CF\u8FF0&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span>  <span class="token string">\`\u5173\u4E8E\u7248\u672C\u4FE1\u606F\u957F\u63CF\u8FF0\`</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version called&quot;</span><span class="token punctuation">)</span>
		author<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F5C\u8005\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> author<span class="token punctuation">)</span>

	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>versionCmd<span class="token punctuation">)</span>

	testCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>versionCmd<span class="token punctuation">)</span>

	<span class="token comment">// \u6DFB\u52A0\u53C2\u6570</span>
	versionCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u540D\u79F0\uFF0C\u7B80\u5199\uFF0C\u9ED8\u8BA4\u503C\uFF0C\u63CF\u8FF0</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS D:<span class="token punctuation">\\</span>\u6587\u6863<span class="token punctuation">\\</span>\u6700\u8FD1\u7684<span class="token punctuation">\\</span>awesome-golang<span class="token punctuation">\\</span>docs<span class="token punctuation">\\</span>go-advancend<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>cobra<span class="token punctuation">\\</span>clid<span class="token operator">&gt;</span> go build
PS D:<span class="token punctuation">\\</span>\u6587\u6863<span class="token punctuation">\\</span>\u6700\u8FD1\u7684<span class="token punctuation">\\</span>awesome-golang<span class="token punctuation">\\</span>docs<span class="token punctuation">\\</span>go-advancend<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>cobra<span class="token punctuation">\\</span>clid<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>clid.exe version <span class="token parameter variable">-help</span>
Error: unknown shorthand flag: <span class="token string">&#39;e&#39;</span> <span class="token keyword">in</span> <span class="token parameter variable">-elp</span>
Usage:
  cobra <span class="token builtin class-name">test</span> version <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>

Flags:
  -n, <span class="token parameter variable">--author</span> string   name <span class="token punctuation">(</span>default <span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
  -h, <span class="token parameter variable">--help</span>            <span class="token builtin class-name">help</span> <span class="token keyword">for</span> version

PS D:<span class="token punctuation">\\</span>\u6587\u6863<span class="token punctuation">\\</span>\u6700\u8FD1\u7684<span class="token punctuation">\\</span>awesome-golang<span class="token punctuation">\\</span>docs<span class="token punctuation">\\</span>go-advancend<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>cobra<span class="token punctuation">\\</span>clid<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>clid.exe version
version called
\u4F5C\u8005\u662F\uFF1A default
PS D:<span class="token punctuation">\\</span>\u6587\u6863<span class="token punctuation">\\</span>\u6700\u8FD1\u7684<span class="token punctuation">\\</span>awesome-golang<span class="token punctuation">\\</span>docs<span class="token punctuation">\\</span>go-advancend<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>cobra<span class="token punctuation">\\</span>clid<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>clid.exe <span class="token builtin class-name">test</span> version
version called
\u4F5C\u8005\u662F\uFF1A default
PS D:<span class="token punctuation">\\</span>\u6587\u6863<span class="token punctuation">\\</span>\u6700\u8FD1\u7684<span class="token punctuation">\\</span>awesome-golang<span class="token punctuation">\\</span>docs<span class="token punctuation">\\</span>go-advancend<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>cobra<span class="token punctuation">\\</span>clid<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>clid.exe <span class="token builtin class-name">test</span> <span class="token parameter variable">-h</span>     
\u6D4B\u8BD5long\u4FE1\u606F

Usage:
  cobra <span class="token builtin class-name">test</span> <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
  cobra <span class="token builtin class-name">test</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  version     \u5173\u4E8E\u7248\u672C\u4FE1\u606F\u77ED\u63CF\u8FF0

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">test</span>

Use <span class="token string">&quot;cobra test [command] --help&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6307\u5B9A\u53C2\u6570\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS D:\\\u6587\u6863\\\u6700\u8FD1\u7684\\awesome-golang\\docs\\go-advancend\\code\\cobra\\clid&gt; .\\clid.exe  version -n \u738B\u827A\u6866     
version called
\u4F5C\u8005\u662F\uFF1A \u738B\u827A\u6866
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8865\u5145-run\u53C2\u6570\u7684\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145-run\u53C2\u6570\u7684\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u8865\u5145 run\u53C2\u6570\u7684\u533F\u540D\u51FD\u6570</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// versionCmd represents the version command</span>
<span class="token keyword">var</span> versionCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;version&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;\u5173\u4E8E\u7248\u672C\u4FE1\u606F\u77ED\u63CF\u8FF0&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span>  <span class="token string">\`\u5173\u4E8E\u7248\u672C\u4FE1\u606F\u957F\u63CF\u8FF0\`</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version called&quot;</span><span class="token punctuation">)</span>
		author<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F5C\u8005\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> author<span class="token punctuation">)</span>

	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cmd</code> \u662F\u4E00\u4E2A\u6307\u9488\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>cmd</code>\u6765\u83B7\u53D6\u53C2\u6570</li><li><code>args</code> \u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>args</code>\u6765\u83B7\u53D6\u53C2\u6570</li></ul><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
Copyright \xA9 2022 xiongxinwei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/</span>
<span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// versionCmd represents the version command</span>
<span class="token keyword">var</span> versionCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;version&quot;</span><span class="token punctuation">,</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;\u5173\u4E8E\u7248\u672C\u4FE1\u606F\u77ED\u63CF\u8FF0&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span>  <span class="token string">\`\u5173\u4E8E\u7248\u672C\u4FE1\u606F\u957F\u63CF\u8FF0\`</span><span class="token punctuation">,</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;version called&quot;</span><span class="token punctuation">)</span>
		author<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F5C\u8005\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> author<span class="token punctuation">)</span>

		<span class="token keyword">var</span> x <span class="token builtin">int</span>
		<span class="token comment">//string \u8F6C\u6362\u4E3A int</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> args <span class="token punctuation">{</span>
			tmp<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
			x <span class="token operator">+=</span> tmp
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x is &quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>versionCmd<span class="token punctuation">)</span>

	testCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>versionCmd<span class="token punctuation">)</span>

	<span class="token comment">// \u6DFB\u52A0\u53C2\u6570</span>
	versionCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">&quot;author&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u540D\u79F0\uFF0C\u7B80\u5199\uFF0C\u9ED8\u8BA4\u503C\uFF0C\u63CF\u8FF0</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS D:<span class="token punctuation">\\</span>\u6587\u6863<span class="token punctuation">\\</span>\u6700\u8FD1\u7684<span class="token punctuation">\\</span>awesome-golang<span class="token punctuation">\\</span>docs<span class="token punctuation">\\</span>go-advancend<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>cobra<span class="token punctuation">\\</span>clid<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>clid.exe version <span class="token parameter variable">-n</span> \u8001\u738B <span class="token number">123</span> <span class="token number">12</span> <span class="token number">412</span> <span class="token number">543</span> <span class="token number">12</span>
version called
\u4F5C\u8005\u662F\uFF1A \u8001\u738B
x is  <span class="token number">1102</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2>`,56),W=s("\u56DE\u5230\u76EE\u5F55"),M=s("\u4E0A\u4E00\u8282"),G=s("\u4E0B\u4E00\u8282"),B=n("hr",null,null,-1),Y={href:"https://github.com/3293172751/Block_Chain/blob/master/Git/git-contributor.md",target:"_blank",rel:"noopener noreferrer"},V=s("\u53C2\u4E0E\u8D21\u732E\u2764\uFE0F\u{1F495}\u{1F495}");function K(j,X){const e=o("ExternalLinkIcon"),t=o("RouterLink");return p(),u("div",null,[n("ul",null,[n("li",null,[n("a",r,[v,a(e)])])]),m,n("ul",null,[n("li",null,[a(t,{to:"/go-advancend/"},{default:i(()=>[k]),_:1})]),n("li",null,[a(t,{to:"/go-advancend/markdown/14.html"},{default:i(()=>[b]),_:1})])]),n("blockquote",null,[n("p",null,[g,n("a",h,[f,a(e)])])]),n("h3",q,[T,w,n("strong",null,[n("a",I,[E,a(e)])])]),n("h3",S,[O,C,n("strong",null,[n("a",R,[x,a(e)])])]),A,n("div",y,[N,n("ul",null,[n("li",null,[_,n("a",L,[D,a(e)]),P]),H,F])]),U,n("ul",null,[n("li",null,[a(t,{to:"/go-advancend/"},{default:i(()=>[W]),_:1})]),n("li",null,[a(t,{to:"/go-advancend/markdown/14.html"},{default:i(()=>[M]),_:1})]),n("li",null,[a(t,{to:"/go-advancend/markdown/16.html"},{default:i(()=>[G]),_:1})])]),B,n("ul",null,[n("li",null,[n("a",Y,[V,a(e)])])])])}const z=l(d,[["render",K],["__file","15.html.vue"]]);export{z as default};
