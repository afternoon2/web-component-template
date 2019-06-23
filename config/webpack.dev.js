  
const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge({
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../server'),
    inline: true,
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../dist/web-component.min.js'),
        to: path.resolve(__dirname, '../server/web-component.min.js')
      }
    ])
  ]
}, common);