<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第3节-设计规范" tabindex="-1"><a class="header-anchor" href="#第3节-设计规范" aria-hidden="true">#</a> 第3节 设计规范</h1>
<br>
<div><a href = '2.md' style='float:left'>⬆️上一节🔗  </a><a href = '4.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#哪些需要规范">哪些需要规范</router-link></li><li><router-link to="#开源规范">开源规范</router-link><ul><li><router-link to="#开源协议">开源协议</router-link></li><li><router-link to="#开源规范特点">开源规范特点</router-link></li><li><router-link to="#readme-文档">README 文档</router-link></li></ul></li><li><router-link to="#文档规范">文档规范</router-link><ul><li><router-link to="#项目结构">项目结构</router-link></li></ul></li><li><router-link to="#api-接口文档规范">API 接口文档规范</router-link></li><li><router-link to="#版本规范">版本规范</router-link><ul><li><router-link to="#什么是语义化版本规范-semver">什么是语义化版本规范（SemVer）？</router-link></li><li><router-link to="#语义化版本控制规范">语义化版本控制规范</router-link></li><li><router-link to="#如何确定版本号">如何确定版本号？</router-link></li></ul></li><li><router-link to="#commit-规范">Commit 规范</router-link><ul><li><router-link to="#commit-message-的规范有哪些">Commit Message 的规范有哪些？</router-link></li><li><router-link to="#header">Header</router-link></li><li><router-link to="#body">Body</router-link></li><li><router-link to="#footer">Footer</router-link></li><li><router-link to="#revert-commit">Revert Commit</router-link></li><li><router-link to="#commit-相关的-3-个重要内容">Commit 相关的 3 个重要内容</router-link></li><li><router-link to="#合并提交操作示例">合并提交操作示例</router-link></li><li><router-link to="#修改-commit-message">修改 Commit Message</router-link></li></ul></li><li><router-link to="#commit-message-规范自动化">Commit Message 规范自动化</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="哪些需要规范" tabindex="-1"><a class="header-anchor" href="#哪些需要规范" aria-hidden="true">#</a> 哪些需要规范</h2>
<p>一个 Go 项目会涉及很多方面，所以也会有多种规范，同类规范也会因为团队差异而有所不同。所以，在这门课中我只给你讲一些开发中常用的规范。为了便于你记忆，根据是否跟代码相关，我将它们分为非编码类规范和编码类规范：</p>
<ol>
<li>非编码类规范，主要包括开源规范、文档规范、版本规范、Commit 规范和发布规范。</li>
<li>编码类规范，则主要包括目录规范、代码规范、接口规范、日志规范和错误码规范。</li>
</ol>
<p><img src="http://sm.nsddd.top/sm202302162016460.png" alt="image-20230216201601399"></p>
<h2 id="开源规范" tabindex="-1"><a class="header-anchor" href="#开源规范" aria-hidden="true">#</a> 开源规范</h2>
<p><strong>原因：</strong></p>
<ol>
<li>开源项目在代码质量、代码规范、文档等方面，要比非开源项目要求更高，在项目开发中按照开源项目的要求来规范自己的项目，可以更好地驱动项目质量的提高；</li>
<li>一些大公司为了不重复造轮子，会要求公司团队能够将自己的项目开源，所以提前按开源标准来驱动 Go 项目开发，也会为我们日后代码开源省去不少麻烦。</li>
</ol>
<p>一个开源项目一定需要一个开源协议，开源协议规定了你在使用开源软件时的权利和责任，也就是规定了你可以做什么，不可以做什么。所以，开源规范的第一条规范就是选择一个合适的开源协议。那么有哪些开源协议，如何选择呢？接下来，我来详细介绍下。</p>
<h3 id="开源协议" tabindex="-1"><a class="header-anchor" href="#开源协议" aria-hidden="true">#</a> 开源协议</h3>
<p>只有开源项目才会用到开源协议，如果你的项目不准备开源，就用不到 [[开源协议]]。但先了解一下总是没错的，以后总能用得上。</p>
<p>业界有上百种开源协议，每种开源协议的要求不一样，有的协议对使用条件要求比较苛刻，有的则相对比较宽松。我们没必要全都记住，只需要知道经常使用的 6 种开源协议，也就是 GPL、MPL、LGPL、Apache、BSD 和 MIT 就可以了。至于它们的介绍，你可以参考 <a href="https://github.com/marmotedu/geekbang-go/blob/master/%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE%E4%BB%8B%E7%BB%8D.md" target="_blank" rel="noopener noreferrer">开源协议介绍<ExternalLinkIcon/></a> 。</p>
<blockquote>
<ul>
<li><strong>GPL：</strong> General Public License，开源项目最常用的许可证，衍生代码的分发需开源并且也要遵守此协议。该协议也有很多变种，不同变种要求会略微不同。</li>
<li><strong>MPL：</strong> MPL 协议允许免费重发布、免费修改，但要求修改后的代码版权归软件的发起者，这种授权维护了商业软件的利益，它要求基于这种软件的修改无偿贡献版权给该软件。</li>
<li><strong>LGPL：</strong> Lesser General Public Licence，是 GPL 的一个为主要为类库使用设计的开源协议。LGPL 允许商业软件通过类库引用的方式使用 LGPL 类库而不需要开源商业软件的代码。但是如果修改 LGPL 协议的代码或者衍生，则所有修改的代码，涉及修改部分的额外代码和衍生的代码都必须采用 LGPL 协议。</li>
<li><strong>Apache：</strong> Apache 协议是 Apache 软件基金会发布的一个自由软件许可证，Apache 2.0 协议除了为用户提供版权许可之外，还有专利许可，非常适合涉及专利内容的项目。</li>
<li><strong>BSD：</strong> BSD（Berkeley Software Distribution，伯克利软件发行版）。BSD 协议在软件分发方面，除需要包含一份版权提示和免责声明之外，没有任何限制，该协议还禁止用开源代码的作者/机构名字和原来产品的名字做市场推广。</li>
<li><strong>MIT：</strong> 协议的主要内容为：该软件及其相关文档对所有人免费，可以任意处置，包括使用，复制，修改，合并，发表，分发，再授权，或者销售。唯一的限制是，软件中必须包含上述版权和许可提示。MIT 协议是所有开源许可中最宽松的一个，除了必须包含许可声明外，再无任何限制。</li>
</ul>
</blockquote>
<p>那具体如何选择适合自己的开源协议呢？你可以参考乌克兰程序员 Paul Bagwell 画的这张图：</p>
<p><img src="http://sm.nsddd.top/sm202302162018046.png" alt="image-20230216201803996"></p>
<h3 id="开源规范特点" tabindex="-1"><a class="header-anchor" href="#开源规范特点" aria-hidden="true">#</a> 开源规范特点</h3>
<p><strong>一切能让项目变得更优秀的规范，都应该属于开源规范。</strong></p>
<p>开源项目的代码，除了要遵守上面所说的编码类规范和非编码类规范之外，还要遵守下面几个规范。</p>
<ul>
<li>第一，开源项目，应该有一个高的单元覆盖率。这样，一方面可以确保第三方开发者在开发完代码之后，能够很方便地对整个项目做详细的单元测试，另一方面也能保证提交代码的质量。</li>
<li>第二，要确保整个代码库和提交记录中，不能出现内部 IP、内部域名、密码、密钥这类信息。否则，就会造成敏感信息外漏，可能会对我们的内部业务造成安全隐患。</li>
<li>第三，当我们的开源项目被别的开发者提交 pull request、issue、评论时，要及时处理，一方面可以确保项目不断被更新，另一方面也可以激发其他开发者贡献代码的积极性。</li>
<li>第四，好的开源项目，应该能够持续地更新功能，修复 Bug。对于一些已经结项、不维护的开源项目，需要及时地对项目进行归档，并在项目描述中加以说明。</li>
</ul>
<p>最后提醒你两件事：</p>
<ul>
<li>第一件，如果有条件，你可以宣传、运营开源项目，让更多的人知道、使用、贡献代码。比如，你可以在掘金、简书等平台发表文章，也可以创建 QQ、微信交流群等，都是不错的方式。</li>
<li>第二件，如果你英文好、有时间，文档最好有中英文 2 份，优先使用英文，让来自全球的开发者都能了解、使用和参与你的项目。</li>
</ul>
<p><strong>开源详细列表：</strong></p>
<ul>
<li>项目结构：一个开源项目应该有一个合理、专业的、符合语言特色的项目结构。</li>
<li>严格遵循代码规范：开源的代码，面向的人群是所有的开发者，一个不规范的代码，可读性差，不利于其他开发者阅读和贡献代码。</li>
<li>代码质量：开源的代码，一定要保证代码的质量，一个低质量的代码，不仅隐藏了很多性能和功能缺陷，而且还会影响开源项目的品牌，进而影响开源效果。</li>
<li>单元测试覆盖率：一个开源的 Go 项目，要保证整个项目的单元测试覆盖率，这样一方面可以保证代码的质量，另一方面可以使开源项目更专业，也能让你更加安心的发布版本。</li>
<li>版本发布规范：开源项目要遵循既定的版本规范，整个项目的更新迭代，要有版本号，目前用的比较多的是语义化的版本规范。</li>
<li>向下兼容：代码要做到向下兼容，这样可以尽可能减少发布变更的影响，遵循语义化的版本规范，可以在一定程度上保证代码的向下兼容能力。</li>
<li>详细的文档说明：要保证代码能够被其他开发者很容易的阅读和贡献代码，所以不仅要保证文档的质量和数量，还要确保有某些需要的文档：
<ul>
<li>LICENSE（如果是开源项目，LICENSE 是必选的）：软件协议，声明该开源项目遵循什么软件协议。</li>
<li>README.md：README 文件，放在项目的根目录下，包含项目的描述、依赖项、安装方法、使用方法、贡献方法、作者和遵循的软件协议等。</li>
<li>CHANGELOG：目录，用来存放版本的变更历史，方便其他开发者了解新版本或旧版本的变更内容。</li>
<li>Makefile：对于一个复杂的项目，通常也会包含一个 Makefile 文件，用来对项目进行构建、测试、安装等操作。</li>
<li>CONTRIBUTING.md：用来说明如何给本项目贡献代码，包含贡献流程和流程中每个环节的详细操作。</li>
<li>docs：目录，用来存放本项目所有文档，例如：安装文档、使用文档、开发文档等。一些重要的文档，可以链接到项目根目录的 README.md 文档中。这些文档要确保开发者能够轻松的理解、部署和使用该项目。</li>
<li>examples：存放一些示例代码。</li>
</ul>
</li>
<li>安全：开源的代码，要保证整个代码库和提交记录中，不能出现类似内部 IP、内部域名、密码、密钥这类信息。</li>
<li>完善的 examples：完善的 examples，可以帮助用户快速学习和使用开源项目。</li>
<li>好的 Commit Message 记录：开源项目在 commit 时，要遵循一定的规范，这样其他开发者才能够快速浏览和理解变更历史，减小学习成本，本项目遵循 Angular commit message 规范。</li>
<li>发布可用的版本：要确保每一次发布都经过充分的测试，每一个发布的版本都是可用的。</li>
<li>持续的更新：一个好的开源项目，应该能够持续的更新功能，修复 Bug。对于一些已经结项、不维护的开源项目，需要及时的对项目进行归档，并在项目描述中加以说明。</li>
<li>及时的处理 pull request、issue、评论等：当项目被别的开发者提交 pull request、issue、评论时，要及时的处理，一方面可以确保项目不断被更新，另一方面也可以激发其他开发者贡献代码的积极性。</li>
<li>建立讨论小组：如果条件允许，最好和贡献者建立讨论小组，每周或每月组织讨论，共同维护。</li>
<li>做好推广：如果有条件，可以宣传运营开源项目，让更多的人知道，更多的人用，更多的人贡献代码。例如：在掘金、简书等平台发表文章，创建 QQ、微信交流群等。</li>
<li>Git 工作流：选择合适的 Git 工作流，并遵循 GIt 工作流使用规范，例如 Gitflow 工作流。</li>
</ul>
<h3 id="readme-文档" tabindex="-1"><a class="header-anchor" href="#readme-文档" aria-hidden="true">#</a> README 文档</h3>
<p><strong>一个规范：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 项目名称</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 写一段简短的话描述项目 --<span class="token operator">></span>

