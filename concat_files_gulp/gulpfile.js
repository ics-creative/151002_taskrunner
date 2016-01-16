var gulp = require("gulp");
var concat = require("gulp-concat");

// ファイル結合タスクを作成
gulp.task("concat", function () {
  // 結合元のファイルを指定
  return gulp.src([
        "css/abc.css",
        "css/def.css",
        "css/ghi.js"])
      // 結合後のファイル名を指定
      .pipe(concat("style.css"))
      // 出力フォルダを指定
      .pipe(gulp.dest("./dist/css/"));
});

gulp.task("default", ["concat"]);