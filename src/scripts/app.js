import '../styles/appStyles.scss';
let getWeather = (lat, lon) => {
    let apiURI = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=517b865d480e22ea0242aff883db6260";

    $.ajax({
        url: apiURI,
        dataType: "json",
        type: "GET",
        async: "false",
        success: function (resp) {

            console.log(resp);
            if (resp.name) {
                $("#city-text").html(resp.name + ", " + resp.sys.country);
            }
            if (resp.wind) {
                $("#wind-text").html(resp.wind.speed + " m/s");
            }
            if (resp.clouds) {
                $("#clouds-text").html(resp.clouds.all + " %");
            }
            if (resp.main) {
                let cels = (resp.main.temp - 273.15);
                $("#temp-text").html(cels.toFixed(0) + " C&deg");
                $("#humidity-text").html(resp.main.humidity + " %");
                $("#pressure-text").html(resp.main.pressure + " hPa");
            }
            if (resp.weather) {
                let imgURL = "http://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
                $("#weatherImg").attr("src", imgURL);
                $("#weather-text").html(resp.weather[0].description);
            }
        },
        error: function (resp) {
            alert("Error: " + e);
            clearInterval(updateinter);
        }
    });
};

let getLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeather(position.coords.latitude, position.coords.longitude);
        })
    } else {
        alert("geolocation not available" + e);
        clearInterval(updateinter);
    }
};

getLocation();