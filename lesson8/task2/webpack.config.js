const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const { webpack } = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const config = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: ['babel-loader'],
        },
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /.(jpg|png)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                outputPath: 'images',
              },
            },
          ],
        },
      ],
    },
    plugin: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    devServer: {
      port: 9000,
      hot: true,
    },
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    );
  }
  return config;
};
