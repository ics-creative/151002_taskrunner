module.exports = function (grunt) {
  grunt.initConfig({
    imagemin: {
      build: {
        files: [{
          expand: true,
          // 元の畫像の配置フォルダー
          cwd: "images/",
          // 画像のマッチパターン
          src: ["*.png"],
          // 最適化済みの画像を書き出すフォルダー
          dest: "dist/images/"
        }]
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.registerTask("default", ["imagemin"]);
};