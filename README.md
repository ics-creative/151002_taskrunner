# 最低限抑えておきたいタスクランナーの書き方まとめ

ICS MEDIA記事「[最低限抑えておきたいタスクランナーの書き方まとめ](https://ics.media/entry/9199)」で紹介したコードを掲載しています。


## コードの試し方

1. 本Gitリポジトリをcloneします。
> git clone https://github.com/ics-creative/151002_taskrunner.git

2. それぞれ試したいディレクトリへ移動します。
> cd 151002_taskrunner/copy_files_grunt

3. モジュールのインストールを行います。
package.jsonに個別に必要なモジュールの設定を保存済みのため、```npm install```コマンドを実行することで必要なモジュールが全てインストールされます。
> npm install

4. タスクランナーを実行します。（Gruntであれば「```grunt```」コマンド、Gulpであれば「```gulp```」コマンド）
> grunt


## 目次

- ファイルのコピー
    - [Grunt - copy_files_grunt](copy_files_grunt)
    - [Gulp - copy_files_gulp](copy_files_gulp)

- ファイルの削除
    - [Grunt - delete_files_grunt](delete_files_grunt)
    - [Gulp - delete_files_gulp](delete_files_gulp)
    
- ファイルの移動
    - [Grunt - move_files_grunt](move_files_grunt)
    - [Gulp - move_files_gulp](move_files_gulp)

- ファイルの結合
    - [Grunt - concat_files_grunt](concat_files_grunt)
    - [Gulp - concat_files_gulp](concat_files_gulp)

- ファイルの監視
    - [Grunt - watch_files_grunt](watch_files_grunt)
    - [Gulp - watch_files_gulp](watch_files_gulp)

- 画像ファイルの最適化
    - [Grunt - min_images_grunt](min_images_grunt)
    - [Gulp - min_images_gulp](min_images_gulp)

- JavaScriptファイルのminify
    - [Grunt - min_javascript_grunt](min_javascript_grunt)
    - [Gulp - min_javascript_gulp](min_javascript_gulp)

- TypeScriptファイルのコンパイル
    - [Grunt - compile_typescript_grunt](compile_typescript_grunt)
    - [Gulp - compile_typescript_gulp](compile_typescript_gulp)

- Sassのコンパイル
    - [Grunt - compile_sass_grunt](compile_sass_grunt)
    - [Gulp - compile_sass_gulp](compile_sass_gulp)
