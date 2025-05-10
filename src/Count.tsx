import React from 'react'
import { useState } from 'react'

export default function Count() {
      const [count, setCount] = useState(0)

 const handleClick = () =>{
    const newCount = count + 1
    console.log(newCount)
    setCount(newCount)
  }
  return (
    <div>
        <button  
        style={{ 
          color: 'red', 
          backgroundColor: 'white',
          padding: '0px 10px 10px 15px',
          fontSize: '20px',
          fontFamily: 'fantasy',
          border : "0px solid red",
          boxShadow: "0px 0px "
        }}
        onClick={ handleClick }>
          count is {count}
        </button>
    </div>
  )
}
