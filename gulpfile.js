const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-ruby-sass');
const babel = require('gulp-babel');
const uglifycss = require('gulp-uglifycss');
const server = require('gulp-server-livereload');
const browserify = require('gulp-browserify')
gulp.task('sass', () => {
return
     sass('/styles.scss')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./public'))
   ;
})

gulp.task('babel', () => {
	return gulp.src('/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('/public'));
});

gulp.task('webserver', () => {
  gulp.src('/app.js')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});
gulp.task('browserify', function() {
	gulp.src('/app.js')
		.pipe(browserify({
		  insertGlobals : true,
		  debug : !gulp.env.production
		}))
		.pipe(gulp.dest('./build/js'))
});
gulp.task('default', ['webserver', 'babel', 'sass','browserify']);
