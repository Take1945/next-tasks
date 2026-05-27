export const revalidate = 0;
import { cookies  } from "next/headers";
import { redirect } from "next/navigation";
import { adminAuth,adminDb } from "@/app/lib/firebase-admin";
interface UserData{
 username:string;
 photoUrl?:string;
}

async function getUserData():Promise<UserData|null> {
const cookieStore =  await cookies();
const sessionCookie =cookieStore.get("session")?.value;

if(!sessionCookie) redirect("/");


try{
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie,true);
    const docSnap = await adminDb.collection("user").doc(decodedClaims.uid).get()
    
    if(!docSnap) return null;
    return docSnap.data() as UserData
}catch(err){
    console.error("エラーが見つかりません",err);
    redirect("/")
}
}
export default async function Icon(){
const userData = await getUserData()

  if (!userData) {
    return <div className="p-8 text-center">データが見つかりません</div>;
  }

  return (
    <div className='flex p-4 items-center w-full font-medium'>
      <div className="flex items-center space-x-4">
        {userData.photoUrl && (
          <img
            src={userData.photoUrl}
            alt="プロフィール画像"
            className="w-16 h-16 rounded-full border"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold">{userData.username}</h2>
          
        </div>
      </div>
    </div>
  );
}

