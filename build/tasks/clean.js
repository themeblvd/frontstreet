const gulp = require('gulp');
const del = require('del');

/**
 * Clean out project and documentation, to get ready
 * for a full build.
 */
function clean() {
  return del(['../dist/*', '../docs/*', '!../docs/CNAME'], { force: true });
}

module.exports = clean;
