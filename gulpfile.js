var gulp = require('gulp');
var premailer = require('gulp-premailer');
var cdnAbsolutePath = require('gulp-cdn-absolute-path');

gulp.task('default', function () {
	gulp.src('*.html')
		.pipe(premailer())
		.pipe(cdnAbsolutePath({asset: 'static', cdn: 'http://dani-careri.no-ip.biz/projects/lucas/hyperbiotics/testyourgut-mail'}))
		.pipe(gulp.dest('dist/'));
});