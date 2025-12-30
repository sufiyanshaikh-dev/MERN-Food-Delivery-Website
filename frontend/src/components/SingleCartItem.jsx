import React, { useContext } from 'react'
import { assets } from '../assets/assets.js'
import { FoodContext } from '../context/FoodContext.jsx'
import { toast } from 'react-toastify'

const SingleCartItem = ({ item }) => {

  const { products, updateCart, addToCart, token } = useContext(FoodContext)
  const product = products.find(p => p._id === item._id)
  if (!product) return null

  const handleIncrement = () => {
    if (!token) return toast.error("User is not logged in")
    addToCart(product._id)
  }

  const handleDecrement = () => {
    if (!token || item.quantity <= 1) return
    updateCart(product._id, item.quantity - 1)
  }

  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md">

      {/* LEFT: IMAGE */}
      <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-xl" />

      {/* MIDDLE: INFO + QUANTITY */}
      <div className="flex flex-col justify-between h-24 flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>

        {/* QUANTITY BAR */}
        <div className="flex items-center w-32 h-10 bg-gray-100 rounded-full px-1 ml-[-5px]">
          <button onClick={handleDecrement} className="flex-shrink-0">
            <img src={assets.remove_icon_red} alt="minus" />
          </button>

          <span className="flex-1 text-center text-sm font-semibold pl-3">
            {item.quantity}
          </span>

          <button onClick={handleIncrement} className="mr-[-7px]">
            <img src={assets.add_icon_white_removeBg} alt="plus" />
          </button>
        </div>
      </div>

      {/* RIGHT: PRICE + REMOVE */}
      <div className="flex flex-col justify-between h-24 items-end">
        <p className="font-semibold text-gray-900">₹{product.price}</p>
        <img src={assets.cross_icon} alt="remove" onClick={() => updateCart(item._id, 0)} className="w-4 h-4 cursor-pointer" />
      </div>

    </div>
  )
}

export default SingleCartItem
