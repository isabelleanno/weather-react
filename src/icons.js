import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function icons(props) {
  //Part 1: The icons for the CURRENT weather.
  if (!props.forecast) {
    //Using icons from ReactAnimatedWeather instead of weather API. Making mapping objects to connect the icon ID from the API to the icon type
    //in ReactAnimatedWeather.
    const iconMapping = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "CLOUDY",
      "03n": "CLOUDY",
      "04d": "CLOUDY",
      "04n": "CLOUDY",
      "09d": "SLEET",
      "09n": "SLEET",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "RAIN",
      "11n": "RAIN",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };
    //Making different colors for different icons
    const colors = {
      SUNSHINE: "rgb(230, 187, 67)",
      LIGHTGRAY: "rgb(161, 173, 194)",
      RAINGRAY: "rgb(110, 131, 168)",
      MOON: "rgb(17, 4, 156)",
      BLUEGRAY: "rgb(76, 96, 127)",
    };
    const ColorMapping = {
      "01d": `${colors.SUNSHINE}`,
      "01n": `${colors.MOON}`,
      "02d": `${colors.SUNSHINE}`,
      "02n": `${colors.MOON}`,
      "03d": `${colors.LIGHTGRAY}`,
      "03n": `${colors.LIGHTGRAY}`,
      "04d": `${colors.LIGHTGRAY}`,
      "04n": `${colors.LIGHTGRAY}`,
      "09d": `${colors.BLUEGRAY}`,
      "09n": `${colors.BLUEGRAY}`,
      "10d": `${colors.RAINGRAY}`,
      "10n": `${colors.RAINGRAY}`,
      "11d": `${colors.RAINGRAY}`,
      "11n": `${colors.RAINGRAY}`,
      "13d": `${colors.LIGHTGRAY}`,
      "13n": `${colors.LIGHTGRAY}`,
      "50d": `${colors.RAINGRAY}`,
      "50n": `${colors.RAINGRAY}`,
    };

    return (
      <ReactAnimatedWeather
        icon={iconMapping[props.icon]}
        color={ColorMapping[props.icon]}
        size={props.size}
        animate={true}
      />
    );
  } else {
    const forecastIconMapping = {
      "01d": "☀️",
      "01n": "🌙",
      "02d": "⛅",
      "02n": "⛅",
      "03d": "☁️",
      "03n": "☁️",
      "04d": "☁️",
      "04n": "☁️",
      "09d": "🌦️",
      "09n": "🌦️",
      "10d": "🌧️",
      "10n": "🌧️",
      "11d": "⛈️",
      "11n": "⛈️",
      "13d": "🌨️",
      "13n": "🌨️",
      "50d": "🌫️",
      "50n": "🌫️",
    };
    return <p>{forecastIconMapping[props.icon]}</p>;
  }
}
