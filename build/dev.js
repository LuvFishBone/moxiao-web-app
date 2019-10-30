const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./base.conf');
const path = require('path');

module.exports = function () {
  return webpackMerge(baseWebpackConfig, {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React

      `webpack-dev-server/client?http://localhost:3377`,
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      './script/index',
      // the entry point of our app
    ],
    output: {
      filename: './script/app.js',
      path: path.resolve(__dirname, `../dist/`),
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'raw-loader', // loaders: ['raw-loader'] is also perfectly acceptable.
        },
      ],
    },

    devtool: 'source-map',

    devServer: {
      hot: true,
      // 开启服务器的模块热替换(HMR)
      port: 3377,

      historyApiFallback: {
        rewrites: [
          { from: /\/*/, to: '/main.html' },
        ],
      },
      // respond to 404s with main.html

      contentBase: path.resolve(__dirname, '../src/'),
      // 输出文件的路径

      // host: '0.0.0.0',

      disableHostCheck: true,

      proxy: {
        '/api': 'http://localhost:3366',
      }
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // 开启全局的模块热替换(HMR)

      new webpack.NamedModulesPlugin(),
      // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    ],
  });
};
