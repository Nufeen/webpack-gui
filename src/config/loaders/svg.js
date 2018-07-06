const svg = {
  __name: 'svg',
  __active: false,
  __doc: [],
  config: {
    test: /\.svg$/i,
    use: [
      {
        __active: true,
        __doc: ['https://github.com/webpack-contrib/raw-loader'],
        __npm: "raw-loader",
        loader: 'raw-loader'
      },
      {
        __active: false,
        __doc: [
          'https://github.com/svg/svgo',
          'https://github.com/rpominov/svgo-loader'
        ],
        __npm: "svgo svgo-loader",
        loader: 'svgo-loader',
        options: {
          plugins: [
            { removeTitle: true },
            { convertPathData: true },
            { mergePaths: true },
            { cleanupIDs: false },
            { convertTransform: true },
            { removeViewBox: false },
            { collapseGroups: false }
          ]
        }
      }
    ]
  }
}

export default svg
