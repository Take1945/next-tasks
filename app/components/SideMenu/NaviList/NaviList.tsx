
import {FaTasks,FaRegClock,FaRegCheckSquare,} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Navitem from'./Navitem/Navitem';
interface NavItemsType {
    id:number;
    label:string;
    link:string;
    icon:React.ReactNode;
}

const NaviList = () => {
    const navList:NavItemsType[]=[
        {id:1,label:'All Tasks',link:'/all', icon:<FaTasks className='size-5'/>},
        {id:2,label:'Completed Tasks',link:'/completed', icon:<FaRegCheckSquare className='size-5'/>},
        {id:3,label:'Expired Tasks',link:'/expired', icon:<FaRegClock className='size-5'/>},
        {id:4,label:'Calender',link:'/calender', icon:<SlCalender className='size-5'/>}
    ];
  return (
    <div className='mt-24'>
        {navList.map((item)=>(<Navitem key={item.id} 
        label={item.label} 
        link={item.link} 
        icon={item.icon}/>))}
    </div>
  )
}

export default NaviList