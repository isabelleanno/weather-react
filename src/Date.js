import React from "react";

export default function Getdate(props) {
  //Creating day and month arrays
  let daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Creating the variables I will want to display
  let currentDay = daysArray[props.date.getDay()];
  let currentMonth = monthsArray[props.date.getMonth()];
  let year = props.date.getFullYear();
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  let time = `${hour}:${minute}`;
  //Make an if statement for when minutes is less than 10 so it doesn't display weird times like 5:9- it'll say 5:09.
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 12) {
    time = `${time} AM`;
  }
  //Display output
  return (
    <div>
      <h6 className="m-0">
        It is {currentDay}, {currentMonth} 31, {year}{" "}
      </h6>
      <p className="m-0">at {time}.</p>
    </div>
  );
}
