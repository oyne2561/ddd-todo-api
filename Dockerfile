# 1. ベースイメージの指定
# Node.js v24.1.0 の軽量版(alpine)を使います
FROM node:24.1.0-alpine

# 2. 作業ディレクトリの設定
# コンテナ内の /app フォルダを作業場にします
WORKDIR /app

# 3. 依存定義ファイルのコピー
# package.json と package-lock.json を先にコピーします
COPY package*.json ./

# 4. ライブラリのインストール
# NestJSのビルドには devDependencies (@nestjs/cli など) が必要なので
# 全てのライブラリをインストールします
RUN npm install

# 5. ソースコードのコピー
# PC上の全コードをコンテナにコピーします
COPY . .

# 6. アプリケーションのビルド
# package.json の "build": "nest build" を実行します
# これにより TypeScript が JavaScript に変換され dist フォルダに生成されます
RUN npm run build

# 7. ポートの公開
# NestJSのデフォルトは3000番ですが、main.tsの設定に依存します
# ここでは明示的に3000としておきます
EXPOSE 3000

# 8. 起動コマンド
# package.json の "start:prod": "node dist/main" に合わせたコマンドです
# ビルドされた main.js を実行してサーバーを立ち上げます
CMD ["node", "dist/main"]