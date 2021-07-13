import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleResponse(response) {
        alert(
            `The weather in ${response.data.name} is ${response.data.main.temp}°C`
        );
}
let apiKey = "66decd6fe52d82f120eb1be8f6e6d5d8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
return<h1>Hello from weather</h1>;
}