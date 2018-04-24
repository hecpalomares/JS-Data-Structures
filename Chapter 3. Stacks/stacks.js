/* Stacks: ordered collection of items that follows the LIFO (Last In First Out). Addition of new items or the removal of existing itmes takes place
*	 at the same end. The end of the stack is now as 'top' and the opposite of the stack is 'base'. Newst element are near the top, oldes elements
*  near the 'base'.
*/

/*
Examples:
Real Life: pile of books, deck of cards
Computer Science: computer memory to store variables and method calls
*/

// ES5 Stacks
function Stack() {
	// data structure to store the items
	let items = [];

	// adding new elements to the stack, elements are piled up at the top of the stack
	this.push = function(element) {
		items.push(element);
	};

	// removing elements from the stack, elements are removed in a LIFO order, top first
	this.pop = function() {
		return items.pop();
	};

	/*  Note: push and pop methods achieve the LIFO principle (last input, first output) */

	// peeking element from top of the stack, know the last item added with out removing them from the stack
	this.peek = function() {
		return items[items.length - 1];
	};

	// returns if the stack is empty
	this.isEmpty = function() {
		return items.length === 0;
	};

	// returning the number of elements on the stack
	this.size = function() {
		return items.length;
	};

	// empties the stack, removes all the elements
	this.clear = function() {
		items = [];
	};

	// output the content of the stack on the console
	this.print = function() {
		console.log(items.toString());
	};
}

let stack = new Stack();
console.log(stack.items);			// undefined, not visible to the public
console.log(stack.isEmpty());	// true

stack.push(4);
stack.push(8);

console.log(stack.peek());		// 8

stack.push(11);

console.log(stack.size());		// 3
console.log(stack.isEmpty());	// false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());		// 2
stack.print();								// 4,8

// Stacks with ES6 Class Syntax
class StackES6 {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		this.items.pop();
	}
};

let stackES6 = new StackES6();	
console.log(stackES6.items);	// [], it's public. It doesn't allow to declare private properties since its prototype based. 

// Stacks with ES6 Class Syntax + Symbols()
let _items = Symbol();

class StackES6PlusSymbol {
	constructor() {
		this[_items] = [];
	}

	push(element) {
		this[_items].push(element);
	}

	pop() {
		this[_items].pop();
	}

	print() {
		console.log(this[_items].toString());
	}
}

let stackES6X = new StackES6PlusSymbol();
console.log(stackES6X.items);		// undefined. Provides a flase class private property, not accessible from the outside.

stackES6X.push(5);
stackES6X.push(3);

stackES6X.print();							// 5, 3

let stackES6X2 = new StackES6PlusSymbol();
console.log(stackES6X2.items);	// undefined.

stackES6X2.push(6);
stackES6X2.push(9);

stackES6X2.print();							// 6, 9

// Stacks with ES6 WeakMaps
let StackWeakMap = (function() {
	const items = new WeakMap();			// declare items variable as a WeakMap

	class Stack {
		constructor () {
			items.set(this, []);					// 'this' (reference to Stack class) as the key of the WeakMap, and the array that represent the stack as its value
		}

		push(element) {
			let stack = items.get(this);	// retrieve the value of the items by retrieving the value of the WeakMap, by passing the 'this' as the key
			stack.push(element);
		}

		pop() {
			let stack = items.get(this);
			let result = stack.pop();
			return result;
		}

		print() {
			let stack = items.get(this);
			console.log(stack.toString());
		}

		isEmpty() {
			let stack = items.get(this);
			return stack.length === 0;
		}
	}

	return Stack;	// When the constructor of the Stack function is called, return the instance of the 'Stack' class

})();

let stackWeakMap = new StackWeakMap();
console.log(stackWeakMap.items);	// undefined

stackWeakMap.push(2);
stackWeakMap.push();

stackWeakMap.print();							// 2, 7

// Stacks Examples
// Base converter algorithm

function baseConverter (decNumber, base) {
	let remainingStack = new StackWeakMap();
	let remaining;
	let baseString = '';
	let digits = '0123456789ABCDEF';

	while (decNumber > 0) {														// While the division result is not zero
		remaining = Math.floor(decNumber % base);				// Get remainder of the division (mod)
		remainingStack.push(remaining);									// Push the remainder to the stack
		decNumber = Math.floor(decNumber / base);				// Update the number that is divided by the base (2, 8, 16)
	}

	// Math.Floor is used to obtain the integer value of the division

	while (!remainingStack.isEmpty()) {								// Pop the elements from the stack until it is empty
			baseString += digits[remainingStack.pop()];		// Concante the elements that were removed from the stack into a string line
	}

	return baseString;

}

console.log(baseConverter(1233, 2));
console.log(baseConverter(1233, 8));
console.log(baseConverter(1233, 16));