// 0. URL info
const requestURL = 'https://api.thecatapi.com/v1/images/search?size=full';

// 1. axios
const axios_img = axios.get('https://api.thecatapi.com/v1/images/search?size=full')
    .then(response => response.data)
    .then(result => {
        console.log(result[0].url);
        const img_axios = document.getElementById("mycat_img_axios");
        img_axios.src = result[0].url;
    }
    ).catch((error) => {
        console.log(error);
    })

// 2. fetch
const fetch_img = fetch(requestURL)
    .then(response => response.json())
    .then(result => {
        const img_fetch = document.getElementById("mycat_img_fetch");
        console.log(result[0].url);
        img_fetch.src = result[0].url;
    })
    .catch((error) => {
        console.log(error);
    })

// 3. XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.onload = () => {
    const result = xhr.response;
    const img_xml = document.getElementById("mycat_img_xml");
    console.log(result[0].url);
    img_xml.src = result[0].url;
}
xhr.send();
