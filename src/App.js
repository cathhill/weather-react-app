import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
      </div>
      <footer>
        <a
          href="https://github.com/cathhill/weather-react-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Catherine Hill
      </footer>
    </div>
  );
}
