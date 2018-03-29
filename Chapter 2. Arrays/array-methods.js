/* Joining multiple arrays */
let zero = 0;
let posNum = [1, 2, 3];
let negNum = [-1, -2, -3];

let numbers = negNum.concat(zero, posNum);

// [ -1, -2, -3, 0, 1, 2, 3 ]
// .concat method concatenate as multiple arguments are passed to the method. Returns a copy to the declared variable.

/* Iterator Functions */
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let isAllArrayEven = numbersArr.every(num => num % 2 === 0);		// false, iterate every element of the array until the return of the function is false
let isSomeArrayEven = numbersArr.some(num => num % 2 === 0);		// true, iterare every element of the array until the return of the function is true

// TIP: every() / some(): stops at the first occurance

// forEach(): Executes a provided function once for each array element.
numbersArr.forEach(num => {
	return num * 2;
});

// map(): method creates a new array with the results of calling a provided function on every element in the calling array.
let numbersDuplicated = numbersArr.map(num => num * 2);
console.log(numbersDuplicated);				// [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30 ]

// filter(): method creates a new array with all elements that pass the test implemented by the provided functio
let numbersDivisibleByThree = numbersArr.filter(num => num % 3 === 0);
console.log(numbersDivisibleByThree);	// [ 3, 6, 9, 12, 15 ]

// reduce(): method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let sumNumbersDivisibleBythree = numbersDivisibleByThree.reduce((previous, current, index) => { 
	return previous + current 
}, 0);
console.log(sumNumbersDivisibleBythree);	// 45

//for...of loop: iterates the values similar as a for loop
for(let num of numbersArr) {
	// console.log(num * 3);
}

// ES6 iterator
let iterator = numbersArr[Symbol.iterator]();	// access toe Symbol.iterator property of the array
console.log(iterator.next().value);	// 1
console.log(iterator.next().value);	// 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4

// Call individually the next() method, to retrieve the next value until it returns undefined (done: true)

// .from(): Create a new array from a existing one
let newArray = Array.from(numbers);
console.log(newArray);

// .of(): Create a new array from comma separated arguments
let numbersSeparated = Array.of(1, 1, 2, 3, 5, 8);
console.log(numbersSeparated);

// .fill(): Fill an array with the value. Great to create an array and intialize the values at the same time
let arrayOfTwos = numbersSeparated.fill(2);
console.log(arrayOfTwos);

// .sort(): Sorting elements on an array
// .reverse(): Reverse the elements of an array. Sorted lexicography, assumes all the elements are strings.
let numbersArrReversed = numbersArr.reverse();
let numDupReversedLexicalSort = numbersDuplicated.sort();

console.log(numbersArrReversed);	// [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(numDupReversedLexicalSort); // [ 10, 12, 14, 16, 18, 2, 20, 22, 24, 26, 28, 30, 4, 6, 8 ]

let numDupSorted = numDupReversedLexicalSort.sort((a, b) => { return a - b });
console.log(numDupSorted); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30 ]

/* Searching */
let randomNumbers = [12, 32, 67, 22, 45, 8, 94, 67, 72, 10, 25];

// indexOf(): returns the index for the first element that matches the argument passed
randomNumbers.indexOf(22); //  2, index position of the randomNumbers
randomNumbers.indexOf(15); // -1, element don't exist on the array

// lastIndexOf(): returns the index for the last element that matches the argument passed
randomNumbers.lastIndexOf(67);	//  7, index position of the randomNumbers
randomNumbers.lastIndexOf(2);	  // -1, element don't exist on the array

function multipleOf5(element, index, array) {
	return (element % 5 === 0) ? true : false;
}

// [ES6] find(): return the first value of the array that statifies the proposed condition. Receives a callback funciton.
randomNumbers.find(multipleOf5);				// 45

// [ES6] findIndex(): return the index of the first value that satifies the condition. Receives a callback funciton.
randomNumbers.findIndex(multipleOf5);	// 3

// [ES7] includes(): returns a boolean if it finds the element on the array
randomNumbers.includes(94);	// true
randomNumbers.includes(7); 	// false

/* Outputting the array into a string */

// toString(): output all the elements of the array into a single string
randomNumbers.toString(); // 12,32,67,22,45,8,94,67,72,10,25

// join(): sepearte the elements by a differnet separator
console.log(randomNumbers.join("-"));	// 12-32-67-22-45-8-94-67-72-10-25