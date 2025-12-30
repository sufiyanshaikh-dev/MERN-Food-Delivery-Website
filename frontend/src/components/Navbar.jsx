import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Login from "../pages/Login.jsx";
import { FoodContext } from "../context/FoodContext.jsx";

const Navbar = () => {

    // State Variables
    const [isLogin, setIsLogin] = useState(false)
    const [visible, setVisible] = useState(false)
    const { token, setToken } = useContext(FoodContext);

    const openLogin = () => setIsLogin(true);
    const closeLogin = () => setIsLogin(false)

    return (
        <nav className="flex items-center justify-between py-4 select-none px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

            {/* LEFT — LOGO */}
            <Link to="/verify">
                <img src={assets.real_logo} alt="logo" className="w-44 md:w-36 h-[36px]" />
            </Link>

            {/* CENTER — NAV LINKS */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px]' />
                </NavLink>
                <NavLink to="/menu" className="flex flex-col items-center gap-1">
                    <p>MENU</p>
                    <hr className='w-2/4 border-none h-[1.5px]' />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT US</p>
                    <hr className='w-2/4 border-none h-[1.5px]' />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT US</p>
                    <hr className='w-2/4 border-none h-[1.5px]' />
                </NavLink>
            </ul>

            {/* RIGHT — SEARCH / CART / SIGN IN */}
            <div className="flex items-center gap-5">
                <Link to="/cart">
                    <img src={assets.basket_icon} alt="cart" className="w-7 cursor-pointer" />
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 h-5 cursor-pointer sm:hidden' />

                {/* side bar menu for small screen */}
                <div className={`fixed z-50 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
                    <div className="flex flex-col text-gray-600">
                        <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                            <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180' />
                            <p>Back</p>
                        </div>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/menu">MENU</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT US</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
                    </div>
                </div>

                {
                    token 
                    ? <button onClick={() => setToken(localStorage.removeItem("token"))} className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200">Logout</button>
                    : <button onClick={openLogin} className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 duration-200">Sign In</button>
                }
            </div>
            {/* LOGIN MODAL */}
            {isLogin && <Login isOpen={isLogin} onClose={closeLogin} />}
        </nav >


    );
};

export default Navbar;
