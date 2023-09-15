import { defineUserConfig, defaultTheme } from "vuepress"

export default defineUserConfig({
    base: '/docs/',
    lang: 'zh-CN',
    title: 'Ilee-Docs',
    description: '欢迎查看我的技术文档',
    head: [['link', { rel: 'icon', href: '/docs/icon/fav.png'}]],
    theme: defaultTheme({
        logo: '/icon/fav.png',
        logoDark: '/icon/fav_w.png',
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
                                link: '/group/dev/java/',
                                activeMatch: '/group/dev/java/'
                            },
                            {
                                text: 'JavaScript',
                                link: '/group/dev/javascript/',
                                activeMatch: '/group/dev/javascript/'
                            }
                        ]
                    },
                    {
                        text: 'Ops',
                        children: [
                            {
                                text: 'Linux',
                                link: '/group/ops/linux/',
                                activeMatch: '/group/ops/linux/'
                            },
                            {
                                text: 'Nginx',
                                link: '/group/ops/nginx/',
                                activeMatch: '/group/ops/nginx/'
                            },
                            {
                                text: 'Docker',
                                link: '/group/ops/docker/',
                                activeMatch: '/group/ops/docker/'
                            }
                        ]
                    },
                    {
                        text: 'Framework',
                        children: [
                            {
                                text: 'Spring',
                                link: '/group/fw/spring/',
                                activeMatch: '/group/fw/spring/'
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
                                activeMatch: '/game/mc/datapack'
                            },
                            {
                                text: 'Fabric模组开发',
                                link: '/game/mc/fabric.md',
                                activeMatch: '/game/mc/fabric'
                            },
                            {
                                text: 'Server服务器',
                                link: '/game/mc/server.md',
                                activeMatch: '/game/mc/server'
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
                        link: '/about/logs.md',
                        activeMatch: '/about/logs'
                    },
                    {
                        text: 'TODO',
                        link: '/about/rodo.md',
                        activeMatch: '/about/todo'
                    }
                ]
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '想要看？',
                    children: [
                        '/guide/', 
                        '/guide/demo.md'
                    ]
                }
            ],
            '/group/': [
                {
                    text: 'Dev',
                    collapsible: true,
                    children: [
                        {
                            text: 'Java',
                            children: [
                                '/group/dev/java/', 
                            ]
                        },
                        {
                            text: 'JavaScript',
                            children: [
                                '/group/dev/javascript/',
                            ]
                        }
                    ]
                },
                {
                    text: 'Ops',
                    collapsible: true,
                    children: [
                        {
                            text: 'Linux',
                            children: [
                                '/group/ops/linux/', 
                            ]
                        },
                        {
                            text: 'Nginx',
                            children: [
                                '/group/ops/nginx/', 
                            ]
                        },
                        {
                            text: 'Docker',
                            children: [
                                '/group/ops/docker/',
                                '/group/ops/docker/dockerImage.md',
                                '/group/ops/docker/dockerContainer.md',
                                '/group/ops/docker/dockerCommand.md',
                                '/group/ops/docker/Dockerfile.md',
                            ]
                        }
                    ]
                },
                {
                    text: 'Framework',
                    collapsible: true,
                    children: [
                        {
                            text: 'Spring',
                            children: [
                                '/group/fw/spring/', 
                            ]
                        }
                    ]
                }
            ],
            '/game/': [
                {
                    text: 'Minecraft',
                    collapsible: true,
                    children: [
                        {
                            text: 'DataPack',
                            children: [
                                '/game/mc/datapack.md',
                            ]
                        },
                        {
                            text: 'Fabric Mod',
                            children: [
                                '/game/mc/fabric.md',
                            ]
                        },
                        {
                            text: 'Server',
                            children: [
                                '/game/mc/server.md',
                            ]
                        }
                    ]
                }
            ],
            '/about/': [
                {
                    text: '更新日志',
                    link: '/about/logs.md'
                },
                {
                    text: 'TODO',
                    link: '/about/todo.md'
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