import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Grocery App</h1>
      <nav>
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        <Link to="/products" className="mx-2 hover:underline">Products</Link>
        <Link to="/checkout" className="mx-2 hover:underline">Checkout</Link>
        <Link to="/cart" className="mx-2 relative">
          🛒 Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