<span class="token comment">## 功能特性</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 描述该项目的核心功能点 --<span class="token operator">></span>

<span class="token comment">## 软件架构(可选)</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 可以描述下项目的架构 --<span class="token operator">></span>

<span class="token comment">## 快速开始</span>

<span class="token comment">### 依赖检查</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 描述该项目的依赖，比如依赖的包、工具或者其他任何依赖项 --<span class="token operator">></span>

<span class="token comment">### 构建</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 描述如何构建该项目 --<span class="token operator">></span>

<span class="token comment">### 运行</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 描述如何运行该项目 --<span class="token operator">></span>

<span class="token comment">## 使用指南</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 描述如何使用该项目 --<span class="token operator">></span>

<span class="token comment">## 如何贡献</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 告诉其他开发者如果给该项目贡献源码 --<span class="token operator">></span>

<span class="token comment">## 社区(可选)</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 如果有需要可以介绍一些社区相关的内容 --<span class="token operator">></span>

<span class="token comment">## 关于作者</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 这里写上项目作者 --<span class="token operator">></span>

<span class="token comment">## 谁在用(可选)</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 可以列出使用本项目的其他有影响力的项目，算是给项目打个广告吧 --<span class="token operator">></span>

<span class="token comment">## 许可证</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 这里链接上该项目的开源许可证 --<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐一个在线的 README 文档生成网站：</strong></p>
<ul>
<li><a href="https://readme.so" target="_blank" rel="noopener noreferrer">readme.so<ExternalLinkIcon/></a></li>
</ul>
<h2 id="文档规范" tabindex="-1"><a class="header-anchor" href="#文档规范" aria-hidden="true">#</a> 文档规范</h2>
<p>项目文档包括一切需要文档化的内容，它们通常集中放在 /docs 目录下。当我们在创建团队的项目文档时，通常会预先规划并创建好一些目录，用来存放不同的文档。因此，在开始 Go 项目开发之前，我们也要制定一个软件文档规范。好的文档规范有 2 个优点：易读和可以快速定位文档。</p>
<p>不同项目有不同的文档需求，在制定文档规范时，你可以考虑包含两类文档。</p>
<ul>
<li>开发文档：用来说明项目的开发流程，比如如何搭建开发环境、构建二进制文件、测试、部署等。</li>
<li>用户文档：软件的使用文档，对象一般是软件的使用者，内容可根据需要添加。比如，可以包括 API 文档、SDK 文档、安装文档、功能介绍文档、最佳实践、操作指南、常见问题等。</li>
</ul>
<p>为了方便全球开发者和用户使用，开发文档和用户文档，可以预先规划好英文和中文 2 个版本。</p>
<p>为了加深你的理解，这里我们来看下实战项目的文档目录结构：</p>
<h3 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
docs
├── devel                            <span class="token comment"># 开发文档，可以提前规划好，英文版文档和中文版文档</span>
│   ├── en-US/                       <span class="token comment"># 英文版文档，可以根据需要组织文件结构</span>
│   └── zh-CN                        <span class="token comment"># 中文版文档，可以根据需要组织文件结构</span>
│       └── development.md           <span class="token comment"># 开发手册，可以说明如何编译、构建、运行项目</span>
├── guide                            <span class="token comment"># 用户文档</span>
│   ├── en-US/                       <span class="token comment"># 英文版文档，可以根据需要组织文件结构</span>
│   └── zh-CN                        <span class="token comment"># 中文版文档，可以根据需要组织文件结构</span>
│       ├── api/                     <span class="token comment"># API文档</span>
│       ├── best-practice            <span class="token comment"># 最佳实践，存放一些比较重要的实践文章</span>
│       │   └── authorization.md
│       ├── faq                      <span class="token comment"># 常见问题</span>
│       │   ├── iam-apiserver
│       │   └── installation
│       ├── installation             <span class="token comment"># 安装文档</span>
│       │   └── installation.md
│       ├── introduction/            <span class="token comment"># 产品介绍文档</span>
│       ├── operation-guide          <span class="token comment"># 操作指南，里面可以根据RESTful资源再划分为更细的子目录，用来存放系统核心/全部功能的操作手册</span>
│       │   ├── policy.md
│       │   ├── secret.md
│       │   └── user.md
│       ├── quickstart               <span class="token comment"># 快速入门</span>
│       │   └── quickstart.md
│       ├── README.md                <span class="token comment"># 用户文档入口文件</span>
│       └── sdk                      <span class="token comment"># SDK文档</span>
│           └── golang.md
└── images                           <span class="token comment"># 图片存放目录</span>
    └── 部署架构v1.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-接口文档规范" tabindex="-1"><a class="header-anchor" href="#api-接口文档规范" aria-hidden="true">#</a> API 接口文档规范</h2>
