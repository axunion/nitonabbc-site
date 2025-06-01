# Nitoname Bible Baptist Church

仁戸名聖書バプテスト教会のウェブサイトです。AstroフレームワークとTypeScriptで作成されています。

## Project Structure

プロジェクトの主なディレクトリ構成です。

```
public/
src/
  components/   # UIコンポーネント
  content/      # コンテンツコレクション（下記参照）
  layouts/      # レイアウト
  pages/        # ページ
astro.config.mjs
package.json
tsconfig.json
```

## Content Collections (Astro)

`src/content/` ディレクトリには、イベントやお知らせなどのMarkdownファイルが年ごと・カテゴリごとに整理されています。
Astroの[コンテンツコレクション](https://docs.astro.build/ja/guides/content-collections/)機能を利用し、
`getCollection()` で各コレクションのデータを取得できます。これにより、型安全に記事やイベント情報を管理できます。

例: `src/content/specials/` 以下に年度・イベントごとのディレクトリがあり、各イベントの詳細や画像が格納されています。

## Commands

主なコマンド一覧です。

| コマンド              | 説明                         |
|----------------------|------------------------------|
| npm install          | 依存パッケージのインストール |
| npm run dev          | 開発サーバーの起動           |
| npm run build        | 本番用ビルド                  |
| npm run preview      | ビルドのローカルプレビュー   |

## Dependencies

主な依存パッケージは以下の通りです。

- astro: Astro本体
- astro-icon: アイコン表示用
- @iconify-json/line-md, @iconify-json/mdi: アイコンセット
- @types/grecaptcha: reCAPTCHA型定義

詳細は`package.json`をご参照ください。

## Deployment

このサイトはCloudflare Pagesでホスティングされています。GitHubリポジトリと連携しており、mainブランチにpushされると自動的にデプロイされます。
