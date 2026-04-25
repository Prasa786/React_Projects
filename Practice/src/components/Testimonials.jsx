import React from 'react'
import { testimonials } from './data/data'
import TestimonialCards from './TestimonialCards'

const Testimonials = () => {
  return (
    <>
    <section className='px-8 py-16 bg-gray-100'>

    <h2 className='text-2xl md:text:4xl font-bold text-center mb-5 '>
        What our customers say
    </h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6'>
        {testimonials.map((items,index) => (
            <TestimonialCards 
               key={index}
               image={items.image}
               name={items.name}
               role={items.role}
               feedback={items.feedback}
               />
        ))}
      </div>
    </section>
    </>
  )
}

export default Testimonials