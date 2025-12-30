import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <section className="relative w-full h-[400px]">
            {/* <!-- Background Image --> */}
            <img src={assets.header_img} alt="Food Banner" className="w-full h-[480px] object-cover mt-7 rounded-xl" />

            {/* <!-- Text on top --> */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-10 pt-28">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-10">Order Your Food</h1>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-[-9px]">Delicious Food Awaits</h1>
                <p className="hidden md:block text-sm md:text-sm mb-6">Discover a world of delicious flavors with our freshly prepared meals. Every dish is made with love <br />
                    and the finest ingredients to satisfy your cravings. From hearty breakfasts to indulgent dinners, <br />
                    we bring restaurant-quality food right to your doorstep. Experience the joy of tasting something <br />
                    extraordinary in every bite, all from the comfort of your home.</p>
                <p className='md:hidden text-sm sm:block mb-6'>Discover a world of delicious flavors with our freshly prepared meals. Every dish is made with love
                    and the finest ingredients to satisfy your cravings. From hearty breakfasts to indulgent dinners,</p>
                <button className="bg-white text-gray-700 py-3 px-4 rounded-3xl w-36 mt-2">Order Now</button>
            </div>
        </section>

    )
}

export default Hero
