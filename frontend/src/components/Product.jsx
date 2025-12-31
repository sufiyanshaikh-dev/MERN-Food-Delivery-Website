import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext.jsx'
import ProductCard from './ProductCard.jsx'


const Product = () => {
    const { products, category } = useContext(FoodContext)

    const filteredProducts =
        category === "All"
            ? products
            : products.filter(
                product => product.category === category
            )

    return (
        <div className='my-10'>
            <h2 className='text-5xl text-gray-600 text-center mb-5'>Our Products</  h2>
            <p className='hidden md:block text-center mb-12'>Explore our curated selection of premium products, crafted to meet high standards of quality and consistency. <br />
                Each item is designed to deliver value and a reliable experience every time.</p>
            <p className='md:hidden sm:block text-center mb-12'>Explore our curated selection of premium products, crafted to meet high standards of quality and consistency.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products && products.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product._id || product.id} product={product} />
                    ))
                ) : (
                    <p className='text-gray-500 col-span-full text-center'>No products available</p>
                )}
            </div>
        </div>
    )
}

export default Product
