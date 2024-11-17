// src/pages/Homepage.js
import CakeCard from '../components/Cakecard';
import cakesData from '../data/cakesData';
import './Homepage.css';

const Homepage = ({ addToCart }) => (
    <div className="homepage">
        <section className="hero-section">
            <h2>Welcome to Cake Bliss</h2>
            <p>Find the perfect cake for every occasion, made with love and the finest ingredients.</p>
        </section>
        <section className="featured-cakes">
            <h3>Featured Cakes</h3>
            <div className="cake-list">
                {cakesData.map(cake => (
                    <CakeCard key={cake.id} cake={cake} addToCart={addToCart} />
                ))}
            </div>
        </section>
    </div>
);

export default Homepage;
