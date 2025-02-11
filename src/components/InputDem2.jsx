import React from 'react'
import { useState } from 'react'

export const InputDem2 = (e) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [contact, setcontact] = useState("")
    const [marks, setmarks] = useState("")
    const [category, setcategory] = useState("")
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDem2</h1>
        <label>Name</label>
        <input type="text" placeholder='enter name' onChange={(e)=>setname(e.target.value)}></input><br />
        <label>Email</label>
        <input type="text" placeholder='enter email' onChange={(e)=>setemail(e.target.value)}></input><br />
        <label>Contact</label>
        <input type="text" placeholder='enter contact' onChange={(e)=>setcontact(e.target.value)}></input><br />
        <label>Marks</label>
        <input type="text" placeholder='enter name' onChange={(e)=>setmarks(e.target.value)}></input><br />
        <label>Category</label>
        <input type="text" placeholder='enter name' onChange={(e)=>setcategory(e.target.value)}></input><br />


        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Contact: {contact}</h3>
        <h3>Marks: {marks}</h3>
        <h3>Category: {category}</h3>

        
    </div>
  )
}
