$("button").on("click", function (event) {
  event.preventDefault();

  var searchInput = $("#citysearch").val();

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=afc59b5a12ec3abd2ca379b25eda055d";


  var today = new Date();

  var date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
      console.log(queryURL);

      console.log(response);

      var newList = $("<li>");

      $("#citydata").text(response.name + " " + date);
      newList.text(searchInput);
      newList.addClass("list-group-item");
      $("#history").prepend(newList);

      $("#temp").text("Temperature: " + Math.floor((response.main.temp * 9) / 5 - 459.67) + "ºF");
      $("#humi").text("Humidity: " + ((response.main.humidity) + "%"));
      $("#wind").text("Wind Speed: " + ((response.wind.speed) + " MPH"));

      var lat = response.coord["lat"];
      var lon = response.coord["lon"];
      getUV(lat, lon);
      fiveDay(searchInput);

    });
});
function getUV(lat, lon) {
  var uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=afc59b5a12ec3abd2ca379b25eda055d&lat=" + lat + "&lon=" + lon;

  $.ajax({
    url: uvURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response.value);
      $("#uvin").text("UV Index: " + response.value);
    });
}

function fiveDay(searchInput) {
  var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=afc59b5a12ec3abd2ca379b25eda055d";
  
  $.ajax({
    url: fiveDayForecast,
    method: "GET"
  })
  .then(function(response) {
    console.log(response);

    for (let index = 0; index < array.length; index++) {
      
    }
    
  });
}



