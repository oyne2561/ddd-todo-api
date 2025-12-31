## 教材URL
https://gemini.google.com/app/d6b3df2ef485ea94?hl=ja

### geminiに投げたプロンプト
nestjsでDDD(ドメイン駆動設計)で開発したい。TDDでも進めてほしい。
クリーンアーキテクチャでport adapterで依存性の逆転をやってほしい。
TODOアプリで良いのでお願いします。
まずはRESTでGETのみのパスで良い。
サンプルデータをDBに用意して取得するマイクロサービスのAPIを作りたい。
集約の概念も学習したいのでTODOに紐ずくtag(複数)というテーブルと関係性でお願い。
ハンズオンでできるように教材にして出力してください。

## Swaggerの開き方

アプリケーションを起動後、以下のURLでSwagger UIにアクセスできます：

```
http://localhost:3000/api
```

アプリケーションの起動方法：
```bash
npm run dev
```

### コンテナ実行手順
実行手順
ターミナルでこのファイルがある場所を開き、以下を実行してみてください。

イメージを作る（ビルド）


`docker build -t my-todo-app .`
動かす（コンテナ起動）

`docker run -p 3000:3000 my-todo-app`