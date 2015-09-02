

var temperature = {
    toCelsius: function(t) {
        return (t - 32)*(5/9);
    },
    toFahrenheit: function(t){
        return (t * (9/5)) + 32;
    }
};
    
var tempToday = 82;
var tempInCelsius = Math.round(temperature.toCelsius(tempToday));
var message = "Today's temperature is " + tempToday + " F which is " + tempInCelsius + " C.";

console.log(message);



