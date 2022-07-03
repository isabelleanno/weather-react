import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./weather.js";
import Weather from "./weather.js";

//https://www.npmjs.com/package/react-animated-weather

export default function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}
