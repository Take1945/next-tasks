Next Tasks
タスク管理アプリです。Googleアカウントでログインし、タスクの作成・編集・削除ができます。
Udemyで学習したタスクアプリを個人で使用できるようにGoogle認証とセッション管理を追加しました。
右端にGoogleアカウント表示をしようとしていましたがvercelのデプロイ制限がきてまだできていません。

機能

Googleアカウントによる認証
タスクの作成・編集・削除
タスク一覧表示（全タスク・完了済み・期限切れ）
ユーザーごとのタスク管理

使用技術

フレームワーク: Next.js 15 (App Router)
言語: TypeScript
認証: Firebase Authentication (Google サインイン)
データベース: MongoDB (Mongoose)
ユーザーデータ: Cloud Firestore
スタイリング: Tailwind CSS
デプロイ: Vercel

環境変数
.env.local に以下を設定してください：
env# Firebase クライアント
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=

# MongoDB
MONGODB_URI=

# API
API_URL=http://localhost:3000


# パッケージインストール
npm install

# 開発サーバー起動
npm run dev

app/
├── components/
│   ├── EditTaskForm/   # タスク編集フォーム
│   ├── NewTaskForm/    # タスク作成フォーム
│   ├── SideMenu/       # サイドメニュー
│   └── TaskCard/       # タスクカード
├── src/
│   ├── actions/        # Server Actions
│   ├── models/         # Mongoose モデル
│   └── units/          # DB接続などのユーティリティ
└── lib/
    ├── firebase.ts     # Firebase クライアント設定
    └── firebase-admin.ts # Firebase Admin 設定



