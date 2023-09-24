import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:8000/?city=${city}`);
      const data = response.data.current;
      setWeatherData({
        conditions: data.condition.text,
        temperature: data.temp_c,
        humidity: data.humidity,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Weather App</h1>
          <form onSubmit={fetchData}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city name"
                onChange={onChangeCity}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  Get Weather
                </button>
              </div>
            </div>
          </form>

          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            weatherData && (
              <div className="text-center">
                <h2>Weather for {city}</h2>
                <p>Conditions: {weatherData.conditions}</p>
                <p>Temperature: {weatherData.temperature}°C</p>
                <p>Humidity: {weatherData.humidity}%</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
