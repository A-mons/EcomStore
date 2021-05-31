import React from 'react'
import Product from "../components/Product";
import data from "../data";

const HomeScreen = () => {
    return (
        <div className="row center">
            {data.products.map((product) => (
                <Product key={product.id} product={product}></Product>
            ))}
        </div>
    )
}

export default HomeScreen
