const gulp = require('gulp');
const buildProjectJs = require('./tasks/build-project-js');
const buildTestHtml = require('./tasks/build-test-html');
const buildTestCss = require('./tasks/build-test-css');
const buildTestJs = require('./tasks/build-test-js');
const { docTasks, components } = require('./utils');

// Documentation Tasks

for (task of docTasks) {
  gulp.task(task, require(`./tasks/${task}`));
}

// Tests

const testTasks = ['build-tests-css'];

for (component of components) {
  testTasks.push(`test-${component}-html`, `test-${component}-css`, `test-${component}-js`);
  gulp.task(`test-${component}-html`, () => buildTestHtml(component));
  gulp.task(`test-${component}-css`, () => buildTestCss(component));
  gulp.task(`test-${component}-js`, () => buildTestJs(component));
}

gulp.task('build-tests-css', require('./tasks/build-tests-css')); // General CSS file used for for all tests.

gulp.task('build-tests', testTasks);

// Project Tasks

gulp.task('build-project-css', require('./tasks/build-project-css'));

gulp.task('build-project-js-dev', () => buildProjectJs('dev'));

gulp.task('build-project-js-prod', () => buildProjectJs('prod'));

gulp.task('build-project-js', ['build-project-js-dev', 'build-project-js-prod']);

// Build

gulp.task('watch', require('./tasks/watch'));

gulp.task('clean', require('./tasks/clean'));

gulp.task('build', [...docTasks, ...testTasks, 'build-project-css', 'build-project-js']);
