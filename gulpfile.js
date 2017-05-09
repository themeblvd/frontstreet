var gulp		= require('gulp'),
	// marky	= require('marky-markdown'),
	copy 		= require('copy'),
	copydir 	= require('copy-dir'),
	escapehtml	= require('escape-html'),
	concat 		= require('gulp-concat'),
	watch		= require('gulp-watch'),
	fileinclude	= require('gulp-file-include'),
	rename		= require('gulp-rename'),
	minifyjs	= require('gulp-uglify'),
	minifycss	= require('gulp-clean-css'),
	sass		= require('gulp-sass');

/**
 * Required tasks for distribution.
 */
var serve = [
	'render-docs-css',
	'render-docs-js',
	'render-docs-html',
	'render-project-css',
	'render-project-js',
	'render-project-svg',
	'render-project-plugins'
];

/**
 * Compile SASS files for documentation. This still needs
 * to get merged into other third-party CSS files before
 * getting sent for distribution (task render-docs-css).
 */
gulp.task('compile-docs-scss', function() {

	return gulp.src('src/docs/assets/scss/docs.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/docs/assets/css'));

});

/**
 * Concat and minify all CSS files for documentation.
 * This includes first creating our main docs.css,
 * compiled from the scss folder.
 */
gulp.task('render-docs-css', ['compile-docs-scss'], function() {

	var files = [
		'src/docs/assets/css/shCore.css',
		'src/docs/assets/css/shThemeDefault.css',
		'src/docs/assets/css/docs.css'
	];

	return gulp.src(files)
    	.pipe(concat('docs.css'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
    	.pipe(gulp.dest('dist/docs/assets/css'));

});

/**
 * Concat and minify all JavaScript files for
 * documentation.
 */
gulp.task('render-docs-js', function() {

	var files = [
		'src/docs/assets/js/shCore.js',
		'src/docs/assets/js/shBrushXml.js',
		'src/docs/assets/js/shBrushCss.js',
		'src/docs/assets/js/shBrushJScript.js',
		'src/docs/assets/js/docs.js'
	];

	return gulp.src(files)
		.pipe(concat('docs.js'))
		.pipe(minifyjs())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist/docs/assets/js'));

});

/**
 * Combine all HTML partials and content into final
 * HTML documentation.
 */
gulp.task('render-docs-html', function() {

	return gulp.src(['src/docs/pages/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file',
			filters: {
				escape: escapehtml
			}
		}))
		.pipe(gulp.dest('dist/docs'));

});

/**
 * Compile expanded project SASS into frontend.css for
 * distribution. Then, minify that for project
 * distribution and docs.
 */
gulp.task('render-project-css', function() {

	return gulp.src('src/scss/frontstreet.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('dist/frontstreet/css'))
		.pipe(gulp.dest('dist/docs/assets/frontstreet/css'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
    	.pipe(gulp.dest('dist/frontstreet/css'))
		.pipe(gulp.dest('dist/docs/assets/frontstreet/css'));

});

/**
 * Concat and minify all JavaScript files into frontstreet.js
 * for distribution. Then, minify that for project
 * distribution and docs.
 */
gulp.task('render-project-js', function() {

	var files = [
		'src/js/init.js',
		'src/js/menu.js',
		'src/js/mobile-menu.js'
	];

	return gulp.src(files)
		.pipe(concat('frontstreet.js'))
		.pipe(gulp.dest('dist/frontstreet/js'))
		.pipe(gulp.dest('dist/docs/assets/frontstreet/js'))
		.pipe(minifyjs())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist/frontstreet/js'))
		.pipe(gulp.dest('dist/docs/assets/frontstreet/js'));

});

/**
 * Copy any svg files to distributed docs and project.
 */
gulp.task('render-project-svg', function() {

	copydir.sync('src/svg', 'dist/docs/assets/frontstreet/svg');
	copydir.sync('src/svg', 'dist/frontstreet/svg');

});

/**
 * Copy any third-party plugins we're packaging to
 * distributed docs and project.
 */
gulp.task('render-project-plugins', function() {

	copydir.sync('plugins/fontawesome', 'dist/docs/assets/frontstreet/plugins/fontawesome');
	copydir.sync('plugins/fontawesome', 'dist/frontstreet/plugins/fontawesome');

});

/**
 * Watch for changes to files.
 */
gulp.task('watch', function() {

	// Render documentation.

	gulp.watch(['src/docs/assets/css/*.css', 'src/docs/assets/scss/*.scss', 'src/docs/assets/scss/**/*.scss'], ['render-docs-css']);

	gulp.watch(['src/docs/assets/js/*.js'], ['render-docs-js']);

	gulp.watch(['src/docs/**/*.html'], ['render-docs-html']);

	// Render project.

	gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], ['render-project-css']);

	gulp.watch(['src/js/*.js'], ['render-project-js']);

});

/**
 * Serve all distrubtion tasks.
 */
gulp.task('serve', serve, function() {

	return;

});
