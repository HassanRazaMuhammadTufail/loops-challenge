import React, { useEffect, useState } from "react";

export const Home = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(async () => {
        await getProducts();
    }, []);
    const getProducts = async () => {
        await fetch('http://localhost:8000/')
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    console.log(data.data)
                    setProducts(data.data);
                }
            });
    }
    return (
        <div>
            <h2>Home</h2>
            {products.map(product => {
                return (
                    <div key={product._id}>
                        <img src={product.image} width='300' height='300' />
                        <p>{product.color}</p>
                        <p>{product.price}</p>
                        <p>{product.size}</p>
                    </div>
                )
            })}
        </div>
    )
}