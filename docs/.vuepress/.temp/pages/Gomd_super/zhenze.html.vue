<template><div><h1 id="正则表达式语法速查表" tabindex="-1"><a class="header-anchor" href="#正则表达式语法速查表" aria-hidden="true">#</a> 正则表达式语法速查表</h1>
<blockquote>
<p>划重点（慎用全局g） 第二次匹配会返回false，是因为开启全局匹配后，会记录上一次匹配结束的位置即：<strong><code v-pre>lastIndex</code></strong>，下次会从lastIndex开始匹配</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9]\d{4,10}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">"123456"</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//返回true</span>
str <span class="token operator">=</span> <span class="token string">"1234567"</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//返回false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>字符</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>\</td>
<td>将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。例如，“<code v-pre>n</code>”匹配字符“<code v-pre>n</code>”。“<code v-pre>\n</code>”匹配一个换行符。串行“<code v-pre>\\</code>”匹配“<code v-pre>\</code>”而“<code v-pre>\(</code>”则匹配“<code v-pre>(</code>”。</td>
</tr>
<tr>
<td>^</td>
<td>匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“<code v-pre>\n</code>”或“<code v-pre>\r</code>”之后的位置。</td>
</tr>
<tr>
<td>$</td>
<td>匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“<code v-pre>\n</code>”或“<code v-pre>\r</code>”之前的位置。</td>
</tr>
<tr>
<td>*</td>
<td>匹配前面的子表达式零次或多次。例如，zo*能匹配“<code v-pre>z</code>”以及“<code v-pre>zoo</code>”。*等价于{0,}。</td>
</tr>
<tr>
<td>+</td>
<td>匹配前面的子表达式一次或多次。例如，“<code v-pre>zo+</code>”能匹配“<code v-pre>zo</code>”以及“<code v-pre>zoo</code>”，但不能匹配“<code v-pre>z</code>”。+等价于{1,}。</td>
</tr>
<tr>
<td>?</td>
<td>匹配前面的子表达式零次或一次。例如，“<code v-pre>do(es)?</code>”可以匹配“<code v-pre>does</code>”或“<code v-pre>does</code>”中的“<code v-pre>do</code>”。?等价于{0,1}。</td>
</tr>
<tr>
<td>{<em>n</em>}</td>
<td><em>n</em>是一个非负整数。匹配确定的<em>n</em>次。例如，“<code v-pre>o{2}</code>”不能匹配“<code v-pre>Bob</code>”中的“<code v-pre>o</code>”，但是能匹配“<code v-pre>food</code>”中的两个o。</td>
</tr>
<tr>
<td>{<em>n</em>,}</td>
<td><em>n</em>是一个非负整数。至少匹配<em>n</em>次。例如，“<code v-pre>o{2,}</code>”不能匹配“<code v-pre>Bob</code>”中的“<code v-pre>o</code>”，但能匹配“<code v-pre>foooood</code>”中的所有o。“<code v-pre>o{1,}</code>”等价于“<code v-pre>o+</code>”。“<code v-pre>o{0,}</code>”则等价于“<code v-pre>o*</code>”。</td>
</tr>
<tr>
<td>{<em>n</em>,<em>m</em>}</td>
<td><em>m</em>和<em>n</em>均为非负整数，其中<em>n</em>&lt;=<em>m</em>。最少匹配<em>n</em>次且最多匹配<em>m</em>次。例如，“<code v-pre>o{1,3}</code>”将匹配“<code v-pre>fooooood</code>”中的前三个o。“<code v-pre>o{0,1}</code>”等价于“<code v-pre>o?</code>”。请注意在逗号和两个数之间不能有空格。</td>
</tr>
<tr>
<td>?</td>
<td>当该字符紧跟在任何一个其他限制符（*,+,?，{<em>n</em>}，{<em>n</em>,}，{<em>n</em>,<em>m</em>}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“<code v-pre>oooo</code>”，“<code v-pre>o+?</code>”将匹配单个“<code v-pre>o</code>”，而“<code v-pre>o+</code>”将匹配所有“<code v-pre>o</code>”。</td>
</tr>
<tr>
<td>.</td>
<td>匹配除“<code v-pre>\</code><em><code v-pre>n</code></em>”之外的任何单个字符。要匹配包括“<code v-pre>\</code><em><code v-pre>n</code></em>”在内的任何字符，请使用像“`(.</td>
</tr>
<tr>
<td>(pattern)</td>
<td>匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“<code v-pre>\(</code>”或“<code v-pre>\)</code>”。</td>
</tr>
<tr>
<td>(?:pattern)</td>
<td>匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用或字符“`(</td>
</tr>
<tr>
<td>(?=pattern)</td>
<td>正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，“`Windows(?=95</td>
</tr>
<tr>
<td>(?!pattern)</td>
<td>正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如“`Windows(?!95</td>
</tr>
<tr>
<td>(?&lt;=pattern)</td>
<td>反向肯定预查，与正向肯定预查类拟，只是方向相反。例如，“`(?&lt;=95</td>
</tr>
<tr>
<td>(?&lt;!pattern)</td>
<td>反向否定预查，与正向否定预查类拟，只是方向相反。例如“`(?&lt;!95</td>
</tr>
<tr>
<td>x|y</td>
<td>匹配x或y。例如，“`z</td>
</tr>
<tr>
<td>[xyz]</td>
<td>字符集合。匹配所包含的任意一个字符。例如，“<code v-pre>[abc]</code>”可以匹配“<code v-pre>plain</code>”中的“<code v-pre>a</code>”。</td>
</tr>
<tr>
<td>[^xyz]</td>
<td>负值字符集合。匹配未包含的任意字符。例如，“<code v-pre>[^abc]</code>”可以匹配“<code v-pre>plain</code>”中的“<code v-pre>p</code>”。</td>
</tr>
<tr>
<td>[a-z]</td>
<td>字符范围。匹配指定范围内的任意字符。例如，“<code v-pre>[a-z]</code>”可以匹配“<code v-pre>a</code>”到“<code v-pre>z</code>”范围内的任意小写字母字符。</td>
</tr>
<tr>
<td>[^a-z]</td>
<td>负值字符范围。匹配任何不在指定范围内的任意字符。例如，“<code v-pre>[^a-z]</code>”可以匹配任何不在“<code v-pre>a</code>”到“<code v-pre>z</code>”范围内的任意字符。</td>
</tr>
<tr>
<td>\b</td>
<td>匹配一个单词边界，也就是指单词和空格间的位置。例如，“<code v-pre>er\b</code>”可以匹配“<code v-pre>never</code>”中的“<code v-pre>er</code>”，但不能匹配“<code v-pre>verb</code>”中的“<code v-pre>er</code>”。</td>
</tr>
<tr>
<td>\B</td>
<td>匹配非单词边界。“<code v-pre>er\B</code>”能匹配“<code v-pre>verb</code>”中的“<code v-pre>er</code>”，但不能匹配“<code v-pre>never</code>”中的“<code v-pre>er</code>”。</td>
</tr>
<tr>
<td>\cx</td>
<td>匹配由x指明的控制字符。例如，\cM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“<code v-pre>c</code>”字符。</td>
</tr>
<tr>
<td>\d</td>
<td>匹配一个数字字符。等价于[0-9]。</td>
</tr>
<tr>
<td>\D</td>
<td>匹配一个非数字字符。等价于[^0-9]。</td>
</tr>
<tr>
<td>\f</td>
<td>匹配一个换页符。等价于\x0c和\cL。</td>
</tr>
<tr>
<td>\n</td>
<td>匹配一个换行符。等价于\x0a和\cJ。</td>
</tr>
<tr>
<td>\r</td>
<td>匹配一个回车符。等价于\x0d和\cM。</td>
</tr>
<tr>
<td>\s</td>
<td>匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。</td>
</tr>
<tr>
<td>\S</td>
<td>匹配任何非空白字符。等价于[^ \f\n\r\t\v]。</td>
</tr>
<tr>
<td>\t</td>
<td>匹配一个制表符。等价于\x09和\cI。</td>
</tr>
<tr>
<td>\v</td>
<td>匹配一个垂直制表符。等价于\x0b和\cK。</td>
</tr>
<tr>
<td>\w</td>
<td>匹配包括下划线的任何单词字符。等价于“<code v-pre>[A-Za-z0-9_]</code>”。</td>
</tr>
<tr>
<td>\W</td>
<td>匹配任何非单词字符。等价于“<code v-pre>[^A-Za-z0-9_]</code>”。</td>
</tr>
<tr>
<td>\x<em>n</em></td>
<td>匹配<em>n</em>，其中<em>n</em>为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“<code v-pre>\x41</code>”匹配“<code v-pre>A</code>”。“<code v-pre>\x041</code>”则等价于“<code v-pre>\x04&amp;1</code>”。正则表达式中可以使用ASCII编码。.</td>
</tr>
<tr>
<td>\<em>num</em></td>
<td>匹配<em>num</em>，其中<em>num</em>是一个正整数。对所获取的匹配的引用。例如，“<code v-pre>(.)\1</code>”匹配两个连续的相同字符。</td>
</tr>
<tr>
<td>\<em>n</em></td>
<td>标识一个八进制转义值或一个向后引用。如果*n<em>之前至少</em>n<em>个获取的子表达式，则</em>n<em>为向后引用。否则，如果</em>n<em>为八进制数字（0-7），则</em>n*为一个八进制转义值。</td>
</tr>
<tr>
<td>\<em>nm</em></td>
<td>标识一个八进制转义值或一个向后引用。如果*nm<em>之前至少有</em>nm<em>个获得子表达式，则</em>nm<em>为向后引用。如果*nm</em>之前至少有<em>n</em>个获取，则<em>n</em>为一个后跟文字<em>m</em>的向后引用。如果前面的条件都不满足，若<em>n</em>和<em>m</em>均为八进制数字（0-7），则*nm<em>将匹配八进制转义值</em>nm*。</td>
</tr>
<tr>
<td>\<em>nml</em></td>
<td>如果<em>n</em>为八进制数字（0-3），且<em>m和l</em>均为八进制数字（0-7），则匹配八进制转义值<em>nm</em>l。</td>
</tr>
<tr>
<td>\u<em>n</em></td>
<td>匹配<em>n</em>，其中<em>n</em>是一个用四个十六进制数字表示的Unicode字符。例如，\u00A9匹配版权符号（©）。</td>
</tr>
</tbody>
</table>
<ul>
<li>tips:</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 前瞻：
exp1(?=exp2) 查找exp2前面的exp1
// 后顾：
(?&lt;=exp2)exp1 查找exp2后面的exp1
// 负前瞻：
exp1(?!exp2) 查找后面不是exp2的exp1
// 负后顾：
(?&lt;!exp2)exp1 查找前面不是exp2的exp1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用正则表达式" tabindex="-1"><a class="header-anchor" href="#常用正则表达式" aria-hidden="true">#</a> <a href="https://doc.zdzn.net/cheatsheet/regular.html#%E5%B8%B8%E7%94%A8%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>常用正则表达式</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//=> 匹配地址栏参数</span>
<span class="token operator">~</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myQuery</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">myQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[?&amp;#]([^?&amp;=#]+)(?:=([^&amp;#]*))?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">/*
       * res是本次大正则匹配的结果
       * key 本次第一个分组捕获的内容
       * value 本次第二个分组捕获的内容
      */</span>
      <span class="token keyword">let</span><span class="token punctuation">[</span>res<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> arg<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'#'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">[</span><span class="token string">'hash'</span><span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//=> 高B格，检测数据类型封装</span>
<span class="token operator">~</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isNumber</span><span class="token operator">:</span> <span class="token string">'Number'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isString</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isBoolean</span><span class="token operator">:</span> <span class="token string">'Boolean'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isNull</span><span class="token operator">:</span> <span class="token string">'Null'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isUndefined</span><span class="token operator">:</span> <span class="token string">'Undefined'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isPlanObject</span><span class="token operator">:</span> <span class="token string">'Obejct'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isArray</span><span class="token operator">:</span> <span class="token string">'Array'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isRegExp</span><span class="token operator">:</span> <span class="token string">'RegExp'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isFunction</span><span class="token operator">:</span> <span class="token string">'Function'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> check <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> value <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
            check<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">classValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">'\\[object '</span><span class="token operator">+</span> classValue <span class="token operator">+</span><span class="token string">'\\]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span>check <span class="token operator">=</span> check<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> <a href="https://doc.zdzn.net/cheatsheet/regular.html#resources" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>Resources</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md
https://any86.github.io/any-rule/
https://github.com/smileyby/RegularExpressions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


