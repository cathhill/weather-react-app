import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.date);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly-cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Choose a city"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <button
                type="submit"
                value=""
                className="form-control btn btn-primary change-city shadow-sm"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="col-3">
              <button
                type="submit"
                value=""
                className="form-control btn btn-primary current-city shadow-sm"
              >
                <i className="fas fa-map-pin"></i>
              </button>
            </div>
          </div>
        </form>

        <div className="Today">
          <h1 className="city">{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="description text-capitalize">
              {weatherData.description}
            </li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-left current-icon"
                />
                <div className="float-left">
                  <strong>{Math.round(weatherData.temperature)}</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Wind <span>{weatherData.wind}</span> m/s
                </li>
                <li>
                  Humidity <span>{weatherData.humidity}</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "66decd6fe52d82f120eb1be8f6e6d5d8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
