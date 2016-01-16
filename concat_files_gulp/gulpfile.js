var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("concat", function () {
  return gulp.src([
        "css/abc.css",
        "css/def.css",
        "css/ghi.js"])
      .pipe(concat("style.css"))
      .pipe(gulp.dest("./dist/css/"));
});

gulp.task("default", ["concat"]);