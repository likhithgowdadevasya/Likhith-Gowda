// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import CakeCategories from './pages/Cakecategories';
import CakeDetails from './pages/Cakedetails';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import './styles/main.css';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (cake) => {
        setCart((prevCart) => [...prevCart, cake]);
    };

    return (
        <Router>
            <Navbar />
            <div className="app-content">
                <Routes>
                    <Route path="/" element={<Homepage addToCart={addToCart} />} />
                    <Route path="/categories" element={<CakeCategories addToCart={addToCart} />} />
                    <Route path="/cakes/:cakeId" element={<CakeDetails addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
