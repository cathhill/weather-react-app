import React from "react";
import Weather from "./Weather";
import Search from "./Search";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <Weather city="Vienna"/>
    </div>
  );
}

export default App;
