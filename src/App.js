// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Import the HomePage component
import TrainSchedule from './TrainSchedule';
import MapPage from './MapPage';
import AdminLogin from './Admin/AdminLogin'; // Import the AdminLogin component
import AdminActions from './Admin/AdminActions'; // Import the AdminActions component
import './App.css';
const trainRouteURL = `${process.env.REACT_APP_BACKEND_URL}/trains`;
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch(`${trainRouteURL}/lines`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage as the default route */}
        <Route path="/train-schedule" element={<TrainSchedule data={data} loading={loading} error={error} />} />
        <Route path="/map" element={<MapPage data={data} />} />
        <Route path="/admin-login" element={<AdminLogin />} /> {/* Route for Admin Login */}
        <Route path="/admin-actions" element={<AdminActions />} /> {/* Route for Admin Actions */}
      </Routes>
    </Router>
  );
}

export default App;
