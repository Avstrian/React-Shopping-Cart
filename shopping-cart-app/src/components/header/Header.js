import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

import mainImage from '../../assets/main-image.png';

const Header = () => {

    return (
        <div className="header-container">
            <div className="title-text">
                <h3 className="gray-text">World's best fake diamond store</h3>
                <h1 className>Look and feel like what others dream of!</h1>
                <Link to={'/products'}><button>Shop Now</button></Link>
            </div>
            <div className="image-wrapper">
                <img src={mainImage} alt="hey"></img>
            </div>
        </div>
    );
};

export default Header;