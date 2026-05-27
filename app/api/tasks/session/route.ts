
import { adminAuth } from '@/app/lib/firebase-admin'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { idToken } = await req.json()

  const expiresIn = 60 * 60 * 24 * 5 * 1000 //5日

  try {
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn })
    const cookieStore= await cookies()
    cookieStore.set('session', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: expiresIn/1000,
      path: '/',
      sameSite:'lax',
    })
    return NextResponse.json({ status: 'success' },{
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    }
  })
  } catch {
    return NextResponse.json({ error: '認証失敗' }, { status: 401 })
  }
}


export async function DELETE() {
    const cookiestore = await cookies()
  cookiestore.delete('session')
  return NextResponse.json({ status: 'success' })
}