import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "66decd6fe52d82f120eb1be8f6e6d5d8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(url);
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
      <div className="Form">
    <form className="search-form" id="search-form" onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-6">
      <input 
        type="search" 
        placeholder="Choose a city" 
        onChange={updateCity} 
         autoFocus="on"      
        autoComplete="off"
        id="city-input"
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
    </div>
  );
  //no data to display if not sent anything to axios. If loaded=true:
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}</li>
          <li>Wind: {weather.wind}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    //shows the search box only if no other data
    return form;
  }
}