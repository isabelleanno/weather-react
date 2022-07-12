import React, { useState, useEffect } from "react";
import axios from "axios";
import Icons from "./icons.js";
import Day from "./day.js";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  let i = props.fcday;

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecastData({
      day: new Date(response.data.daily[i].dt * 1000),
      description: response.data.daily[i].weather[0].description,
      icon: response.data.daily[i].weather[0].icon,
      high: Math.round(response.data.daily[i].temp.max),
      low: Math.round(response.data.daily[i].temp.min),
    });
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="col mt-3">
        <Day date={forecastData.day} />
        <h3 className="my-2">
          <Icons
            icon={forecastData.icon}
            forecast={true}
            description={forecastData.description}
          />
        </h3>
        <span>{forecastData.high}° </span>
        <span className="text-secondary">{forecastData.low}° </span>
      </div>
    );
  } else {
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=b1c0b3d5980e9959f8a6f58024cf437d`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
