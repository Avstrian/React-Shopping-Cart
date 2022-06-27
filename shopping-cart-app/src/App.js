import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Products from './components/products/Products';
import Checkout from './components/checkout/Checkout';


const App = () => {


    return (
        <div className='container'>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;