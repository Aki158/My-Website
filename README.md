# My-Website

## 🌱概要
自己紹介とポートフォリオが見れるサイト

## 🏠URL
https://aki158-website.blog

## ✨デモ

![output](https://github.com/Aki158/My-Website/assets/119317071/def3b33f-bb4d-47d0-9a1d-c95385c979cc)

## 📝説明
このサイトは、私の自己紹介とポートフォリオが見れる静的なWebサイトです。

このサイトでは、採用に関わる企業の方やソフトウェアエンジニアに見てもらうことを想定して作成しています。

Projectsには、注目してもらいたいプロジェクトから順に展示しています。

気になるプロジェクトの`README`ボタンをクリックしてみてください。

基本的な機能として、自己紹介とProjectsの表示/各プロジェクトのREADMEへのアクセスができます。

### 補足
[説明](#説明)で登場する用語について補足します。

用語の意味がわからない時は、下記表を確認してください。

| 用語 | 意味 |
| ------- | ------- |
| ポートフォリオ | 個人の技能、経験、成果を示すために使用される作品集のことです。 |

## 🚀使用方法
一通りの手順のイメージは[デモ](#デモ)を参考にしてください。

1. [URL](#url)にアクセスする
2. Projectsの情報を確認して、気になるプロジェクトの`README`ボタンをクリックする

## 💾使用技術
<table>
<tr>
  <th>カテゴリ</th>
  <th>技術スタック</th>
</tr>
<tr>
  <td rowspan=5>フロントエンド</td>
  <td>HTML</td>
</tr>
<tr>
  <td>CSS</td>
</tr>
<tr>
  <td>JavaScript</td>
</tr>
<tr>
  <td>CSSのフレームワーク : Tailwind CSS</td>
</tr>
<tr>
  <td>Tailwind CSSのフレームワーク : Flowbite</td>
</tr>
<tr>
  <td rowspan=4>インフラ</td>
  <td>Amazon EC2</td>
</tr>
<tr>
  <td>Nginx</td>
</tr>
<tr>
  <td>Ubuntu</td>
</tr>
<tr>
  <td>VirtualBox</td>
</tr>
<tr>
  <td rowspan=3>その他</td>
  <td>Git</td>
</tr>
<tr>
  <td>Github</td>
</tr>
<tr>
  <td>SSL/TLS証明書取得、更新、暗号化 : Certbot</td>
</tr>
</table>

## 👀機能一覧
![image](https://github.com/Aki158/My-Website/assets/119317071/439a2c4c-c6af-42a5-8fc5-20b94d5a4f54)

| 機能 | 内容 |
| ------- | ------- |
| Projectsの表示 | 各プロジェクトには、画像、タイトル、概要、タグ、`README`ボタンが記載されています。 |
| About/Projects | ページ内のリンクに遷移します。 |
| ダークモードとライトモードの切り替え | ヘッダーの切替ボタンでダークモードとライトモードの切り替えができます。<br>ローカルストレージの値を参照してどちらに切り替えるか処理しています。 |
| Report | `weekly-report`というGitHubリポジトリへ遷移します。 |
| README | ポートフォリオのGitHubリポジトリへ遷移します。 |
| ⬆︎Back to Top | ページの先頭へ移動します。 |

## 📜作成の経緯

デプロイの経験がなかったため、Amazon EC2へ静的サイトをリリースすることにしました。

静的サイトは、これまでに手がけたプロジェクトを一つに集約したかったため、ポートフォリオサイトを作成することにしました。

## ⭐️こだわった点

### デプロイ

静的サイトの開発および本番環境へのリリースの流れを理解するためのプロジェクトです。

プロジェクトを実施する前提条件として、自身のウェブサーバをセットアップする方法を学びました。

- VirtualBox(Ubuntu)
- Amazon EC2

次に、ウェブサーバの役割と HTTP 通信の基本を理解し、Nginx を活用したリクエストのハンドリング方法について学びました。

最後に、インターネットの基盤である DNS について理解し、TLS によるセキュリティ確保の重要性を学びました。

これらの知識を活用して自身のポートフォリオサイトをデプロイしました。

### レンダリング

Projectsの表示には、JSONファイルを読み込み、レンダリングすることで表示させています。

JSONファイルには、以下のような形式のデータを記述しています。

JSONファイルは、[portfolio.json](https://github.com/Aki158/My-Website/blob/main/src/json/portfolio.json)を確認してください。

```json
[
    {
        "id" : 1,
        "title" : "E-Commerce-Webapp-with-Stripe-Sync",
        "summary" : "アートに関わる物理・デジタル両方の商品を扱うECサイト",
        "source" : "https://github.com/recursion-backend-projects/E-Commerce-Webapp-with-Stripe-Sync",
        "thumbnail" : "./images/E-Commerce-Webapp-with-Stripe-Sync.png",
        "type" : "web-app",
        "tag" : ["チーム開発", "CI/CD", "TypeScript", "Ruby on Rails", "MySQL", "Docker", "GitHub Actions","AWS"]
    },
]
```

## 📮今後の実装したいもの
- [x] レジュメのブラッシュアップ
- [x] ポートフォリオサイトのブラッシュアップ
- [x] 成果物の追加

## 📑参考文献
### 公式ドキュメント
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
