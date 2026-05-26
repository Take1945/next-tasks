import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['mongoose'],
  turbopack: {
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  //  ここから追加：ポップアップの通信を許可するヘッダー設定
  async headers() {
    return [
      {
        source: '/(.*)', // すべてのページとAPIルートに適用
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups', // ポップアップの操作を許可
          },
        ],
      },
    ]
  },
}

export default nextConfig
