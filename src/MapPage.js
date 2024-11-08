import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation, Link } from 'react-router-dom';
import railwayData from './config'; // GeoJSON data for railway lines
import './App.css';
import L from 'leaflet'; 
import trainIconUrl from './train-icon.png'; 

const MapPage = () => {
  const location = useLocation();
  const { selectedTrain, allTrainData } = location.state || {};

  useEffect(() => {
    console.log("Location state:", location.state);
  }, [location]);

  const trainIcon = new L.Icon({
    iconUrl: trainIconUrl, 
    iconSize: [25, 25],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  });

  const railwayStyle = {
    color: 'black',
    weight: 2,
  };

  const CenterMapOnSelectedTrain = ({ selectedTrain }) => {
    const map = useMap();

    if (selectedTrain && selectedTrain.currentLocation && selectedTrain.currentLocation.coordinates) {
      const [lng, lat] = selectedTrain.currentLocation.coordinates;

      // Ensure coordinates are valid numbers
      if (!isNaN(lat) && !isNaN(lng)) {
        map.setView([lat, lng], 13);
      } else {
        console.error("Invalid coordinates for selectedTrain:", selectedTrain.currentLocation.coordinates);
      }
    } else {
      // Default center if no valid train location is provided
      map.setView([7.8731, 80.7718], 7);
    }

    return null;
  };

  return (
    <div className="map-page">
      <div className="map-container">
        <MapContainer center={selectedTrain && selectedTrain.currentLocation && selectedTrain.currentLocation.coordinates ? [selectedTrain.currentLocation.coordinates[1], selectedTrain.currentLocation.coordinates[0]] : [7.8731, 80.7718]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON data={railwayData} style={railwayStyle} />
          {allTrainData && allTrainData.map(train => (
            train.currentLocation && train.currentLocation.coordinates && !isNaN(train.currentLocation.coordinates[1]) && !isNaN(train.currentLocation.coordinates[0]) && (
              <Marker
                key={train.trainNumber}
                position={[train.currentLocation.coordinates[1], train.currentLocation.coordinates[0]]} 
                icon={trainIcon}
              >
                <Popup>
                  Train Number: {train.trainNumber}<br />
                  Route Number: {train.routeNumber}
                </Popup>
              </Marker>
            )
          ))}
          {selectedTrain && selectedTrain.currentLocation && selectedTrain.currentLocation.coordinates && !isNaN(selectedTrain.currentLocation.coordinates[1]) && !isNaN(selectedTrain.currentLocation.coordinates[0]) && (
            <Marker
              position={[selectedTrain.currentLocation.coordinates[1], selectedTrain.currentLocation.coordinates[0]]} 
              icon={trainIcon}
            >
              <Popup>
                Train Number: {selectedTrain.trainNumber}<br />
                Route Number: {selectedTrain.routeNumber}
              </Popup>
            </Marker>
          )}
          <CenterMapOnSelectedTrain selectedTrain={selectedTrain} />
        </MapContainer>
      </div>

      <Link to="/train-schedule">
        <button className="back-button">Back to Schedule</button>
      </Link>
    </div>
  );
};

export default MapPage;
