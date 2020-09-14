const COORDS = 'coords';
const weather = document.querySelector(".js-weather")
const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

const getWeather = (lat,lng) => {
    fetch(
       // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}` 
    ). then(function(response) {
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    })



const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
} // 자바스크립트에서 키와 값을 같게 하고 싶으면 저렇게 latitude, longitude하나씩만 써도 된다..


const handleGeoError = () => {
    console.log('cant call geo operation')
}
const askForCoords = () => {
    //함수를 불러오는 코드
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

const loadCoords = () => {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null || loadedCords === 'undefined') {
        askForCoords();
    }
     else {
         const parseCoords = JSON.parse(loadedCords)
         getWeather(parseCoords.latitude, parseCoords.longitude)
         //getWeather
     }
}

const initWeather = () => {
    loadCoords();
}

initWeather();