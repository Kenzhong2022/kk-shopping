const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 生产环境配置
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 输出目录
  outputDir: 'dist',
  // 静态资源目录
  assetsDir: 'static',
  // 是否生成sourceMap
  productionSourceMap: false,
  // 开发服务器配置
  devServer: {
    port: 8080,
    open: true
  }
})
