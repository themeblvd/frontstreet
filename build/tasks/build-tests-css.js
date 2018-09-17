const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserslist = require('../browserslist');

/**
 * Compile shared Sass files for visual tests.
 */
function buildTestsCss() {
  return gulp
    .src('../src/docs/assets/scss/tests.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: browserslist }))
    .pipe(gulp.dest('../docs/assets/css'));
}

module.exports = buildTestsCss;
