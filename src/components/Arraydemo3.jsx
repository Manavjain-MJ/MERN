import React from 'react'

export const Arraydemo3 = () => {
    var employees =[
        {
            id:"101",
            age:"24",
            name:"Kartik",
            salary:"19000",
            gender:"Male",
        },
        {
            id:"102",
            age:"24",
            name:"Manav",
            salary:"20000",
            gender:"Male",
        },
        {
            id:"103",
            age:"24",
            name:"Seeta",
            salary:"14000",
            gender:"female",
        },
        {
            id:"104",
            age:"24",
            name:"Badal",
            salary:"19000",
            gender:"Male",
        },
        {
            id:"105",
            age:"28",
            name:"devam",
            salary:"16000",
            gender:"Male",
        },
    ]

    return (
        <div>
            <h1 style={{color:"cyan",textAlign:"center"}}>Arraydemo 3</h1>
            <table class = "table table-striped">
                <thead>
                    <th>ID</th>
                    <th>AGE</th>
                    <th>NAME</th>
                    <th>SALARY</th>
                    <th>GENDER</th>
                </thead>
                <tbody>
                    {
                        employees.map((employees)=>{
                            return<tr>
                                <td>{employees.id}</td>
                                <td>{employees.age}</td>
                                <td>{employees.name}</td>
                                <td>{employees.salary}</td>
                                <td>{employees.gender}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
