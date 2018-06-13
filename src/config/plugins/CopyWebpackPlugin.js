const chunk = `new CopyWebpackPlugin([ 
  {
    context: __dirname,
    from: 'static',
    to: 'static',
  }
])`

export default {
  name: 'CopyWebpackPlugin',
  npm: 'copy-webpack-plugin',
  doc: [
    'https://webpack.js.org/plugins/copy-webpack-plugin/',
    'https://github.com/webpack-contrib/copy-webpack-plugin'
  ],
  active: true,
  chunk
}
