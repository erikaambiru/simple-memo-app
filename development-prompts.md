# シンプルメモ帳アプリケーション開発のためのプロンプト集

## 1. プロジェクト初期設定プロンプト

```
React（TypeScript）とGo言語を使用したシンプルなメモ帳アプリケーションを開発したいです。以下の要件を満たすプロジェクトの初期設定方法を教えてください：

【フロントエンド】
- React 18とTypeScriptを使用
- シンプルで使いやすいUI
- APIと通信するサービス層

【バックエンド】
- Go言語でRESTful API
- メモの保存、取得、更新、削除機能
- JSONフォーマットでのデータ交換

プロジェクトの初期設定に必要なコマンドと、基本的なディレクトリ構造を教えてください。
```

## 2. フロントエンド開発プロンプト

```
シンプルメモ帳アプリのフロントエンド部分を開発しています。以下のコンポーネントとサービスの実装方法を教えてください：

1. App.tsx - メインコンポーネント
   - メモの状態管理
   - APIとの通信処理の統合

2. MemoForm.tsx - メモ作成フォームコンポーネント
   - テキスト入力フィールド
   - 送信ボタン
   - フォーム送信処理

3. MemoList.tsx - メモ一覧表示コンポーネント
   - メモのリスト表示
   - 編集機能
   - 削除機能

4. memoService.ts - バックエンドAPIとの通信
   - メモの取得（GET）
   - メモの作成（POST）
   - メモの更新（PUT）
   - メモの削除（DELETE）

5. Memo.ts - メモの型定義

それぞれのファイルのコード例と、コンポーネント間の連携方法を教えてください。
```

## 3. バックエンド開発プロンプト

```
Go言語を使用してシンプルメモ帳アプリのバックエンドAPIを開発しています。以下の機能を実装するためのコードと構造を教えてください：

1. メインサーバープログラム（main.go）
   - HTTPサーバーの設定
   - ルーティング設定
   - CORSの設定

2. APIエンドポイント
   - GET /memos - すべてのメモを取得
   - POST /memos - 新しいメモを作成
   - PUT /memos/:id - 指定IDのメモを更新
   - DELETE /memos/:id - 指定IDのメモを削除

3. データモデル
   - メモの構造体定義

4. データ保存
   - メモリ内またはファイルベースの保存方法

RESTful APIの原則に従い、JSONフォーマットでデータをやり取りする実装方法を教えてください。
```

## 4. スタイリングプロンプト

```
シンプルメモ帳アプリのUIデザインを改善したいです。以下の要素に対するCSSスタイルを提案してください：

1. 全体のレイアウト
   - レスポンシブデザイン
   - 色彩設計

2. メモ作成フォーム
   - テキストエリアのスタイル
   - 送信ボタンのデザイン

3. メモ一覧
   - メモカードのデザイン
   - 編集・削除ボタンのスタイル
   - ホバーエフェクト

4. エラーメッセージの表示

モダンでシンプルなデザインを希望しています。具体的なCSS例と、適用方法を教えてください。
```

## 5. フロントエンドとバックエンドの連携プロンプト

```
React（TypeScript）フロントエンドとGo言語バックエンドの連携方法について教えてください。具体的には：

1. CORS設定
   - フロントエンドからのAPIリクエストを許可する設定

2. APIリクエストの実装
   - fetch APIまたはaxiosを使用した実装例
   - エラーハンドリング

3. 非同期処理
   - async/awaitを使用した効率的な実装

4. 開発環境での連携
   - ローカル開発時の設定
   - プロキシ設定（必要な場合）

両方のサーバーを起動し、正しく連携させるための手順も教えてください。
```

## 6. デバッグとトラブルシューティングプロンプト

```
シンプルメモ帳アプリの開発中に発生する可能性のある一般的な問題とその解決方法を教えてください：

1. フロントエンド
   - コンポーネントのレンダリング問題
   - 状態管理の問題
   - APIリクエストのエラー

2. バックエンド
   - サーバー起動の問題
   - APIエンドポイントの応答エラー
   - CORSエラー

3. 連携問題
   - フロントエンドとバックエンドの通信エラー

それぞれの問題に対するデバッグ方法と解決策を具体的に教えてください。
```

## 7. 機能拡張プロンプト

```
シンプルメモ帳アプリに以下の機能を追加したいです。それぞれの実装方法を教えてください：

1. メモの検索機能
   - フロントエンドの検索UI
   - バックエンドの検索API

2. メモのカテゴリ分け
   - カテゴリモデルの追加
   - カテゴリ選択UI
   - カテゴリ別表示機能

3. マークダウン記法のサポート
   - マークダウンパーサーの導入
   - プレビュー機能

4. ダークモード/ライトモードの切り替え
   - テーマ切り替えの実装
   - スタイル設定

それぞれの機能について、フロントエンドとバックエンドの両方の実装例を教えてください。
```

## 8. デプロイメントプロンプト

```
シンプルメモ帳アプリをデプロイする方法を教えてください。以下の環境へのデプロイ手順を詳しく説明してください：

1. フロントエンド
   - Netlify
   - Vercel
   - GitHub Pages

2. バックエンド
   - Heroku
   - AWS
   - Google Cloud Run

3. 本番環境での設定
   - 環境変数の設定
   - APIエンドポイントの設定
   - CORSの設定

4. デプロイ後のテスト方法

無料または低コストで利用できるサービスを優先的に教えてください。
```
