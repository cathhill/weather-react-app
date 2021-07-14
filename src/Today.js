import "./Today.css";
import React from "react";

export default function Today() {
  return (
    <div className="Today">
      <h2 className="city">London</h2>
      <ul>
        <li id="current-date">date</li>
        <li id="description">partly cloudy</li>
      </ul>
      <div className="row today">
        <div className="col-4">
          <img src="" id="current-icon" alt="weather-icon" />
        </div>
        <div className="col-4 temp-unit">
          <h1>
            <span id="today-temp">20</span>
            <span id="units">
              <a href="/" id="celsius-temperature" className="units active">
                °C{" "}
              </a>
            </span>
          </h1>
        </div>
        <div className="col-4">
          Wind <span id="wind">10</span> m/s
          <br />
          Humidity <span id="humidity">70</span>%
        </div>
      </div>
    </div>
  );
}
