import React from 'react'

export const Arraydemo7 = () => {
    var players = [
        {
            id: "101",
            name: "Leo Fernandez",
            score: "78",
            gender: "Male",
            isActive:"true",
            age: "29"
        },
        {
            id: "102",
            name: "Ava Richardson",
            score: "92",
            gender: "Female",
            isActive:"true",
            age: "26"
        },
        {
            id: "103",
            name: "Ryan Cooper",
            score: "45",
            gender: "Male",
            isActive:"false",
            age: "34"
        },
        {
            id: "104",
            name: "Sophia Martin",
            score: "88",       
            gender: "Female",
            isActive:"true",
            age: "30"
        },
        {
            id: "105",
            name: "Ethan Walker",
            score: "50",
            gender: "Male",
            isActive:"false",
            age: "38"
        },
    ]
  return (
    <div><h1 style={{ color: "cyan", textAlign: "center" }}>Arraydemo 7</h1>
    <table class="table table-striped table-info">
        <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>SCORE</th>
            <th>GENDER</th>
            <th>isActive</th>
            <th>AGE</th>
        </thead>
        <tbody>
            {
                players.map((players) => {
                    return <tr>
                        <td>{players.id}</td>
                        <td>{players.name}</td>
                        <td style={{color:players.score > 60 ?"green":"black"}}>{players.score}</td>
                        <td>{players.gender}</td>
                        <td style={{backgroundColor:players.isActive == "false" ? "yellow":"white" }}>{players.isActive}</td>
                        <td>{players.age} {players.age > 30 ? "please retire" : ""}</td>
                    </tr>
                })
            }
        </tbody>
    </table></div>
  )
}
