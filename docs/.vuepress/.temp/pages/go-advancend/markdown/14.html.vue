<template><div><h1 id="家庭账目记账软件项目" tabindex="-1"><a class="header-anchor" href="#家庭账目记账软件项目" aria-hidden="true">#</a> 家庭账目记账软件项目</h1>
<nav class="table-of-contents"><ul><li><router-link to="#案例">案例</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>😶‍🌫️go语言官方编程指南：<a href="https://pkg.go.dev/std" target="_blank" rel="noopener noreferrer">https://pkg.go.dev/std<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<p><strong>项目开发流程说明：</strong></p>
<p><img src="@source/go-advancend/markdown/images/3lZsIbCPLmJvEDY.png" alt="image-20220308185903888"></p>
<p><strong>项目需求说明：</strong></p>
<blockquote>
<p>家庭收账软件，记录家庭的收入和支出，并且打印出来</p>
</blockquote>
<p><img src="@source/go-advancend/markdown/images/pZJAj4gCOF7RP9r.png" alt="image-20220308190403430"></p>
<p><img src="@source/go-advancend/markdown/images/8REcJw2Y3SC9P1o.png" alt="image-20220308191021614"></p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: aaa.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Tue 08 Mar 2022 07:13:41 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//声明一个变量，保存接收用户输入的选项</span>
    key <span class="token operator">:=</span> <span class="token string">""</span>
    <span class="token comment">//声明一个变量，控制是否退出for</span>
    loop <span class="token operator">:=</span> <span class="token boolean">true</span>

    <span class="token comment">//定义账户的余额 []</span>
    balance <span class="token operator">:=</span> <span class="token number">10000.0</span>
    <span class="token comment">//每次收支的金额</span>
    money <span class="token operator">:=</span> <span class="token number">0.0</span> 
    <span class="token comment">//每次收支的说明</span>
    note <span class="token operator">:=</span> <span class="token string">""</span>
    <span class="token comment">//定义个变量，记录是否有收支的行为</span>
    flag <span class="token operator">:=</span> <span class="token boolean">false</span>
    <span class="token comment">//收支的详情使用字符串来记录</span>
    <span class="token comment">//当有收支时，只需要对details 进行拼接处理即可</span>
    details <span class="token operator">:=</span> <span class="token string">"收支\t账户金额\t收支金额\t说    明"</span>
    <span class="token comment">//显示这个主菜单</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"\n-----------------家庭收支记账软件-----------------"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"                  1 收支明细"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"                  2 登记收入"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"                  3 登记支出"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"                  4 退出软件"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">"请选择(1-4)："</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span>

        <span class="token keyword">switch</span> key <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">"1"</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"-----------------当前收支明细记录-----------------"</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> flag <span class="token punctuation">{</span>
                    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>details<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"当前没有收支明细... 来一笔吧!"</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>   
                
            <span class="token keyword">case</span> <span class="token string">"2"</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"本次收入金额:"</span><span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>money<span class="token punctuation">)</span>
                balance <span class="token operator">+=</span> money <span class="token comment">// 修改账户余额</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"本次收入说明:"</span><span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>note<span class="token punctuation">)</span>
                <span class="token comment">//将这个收入情况，拼接到details变量</span>
                <span class="token comment">//收入    11000           1000            有人发红包</span>
                details <span class="token operator">+=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"\n收入\t%v\t%v\t%v"</span><span class="token punctuation">,</span> balance<span class="token punctuation">,</span> money<span class="token punctuation">,</span> note<span class="token punctuation">)</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span>

            <span class="token keyword">case</span> <span class="token string">"3"</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"本次支出金额:"</span><span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>money<span class="token punctuation">)</span>
                <span class="token comment">//这里需要做一个必要的判断</span>
                <span class="token keyword">if</span> money <span class="token operator">></span> balance <span class="token punctuation">{</span>
                    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"余额的金额不足"</span><span class="token punctuation">)</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>   
                balance <span class="token operator">-=</span> money
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"本次支出说明:"</span><span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>note<span class="token punctuation">)</span>
                details <span class="token operator">+=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"\n支出\t%v\t%v\t%v"</span><span class="token punctuation">,</span> balance<span class="token punctuation">,</span> money<span class="token punctuation">,</span> note<span class="token punctuation">)</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">case</span> <span class="token string">"4"</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你确定要退出吗? y/n"</span><span class="token punctuation">)</span>
                choice <span class="token operator">:=</span> <span class="token string">""</span>
                <span class="token keyword">for</span> <span class="token punctuation">{</span>

                    fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>choice<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> choice <span class="token operator">==</span> <span class="token string">"y"</span> <span class="token operator">||</span> choice <span class="token operator">==</span> <span class="token string">"n"</span> <span class="token punctuation">{</span>
                        <span class="token keyword">break</span>
                    <span class="token punctuation">}</span>   
                    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你的输入有误，请重新输入 y/n"</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>   

                <span class="token keyword">if</span> choice <span class="token operator">==</span> <span class="token string">"y"</span> <span class="token punctuation">{</span>
                    loop <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>   
            <span class="token keyword">default</span> <span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入正确的选项.."</span><span class="token punctuation">)</span>       
        <span class="token punctuation">}</span>   

        <span class="token keyword">if</span> <span class="token operator">!</span>loop <span class="token punctuation">{</span>
            <span class="token keyword">break</span> 
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>   
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你退出家庭记账软件的使用..."</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go build -o a aaa.go </span>
<span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># ./a</span>

-----------------家庭收支记账软件-----------------
                  <span class="token number">1</span> 收支明细
                  <span class="token number">2</span> 登记收入
                  <span class="token number">3</span> 登记支出
                  <span class="token number">4</span> 退出软件
请选择<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>：1
-----------------当前收支明细记录-----------------
当前没有收支明细<span class="token punctuation">..</span>. 来一笔吧<span class="token operator">!</span>

-----------------家庭收支记账软件-----------------
                  <span class="token number">1</span> 收支明细
                  <span class="token number">2</span> 登记收入
                  <span class="token number">3</span> 登记支出
                  <span class="token number">4</span> 退出软件
请选择<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>：2
本次收入金额:
<span class="token number">12</span>
本次收入说明:
<span class="token number">12</span>

-----------------家庭收支记账软件-----------------
                  <span class="token number">1</span> 收支明细
                  <span class="token number">2</span> 登记收入
                  <span class="token number">3</span> 登记支出
                  <span class="token number">4</span> 退出软件
请选择<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>：3
本次支出金额:
<span class="token number">12</span>
本次支出说明:
<span class="token number">12</span>

-----------------家庭收支记账软件-----------------
                  <span class="token number">1</span> 收支明细
                  <span class="token number">2</span> 登记收入
                  <span class="token number">3</span> 登记支出
                  <span class="token number">4</span> 退出软件
请选择<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>：1
-----------------当前收支明细记录-----------------
收支	账户金额	收支金额	说    明
收入	<span class="token number">10012</span>	<span class="token number">12</span>	<span class="token number">12</span>
支出	<span class="token number">10000</span>	<span class="token number">12</span>	<span class="token number">12</span>

-----------------家庭收支记账软件-----------------
                  <span class="token number">1</span> 收支明细
                  <span class="token number">2</span> 登记收入
                  <span class="token number">3</span> 登记支出
                  <span class="token number">4</span> 退出软件
请选择<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '13.md' style='float:left'>⬆️上一节🔗</a><a href = '15.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/go-advancend/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


