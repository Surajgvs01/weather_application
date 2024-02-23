let search = document.querySelector("#search");
let clouds = document.querySelector(".clouds");
let searchCity = document.querySelector("#City");
let unit = document.querySelector(".unit");
const key = "642a5a8cc9df019dd9c4d860d7651dd4";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var uni = "C";
async function getdata(city) {
  console.log(uni);
  if (city === "") {
    response = await fetch(url + "sumerpur,uttar,pradesh" + `&APPID=${key}`);
  } else {
    response = await fetch(url + city + `&APPID=${key}`);
  }
  let data = await response.json();
  console.log(data);
  document.querySelector("#hum").innerHTML = data.main.humidity + "%";
  document.querySelector("#wind").innerHTML = data.wind.speed + "Km/hr";
  document.querySelector(".temprature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  // document.querySelector("#NNW-force").innerHTML=
  document.querySelector("#visibility").innerHTML = data.visibility/100 + " %";
  document.querySelector("#pressure").innerHTML = data.main.pressure + " hPa";
  document.querySelector("#felllike").innerHTML =
    Math.round(data.main.feels_like) + "°C";
  console.log(city);
  console.log(data.weather[0].main);
  console.log(typeof data.weather[0].main);
  if (data.weather[0].description == "clear") {
    clouds.src = "clear.png";
  } else if (data.weather[0].description == "clouds") {
    clouds.src = "clear.png";
  } else if (data.weather[0].description == "drizzle") {
    clouds.src = "drizzle.png";
  } else if (data.weather[0].description == "rain") {
    clouds.src = "rain.png";
  } else if (data.weather[0].description == "snow") {
    clouds.src = "snow.png";
  } else if (data.weather[0].description == "mist") {
    clouds.src = "mist.png";
  }
  console.log(data.weather[0].description)
}
getdata("");
search.addEventListener("click", () => {
  getdata(searchCity.value.split(" ").join(","));
});
// unit.addEventListener("dblclick", () => {
//   if (uni === "C") {
//     unit.innerHTML = "F";
//     uni = "C";
//     getdata("");
//   } else {
//     unit.innerHTML = "C";
//     uni = "F";
//     getdata("");
//   }
// });