<p>接口文档又称为 API 文档，一般由后台开发人员编写，用来描述组件提供的 API 接口，以及如何调用这些 API 接口。</p>
<p>在项目初期，接口文档可以解耦前后端，让前后端并行开发：前端只需要按照接口文档实现调用逻辑，后端只需要按照接口文档提供功能。</p>
<p>当前后端都开发完成之后，我们就可以直接进行联调，提高开发效率。在项目后期，接口文档可以提供给使用者，不仅可以降低组件的使用门槛，还能够减少沟通成本。</p>
<p>接口文档有四种编写方式，包括编写 Word 格式文档、借助工具编写、通过注释生成和编写 Markdown 格式文档。具体的实现方式见下表：</p>
<p><img src="http://sm.nsddd.top/sm202302162048445.png" alt="image-20230216204817373"></p>
<p><strong>其中，通过注释生成和编写 Markdown 格式文档这 2 种方式用得最多。</strong></p>
<ul>
<li>相比通过注释生成的方式，编写 Markdown 格式的接口文档，能表达更丰富的内容和格式，不需要在代码中添加大量注释。</li>
<li>相比 Word 格式的文档，Markdown 格式文档占用的空间更小，能够跟随代码仓库一起发布，方便 API 文档的分发和查找。</li>
<li>相比在线 API 文档编写工具，Markdown 格式的文档免去了第三方平台依赖和网络的限制。</li>
</ul>
<p>API 接口文档又要遵循哪些规范呢？其实，一个规范的 API 接口文档，通常需要包含一个完整的 API 接口介绍文档、API 接口变更历史文档、通用说明、数据结构说明、错误码描述和 API 接口使用文档。API 接口使用文档中需要包含接口描述、请求方法、请求参数、输出参数和请求示例。</p>
<p>接口文档拆分为以下几个 Markdown 文件，并存放在目录 <code v-pre>docs/guide/zh-CN/api</code> 中：</p>
<ul>
<li>README.md ：API 接口介绍文档，会分类介绍 IAM 支持的 API 接口，并会存放相关 API 接口文档的链接，方便开发者查看。</li>
<li>CHANGELOG.md ：API 接口文档变更历史，方便进行历史回溯，也可以使调用者决定是否进行功能更新和版本更新。</li>
<li>generic.md ：用来说明通用的请求参数、返回参数、认证方法和请求方法等。</li>
<li>struct.md ：用来列出接口文档中使用的数据结构。这些数据结构可能被多个 API 接口使用，会在 user.md、secret.md、policy.md 文件中被引用。</li>
<li>user.md 、 secret.md 、 policy.md ：API 接口文档，相同 REST 资源的接口会存放在一个文件中，以 REST 资源名命名文档名。</li>
<li>error_code.md ：错误码描述，通过程序自动生成。</li>
</ul>
<p>这里我拿 user.md 接口文档为例，和你解释下接口文档是如何写的。user.md 文件记录了用户相关的接口，每个接口按顺序排列，包含如下 5 部分。</p>
<ul>
<li>接口描述：描述接口实现了什么功能。</li>
<li>请求方法：接口的请求方法，格式为 HTTP 方法 请求路径，例如 POST /v1/users。在 通用说明中的请求方法部分，会说明接口的请求协议和请求地址。</li>
<li>输入参数：接口的输入字段，它又分为 Header 参数、Query 参数、Body 参数、Path 参数。每个字段通过：参数名称、必选、类型 和 描述 4 个属性来描述。如果参数有限制或者默认值，可以在描述部分注明。</li>
<li>输出参数：接口的返回字段，每个字段通过 参数名称、类型 和 描述 3 个属性来描述。</li>
<li>请求示例：一个真实的 API 接口请求和返回示例。如果掌握了这些内容之后，你还想了解更详细的 API 接口文档规范，可以参考这个 <a href="https://github.com/marmotedu/iam/tree/master/docs/guide/zh-CN/api" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a> 。</li>
</ul>
<h2 id="版本规范" tabindex="-1"><a class="header-anchor" href="#版本规范" aria-hidden="true">#</a> 版本规范</h2>
<p>在做 Go 项目开发时，我建议你把所有组件都加入版本机制。原因主要有两个：</p>
<ul>
<li>一是通过版本号，我们可以很明确地知道组件是哪个版本，从而定位到该组件的功能和代码，方便我们定位问题。</li>
<li>二是发布组件时携带版本号，可以让使用者知道目前的项目进度，以及使用版本和上一个版本的功能差别等。</li>
</ul>
<p>目前业界主流的版本规范是语义化版本规范，也是 IAM 系统采用的版本规范。那什么是语义化版本规范呢？</p>
<h3 id="什么是语义化版本规范-semver" tabindex="-1"><a class="header-anchor" href="#什么是语义化版本规范-semver" aria-hidden="true">#</a> 什么是语义化版本规范（SemVer）？</h3>
<p>语义化版本规范（SemVer，Semantic Versioning）是 GitHub 起草的一个具有指导意义的、统一的版本号表示规范。它规定了版本号的表示、增加和比较方式，以及不同版本号代表的含义。</p>
<p>在这套规范下，版本号及其更新方式包含了相邻版本间的底层代码和修改内容的信息。语义化版本格式为：<strong>主版本号.次版本号.修订号</strong>（X.Y.Z），其中 X、Y 和 Z 为非负的整数，且禁止在数字前方补零。</p>
<p><strong>版本号可按以下规则递增：</strong></p>
<ul>
<li>主版本号（MAJOR）：当做了不兼容的 API 修改。</li>
<li>次版本号（MINOR）：当做了向下兼容的功能性新增及修改。这里有个不成文的约定需要你注意，<strong>偶数为稳定版本，奇数为开发版本。</strong></li>
<li><strong>修订号（PATCH）</strong>：当做了向下兼容的问题修正。</li>
</ul>
<p>例如，v1.2.3 是一个语义化版本号，版本号中每个数字的具体含义见下图：</p>
<p><img src="http://sm.nsddd.top/sm202302162107454.png" alt="image-20230216210737375"></p>
<p>你可能还看过这么一种版本号：<code v-pre>v1.2.3-alpha</code>。这其实是把先行版本号（Pre-release）和版本编译元数据，作为延伸加到了主版本号.次版本号.修订号的后面，格式为 <code v-pre>X.Y.Z[-先行版本号][+版本编译元数据]</code>，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302162108985.png" alt="image-20230216210806930"></p>
<p>我们来分别看下先行版本号和版本编译元数据是什么意思。先行版本号意味着，该版本不稳定，可能存在兼容性问题，</p>
<p>格式为：<code v-pre>X.Y.Z-[一连串以句点分隔的标识符] </code>，比如下面这几个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1.0</span>.0-alpha
<span class="token number">1.0</span>.0-alpha.1
<span class="token number">1.0</span>.0-0.3.7
<span class="token number">1.0</span>.0-x.7.z.92
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译版本号，一般是编译器在编译过程中自动生成的，**我们只定义其格式，并不进行人为控制。**下面是一些编译版本号的示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1.0</span>.0-alpha+001
<span class="token number">1.0</span>.0+20130313144700
<span class="token number">1.0</span>.0-beta+exp.sha.5114f85
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，先行版本号和编译版本号只能是字母、数字，且不可以有空格。</p>
<h3 id="语义化版本控制规范" tabindex="-1"><a class="header-anchor" href="#语义化版本控制规范" aria-hidden="true">#</a> 语义化版本控制规范</h3>
<p>语义化版本控制规范比较多，这里我给你介绍几个比较重要的。如果你需要了解更详细的规范，可以参考 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">这个链接<ExternalLinkIcon/></a> 的内容。</p>
<ul>
<li>标记版本号的软件发行后，禁止改变该版本软件的内容，任何修改都必须以新版本发行。</li>
<li>主版本号为零（0.y.z）的软件处于开发初始阶段，一切都可能随时被改变，这样的公共 API 不应该被视为稳定版。1.0.0 的版本号被界定为第一个稳定版本，之后的所有版本号更新都基于该版本进行修改。</li>
<li>修订号 Z（x.y.Z | x &gt; 0）必须在只做了向下兼容的修正时才递增，这里的修正其实就是 Bug 修复。</li>
<li>次版本号 Y（x.Y.z | x &gt; 0）必须在有向下兼容的新功能出现时递增，在任何公共 API 的功能被标记为弃用时也必须递增，当有改进时也可以递增。其中可以包括修订级别的改变。每当次版本号递增时，修订号必须归零。</li>
<li>主版本号 X（X.y.z | X &gt; 0）必须在有任何不兼容的修改被加入公共 API 时递增。其中可以包括次版本号及修订级别的改变。每当主版本号递增时，次版本号和修订号必须归零。</li>
</ul>
<h3 id="如何确定版本号" tabindex="-1"><a class="header-anchor" href="#如何确定版本号" aria-hidden="true">#</a> 如何确定版本号？</h3>
<p>这里我给你总结了这么几个经验：</p>
<ul>
<li>第一，在实际开发的时候，我建议你使用 0.1.0 作为第一个开发版本号，并在后续的每次发行时递增次版本号。</li>
<li>第二，当我们的版本是一个稳定的版本，并且第一次对外发布时，版本号可以定为 1.0.0。</li>
<li>第三，当我们严格按照 Angular commit message 规范提交代码时，版本号可以这么来确定：
<ul>
<li>fix 类型的 commit 可以将修订号 +1。</li>
<li>feat 类型的 commit 可以将次版本号 +1。</li>
<li>带有 BREAKING CHANGE 的 commit 可以将主版本号 +1。</li>
</ul>
</li>
</ul>
<h2 id="commit-规范" tabindex="-1"><a class="header-anchor" href="#commit-规范" aria-hidden="true">#</a> Commit 规范</h2>
<p>一个好的 Commit Message 至关重要：</p>
<ol>
<li>可以使自己或者其他开发人员能够清晰地知道每个 commit 的变更内容，方便快速浏览变更历史，比如可以直接略过文档类型或者格式化类型的代码变更。</li>
<li>可以基于这些 <code v-pre>Commit Message</code> 进行过滤查找，比如只查找某个版本新增的功能：<code v-pre>git log --oneline --grep &quot;^feat|^fix|^perf&quot;</code>。</li>
<li>可以基于规范化的 <code v-pre>Commit Message</code> 生成 <code v-pre>Change Log</code>。</li>
<li>可以依据某些类型的 <code v-pre>Commit Message</code> 触发构建或者发布流程，比如当 type 类型为 feat、fix 时我们才触发 CI 流程。</li>
<li>确定语义化版本的版本号。比如 fix 类型可以映射为 PATCH 版本，feat 类型可以映射为 MINOR 版本。带有 BREAKING CHANGE 的 commit，可以映射为 MAJOR 版本。在这门课里，我就是通过这种方式来自动生成版本号。</li>
</ol>
<h3 id="commit-message-的规范有哪些" tabindex="-1"><a class="header-anchor" href="#commit-message-的规范有哪些" aria-hidden="true">#</a> Commit Message 的规范有哪些？</h3>
<p>Angular 规范在功能上能够满足开发者 commit 需求，在格式上清晰易读，目前也是用得最多的。</p>
<p>Angular 规范其实是一种语义化的提交规范（Semantic Commit Messages），所谓语义化的提交规范包含以下内容：</p>
<ul>
<li>Commit Message 是语义化的：Commit Message 都会被归为一个有意义的类型，用来说明本次 commit 的类型。</li>
<li>Commit Message 是规范化的：Commit Message 遵循预先定义好的规范，比如 Commit Message 格式固定、都属于某个类型，这些规范不仅可被开发者识别也可以被工具识别。</li>
</ul>
<p><strong>那我们该怎么写出符合 Angular 规范的 Commit Message 呢？</strong></p>
<p>在 Angular 规范中，Commit Message 包含三个部分，分别是 Header、Body 和 Footer，格式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token operator">&lt;</span><span class="token keyword">type</span><span class="token operator">></span><span class="token punctuation">[</span>optional scope<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">&lt;</span>description<span class="token operator">></span>
<span class="token comment">// 空行-</span>
<span class="token punctuation">[</span>optional body<span class="token punctuation">]</span>
<span class="token comment">// 空行</span>
<span class="token punctuation">[</span>optional <span class="token function">footer</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**其中，Header 是必需的，Body 和 Footer 可以省略。 ** 在以上规范中，必须用括号 () 括起来， [] 后必须紧跟冒号 ，冒号后必须紧跟空格，2 个空行也是必需的。</p>
<p>在实际开发中，为了使 Commit Message 在 GitHub 或者其他 Git 工具上更加易读，我们往往会限制每行 message 的长度。根据需要，可以限制为 50/72/100 个字符，这里我将长度限制在 72 个字符以内（也有一些开发者会将长度限制为 100，你可根据需要自行选择）。</p>
<p><strong>以下是一个符合 Angular 规范的 Commit Message：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>fix<span class="token punctuation">(</span><span class="token variable">$compile</span><span class="token punctuation">)</span>: couple of unit tests <span class="token keyword">for</span> IE9
<span class="token comment"># Please enter the Commit Message for your changes. Lines starting</span>
<span class="token comment"># with '#' will be ignored, and an empty message aborts the commit.</span>
<span class="token comment"># On branch master</span>
<span class="token comment"># Changes to be committed:</span>
<span class="token comment"># ...</span>

Older IEs serialize html uppercased, but IE9 does not<span class="token punctuation">..</span>.
Would be better to <span class="token function">expect</span> <span class="token keyword">case</span> insensitive, unfortunately jasmine does
not allow to user regexps <span class="token keyword">for</span> throw expectations.

Closes <span class="token comment">#392</span>
Breaks foo.bar api, foo.baz should be used instead
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<p>Header 部分只有一行，包括三个字段：type（必选）、scope（可选）和 subject（必选）。</p>
<h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4>
<p>我们先来说 type，它用来说明 commit 的类型。为了方便记忆，我把这些类型做了归纳，它们主要可以归为 Development 和 Production 共两类。它们的含义是：</p>
<ul>
<li>Development：这类修改一般是项目管理类的变更，不会影响最终用户和生产环境的代码，比如 CI 流程、构建方式等的修改。遇到这类修改，通常也意味着可以免测发布。</li>
<li>Production：这类修改会影响最终的用户和生产环境的代码。所以对于这种改动，我们一定要慎重，并在提交前做好充分的测试。</li>
</ul>
<p>我在这里列出了 Angular 规范中的常见 type 和它们所属的类别，你在提交 Commit Message 的时候，一定要注意区分它的类别。举个例子，我们在做 Code Review 时，如果遇到 Production 类型的代码，一定要认真 Review，因为这种类型，会影响到现网用户的使用和现网应用的功能。</p>
<p><img src="http://sm.nsddd.top/sm202302162131312.png" alt="image-20230216213135207"></p>
<p>有这么多 type，我们该如何确定一个 commit 所属的 type 呢？这里我们可以通过下面这张图来确定。</p>
<p><img src="http://sm.nsddd.top/sm202302162132745.png" alt="image-20230216213207684"></p>
<p>如果我们变更了应用代码，比如某个 Go 函数代码，那这次修改属于代码类。在代码类中，有 4 种具有明确变更意图的类型：feat、fix、perf 和 style；如果我们的代码变更不属于这 4 类，那就全都归为 refactor 类，也就是优化代码。</p>
<p>如果我们变更了非应用代码，例如更改了文档，那它属于非代码类。在非代码类中，有 3 种具有明确变更意图的类型：test、ci、docs；如果我们的非代码变更不属于这 3 类，那就全部归入到 chore 类。</p>
<p>Angular 的 Commit Message 规范提供了大部分的 type，在实际开发中，我们可以使用部分 type，或者扩展添加我们自己的 type。但无论选择哪种方式，我们一定要保证一个项目中的 type 类型一致。</p>
<h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> scope</h4>
<p><strong>接下来，我们说说 Header 的第二个字段 scope。</strong></p>
<p>scope 是用来说明 commit 的影响范围的，它必须是名词。显然，不同项目会有不同的 scope。在项目初期，我们可以设置一些粒度比较大的 scope，比如可以按组件名或者功能来设置 scope；后续，如果项目有变动或者有新功能，我们可以再用追加的方式添加新的 scope。</p>
<p>这里想强调的是，scope 不适合设置太具体的值。太具体的话，一方面会导致项目有太多的 scope，难以维护。另一方面，开发者也难以确定 commit 属于哪个具体的 scope，导致错放 scope，反而会使 scope 失去了分类的意义。</p>
<p>当然了，在指定 scope 时，也需要遵循我们预先规划的 scope，所以我们要将 scope 文档化，放在类似 devel 这类文档中。这一点你可以参考下 IAM 项目的 scope 文档： <a href="https://github.com/marmotedu/iam/blob/master/docs/devel/zh-CN/scope.md" target="_blank" rel="noopener noreferrer">IAM commit message scope<ExternalLinkIcon/></a> 。</p>
<h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h4>
<p>subject 是 commit 的简短描述，必须以动词开头、使用现在时。比如，我们可以用 change，却不能用 changed 或 changes，而且这个动词的第一个字母必须是小写。通过这个动词，我们可以明确地知道 commit 所执行的操作。此外我们还要注意，subject 的结尾不能加英文句号。</p>
<h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h3>
<p>Header 对 commit 做了高度概括，可以方便我们查看 Commit Message。那我们如何知道具体做了哪些变更呢？答案就是，可以通过 Body 部分，它是对本次 commit 的更详细描述，是可选的。</p>
<p>Body 部分可以分成多行，而且格式也比较自由。不过，和 Header 里的一样，它也要以动词开头，使用现在时。此外，它还必须要包括修改的动机，以及和跟上一版本相比的改动点。</p>
<p>我在下面给出了一个范例，你可以看看：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>The body is mandatory <span class="token keyword">for</span> all commits except <span class="token keyword">for</span> those of scope <span class="token string">"docs"</span><span class="token builtin class-name">.</span> When the body is required it must be at least <span class="token number">20</span> characters long.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> Footer</h3>
<p>Footer 部分不是必选的，可以根据需要来选择，主要用来说明本次 commit 导致的后果。在实际应用中，Footer 通常用来说明不兼容的改动和关闭的 Issue 列表，格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
BREAKING CHANGE: <span class="token operator">&lt;</span>breaking change summary<span class="token operator">></span>
// 空行
<span class="token operator">&lt;</span>breaking change description + migration instructions<span class="token operator">></span>
// 空行
// 空行
Fixes <span class="token comment">#&lt;issue number></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>接下来，我给你详细说明下这两种情况：</strong></p>
<ul>
<li>
<p>不兼容的改动：如果当前代码跟上一个版本不兼容，需要在 Footer 部分，以 BREAKING CHANG: 开头，后面跟上不兼容改动的摘要。Footer 的其他部分需要说明变动的描述、变动的理由和迁移方法，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option <span class="token keyword">for</span> the directive controller injection was removed.

    To migrate the code follow the example below:

    Before:

    scope: <span class="token punctuation">{</span>
      myAttr: <span class="token string">'attribute'</span>,
    <span class="token punctuation">}</span>

    After:

    scope: <span class="token punctuation">{</span>
      myAttr: <span class="token string">'@'</span>,
    <span class="token punctuation">}</span>
    The removed <span class="token variable"><span class="token variable">`</span>inject<span class="token variable">`</span></span> wasn't generaly useful <span class="token keyword">for</span> directives so there should be no code using it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>关闭的 Issue 列表：关闭的 Bug 需要在 Footer 部分新建一行，并以 Closes 开头列出，例如：<code v-pre>Closes #123</code>。如果关闭了多个 Issue，可以这样列出：<code v-pre>Closes #123, #432, #886</code>。例如:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> Change pause version value to a constant <span class="token keyword">for</span> image
    
    Closes <span class="token comment">#1137</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="revert-commit" tabindex="-1"><a class="header-anchor" href="#revert-commit" aria-hidden="true">#</a> Revert Commit</h3>
<p>除了 Header、Body 和 Footer 这 3 个部分，Commit Message 还有一种特殊情况：如果当前 commit 还原了先前的 commit，则应以 <code v-pre>revert:</code> 开头，后跟还原的 commit 的 Header。而且，在 Body 中必须写成 This reverts commit ，其中 hash 是要还原的 commit 的 SHA 标识。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>revert: feat<span class="token punctuation">(</span>iam-apiserver<span class="token punctuation">)</span>: <span class="token function">add</span> <span class="token string">'Host'</span> option

This reverts commit 079360c7cfc830ea8a6e13f4c8b8114febc9b48a.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了更好地遵循 Angular 规范，建议你在提交代码时养成不用 <code v-pre>git commit -m</code>，即不用 -m 选项的习惯，而是直接用 <code v-pre>git commit</code> 或者 <code v-pre>git commit -a</code> 进入交互界面编辑 Commit Message。这样可以更好地格式化 Commit Message。</p>
<h3 id="commit-相关的-3-个重要内容" tabindex="-1"><a class="header-anchor" href="#commit-相关的-3-个重要内容" aria-hidden="true">#</a> Commit 相关的 3 个重要内容</h3>
<p>但是除了 Commit Message 规范之外，在代码提交时，我们还需要关注 3 个重点内容：提交频率、合并提交和 Commit Message 修改。</p>
<h4 id="提交频率" tabindex="-1"><a class="header-anchor" href="#提交频率" aria-hidden="true">#</a> 提交频率</h4>
<p>如果是多人开发的项目，随意 commit 不仅会让 Commit Message 变得难以理解，还会让其他研发同事觉得你不专业。因此，我们要规定 commit 的提交频率。</p>
<ul>
<li>一种情况是，只要我对项目进行了修改，一通过测试就立即 commit。比如修复完一个 bug、开发完一个小功能，或者开发完一个完整的功能，测试通过后就提交。</li>
<li>另一种情况是，我们规定一个时间，定期提交。这里我建议代码下班前固定提交一次，并且要确保本地未提交的代码，延期不超过 1 天。这样，如果本地代码丢失，可以尽可能减少丢失的代码量。</li>
</ul>
<p>按照上面 2 种方式提交代码，你可能会觉得代码 commit 比较多，看起来比较随意。或者说，我们想等开发完一个完整的功能之后，放在一个 commit 中一起提交。这时候，我们可以在最后合并代码或者提交 Pull Request 前，执行 <code v-pre>git rebase -i</code> 合并之前的所有 commit。</p>
<h4 id="合并提交" tabindex="-1"><a class="header-anchor" href="#合并提交" aria-hidden="true">#</a> 合并提交</h4>
<p>合并提交，就是将多个 commit 合并为一个 commit 提交。这里，我建议你把新的 commit 合并到主干时，只保留 2~3 个 commit 记录。那具体怎么做呢？</p>
<p>在 Git 中，我们主要使用 git rebase 命令来合并。git rebase 也是我们日后开发需要经常使用的一个命令，所以我们一定要掌握好它的使用方法。</p>
<p><strong>git rebase 命令介绍：</strong></p>
<p>git rebase 的最大作用是它可以重写历史。</p>
<p>我们通常会通过 <code v-pre>git rebase -i</code> 使用 git rebase 命令，-i 参数表示交互（interactive），该命令会进入到一个交互界面中，其实就是 Vim 编辑器。在该界面中，我们可以对里面的 commit 做一些操作，交互界面如图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302162152678.png" alt="image-20230216215218600"></p>
<p>这个交互界面会首先列出给定之前（不包括，越下面越新）的所有 commit，每个 commit 前面有一个操作命令，默认是 pick。我们可以选择不同的 commit，并修改 commit 前面的命令，来对该 commit 执行不同的变更操作。</p>
<p><strong>git rebase 支持的变更操作如下：</strong></p>
<p><img src="http://sm.nsddd.top/sm202302162152795.png" alt="image-20230216215246718"></p>
<p>在上面的 7 个命令中，squash 和 fixup 可以用来合并 commit。例如用 squash 来合并，我们只需要把要合并的 commit 前面的动词，改成 squash（或者 s）即可。你可以看看下面的示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pick 07c5abd Introduce OpenPGP and teach basic usage
s de9b1eb Fix PostChecker::Post<span class="token comment">#urls</span>
s 3e7ee36 Hey kids, stop all the highlighting
pick fa20af3 <span class="token function">git</span> interactive rebase, squash, amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rebase 后，第 2 行和第 3 行的 commit 都会合并到第 1 行的 commit。这个时候，我们提交的信息会同时包含这三个 commit 的提交信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token comment"># This is a combination of 3 commits.</span>
<span class="token comment"># The first commit's message is:</span>
Introduce OpenPGP and teach basic usage

<span class="token comment"># This is the 2ndCommit Message:</span>
Fix PostChecker::Post<span class="token comment">#urls</span>

<span class="token comment"># This is the 3rdCommit Message:</span>
Hey kids, stop all the highlighting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们将第 3 行的 squash 命令改成 fixup 命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
pick 07c5abd Introduce OpenPGP and teach basic usage
s de9b1eb Fix PostChecker::Post<span class="token comment">#urls</span>
f 3e7ee36 Hey kids, stop all the highlighting
pick fa20af3 <span class="token function">git</span> interactive rebase, squash, amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rebase 后，还是会生成两个 commit，第 2 行和第 3 行的 commit，都合并到第 1 行的 commit。但是，新的提交信息里面，第 3 行 commit 的提交信息会被注释掉：</p>
<p><strong>除此之外，我们在使用 git rebase 进行操作的时候，还需要注意以下几点：</strong></p>
<ul>
<li>删除某个 commit 行，则该 commit 会丢失掉。</li>
<li>删除所有的 commit 行，则 rebase 会被终止掉。</li>
<li>可以对 commits 进行排序，git 会从上到下进行合并。</li>
</ul>
<h3 id="合并提交操作示例" tabindex="-1"><a class="header-anchor" href="#合并提交操作示例" aria-hidden="true">#</a> 合并提交操作示例</h3>
<p>假设我们需要研发一个新的模块：user，用来在平台里进行用户的注册、登录、注销等操作，当模块完成开发和测试后，需要合并到主干分支，具体步骤如下。</p>
<p>首先，我们新建一个分支。我们需要先基于 master 分支新建并切换到 featu</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature/user
Switched to a new branch <span class="token string">'feature/user'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是我们的所有 commit 历史：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
7157e9e docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update3'</span> to README.md
5a26aa2 docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update2'</span> to README.md
55892fa docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update1'</span> to README.md
89651d4 docs<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>: <span class="token function">add</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，我们在 feature/user分支进行功能的开发和测试，并遵循规范提交 commit，功能开发并测试完成后，Git 仓库的 commit 记录如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
4ee51d6 docs<span class="token punctuation">(</span>user<span class="token punctuation">)</span>: update user/README.md
176ba5d docs<span class="token punctuation">(</span>user<span class="token punctuation">)</span>: update user/README.md
5e829f8 docs<span class="token punctuation">(</span>user<span class="token punctuation">)</span>: <span class="token function">add</span> README.md <span class="token keyword">for</span> user
f40929f feat<span class="token punctuation">(</span>user<span class="token punctuation">)</span>: <span class="token function">add</span> delete user <span class="token keyword">function</span>
fc70a21 feat<span class="token punctuation">(</span>user<span class="token punctuation">)</span>: <span class="token function">add</span> create user <span class="token keyword">function</span>
7157e9e docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update3'</span> to README.md
5a26aa2 docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update2'</span> to README.md
55892fa docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update1'</span> to README.md
89651d4 docs<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>: <span class="token function">add</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我们提交了 5 个 commit。接下来，我们需要将 feature/user分支的改动合并到 master 分支，但是 5 个 commit 太多了，我们想将这些 commit 合并后再提交到 master 分支。</p>
<p>接着，我们合并所有 commit。在上一步中，我们知道 <code v-pre>fc70a21</code>是 feature/user分支的第一个 commit ID，其父 commit ID 是 <code v-pre>7157e9e</code>，我们需要将<code v-pre>7157e9e</code>之前的所有分支 进行合并，这时我们可以执行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> 7157e9e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令后，我们会进入到一个交互界面，在该界面中，我们可以将需要合并的 4 个 commit，都执行 squash 操作，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302162206948.png" alt="image-20230216220652890"></p>
<p>修改完成后执行:wq 保存，会跳转到一个新的交互页面，在该页面，我们可以编辑 Commit Message，编辑后的内容如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302162208078.png" alt="image-20230216220820024"></p>
<p>#开头的行是 git 的注释，我们可以忽略掉，在 rebase 后，这些行将会消失掉。修改完成后执行<code v-pre>:wq</code> 保存，就完成了合并提交操作。</p>
<p><strong>除此之外，这里有 2 个点需要我们注意：</strong></p>
<ul>
<li>git rebase -i 这里的一定要是需要合并 commit 中最旧 commit 的父 commit ID。</li>
<li>我们希望将 feature/user 分支的 5 个 commit 合并到一个 commit，在 git rebase 时，需要保证其中最新的一个 commit 是 pick 状态，这样我们才可以将其他 4 个 commit 合并进去。</li>
</ul>
<p>然后，我们用如下命令来检查 commits 是否成功合并。可以看到，我们成功将 5 个 commit 合并成为了一个 commit：<code v-pre>d6b17e0</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
d6b17e0 feat<span class="token punctuation">(</span>user<span class="token punctuation">)</span>: <span class="token function">add</span> user module with all <span class="token keyword">function</span> implements
7157e9e docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update3'</span> to README.md
5a26aa2 docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update2'</span> to README.md
55892fa docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update1'</span> to README.md
89651d4 docs<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>: <span class="token function">add</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，我们就可以将 feature 分支 feature/user 的改动合并到主干分支，从而完成新功能的开发。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
$ <span class="token function">git</span> merge feature/user
$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
d6b17e0 feat<span class="token punctuation">(</span>user<span class="token punctuation">)</span>: <span class="token function">add</span> user module with all <span class="token keyword">function</span> implements
7157e9e docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update3'</span> to README.md
5a26aa2 docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update2'</span> to README.md
55892fa docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update1'</span> to README.md
89651d4 docs<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>: <span class="token function">add</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里给你一个小提示，如果你有太多的 commit 需要合并，那么可以试试这种方式：先撤销过去的 commit，然后再建一个新的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> reset HEAD~3
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">"feat(user): add user resource"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明一点：除了 commit 实在太多的时候，一般情况下我不建议用这种方法，有点粗暴，而且之前提交的 Commit Message 都要重新整理一遍。</p>
<h3 id="修改-commit-message" tabindex="-1"><a class="header-anchor" href="#修改-commit-message" aria-hidden="true">#</a> 修改 Commit Message</h3>
<p>即使我们有了 Commit Message 规范，但仍然可能会遇到提交的 Commit Message 不符合规范的情况，这个时候就需要我们能够修改之前某次 commit 的 Commit Message。</p>
<p>具体来说，我们有两种修改方法，分别对应两种不同情况：</p>
<ul>
<li><code v-pre>git commit --amend</code>：修改最近一次 commit 的 message；</li>
<li><code v-pre>git rebase -i</code>：修改某次 commit 的 message。</li>
</ul>
<p><strong>git commit --amend：修改最近一次 commit 的 message</strong></p>
<p>有时候，我们刚提交完一个 commit，但是发现 commit 的描述不符合规范或者需要纠正，这时候，我们可以通过 <code v-pre>git commit --amend</code> 命令来修改刚刚提交 commit 的 Commit Message。具体修改步骤如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log –oneline
418bd4 docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update$i'</span> to README.md
89651d4 docs<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>: <span class="token function">add</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，最近一次的 Commit Message 是 <code v-pre>docs(docs): append test line 'update$i' to README.md</code>，其中 <code v-pre>update$i</code> 正常应该是 update1。</p>
<p><img src="http://sm.nsddd.top/sm202302162213838.png" alt="image-20230216221259985"></p>
<p>修改完成后执行:wq 保存，退出编辑器之后，会在命令行显示，该 commit 的 message 的更新结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>master 55892fa<span class="token punctuation">]</span> docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update1'</span> to README.md
 Date: Fri Sep <span class="token number">18</span> <span class="token number">13</span>:40:42 <span class="token number">2020</span> +0800
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看最近一次的 Commit Message 是否被更新:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
55892fa docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update1'</span> to README.md
89651d4 docs<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>: <span class="token function">add</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到最近一次 commit 的 message 成功被修改为期望的内容。</p>
<p><strong>git rebase -i：修改某次 commit 的 message</strong></p>
<p>如果我们想修改的 Commit Message 不是最近一次的 Commit Message，可以通过 <code v-pre>git rebase -i &lt;父 commit ID&gt;</code>命令来修改。这个命令在实际开发中使用频率比较高，我们一定要掌握。具体来说，使用它主要分为 4 步。</p>
<ol>
<li>
<p>查看当前分支的日志记录。<code v-pre>git log --oneline</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
1d6289f docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update3'</span> to README.md
a38f808 docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update$i'</span> to README.md
55892fa docs<span class="token punctuation">(</span>docs<span class="token punctuation">)</span>: append <span class="token builtin class-name">test</span> line <span class="token string">'update1'</span> to README.md
89651d4 docs<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>: <span class="token function">add</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改倒数第 3 次提交 commit 的 message。<code v-pre>git rebase -i 倒数第三次 hash</code></p>
<p>然后会进入一个交互界面。在交互界面中，修改最近一次的 Commit Message。这里我们使用 reword 或者 r，保留倒数第 3 次的变更信息，但是修改其 message，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302162218248.png" alt="image-20230216221800182"></p>
<p>修改完成后执行:wq 保存，还会跳转到一个新的交互页面，如下图所示</p>
<p><img src="http://sm.nsddd.top/sm202302162218931.png" alt="image-20230216221817875"></p>
</li>
<li>
<p>查看倒数第 3 次 commit 的 message 是否被更新。<code v-pre>git log --oneline</code></p>
</li>
</ol>
<p><strong>这里有两点需要你注意：</strong></p>
<ol>
<li>Commit Message 是 commit 数据结构中的一个属性，如果 Commit Message 有变更，则 commit ID 一定会变，git commit --amend 只会变更最近一次的 commit ID，但是 git rebase -i 会变更父 commit ID 之后所有提交的 commit ID。</li>
<li>如果当前分支有未 commit 的代码，需要先执行 git stash 将工作状态进行暂存，当修改完成后再执行 <code v-pre>git stash pop</code> 恢复之前的工作状态。</li>
</ol>
<h2 id="commit-message-规范自动化" tabindex="-1"><a class="header-anchor" href="#commit-message-规范自动化" aria-hidden="true">#</a> Commit Message 规范自动化</h2>
<p>其实，到这里我们也就意识到了一点：Commit Message 规范如果靠文档去约束，就会严重依赖开发者的代码素养，并不能真正保证提交的 commit 是符合规范的。</p>
<p>但是可以通过工具检测：</p>
<p><img src="http://sm.nsddd.top/sm202302162219088.png" alt="image-20230216221936012"></p>
<p>这些自动化功能可以分为以下 2 类：</p>
<ol>
<li>Commit Message 生成和检查功能：生成符合 Angular 规范的 Commit Message、Commit Message 提交前检查、历史 Commit Message 检查。</li>
<li>基于 Commit Message 自动生成 CHANGELOG 和 SemVer 的工具。</li>
</ol>
<p><strong>我们可以通过一些开源的工具来实现，我推荐的是：</strong></p>
<ul>
<li><a href="https://github.com/git-chglog/git-chglog" target="_blank" rel="noopener noreferrer">https://github.com/git-chglog/git-chglog<ExternalLinkIcon/></a></li>
</ul>
<p><strong>git-chglog：根据 Commit Message 生成 CHANGELOG；在 Go (Golang) 中实现的 CHANGELOG 生成器。随时随地，写下您的 CHANGELOG。</strong></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '2.md' style='float:left'>⬆️上一节🔗  </a><a href = '4.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/projects/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


