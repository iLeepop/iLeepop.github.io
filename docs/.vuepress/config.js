import { defineUserConfig, defaultTheme } from "vuepress"

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Ilee-Docs',
    description: '欢迎查看我的技术文档',
    base: '/docs/',
    theme: defaultTheme({
        navbar: [
            {
                text: '看招',
                link: '/guide/',
                activeMatch: '/guide/'
            },
            {
                text: '文档类',
                children: [
                    {
                        text: 'Dev',
                        children: [
                            {
                                text: 'Java',
                                link: '/group/dev/java.md'
                            },
                            {
                                text: 'Spring',
                                link: '/group/dev/spring.md'
                            },
                            {
                                text: 'JavaScript',
                                link: '/group/dev/javascript.md'
                            }
                        ]
                    },
                    {
                        text: 'Ops',
                        children: [
                            {
                                text: 'Linux',
                                link: '/group/ops/linux.md'
                            },
                            {
                                text: 'Nginx',
                                link: '/group/ops/Nginx.md'
                            },
                            {
                                text: 'Docker',
                                link: '/group/ops/docker.md'
                            }
                        ]
                    }
                ]
            },
            {
                text: '关于文档',
                children: [
                    {
                        text: '更新日志',
                        link: '/group/logs/logs.md'
                    }
                ]
            }
        ],
        contributorsText: '贡献者',
        lastUpdatedText: '最后一次更新',
        notFound: '爸爸去哪了？',
        backToHome: '回去咯'
    })
})