/* Stacks: ordered collection of items that follows the LIFO (Last In First Out). Addition of new items or the removal of existing itmes takes place
*	 at the same end. The end of the stack is now as 'top' and the opposite of the stack is 'base'. Newst element are near the top, oldes elements
*  near the 'base'.
*/

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
		return items.length();
	};

	// empties the stack, removes all the elements
	this.clear = function() {
		items = [];
	};

}