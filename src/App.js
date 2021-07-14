import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import Today from "./Today";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />

      <Weather city="Vienna" />

      <Today />

      <Forecast />

      <Footer />
    </div>
  );
}

export default App;
