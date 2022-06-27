import React from "react";
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {

    return (
        <div className="navigation">
            <nav>
                <div className="title">
                    <a href="/"><h1 id="home-link">Dream of Diamonds</h1></a>
                </div>

                <div className="nav-items">
                    <a href="/products">Products</a>
                    <a href="/checkout"><FontAwesomeIcon icon={faShoppingCart} id="cart-icon"/><span id="cart-size">{1}</span></a>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;