import React from "react";
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {

    return (
        <div className="navigation">
            <nav>
                <div className="title">
                    Bits and Pieces
                </div>

                <div className="nav-items">
                    <a href="/products">Products</a>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="font-awesome" />
                </div>
            </nav>
        </div>
    );
};

export default Navigation;