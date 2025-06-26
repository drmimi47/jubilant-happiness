  let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");

getWeatherData = (zip) => {
  let API_KEY = config.WEATHER_API_KEY;
  let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=10026&APPID=dc608cd922757b9bbf08cda5574e61c9`;

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let local_weather_data = data;
        console.log(local_weather_data)
    })
  }

const getZipCode = (e) => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

btn.addEventListener("click", getZipCode);