import React from "react";

import "./Today.css";

export default function Today() {
  return (
    <div className="Today">
      <h2 className="city">London</h2>
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
  );
}
