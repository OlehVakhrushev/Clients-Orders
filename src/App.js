import './App.css';
import React from "react";
import Navigation from "./components/Navigation";
import SiteName from "./components/SiteName";

function App() {
  return (
    <div className="App">
      <SiteName/>
      <Navigation/>
    </div>
  );
}

export default App;
