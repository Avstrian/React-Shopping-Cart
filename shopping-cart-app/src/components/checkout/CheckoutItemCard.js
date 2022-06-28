import React from "react";
import './CheckoutItemCard.css';

const CheckoutItemCard = (props) => {
    const { image, name, price } = props.product;

    return (
        <div className="checkout-card-container">
            <div className="checkout-card-details">
                <img src={image} alt='checkout-product' className="checkout-image"></img>
                <h2>{name}</h2>
            </div>
            <div className="checkout-item-price">
                <h2>Price: ${price}</h2>
            </div>
        </div>
    )
};

export default CheckoutItemCard;