import React from 'react'

export const Arraydemo5 = () => {
    var cities = [
        {
            id: "101",
            cityname: "New York",
            population: "8500000",
            aqi: "72",
        },
        {
            id: "102",
            cityname: "Tokyo",
            population: "14000000",
            aqi: "55",
        },
        {
            id: "103",
            cityname: "Mumbai",
            population: "20000000",
            aqi: "145",
        },
        {
            id: "104",
            cityname: "London",
            population: "9000000",       //10,000,000
            aqi: "60",                //60
        },
        {
            id: "105",
            cityname: "Sydney",
            population: "5300000",
            aqi: "35",
        },
    ]
    return (
        <div>  <h1 style={{ color: "cyan", textAlign: "center" }}>Arraydemo 5</h1>
            <table class="table table-striped table-primary">
                <thead>
                    <th>ID</th>
                    <th>CITY-NAME</th>
                    <th>POPULATION</th>
                    <th>AQI</th>
                </thead>
                <tbody>
                    {
                        cities.map((cities) => {
                            return <tr>
                                <td>{cities.id}</td>
                                <td>{cities.cityname}</td>
                                <td><span style={{ color: cities.population > 10000000 ? "red" : "black" }}>{cities.population}</span></td>
                                <td style={{ backgroundColor: cities.aqi >= 60 ? "red" : "green" }}>{cities.aqi}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
