import React from 'react'

export const Arraydemo6 = () => {
    var product = [
        {
            id: "101",
            name: "Nike Air Max",
            price: "120",
            discount: "55",
            category:"Fashion"
        },
        {
            id: "102",
            name: "Levi's Denim Jacket",
            price: "85",
            discount: "30",
            category:"Fashion"
        },
        {
            id: "103",
            name: "Samsung Galaxy S23",
            price: "999",
            discount: "60",
            category:"Electronics"
        },
        {
            id: "104",
            name: "Apple MacBook Air",
            price: "1200",       
            discount: "40",
            category:"Electronics"
        },
        {
            id: "105",
            name: "Adidas Running Tee",
            price: "35",
            discount: "70",
            category:"Fashion"
        },
    ]
    return (
        <div><h1 style={{ color: "cyan", textAlign: "center" }}>Arraydemo 6</h1>
            <table class="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>DISCOUNT</th>
                    <th>CATEGORY</th>
                </thead>
                <tbody>
                    {
                        product.map((product) => {
                            return <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td style={{ color: product.discount > 50 ? "green" : "black" }}>{product.discount}%</td>
                                <td style={{color:product.category == "Fashion" ? "red":"black" }}>{product.category}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
