const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", () =>
  // scssファイルの配置フォルダー及びマッチパターン
  gulp
    .src("sass/**/*.scss")
    // scssファイルの変換処理と、エラーが起こった場合のログ書き出し
    .pipe(sass().on("error", sass.logError))
    // cssを書き出すディレクトリの指定
    .pipe(gulp.dest("css"))
);
