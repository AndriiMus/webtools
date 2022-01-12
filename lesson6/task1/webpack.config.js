module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.scss$/,
        use: ['sass-loader', 'style-loader', 'css-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: ['url-loader'],
      },
    ],
  },
};
