import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";

import './App.css';

function App() {
  return (
    <div className="App">

      <Search />
      <Weather city="Vienna"/>
      <Footer />
    </div>
  );
}

export default App;
