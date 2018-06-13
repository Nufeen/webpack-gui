const html = {
  __name: 'html',
  __active: true,
  __advanced: false,
  __doc: [],
  config: {
    test: /\.html$/,
    use: [
      {
        __doc: ['https://github.com/webpack-contrib/html-loader'],
        __active: true,
        __npm: 'html-loader',
        loader: 'html-loader',
        options: { minimize: true }
      }
    ]
  }
}

export default html
