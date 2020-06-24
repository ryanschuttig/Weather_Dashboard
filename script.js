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

      var newDiv = $("<div>");

      if (searchInput != null) {
        $("#citydata").text(response.name + " " + date);
        newDiv.text(searchInput);
        $("nav").append(newDiv);
      }

    });
});