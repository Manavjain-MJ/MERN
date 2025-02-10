import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    // var count =0;
    const [count, setCount] = useState(0)

    const increament =() =>{
        setCount(count+1)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
        <h1>Count ={count}</h1>
        <button onClick={()=> increament()}>INCREAMENT</button>
        </div>
  )
}
