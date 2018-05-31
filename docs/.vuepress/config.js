module.exports = {
    title: 'VuePress Demo',
    description: 'A demo VuePress site',
    base: '/vuepress/',
    themeConfig: {
        repo: 'craftcms/docs',
        docsRepo: 'flipboxlabs/vuepress',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        nav: [
            {text: 'Details', link: 'https://github.com/craftcms/docs/'},
            {text: 'Changelog', link: 'https://github.com/craftcms/docs/'},
            {text: 'Documentation', link: '/'}
        ],
        sidebar: {
            '/': [
                {
                    title: 'Introduction',
                    collapsable: false,
                    // children: [
                    //     ''
                    // ]
                },
                {
                    title: 'Installing / Updating',
                    collapsable: false,
                    children: [
                        'requirements',
                        'installation'
                    ]
                },
                {
                    title: 'Configuring',
                    collapsable: false,
                    children: [
                        ['/configure/', 'Overview'],
                        ['/configure/organization-types', 'Organization Types'],
                        ['/configure/user-types', 'User Types']
                    ]
                },
                {
                    title: 'Objects',
                    collapsable: false,
                    children: [
                        ['/objects/organization', 'Organization'],
                        ['/objects/organization-type', 'Organization Type'],
                        ['/objects/organization-type-site-settings', 'Organization Type Site Settings'],
                        ['/objects/user-type', 'User Type'],
                        ['/objects/user', 'User']
                    ]
                },
                {
                    title: 'Queries',
                    collapsable: false,
                    children: [
                        ['/queries/organization', 'Organization Query'],
                        ['/queries/organization-type', 'Organization Type Query'],
                        ['/queries/user', 'User Query']
                    ]
                }
            ]
        },
        codeLanguages: {
            twig: 'Twig',
            php: 'PHP'
        }
    },
    markdown: {
        anchor: {
            level: [2, 3, 4]
        },
        toc: {
            includeLevel: [3]
        }
    }
}