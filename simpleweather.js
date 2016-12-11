$(document).ready(function() {
  var simpleWeather = {
    "locacity": 'Austin',
    "locacountry": 'USA',
    "woeid": '',
    "unit": 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  };
});
