import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
  
    ignoreDuringBuilds: true,
  },
  serverExternalPackages: ['mongoose'],
  turbopack: {
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [
      // 💡 lh3 がつくGoogleアカウントのアイコン用（https）
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      // 💡 エラーに出ている「lh3なし・http」のGoogleアイコン用（追加）
      {
        protocol: 'http',
        hostname: 'googleusercontent.com',
      },
      // 💡 万が一のために「lh3なし・https」のパターンも網羅（追加）
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
      },
      // Firebase Storage用
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
}

export default nextConfig
