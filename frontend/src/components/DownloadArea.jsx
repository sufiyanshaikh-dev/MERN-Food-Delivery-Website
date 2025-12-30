import React from 'react'
import { assets } from '../assets/assets.js'

const DownloadArea = () => {
  return (
    <div className='mb-20'>
      <div className='flex flex-col md:gap-4'>
        <p className='text-gray-600 text-5xl text-center mt-28'>For Better Experience Download</p>
        <p className='text-gray-600 text-5xl text-center'>QuickBite App</p>
      </div>
      <div className='flex items-center justify-center gap-4 mt-10'>
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  )
}

export default DownloadArea
