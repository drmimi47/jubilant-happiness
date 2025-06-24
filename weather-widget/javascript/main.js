console.log("this works");

 const API_KEY = config.WEATHER_API_KEY;

alert("hello, world!");



  function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10026&APPID=dc608cd922757b9bbf08cda5574e61c9`)
  .then(response => response.json())
  .then(data => console.log(data));
  }

  getWeatherData()