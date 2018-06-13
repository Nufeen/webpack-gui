const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const PROD = process.env.NODE_ENV === 'production'
const DEV = process.env.NODE_ENV !== 'production'
const PUBLIC_URL = PROD ? require('./package.json').publicUrl : ''

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProduction ? false : 'cheap-module-eval-source-map',

  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src')
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        use: 'raw-loader'
      },
      {
        test: /\.(svg)$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|gif)$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      DEBUG: DEV,
      PUBLIC_URL: JSON.stringify(PUBLIC_URL)
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        context: __dirname,
        from: 'static',
        to: 'static'
      }
    ])
  ]
}
