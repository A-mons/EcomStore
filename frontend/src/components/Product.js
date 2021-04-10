import React from "react";
import Rating from "./Rating";

export default function Product(props) {
    const { product } = props;
    return (
    <div className="card">
        <a href={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
        </a>
        <div div className="card-body">
            <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
            </a>
                <Rating
                    rating={product.rating}
                    numReview={product.numReview}>
                </Rating>
            <div className="price">${product.price}</div>
        </div>
    </div>
    );
}