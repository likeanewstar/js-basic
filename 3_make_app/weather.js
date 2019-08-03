const API_KEY = '1b54b0adc3d0d84ebeae1c52577dca59';
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { // 객체의 변수 이름과 key값을 동일하게 설정하고 싶을 때, 아래와 같이 사용하면 됨.
        latitude,
        longitude
    };
    saveCoords(coordsObj);
};

function handleGeoError() {
    console.log(`can't access geo location!`)
};

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        // getWeather
    }
};

function init() {
    loadCoords();
};

init();
