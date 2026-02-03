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

### 記事の追加方法

Claude Codeの `/create-event {年} {スラグ}` スキルで作成できます。

手動の場合は `src/content/specials/_template/` を `src/content/specials/{YYYY}/{event-slug}/` にコピーし、frontmatterを編集してください。

## Commands

| コマンド              | 説明                         |
|----------------------|------------------------------|
| pnpm dev             | 開発サーバーの起動           |
| pnpm build           | 本番用ビルド                  |
| pnpm preview         | ビルドのローカルプレビュー   |
| pnpm check           | biome lint/formatチェック    |
| pnpm check:write     | biome lint/format自動修正    |

## Deployment

このサイトはCloudflare Pagesでホスティングされています。GitHubリポジトリと連携しており、mainブランチにpushされると自動的にデプロイされます。
