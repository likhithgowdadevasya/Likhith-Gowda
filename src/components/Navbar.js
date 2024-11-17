import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <h1 className="navbar-title">Cake Shop</h1>
        <ul className="navbar-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/categories" className="nav-link">Categories</Link></li>
            <li><Link to="/cart" className="nav-link">Cart</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
        </ul>
    </nav>
);

export default Navbar;
