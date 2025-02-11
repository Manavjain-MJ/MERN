import React from 'react'
import { useState } from 'react'

export const InputDemo2 = (e) => {
  const [id, setid] = useState("")
  const [date, setdate] = useState("")
  const [description, setdescription] = useState("")
  const [address, setaddress] = useState("")
  const [password, setpassword] = useState("")
  return (
    <div style={{ textAlign: "center" }}>
      <h1>InputDemo2</h1>
      <label>ID</label>
      <input type="text" placeholder='enter name' onChange={(e) => setid(e.target.value)}></input> <br />
      <label>Date</label>
      <input type="text" placeholder='enter email' onChange={(e) => setdate(e.target.value)}></input><br />
      <label>Description </label>
      <input type="text" placeholder='enter contact' onChange={(e) => setdescription(e.target.value)}></input><br />
      <label>Address </label>
      <input type="text" placeholder='enter name' onChange={(e) => setaddress(e.target.value)}></input><br />
      <label>Password</label>
      <input type="text" placeholder='enter name' onChange={(e) => setpassword(e.target.value)}></input><br />
      <h3>ID: {id}</h3>
      <h3>Date: {date}</h3>
      <h3>Description : {description}</h3>
      <h3>Address : {address}</h3>
      <h3>Password: {password}</h3>

    </div>
  )
}
