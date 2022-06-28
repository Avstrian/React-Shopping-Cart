import React from "react";

import './ProductCard.css';

const ProductCard = (props) => {
    const { name, image, price } = props.product;

    const addItemToCart = () => {
        const newProduct = {
            name: name,
            image: image,
            price: price
        };

        props.addToCart(newProduct);
    };

    return (
        <div className="product">
            <img className="product-image" src={image} alt="product"></img>
            <span className="line"></span>
            <h1>{name}</h1>
            <h2 id="price">Price: ${price}</h2>
            <button id="shop-button" onClick={addItemToCart}>Add to cart</button>
        </div>
    );
};

export default ProductCard;