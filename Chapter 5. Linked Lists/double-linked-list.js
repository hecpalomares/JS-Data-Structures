// Has two pointers, pointing to the 'next' element and the 'prev' element
function DoubleLinkedList() {
	let Node = function(element) {
		this.element = element;
		this.next = null;
		this.prev = null;		// NEW
	};

	let length = 0;
	let head = null;
	let tail = null;			// NEW

	// insert a new element at any position
	this.insert = function(position, element) {
		if(position >= 0 && position <= length) {
			let node = new Node(element);
			let current = head;
			let previous;
			let index = 0;

			if(position === 0) {			// add on first position
				if(!head) {								// head is null, the list is empty
					head = node;								// move head of DLL to node
					tail = node;								// move tail of DLL to node
				} else {									// head is not null, the list is not empty
					node.next = current;				// node.next (recently created node), points to the current (head line 175)
					current.prev = node;				// current.prev, points to the node(recently created node) instead of null
					head = node;								// move the head of the DLL to (recently created node)
				}
			} else if(position === length) {		// add on last position
					current = tail;										// current element reference to the last element (tail)
					current.next = node;							// current.next (currentyl pointing to null) now points to the recently created node
					node.prev = current;							// node.prev points to the current node (tail)
					tail = node;											// move the tail of the DLL to (recently created node)
			} else {
				while(index++ < position) {				// inserting a new element in the middle of the list, iterate the list until we reach the position
					previous = current;							// previous points to its current node
					current = current.next;					// current points to its next node
				}
				node.next = current;							// node.next points to the current node
				previous.next = node;							// previous.next points to the node(recently created node)
				current.prev = node;							// current.prev now points to the node(recently created node)
				node.prev = previous							// node.prev now points to the previous node
			}
			length++;

			return true;
		} else {
			return false
		}
	}

	// remove element from any position
	this.removeAt = function(position) {
		if(position > -1 && position < length) {
			let current = head;
			let previous;
			let index = 0;
		
			if(position === 0) {		// removing first item
				head = current.next;

				if(length === 1) {		// only one item, update tail
					tail = null;
				} else {
					head.prev = null;
				}
			} else if (position === length - 1) {	// remove last item
				current = tail;				// point to the tail
				tail = current.prev;	// move the tail to current.prev
				tail.next = null;
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
				current.next.prev = previous;
			}
			length--;
			return current.element;
		} else {
			return null;
		}
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

}

let dList = new DoubleLinkedList();
dList.insert(0, "Jim");
dList.insert(1, "Peyton");
dList.insert(2, "Andrew");

console.log(dList.toString());	// [Node=Jim]->[Node=Peyton]->[Node=Andrew] null

dList.removeAt(1);

console.log(dList.toString());	// [Node=Jim]->[Node=Andrew] null