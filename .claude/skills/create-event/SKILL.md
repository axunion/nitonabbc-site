---
description: イベント記事を新規作成する
argument-hint: [年] [イベントスラグ]
---

template.md の内容を元に src/content/specials/$0/$1/index.md を作成してください。

1. src/content/specials/$0/$1/ ディレクトリを作成
2. このスキルの template.md を読み取り、その内容で src/content/specials/$0/$1/index.md を作成
3. ユーザーにイベントのタイトルと日付（YYYY-MM-DD）を質問
4. frontmatterを更新:
   - date: ユーザー指定の日付
   - title: ユーザー指定のタイトル
   - tags: ["$0"]
   - cover: "./brochure.webp"（変更不要）
5. 本文中の「イベントタイトル」もユーザー指定のタイトルに置換
6. 完了後、カバー画像 brochure.webp を src/content/specials/$0/$1/ に配置するようユーザーに案内
