import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminActions.css';

function AdminActions() {
  const navigate = useNavigate();

  const handleButtonClick = (action) => {
    alert(`You clicked on ${action}`);
  };

  const handleSeeTrainSchedule = () => {
    navigate('/train-schedule');
  };

  return (
    <div className="admin-actions-container">
      <h2>Admin Actions</h2>
      <div className="button-grid">
        <button onClick={() => handleButtonClick('Create Train')}>Create Train</button>
        <button onClick={() => handleButtonClick('Update Train Route')}>Update Train Route</button>
        <button onClick={() => handleButtonClick('Create Station')}>Create Station</button>
        <button onClick={() => handleButtonClick('Create Line')}>Create Line</button>
        <button onClick={() => handleButtonClick('Create Train Route')}>Create Train Route</button>
        <button onClick={() => handleButtonClick('Create Railway Route')}>Create Railway Route</button>
        <button onClick={() => handleButtonClick('Update Railway Route')}>Update Railway Route</button>
        <button onClick={() => handleButtonClick('Create New Admin')}>Create New Admin</button>
        <button onClick={() => handleButtonClick('Delete Admin')}>Delete Admin</button>
        <button className="see-train-schedule-button" onClick={handleSeeTrainSchedule}>See Train Schedule</button>
      </div>
    </div>
  );
}

export default AdminActions;
