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

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015'],
        }
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
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
    CopyWebpackPluginConfig
  ]
}
