const gulp = require('gulp');
const buildProjectJs = require('./tasks/build-project-js');

// Documentation Tasks

const docTasks = ['build-docs-html', 'build-docs-css', 'build-docs-js', 'build-docs-img'];

for (task of docTasks) {
  gulp.task(task, require(`./tasks/${task}`));
}

// Project Tasks

gulp.task('build-project-css', require('./tasks/build-project-css'));

gulp.task('build-project-js-dev', () => buildProjectJs('dev'));

gulp.task('build-project-js-prod', () => buildProjectJs('prod'));

gulp.task('build-project-js', ['build-project-js-dev', 'build-project-js-prod']);

// Build

gulp.task('watch', require('./tasks/watch'));

gulp.task('clean', require('./tasks/clean'));

gulp.task('build', [...docTasks, 'build-project-css', 'build-project-js']);
