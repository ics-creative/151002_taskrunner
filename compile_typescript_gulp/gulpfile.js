const gulp = require("gulp");
const ts = require("gulp-typescript");

gulp.task("default", () =>
  // TypeScriptのファイルが配置している"
  gulp
    .src("ts/**/*.ts")
    .pipe(
      ts({
        // ES3, ES5, ES6から選択
        // ECMAScript 5向けに書きだし
        target: "es5",
        // コメントを削除するか？
        removeComments: false
      })
    )
    // jsプロパティを参照
    .js// 書き出し"の指定
    .pipe(gulp.dest("js"))
);
