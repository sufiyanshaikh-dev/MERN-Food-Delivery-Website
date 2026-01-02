// import React from 'react'
// import { assets } from '../assets/assets.js'

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 pt-14 pb-6 w-full">
//       <div className=" mx-auto px-10 pb-5 flex justify-between gap-10">

//         {/* Section 1 */}
//         <div>
//           <img src={assets.real_logo} alt="Logo" className="w-40 mb-4" />
//           <p className="text-sm leading-relaxed mb-5">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <div className="flex gap-4">
//             <img src={assets.facebook_icon} alt="Facebook" className="w-8 cursor-pointer" />
//             <img src={assets.twitter_icon} alt="Twitter" className="w-8 cursor-pointer" />
//             <img src={assets.linkedin_icon} alt="LinkedIn" className="w-8 cursor-pointer" />
//           </div>
//         </div>

//         {/* Section 2 */}
//         <div>
//           <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="cursor-pointer hover:text-white">Home</li>
//             <li className="cursor-pointer hover:text-white">About Us</li>
//             <li className="cursor-pointer hover:text-white">Delivery</li>
//             <li className="cursor-pointer hover:text-white">Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Section 3 */}
//         <div>
//           <h3 className="text-white font-semibold text-lg mb-4 text-start">Get in Touch</h3>
//           <p className="text-sm mb-2">+92 300 1256767</p>
//           <p className="text-sm">support@example.com</p>
//         </div>

//       </div>

//       <hr className="border-gray-700 my-6" />

//       <p className="text-center text-sm text-gray-500">
//         © 2025 Your Company Name. All rights reserved.
//       </p>
//     </footer>
//   )
// }

// export default Footer


//! --------------------  New One --------------------------
import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 w-full overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col gap-10 sm:flex-row sm:justify-between">

        {/* Section 1 */}
        <div className="sm:max-w-sm">
          <img src={assets.real_logo} alt="Logo" className="w-32 sm:w-40 mb-4" />
          <p className="text-sm leading-relaxed mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="Facebook" className="w-7 cursor-pointer" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-7 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-7 cursor-pointer" />
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="cursor-pointer hover:text-white">Delivery</li>
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">+92 300 1256767</p>
          <p className="text-sm break-all">support@example.com</p>
        </div>

      </div>

      <hr className="border-gray-700 my-6" />

      <p className="text-center text-xs sm:text-sm text-gray-500 px-4">
        © 2025 Your Company Name. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
