const gulp = require('gulp');
const escapehtml = require('escape-html');
const include = require('gulp-file-include');

/**
 * Build HTML files for docs.
 */
function buildDocsHtml() {
  return gulp
    .src('../src/docs/pages/*.html')
    .pipe(
      include({
        prefix: '@@',
        basepath: '@file',
        indent: true,
        filters: {
          escape: escapehtml
        }
      })
    )
    .pipe(gulp.dest('../docs'));
}

module.exports = buildDocsHtml;
