$(document).ready(function() {
    const APIKey = "8d803f5d5886318926e7d8313f3b4b72";
    let city;
    //fetch weather data
    function getWeather(city) {
        const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
        //AJAX
    }
    // event listener to get the city variable
    $("#search-form").submit(function(event) {
        //need to add something to prevent the page refresh

        //add the city variable
        city=$("#search-input").val()

        //get data from api
        getWeather(city)
    })
})