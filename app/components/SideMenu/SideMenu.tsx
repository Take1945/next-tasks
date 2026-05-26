import NaviList from "./NaviList/NaviList"
import GoogleLogout from "../Logout/page"
import Icon from "./Icon/Icon"

const SideMenu = () => {
  return (
    <div className='w-56 pt-8 bg-gray-800 text-white'>
<div>
    <h1 className='px-2 text-2xl font-bold'>Next Tasks</h1>
    <Icon/>
    <NaviList/>
     <GoogleLogout />
</div>

    </div>
  )
}

export default SideMenu