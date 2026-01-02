import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets.js'
import { FoodContext } from '../context/FoodContext.jsx'
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0)
  const { token, updateCart, addToCart } = useContext(FoodContext)

  const handleIncrement = () => {
    if (!token){
      return toast.error("User is not logged in")
    }
    const newCount = count + 1
    setCount(newCount)
    addToCart(product._id)
    toast.success("Product added")
  }

  const handleDecrement = () => {
    if (!token || count === 0) return
    const newCount = count - 1
    setCount(newCount)
    updateCart(product._id, newCount)
    toast.success("Product removed")
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col">

      {/* Image */}
      <div className="w-full h-48 sm:h-56 overflow-hidden relative">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />

        {/* Quantity Bar */}
        <div className="absolute bottom-3 right-3 h-10 w-32">
          <div className={`absolute right-0 h-10 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${count > 0 ? 'w-32' : 'w-10'}`}>

            {/* Minus */}
            {count > 0 && (
              <button onClick={handleDecrement} className="absolute left-1 top-1/2 -translate-y-1/2">
                <img src={assets.remove_icon_red} alt="minus" />
              </button>
            )}

            {/* Count */}
            {count > 0 && (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold">
                {count}
              </span>
            )}

            {/* Plus */}
            <button onClick={handleIncrement} className="absolute right-0 top-1/2 -translate-y-1/2 border-0 outline-none">
              <img src={assets.add_icon_white_removebg} alt="plus" />
            </button>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-gray-800 font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm flex-1">{product.description}</p>
        <img src={assets.rating_starts} alt="" className="w-20 pt-2" />
        <p className="mt-4 text-gray-900 font-bold text-lg">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
