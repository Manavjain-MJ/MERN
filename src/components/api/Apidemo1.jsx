import axios from 'axios'
import React, { useState } from 'react'

export const Apidemo1 = () => {
  const [message,setmessage]=useState("")
  const[users,setusers]=useState([])
  const getUserData =async()=>{
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res)
    console.log(res.data)
    console.log(res.data.message)
    console.log(res.data.data)
    // console.log(res.data.message)
    // console.log(res.data.data)
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>API DEMO 1</h1>
      <button onClick={()=>{getUserData()}}>GET</button>
      {message}
      {
        users.length>0 ?
        (
          <table className='table table-primary'>
            
          </table>
        ):""
      }
    </div>
  )
}
