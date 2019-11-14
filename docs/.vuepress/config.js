module.exports = {
    title: 'rchen102\'s wiki',
    description: '个人CS知识记录分享博客',
    base: '/wiki/',
    head: [
        ['link', {rel: 'icon', href: '/img/helloworld.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'https://github.com/rchen102',
        repoLabel: 'GitHub',
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 1,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}