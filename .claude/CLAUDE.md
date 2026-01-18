# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

仁戸名聖書バプテスト教会のウェブサイト。Astro 5による静的サイト。

- **Site URL:** https://nitonabbc.org
- **Deployment:** Cloudflare Pages (main branchへのpushで自動デプロイ)
- **Language:** 日本語UI / 英語コード

## Commands

```bash
pnpm dev       # 開発サーバー起動
pnpm build     # 型チェック + 本番ビルド
pnpm preview   # ビルド結果のプレビュー
```

## Architecture

### Content Collections

イベント記事は `src/content/specials/{YEAR}/{event-slug}/` に配置:

```
src/content/specials/2025/summer-evangelistic/
├── index.md       # frontmatter + 本文
└── brochure.webp  # カバー画像
```

**Frontmatter:**
```yaml
date: "2025-08-10"
title: "夏期伝道集会"
tags: ["2025"]
cover: "./brochure.webp"
```

新規記事は `src/content/specials/_template/` をコピーして作成。

### Theming System

スクロールによる動的テーマ切り替え:
- セクションに `data-scroll="theme-name"` 属性を設定
- `src/scripts/scroll.ts` がIntersectionObserverで検知
- bodyクラスを `theme-light`, `theme-dark`, `theme-blue` 等に変更
- テーマ定義は `src/styles/themes.css`

### Path Aliases

`@/*` → `src/*` (tsconfig.json)

```typescript
import Layout from "@/layouts/Layout.astro";
```

## Key Files

| ファイル | 説明 |
|---------|------|
| `src/content/config.ts` | コンテンツコレクションのスキーマ定義 |
| `src/pages/specials/[...slug].astro` | イベント記事の動的ルート |
| `src/styles/themes.css` | テーマカラー定義 |
| `src/scripts/scroll.ts` | スクロールによるテーマ切り替え |
| `src/consts.ts` | 環境変数・定数 |

## Environment Variables

```
PUBLIC_RECAPTCHA_SITE_KEY  # reCAPTCHA v3サイトキー
PUBLIC_CONTACT_ENDPOINT    # お問い合わせフォーム送信先
```
