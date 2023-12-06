import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    const apiKey = "4d839e29bb45216067bd8f2a81445b81";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 offset-md-4">
        <div className="weatherBg">
          <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-2 col-12 mt-4">
            <input
              type="text"
              className="form-control mb-3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={fetchWeatherData}
            >
              Search
            </button>
          </div>
        </div>

        <div className="col-md-12 text-center mt-5">
          {weatherData && (
            <div className="weatherResultBox">
              <div className="weatherIconBox">
                <img
                  className="weatherIcon"
                  src={`https://cdn-icons-png.flaticon.com/128/1163/1163661.png`}
                  alt=""
                />
              </div>
              <div className="weatherInfo">
                <h5 className="weatherCity">{weatherData.name}</h5>
                <h6 className="weatherTemp">{weatherData.main.temp} °C</h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
