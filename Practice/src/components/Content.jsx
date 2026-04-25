import React from 'react'

const Content = () => {
  return (

    <>
        <div className='flex  flex-col justify-center  items-center min-h-screen bg-gradient-to-r from-blue-400  to-blue-300 gap-2 px-4'>
            <h1 className='mb-4 text-3xl  md:text:4xl text-white font-bold  lg:text-6xl'>
                Welcome to My Landing Page
                </h1>
            <p className='text-base md:text-lg lg:text-4xl mb-6'>
                Explore more innovative ideas of Future
            </p>

            <button className='bg-black text-white  px-6 py-3  sm:px-8 sm:py-4 md:px-10 md:px-12 lg:px-14 lg:py-6 lg:text-2xl rounded-xl  transition hover:bg-gray-600  duration-300 ease-in-out shadow-s hover:scale-105 active:bg-gray-400 active:scale-100'>
                Explore
            </button>
        </div>
    </>
  )
}

export default Content