const gulp = require("gulp");
const concat = require("gulp-concat");

// ファイル結合タスクを作成
gulp.task("concat", () =>
  // 結合元のファイルを指定
  gulp
    .src(["css/abc.css", "css/def.css", "css/ghi.css"])
    // 結合後のファイル名を指定
    .pipe(concat("style.css"))
    // 出力フォルダを指定
    .pipe(gulp.dest("./dist/css/"))
);

gulp.task("default", gulp.task("concat"));
