import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
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
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trainRouteResponse = await fetch('http://localhost:3000/trains/trainRoute');
        if (!trainRouteResponse.ok) throw new Error('Failed to fetch train routes');
        const trainRoutes = await trainRouteResponse.json();

        const trainDetailsResponse = await fetch('http://localhost:3000/trains');
        if (!trainDetailsResponse.ok) throw new Error('Failed to fetch train details');
        const trainDetails = await trainDetailsResponse.json();

        const railwayRoutesResponse = await fetch('http://localhost:3000/trains/railwayRoutes');
        if (!railwayRoutesResponse.ok) throw new Error('Failed to fetch railway routes');
        const railwayRoutes = await railwayRoutesResponse.json();

        // Fetch station names for the dropdowns
        const stationsResponse = await fetch('http://localhost:3000/trains/Stations');
        if (!stationsResponse.ok) throw new Error('Failed to fetch stations');
        const stationsData = await stationsResponse.json();
        setStations(stationsData);

        // Merging data from all APIs
        const mergedData = trainRoutes.map((route) => {
          const trainDetail = trainDetails.find((train) => train.trainNumber === route.trainNumber);
          const railwayRoute = railwayRoutes.find((rRoute) => rRoute.routeNumber === route.routeNumber);

          return {
            trainNumber: route.trainNumber,
            routeNumber: route.routeNumber,
            trainName: trainDetail ? trainDetail.trainName : 'N/A',
            currentLocation: route.currentLocation,
            startStation: railwayRoute ? railwayRoute.startStation : 'N/A',
            endStation: railwayRoute ? railwayRoute.endStation : 'N/A',
            distance: railwayRoute ? railwayRoute.distance : 'N/A',
            departure: route.departure,
            arrival: route.arrival,
          };
        });

        setData(mergedData);
        setFilteredData(mergedData); // Initially display all data
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    if (startStation && endStation) {
      try {
        const response = await fetch(
          `http://localhost:3000/trains/railwayRoutesByStations?startStation=${startStation}&endStation=${endStation}`
        );
        if (!response.ok) throw new Error('Failed to fetch filtered routes');
        const filteredRoutes = await response.json();

        const filteredRouteNumbers = filteredRoutes.map((route) => route.routeNumber);

        const newFilteredData = data.filter((train) =>
          filteredRouteNumbers.includes(train.routeNumber)
        );

        setFilteredData(newFilteredData);
      } catch (error) {
        setError(error);
      }
    }
  };

  const handleRowClick = (train) => {
    navigate("/map", { state: { selectedTrain: train, allTrainData: data, from: location.state?.from || 'TrainSchedule' } });
  };

  const handleBackButtonClick = () => {
    navigate(location.state?.from ? `/${location.state.from}` : '/');
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
        <button className="back-button" onClick={handleBackButtonClick}>
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
            <th>Train Name</th>
            <th>Start Station</th>
            <th>Departure</th>
            <th>End Station</th>
            <th>Arrival</th>
            <th>Distance</th>
            <th>Current Location</th>
          </tr>
        </thead>
        {/* <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} onClick={() => handleRowClick(row)}>
              <td>{row.trainNumber}</td>
              <td>{row.routeNumber}</td>
              <td>{row.trainName}</td>
              <td>{row.startStation}</td>
              <td>{row.departure}</td>
              <td>{row.endStation}</td>
              <td>{row.arrival}</td>
              <td>{row.distance}</td>
              <td>{"Click to see, " + row.trainName}</td>
              <td>
        <button onClick={() => alert(`Click to see, ${row.trainName}`)}>
          See Details
        </button>
      </td>
              
            </tr>
          ))}
        </tbody> */}
        <tbody>
  {filteredData.map((row, index) => (
    <tr key={index}>
      <td>{row.trainNumber}</td>
      <td>{row.routeNumber}</td>
      <td>{row.trainName}</td>
      
    
      <td>{row.startStation}</td>
      <td>{row.departure}</td>
      <td>{row.endStation}</td>
      <td>{row.arrival}</td>
      <td>{row.distance}</td>
      <td>
        <button
          onClick={() => {
            handleRowClick(row);
          }}
        >
          See Location
        </button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default TrainSchedule;
