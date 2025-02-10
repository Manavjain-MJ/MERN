import React, { useState } from 'react'

export const InputDemo1 = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    const nameHandler =(e)=>{
        setname(e.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <label>Name</label>
        <input type="text" placeholder='enter name' onChange={(e)=>{nameHandler(e)}}></input>
        <h2>Name :{name}</h2>
        <label>Email</label>
        <input type="text" placeholder='enter email' onChange={(e)=>{setemail(e.target.value)}}></input>
        <h2>Name :{email}</h2>
    </div>
  )
}
