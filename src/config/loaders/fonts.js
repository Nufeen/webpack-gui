const config = {
  __name: 'fonts',
  __active: false,
  __doc: [],
  config: {
    test: /\.(eot|ttf|woff2?)$/,
    use: [
      {
        __active: true,
        __doc: ['https://github.com/webpack-contrib/raw-loader'],
        __npm: 'raw-loader',
        loader: 'raw-loader'
      }
    ]
  }
}

export default config
