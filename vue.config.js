module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // ion- で始まるタグはすべてカスタム要素として扱う
          isCustomElement: (tag) => tag.startsWith('ion-'),
        },
      }))
  },
}
