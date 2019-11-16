

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.css'],
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': 'components/common',
        'content': 'components/content',
        'network': '@/network'
      }
    }
  }
}