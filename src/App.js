import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import Today from "./Today";
import Footer from "./Footer";

import './App.css';

function App() {
  return (
    <div className="App">

      <Search />
      <hr />
      <Weather city="Vienna"/>
       <hr />
      <Today />
       <hr />
      <Footer />
    </div>
  );
}

export default App;
