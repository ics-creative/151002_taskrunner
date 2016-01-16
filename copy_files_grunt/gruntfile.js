module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      main: {
        // コピー元ディレクトリの指定
        src: "src/*",
        // コピー先ディレクトリの指定
        dest: "dist/",
      },
    }
  });
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("default", ["copy"]);
};