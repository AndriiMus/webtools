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
        use: ['style-loader', 'css-loader', 'scss-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: ['url-loader'],
      },
    ],
  },
};
