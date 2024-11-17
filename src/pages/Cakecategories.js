// src/pages/CakeCategories.js
import CakeCard from '../components/Cakecard';
import cakesData from '../data/cakesData';

const CakeCategories = ({ addToCart }) => (
    <div className="cake-categories">
        <h2>Cake Categories</h2>
        <div className="cake-list">
            {cakesData.map(cake => (
                <CakeCard key={cake.id} cake={cake} addToCart={addToCart} />
            ))}
        </div>
    </div>
);

export default CakeCategories;
