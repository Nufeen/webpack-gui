const chunk = `new webpack.DefinePlugin({
  DEBUG: args.mode == 'development',
  PUBLIC_URL: JSON.stringify(
    args.mode == 'production'
      ? "ABSOLUTE_PATH_HERE_IF_NEEDED"
      : ''
  ),
})`

export default {
  name: 'DefinePlugin',
  npm: null,
  doc: ['https://webpack.js.org/plugins/define-plugin/'],
  active: true,
  chunk
}
