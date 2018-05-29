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
                        '/configure/',
                        '/configure/organizations',
                        '/configure/organization-types',
                        '/configure/user-types'
                    ]
                }
            ]
        },
        codeLanguages: {
            twig: 'Twig',
            php: 'PHP'
        }
    }
}