module.exports = function (grunt) {
  grunt.initConfig({
    typescript: {
      base: {
        // TypeScriptのファイルが配置しているフォルダー
        src: ["ts/**/*.ts"],
        // 出力先のフォルダ
        dest: "js/",
        // オプションの設定
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
  grunt.registerTask("default", ["typescript"]);
};