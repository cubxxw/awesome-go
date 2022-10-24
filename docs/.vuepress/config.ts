/*
 * @Description: docker的配置
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-09-14 11:48:44
 * @LastEditTime: 2022-10-15 17:41:53
 * @FilePath: \undefinedd:\文档\最近的\awesome-golang\docs\.vuepress\config.ts
 * @blog: https://nsddd.top
 */
import { defaultTheme } from 'vuepress'
/* 导入插件 */
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top' 
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { searchPlugin } from '@vuepress/plugin-search'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { tocPlugin } from '@vuepress/plugin-toc'

//评论插件
import Vue from 'vue';
// import Vssue from 'vssue';
import GithubV3 from '@vssue/api-github-v3';

// import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
export default {
    markdown: {
        plugins: ['task-lists']
    },

  //注意，此处需要填写你部署在nginx下的文件夹名称，如果是根目录，那么可以注释掉此行，注释掉后本地打开index.html无法访问
  base: "/",
  dest: './dist',
  lang: 'zh-CN',
  port: 8888,  //设置端口号
  title: '你好',  //主页
  description: '链学社致力于打造出区块链去中心化的学习平台',
  sidebarDepth:0,   //默认显示H1 H2
  head:[
    ["link",{rel:"icon",href:"/img/1.jpg"}]
    //设置网站seo标志
  ],
  plugins: [
    [
        'vuepress-plugin-baidu-tongji', // 百度统计
        {
          hm: 'bf1bd5693b39d433338099c3aa905d50', // 百度统计id，后面有获取教程
        },
      ],

    '@vuepress/nprogress', // 切换进度条
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
    'one-click-copy', // 复制
        {
          copySelector: [
            'div[class*="language-"] pre',
            'div[class*="aside-code"] aside',
          ],
          copyMessage: '复制成功噢⚡',
          duration: 1000,
          showInMobile: false,
        },
      ],

    //   '@vssue/vuepress-plugin-vssue',
    //   {
    //     // 设置平台，而不是 `api` 
    //     platform: 'github-v4',
  
    //     // 其他的 Vssue 配置
    //     owner: '3293192751', // 仓库的拥有者的名称
    //     repo: 'awesome-docker', // 存储 Issue 和评论的仓库的名称
    //     clientId: '4479c25f1d6cdcd8187f', // 刚保存下来的  Client ID
    //     clientSecret: 'ddba2162d94a643e601313646380e48904ded8ee', //  刚才保存下来的 Client secrets
    //     autoCreateIssue: true,//自动创建评论
    //   },

      [
        'vuepress-plugin-comment', // 评论
        {
          choosen: 'gitalk',
          options: {
            clientID: '4479c25f1d6cdcd8187f', // 第三方登录 clientID
            clientSecret: 'ddba2162d94a643e601313646380e48904ded8ee', // 第三方登录 clientSecret
            repo: 'my-blog-comment',   // 你的存储库
            owner: '3293172751', // 存储库拥有者，填你的 Github 账户
            admin: ['3293172751'], // 对仓库有写权限的人，填你的 Github 账户
            pagerDirection: 'last',
            id:
              '<%- (frontmatter.permalink || frontmatter.to.path || "123456789012345").slice(-16) %>', //  页面的唯一标识,长度不能超过50
            title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
            labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
            body:
              '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname || "123456789012345") %>', // GitHub issue 的内容
          },
        },
      ],


    backToTopPlugin(),  //返回顶端按钮
    externalLinkIconPlugin({  //链接图标
        locales: {
          '/': {
            openInNewWindow: 'open in new window',
          },
          '/zh/': {
            openInNewWindow: '在新窗口打开',
          },
        },
      }),
    //   mdEnhancePlugin({
    //     // 启用任务列表
    //     tasklist: true,
    //   }),
 
     mediumZoomPlugin({
        // 配置项 --图片缩放
      }),
      searchPlugin({
        // 配置项  -- 轻量搜索
      }),      
      docsearchPlugin({
        apiKey: "e0bc57bb5910bb4cbaff54471af173d4",
        appId: "LIPIDXUN7V",
        indexName: "go.nsddd.top",
        searchParameters: {
          attributesToSnippet: ["lvl1:30", "content:25"],
        },
        locales: {
          "/": {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      }),
      prismjsPlugin({
        // 配置项  -- 语法高亮
      }),
    //  shikiPlugin({
    //  // 配置项    -- 代码块高亮
    // }),
    tocPlugin({
        // 配置项  -- toC目录
      }),

    ],
    theme: defaultTheme({
        //更新时间
        // lastUpdated: 'Last Updated',
        sidebarDepth: 1,  //侧边菜单深度
    
        //logo -- 夜间和白剑
        logoDark: 'https://sm.nsddd.top//typora/1.jpg?mail:3293172751@qq.com',
        logo: 'https://sm.nsddd.top//typora/4.png?mail:3293172751@qq.com',
        
        // 到github修改页面 如果你按照 `organization组织/repository存储库` 的格式设置它
        // 我们会将它作为一个 GitHub 仓库
        editLinkText: '在GitHub上贡献此页面',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // 假如文档不是放在仓库的根目录下：
        
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 你也可以直接将它设置为一个 URL -- gitlab
        repo: '3293172751/awesome-go',   // 假如你的文档仓库和项目本身不在一个仓库：
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
          '你可以返回首页<href="https//docker.nsddd.top">首页</a>',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏', 
        // 导航栏
        navbar: [
            {
                text: '🤵关于我',
                children: [
                  {
                    text: 'Github仓库',
                    link: 'https://github.com/3293172751/cs-awesome-Block_Chain',
                    // 该元素将一直处于激活状态
                    target:'_blank',
                    activeMatch: '/',
                  },
                  {
                    text: '我的博客',
                    target:'_blank',
                    link: 'http://nsddd.top',
                    // 该元素将一直处于激活状态
                    activeMatch: '/',
                  },
                  {
                    text: '知乎',
                    target:'_blank',
                    link: 'https://www.zhihu.com/people/3293172751',
                    // 该元素将一直处于激活状态
                    activeMatch: '/',
                  },
                  {
                    text: '⛓️链学社组织',
                    link: 'https://github.com/C-UB/',
                    target:'_blank',
                  }, 
                ],
            },
            {
              text: '🏠首页',
              link: '/',
            },
            {
                text: '🐋docker文档',
                link: 'https://docker.nsddd.top/',
                target:'_blank',
            },
            {
                text: '🔥 Go语言基础篇',
                link: '/markdown/1.md'
            }, 
            {
                text: '⚡ Go语言进阶篇',
                link: '/Gomd_super/'
            },
          ],
          
          sidebar: {
            '/markdown/': [
                {
                    text: '🏠回到主页',
                    link: '/', 
                },
                // SidebarItem
                 {
                    text: '💱个人云盘地址',
                    link: 'https://xxw.nsddd.top/s/wRSz'
                 },
              {
                text: '🔥 Go语言基础篇',
                children: [
                    '/markdown/1.md',
                    '/markdown/2.md',
                    '/markdown/3.md',
                    '/markdown/4.md',
                    '/markdown/5.md',
                    '/markdown/6.md',
                    '/markdown/7.md',          
                    '/markdown/8.md',
                    '/markdown/9.md',
                    '/markdown/10.md',
                    '/markdown/11.md',
                    '/markdown/12.md',
                    '/markdown/13.md',
                    '/markdown/14.md',
                    '/markdown/15.md',
                    '/markdown/16.md',
                    '/markdown/17.md',          
                    '/markdown/18.md',
                    '/markdown/19.md',
                    '/markdown/20.md',
                    '/markdown/21.md',
                    '/markdown/22.md',
                    '/markdown/23.md',
                    '/markdown/24.md',
                    '/markdown/25.md',
                    '/markdown/26.md',
                    '/markdown/27.md',          
                    '/markdown/28.md',
                    '/markdown/29.md',
                    '/markdown/30.md',
                    '/markdown/chan底层分析.md',
                    '/markdown/反射.md',
                    '/markdown/并发.md',
                    '/markdown/gofloat.md.md',
                    '/markdown/file.md',          
                    '/markdown/eth.md',
                    '/markdown/Go汇编.md',
                    '/markdown/九型人格.md',
                    // 字符串 - 页面文件路径
                    // '/foo/bar.md',
                    {
                        text: '💝如何参与贡献？',
                        link: 'https://nsddd.top/archives/contributors',
                    //   children: [],
                    },  
                ],
              },
            ],
            '/Gomd_super/': [
                {
                    text: '🏠回到主页',
                    link: '/', 
                },
                // SidebarItem
                 {
                    text: '💱个人云盘地址',
                    link: 'https://xxw.nsddd.top/s/wRSz'
                 },
                 {
                    text: '🔥 进阶篇首页',
                    link: '/Gomd_super/markdown/'
                 },
              {
                text: '⚡ Go语言进阶篇',
                children: [
                    '/Gomd_super/',
                    '/Gomd_super/go-air.md',
                    '/Gomd_super/name.md',
                    '/Gomd_super/mod.md',
                    '/Gomd_super/zhenze.md',
                    '/Gomd_super/go_file.md',
                    '/Gomd_super/catalogue.md',
                    '/Gomd_super/bitwise.md',  
                    '/Gomd_super/markdown/1.md', 
                    '/Gomd_super/markdown/2.md',
                    '/Gomd_super/markdown/3.md',
                    '/Gomd_super/markdown/4.md',
                    '/Gomd_super/markdown/5.md',
                    '/Gomd_super/markdown/6.md',
                    '/Gomd_super/markdown/7.md',
                    '/Gomd_super/markdown/8.md',
                    '/Gomd_super/markdown/9.md',
                    '/Gomd_super/markdown/10.md',
                    '/Gomd_super/markdown/11.md',
                    '/Gomd_super/markdown/12.md',
                    '/Gomd_super/markdown/13.md',
                    '/Gomd_super/markdown/14.md',
                    '/Gomd_super/markdown/15.md',
                    '/Gomd_super/markdown/16.md',
                    '/Gomd_super/markdown/17.md',
                    '/Gomd_super/markdown/18.md',
                    '/Gomd_super/markdown/19.md',
                    '/Gomd_super/markdown/20.md',
                    '/Gomd_super/markdown/21.md',
                    '/Gomd_super/markdown/22.md',
                    '/Gomd_super/markdown/23.md',
                    '/Gomd_super/markdown/24.md',
                    '/Gomd_super/markdown/25.md',
                    '/Gomd_super/markdown/26.md',
                    '/Gomd_super/markdown/27.md',
                    '/Gomd_super/markdown/28.md',
                    '/Gomd_super/markdown/29.md',
                    '/Gomd_super/markdown/30.md',
                    '/Gomd_super/markdown/31.md',
                    '/Gomd_super/markdown/32.md',
                    '/Gomd_super/markdown/33.md',
                    '/Gomd_super/markdown/34.md',
                    '/Gomd_super/markdown/35.md',
                    '/Gomd_super/markdown/36.md',
                    '/Gomd_super/markdown/37.md',
                    '/Gomd_super/markdown/38.md',
                    '/Gomd_super/markdown/39.md',
                    '/Gomd_super/markdown/40.md',
                    '/Gomd_super/markdown/41.md',
                    '/Gomd_super/markdown/42.md',
                    '/Gomd_super/markdown/43.md',
                    '/Gomd_super/markdown/44.md',
                    '/Gomd_super/markdown/45.md',
                    '/Gomd_super/markdown/46.md',
                    '/Gomd_super/markdown/47.md',
                    '/Gomd_super/markdown/48.md',
                    '/Gomd_super/markdown/49.md',
                    '/Gomd_super/markdown/50.md',
                    '/Gomd_super/markdown/51.md',
                    '/Gomd_super/markdown/52.md',
                    '/Gomd_super/markdown/53.md',
                    '/Gomd_super/markdown/54.md',
                    '/Gomd_super/markdown/55.md',
                    '/Gomd_super/markdown/56.md',
                    '/Gomd_super/markdown/57.md',
                    '/Gomd_super/markdown/58.md',
                    '/Gomd_super/markdown/59.md',
                    '/Gomd_super/markdown/60.md',
                    '/Gomd_super/markdown/61.md',
                    '/Gomd_super/markdown/62.md',
                    '/Gomd_super/markdown/63.md',
                    '/Gomd_super/markdown/64.md',
                    '/Gomd_super/markdown/65.md',
                    '/Gomd_super/markdown/66.md',
                    '/Gomd_super/markdown/67.md',
                    '/Gomd_super/markdown/68.md',
                    '/Gomd_super/markdown/69.md',
                    '/Gomd_super/markdown/70.md',
                    '/Gomd_super/markdown/71.md',
                    '/Gomd_super/markdown/72.md',
                    '/Gomd_super/markdown/73.md',
                    '/Gomd_super/markdown/74.md',
                    '/Gomd_super/markdown/75.md',
                    '/Gomd_super/markdown/76.md',
                    '/Gomd_super/markdown/77.md',
                    '/Gomd_super/markdown/78.md',
                    '/Gomd_super/markdown/79.md',
                    '/Gomd_super/markdown/80.md',
                    '/Gomd_super/markdown/81.md',
                    '/Gomd_super/markdown/82.md',
                    '/Gomd_super/markdown/83.md',
                    '/Gomd_super/markdown/84.md',
                    '/Gomd_super/markdown/85.md',
                    '/Gomd_super/markdown/86.md',
                    '/Gomd_super/markdown/87.md',
                    '/Gomd_super/markdown/88.md',
                    '/Gomd_super/markdown/89.md',
                    '/Gomd_super/markdown/90.md',
                    '/Gomd_super/markdown/91.md',
                    '/Gomd_super/markdown/92.md',
                    '/Gomd_super/markdown/93.md',
                    '/Gomd_super/markdown/94.md',
                    '/Gomd_super/markdown/95.md',
                    '/Gomd_super/markdown/96.md',
                    '/Gomd_super/markdown/97.md',
                    '/Gomd_super/markdown/98.md',
                    '/Gomd_super/markdown/99.md',
                    '/Gomd_super/markdown/100.md',
                    {
                        text: '💝如何参与贡献？',
                        link: 'https://nsddd.top/archives/contributors',
                    //   children: [],
                    },  
                ],
              },
            ],
            '/': [
                '/Gomd_super/',
                '/Gomd_super/go-air.md',
                '/Gomd_super/name.md',
                '/Gomd_super/mod.md',
                '/Gomd_super/zhenze.md',
                '/Gomd_super/go_file.md',
                '/Gomd_super/catalogue.md',
                '/Gomd_super/bitwise.md',  
            ] // 侧边栏配置
          },
  }),
}