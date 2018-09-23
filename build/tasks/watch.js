const gulp = require('gulp');
const { elements, blocks } = require('../utils');

/**
 * Watch for changes to certain files and run
 * corresponding tasks.
 */
function watch() {
  // Docs
  gulp.watch('../src/docs/+(layout|pages|partials)/*.html', ['build-docs-html']);
  gulp.watch('../src/docs/assets/scss/*.scss', ['build-docs-css', 'build-tests-css']);
  gulp.watch('../src/docs/assets/js/*.js', ['build-docs-js']);

  // Tests
  const components = [...elements, ...blocks];

  for (component of components) {
    gulp.watch(`../src/tests/${component}/index.html`, [`test-${component}-html`]);
    gulp.watch(`../src/tests/${component}/style.scss`, [`test-${component}-css`]);
    gulp.watch(`../src/tests/${component}/script.js`, [`test-${component}-js`]);
  }

  // Project
  gulp.watch('../src/scss/**/*.scss', ['build-project-css']);
  gulp.watch('../src/js/**/*.js', ['build-project-js']);
}

module.exports = watch;
