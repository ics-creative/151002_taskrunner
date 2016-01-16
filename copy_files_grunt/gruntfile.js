module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      main: {
        // コピー元フォルダーの指定
        src: "src/*",
        // コピー先フォルダーの指定
        dest: "dist/"
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("default", ["copy"]);
}