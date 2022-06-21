import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./Search.js";
import Search from "./Search.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App </h1>

        <Search />

        <div className="small">
          <small>
            This project was coded by{" "}
            <a href="https://isabelleanno-portfolio.netlify.app/">
              Isabelle Anno
            </a>
            . Check out my <a href="https://github.com/isabelleanno">GitHub</a>!
          </small>
        </div>
      </div>
    </div>
  );
}
