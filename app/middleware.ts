import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  
  const sessionCookie = request.cookies.get('__session')?.value;
  const { pathname } = request.nextUrl;


  if (!sessionCookie) {

    const loginUrl = new URL('/app', request.url);
    loginUrl.searchParams.set('redirectTo', pathname); 
    return NextResponse.redirect(loginUrl);
  }

  // クッキーが存在すれば、そのままページを表示
  return NextResponse.next();
}

// 3. 認証を適用したいルートを「ホワイトリスト」形式で指定する
export const config = {
  matcher: [
    /*
     * 認証が必要なパスを指定（例：ダッシュボードやマイページ）
     * - /dashboard で始まるすべてのパスに適用
     * - /profile に適用
     */
     `/app`,
    '/app/:path*'
  ],
};
