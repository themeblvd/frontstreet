const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config');

/**
 * Compile JavaScript for distributed project
 * package.
 *
 * This function is used for both tasks,
 * `build-project-js-dev` and `build-project-js-prod`
 *
 * This results in the final distributed package
 * containing both a production version and dev
 * version for debugging.
 */
function buildProjectJs(mode) {
  return gulp
    .src('../src/js/frontstreet.js') // For Gulp reference only, actual entry file pulled from Webpack config.
    .pipe(webpackStream(webpackConfig({ mode: `project.${mode}` }), webpack))
    .pipe(gulp.dest('../dist'))
    .pipe(gulp.dest('../docs/assets'));
}

module.exports = buildProjectJs;
