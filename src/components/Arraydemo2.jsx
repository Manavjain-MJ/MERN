
import React from 'react'

export const Arraydemo2 = () => {
    var student = [
        {
            name: "shyam",
            age: "21",
            marks: "82"
        },
        {
            name: "ram",
            age: "22",
            marks: "92"
        },
        {
            name: "dhyan",
            age: "23",
            marks: "52"
        },
    ]
    return (
        <div>
            <h1 style={{ color: "red", textAlign: "center" }}>Array Demo 2</h1>
            {
                student.map((stu)=>{
                    return <div style={{textAlign:"center"}}>
                        <h2>Name:{stu.name}</h2>
                        <h2>Age:{stu.age}</h2>
                        <h2>Marks:{stu.marks}</h2>
                        </div>
                })

            }
        </div>
    )
}
