import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage (or API in future)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src="/shoppingcart.avif" alt="Empty Cart" className="empty-cart-img" />
          <p>Your cart is empty.</p>
          <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
        </div>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Checkout Button (Disabled if cart is empty) */}
      {cartItems.length > 0 && (
        <button className="checkout-btn">Proceed to Checkout</button>
      )}
    </div>
  );
};

export default Cart;
