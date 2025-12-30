import React from 'react'
import Login from './pages/Login.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Verify from './pages/Verify.jsx';
import SearchBar from './components/SearchBar.jsx';
import MenuPage from './pages/menuPage.jsx';
import Contact from './pages/Contact.jsx';
import Food from './pages/Food.jsx';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Orders from './pages/Orders.jsx';
import About from './pages/About.jsx';



const App = () => {
  return (
    <>
        <ToastContainer position="top-center" autoClose={2000} />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/food/:foodId' element={<Food />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
    </>
  )
}

export default App

