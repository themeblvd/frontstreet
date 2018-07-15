const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/docs/assets/js/docs.js',
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: './assets/js/docs.bundle.js'
  }
};
