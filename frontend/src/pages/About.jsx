import React from 'react'
import { assets } from '../assets/assets.js'
import Footer from '../components/Footer.jsx'

const About = () => {
  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        {/* Hero Section */}
        <div className='relative mt-6'>
          <img src={assets.about_main_logo} className='w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl' />

          <div className='absolute inset-0 flex flex-col justify-center px-4 sm:px-10 md:px-20 text-white z-10 text-center md:text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Nourishing our community</h1>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-[#FF6D1F]'>one meal at a time</h2>
            <p className='mt-4 sm:mt-6 max-w-xl mx-auto md:mx-0 text-sm sm:text-base'>
              We believe that good food starts with good soil. By partnering with local<br className='hidden md:block'/>
              farmers who prioritize regenerative agriculture, we're building a food<br className='hidden md:block'/>
              system that heals the planet while feeding our neighbors.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FF6D1F] font-sans'>Our Core Value</h1>
          <p className='text-sm sm:text-base text-center px-4 sm:px-12 md:px-28 text-gray-600 mt-3 mb-10'>
            Every decision we make is guided by our deep, unwavering commitment to protecting the environment, uplifting our community, and building a healthier future for generations to come.
          </p>

          <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-0 px-4 sm:px-10 md:px-20 lg:px-40'>
            {/* First */}
            <div className='flex flex-col items-center text-center max-w-sm mx-auto'>
              <img src={assets.like} className='w-16 sm:w-20' />
              <h1 className='text-[#FF6D1F] text-lg sm:text-xl font-semibold mt-3 mb-4'>Sustainably Grown</h1>
              <p className='text-gray-700 px-4 sm:px-10'>
                Our ingredients are cultivated using eco-friendly practices that protect the soil, conserve resources, and respect nature.
              </p>
            </div>

            {/* Second */}
            <div className='flex flex-col items-center text-center max-w-sm mx-auto'>
              <img src={assets.location} className='w-16 sm:w-20' />
              <h1 className='text-[#FF6D1F] text-lg sm:text-xl font-semibold mt-3 mb-4'>Locally Sourced</h1>
              <p className='text-gray-700 px-4 sm:px-10'>
                We partner with nearby farmers and producers to bring fresh, seasonal food straight from our community to your table.
              </p>
            </div>

            {/* Third */}
            <div className='flex flex-col items-center text-center max-w-sm mx-auto'>
              <img src={assets.dinner} className='w-16 sm:w-20' />
              <h1 className='text-[#FF6D1F] text-lg sm:text-xl font-semibold mt-3 mb-4'>Freshly Served</h1>
              <p className='text-gray-700 px-4 sm:px-10'>
                Every meal is thoughtfully prepared and served fresh to deliver honest flavors and nourishing quality in every bite.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className='pb-20 mt-16'>
          <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FF6D1F] font-sans'>Words From The Table</h1>
          <p className='text-sm sm:text-base text-center px-4 sm:px-12 md:px-28 text-gray-600 mt-3 mb-10'>Real stories from our extended family</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-12 md:px-24'>
            {/* Testimonial 1 */}
            <div className='flex flex-col min-h-[320px] w-full max-w-sm mx-auto rounded-xl bg-gray-100 p-6 sm:p-9 gap-5'>
              <img src={assets.rating_starts} className='w-20 sm:w-24 h-auto' />
              <p className='text-gray-700'>"Walking in here feels like a warm hug. The Sunday roast reminds me exactly of my grandmother's cooking. It's my happy place."</p>
              <div className='flex items-center gap-3'>
                <div className='h-10 w-10 border-2 border-black rounded-3xl overflow-hidden mt-3'>
                  <img src={assets.profile_icon} className='h-full w-full px-1 pt-1' />
                </div>
                <div>
                  <h1 className='text-lg font-semibold pt-2'>Sarah Jenkins</h1>
                  <p className='text-sm'>Regular since 2018</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className='flex flex-col min-h-[320px] w-full max-w-sm mx-auto rounded-xl bg-gray-100 p-6 sm:p-9 gap-5'>
              <img src={assets.rating_starts} className='w-20 sm:w-24 h-auto' />
              <p className='text-gray-700'>"I come for the coffee but stay for the atmosphere. It's the only place in the city where the staff genuinely asks how your day is going."</p>
              <div className='flex items-center gap-3'>
                <div className='h-10 w-10 border-2 border-black rounded-3xl overflow-hidden mt-3'>
                  <img src={assets.profile_icon} className='h-full w-full px-1 pt-1' />
                </div>
                <div>
                  <h1 className='text-lg font-semibold pt-2'>John Smith</h1>
                  <p className='text-sm'>Regular since 2019</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className='flex flex-col min-h-[320px] w-full max-w-sm mx-auto rounded-xl bg-gray-100 p-6 sm:p-9 gap-5'>
              <img src={assets.rating_starts} className='w-20 sm:w-24 h-auto' />
              <p className='text-gray-700'>"We celebrated my daughter's birthday here. They didn't just serve cake; they made the whole evening feel magical. Truly special."</p>
              <div className='flex items-center gap-3'>
                <div className='h-10 w-10 border-2 border-black rounded-3xl overflow-hidden mt-3'>
                  <img src={assets.profile_icon} className='h-full w-full px-1 pt-1' />
                </div>
                <div>
                  <h1 className='text-lg font-semibold pt-2'>Emily Davis</h1>
                  <p className='text-sm'>Regular since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
