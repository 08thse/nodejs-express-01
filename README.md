# README

## 元ネタ

『Node.js 超入門 第3版』- Chapter 4

## Include

* Node.js
* Express

## 実行方法

```
npm start
  or
node bin/www
```

## アクセス方法

ブラウザから http://localhost:8080/ へアクセス

## 作成した方法

### Express Generator のインストール

```
npm install -g express-generator
```

### Generate

```
express --view=ejs nodejs-express-01
cd nodejs-express-01
npm install
```

## Azure での実行

Azure WebApp で、Node.js を実行環境として本リポジトリをデプロイして…
