Weather.getCurrent("Ho Chi Minh City", function(current) {
  console.log(
    ["currently:",current.temperature(),"and",current.conditions()].join(" ")
  );
});
 
Weather.getForecast("Ho Chi Minh City", function(forecast) {
  console.log("forecast high: " + forecast.high());
  console.log("forecast low: " + forecast.low());
});
 