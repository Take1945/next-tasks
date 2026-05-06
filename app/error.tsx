'use client'
import Link from "next/link"
const ErrorPage = () => {
 return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900'>
<h1 className='text-8xl font-bold '>Error</h1>
<p>Page not Found</p>
<Link href="/" >Go back home</Link>
</div>
  )
}

export default ErrorPage