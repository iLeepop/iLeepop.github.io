import { defineUserConfig, defaultTheme } from "vuepress"

export default defineUserConfig({
    base: '/docs/',
    lang: 'zh-CN',
    title: 'Ilee-Docs',
    description: '欢迎查看我的技术文档',
    head: [['link', { rel: 'icon', href: '/docs/icon/fav.png'}]],
    theme: defaultTheme({
        logo: '/icon/fav.png',
        navbar: [
            {
                text: '看招',
                link: '/guide/',
                activeMatch: '/guide/'
            },
            {
                text: '技术类',
                children: [
                    {
                        text: 'Dev',
                        children: [
                            {
                                text: 'Java',
                                link: '/group/dev/java.md',
                                activeMatch: '/group/dev/java.html'
                            },
                            {
                                text: 'Spring',
                                link: '/group/dev/spring.md',
                                activeMatch: '/group/dev/spring.html'
                            },
                            {
                                text: 'JavaScript',
                                link: '/group/dev/javascript.md',
                                activeMatch: '/group/dev/javascript.html'
                            }
                        ]
                    },
                    {
                        text: 'Ops',
                        children: [
                            {
                                text: 'Linux',
                                link: '/group/ops/linux.md',
                                activeMatch: '/group/ops/linux.html'
                            },
                            {
                                text: 'Nginx',
                                link: '/group/ops/nginx.md',
                                activeMatch: '/group/ops/nginx.html'
                            },
                            {
                                text: 'Docker',
                                link: '/group/ops/docker.md',
                                activeMatch: '/group/ops/docker.html'
                            }
                        ]
                    }
                ]
            },
            {
                text: '游戏类',
                children: [
                    {
                        text: 'Minecraft',
                        children: [
                            {
                                text: 'DataPack数据包',
                                link: '/game/mc/datapack.md',
                                activeMatch: '/game/mc/datapack.html'
                            },
                            {
                                text: 'Fabric模组开发',
                                link: '/game/mc/fabric.md',
                                activeMatch: '/game/mc/fabric.html'
                            },
                            {
                                text: 'Server服务器',
                                link: '/game/mc/server.md',
                                activeMatch: '/game/mc/server.html'
                            }
                        ]
                    },
                ]
            },
            {
                text: '关于文档',
                children: [
                    {
                        text: '更新日志',
                        link: '/logs/logs.md',
                        activeMatch: '/logs/logs.html'
                    }
                ]
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '想要看？',
                    children: ['/guide/', '/guide/demo.md']
                }
            ],
            '/group/': [
                {
                    text: 'Dev',
                    collapsible: true,
                    children: [
                        '/group/dev/java.md', 
                        '/group/dev/spring.md', 
                        '/group/dev/javascript.md'
                    ]
                },
                {
                    text: 'Ops',
                    collapsible: true,
                    children: [
                        '/group/ops/linux.md', 
                        '/group/ops/nginx.md', 
                        '/group/ops/docker.md'
                    ]
                },
            ],
            '/game/': [
                {
                    text: 'Minecraft',
                    collapsible: true,
                    children: [
                        '/game/mc/datapack.md',
                        '/game/mc/fabric.md',
                        '/game/mc/server.md',
                    ]
                }
            ],
            '/logs/': [
                {
                    text: '更新日志',
                    link: '/logs/logs.md',
                    children: []
                }
            ]
        },
        sidebarDepth: 3,
        contributorsText: '贡献者',
        lastUpdatedText: '最后一次更新',
        notFound: [
            '爸爸去哪了？', 
            '虚空乱流！', 
            '前面的区域以后再来探索吧', 
            '你没资格，没资格啊', 
            '还在施工！'
        ],
        backToHome: '回去咯'
    })
})