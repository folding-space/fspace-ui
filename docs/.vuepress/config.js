// .vuepress/config.js
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    module: {
      rules: [
        
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: ['vca-jsx', '@vue/app'],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsxSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },
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
          '/', '/views/introduction/', '/views/theme/'
        ]
      },
      {
        title: '组件',
        children: [
          ['/views/guide/input/input.md', 'Input'],
          ['/views/guide/button/button.md', 'Button'],
          ['/views/guide/radio/radio.md', 'Radio'],
          ['/views/guide/checkbox/checkbox.md', 'Checkbox'],
          ['/views/guide/form/form.md', 'Form'],
          ['/views/guide/layout/layout.md', 'Layout']
          ['/views/guide/dialog/dialog.md', 'Dialog'],
        ]
      }
    ]
  }
}
