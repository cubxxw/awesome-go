import{_ as d,r as t,o as r,c,a as n,b as s,w as l,e,d as o}from"./app.64dac66d.js";const v={},u={href:"https://github.com/3293172751",target:"_blank",rel:"noopener noreferrer"},m=e("author"),b=n("h1",{id:"\u7B2C1\u8282-gcc-and-cgo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C1\u8282-gcc-and-cgo","aria-hidden":"true"},"#"),e(" \u7B2C1\u8282 Gcc and Cgo")],-1),p=e("\u56DE\u5230\u76EE\u5F55"),g=e("\u2764\uFE0F\u{1F495}\u{1F495}Go\u8BED\u8A00\u9AD8\u7EA7\u7BC7\u7AE0,\u5728\u6B64\u4E4B\u524D\u5EFA\u8BAE\u60A8\u5148\u4E86\u89E3\u57FA\u7840\u548C\u8FDB\u9636\u7BC7\u3002Myblog:"),_={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},h=e("http://nsddd.top"),f={id:"go\u8BED\u8A00\u57FA\u7840\u7BC7",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u57FA\u7840\u7BC7","aria-hidden":"true"},"#",-1),k=e(),q={href:"https://github.com/3293172751/Block_Chain/blob/master/TOC.md",target:"_blank",rel:"noopener noreferrer"},C=e("Go\u8BED\u8A00\u57FA\u7840\u7BC7"),$={id:"go\u8BED\u8A00100\u7BC7\u8FDB\u9636",tabindex:"-1"},L=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00100\u7BC7\u8FDB\u9636","aria-hidden":"true"},"#",-1),G=e(),y={href:"https://github.com/3293172751/Block_Chain/blob/master/Gomd_super/README.md",target:"_blank",rel:"noopener noreferrer"},E=e("Go\u8BED\u8A00100\u7BC7\u8FDB\u9636"),N=o(`<hr><p>[TOC]</p><hr><p><strong>\u6211\u4EEC\u9ED8\u8BA4\u4E3A\u662FC\u8BED\u8A00\u662F\u53604\u4E2A\u5B57\u8282\uFF0C\u8FD9\u4E2A\u548CGo\u8BED\u8A00\u662F\u4E0D\u4E00\u6837\u7684\u3002</strong></p><p><strong>\u5728Go\u8BED\u8A00\u4E2D\uFF0Cint\u9ED8\u8BA4\u662F8\u4E2A\u5B57\u8282</strong></p><ul><li>int32\u662F\u56DB\u4E2A\u5B57\u8282</li><li>int64\u662F\u516B\u4E2A\u5B57\u8282</li><li>int\u662F\u516B\u4E2A\u5B57\u8282</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*************************************************************************
    &gt; File Name: a.go
    &gt; Author: smile
    &gt; Mail: 3293172751nss@gmail.com 
    &gt; Created Time: Thu 30 Jun 2022 01:13:35 AM PDT
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span><span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token number">40000</span>
    b <span class="token operator">=</span> <span class="token number">50000</span>
<span class="token punctuation">)</span>
<span class="token keyword">var</span> c <span class="token builtin">int</span>
<span class="token keyword">var</span> d <span class="token builtin">int32</span>
    c <span class="token operator">=</span> <span class="token number">50000</span>
    d <span class="token operator">=</span> <span class="token number">50000</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token operator">*</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token operator">*</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token operator">*</span>c<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token operator">*</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6211\u4EEC\u5BF9\u4E0A\u9762\u7684\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ubuntu:/c# go run a.go 
1600000000
2500000000
2500000000
-1794967296
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5BF9\u4E8EC\u8BED\u8A00\u6765\u8BF4</strong></p><p><strong>\u7F16\u8BD1\u4E3A\u6C47\u7F16\u6587\u4EF6</strong></p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>root@ubuntu:/c# gcc -S a.c
root@ubuntu:/c# cat a.s
	.file	&quot;a.c&quot;
	.text
	.section	.rodata
.LC0:
	.string	&quot;%d\\n,%d\\n&quot;
