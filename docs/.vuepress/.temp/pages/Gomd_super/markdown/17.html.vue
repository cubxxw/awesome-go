<template><div><h1 id="原子操作-atomic包" tabindex="-1"><a class="header-anchor" href="#原子操作-atomic包" aria-hidden="true">#</a> 原子操作(atomic包)</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-1-原子操作">1.1.1. 原子操作</router-link></li><li><router-link to="#_1-1-2-atomic包">1.1.2. atomic包</router-link></li><li><router-link to="#_1-1-3-示例">1.1.3. 示例</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h3 id="_1-1-1-原子操作" tabindex="-1"><a class="header-anchor" href="#_1-1-1-原子操作" aria-hidden="true">#</a> 1.1.1. 原子操作</h3>
<p>代码中的加锁操作因为涉及内核态的上下文切换会比较耗时、代价比较高。针对基本数据类型我们还可以使用原子操作来保证并发安全，因为原子操作是Go语言提供的方法它在用户态就可以完成，因此性能比加锁操作更好。Go语言中原子操作由内置的标准库sync/atomic提供。</p>
<h3 id="_1-1-2-atomic包" tabindex="-1"><a class="header-anchor" href="#_1-1-2-atomic包" aria-hidden="true">#</a> 1.1.2. atomic包</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>func LoadInt32(addr *int32) (val int32) func LoadInt64(addr <code v-pre>*int64</code>) (val int64)<br>func LoadUint32(addr<code v-pre>*uint32</code>) (val uint32)<br>func LoadUint64(addr<code v-pre>*uint64</code>) (val uint64)<br>func LoadUintptr(addr<code v-pre>*uintptr</code>) (val uintptr)<br>func LoadPointer(addr<code v-pre>*unsafe.Pointer</code>) (val unsafe.Pointer)</td>
<td>读取操作</td>
</tr>
<tr>
<td>func StoreInt32(addr <code v-pre>*int32</code>, val int32) func StoreInt64(addr <code v-pre>*int64</code>, val int64) func StoreUint32(addr <code v-pre>*uint32</code>, val uint32) func StoreUint64(addr <code v-pre>*uint64</code>, val uint64) func StoreUintptr(addr <code v-pre>*uintptr</code>, val uintptr) func StorePointer(addr <code v-pre>*unsafe.Pointer</code>, val unsafe.Pointer)</td>
<td>写入操作</td>
</tr>
<tr>
<td>func AddInt32(addr <code v-pre>*int32</code>, delta int32) (new int32) func AddInt64(addr <code v-pre>*int64</code>, delta int64) (new int64) func AddUint32(addr <code v-pre>*uint32</code>, delta uint32) (new uint32) func AddUint64(addr <code v-pre>*uint64</code>, delta uint64) (new uint64) func AddUintptr(addr <code v-pre>*uintptr</code>, delta uintptr) (new uintptr)</td>
<td>修改操作</td>
</tr>
<tr>
<td>func SwapInt32(addr <code v-pre>*int32</code>, new int32) (old int32) func SwapInt64(addr <code v-pre>*int64</code>, new int64) (old int64) func SwapUint32(addr <code v-pre>*uint32</code>, new uint32) (old uint32) func SwapUint64(addr <code v-pre>*uint64</code>, new uint64) (old uint64) func SwapUintptr(addr <code v-pre>*uintptr</code>, new uintptr) (old uintptr) func SwapPointer(addr <code v-pre>*unsafe.Pointer</code>, new unsafe.Pointer) (old unsafe.Pointer)</td>
<td>交换操作</td>
</tr>
<tr>
<td>func CompareAndSwapInt32(addr <code v-pre>*int32</code>, old, new int32) (swapped bool) func CompareAndSwapInt64(addr <code v-pre>*int64</code>, old, new int64) (swapped bool) func CompareAndSwapUint32(addr <code v-pre>*uint32</code>, old, new uint32) (swapped bool) func CompareAndSwapUint64(addr <code v-pre>*uint64</code>, old, new uint64) (swapped bool) func CompareAndSwapUintptr(addr <code v-pre>*uintptr</code>, old, new uintptr) (swapped bool) func CompareAndSwapPointer(addr <code v-pre>*unsafe.Pointer</code>, old, new unsafe.Pointer) (swapped bool)</td>
<td>比较并交换操作</td>
</tr>
</tbody>
</table>
<h3 id="_1-1-3-示例" tabindex="-1"><a class="header-anchor" href="#_1-1-3-示例" aria-hidden="true">#</a> 1.1.3. 示例</h3>
<p>我们填写一个示例来比较下互斥锁和原子操作的性能。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> x <span class="token builtin">int64</span>
<span class="token keyword">var</span> l sync<span class="token punctuation">.</span>Mutex
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token comment">// 普通版加函数</span>
<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// x = x + 1</span>
    x<span class="token operator">++</span> <span class="token comment">// 等价于上面的操作</span>
    wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 互斥锁版加函数</span>
<span class="token keyword">func</span> <span class="token function">mutexAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    x<span class="token operator">++</span>
    l<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 原子操作版加函数</span>
<span class="token keyword">func</span> <span class="token function">atomicAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    atomic<span class="token punctuation">.</span><span class="token function">AddInt64</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment">// go add()       // 普通版add函数 不是并发安全的</span>
        <span class="token comment">// go mutexAdd()  // 加锁版add函数 是并发安全的，但是加锁性能开销大</span>
        <span class="token keyword">go</span> <span class="token function">atomicAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 原子操作版add函数 是并发安全，性能优于加锁版</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>atomic包提供了底层的原子级内存操作，对于同步算法的实现很有用。这些函数必须谨慎地保证正确使用。除了某些特殊的底层应用，使用通道或者sync包的函数/类型实现同步更好。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '16.md' style='float:left'>⬆️上一节🔗</a><a href = '18.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


