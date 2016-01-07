var gulp = require("gulp");

gulp.task("copy", function() {
  // コピー元ディレクトリの指定
   gulp.src("src/*")  
    // コピー先ディレクトリの指定
    .pipe(gulp.dest("dist/src")); 
});

gulp.task("default", ["copy"]);
