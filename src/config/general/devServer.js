// const path = {join: () => {}}

const devServer = {
  // basic options:
  port: 9000,
  https: true,
  compress: true,
  hot: true,
  disableHostCheck: false,
  historyApiFallback: true,

  // angular users
  disableDotRule: false,

  // dev-server will only compile the bundle when it gets requested
  lazy: false,

  // When open is enabled, the dev server will open the browser.
  open: false,

  // webpack bundle information that is shown when starting up and after each save, will be hidden
  noInfo: false,

  // nothing except the initial startup information will be written to the console
  quiet: false

  // TODO
  // Serve static dir (don't need copy plugin in development)
  // contentBase: path.join(__dirname, 'static'),

  // ... and watche changes in it
  // watchContentBase: false,
}

export default devServer
