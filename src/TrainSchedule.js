import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back icon
import './App.css';

function TrainSchedule() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stations, setStations] = useState([]);
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all train routes
    fetch('http://localhost:3000/trains/routes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setFilteredData(data); // Initially show all data
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    // Fetch station names for the dropdowns
    fetch('http://localhost:3000/trains/Stations')
      .then((response) => response.json())
      .then((stations) => {
        setStations(stations);
      })
      .catch((error) => {
        console.error("Error fetching stations:", error);
      });
  }, []);

  const handleRowClick = (train) => {
    navigate("/map", { state: { selectedTrain: train, allTrainData: data } });
  };

  const handleSearch = () => {
    const url = `http://localhost:3000/trains/routesByStations?startStation=${startStation}&endStation=${endStation}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((filteredData) => {
        setFilteredData(filteredData);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <div className="header">
        <button className="back-button" onClick={() => navigate('/')}>
          <FaArrowLeft size={20} />
        </button>
        <h1>Train Schedule</h1>
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <label htmlFor="startStation">Start Station</label>
          <select
            id="startStation"
            value={startStation}
            onChange={(e) => setStartStation(e.target.value)}
          >
            <option value="">Select Start Station</option>
            {stations.map((station) => (
              <option key={station.name} value={station.name}>
                {station.name}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="endStation">End Station</label>
          <select
            id="endStation"
            value={endStation}
            onChange={(e) => setEndStation(e.target.value)}
          >
            <option value="">Select End Station</option>
            {stations.map((station) => (
              <option key={station.name} value={station.name}>
                {station.name}
              </option>
            ))}
          </select>
        </div>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Route Number</th>
            <th>Location (Longitude, Latitude)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} onClick={() => handleRowClick(row)}>
              <td>{row.trainNumber}</td>
              <td>{row.routeNumber}</td>
              <td>{`${row.currentLocation.coordinates[0]}, ${row.currentLocation.coordinates[1]}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainSchedule;
