import React from "react";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1; // Increment quantity
    } else {
      cart.push({ ...product, quantity: 1 }); // Add new product
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
