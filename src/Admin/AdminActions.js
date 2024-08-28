import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminActions.css';

function AdminActions() {
  const [showCreateTrainForm, setShowCreateTrainForm] = useState(false);
  const [showCreateStationForm, setShowCreateStationForm] = useState(false);
  const [showUpdateTrainRouteForm, setShowUpdateTrainRouteForm] = useState(false);
  const [showCreateTrainRouteForm, setShowCreateTrainRouteForm] = useState(false);
  const [trainNumber, setTrainNumber] = useState('');
  const [trainName, setTrainName] = useState('');
  const [stationNumber, setStationNumber] = useState('');
  const [stationName, setStationName] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [routeNumber, setRouteNumber] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [trainRouteNumber, setTrainRouteNumber] = useState('');
  const [showCreateLineForm, setShowCreateLineForm] = useState(false);
  const [lineNumber, setLineNumber] = useState('');
  const [lineName, setLineName] = useState('');
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [distance, setDistance] = useState('');
  const [have, setHave] = useState('');
  const [showCreateRailwayRouteForm, setShowCreateRailwayRouteForm] = useState(false);
  const [lineNumbers, setLineNumbers] = useState('');
  const [stationsInRoute, setStationsInRoute] = useState('');
  const [showDeleteRailwayRouteForm, setShowDeleteRailwayRouteForm] = useState(false);
  const [deleteRouteNumber, setDeleteRouteNumber] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [newAdminUsername, setNewAdminUsername] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [showCreateNewAdminForm, setShowCreateNewAdminForm] = useState(false);

  const [deleteAdminUsername, setDeleteAdminUsername] = useState('');
const [deleteAdminPassword, setDeleteAdminPassword] = useState('');
const [showDeleteAdminForm, setShowDeleteAdminForm] = useState(false);






  const navigate = useNavigate();

  // const handleButtonClick = (action) => {
  //   alert(`You clicked on ${action}`);
  // };

  const handleSeeTrainSchedule = () => {
    navigate('/train-schedule');
  };

  const handleCreateTrainClick = () => {
    setShowCreateTrainForm(true);
    setShowCreateStationForm(false);
    setShowUpdateTrainRouteForm(false);
    setShowCreateTrainRouteForm(false);
    setShowCreateLineForm(false);
    setShowCreateRailwayRouteForm(false);
    setShowDeleteRailwayRouteForm(false);
    setShowDeleteAdminForm(false);
    setShowCreateNewAdminForm(false); 
  };

  const handleCreateStationClick = () => {
    setShowCreateTrainForm(false);
    setShowCreateStationForm(true);
    setShowUpdateTrainRouteForm(false);
    setShowCreateTrainRouteForm(false);
    setShowCreateLineForm(false);
    setShowCreateRailwayRouteForm(false);
    setShowDeleteRailwayRouteForm(false);
    setShowDeleteAdminForm(false);
    setShowCreateNewAdminForm(false); 
  };

  const handleUpdateTrainRouteClick = () => {
    setShowCreateTrainForm(false);
    setShowCreateStationForm(false);
    setShowUpdateTrainRouteForm(true);
    setShowDeleteAdminForm(false);
    setShowCreateTrainRouteForm(false);
    setShowCreateLineForm(false);
    setShowCreateRailwayRouteForm(false);
    setShowCreateNewAdminForm(false); 
    setShowDeleteRailwayRouteForm(false);
  };

  const handleCreateTrainRouteClick = () => {
    setShowCreateTrainForm(false);
    setShowCreateStationForm(false);
    setShowUpdateTrainRouteForm(false);
    setShowCreateTrainRouteForm(true);
    setShowCreateLineForm(false);
    setShowCreateRailwayRouteForm(false);
    setShowDeleteRailwayRouteForm(false);
    setShowCreateNewAdminForm(false); 
    setShowDeleteAdminForm(false);
  };

  const handleCreateLineClick = () => {
    setShowCreateTrainForm(false);
    setShowCreateStationForm(false);
    setShowUpdateTrainRouteForm(false);
    setShowCreateTrainRouteForm(false);
    setShowCreateLineForm(true);
    setShowCreateRailwayRouteForm(false);
    setShowDeleteRailwayRouteForm(false);
    setShowCreateNewAdminForm(false); 
    setShowDeleteAdminForm(false);
  };

  const handleCreateRailwayRouteClick = () => {
    setShowCreateTrainForm(false);
    setShowCreateStationForm(false);
    setShowUpdateTrainRouteForm(false);
    setShowCreateTrainRouteForm(false);
    setShowCreateLineForm(false);
    setShowCreateRailwayRouteForm(true);
    setShowDeleteRailwayRouteForm(false);
    setShowCreateNewAdminForm(false); 
    setShowDeleteAdminForm(false);
  };

  const handleDeleteRailwayRouteClick = () => {
    setShowCreateTrainForm(false);
    setShowCreateStationForm(false);
    setShowUpdateTrainRouteForm(false);
    setShowCreateLineForm(false);
    setShowCreateRailwayRouteForm(false);
    setShowDeleteRailwayRouteForm(true);
    setShowCreateTrainRouteForm(false);
    setShowCreateNewAdminForm(false); 
    setShowDeleteAdminForm(false);
  };

  const handleCreateNewAdminClick = () => {
    setShowCreateTrainForm(false);
    setShowCreateStationForm(false);
    setShowUpdateTrainRouteForm(false);
    setShowCreateLineForm(false);
    setShowCreateRailwayRouteForm(false);
    setShowDeleteRailwayRouteForm(false);
    setShowCreateTrainRouteForm(false);
    setShowDeleteAdminForm(false);
    setShowCreateNewAdminForm(true); // Show Create New Admin form
  };
  
  const handleDeleteAdminClick = () => {
    setShowCreateTrainForm(false);
    setShowCreateStationForm(false);
    setShowUpdateTrainRouteForm(false);
    setShowCreateLineForm(false);
    setShowCreateRailwayRouteForm(false);
    setShowDeleteRailwayRouteForm(false);
    setShowCreateNewAdminForm(false);
    setShowCreateTrainRouteForm(false);
    setShowDeleteAdminForm(true); // Show the Delete Admin form
  };
  

  const handleCreateAdminFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/trains/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: newAdminUsername,
          password: newAdminPassword,
        }),
      });
  
      if (response.ok) {
        alert('New admin created successfully!');
        setShowCreateNewAdminForm(false);
        setNewAdminUsername('');
        setNewAdminPassword('');
      } else {
        alert('Failed to create new admin.');
      }
    } catch (error) {
      alert('An error occurred while creating the new admin.');
    }
  };
  const handleDeleteAdminFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:3000/trains/admin?username=${deleteAdminUsername}&password=${deleteAdminPassword}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Admin deleted successfully!');
        setShowDeleteAdminForm(false);
        setDeleteAdminUsername('');
        setDeleteAdminPassword('');
      } else {
        alert('Failed to delete admin. Please check the username and password.');
      }
    } catch (error) {
      alert('An error occurred while deleting the admin.');
    }
  };
  
  const handleLineFormSubmit = async (e) => {
    e.preventDefault();

    // Convert the 'have' string into an array of strings
    const haveArray = have.split(',').map(item => item.trim());

    try {
      const response = await fetch('http://localhost:3000/trains/lines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lineNumber,
          lineName,
          startStation,
          endStation,
          have: haveArray,
        }),
      });
      
      const  result = await response.json();

      if (response.ok) {
        alert('Line created successfully!');
        setShowCreateLineForm(false);
        setLineNumber('');
        setLineName('');
        setStartStation('');
        setEndStation('');
        setHave('');
      } else {
        setMessage(result.message || 'Failed to create line.');
        setMessageType('error');
      }
    } catch (error) {
      alert('An error occurred while creating the line.');
    }
  };

  const handleTrainFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/trains', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trainNumber: trainNumber,
          trainName: trainName,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Train created successfully!');
        setShowCreateTrainForm(false);
        setTrainNumber('');
        setTrainName('');
      } else {
        setMessage(result.message || 'Failed to create train.');
        setMessageType('error');
      }
    } catch (error) {
      alert('An error occurred while creating the train.');
    }
  };

  const handleStationFormSubmit = async (e) => {
    e.preventDefault();

    // Convert the coordinates string into an array of numbers
    const coordinatesArray = coordinates.split(',').map(coord => parseFloat(coord.trim()));

    try {
      const response = await fetch('http://localhost:3000/trains/stations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stationNumber: stationNumber,
          stationName: stationName,
          coordinates: coordinatesArray, // Use the converted array here
        }),
      });
      const result = await response.json();

      if (response.ok) {
        alert('Station created successfully!');
        setShowCreateStationForm(false);
        setStationNumber('');
        setStationName('');
        setCoordinates('');
      } else {
        setMessage(result.message || 'Failed to create station.');
        setMessageType('error');
      }
    } catch (error) {
      alert('An error occurred while creating the station.');
    }
  };

  const handleUpdateTrainRouteSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/trains/trainRoute', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          routeNumber: routeNumber,
          trainNumber: trainNumber,
          departure: departure,
          arrival: arrival,
          trainRouteNumber: trainRouteNumber,
        }),
      });

      if (response.ok) {
        alert('Train route updated successfully!');
        setShowUpdateTrainRouteForm(false);
        setRouteNumber('');
        setTrainNumber('');
        setDeparture('');
        setArrival('');
        setTrainRouteNumber('');
      } else {
        alert('Failed to update train route.');
      }
    } catch (error) {
      alert('An error occurred while updating the train route.');
    }
  };

  const handleDeleteRailwayRouteFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/trains/railwayRoutes?routeNumber=${deleteRouteNumber}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Railway route deleted successfully!');
        setShowDeleteRailwayRouteForm(false);
        setDeleteRouteNumber('');
      } else {
        alert('Failed to delete railway route.');
      }
    } catch (error) {
      alert('An error occurred while deleting the railway route.');
    }
  };


  const handleCreateTrainRouteSubmit = async (e) => {
    e.preventDefault();

    // Convert the coordinates string into an array of numbers
    const coordinatesArray = coordinates.split(',').map(coord => parseFloat(coord.trim()));

    try {
      const response = await fetch('http://localhost:3000/trains/trainRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trainRouteNumber: trainRouteNumber,
          trainNumber: trainNumber,
          departure: departure,
          arrival: arrival,
          routeNumber: routeNumber,
          coordinates: coordinatesArray, // Use the converted array here
        }),
      });

      if (response.ok) {
        alert('Train route created successfully!');
        setShowCreateTrainRouteForm(false);
        setTrainRouteNumber('');
        setTrainNumber('');
        setDeparture('');
        setArrival('');
        setRouteNumber('');
        setCoordinates('');
      } else {
        alert('Failed to create train route.');
      }
    } catch (error) {
      alert('An error occurred while creating the train route.');
    }
  };
  const handleRailwayRouteFormSubmit = async (e) => {
    e.preventDefault();

    // Convert the 'lineNumbers' and 'stationsInRoute' strings into arrays
    const lineNumbersArray = lineNumbers.split(',').map(item => item.trim());
    const stationsInRouteArray = stationsInRoute.split(',').map(item => item.trim());

    try {
      const response = await fetch('http://localhost:3000/trains/railwayRoutes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          routeNumber: routeNumber,
          lineNumbers: lineNumbersArray,
          startStation: startStation,
          endStation: endStation,
          stationsInRoute: stationsInRouteArray,
          distance: distance
        }),
      });

      if (response.ok) {
        alert('Railway route created successfully!');
        setShowCreateRailwayRouteForm(false);
        setRouteNumber('');
        setLineNumbers('');
        setStartStation('');
        setEndStation('');
        setStationsInRoute('');
        setDistance('');
      } else {
        alert('Failed to create railway route.');
      }
    } catch (error) {
      alert('An error occurred while creating the railway route.');
    }
  };

  return (
    <div className="admin-actions-container">
      <h2>Admin Actions</h2>
      <div className="button-grid">
        <button onClick={handleCreateTrainClick}>Create Train</button>
        <button onClick={handleUpdateTrainRouteClick}>Update Train Route</button>
        <button onClick={handleCreateStationClick}>Create Station</button>
        <button onClick={handleCreateTrainRouteClick}>Create Train Route</button>
        <button onClick={handleCreateLineClick}>Create Line</button>
        <button onClick={handleCreateRailwayRouteClick}>Create Railway Route</button>
        <button onClick={handleDeleteRailwayRouteClick}>Delete Railway Route</button>
        <button onClick={handleCreateNewAdminClick}>Create New Admin</button>
        <button onClick={handleDeleteAdminClick}>Delete Admin</button>
        <button className="see-train-schedule-button" onClick={handleSeeTrainSchedule}>See Train Schedule</button>
      </div>
      

      {showCreateTrainForm && (
        <form className="create-train-form" onSubmit={handleTrainFormSubmit}>
          <div className="form-group">
            <label htmlFor="trainNumber">Train Number</label>
            <input
              type="text"
              id="trainNumber"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
              placeholder="Enter train number (e.g., T001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainName">Train Name</label>
            <input
              type="text"
              id="trainName"
              value={trainName}
              onChange={(e) => setTrainName(e.target.value)}
              placeholder="Enter train name (e.g., Sagarika)"
              required
            />
          </div>
          <button type="submit">Create Train</button>
          
          {message && (
            <div className={`alert-container alert-${messageType}`}>
              {message}
            </div>
          )}
        </form>
      )}
{showCreateNewAdminForm && (
    <form className="create-admin-form" onSubmit={handleCreateAdminFormSubmit}>
      <div className="form-group">
        <label htmlFor="newAdminUsername">Username</label>
        <input
          type="text"
          id="newAdminUsername"
          value={newAdminUsername}
          onChange={(e) => setNewAdminUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="newAdminPassword">Password</label>
        <input
          type="password"
          id="newAdminPassword"
          value={newAdminPassword}
          onChange={(e) => setNewAdminPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Admin</button>
    </form>
  )}
      {showDeleteRailwayRouteForm && (
        <form className="delete-railway-route-form" onSubmit={handleDeleteRailwayRouteFormSubmit}>
          <div className="form-group">
            <label htmlFor="deleteRouteNumber">Route Number</label>
            <input
              type="text"
              id="deleteRouteNumber"
              value={deleteRouteNumber}
              onChange={(e) => setDeleteRouteNumber(e.target.value)}
              placeholder="Enter route number (e.g., R001)"
              required
            />
          </div>
          <button type="submit">Delete Railway Route</button>
        </form>
      )}

      {showCreateStationForm && (
        <form className="create-station-form" onSubmit={handleStationFormSubmit}>
          <div className="form-group">
            <label htmlFor="stationNumber">Station Number</label>
            <input
              type="text"
              id="stationNumber"
              value={stationNumber}
              onChange={(e) => setStationNumber(e.target.value)}
              placeholder="Enter station number (e.g., S001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="stationName">Station Name</label>
            <input
              type="text"
              id="stationName"
              value={stationName}
              onChange={(e) => setStationName(e.target.value)}
              placeholder="Enter station name (e.g., Colombo Fort)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coordinates">Location (Coordinates)</label>
            <input
              type="text"
              id="coordinates"
              value={coordinates}
              onChange={(e) => setCoordinates(e.target.value)}
              placeholder="Enter coordinates (e.g., 78.9982, 6.3883)"
              required
            />
          </div>
          <button type="submit">Create Station</button>
          {message && (
            <div className={`alert-container alert-${messageType}`}>
              {message}
            </div>
          )}
        </form>
      )}

      {showUpdateTrainRouteForm && (
        <form className="update-train-route-form" onSubmit={handleUpdateTrainRouteSubmit}>
          <div className="form-group">
            <label htmlFor="trainRouteNumber">Train Route Number</label>
            <input
              type="text"
              id="trainRouteNumber"
              value={trainRouteNumber}
              onChange={(e) => setTrainRouteNumber(e.target.value)}
              placeholder="Enter train route number (e.g., TR001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="routeNumber">Route Number</label>
            <input
              type="text"
              id="routeNumber"
              value={routeNumber}
              onChange={(e) => setRouteNumber(e.target.value)}
              placeholder="Enter route number (e.g., R001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainNumber">Train Number</label>
            <input
              type="text"
              id="trainNumber"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
              placeholder="Enter train number (e.g., T001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="departure">Departure</label>
            <input
              type="text"
              id="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              placeholder="Enter departure time (e.g., 08:30)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="arrival">Arrival</label>
            <input
              type="text"
              id="arrival"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              placeholder="Enter arrival time (e.g., 10:45)"
              required
            />
          </div>
          <button type="submit">Update Train Route</button>
        </form>
      )}
      {showCreateLineForm && (
        <form className="create-line-form" onSubmit={handleLineFormSubmit}>
          <div className="form-group">
            <label htmlFor="lineNumber">Line Number</label>
            <input
              type="text"
              id="lineNumber"
              value={lineNumber}
              onChange={(e) => setLineNumber(e.target.value)}
              placeholder="Enter line number (e.g., L01)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lineName">Line Name</label>
            <input
              type="text"
              id="lineName"
              value={lineName}
              onChange={(e) => setLineName(e.target.value)}
              placeholder="Enter line name (e.g., Southern Line)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startStation">Start Station</label>
            <input
              type="text"
              id="startStation"
              value={startStation}
              onChange={(e) => setStartStation(e.target.value)}
              placeholder="Enter start station (e.g., Colombo Fort)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endStation">End Station</label>
            <input
              type="text"
              id="endStation"
              value={endStation}
              onChange={(e) => setEndStation(e.target.value)}
              placeholder="Enter end station (e.g., Galle)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="have">Junctions (comma separated)</label>
            <input
              type="text"
              id="have"
              value={have}
              onChange={(e) => setHave(e.target.value)}
              placeholder="Enter stations (e.g., Colombo, Kalutara)"
              required
            />
          </div>
          <button type="submit">Create Line</button>
          {message && (
            <div className={`alert-container alert-${messageType}`}>
              {message}
            </div>
          )}
        </form>
      )}
{showDeleteAdminForm && (
  <div className="delete-admin-form">
    <form onSubmit={handleDeleteAdminFormSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={deleteAdminUsername}
          onChange={(e) => setDeleteAdminUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={deleteAdminPassword}
          onChange={(e) => setDeleteAdminPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Delete Admin</button>
    </form>
  </div>
)}

      {showCreateTrainRouteForm && (
        <form className="create-train-route-form" onSubmit={handleCreateTrainRouteSubmit}>
          <div className="form-group">
            <label htmlFor="trainRouteNumber">Train Route Number</label>
            <input
              type="text"
              id="trainRouteNumber"
              value={trainRouteNumber}
              onChange={(e) => setTrainRouteNumber(e.target.value)}
              placeholder="Enter train route number (e.g., TR001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="routeNumber">Route Number</label>
            <input
              type="text"
              id="routeNumber"
              value={routeNumber}
              onChange={(e) => setRouteNumber(e.target.value)}
              placeholder="Enter route number (e.g., R001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainNumber">Train Number</label>
            <input
              type="text"
              id="trainNumber"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
              placeholder="Enter train number (e.g., T001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="departure">Departure</label>
            <input
              type="text"
              id="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              placeholder="Enter departure time (e.g., 08:30)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="arrival">Arrival</label>
            <input
              type="text"
              id="arrival"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              placeholder="Enter arrival time (e.g., 10:45)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coordinates">Coordinates</label>
            <input
              type="text"
              id="coordinates"
              value={coordinates}
              onChange={(e) => setCoordinates(e.target.value)}
              placeholder="Enter coordinates (e.g., 78.9982, 6.3883)"
              required
            />
          </div>
          <button type="submit">Create Train Route</button>
        </form>
      )}
      {showCreateRailwayRouteForm && (
        <form className="create-railway-route-form" onSubmit={handleRailwayRouteFormSubmit}>
          <div className="form-group">
            <label htmlFor="routeNumber">Route Number</label>
            <input
              type="text"
              id="routeNumber"
              value={routeNumber}
              onChange={(e) => setRouteNumber(e.target.value)}
              placeholder="Enter route number (e.g., R001)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lineNumbers">Line Numbers (comma separated)</label>
            <input
              type="text"
              id="lineNumbers"
              value={lineNumbers}
              onChange={(e) => setLineNumbers(e.target.value)}
              placeholder="Enter line numbers (e.g., L001, L002)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startStation">Start Station</label>
            <input
              type="text"
              id="startStation"
              value={startStation}
              onChange={(e) => setStartStation(e.target.value)}
              placeholder="Enter start station (e.g., Colombo Fort)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endStation">End Station</label>
            <input
              type="text"
              id="endStation"
              value={endStation}
              onChange={(e) => setEndStation(e.target.value)}
              placeholder="Enter end station (e.g., Galle)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="distance">Distance</label>
            <input
              type="text"
              id="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Enter Distance (e.g., 234.76)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="stationsInRoute">Stations in Route (comma separated)</label>
            <input
              type="text"
              id="stationsInRoute"
              value={stationsInRoute}
              onChange={(e) => setStationsInRoute(e.target.value)}
              placeholder="Enter stations in route (e.g., Colombo, Kalutara)"
              required
            />
          </div>
          <button type="submit">Create Railway Route</button>
        </form>
      )}

    </div>
  );
}

export default AdminActions;
