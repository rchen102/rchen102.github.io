module.exports = {
    title: 'rchen102\'s wiki blog',
    description: '个人知识记录分享博客',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/img/icon-smile.png'}]
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top','@vuepress/medium-zoom'],
    themeConfig: {
        repo: 'https://github.com/rchen102/rchen102.github.io',
        repoLabel: 'GitHub',
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        }
    }
}