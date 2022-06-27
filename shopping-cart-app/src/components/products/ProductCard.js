import React from "react";

import './ProductCard.css';

const ProductCard = (props) => {
    const { name, image } = props.product;

    return (
        <div className="product">
            <img className="product-image" src={image} alt="product"></img>
            <span className="line"></span>
            <h1>{name}</h1>
            <button className="shop-button">Add to cart</button>
        </div>
    )
}

export default ProductCard;