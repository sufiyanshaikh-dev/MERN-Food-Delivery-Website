import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext.jsx'

const Menu = () => {
    const { menu, setCategory, category } = useContext(FoodContext);

    return (
        <>
        <div className='mt-[120px] mb-10'>
            <h1 className='text-5xl text-gray-600 text-center mb-4'>Our Menu</h1>
            <p className='hidden md:block text-center mb-12'>Choose from a diverse menu featuring a delectable dishes. Our mission is to satisfy your cravings <br /> & elevate yuor dining experience, one delicious meal at a time.</p>
            <p className='md:hidden sm:block text-center mb-12'>Choose from a diverse menu featuring a delectable dishes. Our mission is to satisfy your cravings & elevate yuor dining experience</p>


            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-1 mt-6'>
                {menu && menu.length > 0 ? (
                    menu.map((item) => (
                    <div key={item._id || item.id} onClick={() => setCategory(category === item.name ? "All" : item.name)} className='flex flex-col items-center'>
                            <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden  cursor-pointer ${category === item.name ? "border-gray-600 border-4" : ""}`}>
                                <img
                                    src={item.image} alt={item.name} className='w-full h-full object-cover'/>
                            </div>
                            <p className='mt-2 text-gray-700 font-medium text-center'>{item.name}</p>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-500 col-span-full text-center'>No menu items available</p>
                )}
            </div> 
        </div>
        <hr className='h-[2px] bg-gray-300 mb-10 border-0' />
        </>
    )
}

export default Menu
