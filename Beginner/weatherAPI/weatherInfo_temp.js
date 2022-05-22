const API_KEY = "0be87df02cd14b1d08489cd0372b5b0e";
const latitude = 37;
const longitude = 127;
const requestURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY;
axios.get(requestURL)
    .then(response => response.data)
    .then(data => {
        console.log(data);
        console.log(data.main);
        const weatherData = document.getElementById("weatherData");
        weatherData.innerHTML = "온도: " + data.main.temp + "K" +
                                "<br>습도: " + data.main.humidity + "%";
    }
    ).catch((e) => {
        console.log(e);
    })

async function getWeatherInfo(lat, lon){
    const API_KEY = "0be87df02cd14b1d08489cd0372b5b0e";
    const requestURL2 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;
    axios.get(requestURL2)
        .then(response => response.data)
        .then(data => {
            console.log(data);
            console.log(data.main);
            const weatherData = document.getElementById("weatherData");
            weatherData.innerHTML = "온도: " + data.main.temp + "K" +
                                    "<br>습도: " + data.main.humidity + "%";
        }
        ).catch((e) => {
            console.log(e);
        })
}

getWeatherInfo(20, 100);

/* 실습 테스트 */
async function getWeatherInfo_City(cityName){
    const API_KEY = "0be87df02cd14b1d08489cd0372b5b0e";
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + API_KEY;
    axios.get(requestURL)
        .then(response => response.data)
        .then(data => {
            console.log(data);
            console.log(data.main);
            const weatherData = document.getElementById("weatherData");
            weatherData.innerHTML = "온도: " + data.main.temp + "K" +
                                    "<br>습도: " + data.main.humidity + "%";
        }
        ).catch((e) => {
            console.log(e);
        })
}

/* 위도와 경도값을 prompt로 입력받을 시 */
async function getWeatherInfo(lat, lon){
    const API_KEY = "0be87df02cd14b1d08489cd0372b5b0e";
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;
    axios.get(requestURL)
        .then(response => response.data)
        .then(data => {
            console.log(data);
            console.log(data.main);
            const weatherData = document.getElementById("weatherData");
            weatherData.innerHTML = "위도: " + lat + "°, " + "경도: " + lon + "°" +
                                    "<br>국가: " + data.sys.country +
                                    "<br>도시명: " + data.name +
                                    "<br>온도: " + Math.round(data.main.temp - 273.15).toFixed(1) + "℃" +
                                    "<br>습도: " + data.main.humidity + "%" +
                                    "<br>날씨상태: " + data.weather[0].description;
        }
        ).catch((e) => {
            console.log(e);
        })
}

// 1. 위도와 경도 값을 입력받을 시
//const lat = prompt("위도를 입력하세요: ");
//const lon = prompt("경도를 입력하세요: ");
//getWeatherInfo(lat, lon);