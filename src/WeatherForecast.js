import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let lon = props.coords.lon;
  let lat = props.coords.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=b1c0b3d5980e9959f8a6f58024cf437d`;
  axios.get(apiURL).then(handleResponse);
  return (
    <div className="row">
      <div className="col mt-3">
        <h6 className="m-0">Thurs</h6>
        <h3 className="my-2">
          <span role="img" aria-label="Mostly Sunny">
            🌤️
          </span>
        </h3>
        <span>23°</span>
        <span className="text-secondary"> 15°</span>
      </div>

      <div className="col mt-3">
        <h6 className="m-0">Fri</h6>
        <h3 className="my-2">
          <span role="img" aria-label="Sunny">
            🔆
          </span>
        </h3>
        <span>25°</span>
        <span className="text-secondary"> 17°</span>
      </div>

      <div className="col mt-3">
        <h6 className="m-0">Sat</h6>
        <h3 className="my-2">
          <span role="img" aria-label="Partly Cloudy">
            ⛅
          </span>
        </h3>
        <span>15°</span>
        <span className="text-secondary"> 9°</span>
      </div>

      <div className="col mt-3">
        <h6 className="m-0">Sun</h6>
        <h3 className="my-2">
          <span role="img" aria-label="Rain">
            🌧️
          </span>
        </h3>
        <span>18°</span>
        <span className="text-secondary"> 12°</span>
      </div>

      <div className="col mt-3">
        <h6 className="m-0">Mon</h6>
        <h3 className="my-2">
          <span role="img" aria-label="Cloud">
            ☁️
          </span>
        </h3>
        <span>20°</span>
        <span className="text-secondary"> 14°</span>
      </div>
    </div>
  );
}
