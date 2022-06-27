import React from "react";

import './Products.css';

import products from "../../data/data";
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div className="products-container">
            { products.map(item => <ProductCard key={item.name} product={item}/>) }
        </div>
    )
}

export default Products;