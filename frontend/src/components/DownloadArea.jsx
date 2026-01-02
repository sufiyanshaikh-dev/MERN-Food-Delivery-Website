// import React from 'react'
// import { assets } from '../assets/assets.js'

// const DownloadArea = () => {
//   return (
//     <div className='mb-20'>
//       <div className='flex flex-col md:gap-4'>
//         <p className='text-gray-600 text-5xl text-center mt-28'>For Better Experience Download</p>
//         <p className='text-gray-600 text-5xl text-center'>QuickBite App</p>
//       </div>
//       <div className='flex items-center justify-center gap-4 mt-10'>
//         <img src={assets.play_store} />
//         <img src={assets.app_store} />
//       </div>
//     </div>
//   )
// }

// export default DownloadArea

//! ------------- New One --------------
import React from 'react'
import { assets } from '../assets/assets.js'

const DownloadArea = () => {
  return (
    <section className="w-full overflow-hidden mb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Text */}
        <div className="flex flex-col gap-2 text-center mt-16 sm:mt-24">
          <p className="text-gray-600 text-2xl sm:text-4xl md:text-5xl font-medium">
            For Better Experience Download
          </p>
          <p className="text-gray-600 text-2xl sm:text-4xl md:text-5xl font-medium">
            QuickBite App
          </p>
        </div>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <img src={assets.play_store} alt="Play Store" className="w-40 sm:w-44 md:w-48 cursor-pointer" />
          <img src={assets.app_store} alt="App Store" className="w-40 sm:w-44 md:w-48 cursor-pointer" />
        </div>

      </div>

    </section>
  )
}

export default DownloadArea
