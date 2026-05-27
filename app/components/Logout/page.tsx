'use client';
import {signOut} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/app/lib/firebase"

const GoogleLogout = () => {
const router = useRouter()

  const handleLogout = async () => {
try{
    await signOut(auth);
    await fetch('/api/session',{method:'DELETE'});
    router.refresh()
    window.location.href = "/all" ;
} catch(err){
console.error('LoginError',err)
}
 

}
return (
    <button onClick={handleLogout}className='flex p-4 items-center w-full hover:bg-gray-700 font-medium'>ログアウト</button>
  )
}
export default GoogleLogout
