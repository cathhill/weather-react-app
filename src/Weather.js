import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-form" id="search-form">
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
        <h1 className="city">London</h1>
        <ul>
          <li id="current-date">date</li>
          <li id="description">partly cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather-icon"
                className="float-left current-icon"
              />
              <div className="float-left">
                <strong>20</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Wind <span className="wind">10</span> m/s
              </li>
              <li>
                Humidity <span id="humidity">70</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
