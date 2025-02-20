import { Link } from "react-router-dom";
import "./../styles/navbar.css"; // Ensure you create this file

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/create-account">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
