  // ---------------- button -----------------
  // const [isOn, setIsOn] = useState(false);

  //   <div onClick={() => setIsOn(!isOn)} className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer bg-gray-300 transition-colors duration-300`}>
  //     <div className={`bg-[#FF6D1F] w-6 h-6 rounded-full shadow-md transform ${isOn ? 'translate-x-8' : 'translate-x-0'} transition-transform duration-300`}/></div>

import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import ProductCard from '../components/ProductCard.jsx';
import { FoodContext } from '../context/FoodContext.jsx';
import Footer from '../components/Footer.jsx';


const MenuPage = () => {

  // State Variables
  const [value, setValue] = useState(0);
  const [toggles, setToggles] = useState({ Organic: false, BestSellers: false, Offers: false })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [category, setCategory] = useState("");
  
  const { products, menu, addToCart } = useContext(FoodContext)
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
      <div className="flex gap-6 mb-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

        {/* -------- Sidebar -------- */}
        <div className="w-64 bg-white border-r mt-5 shadow-md p-5 flex flex-col gap-6 rounded-xl h-fit">

          <div className="flex justify-between mb-[-12px]">
            <p>CATEGORY</p>
            <img src={assets.dropdown_icon} onClick={() => setIsSidebarOpen(prev => !prev)} className="w-3 h-auto cursor-pointer" />
          </div>
          <hr />

          <span className="border-4 border-white rounded-2xl shadow-[0_10px_30px_rgba(255,109,31,0.85)]">
            <p className="w-full py-4 text-lg font-semibold bg-[#FF6D1F] border-[#e05b13] border-2 text-white rounded-xl hover:bg-[#c9500f] transition pl-8">{category ? category : "All"}</p>
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

          <div onClick={() => reset()} className='flex gap-4 justify-center cursor-pointer'>
            <p>Reset Filter</p>
            <span className='px-6 bg-[#FF6D1F] text-sm hover:text-[16px] rounded-xl text-white'>Reset</span>
          </div>
        </div>

        {/* -------- Products -------- */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {displayedProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>

      </div>
      <Footer />


      {isSidebarOpen && (
        <div className="fixed top-0 left-0 sm:w-72 md:w-96 h-full bg-white shadow-lg transition-transform duration-300 z-50 p-2">
          <div className='border-2 border-[#FF6D1F] rounded-xl h-full'>
            <div className='bg-gradient-to-b from-[#e5560a] to-[#ff7b34] h-28 rounded-md rounded-b-none'>
              <p className='text-white text-3xl font-sans text-center pt-8'>Category</p>
              <img src={assets.cross_icon} onClick={() => setIsSidebarOpen(prev => !prev)} className='mt-[-60px] ml-[340px] cursor-pointer' />
            </div>
            <div className='bg-[#fff7e6] w-auto h-[511px] rounded-xl rounded-t-none flex flex-col gap-2 px-2 pt-5'>
              {
                menu.map((item) => {
                  return (
                    <div onClick={() => filterProducts(item)} className={`w-full hover:cursor-pointer flex h-12 pt-[10px] pl-5 rounded-xl bg-[#f7e1c7] justify-center ${category === item.name ? "bg-[#FF6D1F] text-white" : "bg-[#f7e1c7]"}`}>
                      <p className='text-lg hover:text-xl font-semibold'>{item.name}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuPage
