import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
              </div>

              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
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
