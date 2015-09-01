/*Write	a	program,	called	"introduction.js"	which	does	the	following: */


/*1. Creates	a	new	variable	`name`,	and	sets	its	value	equal	to	a	string	containing	your	
first	and	last	name	(e.g.	Benjamin	Barber).*/
var name = "Cody Moser";

/*2. Creates	a	new	variable	`age`,	and	sets	its	value	equal	to	a	number	representing	your	
age	in	years	(e.g.	33).*/

var age = 24;

/*3. Creates	a	new	variable	`major`,	and	sets	its	value	equal	to	a	string	representing	your	
major(s)	(e.g.	Computing).*/
var major = "computing: webdesign emphasis";

/*4. Creates	a	new	variable	`classYears`,	and	sets	its	value	equal	to	an	array	containing	
the	following	four	(4)	values:	"Freshman",	"Sophomore",	"Junior",	"Senior".*/

var classYears = ["Freshman ","Sophomore ","Junior ","Senior "];

/*5. Creates	a	new	variable		`message`,	and	sets	its	value	equal	to	a	string	that	is	in	this	
form:	"Hello!	My	name	is	<NAME>.	I'm	<AGE>	years	old,	and	I	am	a	<CLASS_YEAR>	
<MAJOR>	at	Union	College."	Note	that	<CLASS_YEAR>	should	refer	to	the	correct	
array	item	representing	your	class	year.*/

var message = "Hello! My name is " + name + ". Im " + age + " years old, and I am a " + classYears[3] + major + " at Union College.";
//var test = "Hello! My name is" + name + ".";


/*6. Logs	`message`	to	the	console.

Run	“introduction.js” on	the	server	using	Node.js. Review	it’s	output	to	ensure	it	is	
functioning	correctly.
Create	an	“introduction.html” file	which	includes	“introduction.js”. View	the	Console	in	
your	browser’s	Developer	Tools	to	ensure	that	it	is	functioning	correctly. */


console.log(message);