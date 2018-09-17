const gulp = require('gulp');

/**
 * Build out a raw component test's HTML.
 */
function buildTestHtml(component) {
  return gulp
    .src(`../src/tests/${component}/index.html`)
    .pipe(gulp.dest(`../docs/tests/${component}`));
}

module.exports = buildTestHtml;
