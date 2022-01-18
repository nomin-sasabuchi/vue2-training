const path = require('path')

module.exports = {
  //storiesの対象ディレクトリ
  stories: ['../src/components'],
  staticDirs: ['../static'],
  babel: async (options) => ({
    ...options,
    // any extra options you want to set
  }),
  //拡張機能
  addons: [
    //Storybookのストーリー間を移動するリンク
    '@storybook/addon-links',
    //Storybookの優れた機能を提供
    '@storybook/addon-essentials',
    //postcssの設定
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  //今回使用するフレームワーク
  framework: '@storybook/vue',
  //絶対パスインポートの解決↓
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ]
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
}
