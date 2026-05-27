// completed/ フォルダに error.tsx を新規作成
'use client'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <div className="p-8">
      <h2>エラーが発生しました</h2>
      <p>{error.message}</p>
      <p>digest: {error.digest}</p>
    </div>
  )
}