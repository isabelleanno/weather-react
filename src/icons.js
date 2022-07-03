//I know this is ugly code right now, I will fix it later. ;)

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

export default function icons(props) {
  const element = (
    <FontAwesomeIcon icon={faCloudBolt} className="font-awesome" />
  );
  const LIGHTGRAY = "rgb(161, 173, 194)";
  const RAINGRAY = "rgb(110, 131, 168)";
  const SUNSHINE = "rgb(230, 187, 67)";
  const MOON = "rgb(17, 4, 156)";

  const icon = props.icon;
  const main = props.main;

  if (main === "Thunderstorm") {
    return element;
  } else if (main === "Drizzle") {
    return (
      <ReactAnimatedWeather
        icon={"SLEET"}
        color={"BLUEGRAY"}
        size={75}
        animate={true}
      />
    );
  } else if (main === "Rain") {
    return (
      <ReactAnimatedWeather
        icon={"RAIN"}
        color={RAINGRAY}
        size={75}
        animate={true}
      />
    );
  } else if (main === "Snow") {
    return (
      <ReactAnimatedWeather
        icon={"SNOW"}
        color={LIGHTGRAY}
        size={75}
        animate={true}
      />
    );
  } else if (icon === "50d") {
    return (
      <ReactAnimatedWeather
        icon={"FOG"}
        color={RAINGRAY}
        size={75}
        animate={true}
      />
    );
  } else if (icon === "01d") {
    return (
      <ReactAnimatedWeather
        icon={"CLEAR_DAY"}
        color={SUNSHINE}
        size={75}
        animate={true}
      />
    );
  } else if (icon === "01n") {
    return (
      <ReactAnimatedWeather
        icon={"CLEAR_NIGHT"}
        color={MOON}
        size={75}
        animate={true}
      />
    );
  } else if (icon === "04d") {
    return (
      <ReactAnimatedWeather
        icon={"PARTLY_CLOUDY_DAY"}
        color={SUNSHINE}
        size={75}
        animate={true}
      />
    );
  } else if (icon === "04n") {
    return (
      <ReactAnimatedWeather
        icon={"PARTLY_CLOUDY_NIGHT"}
        color={MOON}
        size={75}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        className="colorTest"
        icon={"CLOUDY"}
        color={LIGHTGRAY}
        size={75}
        animate={true}
      />
    );
  }
}
