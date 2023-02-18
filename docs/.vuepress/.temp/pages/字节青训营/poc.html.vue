<template><div><h1 id="database-design-和-poc-code-阶段" tabindex="-1"><a class="header-anchor" href="#database-design-和-poc-code-阶段" aria-hidden="true">#</a> database design 和 Poc code 阶段</h1>
<p>[toc]</p>
<h2 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h2>
<ul>
<li><a href="https://rll0wlkrr7.feishu.cn/docx/XjAndWxOOonDTBxzbE2cciHCnhe" target="_blank" rel="noopener noreferrer">数据库设计<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>MySQL 设计部分已完成</p>
</blockquote>
<p>分享一个讨论：https://www.v2ex.com/t/237309</p>
<blockquote>
<p>我建议逻辑链接吧，虽然外键有约束性，但是逻辑链接感觉更灵活一些</p>
</blockquote>
<p><strong>不用外键~！</strong></p>
<p><strong>API 文档中，所有的 Optional 参数都是直接不发的。</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>chats<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>chat_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>from_user_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'发送消息的用户id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>to_user_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'接收消息的用户id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>msg_context<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'发送的消息'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'创建时间'</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>chat_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>comments<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>comment_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'评论id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'视频id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'用户id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>content<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'评论内容'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'创建时间'</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>comment_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>follows<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'用户id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>follow_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'该用户关注的用户id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>is_friend<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'0：不是好友，1：是好友'</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>follow_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>likes<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'用户id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'视频id'</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>replies<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>reply_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'回复id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>comment_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'评论id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'用户id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>content<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'回复内容'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'视频id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'创建时间'</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>reply_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'用户id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>username<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>videos<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'视频id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>title<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'视频标题'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>author_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'作者'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>play_url<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'播放URL'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>cover_url<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'封面URL'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'创建时间'</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>chats<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>fromid<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>from_user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>chats<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>toid<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>to_user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>comments<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>comments<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>videos<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>follows<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>follows<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>follow_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>follow_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>likes<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>likes<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>videos<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>replies<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>comment_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>comment_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>comments<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>comment_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>replies<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>replies<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>videos<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>video_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>videos<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>author_id<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>author_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动化测试" tabindex="-1"><a class="header-anchor" href="#自动化测试" aria-hidden="true">#</a> 自动化测试</h2>
<ul>
<li>Docker 编译（多阶段）+ 运行，API 测试通过 curl</li>
<li>Jenkins 定制流程流水线（见 poc 项目下的 JenkinsFile）</li>
</ul>
<p>基本流程是，大家 push 到远端，Jenkins 针对新提交执行自动化测试并向飞书群【五届 CI 信息】发送处理信息（概要）</p>
<p>如果顺利通过，会向【五届 CI 信息】发送测试通过</p>
<p>如果发生错误（错误信息有两个方向，Docker Log 以及 Jenkins 流水线执行中），收集错误信息及环境信息，自动向 github poc 仓库中新建 issue 并指定负责人为 git 提交的作者</p>
<p>发生错误并新建 Issue 后，Jenkins 会向【五届 CI 信息】发送相关 Issue 地址</p>
<p>这一套下来，目的就是希望大家提交完代码只需要关注一个群【五届 CI 信息】，就能判断自己的提交是否无害</p>
<p>同时，Go 语言部分测试方案为：执行所有单测，并利用 curl 执行某个 api 处理链路上的集成测试</p>
<p>至于最后的系统测试，就需要通过人工操作【抖声】APP 去完成</p>
<p>Go 语言测试工具中断言、Mock 框架与课程所用一致</p>
<h2 id="内部需求板块" tabindex="-1"><a class="header-anchor" href="#内部需求板块" aria-hidden="true">#</a> 内部需求板块</h2>
<ul>
<li><a href="https://m8x44j2c67.feishu.cn/docx/Ne3WdP1LaoGRfKx5d9ic4hdvnad" target="_blank" rel="noopener noreferrer">https://m8x44j2c67.feishu.cn/docx/Ne3WdP1LaoGRfKx5d9ic4hdvnad<ExternalLinkIcon/></a></li>
</ul>
<h3 id="package-认证模块-apiserver" tabindex="-1"><a class="header-anchor" href="#package-认证模块-apiserver" aria-hidden="true">#</a> Package：认证模块 Apiserver</h3>
<ul>
<li>接收一个待鉴权的 Token ，判断其合法性</li>
<li>需要用户登录后，自己生成一个 Token 并存储到 Redis 中</li>
</ul>
<h4 id="功能一-提供用户名密码认证" tabindex="-1"><a class="header-anchor" href="#功能一-提供用户名密码认证" aria-hidden="true">#</a> 功能一：提供用户名密码认证</h4>
<blockquote>
<p>可验证用户名是否存在，或者用户名密码是否正确</p>
<p>传入：(string,string)，用户名、密码</p>
<p>返回：string, Token，正确值为 uint64 的 string 类型，用户名不存在时返回 &quot;0&quot;，密码错误时返回 &quot;-1&quot;</p>
</blockquote>
<p>直接去 MySQL 表中读取数据</p>
<p>由于 username 的 hash 过长不建议全部做成索引，故存在【前缀索引】（选择前 16 位）</p>
<p>MySQL 表设计：</p>
<table>
<thead>
<tr>
<th>UserId（主键）</th>
<th>username（索引）</th>
<th>passwd(hash)</th>
<th>Token</th>
</tr>
</thead>
<tbody>
<tr>
<td>12345678</td>
<td>xj8ehjhej...</td>
<td>9joihvui80hh...</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="功能二-提供-token-认证" tabindex="-1"><a class="header-anchor" href="#功能二-提供-token-认证" aria-hidden="true">#</a> 功能二：提供 Token 认证</h4>
<blockquote>
<p>可验证 Token 是否存在，一般 Token 存在则表示该 Token 有效，也就会返回 true</p>
<p>传入：string，Token</p>
<p>返回：bool，表示这个 Token 是否有效</p>
</blockquote>
<h4 id="功能三-用户注册" tabindex="-1"><a class="header-anchor" href="#功能三-用户注册" aria-hidden="true">#</a> 功能三：用户注册</h4>
<blockquote>
<p>传入：</p>
</blockquote>
<h4 id="功能四-超时未响应状态" tabindex="-1"><a class="header-anchor" href="#功能四-超时未响应状态" aria-hidden="true">#</a> 功能四：超时未响应状态</h4>
<blockquote>
<p>这是一个被动状态，本来此模块代码就是无状态的，但如果所有认证服务挂了，表明目前是无法正常处理【用户注册/登录】的</p>
<p>但是可以让已经登录且拿到 Token 的用户继续使用 APP【只需要 Token 读权限】【不考虑 Token 过期，Token 过期时间是 24 小时】</p>
<p>我会暴露出一个公有包【Token 读取包】，到时候外部调用者发现超时时，可以自行调用这个包去读 Redis 和 MySQL</p>
</blockquote>
<h4 id="不可调用功能一-更新-token" tabindex="-1"><a class="header-anchor" href="#不可调用功能一-更新-token" aria-hidden="true">#</a> 不可调用功能一：更新 Token</h4>
<blockquote>
<p>功能二发现 Token 时间已经超 12 小时，生成一个新 Token 给用户</p>
</blockquote>
<h4 id="不可调用功能二-生成-token" tabindex="-1"><a class="header-anchor" href="#不可调用功能二-生成-token" aria-hidden="true">#</a> 不可调用功能二：生成 Token</h4>
<blockquote>
<p>采用 Mist 薄雾算法</p>
</blockquote>
<h3 id="token-包" tabindex="-1"><a class="header-anchor" href="#token-包" aria-hidden="true">#</a> Token 包</h3>
<p><img src="https://m8x44j2c67.feishu.cn/space/api/box/stream/download/asynccode/?code=OTU0MTEzNWU0ZGExNzJiNWViOTMzOWNhZGQ0ZmNlNTZfZGhvWGlQeWVOS3FLb2JFdTFucG9MRzVsMWpOSUJUU01fVG9rZW46Ym94Y25UZE1UbzlFM1JySEpFaGZFSzhYd3NkXzE2NzUyNDE3MzU6MTY3NTI0NTMzNV9WNA" alt="img"></p>
<p><img src="https://m8x44j2c67.feishu.cn/space/api/box/stream/download/asynccode/?code=NjU1Y2NjNDVjNjJmMWVlYWU2ZmY1ZTM3NmE2NTAyMjRfTVFERVZNQVF0bkdONm43Z1Y3cktLeWQ4SkYwOGhoRm5fVG9rZW46Ym94Y25xOHlDV2c5NGNGZEhFVGc1SEhRWTllXzE2NzUyNDE3MzU6MTY3NTI0NTMzNV9WNA" alt="img"></p>
<h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3>
<h3 id="解码" tabindex="-1"><a class="header-anchor" href="#解码" aria-hidden="true">#</a> 解码</h3>
<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3>
<ul>
<li>编码使用将必须自己创建一个 dou-jwt.</li>
</ul>
<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>
<ul>
<li><a href="https://www.zhihu.com/question/50964318" target="_blank" rel="noopener noreferrer">文件校验中md5 sha-1 sha-256 sha-512 哪种校验方式比较快呢? - 知乎<ExternalLinkIcon/></a>
<ul>
<li>Username 采用 MD5，</li>
<li>Passwd 采用 SHA-512 + 原值加盐 + hash 后加盐再 hash</li>
</ul>
</li>
<li><a href="https://www.yyc-blog.cn/blogs/SpringBoot/SHA256_Salt.html" target="_blank" rel="noopener noreferrer">存放密码的正确姿势 —— 安全可靠加密 SHA-256(+Salt) | Yyc‘s Blog<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/asyncins/mist#mist-%E8%96%84%E9%9B%BE%E7%AE%97%E6%B3%95" target="_blank" rel="noopener noreferrer">Mist 薄雾算法<ExternalLinkIcon/></a></li>
<li><a href="https://stackoverflow.com/questions/36639240/what-is-the-best-mysql-or-maria-db-data-type-to-store-jwt-token" target="_blank" rel="noopener noreferrer">What is the best MYSQL or Maria DB data type to store JWT token?<ExternalLinkIcon/></a></li>
</ul>
<p>对了，Token 不用自动刷新租期了，APP 端除了 登录 和 注册 这两 API，就没办法传递回 新的 Token 了（绝了），所以 Token 的需求只剩下【往里面放什么东西】这一点了，密码肯定是不能放的</p>
<p>CI 机器人的 Webhook 为：<a href="https://open.feishu.cn/open-apis/bot/v2/hook/57d8243f-a1ca-411c-ac84-665663ef2e93" target="_blank" rel="noopener noreferrer">https://open.feishu.cn/open-apis/bot/v2/hook/57d8243f-a1ca-411c-ac84-665663ef2e93<ExternalLinkIcon/></a></p>
<h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h3>
<p>Token 认证，也称为 Bearer Token（Token 令牌）认证，它的实现方案有很多种，我推荐直接使用 JWT Token 方案</p>
<p>这是 JWT Token 的 RFC 文档：https://www.rfc-editor.org/rfc/rfc7519</p>
<p><img src="http://sm.nsddd.top/sm202302011715954.png" alt="image-20230201171528673"></p>
<p>如果选择 JWT Token 方案，就只需要考虑 Token 各部分需要有什么，同时加密算法选什么</p>
<p>可以考虑使用第三方jwt库：https://github.com/appleboy/gin-jwt</p>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2>
<p>目录结构为 api 的请求路径 + 版本号目录</p>
<p><strong>对于用户的登陆视图要求是：目录结构为 api 的请求路径 + 版本号目录</strong></p>
<p><img src="C:/Users/smile/AppData/Roaming/Typora/typora-user-images/image-20230201172242402.png" alt="image-20230201172242402"></p>
<p><strong>我的：</strong></p>
<ul>
<li>[x] douyin/relation/action/ 用户关注操作</li>
<li>[x] douyin/relation/follow/list/ 用户关注列表</li>
</ul>
<p><strong>设计：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@dev poc<span class="token punctuation">]</span><span class="token comment"># tree </span>
<span class="token builtin class-name">.</span>
├── douyin
│   └── relation
│       ├── action
│       │   └── v1
│       └── follow
│           └── list
│               └── v1
├── Jenkinsfile
├── Makefile
└── README.md

<span class="token number">7</span> dbasirectories, <span class="token number">3</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


