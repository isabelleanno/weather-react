import React from "react";
import "./App.css";
import "./Search.js";
import Search from "./Search.js";
export default function App() {
  return (
    <div className="App">
      <h1>Fake Weather Search Engine- Deployed on GitHub </h1>
      <h3>SheCodes Week 4 Homework</h3>
      <Search />

      <div className="small">
        <small>
          Made by Isabelle Anno. For educational uses only. This weather data is
          fake & randomized.
        </small>
      </div>
    </div>
  );
}
