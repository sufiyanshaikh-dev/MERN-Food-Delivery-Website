import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = ({ active, setActive }) => {
  return (

    <div className='w-[18%] h-full border-r-2'>
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink to={"/add"} onClick={() => setActive("product")} className={`flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l`}>
          <img src={assets.add_icon_green} className='w-5 h-5' />
          <p className='hidden md:block'>Products</p>
        </NavLink>
        <NavLink to={"/orders"} onClick={() => setActive("orders")} className={`flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l`}>
          <img src={assets.order_icon} className='w-5 h-5' />
          <p className='hidden md:block'>Orders</p>
        </NavLink>
        <NavLink to={"/menu"} onClick={() => setActive("menu")} className={`flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l`}>
          <img src={assets.order_icon} className='w-5 h-5' />
          <p className='hidden md:block'>Menu</p>
        </NavLink>
      </div>
    </div>

  );
};

export default Sidebar;
