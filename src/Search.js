import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  let [city, setCity] = useState(null);

  const apiKey = "b1c0b3d5980e9959f8a6f58024cf437d";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  function UpdateSearch(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function submitSearch(event) {
    event.preventDefault();
    alert("Hello");
    //Here is the AJAX call. Before the isReady boolean is set to true, this AJAX call must happen- goes to handleResponse function.
    axios.get(apiURL).then(handleResponse);
  }
  return (
    <form onSubmit={submitSearch}>
      <div className="input-group justify-content-end">
        <div className="form-outline">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city name"
            onChange={UpdateSearch}
          />
        </div>
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}
