const weather_celcius = document.querySelector("#celcius");
const city = document.querySelector("#location");
const weather_img = document.querySelector("#weather_icon");

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `${data.name} /`;
      weather_celcius.innerText = `${data.main.temp}\u2103`;
      weather_img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });

  }

function onGeoError() {
    alert("지역 및 날씨 정보를 받아오지 못했습니다. 새로고침을 하면 다시 요청합니다.");
  }
  
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);