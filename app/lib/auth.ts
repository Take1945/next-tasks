import { cookies } from "next/headers"
import { adminAuth } from "@/app/lib/firebase-admin"
import { redirect } from "next/navigation"


const getUserId = async (): Promise<string> => {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("session")?.value
  if (!sessionCookie) redirect("/")
try{  const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true)
  return decodedClaims.uid
} catch (e) {
    console.error('authError', e)
    redirect('/error')
  }
}
export default getUserId