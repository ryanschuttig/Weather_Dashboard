startPage();
$("button").on("click", function (event) {
  event.preventDefault();

  var searchInput = $("#citysearch").val();

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=afc59b5a12ec3abd2ca379b25eda055d";

  // Puts current date on page
  var today = new Date();

  var date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
      console.log(queryURL);
      window.localStorage.setItem("citysearch", (response.name));
      console.log(response);
      // Creates a list of cities that have been searched
      var newList = $("<li>");

      $("#citydata").text(response.name + " " + date);
      newList.text(searchInput);
      newList.addClass("list-group-item");
      $("#history").prepend(newList);
      // Puts API data on page with required data pulled
      $("#temp").text("Temperature: " + Math.floor((response.main.temp * 9) / 5 - 459.67) + "ºF");
      $("#humi").text("Humidity: " + ((response.main.humidity) + "%"));
      $("#wind").text("Wind Speed: " + ((response.wind.speed) + " MPH"));

      var lat = response.coord["lat"];
      var lon = response.coord["lon"];
      getUV(lat, lon);
      fiveDay(searchInput);

    });
});
// API to find UV Index
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
// API to put 5-day forecast on page
function fiveDay(searchInput) {
  var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=afc59b5a12ec3abd2ca379b25eda055d";

  $.ajax({
    url: fiveDayForecast,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      // Loop that pulls data eight times a day, every three hours
      for (let index = 4; index < response.list.length; index += 8) {
        var column = $("<div>");
        column.addClass("col bg-primary");
        column.text(response.list[index].main.temp + " " + (response.list[index].main.humidity) + " " + (response.list[index].dt_txt));

        console.log(response.list[index].main.temp);
        console.log(response.list[index].main.humidity);
        console.log(response.list[index].dt_txt);

        $("#forecastrow").append(column);

      }

    });
}

function startPage() {
  var cityStore = window.localStorage.getItem("citysearch");
  console.log(cityStore);

  var newList = $("<li>");
  newList.text(cityStore);
  newList.addClass("list-group-item");
  $("#history").prepend(newList);

}



