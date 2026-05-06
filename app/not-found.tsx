import Link from "next/link"

const NotfoundPage = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900'>
<h1>404</h1>
<p>Page not Found</p>
<Link href="/" >Go back home</Link>
</div>
  )
}

export default NotfoundPage