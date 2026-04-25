import React from 'react'
import Card from './Card.jsx'
import {features } from './data/data.js'
const Features = () => {

 
  return (
    <>
    <section id="about"  className='px-8 py-9 bg-gray-200'>
    <h2 className='text-center text-2xl  font-bold mb-3'>Our features</h2>
    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {features.map((items,index) => (
        <Card 
          key={index}
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

export default Features