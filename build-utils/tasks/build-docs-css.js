const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserslist = require('../browserslist');

/**
 * Compile Sass files for documentation.
 */
function buildDocsCss() {
  return gulp
    .src('../src/docs/assets/scss/docs.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: browserslist }))
    .pipe(gulp.dest('../docs/assets/css'));
}

module.exports = buildDocsCss;
