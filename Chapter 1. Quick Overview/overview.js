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