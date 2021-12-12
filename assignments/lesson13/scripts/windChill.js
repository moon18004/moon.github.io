
const apiWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0b631fd8b3c62ec024dcf7737ccf66cf&units=imperial';

fetch(apiWeatherURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            //console.log(currentWeather);

            let currentTemp = currentWeather.main.temp;
            let windSpeed = currentWeather.wind.speed;
            let windChill;

            if (currentTemp < 50 && windSpeed > 3) {
                windChill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * currentTemp * Math.pow(windSpeed, .16));
            }
            document.getElementById("currentTemp").innerHTML = currentTemp + '&deg;';
            document.getElementById("windSpeed").innerHTML = windSpeed + ' MPH';


            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;';
            }
        }
    );
    const apiKey = "83c8bac9c65d0a5a7bfe57cfe98d6486";
let cityID = document.getElementById("cityID").value;
const unit = "imperial";
const apiweatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=0b631fd8b3c62ec024dcf7737ccf66cf`;
fetch(apiweatherURL)
    .then((response) => response.json())
    .then((currentWeather) => {
        let currentTemp = currentWeather.main.temp;
        let windSpeed = currentWeather.wind.speed;
        let humidity = currentWeather.main.humidity;
        let currentDesc = currentWeather.weather[0].main;
        let windChill = 0;
        let high = currentWeather.main.temp_max;
        if (currentTemp < 50 && windSpeed > 3) {
            windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
        }
        document.getElementById("currentTemp").innerHTML = Math.round(currentTemp) + '&deg;F';
        document.getElementById("currentDesc").innerHTML = currentDesc;
        document.getElementById("windSpeed").innerHTML = windSpeed + ' mph';
        document.getElementById("humidity").innerHTML = humidity + '%';
        document.getElementById("high").innerHTML = Math.round(high) + '&deg;F';
        if (windChill == 0) {
            document.getElementById("windChill").innerHTML = 'N/A'
        } else {
            document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;F';
        }
    });