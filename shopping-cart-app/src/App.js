import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Products from './components/products/Products';
import Checkout from './components/checkout/Checkout';


const App = () => {

    const [products, setProducts] = useState([]);

    const addNewProductToCart = (product) => {
        setProducts([...products, product]);
    };

    return (
        <div className='container'>
            <Navigation number={products.length} />
            <Routes>
                <Route index element={<Header />} />
                <Route path='products' element={<Products addToCart={addNewProductToCart} />} />
                <Route path='checkout' element={<Checkout products={products} />} />
            </Routes>
        </div>
    );
};

export default App;