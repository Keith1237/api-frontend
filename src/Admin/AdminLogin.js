import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const trainRouteURL = `${process.env.REACT_APP_BACKEND_URL}/trains`;

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${trainRouteURL}/admin`);
      const adminData = await response.json();

      const isValid = adminData.some(
        (admin) => admin.username === username && admin.password === password
      );

      if (isValid) {
        navigate('/admin-actions'); // Navigate to the Admin Actions page on successful login
      } else {
        setError('Invalid username or password');
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
        <button onClick={() => navigate('/')} className="back-button">Back</button>
      </div>
    </div>
  );
}

export default AdminLogin;
