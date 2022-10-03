<template><div><h1 id="_1-加密解密" tabindex="-1"><a class="header-anchor" href="#_1-加密解密" aria-hidden="true">#</a> 1. 加密解密</h1>
<h3 id="_1-1-1-aes-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-1-aes-简介" aria-hidden="true">#</a> 1.1.1. AES 简介</h3>
<p>高级加密标准（英语Advanced Encryption Standard，缩写AES）在密码学中又称 Rijndael 加密法，是美国联邦政府采用的一种区块加密标准。这个标准用来替代原先的 DES，已经被多方分析且广为全世界所使用。经过五年的甄选流程，高级加密标准由美国国家标准与技术研究院（NIST）于 2001 年 11 月 26 日发布于 FIPS PUB 197，并在 2002 年 5 月 26 日成为有效的标准。2006 年，高级加密标准已然成为对称密钥加密中最流行的算法之一。</p>
<p>该算法为比利时密码学家 Joan Daemen 和 Vincent Rijmen 所设计，结合两位作者的名字，以 Rijndael 为名投稿高级加密标准的甄选流程。（Rijndael 的发音近于 &quot;Rhine doll&quot;）</p>
<h3 id="_1-1-2-aes-特点" tabindex="-1"><a class="header-anchor" href="#_1-1-2-aes-特点" aria-hidden="true">#</a> 1.1.2. AES 特点</h3>
<table>
<thead>
<tr>
<th>项目</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>密钥长度</td>
<td>128位（16Byte）、192位（24Byte）、256位（32Byte）</td>
<td>默认：128位</td>
</tr>
<tr>
<td>分组密码工作模式</td>
<td>ECB,CBC,PCBC,CTR,CTS,CFB,CFB8 至 CFB128,OFB,OFB8 至 OFB128</td>
<td></td>
</tr>
<tr>
<td>填充方式</td>
<td>NoPadding, ISO10126Padding, OAEPPadding, PKCS1Padding, PKCS5Padding, SSL3Padding</td>
<td></td>
</tr>
</tbody>
</table>
<p>采用不同的工作模式（分组密码工作模式），可能会涉及到 初始化向量（IV） 和 填充模式 的选择。</p>
<p>在密码学中，一个密钥只能加密长度等于密钥长度的数据。</p>
<p>为了加密更多的数据，需要对数据进行合理的分组。</p>
<p>分组密码工作模式则是按照不同的密码规则进行分组（用于加密和认证）。</p>
<p>最后一块数据长度不足密钥长度时，则需要使用合适的 填充模式 进行填充，然后加入处理。</p>
<p>分组过程中通常还会加入初始化向量进行随机化，以保证安全。</p>
<p>示例代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"bytes"</span>
    <span class="token string">"crypto/aes"</span>
    <span class="token string">"crypto/cipher"</span>
    <span class="token string">"encoding/base64"</span>
    <span class="token string">"errors"</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//高级加密标准（Adevanced Encryption Standard ,AES）</span>

<span class="token comment">//16,24,32位字符串的话，分别对应AES-128，AES-192，AES-256 加密方法</span>
<span class="token comment">//key不能泄露</span>
<span class="token keyword">var</span> PwdKey <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"DIS**#KKKDJJSKDI"</span><span class="token punctuation">)</span>

