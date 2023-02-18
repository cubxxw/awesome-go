<template><div><h1 id="接口设计稿" tabindex="-1"><a class="header-anchor" href="#接口设计稿" aria-hidden="true">#</a> 接口设计稿</h1>
<p>[toc]</p>
<h2 id="社交接口" tabindex="-1"><a class="header-anchor" href="#社交接口" aria-hidden="true">#</a> 社交接口</h2>
<ul>
<li>[x] douyin/relation/action/ 用户关注操作</li>
<li>[x] douyin/relation/follow/list/ 用户关注列表</li>
<li>[ ] douyin/relation/follower/list/ 用户粉丝列表</li>
<li>[ ] douyin/relation/friend/list/  用户好友列表</li>
<li>[ ] douyin/message/action/ 发送信息</li>
<li>[ ] douyin/message/chat/ 聊天记录</li>
</ul>
<h3 id="关注模块设计" tabindex="-1"><a class="header-anchor" href="#关注模块设计" aria-hidden="true">#</a> 关注模块设计</h3>
<p>关注模块包括 <strong>关注</strong>、<strong>取关</strong>、<strong>获取关注列表</strong>、<strong>获取粉丝列表</strong> 四个基本功能；包含<strong>是否关注</strong>、<strong>粉丝总数</strong>、<strong>关注总数</strong> 三个辅助功能~</p>
<ul>
<li>第一阶段 PR 解决基本功能</li>
</ul>
<h3 id="调研" tabindex="-1"><a class="header-anchor" href="#调研" aria-hidden="true">#</a> 调研</h3>
<ol>
<li>未登录情况关注或点赞跳转至登陆界面，登陆成功和关注原子操作</li>
<li>主页显示关注总数（自增）</li>
<li>取消关注</li>
<li>存储：MySQL、gorm自动</li>
<li>注意：用户和视频：<code v-pre>n:n</code> ，<code v-pre>user_videos</code> 存储用户和视频之间的多对多关系，包括用户 ID 和视频 ID</li>
</ol>
<h2 id="关注操作" tabindex="-1"><a class="header-anchor" href="#关注操作" aria-hidden="true">#</a> 关注操作</h2>
<ul>
<li>POST 请求：douyin/relation/action/ 用户关注操作</li>
</ul>
<blockquote>
<p>登录用户对其他用户进行关注或取消关注</p>
</blockquote>
<h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">位置</th>
<th style="text-align:left">类型</th>
<th style="text-align:center">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">token</td>
<td style="text-align:left">query</td>
<td style="text-align:left">string</td>
<td style="text-align:center">是</td>
<td style="text-align:left">说明：用户鉴权token</td>
</tr>
<tr>
<td style="text-align:left">to_user_id</td>
<td style="text-align:left">query</td>
<td style="text-align:left">string</td>
<td style="text-align:center">是</td>
<td style="text-align:left">说明：对方用户id</td>
</tr>
<tr>
<td style="text-align:left">action_type</td>
<td style="text-align:left">query</td>
<td style="text-align:left">string</td>
<td style="text-align:center">是</td>
<td style="text-align:left">说明：1-关注，2-取消关注</td>
</tr>
</tbody>
</table>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>Copy code
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">"fmt"</span>  
   <span class="token string">"net/http"</span> 
   <span class="token string">"io/ioutil"</span> <span class="token comment">// 用于读取响应体</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   url <span class="token operator">:=</span> <span class="token string">"/douyin/relation/action/?token=&amp;to_user_id=&amp;action_type="</span> <span class="token comment">// tiktok address</span>
   method <span class="token operator">:=</span> <span class="token string">"POST"</span> 
   client <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span> 
   req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// 创建请求</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"User-Agent"</span><span class="token punctuation">,</span> <span class="token string">"Apifox/1.0.0 (https://www.apifox.cn)"</span><span class="token punctuation">)</span> <span class="token comment">// 添加请求头，User-Agent为自定义请求头</span>
   res<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token comment">// 发送请求</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">defer</span> res<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭响应体</span>
   body<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>Body<span class="token punctuation">)</span> <span class="token comment">// 读取响应体</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h3>
