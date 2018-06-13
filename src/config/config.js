import htmlL from './loaders/html'
import cssL from './loaders/css'
import jsL from './loaders/js'
import fontsL from './loaders/fonts'
import svgL from './loaders/svg'
import imageL from './loaders/images'

import HtmlWebpackPlugin from './plugins/HtmlWebpackPlugin'
import MiniCssExtractPlugin from './plugins/MiniCssExtractPlugin'
import DefinePlugin from './plugins/DefinePlugin'
import CopyWebpackPlugin from './plugins/CopyWebpackPlugin'

import devServer from './general/devServer'
import devtool from './general/sourceMaps'

const config = {
  devServer,
  devtool,
  loaders: [htmlL, cssL, jsL, svgL, imageL, fontsL],
  plugins: [
    HtmlWebpackPlugin,
    MiniCssExtractPlugin,
    DefinePlugin,
    CopyWebpackPlugin
  ]
}

export default config
