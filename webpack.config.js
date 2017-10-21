const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
  chunksSortMode: 'dependency'
})

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, './static'),
    to: 'static',
    ignore: ['.*']
  }
])

const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const WebpackCleanupPluginConfig = new WebpackCleanupPlugin()

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].[contenthash].css",
  disable: false,
})


function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-0'],
        }
      },
      {
        test: /\.scss$/,
         use: extractSass.extract({
            use: [{
              loader: "css-loader",
              options: {sourceMap: true}   
            }, {
                loader: "sass-loader",
                options: {sourceMap: true}   
            }],
            // use style-loader in development 
            fallback: "style-loader",
            publicPath: "/"
        })
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '~': resolve('src'),
      '~pages': resolve('src/pages'),
      '~components': resolve('src/components'),
      '~assets': resolve('src/assets'),
      '~layout': resolve('src/layout'),
      '~plugins': resolve('src/plugins'),
    }
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    CopyWebpackPluginConfig,
    WebpackCleanupPluginConfig,
    extractSass,
  ]
}
