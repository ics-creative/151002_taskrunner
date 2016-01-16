module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      target: {
        files: {
          // 書き出されるファイル名, 圧縮するファイル名
          "dist/hello.js": ["src/hello.js"],
          "dist/goodby.js": ["src/goodby.js"],
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("default", ["uglify"]);
}