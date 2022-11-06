<template><div><h1 id="测试技巧-单元测试-unit-test" tabindex="-1"><a class="header-anchor" href="#测试技巧-单元测试-unit-test" aria-hidden="true">#</a> 测试技巧：单元测试（Unit Test）</h1>
<p>单元测试(Unit Tests, UT) 是一个优秀项目不可或缺的一部分，特别是在一些频繁变动和多人合作开发的项目中尤为重要。</p>
<p>写单元测试代码是一件短期没什么用，但却能长期收益的事情，特别是在人比较多的大团队里。</p>
<p>很多初级开发者不愿意花时间写测试代码，因为写测试代码比功能代码少了一些创造性，没有个人成就感，况且迭代快、排期紧导致没有时间去安排写单元测试。</p>
<p>在以下这些场景中，没有养成写单元测试习惯的话，就是一个灾难</p>
<ul>
<li>同事修改了某个之前由你编写的函数，但由于同事对这块函数理解上的不足，影响了某个异常场景的处理，你的同事没有测试到，把 bug 流到线上去</li>
<li>某个函数的逻辑比较复杂，该函数的改动也很频繁，每一次的改过都要测试非常多的场景，费时费力</li>
</ul>
<h2 id="_1-如何写单元测试" tabindex="-1"><a class="header-anchor" href="#_1-如何写单元测试" aria-hidden="true">#</a> 1. 如何写单元测试</h2>
<p>在开始之前，先初始化项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go mod init github.com/iswbm/fuzz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在该项目中添加 main.go，内容如下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import "fmt"

func Reverse(s string) string {
    b := [] byte(s)
    for i, j := 0, len(b)-1; i &lt; len(b)/2; i, j = i+1, j-1 {
        b[i], b[j] = b[j], b[i]
    }
    return string(b)
}

func main() {
    input := "The quick brown fox jumped over the lazy dog"
    rev := Reverse(input)
    doubleRev := Reverse(rev)
    fmt.Printf("original: %q\n", input)
    fmt.Printf("reversed: %q\n", rev)
    fmt.Printf("reversed again: %q\n", doubleRev)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们要为 Reverse 函数编写单元测试代码，放在 reverse_test.go，Test 函数如下</p>
<ul>
<li>给定了三组数据</li>
<li>遍历这几组数据，将 tc.in 做为 Reverses 函数的入参执行函数，其返回值跟预期的 tc.want 做对比</li>
<li>若不相等，则测试不通过～</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "testing"
)

func TestReverse(t *testing.T) {
    testcases := []struct {
        in, want string
    }{
        {"Hello, world", "dlrow ,olleH"},
        {" ", " "},
        {"!12345", "54321!"},
    }
    for _, tc := range testcases {
        rev := Reverse(tc.in)
        if rev != tc.want {
                t.Errorf("Reverse: %q, want %q", rev, tc.want)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于单元测试函数来说，它的编写有一些格式，需要提一下，不然上面的函数，你可能会有疑问：</p>
<ul>
<li>单元测试，要导入 testing 包</li>
<li>承载测试用例的测试文件，固定以 xxx_test.go（xxx 是原文件名）</li>
<li>测试用例函数名称一般命名为 <code v-pre>Test</code> 加上待测试的方法名。</li>
<li>测试用例函数的参数有且只有一个，在这里是 <code v-pre>t *testing.T</code></li>
</ul>
<h2 id="_2-执行测试用例" tabindex="-1"><a class="header-anchor" href="#_2-执行测试用例" aria-hidden="true">#</a> 2. 执行测试用例</h2>
<p>现在我们执行 go test 即是普通的单元测试，即执行该 package 下的所有函数的测试用例，输出 PASS 说明单元测试通过</p>
<p><img src="https://image.iswbm.com/image-20220326130634024.png" alt="https://image.iswbm.com/image-20220326130634024.png"></p>
<p>要是加一个 <code v-pre>-v</code> 就可以查看显示每个测试用例的测试结果</p>
<p><img src="https://image.iswbm.com/image-20220326130601941.png" alt="https://image.iswbm.com/image-20220326130601941.png"></p>
<h2 id="_3-子测试用例" tabindex="-1"><a class="header-anchor" href="#_3-子测试用例" aria-hidden="true">#</a> 3. 子测试用例</h2>
<p>如果有很多测试用例，可以用 -run 指定某个某个测试用例</p>
<p><img src="https://image.iswbm.com/image-20220326131019313.png" alt="https://image.iswbm.com/image-20220326131019313.png"></p>
<p>若一个测试用例还可以分为多个子测试用例，比如下边的测试用例分为 foo 和 bar 两个子测试用例</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "testing"
)

func TestReverse(t *testing.T) {
    t.Run("foo", func(t *testing.T) {
        testcases := []struct {
            in, want string
        }{
            {"Hello, foo", "oof ,olleH"},
        }
        for _, tc := range testcases {
            rev := Reverse(tc.in)
            if rev != tc.want {
                    t.Errorf("[foo test]Reverse: %q, want %q", rev, tc.want)
            }
        }
    })

    t.Run("bar", func(t *testing.T) {
        testcases := []struct {
            in, want string
        }{
            {"Hello, bar", "rab ,olleH"},
        }
        for _, tc := range testcases {
            rev := Reverse(tc.in)
            if rev != tc.want {
                    t.Errorf("[bar test] Reverse: %q, want %q", rev, tc.want)
            }
        }
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>-run 主用例/子用例</code> 就可以执行对应的子用例</p>
<p><img src="https://image.iswbm.com/image-20220326133200586.png" alt="https://image.iswbm.com/image-20220326133200586.png"></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '96.md' style='float:left'>⬆️上一节🔗</a><a href = '98.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


