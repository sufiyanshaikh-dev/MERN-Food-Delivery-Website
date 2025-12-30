import React, { useContext, useEffect, useState } from 'react'
import { FoodContext } from '../context/FoodContext.jsx'
import SingleCartItem from '../components/SingleCartItem.jsx'

const Cart = () => {

  const { products, cartItems, getCartAmount, navigate } = useContext(FoodContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const tempData = []

      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          tempData.push({
            _id: itemId,
            quantity: cartItems[itemId]
          })
        }
      }

      setCartData(tempData)
    }
  }, [cartItems, products])

  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] z-10'>
        <div className='bg-gray-50 w-full h-auto mt-10 rounded-xl p-4'>
          <h1 className='font-semibold text-2xl mb-4'>Order Details</h1>

          <div className='flex flex-col gap-5'>
            {cartData.length > 0 ? (
              cartData.map((item) => (
                <SingleCartItem key={item._id} item={item} />
              ))
            ) : (
              <p className='text-gray-500'>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>

      {/* fixed  */}
      {/* <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] z-50">
        <div className="w-full h-60 bg-gray-100 shadow-xl rounded-t-xl">

        </div>
      </div> */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] z-50">
  <div className="w-full bg-gray-100 shadow-xl rounded-t-xl p-5">

    {/* PRICE DETAILS */}
    <div className="flex flex-col gap-3">

      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>
        <span>₹{getCartAmount()}</span>
      </div>

      <div className="flex justify-between text-gray-600">
        <span>Delivery Fee</span>
        <span>₹{getCartAmount() > 0 ? 40 : 0}</span>
      </div>

      <div className="border-t pt-3 flex justify-between font-semibold text-lg text-gray-900">
        <span>Total</span>
        <span>
          ₹{getCartAmount() > 0 ? getCartAmount() + 40 : 0}
        </span>
      </div>

    </div>

    {/* CHECKOUT BUTTON */}
    <button onClick={() => navigate("/place-order")} className="mt-5 w-full bg-[#FF6D1F] text-white py-3 rounded-xl font-semibold hover:bg-[#e55b1c] transition-colors duration-300">Proceed to Checkout</button>

  </div>
</div>

    </>

  )
}

export default Cart
