import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  //get city name from coordinates
  function showPosition(position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "66decd6fe52d82f120eb1be8f6e6d5d8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);
  }

  //get coordinates of current location if pin clicked
  function handleLocationSubmit(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  //search by city name
  function search() {
    const apiKey = "66decd6fe52d82f120eb1be8f6e6d5d8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather clearfix">
        <div className="row">
          <div className="col-9">
            <form className="search-form input-group" onSubmit={handleSubmit}>
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Choose a city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleCityChange}
                  className="form-control btn-primary shadow-sm choose-city float-left"
                />
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  value=""
                  className="form-control btn btn-primary change-city shadow-sm float-left"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-3">
            <form className="search-form" onSubmit={handleLocationSubmit}>
              <button
                type="submit"
                value=""
                className="form-control btn btn-primary current-city shadow-sm float-left"
              >
                <i className="fas fa-map-pin"></i>
              </button>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
