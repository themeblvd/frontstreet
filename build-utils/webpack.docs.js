const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/docs/assets/js') + '/docs.js', // Path resolving needed for Gulp compat.
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: './assets/js/docs.bundle.js'
  }
};