<span class="token comment">//PKCS7 填充模式</span>
<span class="token keyword">func</span> <span class="token function">PKCS7Padding</span><span class="token punctuation">(</span>ciphertext <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> blockSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token punctuation">{</span>
    padding <span class="token operator">:=</span> blockSize <span class="token operator">-</span> <span class="token function">len</span><span class="token punctuation">(</span>ciphertext<span class="token punctuation">)</span><span class="token operator">%</span>blockSize
    <span class="token comment">//Repeat()函数的功能是把切片[]byte{byte(padding)}复制padding个，然后合并成新的字节切片返回</span>
    padtext <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">Repeat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token function">byte</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> padding<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">append</span><span class="token punctuation">(</span>ciphertext<span class="token punctuation">,</span> padtext<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//填充的反向操作，删除填充字符串</span>
<span class="token keyword">func</span> <span class="token function">PKCS7UnPadding</span><span class="token punctuation">(</span>origData <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//获取数据长度</span>
    length <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>origData<span class="token punctuation">)</span>
    <span class="token keyword">if</span> length <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"加密字符串错误！"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取填充字符串长度</span>
        unpadding <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>origData<span class="token punctuation">[</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment">//截取切片，删除填充字节，并且返回明文</span>
        <span class="token keyword">return</span> origData<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">(</span>length <span class="token operator">-</span> unpadding<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//实现加密</span>
<span class="token keyword">func</span> <span class="token function">AesEcrypt</span><span class="token punctuation">(</span>origData <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//创建加密算法实例</span>
    block<span class="token punctuation">,</span> err <span class="token operator">:=</span> aes<span class="token punctuation">.</span><span class="token function">NewCipher</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token comment">//获取块的大小</span>
    blockSize <span class="token operator">:=</span> block<span class="token punctuation">.</span><span class="token function">BlockSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//对数据进行填充，让数据长度满足需求</span>
    origData <span class="token operator">=</span> <span class="token function">PKCS7Padding</span><span class="token punctuation">(</span>origData<span class="token punctuation">,</span> blockSize<span class="token punctuation">)</span>
    <span class="token comment">//采用AES加密方法中CBC加密模式</span>
    blocMode <span class="token operator">:=</span> cipher<span class="token punctuation">.</span><span class="token function">NewCBCEncrypter</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> key<span class="token punctuation">[</span><span class="token punctuation">:</span>blockSize<span class="token punctuation">]</span><span class="token punctuation">)</span>
    crypted <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>origData<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//执行加密</span>
    blocMode<span class="token punctuation">.</span><span class="token function">CryptBlocks</span><span class="token punctuation">(</span>crypted<span class="token punctuation">,</span> origData<span class="token punctuation">)</span>
    <span class="token keyword">return</span> crypted<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">//实现解密</span>
<span class="token keyword">func</span> <span class="token function">AesDeCrypt</span><span class="token punctuation">(</span>cypted <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> key <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//创建加密算法实例</span>
    block<span class="token punctuation">,</span> err <span class="token operator">:=</span> aes<span class="token punctuation">.</span><span class="token function">NewCipher</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token comment">//获取块大小</span>
    blockSize <span class="token operator">:=</span> block<span class="token punctuation">.</span><span class="token function">BlockSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//创建加密客户端实例</span>
    blockMode <span class="token operator">:=</span> cipher<span class="token punctuation">.</span><span class="token function">NewCBCDecrypter</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> key<span class="token punctuation">[</span><span class="token punctuation">:</span>blockSize<span class="token punctuation">]</span><span class="token punctuation">)</span>
    origData <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>cypted<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//这个函数也可以用来解密</span>
    blockMode<span class="token punctuation">.</span><span class="token function">CryptBlocks</span><span class="token punctuation">(</span>origData<span class="token punctuation">,</span> cypted<span class="token punctuation">)</span>
    <span class="token comment">//去除填充字符串</span>
    origData<span class="token punctuation">,</span> err <span class="token operator">=</span> <span class="token function">PKCS7UnPadding</span><span class="token punctuation">(</span>origData<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> origData<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token comment">//加密base64</span>
<span class="token keyword">func</span> <span class="token function">EnPwdCode</span><span class="token punctuation">(</span>pwd <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">AesEcrypt</span><span class="token punctuation">(</span>pwd<span class="token punctuation">,</span> PwdKey<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> base64<span class="token punctuation">.</span>StdEncoding<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token comment">//解密</span>
<span class="token keyword">func</span> <span class="token function">DePwdCode</span><span class="token punctuation">(</span>pwd <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//解密base64字符串</span>
    pwdByte<span class="token punctuation">,</span> err <span class="token operator">:=</span> base64<span class="token punctuation">.</span>StdEncoding<span class="token punctuation">.</span><span class="token function">DecodeString</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token comment">//执行AES解密</span>
    <span class="token keyword">return</span> <span class="token function">AesDeCrypt</span><span class="token punctuation">(</span>pwdByte<span class="token punctuation">,</span> PwdKey<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"12fff我是ww.topgoer.com的站长枯藤"</span><span class="token punctuation">)</span>
    pwd<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">EnPwdCode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    bytes<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">DePwdCode</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '78.md' style='float:left'>⬆️上一节🔗</a><a href = '80.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


