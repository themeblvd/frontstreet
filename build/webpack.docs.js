const path = require('path');
const defaultConfig = require('./webpack.default.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(defaultConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/docs/assets/js') + '/docs.js', // Path resolving needed for Gulp compat.
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: './assets/js/docs.bundle.js'
  }
});