<p>实现用户之间的关注关系维护，登录用户能够关注或取关其他用户，同时自己能够看到自己关注过的所有用户列表，以及所有关注自己的用户列表。</p>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">"proto2"</span><span class="token punctuation">;</span>
<span class="token keyword">package</span> douyin<span class="token punctuation">.</span>extra<span class="token punctuation">.</span>second<span class="token punctuation">;</span>
<span class="token keyword">message</span> <span class="token class-name">douyin_relation_action_request</span> <span class="token punctuation">{</span>
	<span class="token keyword">required</span> <span class="token builtin">string</span> token <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 用户鉴权token</span>
	<span class="token keyword">required</span> <span class="token builtin">int64</span> to_user_id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 对方用户id</span>
	<span class="token keyword">required</span> <span class="token builtin">int32</span> action_type <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 1-关注，2-取消关注</span>

<span class="token keyword">message</span> <span class="token class-name">douyin_relation_action_response</span> <span class="token punctuation">{</span>
	<span class="token keyword">required</span> <span class="token builtin">int32</span> status_code <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 状态码，0-成功，其他值-失败</span>
	<span class="token keyword">optional</span> <span class="token builtin">string</span> status_msg <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 返回状态描述</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回相应-200" tabindex="-1"><a class="header-anchor" href="#返回相应-200" aria-hidden="true">#</a> 返回相应 200</h3>
<ul>
<li>HTTP 状态码: 200</li>
<li>内容格式: JSON</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status_code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"status_msg"</span><span class="token operator">:</span> <span class="token string">"string"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>status_code</td>
<td>integer</td>
<td>状态码，0-成功，其他值-失败</td>
</tr>
<tr>
<td>status_msg</td>
<td>string</td>
<td>返回状态描述</td>
</tr>
</tbody>
</table>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// This file was generated from JSON Schema using quicktype, do not modify it directly.</span>
<span class="token comment">// To parse and unparse this JSON data, add this code to your project and do:</span>
<span class="token comment">//</span>
<span class="token comment">//    apifoxModel, err := UnmarshalApifoxModel(bytes)</span>
<span class="token comment">//    bytes, err = apifoxModel.Marshal()</span>

<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"encoding/json"</span>

<span class="token keyword">func</span> <span class="token function">UnmarshalApifoxModel</span><span class="token punctuation">(</span>data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ApifoxModel<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> r ApifoxModel
	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token operator">&amp;</span>r<span class="token punctuation">)</span>
	<span class="token keyword">return</span> r<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>ApifoxModel<span class="token punctuation">)</span> <span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ApifoxModel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	StatusCode <span class="token builtin">int64</span>  <span class="token string">`json:"status_code"`</span><span class="token comment">// 状态码，0-成功，其他值-失败</span>
	StatusMsg  <span class="token builtin">string</span> <span class="token string">`json:"status_msg"`</span> <span class="token comment">// 返回状态描述</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关注列表" tabindex="-1"><a class="header-anchor" href="#关注列表" aria-hidden="true">#</a> 关注列表</h2>
<ul>
<li>GET 请求： douyin/relation/follow/list/ 用户关注列表</li>
</ul>
<blockquote>
<p>登陆用户关注的所有用户列表</p>
</blockquote>
<h3 id="请求参数-1" tabindex="-1"><a class="header-anchor" href="#请求参数-1" aria-hidden="true">#</a> 请求参数</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">位置</th>
<th style="text-align:left">类型</th>
<th style="text-align:center">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">user_id</td>
<td style="text-align:left">query</td>
<td style="text-align:left">string</td>
<td style="text-align:center">是</td>
<td style="text-align:left">说明：用户id</td>
</tr>
<tr>
<td style="text-align:left">token</td>
<td style="text-align:left">query</td>
<td style="text-align:left">string</td>
<td style="text-align:center">是</td>
<td style="text-align:left">说明：用户鉴权token</td>
</tr>
</tbody>
</table>
<h3 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1" aria-hidden="true">#</a> 示例代码</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">"fmt"</span>
   <span class="token string">"net/http"</span> 
   <span class="token string">"io/ioutil"</span> <span class="token comment">// 导入ioutil包，用于读取响应体</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   url <span class="token operator">:=</span> <span class="token string">"/douyin/relation/follow/list/?user_id=&amp;token="</span> <span class="token comment">// 定义请求地址</span>
   method <span class="token operator">:=</span> <span class="token string">"GET"</span> 
   client <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 创建http客户端</span>
   req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// 创建请求</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"User-Agent"</span><span class="token punctuation">,</span> <span class="token string">"Apifox/1.0.0 (https://www.apifox.cn)"</span><span class="token punctuation">)</span> <span class="token comment">// 添加请求头，User-Agent为自定义请求头</span>
   res<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token comment">// 发送请求</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">defer</span> res<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭响应体</span>
   body<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>Body<span class="token punctuation">)</span> <span class="token comment">// 读取响应体</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出响应体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface-1" tabindex="-1"><a class="header-anchor" href="#interface-1" aria-hidden="true">#</a> Interface</h3>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code><span class="token keyword">package</span> douyin<span class="token punctuation">.</span>extra<span class="token punctuation">.</span>second<span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">douyin_relation_follow_list_request</span> <span class="token punctuation">{</span>
	<span class="token keyword">required</span> <span class="token builtin">int64</span> user_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 用户id</span>
	<span class="token keyword">required</span> <span class="token builtin">string</span> token <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 用户鉴权token</span>

<span class="token keyword">message</span> <span class="token class-name">douyin_relation_follow_list_response</span> <span class="token punctuation">{</span>
	<span class="token keyword">required</span> <span class="token builtin">int32</span> status_code <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 状态码，0-成功，其他值-失败</span>
	<span class="token keyword">optional</span> <span class="token builtin">string</span> status_msg <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 返回状态描述</span>
	<span class="token keyword">repeated</span> <span class="token positional-class-name class-name">User</span> user_list <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 用户信息列表</span>
	<span class="token keyword">required</span> <span class="token builtin">int64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 用户id</span>
	<span class="token keyword">required</span> <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 用户名称</span>
	<span class="token keyword">optional</span> <span class="token builtin">int64</span> follow_count <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 关注总数</span>
	<span class="token keyword">optional</span> <span class="token builtin">int64</span> follower_count <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 粉丝总</span>
	<span class="token keyword">required</span> <span class="token builtin">bool</span> is_follow <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// true-已关注，false-未关注</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回相应-200-1" tabindex="-1"><a class="header-anchor" href="#返回相应-200-1" aria-hidden="true">#</a> 返回相应 200</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"status_code"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
    <span class="token property">"status_msg"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
    <span class="token property">"user_list"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
            <span class="token property">"follow_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"follower_count"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"is_follow"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否必需</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>status_code</td>
<td>string</td>
<td>必需</td>
<td>状态码，0-成功，其他值-失败</td>
</tr>
<tr>
<td>status_msg</td>
<td>string or null</td>
<td>必需</td>
<td>返回状态描述</td>
</tr>
<tr>
<td>user_list</td>
<td>array[object (User) {5}] or null</td>
<td>必需</td>
<td>用户信息列表</td>
</tr>
<tr>
<td>id</td>
<td>integer</td>
<td>必需</td>
<td>用户id</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>必需</td>
<td>用户名称</td>
</tr>
<tr>
<td>follow_count</td>
<td>integer</td>
<td>必需</td>
<td>关注总数</td>
</tr>
<tr>
<td>follower_count</td>
<td>integer</td>
<td>必需</td>
<td>粉丝总数</td>
</tr>
<tr>
<td>is_follow</td>
<td>boolean</td>
<td>必需</td>
<td>true-已关注，false-未关注</td>
</tr>
</tbody>
</table>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// apifoxmodel.go</span>

<span class="token comment">// This file was generated from JSON Schema using quicktype, do not modify it directly.</span>
<span class="token comment">// To parse and unparse this JSON data, add this code to your project and do:</span>
<span class="token comment">//</span>
<span class="token comment">//    apifoxModel, err := UnmarshalApifoxModel(bytes)</span>
<span class="token comment">//    bytes, err = apifoxModel.Marshal()</span>

<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"encoding/json"</span>

<span class="token keyword">func</span> <span class="token function">UnmarshalApifoxModel</span><span class="token punctuation">(</span>data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ApifoxModel<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> r ApifoxModel
	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token operator">&amp;</span>r<span class="token punctuation">)</span>
	<span class="token keyword">return</span> r<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>ApifoxModel<span class="token punctuation">)</span> <span class="token function">Marshal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ApifoxModel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	StatusCode <span class="token builtin">string</span>  <span class="token string">`json:"status_code"`</span><span class="token comment">// 状态码，0-成功，其他值-失败</span>
	StatusMsg  <span class="token operator">*</span><span class="token builtin">string</span> <span class="token string">`json:"status_msg"`</span> <span class="token comment">// 返回状态描述</span>
	UserList   <span class="token punctuation">[</span><span class="token punctuation">]</span>User  <span class="token string">`json:"user_list"`</span>  <span class="token comment">// 用户信息列表</span>
<span class="token punctuation">}</span>

<span class="token comment">// user.go</span>

<span class="token keyword">package</span> main

<span class="token comment">// User</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	FollowCount   <span class="token builtin">int64</span>  <span class="token string">`json:"follow_count"`</span>  <span class="token comment">// 关注总数</span>
	FollowerCount <span class="token builtin">int64</span>  <span class="token string">`json:"follower_count"`</span><span class="token comment">// 粉丝总数</span>
	ID            <span class="token builtin">int64</span>  <span class="token string">`json:"id"`</span>            <span class="token comment">// 用户id</span>
	IsFollow      <span class="token builtin">bool</span>   <span class="token string">`json:"is_follow"`</span>     <span class="token comment">// true-已关注，false-未关注</span>
	Name          <span class="token builtin">string</span> <span class="token string">`json:"name"`</span>          <span class="token comment">// 用户名称</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验收" tabindex="-1"><a class="header-anchor" href="#验收" aria-hidden="true">#</a> 验收</h2>
<p><strong>判断：</strong></p>
<ol>
<li>可以正确检查用户是否已登录。</li>
<li>可以正确实现关注和取关的功能。</li>
<li>可以正确更新用户关系表。</li>
<li>接口能正确返回关注/取关的结果。</li>
</ol>
<h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h2>
<p><code v-pre>users</code> 的表来存储用户基本信息，包括用户 ID、用户名、密码、邮箱等。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> users <span class="token punctuation">(</span>
    user_id <span class="token keyword">INT</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    username <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    password <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要创建一个名为  <code v-pre>user_videos</code> 的表来存储用户和视频之间的多对多关系，包括用户 ID 和视频 ID</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> user_videos <span class="token punctuation">(</span>
    user_id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    video_id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> users<span class="token punctuation">(</span>user_id<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>video_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> videos<span class="token punctuation">(</span>video_id<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">,</span> video_id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>relationship</code> 的表来存储用户之间的关注关系, 包括关注者ID，被关注者ID，关注时间，取关时间：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> relationship <span class="token punctuation">(</span>
    follower_id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    follow_id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    follow_time <span class="token keyword">DATETIME</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    unfollow_time <span class="token keyword">DATETIME</span><span class="token punctuation">,</span>
    <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>follower_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> users<span class="token punctuation">(</span>user_id<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>follow_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> users<span class="token punctuation">(</span>user_id<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>follower_id<span class="token punctuation">,</span> followee_id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>douyin/relation/action/中，需要检查用户是否已经关注过，如果是，就取关，如果没有，就关注，更新relationship表。</li>
<li>在douyin/relation/follow/list/中，需要查询relationship表中follower_id=当前用户ID的所有记录，获取被关注者ID, 再根据被关注者ID在users表中查询被关注者的信息，返回给前端。</li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<p><strong>基础接口：</strong></p>
<ul>
<li>[x] <a href="https://rll0wlkrr7.feishu.cn/docx/HPLidzk8EooQyWxsBmGcN6vNneh" target="_blank" rel="noopener noreferrer">douyin/user/register/ 用户注册接口设计<ExternalLinkIcon/></a></li>
<li>[x] <a href="https://m8x44j2c67.feishu.cn/docx/XOcAd43dqolCS2xR8Kec2UzYnfb" target="_blank" rel="noopener noreferrer">douyin/user/login/ 用户登陆接口设计<ExternalLinkIcon/></a></li>
<li>[x] <a href="https://xvfqxk3bib.feishu.cn/docx/QXWhdNQLqopwUbx6rWycqP8AnLe" target="_blank" rel="noopener noreferrer">douyin/user/ 用户信息接口<ExternalLinkIcon/></a></li>
<li>[x] <a href="https://hardcore.feishu.cn/docx/PLXtdM1tkoXCK2xH0oIctWAOnLc" target="_blank" rel="noopener noreferrer">douyin/feed/ 视频流接口设计<ExternalLinkIcon/></a></li>
<li>[ ] douyin/push/list/ 发布列表接口</li>
</ul>
<p><strong>互动接口：</strong></p>
<ul>
<li>[x] <a href="https://tkz5v5lygv.feishu.cn/docx/EFkudxjWRoD7UMx5XLyc6ASrn5e" target="_blank" rel="noopener noreferrer">douyin/favorit/action/ 互动接口 - 点赞操作<ExternalLinkIcon/></a></li>
<li>[ ] douyin/favorite/list/ 喜欢列表</li>
<li>[x] douyin/comment/action/ 评论操作</li>
<li>[ ] douyin/comment/list/ 视频评论列表</li>
</ul>
<p><strong>社交接口：</strong></p>
<ul>
<li>[x] douyin/relation/action/ 用户关注操作</li>
<li>[x] douyin/relation/follow/list/ 用户关注列表</li>
<li>[ ] douyin/relation/follower/list/ 用户粉丝列表</li>
<li>[ ] douyin/relation/friend/list/  用户好友列表</li>
<li>[ ] douyin/message/action/ 发送信息</li>
<li>[ ] douyin/message/chat/ 聊天记录</li>
</ul>
<p><strong>技术栈：</strong></p>
<ul>
<li>
<p><a href="https://gin-gonic.com/docs/" target="_blank" rel="noopener noreferrer">Gin<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://gorm.io/docs/" target="_blank" rel="noopener noreferrer">Gorm<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.nginx-cn.net/" target="_blank" rel="noopener noreferrer">Nginx<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.linuxfromscratch.org/blfs/view/svn/server/vsftpd.html" target="_blank" rel="noopener noreferrer">vsftpd<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://ffmpeg.org/documentation.html" target="_blank" rel="noopener noreferrer">ffmpeg<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://t.zoukankan.com/lvdongjie-p-9554849.html" target="_blank" rel="noopener noreferrer">goftp<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://redis.io/docs/" target="_blank" rel="noopener noreferrer">Redis<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.rabbitmq.com/documentation.html" target="_blank" rel="noopener noreferrer">RabbitMQ<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">MySQL<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


