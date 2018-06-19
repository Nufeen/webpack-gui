const css = {
  __name: 'css',
  __active: true,
  __doc: [],
  config: {
    test: /\.css$/,
    use: [
      {
        __active: false,
        __doc: ['https://github.com/peerigon/extract-loader'],
        __npm: 'extract-loader',
        loader: 'extract-loader'
      },
      {
        __doc: ['https://github.com/webpack-contrib/style-loader'],
        __active: true,
        __npm: 'style-loader',
        loader: 'style-loader',
        options: {
          singleton: false,
          sourceMap: true,
          convertToAbsoluteUrls: false
        }
      },
      {
        __doc: ['https://github.com/webpack-contrib/css-loader'],
        __active: true,
        __npm: 'css-loader',
        loader: 'css-loader',
        options: {
          modules: false,
          minimize: true,
          camelCase: false
        }
      },
      {
        __doc: ['https://github.com/postcss/postcss-loader'],
        __active: true,
        __npm: 'postcss-loader',
        loader: 'postcss-loader',
        options: {
          exec: false,
          sourceMap: true
        }
      },
      {
        __doc: ['https://github.com/webpack-contrib/sass-loader'],
        __active: false,
        __npm: 'sass-loader node-sass',
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ]
  }
}

export default css
