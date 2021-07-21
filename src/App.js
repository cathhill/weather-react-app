import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="London" />
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

export default App;
