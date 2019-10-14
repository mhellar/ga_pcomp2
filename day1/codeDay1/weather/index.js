var weather = require("weather-js");

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({ search: "Washington, DC", degreeType: "F" }, function(
  err,
  result
) {
  // console.log(JSON.stringify(result));

  var location = result[0].location.name;
  var temp = "is " + result[0].current.temperature + " Fahrenheit";
  console.log(location + " " + temp);
});
