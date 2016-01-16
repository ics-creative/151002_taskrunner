var gulp = require("gulp");
var ts = require("gulp-typescript");

gulp.task("default", function () {
  // TypeScriptのファイルが配置しているディレクトリ
  gulp.src("ts/**/*.ts")
      .pipe(ts({
        // ES3, ES5, ES6から選択
        // ECMAScript 5向けに書きだし
        target: "ES5",
        // コメントを削除するか？
        removeComments: false
      }))
      // jsプロパティを参照
      .js
      // 書き出しディレクトリの指定
      .pipe(gulp.dest("js"));
});