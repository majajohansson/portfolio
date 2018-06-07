const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isDev = process.env.NODE_ENV !== 'production';

  const plugins = [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
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
      path.resolve(__dirname, 'src', 'index.js'),
      path.resolve(__dirname, 'src', 'main.css'),
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
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: !isDev } },
          ],
        },
        {
          test: /\.(jpe?g|png)/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            },
          },
        },
      ],
    },

    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].js',
      publicPath: '/',
    },

    devServer: isDev ? {
      port: 8000,
      publicPath: '/',
      historyApiFallback: true,
      compress: true,
      hot: true,
      watchOptions: { ignored: /node_modules/ },
    } : {},

    plugins,
  };
}
