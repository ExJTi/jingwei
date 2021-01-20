module.exports = {
  devServer: {
    // host: '127.0.0.1',
    port: 3000,
    publicPath: '/',
    noInfo: true,
    https: true,
    proxy: {
      [process.env.AJAX_BASE_API]: {
        target: 'http://127.0.0.1:8442',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
