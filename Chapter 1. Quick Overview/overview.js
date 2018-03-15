/*Objects*/

// Objects: Simple collections of name-value pairs. [key: value] pairs are usedd. Key it's an attribute of the object and the value is the attribute value.

// Constructor method
let obj = new Object();

// Literal method
let obj2 = {};

// All objects keys are set as a strings, even if they set up as a number. Values can be either strings, numbers, other objects, booleans...
let me = {
	name: "Hector",
	age: 25,
	hobbies: {
		hobby1: "Piano",
		hobby2: "Soccer",
		hobby3: "Read"
	},
	male: true
}

// In OOP (object-oriented Programming), an object is an instance of a class. A class defines the characteristics of the object.

function Book(titleParam, authorParam, pagesParam) {  
	// 'this' keyword binds to the new created instance of the object.
	this.title = titleParam;
	this.author = authorParam;
	this.pages = pagesParam;
}

// Create a new instance of the class with the 'new' keyword
let myFavoriteBook = new Book("Catcher in the Rye", "J.D Salinger", 214);

// You can access to the values with the dot notation (.property) or bracket notation (["property"]) 
console.log(myFavoriteBook.title);				// "Catcher in the Rye"
console.log(myFavoriteBook.author);				// J.D Salinger
console.log(myFavoriteBook["pages"]);			// 214	

// A class can contain functions (Prototype-based Declaration)
Book.prototype.fullInformation = function() {
	return `${this.title} written by ${this.author} is ${this.pages} pages long.`;
};

console.log(myFavoriteBook.fullInformation());

// A function declared inside the class definition (Class-based Declaration)
function Person(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;

	this.returnDogAge = function() {
		let myDogYears = (this.age / 7).toFixed(1);
		return `My dog age should be ${myDogYears} years`;
	}
}

let myself = new Person("Hector", "male", 25);

console.log(myself.returnDogAge());

// Prototype-based declaration is shared between all instances of the class, only one copy is created.
// Class-based declaration each instance have its own copy of the functions.

// Prototype method saves memory and processing costs, regarding assign functions to the class. 
// Class method declare private functions and properties only accessible to other methods inside the class.

/*ES6 Variable Declaration*/

var x = "Hello";
var x = "World";

console.log(x); // World

let y = "Hello";
// let y = "World"; Error, identifier y already declared.

// 'let' keyword makers variables to be block scoped, in contrast to 'var' that makes them function scope. They onyl live inside the code-block declared.
// It could be either an for loop, if statement, etc. 

const PI = 3.1415926;
// PI = 4;									// Error, assignament to constant variable

// const has a read-only value, cannot be redeclared. Block scoped as well, similar to let.

/*Arrow functions*/
let circleArea = r => {
	const PI = 3.1415926;			// Can re-declare PI since it is inside another function.
	const area = PI * r * r;	// Area is a formula, it is never re-declared. It can be a const
	return area.toFixed(3);		
};

console.log(circleArea(3));

// Can remove the keyword 'function' replaced by a fat arrow =>. If it is only one parameter the parenthesis () can be omitted.
// If it is in only one line of code the keyword 'return' can be ommitted.

/*Default Parameters*/
function sum(a = 1, b = 2, c = 3) {
	return `The sum of a:${a} + b:${b} + c:${c} === ${a+b+c}`;
}

console.log(sum());						// Default parameters
console.log(sum(10, 0, 15)); 	// Overriding some of the default parameters
console.log(sum(4, 5, 6));		// Overriding the all default parameters

/*Spread and Rest operators*/
// ES6 contains the spread operator, turns array into parameters
let arrayParams = [8, 2, 12];
console.log(sum.apply(undefined, arrayParams));		// ES5 method
console.log(sum(...arrayParams));									// Es6 method, spread operator (...)

// Spread operator can replace arguments using at the rest parameter to gather the rest of the elements not declared as a parameter
function restParameterFunction(a, b, ...rest) {
	let sumRestParameter = rest.reduce((a, b) => a + b, 0);
	
	console.log(`Returning (a:${a} * b:${b}) + rest:${sumRestParameter}`);
	
	return ((a * b) + sumRestParameter);
}

