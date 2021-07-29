import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Today">
        <h1 className="city">{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="description text-capitalize">
            {props.data.description}
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left current-icon"
              />
              <div className="float-left">
                <strong>{Math.round(props.data.temperature)}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Wind <span>{props.data.wind}</span> m/s
              </li>
              <li>
                Humidity <span>{props.data.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
