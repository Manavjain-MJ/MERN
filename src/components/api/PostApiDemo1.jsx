import axios from 'axios';
import React from 'react'

export const PostApiDemo1 = () => {

    var userOBJ = {
        name:"raj",
        age:"22",
        email:"raj123@gmail.com",
        isActive:true

    }
    const getdata = async()=>{
        const res = await axios.post("https://node5.onrender.com/user/user",userOBJ);
        console.log(res);
        console.log(res.data)
        if(res.status==201){
            alert("data saved...")
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>PostApiDemo1</h1>
        <button onClick={()=>{getdata()}}>post data</button>

    </div>
  )
}
