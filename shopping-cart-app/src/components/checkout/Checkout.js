import React from "react";

import './Checkout.css';
import products from "../../data/data";
import CheckoutItemCard from "./CheckoutItemCard";


const Checkout = () => {
    return (
        <div className="checkout-container">
            <div className="checkout-wrapper">
                <div className="items">
                    {products.map(item => <CheckoutItemCard product={item} />)}
                </div>
                <div className="checkout-buttons">
                    <button id="checkout">Checkout</button>
                    <button id="back">Back</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;