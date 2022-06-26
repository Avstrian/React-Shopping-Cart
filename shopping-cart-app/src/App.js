import React from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

const App = () => {


    return (
        <div className='container'>
            <Navigation />
            <Header />
        </div>
    );
};

export default App;