.LC1:
	.string	&quot;int c = %d\\n,int64_t d = %lld\\n&quot;
	.text
	.globl	main
	.type	main, @function
main:
.LFB0:
	.cfi_startproc
	endbr64
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$32, %rsp
	movl	$50000, -20(%rbp)
	movl	$40000, -16(%rbp)
	movl	-16(%rbp), %eax
	imull	%eax, %eax
	movl	%eax, %edx
	movl	-20(%rbp), %eax
	imull	%eax, %eax
	movl	%eax, %esi
	leaq	.LC0(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movq	-8(%rbp), %rax
	imulq	%rax, %rax
	movq	%rax, %rdx
	movl	-12(%rbp), %eax
	imull	%eax, %eax
	movl	%eax, %esi
	leaq	.LC1(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	$0, %eax
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	main, .-main
	.ident	&quot;GCC: (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0&quot;
	.section	.note.GNU-stack,&quot;&quot;,@progbits
	.section	.note.gnu.property,&quot;a&quot;
	.align 8
	.long	 1f - 0f
	.long	 4f - 1f
	.long	 5
0:
	.string	 &quot;GNU&quot;
1:
	.align 8
	.long	 0xc0000002
	.long	 3f - 2f
2:
	.long	 0x3
3:
	.align 8
4:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u4E3A\u4E8C\u8FDB\u5236\u4EE3\u7801</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@ubuntu:/c# gcc -Og -c a.c
root@ubuntu:/c# cat a.o                                                                E\xB9^_\xBA\u{9420D}5\xBF\xB8\u8E7AH5\xBF\xB8.ed
,%d
int c = %d
,int64_t d = %lld
GCC: (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0GNU\u{FFF84}zRx 
                                                H\u{BD041}                                     R*a.c.LC0.LC1main_GLOBAL_OFFSET_TABLE___printf_chk	\u{4103F}\xFF\xFF$\u{4103F}\xFF\xFF5 
\u{4103F}\xFF\xFFD\u{4103F}\xFF\xFF .symtab.strtab.shstrtab.rela.text.data.bss.rodata.str1.1.comment.note.GNU-stack.note.gnu.property.rela.eh_frame @R\u0582\`
                                   &amp;12&amp;@0\xB8,Il@8 
                                               8h 

                                                	 7P{root@ubuntu:/c# XshellXshellXshellXshellXshell
XshellXshellXshellXshellXshell: command not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>.o</code>\u540E\u7F00\u7684\u6587\u4EF6\u662F\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684\uFF0C\u6CA1\u6709\u67E5\u770B\u610F\u4E49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\uFF1A\u673A\u5668\u6267\u884C\u7684\u7A0B\u5E8F\u53EA\u662F\u4E00\u4E2A\u5B57\u8282\u5E8F\u5217\uFF0C \u5B83\u662F\u5BF9\u4E00\u7CFB\u5217\u6307\u4EE4\u7684\u7F16\u7801\u3002\u673A\u5668\u5BF9\u4EA7\u751F\u8FD9\u4E9B\u6307\u4EE4\u7684\u6E90\u4EE3\u7801\u51E0\u4E4E\u4E00\u65E0\u6240\u77E5\u3002</strong></p><p><strong>\u5982\u679C\u9700\u8981\u663E\u793A\u51FA\u673A\u5668\u4EE3\u7801\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230\u53CD\u6C47\u7F16\u5668\uFF08\u8FD9\u4E2A\u7A0B\u5E8F\u975E\u5E38\u6709\u7528\uFF09\uFF0C\u5728Linux\u4E2D<code>-d</code>\u6307\u4EE4\u6807\u5FD7\u7684objdump \u53EF\u4EE5\u5145\u5F53\u8FD9\u4E2A\u89D2\u8272</strong></p><div class="language-asm ext-asm line-numbers-mode"><pre class="language-asm"><code>root@ubuntu:/c# objdump -d a.o

a.o:     file format elf64-x86-64


Disassembly of section .text:

0000000000000000 &lt;main&gt;:
   0:	f3 0f 1e fa          	endbr64 
   4:	48 83 ec 08          	sub    $0x8,%rsp
   8:	b9 00 10 5e 5f       	mov    $0x5f5e1000,%ecx
   d:	ba 00 f9 02 95       	mov    $0x9502f900,%edx
  12:	48 8d 35 00 00 00 00 	lea    0x0(%rip),%rsi        # 19 &lt;main+0x19&gt;
  19:	bf 01 00 00 00       	mov    $0x1,%edi
  1e:	b8 00 00 00 00       	mov    $0x0,%eax
  23:	e8 00 00 00 00       	callq  28 &lt;main+0x28&gt;
  28:	b9 00 00 00 00       	mov    $0x0,%ecx
  2d:	ba 00 00 00 00       	mov    $0x0,%edx
  32:	48 8d 35 00 00 00 00 	lea    0x0(%rip),%rsi        # 39 &lt;main+0x39&gt;
  39:	bf 01 00 00 00       	mov    $0x1,%edi
  3e:	b8 00 00 00 00       	mov    $0x0,%eax
  43:	e8 00 00 00 00       	callq  48 &lt;main+0x48&gt;
  48:	b8 00 00 00 00       	mov    $0x0,%eax
  4d:	48 83 c4 08          	add    $0x8,%rsp
  51:	c3                   	retq   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5BF9\u4E8EGo\u8BED\u8A00\u6211\u4EEC\u540C\u6837\u53EF\u4EE5\u4F7F\u7528\u53CD\u6C47\u7F16\u547D\u4EE4</strong></p><div class="language-asp ext-asp line-numbers-mode"><pre class="language-asp"><code>root@ubuntu:/c# go build -o a a.go
root@ubuntu:/c# ./a
1600000000
2500000000
2500000000
-1794967296
root@ubuntu:/c# objdump -d a | tail -n 10
  48d03c:	00 00 
  48d03e:	48 c7 44 24 20 01 00 	movq   $0x1,0x20(%rsp)
  48d045:	00 00 
  48d047:	e8 a4 96 ff ff       	callq  4866f0 &lt;fmt.Fprintln&gt;
  48d04c:	48 8b ac 24 80 00 00 	mov    0x80(%rsp),%rbp
  48d053:	00 
  48d054:	48 81 c4 88 00 00 00 	add    $0x88,%rsp
  48d05b:	c3                   	retq   
  48d05c:	e8 2f 47 fc ff       	callq  451790 &lt;runtime.morestack_noctxt&gt;
  48d061:	e9 2a fe ff ff       	jmpq   48ce90 &lt;main.main&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2>`,20),T=e("\u56DE\u5230\u76EE\u5F55"),X=e("\u4E0B\u4E00\u8282"),w=n("hr",null,null,-1),B={href:"https://github.com/3293172751/Block_Chain/blob/master/Git/git-contributor.md",target:"_blank",rel:"noopener noreferrer"},P=e("\u53C2\u4E0E\u8D21\u732E\u2764\uFE0F\u{1F495}\u{1F495}");function F(R,U){const i=t("ExternalLinkIcon"),a=t("RouterLink");return r(),c("div",null,[n("ul",null,[n("li",null,[n("a",u,[m,s(i)])])]),b,n("ul",null,[n("li",null,[s(a,{to:"/go-advancend/"},{default:l(()=>[p]),_:1})])]),n("blockquote",null,[n("p",null,[g,n("a",_,[h,s(i)])]),n("h3",f,[x,k,n("strong",null,[n("a",q,[C,s(i)])])]),n("h3",$,[L,G,n("strong",null,[n("a",y,[E,s(i)])])])]),N,n("ul",null,[n("li",null,[s(a,{to:"/go-advancend/"},{default:l(()=>[T]),_:1})]),n("li",null,[s(a,{to:"/go-advancend/markdown/2.html"},{default:l(()=>[X]),_:1})])]),w,n("ul",null,[n("li",null,[n("a",B,[P,s(i)])])])])}const D=d(v,[["render",F],["__file","1.html.vue"]]);export{D as default};
