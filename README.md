# vue2 project Documentation

## About the environment

<pre>
root/   
  ├ github  
      ∟ workflows   
          ├ chromatic.ym　= mainブランチpush時にchromaticの実行  
          ├ test.yml = mainブランチにPR時にlint系のtestを実行  

  ├ .husky = commit時にlint/formatを実行  
      ∟　etc...  

  ├ .dist　= buildされたファイル  
      ∟　etc...  

  ├ .storybook  
        ├　main.js　= メインとなる構成ファイル。Storybookサーバーの動作を制御するため、変更した場合は再起動する必要あり  
        ├　manager.js =　StorybookのUIを制御  
        ├　preview.js =　storyのレンダリング方法を制御  

  ├ .vscode  
      ├　extensions.json = 拡張機能を共有  
      ├　settings.json =　拡張機能の設定を共有  

  ├ node_modules =　モジュール  

  ├ public =　静的リソースファイル  

  ├ src = ソースフォルダー。構成はAtomic Designをベースにしています
      ├ assets =   
      ├ components  
          ├ atoms = 最小単位(原子)  
          ├ molecules = 2つ以上のatomsを組み合わせる場合これ(分子)  
          ├ organisms =　原子や分子を組み合わせて作る場合これ(有機体)  
          ├ templates = 原子や分子、有機体を組み合わせ、サイト全体の構成を作る場合これ  
          ├ VueBasics = Vueの基本的な機能のデモ
      ├ pages =　最終形であるページ  
      ├ store = Vuexによるグローバルなステート
      ├ App.vue = コンポーネントのルート。グローバルで使うCSSの定義とかコンポーネントで最初にやっておきたい初期化処理とかはここでやる。
      ├ main.ts = new Vue をするエントリーポイント。globalで設定しておきたい処理などをする。
      ├ router.ts = vueのルーティングの処理
      ├ shims-tsx.d.ts/shims-vue.d.ts = .vueファイルをTypeScriptで使えるようにする

  ├ .babelrc.json = 各フォルダ配下の設定。babel.config.jsはプロジェクト全体の設定
  ├ vue.config.js = デフォルトでは作成されていないファイルで、vueの初期値を変更する場合等に使用する設定ファイル
  ├ .env.example = 環境変数。こちらを複製して.envとして使用する  
  ├ .eslintrc.json = eslintの設定ファイル(jsのlinter)  
  ├ .gitignore = gitに含めたくないものをここに記載  
  ├ .node-version = nodeのversionを記載。nodeを基本このバージョンに合わせてください。  
  ├ .prettierignore = prettierに含めたくないものをここに記載  
  ├ .prettierrc.json = prettierの設定ファイル(formatter)  
  ├ jest.config.js = jestの設定ファイル  
  ├ package.json = 依存するパッケージに関する情報を記録するのに使用するファイル  
  ├ tsconfig.json = TypeScriptの設定ファイル  
  ├ yarn.lock = プロジェクトが依存してるパッケージの正確なバージョンを記録してるファイル  
</pre>

## Initial setting

1. vscode 使用している方は画面右下にポップアップが表示されると思うので、
   install をクリックして拡張機能をインストール（すでにインストール済みであれば不要です）

2. yarn のグローバルインストール。（すでにインストール済みであれば不要です）
   `$ npm i -g yarn`

3. 依存ライブラリのインストール
   `$ yarn`

4. .env ファイルの用意
   `$ cp .env.example .env`

5. aspida(api クライアント)の build
   `$ yarn aspida`

## Command

```
// 開発サーバー起動 localhost:3000
$ yarn dev

// Storybook起動 localhost:6006
$ yarn storybook

// lint実行
$ yarn lint

// test実行
$ yarn test

// 本番build
$ yarn build
```

## Commit husky

git commit すると以下のことが起こります。

- prettier によるフォーマット
- eslint による構文チェック

エラーが出る場合コミットを中断します。適切にコードを修正して出直して下さい。

## Flow

1. main から feature ブランチを切る
2. storybook 上でコンポーネントを作成する
3. コンポーネントのテストを書く
4. Vue 上で作成したコンポーネントを使用する
5. main にプルリクエストを上げる
6. Chromatic で UI レビューを受ける
7. すべての UI レビューの Accept/すべての Test の Pass を確認したあと main にマージする

## API Reference
