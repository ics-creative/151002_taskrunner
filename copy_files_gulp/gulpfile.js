const gulp = require("gulp");

gulp.task("copy", () =>
  // コピー元フォルダーの指定
  gulp
    .src("src/*")
    // コピー先フォルダーの指定
    .pipe(gulp.dest("dist/src"))
);

gulp.task("default", gulp.task("copy"));
