# Weather_Dashboard

✓ User can search for weather reports by city using the openweathermap API.

✓ After searching for a city, the following information is displayed: current temperature, current humidity, windspeed, uv index, and 5 day forecast.

✓ Application uses icons to represent weather conditions.

✓ Application stores previously searched for cities in local storage and displays them to the user.

✓ Application loads last searched city forecast on page load.

✓ Repository contains quality README with description, screenshot, link to deployed application.

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast