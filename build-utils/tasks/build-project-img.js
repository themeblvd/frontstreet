const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

/**
 * Copy any images files to distributed files.
 *
 * Note: Images are primarily used for basic
 * IE 10-11 support. All other images are generated
 * as SVGs through Sass, within the final CSS files.
 */
function buildProjectImg() {
  return gulp
    .src('../src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('../dist/img'))
    .pipe(gulp.dest('../docs/assets/frontstreet/img'));
}

module.exports = buildProjectImg;
