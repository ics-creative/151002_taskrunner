
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  return del([
    'dir1/abc.txt',
    'dir2/abc.*',
    '!dir2/abc.js'
  ]);
});

gulp.task('default',['clean']);