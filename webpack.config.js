const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const isDev = process.env.NODE_ENV !== 'production';

  const plugins = [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: isDev ? false : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ];

  if (isDev) plugins.push(new webpack.HotModuleReplacementPlugin());

  return {
    mode: isDev ? 'development' : 'production',
    name: 'portfolio',
    entry: [
      'babel-polyfill',
      path.resolve(__dirname, 'src', 'index.js'),
      path.resolve(__dirname, 'src', '404.html'),
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        },
        {
          test: /\.(jpe?g|png)/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath: '/assets',
              outputPath: 'assets',
            },
          },
        },
        {
          test: /\.html$/,
          exclude: /index\.html/,
          use: [
            { loader: 'file-loader', options: { name: '[name].[ext]' } },
            'extract-loader',
            { loader: 'html-loader', options: { minimize: !isDev } },
          ],
        },
      ],
    },

    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },

    devServer: isDev ? {
      port: 8000,
      historyApiFallback: true,
      compress: true,
      hot: true,
      publicPath: '/',
      watchOptions: { ignored: /node_modules/ },
    } : {},

    plugins,
  };
}
