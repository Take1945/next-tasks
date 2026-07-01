Next Tasks
Googleアカウントでログインして使えるタスク管理アプリです。
デモ
🔗 next-tasks-demo2.vercel.app
概要
UdemyのタスクアプリをベースにGoogle認証とセッション管理を独自に追加し、個人で実用できるレベルに仕上げました。FirebaseのIDトークンをサーバーサイドで検証し、HttpOnly Cookieでセッションを管理するセキュアな認証を実装しています。
技術スタック
フロントエンド

Next.js 15（App Router）
TypeScript
Tailwind CSS

認証・バックエンド

Firebase Authentication（Googleサインイン）
Firebase Admin SDK（セッションCookie発行・検証）
MongoDB / Mongoose（タスクデータ）
Cloud Firestore（ユーザーデータ）

インフラ

Vercel

工夫した点

FirebaseのIDトークンをサーバーサイドで検証し、HttpOnly CookieにセッションCookieを保存することでXSS攻撃に強い認証を実装
セッションの有効期限を5日に設定し、未認証ユーザーは各ページ・APIルートで自動リダイレクト
タスクを「全タスク・完了済み・期限切れ」で絞り込める一覧表示を実装

機能

Googleアカウントによるログイン・ログアウト
タスクの作成・編集・削除
タスク一覧表示（全タスク・完了済み・期限切れ）
ユーザーごとのタスク管理
