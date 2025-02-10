import React from 'react'

export const Arraydemo4 = () => {
    var employees = [
        {
            id: "101",
            age: "24",
            name: "Kartik",
            salary: "19000",
            gender: "Male",
        },
        {
            id: "102",
            age: "24",
            name: "Manav",
            salary: "20000",
            gender: "Male",
        },
        {
            id: "103",
            age: "24",
            name: "Seeta",
            salary: "14000",
            gender: "female",
        },
        {
            id: "104",
            age: "24",
            name: "Badal",
            salary: "19000",
            gender: "Male",
        },
        {
            id: "105",
            age: "28",
            name: "devam",
            salary: "16000",
            gender: "Male",
        },
    ]
    return (
        <div>
            <h1 style={{ color: "cyan", textAlign: "center" }}>Arraydemo 4</h1>
            <table class="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>AGE</th>
                    <th>NAME</th>
                    <th>SALARY</th>
                    <th>GENDER</th>
                </thead>
                <tbody>
                    {
                        employees.map((employees) => {
                            return <tr>
                                <td>{employees.id}</td>
                                <td style={{color:employees.age==24 ? "green":"black"}}>{employees.age}</td>
                                <td><span style={{color:employees.name.startsWith("S")?"red":"black"}}>{employees.name}</span></td>
                                <td><span style={{color:employees.salary>=16000 ? "red":"black"}}>{employees.salary}</span></td>
                                <td style={{backgroundColor:employees.gender == "Male" ? "blue":"pink"}}>{employees.gender}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
