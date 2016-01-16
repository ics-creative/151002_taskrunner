var gulp = require("gulp");
var rename = require("gulp-rename");
var del = require("del");

gulp.task("move", function () {
  return gulp.src("cache.txt")
      .pipe(rename("hello.md"))
      .pipe(gulp.dest('dist'));
});

gulp.task("clean", function () {
  del(["cache.txt"]);
});

gulp.task("default", ["move", "clean"]);
