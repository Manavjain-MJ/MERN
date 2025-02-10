import React from 'react'

export const Content = () => {
    var name = "Amit"
    var age = 19
    var isActive = true;
    return (
        <div style={{textAlign : 'center', backgroundColor:'gray', height:'650px',width:'100%'}}>
            <h2>Hello</h2>
            {name}
            <h3>Name = {name}</h3>
            <h3>Age = {age}</h3>
            {/* <h1>Active = {isActive}</h1> */}
            <h3>Name = {isActive == true ? "Active" : "Not Active"}</h3>
        </div>
    )
}
