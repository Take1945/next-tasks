import { FaTasks, FaRegClock, FaRegCheckSquare } from "react-icons/fa";
import Navitem from './Navitem/Navitem';

interface NavItemsType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NaviList = () => {
    const navList: NavItemsType[] = [
        { id: 1, label: 'All Tasks', link: '/all', icon: <FaTasks className='size-5'/> },
        { id: 2, label: 'Completed Tasks', link: '/completed', icon: <FaRegCheckSquare className='size-5'/> },
        { id: 3, label: 'Expired Tasks', link: '/expired', icon: <FaRegClock className='size-5'/> },
    ];

    return (
        // モバイル：横並びスクロールで省スペース化 / PC：縦並びに切り替え
        <div className="flex flex-row gap-2 overflow-x-auto pb-1 md:flex-col md:gap-2 md:overflow-visible md:pb-0">
            {navList.map((item) => (
                <div key={item.id} className="whitespace-nowrap md:w-full">
                    <Navitem 
                        label={item.label} 
                        link={item.link} 
                        icon={item.icon}
                    />
                </div>
            ))}
        </div>
    );
};

export default NaviList;