var gulp = require("gulp");
var rename = require("gulp-rename");
var del = require("del");

// ファイルの移動
gulp.task("move", function () {
  // 対象のファイルを指定
  return gulp.src("cache.txt")
      // ファイル名を変更
      .pipe(rename("hello.md"))
      // 出力先を指定
      .pipe(gulp.dest("dist"));
});

// 元のファイルを削除
gulp.task("clean", function () {
  del(["cache.txt"]);
});

gulp.task("default", ["move", "clean"]);
