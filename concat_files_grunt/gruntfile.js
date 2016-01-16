module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      // 結合場所に使う文字列を指定
      options: {
        separator: "\n"
      },
      dist: {
        // 結合するファイルを指定
        src: [
          "css/abc.css",
          "css/def.css",
          "css/ghi.css"],
        // 結合先を指定
        dest: "dist/css/style.css"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
};