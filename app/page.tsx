'use client'
import {signInWithPopup,} from "firebase/auth"
import {auth,provider} from  "./lib/firebase"
import { useRouter } from "next/navigation";

function SignInButton(){
    const router = useRouter()
  const signInGoogle =async()=>{
    try{
    await signInWithPopup(auth,provider);
    router.push("/completed");
  }catch (err){
    console.error
    ("LoginError",err)
  };
}
  return(
<button  className="flex flex-col items-center justify-center gap-4 w-[300px] h-[200px] bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md active:bg-gray-50 transition-all duration-200 text-gray-700 font-medium text-lg px-6" onClick={signInGoogle}>
Googleでサインイン
</button>
)
} 


export default function Google() {
  
  return (
    <div>{(
      <SignInButton/>
      )}</div>
  )
}