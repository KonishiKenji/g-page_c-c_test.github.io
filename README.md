# g-page_c-c_test.github.io

## 公開手順

1. 公開したいデータのあるブランチをチェックアウト（2021/01/30 時点では**develop**ブランチ ）
2. ブランチのあるディレクトリで以下のコマンドを実行

```
yarn install
npm run deploy

```

3. 該当の GitHub-Page で反映されているか確認

## 2021/01/29

- circleCI の設定ファイルを作成、Setup

## 2021/01/30

- パッケージ[gh-pages](https://github.com/tschaub/gh-pages)を使用  
  → 専用のブランチ： **gh-pages**
- 公開ページは[こちら](https://konishikenji.github.io/g-page_c-c_test.github.io/)
- 参考になったページ
  - https://qiita.com/EisKern/items/15dcf7864fa49df8f247
