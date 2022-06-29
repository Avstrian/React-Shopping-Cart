import React from "react";
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Navigation.css';

const Navigation = (props) => {

    return (
        <div className="navigation">
            <nav>
                <div className="title">
                   <Link to='/'><h1 id="home-link">Diamond Shop</h1></Link>
                </div>

                <div className="nav-items">
                    <Link to='/products'>Products</Link>
                    <Link to='/checkout'><FontAwesomeIcon icon={faShoppingCart} id="cart-icon"/><span id="cart-size">{props.number ? props.number : 0}</span></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;