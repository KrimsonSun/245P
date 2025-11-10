// 1. Import 'useRef' from React
import React, { useState, useEffect, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./WeatherWidget.css"; 

function WeatherWidget() {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // 2. Create the ref. We'll attach this to our div.
  // We use a different ref for each state to be safe.
  const loadingRef = useRef(null);
  const errorRef = useRef(null);
  const dataRef = useRef(null);

  // --- API / useEffect logic (no changes here) ---
  const APIkey = "FC4F5490247E51208A60B0B5FD0C279F"; 
  const lat = "51.5074"; // London
  const lon = "-0.1278"; // London

  useEffect(() => {
    // ... (Your entire fetch logic stays exactly the same) ...
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    fetch(API_URL)
      .then(res => res.json()) // (Simplified for brevity)
      .then(actualData => setData(actualData))
      .catch(err => setError(err.message))
      .finally(() => setLoadingData(false));
  }, []);

  // --- JSX Rendering (This is where the fix is) ---
  
  // We determine the current state
  let stateKey;
  let nodeRef; // A variable to hold the *current* ref
  
  if (loadingData) {
    stateKey = "loading";
    nodeRef = loadingRef; // Use the loading ref
  } else if (error) {
    stateKey = "error";
    nodeRef = errorRef; // Use the error ref
  } else {
    stateKey = "data";
    nodeRef = dataRef; // Use the data ref
  }

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={stateKey}
        timeout={300}
        classNames="fade"
        
        // 3. Pass the 'nodeRef' prop to CSSTransition
        nodeRef={nodeRef}
      >
        {/*
          This div is no longer the child. The 'if' statements are.
          We must add the 'ref' to EACH of the top-level
          elements inside the transition.
        */}
        <>
          {/* Block 1: Show if loading */}
          {loadingData && (
            <div className="weather-container loading" ref={loadingRef}>
              <h2>Loading Weather Data...</h2>
            </div>
          )}

          {/* Block 2: Show if error */}
          {error && !loadingData && (
            <div className="weather-container error" ref={errorRef}>
              <h2>Error: Could not fetch weather data.</h2>
              <p>{error}</p>
            </div>
          )}

          {/* Block 3: Show if data is loaded */}
          {data && !loadingData && !error && (
            <div className="weather-container" ref={dataRef}>
              <h1>Weather in {data.name}</h1>
              <p className="weather-description">
                Current forecast: {data.weather[0].description}
              </p>
              <div className="weather-details">
                <p className="temp-current">
                  Current: {data.main.temp.toFixed(1)}°C
                </p>
                <p className="temp-range">
                  High: {data.main.temp_max.toFixed(1)}°C | Low: {data.main.temp_min.toFixed(1)}°C
                </p>
                <p className="wind">
                  Wind: {data.wind.speed} m/s at {data.wind.deg}°
                </p>
              </div>
            </div>
          )}
        </>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default WeatherWidget;