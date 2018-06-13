const pkg = require('./package.json')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')({
      url: asset =>
        asset.url[0] === '/'
          ? `${pkg.publicUrl}${asset.url}`
          : asset.relativePath
    }),
    require('postcss-cssnext')
  ]
}
