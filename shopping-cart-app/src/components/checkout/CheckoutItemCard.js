import React from "react";
import './CheckoutItemCard.css';

const CheckoutItemCard = (props) => {
    const { image, name } = props.product;

    return (
        <div className="checkout-card-container">
            <div className="checkout-card-details">
                <img src={image} alt='checkout-product' className="checkout-image"></img>
                <h2>{name}</h2>
            </div>
            <div className="checkout-item-qty">
                <button className="quantity-button">+</button>
                <h3 className="quantity">1</h3>
                <button className="quantity-button">-</button>
            </div>
        </div>
    )
};

export default CheckoutItemCard;