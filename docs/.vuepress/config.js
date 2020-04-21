// .vuepress/config.js
module.exports = {
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '组件', link: '/guide/' }
      ],
      sidebar: [
        {
          title: '简介',
          collapsable: false,
          children: [
            '/', '/views/introduction/',
          ]
        },
        {
          title: '组件',
          children: [
            ['/views/guide/input/input.md', 'input'],
          ]
        }
      ]
    },
    plugins: [
        [
          'vuepress-plugin-typescript',
          {
            tsLoaderOptions: {
              // ts-loader 的所有配置项
            },
          },
        ],
      ],
  }