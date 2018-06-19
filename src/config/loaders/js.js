const js = {
  __name: 'js',
  __active: true,
  __doc: [],
  config: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        __doc: ['https://github.com/babel/babel-loader'],
        __npm: "babel-loader babel-core babel-preset-env",
        __active: true,
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: '.babel_cache',
          babelrc: false
        }
      }
    ]
  }
}

export default js
