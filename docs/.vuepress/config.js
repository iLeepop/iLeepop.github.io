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
                            },
                            {
                                text: 'Sql',
                                link: '/group/dev/sql/',
                                activeMatch: '/group/dev/sql/'
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
                            },
                            {
                                text: 'Git',
                                link: '/group/ops/git/',
                                activeMatch: '/group/ops/git/'
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
                    },
                    {
                        text: 'Protocol',
                        children: [
                            {
                                text: 'HTTP/HTTPS',
                                link: '/group/protocol/http.md',
                                activeMatch: '/group/protocol/http'
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
                        link: '/about/todo.md',
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
                            collapsible: true,
                            children: [
                                '/group/dev/java/', 
                            ]
                        },
                        {
                            text: 'JavaScript',
                            collapsible: true,
                            children: [
                                '/group/dev/javascript/',
                                '/group/dev/javascript/jsUsed.md',
                                '/group/dev/javascript/jsValue.md',
                            ]
                        },
                        {
                            text: 'Sql',
                            collapsible: true,
                            children: [
                                '/group/dev/sql/',
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
                            collapsible: true,
                            children: [
                                '/group/ops/linux/', 
                                '/group/ops/linux/linuxInstall.md',
                                '/group/ops/linux/linuxStartProcess.md',
                                '/group/ops/linux/linuxDirectoryStructure.md',
                                '/group/ops/linux/linuxFileBaseAttribute.md',
                                '/group/ops/linux/linuxUserAndGroup.md',
                                '/group/ops/linux/linuxDiskManage.md',
                                '/group/ops/linux/linuxViVim.md',
                                '/group/ops/linux/linuxYumApt.md',
                            ]
                        },
                        {
                            text: 'Nginx',
                            collapsible: true,
                            children: [
                                '/group/ops/nginx/', 
                                '/group/ops/nginx/nginxInstall.md',
                                '/group/ops/nginx/nginxAntiTheft.md',
                                '/group/ops/nginx/nginxGZIP.md',
                                '/group/ops/nginx/nginxBrotli.md',
                                '/group/ops/nginx/nginxReverseProxy.md',
                                '/group/ops/nginx/nginxSSL.md',
                                '/group/ops/nginx/nginxServerLoadBalance.md',
                                '/group/ops/nginx/nginxDynamicStatic.md',
                                '/group/ops/nginx/nginxConcatReq.md',
                                '/group/ops/nginx/nginxRateLimit.md',
                            ]
                        },
                        {
                            text: 'Docker',
                            collapsible: true,
                            children: [
                                '/group/ops/docker/',
                                '/group/ops/docker/dockerEngine.md',
                                '/group/ops/docker/dockerImage.md',
                                '/group/ops/docker/dockerContainer.md',
                                '/group/ops/docker/dockerCommand.md',
                                '/group/ops/docker/Dockerfile.md',
                                '/group/ops/docker/dockerDataPersistence.md',
                                '/group/ops/docker/dockerNetwork.md',
                                '/group/ops/docker/dockerCompose.md',
                                '/group/ops/docker/dockerCommonServers.md',
                            ]
                        },
                        {
                            text: 'Git',
                            collapsible: true,
                            children: [
                                '/group/ops/git/',
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
                },
                {
                    text: 'Protocol',
                    collapsible: true,
                    children: [
                        {
                            text: 'HTTP/HTTPS',
                            children: [
                                '/group/protocol/http.md'
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
        // lastUpdatedText: '最后一次更新',
        lastUpdated: false,
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