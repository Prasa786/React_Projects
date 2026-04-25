import React from 'react'
import  { Product } from './data/data.js'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <>
     <section id="about"  className='px-8 py-9 bg-gray-100 '>
    <h2 className='text-center text-2xl  font-bold mb-3'>Our Products</h2>
    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {Product.map((items,index) => (
        <ProductCard 
          key={index}
          image={items.image}
          title={items.title}
          description={items.desc}
        />

      ))
      }
    </div>
    </section>
    </>

  )
}

export default Products