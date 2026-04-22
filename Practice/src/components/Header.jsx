import React from 'react'

const Header = () => {
  return (
        <>
         <header>
            <div className='grid grid-cols-2  bg-black text-white h-16 text-2xl items-center'>
              <div>
                    <p className='justify-left mx-4 cursor-pointer'> MySite</p>
                </div> 
               <div className='flex justify-evenly bg-black text-white h-16 text-2xl items-center'>
                   <ul className='flex justify-evenly  items-center w-full '>
                        <li><a href="#home" className='hover:text-blue-300' >Home</a></li>
                        <li><a href="#product" className='hover:text-blue-300'>Product</a></li>
                        <li><a href="#about" className='hover:text-blue-300'>About</a></li>
                        <li><a href="#service" className='hover:text-blue-300'>Service</a></li>
                        <li><a href="#contact" className='hover:text-blue-300'>Contact</a></li>
                    </ul> 
                </div>
            </div>
</header>
        </>
  )
}

export default Header