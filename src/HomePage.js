// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import a separate CSS file for HomePage styling

function HomePage() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/train-schedule');
  };

  const handleAdminClick = () => {
    alert('Admin page is under construction!');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to the Train System</h1>
        <p className="home-description">Please choose your role to proceed:</p>
        <div className="button-group">
          <button className="home-button user-button" onClick={handleUserClick}>
            User
          </button>
          <button className="home-button admin-button" onClick={handleAdminClick}>
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
