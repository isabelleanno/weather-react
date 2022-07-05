//This component deals with the units- fahrenheit and celsius.

import React, { useState } from "react";
import "./index.css";

export default function Units(props) {
  //Defining states

  let [tempUnit, setTempUnit] = useState("°C");

  //changeUnit converts to fahrenheit
  function changeUnit(event) {
    event.preventDefault();
    if (event.target.innerHTML === "°C") {
      setTempUnit("°F");
    } else {
      setTempUnit("°C");
    }
  }

  return (
    <span>
      <h1 className="d-inline text-primary">
        {" "}
        {tempUnit === "°C"
          ? props.temperature
          : Math.round(props.temperature * 1.8 + 32)}
      </h1>
      <p className="d-inline">
        <button className="weather-button" onClick={changeUnit}>
          {tempUnit}
        </button>
      </p>
    </span>
  );
}
