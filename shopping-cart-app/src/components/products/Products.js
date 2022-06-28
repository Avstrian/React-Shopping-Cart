import React from "react";

import './Products.css';

import products from "../../data/data";
import ProductCard from './ProductCard';

const Products = (props) => {

    const addToCart = (product) => {
        props.addToCart(product);
    };

    return (
        <div className="products-container">
            { products.map(item => <ProductCard key={item.name} product={item} addToCart={addToCart}/>) }
        </div>
    );
};

export default Products;