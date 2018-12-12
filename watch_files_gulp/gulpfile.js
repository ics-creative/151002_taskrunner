const gulp = require("gulp");

gulp.task("watch", () =>
  // 監視するファイルのパス
  gulp.watch("js/**/*.js", function(event) {
    // ファイルの変更後実行したい処理
    console.log("file changed");
  })
);

gulp.task("default", gulp.task("watch"));
