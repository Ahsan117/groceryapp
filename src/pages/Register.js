import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('User registered:', user);
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" className="form-control mb-2"
          onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <input type="email" placeholder="Email" className="form-control mb-2"
          onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input type="password" placeholder="Password" className="form-control mb-2"
          onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
