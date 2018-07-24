const gulp = require('gulp');

/**
 * Watch for changes to certain files and run
 * corresponding tasks.
 */
function watch() {
  // Docs
  gulp.watch('../src/docs/+(layout|pages|partials)/*.html', ['build-docs-html']);
  gulp.watch('../src/docs/assets/scss/*.scss', ['build-docs-css']);
  gulp.watch('../src/docs/assets/js/*.js', ['build-docs-js']);

  // Project
  gulp.watch('../src/scss/**/*.scss', ['build-project-css']);
  gulp.watch('../src/js/**/*.js', ['build-project-js']);
}

module.exports = watch;
