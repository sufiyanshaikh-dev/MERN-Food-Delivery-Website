// import React, { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { assets } from "../assets/assets.js";
// import Login from "../pages/Login.jsx";
// import { FoodContext } from "../context/FoodContext.jsx";

// const Navbar = () => {

//     // State Variables
//     const [isLogin, setIsLogin] = useState(false)
//     const [visible, setVisible] = useState(false)
//     const { token, setToken } = useContext(FoodContext);

//     const openLogin = () => setIsLogin(true);
//     const closeLogin = () => setIsLogin(false)

//     return (
//         <nav className="flex items-center justify-between py-4 select-none px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

//             {/* LEFT — LOGO */}
//             <Link to="/">
//                 <img src={assets.real_logo} alt="logo" className="w-44 md:w-36 h-[36px]" />
//             </Link>

//             {/* CENTER — NAV LINKS */}
//             <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//                 <NavLink to="/" className="flex flex-col items-center gap-1">
//                     <p>HOME</p>
//                     <hr className='w-2/4 border-none h-[1.5px]' />
//                 </NavLink>
//                 <NavLink to="/menu" className="flex flex-col items-center gap-1">
//                     <p>MENU</p>
//                     <hr className='w-2/4 border-none h-[1.5px]' />
//                 </NavLink>
//                 <NavLink to="/about" className="flex flex-col items-center gap-1">
//                     <p>ABOUT US</p>
//                     <hr className='w-2/4 border-none h-[1.5px]' />
//                 </NavLink>
//                 <NavLink to="/contact" className="flex flex-col items-center gap-1">
//                     <p>CONTACT US</p>
//                     <hr className='w-2/4 border-none h-[1.5px]' />
//                 </NavLink>
//             </ul>

//             {/* RIGHT — SEARCH / CART / SIGN IN */}
//             <div className="flex items-center gap-5">
//                 <Link to="/cart">
//                     <img src={assets.basket_icon} alt="cart" className="w-7 cursor-pointer" />
//                 </Link>
//                 <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 h-5 cursor-pointer sm:hidden' />

//                 {/* side bar menu for small screen */}
//                 <div className={`fixed z-50 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
//                     <div className="flex flex-col text-gray-600">
//                         <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
//                             <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180' />
//                             <p>Back</p>
//                         </div>
//                         <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
//                         <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/menu">MENU</NavLink>
//                         <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT US</NavLink>
//                         <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
//                     </div>
//                 </div>

//                 {
//                     token 
//                     ? <button onClick={() => setToken(localStorage.removeItem("token"))} className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200">Logout</button>
//                     : <button onClick={openLogin} className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200">Sign In</button>
//                 }
//             </div>
//             {/* LOGIN MODAL */}
//             {isLogin && <Login isOpen={isLogin} onClose={closeLogin} />}
//         </nav >


//     );
// };

// export default Navbar;


//! -------------------------- New One ---------------------------------
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Login from "../pages/Login.jsx";
import { FoodContext } from "../context/FoodContext.jsx";

const Navbar = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [visible, setVisible] = useState(false);
  const { token, setToken } = useContext(FoodContext);

  const openLogin = () => setIsLogin(true);
  const closeLogin = () => setIsLogin(false);

  return (
    <>
      <nav className="w-full bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 select-none">

          {/* LOGO */}
          <Link to="/">
            <img src={assets.real_logo} alt="logo" className="w-28 sm:w-32 md:w-36 h-[36px] object-contain" />
          </Link>

          {/* NAV LINKS (DESKTOP) */}
          <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
            {["/", "/menu", "/about", "/contact"].map((path, i) => (
              <NavLink key={i} to={path} className="flex flex-col items-center gap-1">
                <p>{["HOME", "MENU", "ABOUT US", "CONTACT US"][i]}</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-transparent group-hover:bg-black" />
              </NavLink>
            ))}
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="cart" className="w-6 cursor-pointer" />
            </Link>

            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className="w-5 h-5 cursor-pointer sm:hidden" />

            {
              token
                ? <button onClick={() => { localStorage.removeItem("token"); setToken(null); }} className="hidden sm:block px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200">Logout</button>
                : <button onClick={openLogin} className="hidden sm:block px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200">Sign In</button>
            }
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setVisible(false)} />

      <aside className={`fixed top-0 right-0 z-50 h-full bg-white transition-transform duration-300 w-[85%] max-w-xs ${visible ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-3 p-4 cursor-pointer border-b">
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className="py-3 px-6 border-b" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 px-6 border-b" to="/menu">MENU</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 px-6 border-b" to="/about">ABOUT US</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 px-6 border-b" to="/contact">CONTACT</NavLink>

          <div className="p-4">
            {
              token
                ? <button onClick={() => { localStorage.removeItem("token"); setToken(null); setVisible(false); }} className="w-full py-2 bg-red-500 text-white rounded-md">Logout</button>
                : <button onClick={() => { openLogin(); setVisible(false); }} className="w-full py-2 bg-red-500 text-white rounded-md">Sign In</button>
            }
          </div>
        </div>
      </aside>

      {isLogin && <Login isOpen={isLogin} onClose={closeLogin} />}
    </>
  );
};

export default Navbar;
