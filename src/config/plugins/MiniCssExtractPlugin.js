
const chunk = `new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
})`

export default {
  doc: ['https://webpack.js.org/plugins/define-plugin/'],
  name : 'MiniCssExtractPlugin',
  npm: 'mini-css-extract-plugin',
  chunk,
  active: true
}
