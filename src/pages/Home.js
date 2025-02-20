import { Link } from "react-router-dom";
import "./../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <img src="/grocery-app.png" alt="Grocery on Wheels" className="home-image" />
      <h1>Welcome to Grocery App</h1>
      <p>Find fresh groceries delivered to your doorstep!</p>
      <Link to="/products" className="shop-now-btn">Shop Now</Link>
    </div>
  );
}

export default Home;
