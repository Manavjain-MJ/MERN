import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import { CustomLoader } from './CustomLoader'

export const Apidemo1 = () => {
  const [message, setmessage] = useState("")
  const [isloader, setisloader] = useState(false)
  const [users, setusers] = useState([])
  const getUserData = async () => {
    setisloader(true)
    const res = await axios.get("https://node5.onrender.com/user/user");
    // console.log(res)
    // console.log(res.data)
    // console.log(res.data.message)
    // console.log(res.data.data)
    setmessage(res.data.message)
    setusers(res.data.data)
    setisloader(false)
  }

  const deleteUser = async (id) => {
    const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`);
    console.log(res)
    if(res.status == 204) {
      // alert("User Deleted..");
      toast.error('💣 Data Deleted!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      getUserData();
    }


  }

  useEffect(() => {
    getUserData()
  }, [])
  return (
    <div style={{ textAlign: "center" }}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      {/* {
        isloader == true && <h1>Loading...</h1>
      } */}
      {
        isloader == true && <CustomLoader/>
      }
      <h1>API DEMO 1</h1>
      {/* <button onClick={() => { getUserData() }}>GET</button> */}
      {message}
      {
        users.length > 0 ?

          (<table className='table table-dark'>
            <thead>
              <tr>

                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Active</th>
                <th>Action</th>
              </tr>

            </thead>
            <tbody>
              {
                users?.map((user) => {
                  return <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.isActive == true ? "yes" : "no"}</td>
                    <td>
                      <button onClick={() => { deleteUser(user._id) }} className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>) : ""}
    </div>
  )
}
