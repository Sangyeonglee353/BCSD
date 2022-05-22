// 1. 위도와 경도를 html에서 입력받을 시
async function getWeatherInfo_Input(){
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const API_KEY = "0be87df02cd14b1d08489cd0372b5b0e";
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;
    const weatherData = document.getElementById("weatherData");
    axios.get(requestURL)
        .then(response => response.data)
        .then(data => {
            console.log(data);
            console.log(data.main);
            weatherData.innerHTML = "국가: " + data.sys.country +
                                    "<br>도시명: " + data.name +
                                    "<br>온도: " + Math.round(data.main.temp - 273.15).toFixed(1) + "℃" +
                                    "<br>습도: " + data.main.humidity + "%" +
                                    "<br>날씨상태: " + data.weather[0].description;
        }
        ).catch((e) => {
            console.log(e);
            weatherData.innerHTML = "<span style='text-align:center;'>\
                                    <b>위도</b>와 <b>경도</b>값을 확인해주세요!</span>";
        })
}