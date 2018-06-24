// imports
var gulp = require('gulp');
var sass = require('gulp-sass')

// sass
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});

// sass watch
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

// default
gulp.task('default',['sass:watch']);
