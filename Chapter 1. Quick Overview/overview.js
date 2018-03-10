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