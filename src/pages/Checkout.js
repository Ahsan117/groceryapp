import React, { useState } from "react";
import "../styles/Checkout.css";

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleCheckout = () => {
    alert(`Order placed for ${name}!`);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form className="checkout-form">
        <input
          type="text"
          className="checkout-input"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="checkout-input"
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="button" className="checkout-button" onClick={handleCheckout}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
