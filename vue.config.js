// https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
module.exports = {
  lintOnSave: false,
  css: {},

  devServer: {
    disableHostCheck: true,
    port: 8088,
    watchOptions: {
      clientLogLevel: 'warning'
    }
  },
  publicPath: "/"
}
