import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./../styles/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("https://your-backend-url.com/api/products");
        const data = await response.json();
        
        if (response.ok) {
          setProducts(data);
        } else {
          setError(data.message || "Failed to fetch products.");
        }
      } catch (error) {
        setError("An error occurred while fetching products.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Our Products</h2>

      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
