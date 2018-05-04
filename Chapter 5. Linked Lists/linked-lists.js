/* Linked List: Similar to arrays, store sequential collection of elements. Different to arrays that the elements are not placed contiguosly in memory.
** elements of the linked list are called nodes. A node consists of the item (value) itself and a reference (pointer or link) that point to the next element.
*/

// Has a single pointer, pointing to the 'next' element
function LinkedList() {

	// Represents the item that we are adding the list. Contains an element (value) attribute and next attribute (pointer) containing the link to the next element.
	let Node = function(element) {
		this.element = element;
		this.next = null;					// The last node from the list always points to null as the next element
	}

	let length = 0;		// Number of items on the list
	let head = null;	// Reference of the first node

	// Adds a new item to the end of the list
	this.append = function(element) {
		let node = new Node(element);		// Create the Node, passing the value
		let current;										

		if(head === null) {							// If the head element is null, we are adding the first item. Point the head element to the node element.
			head = node;
		} else {
			current = head;

			while(current.next) {					// We reach the end of the list if the next element is 'null'
				current = current.next;			// If we reach the end of the list, link the current element to the next pointer that we are adding to the list
			}

			current.next = node;					// Get the last item and assign next node to make it link
		}

		length++;
	};

	// Inserts a new item at a specified position
	this.insert = function(position, element) {
		if(position > -1 && position < length) {	// position is valid?

			let node = new Node(element);
			let current = head;
			let previous;
			let index = 0;

			if(position === 0) {			// add on first position
				node.next = current;		// point the next of the created node element to current head
				head = node;						// point head to be the created node
			} else {									// add in another position
				while(index++ < position) {	
					previous = current;
					current = current.next;
				}
				node.next = current;		// make a link between new item (node) and current item
				previous.next = node;		// point previous.next to node
			}
			length++;
			return true;
		} else {
			return false;	// if item is out of bounds return false to indicate no item was added to the list.
		}
	};

	// Removes an item from a specified position in the list
	this.removeAt = function(position) {
		if(position > -1 && position < length) {	// position is valid
			let current = head;											// reference to the first element of the list
			let previous;
			let index = 0;

			if(position === 0) {										// point the head of the linkedlist to current.next element (removing the first element)
				head = current.next;
			} else {
				while (index++ < position) {					// iterate until we reach the desired position
					previous = current;									// reference to the element that comes before the current element
					current = current.next;							// current variable always make a reference to the current element of the list we are looping through

					// link previous with current
					previous.next = current.next;				// to remove the current element from the list, link previous.next to the current.next (element will be lost in memory)
				}
				length--;

				return current.element;
			}
		} else {
			return null;
		}
	};

	// Removes an item from the list, (reusing code)
	this.remove = function(element) {
		let index = this.indexOf(element);	// find the position of the element using the method indexOf
		return this.removeAt(index);				// removes an item from the position of the index from the previous line
	};

	// Returns the index of the element in the list. If the element is not found, return a -1
	this.indexOf = function(element) {
		let current = head;				// variable pointing to the first element of the list to help iterate
		let index = 0;

		while(current) {					// iterate through each element of the list
			if(element === current.element) {	// compare element parameter and the current element iterated
				return index;					// if they are the same, returns the position of it
			}
			index++;								// continue moving index positions
			current = current.next;	// move to the next element
		}

		return -1;
	};
	
	// Returns true if the linked list does not contain elements. Return false if at least one element
	this.isEmpty = function() {
		return length === 0;
	};

	// Returns the number of elements the linekd list contains.
	this.size = function() {
		return length;
	};

	// Output only the element values
	this.toString = function() {
		let current = head;					// variable to pointing to the first element of the list to help iterate
		let string = '';						// variable that will concatenate the element values

		while(current) {						// iterate through each element of the list
			string += "[Node=" + current.element + "]" + (current.next ? "->" : " null");		
			current = current.next;		// iterate to the next element
		} 
		return string;
	};

	this.getHead = function() {
		let current = head;
		return current.element;
	};
}

let list = new LinkedList();
list.append("Jim");
list.append("Peyton");
list.append("Andrew");
list.append("Jacoby");

console.log(list.toString());					// Node = Jim next Node = Peyton next Node = Andrew next Node = Jacoby null
console.log(list.indexOf("Andrew"));	// 2
console.log(list.indexOf("Tom")); 		// -1

list.remove("Andrew");

console.log(list.toString());					// Node = Jim next Node = Andrew next Node = Jacoby null

console.log(list.getHead());					// Jim
console.log(list.isEmpty());					// false
console.log(list.size());							// 3