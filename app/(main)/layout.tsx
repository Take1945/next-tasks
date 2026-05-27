export const revalidate = 0

import SideMenu from "@/app/components/SideMenu/SideMenu";

const Mainlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (<div className="flex h-screen" >
    <SideMenu/>
    <main className='bg-slate-50 flex-1 overflow-auto'>{children}</main>
    </div>
  )
}

export default Mainlayout