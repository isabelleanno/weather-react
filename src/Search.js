//Isabelle Anno, 6/17/2022
import React, { useState } from "react";

export default function Search() {
  //Creating a state (empty string by default) to handle user input.
  const [city, updateCity] = useState(" ");
  //Creating a state to display output
  const [output, displayOutput] = useState(" ");
  /*updateSearch is called from the "search" input 
when the value changes.It acts like an event 
listener and will fetch the new input and send it
as a parameter to the updateCity function defined
 above. */

  function UpdateSearch(event) {
    event.preventDefault();
    updateCity(event.target.value);
  }
  /*submitSearch acts like an eventlistener
on the "submit" button. On submit, it is
called and will display the temperature in 
that city and its respective emoji. Made the
temperatures randomized for fun. */

  function submitSearch(event) {
    event.preventDefault();
    let randomNo = Math.floor(Math.random() * (40 - 0 + 1) + 0);
    console.log(randomNo);
    if (randomNo <= 17) {
      displayOutput(
        <p>
          It is {randomNo} degrees in {city} ☃️
        </p>
      );
    } else if (randomNo >= 18 && randomNo <= 27) {
      displayOutput(
        <p>
          It is {randomNo} degrees in {city} ⛅
        </p>
      );
    } else {
      displayOutput(
        <p>
          It is {randomNo} degrees in {city} 🏜️
        </p>
      );
    }
  }

  //Display component
  return (
    <form onSubmit={submitSearch}>
      <input
        type="seach"
        placeholder="Enter a city name"
        onChange={UpdateSearch}
      />
      <input type="submit" value="Search" />
      <h2>{output}</h2>
    </form>
  );
}
