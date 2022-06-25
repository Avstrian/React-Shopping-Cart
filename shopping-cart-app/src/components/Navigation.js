import React from "react";
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {

    return (
        <div className="navigation">
            <nav>
                <div className="title">
                    <h1>Bits and pieces</h1>
                </div>

                <div className="nav-items">
                    <a href="/products">Products</a>
                    <a href="/checkout"><FontAwesomeIcon icon={faShoppingCart} id="cart-icon"/></a>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;