var gulp			= require('gulp'),
	copy 			= require('copy'),
	copydir 		= require('copy-dir'),
	escapehtml		= require('escape-html'),
	concat 			= require('gulp-concat'),
	watch			= require('gulp-watch'),
	fileinclude		= require('gulp-file-include'),
	rename			= require('gulp-rename'),
	minifyjs		= require('gulp-uglify'),
	minifycss		= require('gulp-clean-css'),
	sass			= require('gulp-sass'),
	imagemin 		= require('gulp-imagemin'),
	clean			= require('gulp-clean'),
	autoprefixer 	= require('gulp-autoprefixer');

/**
 * Required tasks for distribution.
 */
var serve = [
	'render-docs-css',
	'render-docs-js',
	'render-docs-html',
	'render-docs-img',
	'render-project-clean',
	'render-project-css',
	'render-project-js',
	'render-project-img',
	'render-project-plugins'
];

/**
 * Supported browsers for CSS autoprefixer.
 * Loosely based on Bootstrap 4 browser
 * support policy.
 *
 * @link https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
 */
var browsers = [
	'Chrome >= 35',
	'Firefox >= 38',
	'Edge >= 12',
	'Explorer >= 10',
	'iOS >= 8',
	'Safari >= 8',
	'Android 2.3',
	'Android >= 4',
	'Opera >= 12'
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
 * Copy any compress images for docs.
 */
gulp.task('render-docs-img', function() {

	return gulp.src('src/docs/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/docs/assets/img'));

});

/**
 * Empty out distribution before compiling
 * everything.
 */
gulp.task('render-project-clean', function() {

	var dist = [
		'dist/docs/assets/frontstreet/*',
		'dist/frontstreet/*'
	];

	return gulp.src(dist, {read: false})
        .pipe(clean());

});

/**
 * Compile expanded project SASS into frontend.css for
 * distribution. Then, minify that for project
 * distribution and docs.
 */
gulp.task('render-project-css', ['render-project-clean'], function() {

	var files = [
		'src/scss/frontstreet.scss',
		'src/scss/frontstreet-dark.scss',
		'src/scss/frontstreet-rtl.scss',
		'src/scss/frontstreet-dark.scss'
	];

	return gulp.src(files)
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: browsers,
            cascade: false
        }))
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
gulp.task('render-project-js', ['render-project-clean'], function() {

	var files = [
		'src/js/init.js',
		'src/js/jump-menu.js',
		'src/js/menu.js',
		'src/js/mobile-menu.js',
		'src/js/modal.js',
		'src/js/tabs.js',
		'src/js/toggles.js'
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
gulp.task('render-project-img', ['render-project-clean'], function() {

	return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/docs/assets/frontstreet/img'))
		.pipe(gulp.dest('dist/frontstreet/img'));

});

/**
 * Copy any third-party plugins we're packaging to
 * distributed docs and project.
 */
gulp.task('render-project-plugins', ['render-project-clean'], function() {

	copydir.sync('plugins', 'dist/docs/assets/frontstreet/plugins');
	copydir.sync('plugins', 'dist/frontstreet/plugins');

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
