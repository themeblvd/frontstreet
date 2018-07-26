const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserslist = require('../browserslist');
const minifycss = require('gulp-clean-css');
const rename = require('gulp-rename');
const tildeImporter = require('node-sass-tilde-importer');

/**
 * Compile the distributed development version
 * of the CSS.
 *
 * Compile all expanded Sass files, and then add
 * compressed copies of them. All CSS files are placed
 * in both the dist directory and the /frontstreet dir
 * of the docs.
 */
function buildProjectCss() {
  const files = [
    '../src/scss/frontstreet.scss',
    '../src/scss/frontstreet-rtl.scss',
    '../src/scss/frontstreet-core.scss',
    '../src/scss/frontstreet-core-rtl.scss',
    '../src/scss/frontstreet-colors.scss'
  ];

  return gulp
    .src(files)
    .pipe(sass({ outputStyle: 'expanded', importer: tildeImporter }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: browserslist }))
    .pipe(gulp.dest('../dist/css'))
    .pipe(gulp.dest('../docs/assets/css'))
    .pipe(minifycss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('../dist/css'))
    .pipe(gulp.dest('../docs/assets/css'));
}

module.exports = buildProjectCss;
