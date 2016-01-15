var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("default", function () {
    // scssファイルの配置ディレクトリ及びマッチパターン
   gulp.src("sass/**/*.scss")
    // scssファイルの変換処理と、エラーが起こった場合のログ書き出し
    .pipe(sass().on("error", sass.logError))
    // cssを書き出すディレクトリの指定
    .pipe(gulp.dest("css"));
});