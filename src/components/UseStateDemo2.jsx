import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    const [isloading, setIsloading] = useState(true)
    const stoploading=()=>{
        setIsloading(false)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        <h1>
            {isloading == true ? "Loading.....":""}
        </h1>
        <button onClick={()=>{stoploading()}}>Stop</button>
        
    </div>
  )
}
