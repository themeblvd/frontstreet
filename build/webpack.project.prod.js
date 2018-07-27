const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/js') + '/index.js', // Path resolving needed for Gulp compat.
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/frontstreet.min.js'
  }
};
