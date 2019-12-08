//Feature #1 - In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
let showDate = document.querySelector("h3");

let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

showDate.innerHTML = `${day} ${hours}:${minutes}`;

//Feature #2 - Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
function signUp(event) {
  event.preventDefault();
  let city = document.querySelector("#text-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${city.value}`;
}

let signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("click", signUp);

//Bonus

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 50;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 21;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

//bonus weather exercise
function showTemperature(response) {
  let h4 = document.querySelector("h4");
  let temperature = Math.round(response.data.main.temp);
  console.log(response.data.main.temp);

  h4.innerHTML = `${temperature}º Degrees`;
}

function currentPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let latitude = Math.round(position.coords.latitude);
  let longitude = Math.round(position.coords.longitude);

  let apiKey = "26f707e504a3173f7ff66b88f084e8a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(currentPosition);
