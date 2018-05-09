// Set: collection of items that are unordered and consists of unique elements (cannot be repeated).

//---Implementation of Set in ES5--------//
function Set() {
	// items is an object, since objects in Javascript don't allow to have two different properties on the same key, guarantees unique elements in our set.
	let items = {};

	// return true if the Set has the value
	this.has = function(value) {
		return items.hasOwnProperty(value);
	};

	// add a value if it doesn't exist on the set
	this.add = function(value) {
		if(!this.has(value)) {
			items[value] = value;
			return true;
		} else {
			return false;
		}
	};

	// remove a value if it exist on the Set
	this.remove = function(value) {
		if(this.has(value)) {
			delete items[value];
			return true;
		} else {
			return false;
		}
	};

	// removes all values from the Set
	this.clear = function() {
		items = {};
	};

	// expose the items of the Set
	this.showItems = function() {
		return items;
	};

	// return how many items are on the Set
	this.size = function() {
		return Object.keys(items).length;
	};

	// return the values from the Set as an array
	this.values = function() {
		let values = [];
		Object.keys(items).map((item, index) => values.push(item));
		return values;
	};

	// return the values from the Set as an array
	this.sizeLegacy = function() {
		let count = 0;
		for(let key in items) {
			if(items.hasOwnProperty(key)){
				count++;
			}
		}
		return count;
	};

	// return the values from the Set as an array, for legacy code
	this.valuesLegacy = function() {
		let values = [];
		for(let key in items) {
			if(items.hasOwnProperty(key)) {
				values.push(items[key]);
			}
		}
		return values;
	}

	// union of Sets: given two Sets, this returns a new Set with the elements from both given Sets
	this.union = function(otherSet) {
		let unionSet = new Set();										// new Set instance that will return the union of both Sets
		let values = this.values();

		for(let i = 0; i < values.length ; i++) {		// get all values from the first Set (current instance of the Set)
			unionSet.add(values[i]);
		}

		values = otherSet.values();									// get all values from the second Set
		for(let i = 0; i < values.length ; i++) {
			unionSet.add(values[i]);
		}

		return unionSet;
	};

	// intersection of Sets: given two Sets, this returns a new Set with the elements that exists in both Sets
	this.intersection = function(otherSet) {
		let intersectionSet = new Set();
		let values = this.values();									// new Set instance that will return the intersection of both Sets

		for(let i = 0; i < values.length; i++) {		// iterate through all the values of the current instance of the Set class
			if(otherSet.has(values[i])) {							// if the value exists in the otherSet instance
				intersectionSet.add(values[i]);					// add the value to the intersection instance
			}
		}

		return intersectionSet;
	}
}

// --- Create a Set --- //

let set = new Set();

set.add("a");
set.add("b");
set.add("a");
set.add("c");
set.add("b");

console.log(set.showItems()); // { a: 'a', b: 'b', c: 'c' }. Objects keys appear in alphabetical order
console.log(set.size());			// 3
console.log(set.values());		// [ 'a', 'b', 'c' ]. Return only the values as an array

set.remove("b");
console.log(set.values());		// [ 'a', 'c' ]

// --- Set Methods --- //

let setA = new Set();
setA.add("a");
setA.add("b");
setA.add("e");

let setB = new Set();
setB.add("b");
setB.add("c");
setB.add("e");

// --- Union --- //
let unionAB = setA.union(setB);
console.log(unionAB.values());	// [ 'a', 'b', 'e', 'c' ]

// --- Intersection --- //
let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());	// [ 'b', 'e' ]