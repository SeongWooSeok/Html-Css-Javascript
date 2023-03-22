const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY='55bc30618850b501ff1f351276895262c';

navigator.geolocation.getCurrentPosition(geoOk, geoErr);

function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
}

function geoErr(){

}
