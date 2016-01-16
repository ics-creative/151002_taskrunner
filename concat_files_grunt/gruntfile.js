module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ";",
      },
      dist: {
        src: [
          "css/abc.css",
          "css/def.css",
          "css/ghi.css"],
        dest: "dist/css/style.css",
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["concat"]);
}