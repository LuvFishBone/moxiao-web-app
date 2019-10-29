const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: 'style/app_[contenthash:5].css',
});
const extractCSSModule = new ExtractTextPlugin({
  filename: 'style/base_[contenthash:5].css',
});

module.exports = {
  context: path.resolve(__dirname, '../src'),

  module: {
    rules: [
      {
        parser: {
          amd: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: modulePath => /node_modules/.test(modulePath),
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, '../src/script')],
        loaders: extractCSSModule.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]___[hash:base64:5]' }, // react css module
            // 'resolve-url-loader',  // may need this (https://www.npmjs.com/package/resolve-url-loader)
            { loader: 'px2rem-loader?remUnit=100' },
            { loader: 'postcss-loader' },
            { loader: 'less-loader' },
          ],
        }),
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, '../src/style'),
        loaders: extractLess.extract({
          use: ['css-loader', 'px2rem-loader?remUnit=100', 'postcss-loader', 'less-loader',],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|eot|svg|ttf|woff|woff2)$/i,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },

  plugins: [
    extractLess,
    extractCSSModule,
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: 'main.ejs'
    }),
  ],

  externals: {
    zepto: 'Zepto'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
    },
  },
};
