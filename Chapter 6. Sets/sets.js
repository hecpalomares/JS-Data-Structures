// Set: collection of items that are unordered and consists of unique elements (cannot be repeated).

//---Implementation of Set in ES5--------//
function Set() {
	// items is an object, since objects in Javascript don't allow to have two different properties on the same key, guarantees unique elements in our set.
	let items = {};

	// return true if the set has the value
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

	// remove a value if it exist on the set
	this.remove = function(value) {
		if(this.has(value)) {
			delete items[value];
			return true;
		} else {
			return false;
		}
	};

	// removes all values from the set
	this.clear = function() {
		items = {};
	};

	this.showItems = function() {
		console.log(items);
	};
}

let set = new Set();
set.add(2);
set.add(2);
set.add(1);
set.add(3);
set.add(1);

console.log(set.showItems()); // { '1': 1, '2': 2, '3': 3 }. Objects keys appear in alphabetical order