module.exports = function (grunt) {
  grunt.initConfig({
    rename: {
      main: {
        files: [
          {
            src: ["cache.txt"],
            dest: "dist/hello.md"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-rename");
  grunt.registerTask("default", ["rename"]);
}