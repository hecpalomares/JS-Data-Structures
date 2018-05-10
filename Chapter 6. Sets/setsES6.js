// Using the Set class part of the JavaScript API introduced at ECMAScript 2015.
let set = new Set();

set.add("a");
console.log(set.values());	// SetIterator { 'a' }
console.log(set.has("a"));	// true
console.log(set.size);			// 1
set.add("b");
set.delete("a");
console.log(set.values());	// SetIterator { 'b' }

// --- ES6 Set Methods Simulation --- //
let setA = new Set();
setA.add("a");
setA.add("b");
setA.add("c");

let setB = new Set();
setB.add("c");
setB.add("d");
setB.add("e");

// --- Union --- //
let unionAB = new Set();
for(let element of setA) unionAB.add(element);
for(let element of setB) unionAB.add(element);

console.log(unionAB.values());	// SetIterator { 'a', 'b', 'c', 'd', 'e' }

// --- Intersection --- //
let intersection = function(setA, setB) {
	let intersectionSet = new Set();
	for(let element of setA) {
		if(setB.has(element)) {
			intersectionSet.add(element);
		}
	}
	return intersectionSet;
};

let intersectionAB = intersection(setA, setB);
console.log(intersectionAB.values());	// SetIterator { 'c' }

// --- Differnce --- //
let difference = function(setA, setB) {
	let differenceSet = new Set();
	for(let element of setA) {
		if(!setB.has(element)) {
			differenceSet.add(element);
		}
	}
	return differenceSet;
};

let differenceAB = difference(setA, setB);
console.log(differenceAB.values());	// SetIterator { 'a', 'b' }