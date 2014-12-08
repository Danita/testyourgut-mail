/**
 * URL for images
 * @type {string}
 */
var cdnUrl = 'http://dani-careri.no-ip.biz/projects/lucas/hyperbiotics/testyourgut-mail'; // Your url here

var gulp = require('gulp');
var premailer = require('gulp-premailer');
var cdnAbsolutePath = require('gulp-cdn-absolute-path');

gulp.task('default', function () {
	// No op.
});

gulp.task('build', function () {
	gulp.src('*.html')
		.pipe(premailer())
		.pipe(cdnAbsolutePath({ asset: 'static', cdn: cdnUrl })) // Remove this line if you want relative paths instead of absolute
		.pipe(gulp.dest('dist/'));
});
