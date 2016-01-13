# 最低限抑えておきたいタスクランナーの書き方まとめ

ICS MEDIA記事「[最低限抑えておきたいタスクランナーの書き方まとめ](https://ics.media/entry/9199)」で紹介したコードを掲載しています。

## 目次

- [ファイルのコピー（記事）](https://ics.media/entry/9199#task-copy)
    - [Grunt - 01_copyfiles_grunt](01_copyfiles_grunt)
    - [Gulp - 01_copyfiles_gulp](01_copyfiles_gulp)

- [ファイルの削除（記事）](https://ics.media/entry/9199#task-delete)
    - [Grunt - 02_delete_files_grunt](02_delete_files_grunt)
    - [Gulp - 02_delete_files_gulp](02_delete_files_gulp)

- [ファイルの監視（記事）](https://ics.media/entry/9199#task-watch)
    - [Grunt - 03_watch_files_grunt](03_watch_files_grunt)
    - [Gulp - 03_watch_files_gulp](03_watch_files_gulp)

- [画像ファイルの最適化（記事）](https://ics.media/entry/9199#task-imagemin)
    - [Grunt - 04_min_images_grunt](04_min_images_grunt)
    - [Gulp - 04_min_images_gulp](04_min_images_gulp)

- [JavaScriptファイルのminify（記事）](https://ics.media/entry/9199#task-minify)
    - [Grunt - 05_min_javascript_grunt](05_min_javascript_grunt)
    - [Gulp - 05_min_javascript_gulp](05_min_javascript_gulp)

- [TypeScriptファイルのコンパイル（記事）](https://ics.media/entry/9199#task-typescript)
    - [Grunt - 06_compile_typescript_grunt](06_compile_typescript_grunt)
    - [Gulp - 06_compile_typescript_gulp](06_compile_typescript_gulp)

- [Sassのコンパイル（記事）](https://ics.media/entry/9199#task-sass)
    - [Grunt - 07_compile_sass_grunt](07_compile_sass_grunt)
    - [Gulp - 07_compile_sass_gulp](07_compile_sass_gulp)

## コードの試し方

1. Gitリポジトリをcloneします。
> git clone https://github.com/ics-creative/160107_taskrunner.git

2. それぞれ試したいディレクトリへ移動します。
> cd 160107_taskrunner/01_copyfiles_grunt

3. モジュールのインストールを行います。
package.jsonに個別に必要なモジュールの設定を保存済みのため、```npm install```コマンドを実行することで必要なモジュールが全てインストールされます。
> npm install

4. タスクランナーを実行します。（Gruntであれば「```grunt```」コマンド、Gulpであれば「```gulp```」コマンド）
> grunt
