import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <Forecast />
      </div>
      <footer>
        <a href="https://github.com/cathhill/weather-project.git">
          Open-source code
        </a>
        by Catherine Hill
      </footer>
    </div>
  );
}
