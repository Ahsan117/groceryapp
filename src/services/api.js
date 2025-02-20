import axios from 'axios';

const API = axios.create({
  baseURL: 'http://your-backend-api-url', // Replace with actual backend URL
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add Authorization Header Dynamically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API Calls
export const fetchProducts = () => API.get('/items'); // Fetch all products
export const loginUser = (credentials) => API.post('/auth/login', credentials); // User login
export const createOrder = (orderData) => API.post('/orders', orderData); // Create a new order

export default API;
