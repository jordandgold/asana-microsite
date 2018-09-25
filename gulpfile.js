'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

gulp.task('prod:sass', function () {
  var processors = [
      autoprefixer({browsers: ['last 1 version']}),
  ];
  return gulp.src('./public/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('dev', function () {
  gulp.watch('./public/**/scss/**/*.scss', ['prod:sass']);
});