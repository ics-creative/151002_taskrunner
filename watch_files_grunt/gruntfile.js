module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        // 監視するファイルのパス
        files: ["js/**/*.js"],
        // ファイルに変更があった場合に実行されるタスク
        tasks: ["filechanged"]
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  
  grunt.registerTask("filechanged", function () {
    console.log("file changed");
  });
  grunt.registerTask("default", ["watch"]);
};