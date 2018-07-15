const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/js/frontstreet.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/frontstreet.js'
  }
};
