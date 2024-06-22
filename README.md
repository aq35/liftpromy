# ポートフォリオサイト

このプロジェクトは、Vue.jsを使用して作成されたポートフォリオサイトです。サイトはNetlify上でホスティングされています。

## 公開URL

[ポートフォリオサイトを見る](https://legendary-genie-069cc1.netlify.app/)

## 使用技術

- **Vue.js 3**: フロントエンドフレームワーク
- **vue-router**: ルーティングライブラリ
- **Vite**: 高速なビルドツール
- **TypeScript**: 型定義されたJavaScript

## セットアップ

プロジェクトをローカル環境で動作させるための手順は以下の通りです。

### 必要条件

- Node.js (推奨バージョン: 14.x 以上)
- npm または yarn

### インストール手順

1. リポジトリをクローンします。

   ```sh
   git clone https://github.com/aq35/liftpromy.git
   cd liftpromy/liftpromy

2. 依存関係をインストールします。

   ```sh
   npm install

3. 開発サーバーを起動します。

   ```sh
   npm run dev
   
   ブラウザで
   http://localhost:5173/
   にアクセスすると、アプリケーションが表示されます。

### ビルド手順

1. プロジェクトを本番環境用にビルドするには、以下のコマンドを実行します。

   ```sh
   npm run build
   
   生成されたファイルは dist フォルダーに出力されます。


### デプロイ手順

1. 本番環境へのデプロイは、リポジトリのメインブランチにプッシュすることで自動的にNetlifyによって行われます。

   ```sh
   git add .
   git commit -m "Deploy updates"
   git push origin main

