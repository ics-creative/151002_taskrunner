var gulp = require("gulp");
var imagemin = require("gulp-imagemin");

gulp.task("imagemin", function () {
  // 画像のマッチパターン
  gulp.src("images/*.png")
      // 画像の最適化処理
      .pipe(imagemin())
      // 最適化済みの画像を書き出すフォルダー
      .pipe(gulp.dest("dist/images"));
});

gulp.task("default", ["imagemin"]);