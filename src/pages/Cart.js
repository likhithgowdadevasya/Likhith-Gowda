// src/pages/Cart.js
const Cart = ({ cart }) => (
    <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
            <p>No items in the cart yet.</p>
        ) : (
            <ul>
                {cart.map((cake, index) => (
                    <li key={index}>
                        {cake.name} - ${cake.price}
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default Cart;
