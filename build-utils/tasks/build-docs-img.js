const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

/**
 * Copy any compress images for docs.
 */
function buildDocsImg() {
  return gulp
    .src('../src/docs/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('../docs/assets/img'));
}

module.exports = buildDocsImg;
