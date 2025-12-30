import React from 'react'
import Hero from '../components/Hero.jsx'
import Menu from '../components/Menu.jsx'
import Product from '../components/Product.jsx'
import DownloadArea from '../components/DownloadArea.jsx'
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <>
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Hero />
      <Menu />
      <Product />
      <DownloadArea />
    </div>
    <Footer />
    </>
  )
}

export default Home
