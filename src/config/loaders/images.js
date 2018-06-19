const images = {
  __name: 'images',
  __active: false,
  __doc: [],
  config: {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        __active: true,
        __npm: "file-loader",
        __doc: ['https://github.com/webpack-contrib/file-loader'],
        loader: 'file-loader'
      },
      {
        __active: false,
        __doc: ['https://github.com/tcoopman/image-webpack-loader'],
        __npm: "image-webpack-loader",
        loader: 'image-webpack-loader'
      },
      {
        __active: true,
        __doc: ['https://github.com/webpack-contrib/url-loader'],
        __npm: "url-loader",
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  }
}

export default images
