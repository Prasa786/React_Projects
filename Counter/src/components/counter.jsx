import React, { useState } from 'react'

function Counter() {
    const [ count,setCount ]= useState(0);
    const [show,setShow] =useState();
    
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }

    const reset =() => {
        setCount(0);
    }

    const toggleButton = () => {
        setShow(!show);
    }




  return (
    <>
    <div className='container'>
        <div className='container-counter'>
            <h1>Simple Counter </h1>
                <p > {count}</p>
            <div className='btn'>
                <button onClick={toggleButton}>{show ? "hide ":"show " }</button>
                {show && 
                <>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                </>
                }
            </div>
        </div>
        
    </div>
      
    </>
  )
}


export default Counter