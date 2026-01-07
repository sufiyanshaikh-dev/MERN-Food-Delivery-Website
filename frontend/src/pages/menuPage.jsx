// // ---------------- button -----------------
// // const [isOn, setIsOn] = useState(false);

// //   <div onClick={() => setIsOn(!isOn)} className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer bg-gray-300 transition-colors duration-300`}>
// //     <div className={`bg-[#FF6D1F] w-6 h-6 rounded-full shadow-md transform ${isOn ? 'translate-x-8' : 'translate-x-0'} transition-transform duration-300`}/></div>

//! ------------------- New One ----------------------
import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import ProductCard from '../components/ProductCard.jsx';
import { FoodContext } from '../context/FoodContext.jsx';
import Footer from '../components/Footer.jsx';
import { NavLink } from 'react-router-dom';

const MenuPage = () => {

  // State Variables
  const [value, setValue] = useState(0);
  const [toggles, setToggles] = useState({ Organic: false, BestSellers: false, Offers: false })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [visible, setVisible] = useState(false)

  const { products, menu } = useContext(FoodContext)
  const toggleHandler = (key) => setToggles(prev => ({ ...prev, [key]: !prev[key] }))

  const filterProducts = (item) => {
    setCategory(prev => (prev === item.name ? "" : item.name));
  };

  const reset = () => {
    setCategory("");
    setValue(0);
  }

  // Filtered products
  const displayedProducts = category
    ? products.filter(p => p.category === category)
    : products && value ? products.filter(p => p.price <= value) : products;

  return (
    <>
      {/* -------- Desktop Sidebar + Products -------- */}
      <div className="hidden md:flex gap-6 mb-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r mt-5 shadow-md p-5 flex-col gap-6 rounded-xl h-fit">
            <p className="mb-[10px]">CATEGORY</p>
          <hr />

          <span>
            <p onClick={() => setIsSidebarOpen(prev => !prev)} className="w-full py-4 text-lg font-semibold bg-[#FF6D1F] border-[#e05b13] border-2 text-white rounded-xl hover:bg-[#c9500f] transition pl-8">Filter</p>
          </span>

          <div className="bg-white px-4 py-2 mx-[-20px]">
            <div className="flex justify-between">
              <p className="text-md mt-2">Price Range</p>
              <p className="text-md mt-2">${value}</p>
            </div>
            <input type="range" min="0" max="100" value={Number(value)} onChange={(e) => setValue(e.target.value)} style={{ background: `linear-gradient(to right, #FF6D1F 0%, #FF6D1F ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)` }} className="w-full h-[6px] appearance-none rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[#FF6D1F] [&::-webkit-slider-thumb]:shadow-md" />
          </div>

          <div className="flex flex-col gap-3 mb-[-10px]">
            {["Organic", "BestSellers", "Offers"].map((item) => (
              <span key={item} className="border-4 border-white rounded-[20px] shadow-[0_10px_30px_rgba(255,109,31,0.85)]">
                <p className="w-full border-2 border-[#e05b13] flex items-center justify-between text-white py-2 bg-[#FF6D1F] rounded-2xl font-medium px-4">
                  <span>{item === "BestSellers" ? "Best Sellers" : item}</span>
                  <span onClick={() => toggleHandler(item)} className="w-16 h-8 flex items-center rounded-full p-1 cursor-pointer bg-white">
                    <span className={`bg-[#FF6D1F] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${toggles[item] ? "translate-x-8" : "translate-x-0"}`} />
                  </span>
                </p>
              </span>
            ))}
          </div>
          <hr />

          <div onClick={() => reset()} className='flex gap-4 justify-center cursor-pointer mt-4'>
            <p>Reset Filter</p>
            <span className='px-6 bg-[#FF6D1F] text-sm hover:text-[16px] rounded-xl text-white'>Reset</span>
          </div>
        </div>

{/* Products - Desktop */}
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
  {displayedProducts.map((item, index) => (
    <div key={index} className="mb-5"> {/* Add vertical margin */}
      <ProductCard product={item} />
    </div>
  ))}
</div>
      </div>

      {/* -------- Mobile Filter Button -------- */}
      <div className="sm:block md:hidden mb-4 w-full px-4 sm:px-[5vw] lg:px-[9vw]">
        <button onClick={() => setVisible(true)} className="w-full py-3 bg-[#FF6D1F] text-white font-semibold rounded-xl hover:bg-[#c9500f] transition">
          Filter Products
        </button>
      </div>

{/* Products - Mobile */}
<div className="sm:grid md:hidden grid-cols-1 gap-4 px-4 sm:px-[5vw] lg:px-[9vw]">
  {displayedProducts.map((item, index) => (
    <div key={index} className="mb-4"> {/* Add vertical margin */}
      <ProductCard product={item} />
    </div>
  ))}
</div>

      {/* ------------------------------------------------ */}

      {/* overlay */}
      <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setVisible(false)} />

      {/* sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-full bg-white transition-transform duration-300 w-full sm:w-[85%] max-w-full ${visible ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col text-gray-600 h-full">
          {/* header */}
          <div onClick={() => setVisible(false)} className="flex items-center gap-3 p-4 cursor-pointer border-b">
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          {/*  */}
          <div className='px-4'>
            <p onClick={() => setIsSidebarOpen(prev => !prev)} className="w-full py-4 text-lg font-semibold bg-[#FF6D1F] border-[#e05b13] border-2 text-white rounded-xl hover:bg-[#c9500f] transition pl-8 mt-5 mb-4">Filter</p>

            <hr />

            <div className="bg-gray-50 px-4 py-5 mt-5 rounded-xl mb-5">
              <div className="flex justify-between">
                <p className="text-md mt-2">Price Range</p>
                <p className="text-md mt-2">${value}</p>
              </div>
              <input type="range" min="0" max="100" value={Number(value)} onChange={(e) => setValue(e.target.value)} style={{ background: `linear-gradient(to right, #FF6D1F 0%, #FF6D1F ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)` }} className="w-full h-[6px] appearance-none rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[#FF6D1F] [&::-webkit-slider-thumb]:shadow-md" />
            </div>
            <hr />

            <div className="flex flex-col gap-3 mt-5 mb-5">
              {["Organic", "BestSellers", "Offers"].map((item) => (
                <span key={item} className="border-4 border-white rounded-[20px] shadow-[0_10px_30px_rgba(255,109,31,0.45)]">
                  <p className="w-full border-2 border-[#e05b13] flex items-center justify-between text-white py-2 bg-[#FF6D1F] rounded-2xl font-medium px-4">
                    <span>{item === "BestSellers" ? "Best Sellers" : item}</span>
                    <span onClick={() => toggleHandler(item)} className="w-16 h-8 flex items-center rounded-full p-1 cursor-pointer bg-white">
                      <span className={`bg-[#FF6D1F] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${toggles[item] ? "translate-x-8" : "translate-x-0"}`} />
                    </span>
                  </p>
                </span>
              ))}
            </div>
            <hr />

            <div onClick={() => reset()} className='flex gap-4 justify-center cursor-pointer mt-10'>
              <p>Reset Filter</p>
              <span className='px-6 bg-[#FF6D1F] text-sm hover:text-[16px] rounded-xl text-white'>Reset</span>
            </div>

          </div>
        </div>
      </aside>

      <Footer />

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 transition-opacity duration-300" onClick={() => setIsSidebarOpen(false)}>
          <aside className="fixed top-0 left-0 z-50 h-full bg-white shadow-lg transition-transform duration-300 w-[85%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col h-full border-2 border-[#FF6D1F] rounded-xl">
              {/* Header */}
              <div className="bg-gradient-to-b from-[#e5560a] to-[#ff7b34] h-28 rounded-t-xl relative flex items-center justify-center">
                <p className="text-white text-3xl font-sans text-center">Category</p>
                <img src={assets.cross_icon} onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 w-6 h-6 cursor-pointer" />
              </div>

              {/* Menu Items */}
              <div className="bg-[#fff7e6] flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-3">
                {menu.map((item) => (
                  <div key={item.id || item.name} onClick={() => filterProducts(item)} className={`w-full flex items-center h-12 pl-5 rounded-xl justify-start cursor-pointer transition-colors duration-200 ${category === item.name ? "bg-[#FF6D1F] text-white" : "bg-[#f7e1c7] hover:bg-[#ffe1b0]"}`}>
                    <p className="text-lg font-semibold">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

export default MenuPage
