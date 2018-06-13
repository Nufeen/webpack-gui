const chunk = `new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})`

export default {
  doc: ['https://webpack.js.org/plugins/html-webpack-plugin/'],
  name: 'HtmlWebPackPlugin',
  npm: 'html-webpack-plugin' ,
  chunk,
  active: true
}
