const path = require('path');
module.exports = {
  entry: {
    profile: './src/profile/index.js',
    dashoard: './src/dashboard/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'bulid'),
  },
  watch: true,
};
