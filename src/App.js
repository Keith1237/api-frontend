// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Import the new HomePage component
import TrainSchedule from './TrainSchedule';
import MapPage from './MapPage';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/trains/getlines')
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
      </Routes>
    </Router>
  );
}

export default App;
