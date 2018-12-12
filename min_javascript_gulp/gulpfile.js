const gulp = require("gulp");
const uglify = require("gulp-uglify");

gulp.task("compress", () =>
  // 圧縮元ファイル名
  gulp
    .src(["src/hello.js", "src/goodby.js"])
    // JavaScriptファイルの圧縮
    .pipe(uglify())
    // 圧縮後の書き出し先
    .pipe(gulp.dest("dist"))
);

gulp.task("default", gulp.task("compress"));
