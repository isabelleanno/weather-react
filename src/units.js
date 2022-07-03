//This component deals with the units- fahrenheit and celsius.

import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";
import React, { useState, UseState } from "react";
import "./index.css";

export default function Units(props) {
  //Defining states
  console.log(props.temperature);
  const [tempUnit, setTempUnit] = useState("°C");
  let [tempNumber, setTempNumber] = useState(props.temperature);

  //changeUnit converts to fahrenheit
  function changeUnit(event) {
    event.preventDefault();
    if (event.target.innerHTML === "°C") {
      setTempUnit("°F");
      setTempNumber(Math.round(tempNumber * 1.8 + 32));
    } else {
      changeBack();
    }
  }

  //changeBack converts back into celsius
  function changeBack() {
    setTempUnit("°C");
    setTempNumber(props.temperature);
  }

  return (
    <span>
      <h1 className="d-inline text-primary">{tempNumber}</h1>
      <p className="d-inline">
        <button className="weather-button" onClick={changeUnit}>
          {tempUnit}
        </button>
      </p>
    </span>
  );
}
