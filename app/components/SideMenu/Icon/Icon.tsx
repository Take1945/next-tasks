export const revalidate = 0;
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminAuth, adminDb } from "@/app/lib/firebase-admin";
import Image from "next/image";

interface UserData {
  username: string;
  photoUrl?: string;
}

async function getUserData(): Promise<UserData | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) redirect("/");

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
    const docSnap = await adminDb.collection("user").doc(decodedClaims.uid).get();

    if (!docSnap.exists) {
      return {
        username: decodedClaims.name || "ユーザー",
        photoUrl: decodedClaims.picture || undefined,
      };
    }
    
    return docSnap.data() as UserData;
  } catch (err) {
    console.error("エラーが見つかりません", err);
    redirect("/");
  }
}

export default async function Icon() {
  const userData = await getUserData();

  if (!userData) {
    return (
      <div className="p-8 text-center text-sm font-medium text-gray-500 bg-gray-50 rounded-xl border border-gray-200 max-w-sm mx-auto my-4">
        データが見つかりません
      </div>
    );
  }

  const timestamp = Date.now();
  const avatarUrl = userData.photoUrl ? `${userData.photoUrl}?t=${timestamp}` : null;

  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-200 hover:shadow-md max-w-fit">
      {/* 💡 全体のコンテナの内側にコメントを移動しました */}
      
      {/* アイコンの枠 */}
      <div className="relative w-11 h-11 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-inner">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${userData.username}のアイコン`}
            fill
            sizes="44px"
            className="object-cover transition-transform duration-200 hover:scale-105"
            priority
          />
        ) : (
          <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </div>

      {/* ユーザー名エリア */}
      <div className="flex flex-col min-w-0 pr-1">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
          {userData.username}
        </h2>
        <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
          Account
        </span>
      </div>
    </div>
  );
} 