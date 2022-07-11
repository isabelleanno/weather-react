import React from "react";

export default function Day(props) {
  //Creating day and month arrays
  console.log(props);
  let daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //Creating the variables I will want to display
  let currentDay = daysArray[props.date.getDay()];

  //Display output
  return <h6 className="m-0">{currentDay}</h6>;
}
