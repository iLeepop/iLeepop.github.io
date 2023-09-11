import { defineUserConfig, defaultTheme } from "vuepress"

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Ilee-Docs',
    description: '欢迎查看我的技术文档',
    base: '/docs/',
    theme: defaultTheme({
        navbar: [
            {
                text: 'Foo',
                link: '/foo/'
            },
            {
                text: 'Other',
                children: ['/other/foo.md', '/other/bar.md']
            },
            '/bar/README.md'
        ],
        contributorsText: '贡献者',
        lastUpdatedText: '最后一次更新'
    })
})