console.log(restParameterFunction(2, 3, 1, 2, 3, 4, 5));


function restParameterFunctionOld(a, b) {
	// from parameter 'arguments' start at the position 2
	let rest = Array.prototype.slice.call(arguments, 2);
	let sumRestParameter = rest.reduce((a, b) => a + b, 0);
	
	console.log(`Returning (a:${a} * b:${b}) + rest:${sumRestParameter}`);
	
	return ((a * b) + sumRestParameter);
}

console.log(restParameterFunctionOld(2, 3, 1, 2, 3, 4, 5));

/*Enhanced object properties*/

// Array destructuring: initializing varaibles all at once
let [j, k, l] = ["1", "2", "3"];
console.log(`j:${j}, ${k}:k, l:${l}`);		// j:1, 2:k, l:3

// Array destructuring, useful to swap values without the need to create temp variables
[j, k] = [k, j];
console.log(`j:${j}, k:${k}`);						// j:2, 1:k

// Sorting algorithms use swap variables often, this is common.

// Object property shorthand:
let objectDestrucuted = {j, k, l};
console.log(objectDestrucuted);						// { j: '2', k: '1', l: '3' }

// Method property, allows declare functions inside objects as if they were properties.
let rubiksCube = {
	solved: false,
	spinning() {
		console.log("I'm spinning!");
		return '';
	},
	sides: 6
}

console.log(rubiksCube.spinning());

/*Object-oriented programming with classes */

// Declared with keyword 'class'
class Team {

	// Parameters set with 'new' keyword are set at the constructor function
	constructor(name, players, mainColors) {
		this.name = name;
		this.players = players;
		this.mainColors = mainColors;
	}

	// Public functions usable by the Class
	getPlayers() {
		return this.players;
	}

	getName() {
		return this.name;
	}

	getMainColors() {
		return this.mainColors;
	}
}

let monterrey = new Team("Monterrey F.C", ["Dorlan", "Aviles", "Funes"], ["White", "Navy Blue"]);

console.log(monterrey.getPlayers());	// ["Dorlan", "Aviles", "Funes"]

/* Inheritance */

// Extends another class with keyword 'extends'
class NFLTeam extends Team {
	
	// Refer to constructor superclass with super(param1, param2, param3)
	constructor(name, players, mainColors, division) {
		super(name, players, mainColors);
		this.division = division;
	}

	getDivisionRivals() {
		let rivals = [];

		if(this.name === "Colts") {
			rivals = ["Texans", "Jaguars", "Titans"];
		} else if (this.name === "Cowboys") {
			rivals = ["Giants", "Redskins", "Eagles"];
		} else {
			rivals = ["Sorry no rivals found for this team"];
		}

		return rivals;
	}
}

let indyColts = new NFLTeam("Colts", ["Andrew Luck", "T.Y Hilton"], ["Navy Blue", "White"], "South AFC");
let dallasCowboys = new NFLTeam("Cowboys", ["Ezekiel Elliot", "Dak Prescott"], ["Royal Blue", "Grey"], "East NFC");

console.log(indyColts.getDivisionRivals());
console.log(dallasCowboys.getDivisionRivals());

// Note: All this classes and inheritance of Javascript at the end compiles to prototype chain

/* Getters and Setters */

class Player {
	constructor (name) {
		this._name = name;
	}

	// use keyword 'get' to expose and use
	get name() {
		return this._name;
	}

	// use keyword 'name' to expose and use
	set name(value) {
		this._name = value;
	}

	rating() {
		let rating;

		if(this._name === "Zidane") {
			rating = 10;
		} else {
			rating = 7;
		}
		return rating;
	}
}

let francePlayer = new Player("Zidane");
console.log(francePlayer._name);		// Zidane, accessing the variable directly
console.log(francePlayer.name);			// Zidane, accessing the variable through a getter
console.log(francePlayer.rating());	// 10

francePlayer.name = "Benzema";			// Modifying the variable name with a setter
console.log(francePlayer.rating());	// 7