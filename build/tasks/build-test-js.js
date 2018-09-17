const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.test');

/**
 * Build out a raw component test's JavaScript.
 */
function buildTestJs(component) {
  return gulp
    .src(`../src/tests/${component}/script.js`) // For Gulp reference only, actual entry file pulled from Webpack config.
    .pipe(webpackStream(webpackConfig(component), webpack))
    .pipe(gulp.dest('../docs'));
}

module.exports = buildTestJs;
