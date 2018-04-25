/* Linked List: Similar to arrays, store sequential collection of elements. Different to arrays that the elements are not placed contiguosly in memory.
** elements of the linked list are called nodes. A node consists of the item (value) itself and a reference (pointer or link) that point to the next element.
*/

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
	this.insert = function(position, element) {};

	// Removes an item from a specified position in the list
	this.removeAt = function(position) {};

	// Removes an item from the list
	this.remove = function(element) {};

	// Returns the index of the element in the list. If the element is not found, return a -1
	this.indexOf = function(element) {};
	
	// Returns true if the linked list does not contain elements. Return false if at least one element
	this.isEmpty = function() {};

	// Returns the number of elements the linekd list contains.
	this.size = function() {};

	// Output only the element values
	this.toString = function() {};
}

let list = new LinkedList();
list.append(15);
list.append(9);