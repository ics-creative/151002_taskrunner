const gulp = require("gulp");
const del = require("del");

gulp.task("clean", () =>
  del([
    // 削除するファイルの指定
    "dir1/abc.txt",
    "dir2/abc.*",
    // パス名の前に「!」使用することで否定の意味をもたせます。
    // ここでは削除をしないという意味になります。
    "!dir2/abc.js"
  ])
);

gulp.task("default", gulp.task("clean"));
