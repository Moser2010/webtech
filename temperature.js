//Create	a	file	called	"temperature.js",	which	does	the	following:

/*a. Creates	a	new	variable	`Temperature`,	which	is	an	object	with	two	properties:
– toFahrenheit:	A	function	which	takes	one	argument:	`Celsius`	(a	number),	
calculates	the	equivalent	value	in	Fahrenheit,	and	returns	the	Fahrenheit	value.
– toCelsius:	A	function	which	takes	one	argument:	`Fahrenheit`	(a	number),	
calculates	the	equivalent	value	in	Celsius,	and	returns	the	Celsius	value.
The	formula	for	converting	Celsius	to	Fahrenheit	is:
		F	=	C	×	(⁹⁄₅)	+	32
The	reverse	of	that	is:
		C	=	(F	- 32)	×	(⁵⁄₉)*/

var temperature = {
    toCelsius: function(t) {
        return (t - 32)*(5/9);
    },
    toFahrenheit: function(t){
        return (t * (9/5)) + 32;
    }
};
    

/*

function tester(t){
    return t;
}
tester(5);

var tester2 = function(t){
    return t;
};
tester2(5);

(function tester3(t){
    return t;
});
*/

/*b. Creates	a	new	variable	`tempToday`,	and	sets	the	value	to	82.	This	is	today's	
temperature	in	Fahrenheit.*/

var tempToday = 82;

/*c. Creates	a	new	variable	`tempInCelsius`,	and	sets	its	value	equal	to	the	Celsius	
equivalent,	rounded	to	the	nearest	whole	number.	
The	Celsius	equivalent	should	be	calculated	by	calling	the	`toFahrenheit`	function	
property	on	`Temperature`,	passing	it	`tempToday`.	Round	the	result	by	using	the	
`Math.round()`	function.*/

var tempInCelsius = Math.round(temperature.toFahrenheit(tempToday));
/*d. Creates	a	new	variabe, `message`,	and	sets	its	value	equal	to	a	string	that	is	in	this	
form:	
“Today's	temperature	is	<tempToday>°F,	which	is	<tempInCelsius>°C.”*/

var message = "Today's temperature is " + tempToday + " F which is " + tempInCelsius + " C.";

//e. Logs	`message`	to	the	console.
console.log(message);



