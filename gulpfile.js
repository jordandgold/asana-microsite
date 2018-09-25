'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

gulp.task('prod:sass', function () {
  var processors = [
      autoprefixer({browsers: ['last 1 version']}),
  ];
  return gulp.src('./src/style/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./src/style/css'));
});
 
gulp.task('dev', function () {
  gulp.watch('./src/**/scss/**/*.scss', ['prod:sass']);
});