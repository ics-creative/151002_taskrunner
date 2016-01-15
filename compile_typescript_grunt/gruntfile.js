module.exports = function(grunt) {
  grunt.initConfig({
    typescript: {
      base: {
        // TypeScriptのファイルが配置しているディレクトリ
        src: ["ts/**/*.ts"],
        dest: "js/",
        options: {
          // コメントの削除を行うか？
          removeComments: false,
          // es3, es5, es6から選択
          // ECMAScript 5向けに書き出し
          target: "es5"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-typescript");
  grunt.registerTask("default",["typescript"]);
};