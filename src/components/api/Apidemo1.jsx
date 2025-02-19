import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Apidemo1 = () => {
  const [message, setmessage] = useState("")
  const [users, setusers] = useState([])
  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res)
    console.log(res.data)
    console.log(res.data.message)
    console.log(res.data.data)
    setmessage(res.data.message)
    setusers(res.data.data)
  }

  useEffect(()=>{
    getUserData()
  },[])
  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 1</h1>
      {/* <button onClick={() => { getUserData() }}>GET</button> */}
      {message}
      {
        users.length > 0 ?
          
            (<table className='table table-dark'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Active</th>
                </tr>

              </thead>
              <tbody>
                {
                  users?.map((user) => {
                    return <tr>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>{user.isActive == true ? "yes" : "no"}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>): ""}
    </div>
  )
}
