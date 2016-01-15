module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {
      build: {
       files: [{
         expand: true,
         // 元の畫像の配置ディレクトリ
         cwd: "images/",
         // 画像のマッチパターン
         src: ["*.png"],
         // 最適化済みの画像を書き出すディレクトリ 
         dest: "dist/images/"  
       }]
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.registerTask("default",["imagemin"]);
}