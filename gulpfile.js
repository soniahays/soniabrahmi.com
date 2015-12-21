var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    sass = require('gulp-sass'),
    package = require('./package.json'),
    nodemon = require('nodemon');

gulp.task('bundle', function() {
    return browserify(package.paths.app)
        .transform('reactify', {stripTypes: true, es6: true})
        .bundle()
        .pipe(source(package.dest.app))
        .pipe(gulp.dest(package.dest.dist));
});

gulp.task('sass', function() {
	gulp.src('public/css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'],['bundle']);
  	gulp.watch('public/css/*.scss', ['sass']);
});

gulp.task('nodemon', function () {
    nodemon({
        script: 'bin/www', ext: 'js jsx jade',ignore:['public/scripts/react/*']
    });
});