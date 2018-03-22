/*	Array: An array is a data structure that stores value sequentally of the same data-type. Although JavaScript allows to create arrays
*		with values with different data-types, it is a best practice to don't assume so (most languagues don't have this capability).
*/

// Create an array
let months = new Array("January", "February", "March");		// combining new keyword + Array keyword
let days = ["Monday", "Tuesday", "Wednesday"];						// [] empty brackets literal

// Accessing elements and iterating an array
for (let i = 0; i<months.length; i++) {
	// console.log(months[i]);		// Loop the array and by passing the index position, access the array
}

// Adding elements at the last position
months[months.length] = "April";	// Reference to the lastest free position
days.push("Thursday");						// Push method, push an element to the end of the array

// Insert an element in the first position
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Option A: Shift all elements to one right position to make space. Assign the new value to the first position index = 0;

for (let i = numbers.length; i >= 0; i--) {
	numbers[i] = numbers[i-1]; 
}
numbers[0] = 0;

// Option B: unshift method: inserts the values passed in the methods arguments at the start of the array. Add the values from right to left.
numbers.unshift(-1);
numbers.unshift(-4, -3, -2);
console.log(numbers);		// [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Removing elements

numbers.pop();		// Remove from the last position
numbers.shift();	// Remove from the first position

console.log(numbers);	// [ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8 ]. Removed -4 and 9

// Structure Tip!
// push and pop methods allow to emulate a basic 'stack' data strucuture. (LIFO) Last Input - First Output
// unshift and shift methods allow to emulate a basic 'queue' data strucuture. (FIFO) First Input - First Output

// Adding and Removing elemtns from a specific position

//splice method: splice(indexStart, numberElementsToRemove, elementsToAddSeparatedByComma)

// Remove
numbers.splice(5, 2); 			// Starting from index 5, remove the next 2 elements
console.log(numbers);				// [ -3, -2, -1, 0, 1, 4, 5, 6, 7, 8 ]

// Add
numbers.splice(5, 0, 2, 3);	// Starting from index 5, remove 0 elements, add 2, 3 elements
console.log(numbers);				// [ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8 ]