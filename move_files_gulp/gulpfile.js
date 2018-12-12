const gulp = require("gulp");
const rename = require("gulp-rename");
const del = require("del");

// ファイルの移動
gulp.task("move", () =>
  // 対象のファイルを指定
  gulp
    .src("cache.txt")
    // ファイル名を変更
    .pipe(rename("hello.md"))
    // 出力先を指定
    .pipe(gulp.dest("dist"))
);

// 元のファイルを削除
gulp.task("clean", () => del(["cache.txt"]));

gulp.task("default", gulp.series("move", "clean"));
