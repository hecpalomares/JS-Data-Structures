/* Join multiple arrays */
let zero = 0;
let posNum = [1, 2, 3];
let negNum = [-1, -2, -3];

let numbers = negNum.concat(zero, posNum);

// [ -1, -2, -3, 0, 1, 2, 3 ]
// .concat method concatenate as multiple arguments are passed to the method. Returns a copy to the declared variable.

/*Iterator Functions*/
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

// new ES6 iterator
let iterator = numbersArr[Symbol.iterator]();	// access toe Symbol.iterator property of the array
console.log(iterator.next().value);	// 1
console.log(iterator.next().value);	// 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4

// Call individually the next() method, to retrieve the next value until it returns undefined (done: true).