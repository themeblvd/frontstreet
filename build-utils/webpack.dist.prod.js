const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/frontstreet.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/frontstreet.min.js'
  }
};
