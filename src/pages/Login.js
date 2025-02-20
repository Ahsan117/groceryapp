import { useState } from "react";
import { loginUser } from "../services/api"; // Ensure this function exists
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // Ensure this file exists

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUser(credentials); // Call API
      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token); // Store token
        navigate("/products"); // Redirect to products page
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p className="login-subtext">Please login to continue using this application</p>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Continue</button>
      </form>

      {/* Social Login Buttons */}
      <div className="social-login">
        <button className="google-login">Signup with Gmail</button>
        <button className="facebook-login">Signup with Facebook</button>
      </div>

      <p className="signup-text">
        Don’t have an account? <a href="/create-account">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
