// src/components/CakeCard.js
import './CakeCard.css';

const CakeCard = ({ cake, addToCart }) => (
    <div className="cake-card">
        <img src={cake.image} alt={cake.name} className="cake-image" />
        <h3>{cake.name}</h3>
        <p>Price: ${cake.price}</p>
        <button onClick={() => addToCart(cake)} className="add-to-cart-btn">Add to Cart</button>
    </div>
);

export default CakeCard;
