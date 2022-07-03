//Isabelle Anno, 6/17/2022
/* This is a weather app I made with react, with the help of SheCodes React workshop. It uses openweathermap API to fetch
real data about the weather in the specified city. */

import React, { useState } from "react";
import axios from "axios";
import Getdate from "./Date.js";
import Units from "./units.js";
import Icons from "./icons.js";

export default function Weather() {
  /*I use states here- the first is for conditional rendering- it will only load the site after the ajax call was made.
  The second is a weather object I made to store the values of the API's response.
 */
  let [isReady, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, updateCity] = useState("London");
  /* Defining the APIUrl- AJAX call is made at the bottom of this code in the "else" statement in order to prevent
infinite loop calls. */

  const apiKey = "b1c0b3d5980e9959f8a6f58024cf437d";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  let reloadComponent = false;

  function UpdateSearch(event) {
    updateCity(event.target.value);
  }

  function submitSearch(event) {
    event.preventDefault();
    axios.get(apiURL).then(handleResponse);
  }

  //This function gets called in the "then" statement after axios gets the APIURL. See the bottom of this page for the AJAX call.
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      main: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      feelsLike: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      name: response.data.name,
    });
    console.log(weatherData.temperature);
    //Sets the "isReady" state to true so that the component will load.
    setReady(true);
  }

  /*If isready is true, load the component and fill in the data using
 the weatherData state/object defined in handleResponse- else do the AJAX call. */

  if (isReady) {
    return (
      <div className="container d-flex align-items-center justify-content-center">
        <div className="direction-row">
          <div className="mt-5 p-5 border">
            <div className="row mb-4 ">
              <div className="col-5">
                <h1 className="d-inline">{weatherData.name}</h1>
                <br />
                <Units temperature={weatherData.temperature} />
              </div>
              <div className="col-7">
                <div className="mb-3">
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
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <h6>Feels like {weatherData.feelsLike}° right now.</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <Getdate date={weatherData.date} />
                <p className="m-0">{weatherData.description}</p>
              </div>
              <div className="col-4">
                <Icons main={weatherData.main} icon={weatherData.icon} />
              </div>
              <div className="col-4">
                <div className="m-0">
                  <h6 className="d-inline">High: </h6>
                  <p className="d-inline">{weatherData.high}° </p>
                  <h6 className="d-inline">low: </h6>
                  <p className="d-inline">{weatherData.low}° </p>
                </div>
                <div className="m-0">
                  <h6 className="d-inline">Humidity: </h6>
                  <p className="d-inline">{weatherData.humidity}%</p>
                </div>
                <div className="m-0">
                  <h6 className="d-inline">Wind: </h6>
                  <p className="d-inline">{weatherData.wind} km/h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="small">
            <small>
              This project was coded by{" "}
              <a href="https://isabelleanno-portfolio.netlify.app/">
                Isabelle Anno
              </a>
              . Check out my{" "}
              <a href="https://github.com/isabelleanno">GitHub</a>!
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    //Here is the AJAX call. Before the isReady boolean is set to true, this AJAX call must happen- goes to handleResponse function.
    axios.get(apiURL).then(handleResponse);
    return "loading...";
  }
}
