const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserslist = require('../browserslist');

/**
 * Build out a raw component test's CSS.
 */
function buildTestCss(component) {
  return gulp
    .src(`../src/tests/${component}/style.scss`)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: browserslist }))
    .pipe(gulp.dest(`../docs/tests/${component}`));
}

module.exports = buildTestCss;
