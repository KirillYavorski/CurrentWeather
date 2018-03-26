// import '../styles/appStyles.scss';
// function getWeather(lat, lon) {
//     let apiURI = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=517b865d480e22ea0242aff883db6260";
//     $.ajax({
//         url: apiURI,
//         dataType: "json",
//         type: "GET",
//         async: "false",
//         success: function(resp){}
//     })
// }

function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getWeather(position.coords.latitude, position.coords.longitude);
        })
    } else {
        alert("geolocation not available" + e);
        clearInterval(updateinter);
    }
}
let i = 0;
let updateinter = setInterval(function(){
    console.log("iteration# " + i++);
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getWeather(position.coords.latitude, position.coords.longitude);
        })
    } else {
        alert("geolocation not available" + e);
    }
}, 300000);


getLocation();
