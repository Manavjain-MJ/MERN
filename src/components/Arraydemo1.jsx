import React from 'react'

export const Arraydemo1 = () => {
    var user =["Manav","Kartik","Badal"]
  return (
    <div><h1 style={{textAlign:"center",color:"blue"}}>Arraydemo1</h1>
    {
        user.map((user)=>{
            return <li style={{textAlign:"center"}}>{user}</li>
        })
    }
    
    
    </div>
  )
}
