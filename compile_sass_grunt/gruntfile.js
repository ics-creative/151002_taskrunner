module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          // scssファイルの配置ディレクトリ
          cwd: "sass",
          // scssファイルのマッチパターンの指定
          src: ["**/*.scss"],
          // ディレクトリの指定
          dest: "css",
          // 拡張子の指定
          ext: ".css"
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.registerTask("default", ["sass"]);
};