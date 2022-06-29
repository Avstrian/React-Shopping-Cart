import React from "react";
import { Link } from "react-router-dom";

import './Checkout.css';

import CheckoutItemCard from "./CheckoutItemCard";


const Checkout = (props) => {

    const { products } = props;

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        console.log(products);

        for (let item of products) {
            totalPrice+= item.price;
        }

        return totalPrice;
    }

    return (
        <div className="checkout-container">
            <div className="checkout-wrapper">
                <div className="items">
                    {products.map(item => <CheckoutItemCard product={item} />)}
                </div>
                <div className="total-container">
                    <h1>Total: ${calculateTotalPrice()}</h1>
                </div>
                <div className="checkout-buttons">
                    <button id="checkout">Checkout</button>
                    <Link to={"/"}><button id="back">Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;