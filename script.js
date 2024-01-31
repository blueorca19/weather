const API_KEY = '2bf015ef1237d52f3217b06ca2dd5db7'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

const input = document.getElementById('locationInput');
const button = document.getElementById('getWeatherBtn');
const info = document.getElementById('weatherContainer');

button.onclick = () => {
    const cityName = input.value.trim();
    if(cityName){
        fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(weather => {
                if (weather.name && weather.main && weather.main.temp) {
                    showWeatherInfo(cityName, weather.main.temp, weather.wind.speed, weather.weather[0].description);
                } else {
                    console.error('Error', weather);
                }
            })
            .catch(error => {
                console.error('Error -incorrect request', error);
            });
    }
};

function showWeatherInfo(cityName, temperature, windSpeed, weatherDescription) {
    alert(`Weather Info:
        Name: ${cityName}
        Temperature: ${temperature}°C
        Wind Speed: ${windSpeed} m/s
        Description: ${weatherDescription}
    `);
}