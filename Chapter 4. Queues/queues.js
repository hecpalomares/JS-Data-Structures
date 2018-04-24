/* Queues: ordered collection of items that follows the LIFO (First In First Out). The addition of new elements in a queue is at the tail. The removal is at the front. */

/*
Examples:
Real Life: Movie ticket line
Computer Science: Printing line
*/

// ES5 Queue
function Queue () {
	let items = [];

	// adding new elements to the queue, we can only add items to the end of the queue
	this.enqueue = function(element) {
		items.push(element);
	};

	// remove items at the start of the queue
	this.dequeue = function() {
		return items.shift();
	};

	/* Note: enqueue and dequeue methods achieve the FIFO principle (first input, first output) */

	// get element from the front of the queue
	this.front = function() {
		return items[0];
	};

	// verify the queue is empty
	this.isEmpty = function() {
		return items.length === 0;
	};

	// return the length of the queue
	this.size = function() {
		return items.length;
	};

	// print elements of the queue
	this.print = function() {
		console.log(items.toString());
	};

}

// Using Queue class
let queue = new Queue();
console.log(queue.isEmpty());	// true

queue.enqueue("Andrew");
queue.enqueue("Berenice");
queue.enqueue("Camila");

queue.print();								// Andrew,Berenice,Camila

console.log(queue.size()); 		// 3
console.log(queue.isEmpty()); // false

queue.dequeue();							// Andrew got dequeued
queue.dequeue();							// Berenice got dequeued

queue.print();								// Camila still on the queue

// Queue with ES6 Class Syntax

let QueueES6 = (function() {
	const items = new WeakMap();

	class Queue {
		constructor() {
			items.set(this, []);
		}

		enqueue(element) {
			let queue = items.get(this);
			queue.push(element);
		}

		dequeue() {
			let queue = items.get(this);
			let result = queue.shift();
			return result;
		}

		print() {
			let queue = items.get(this);
			console.log(queue.toString());
		}

	}

	return Queue;

})();

let queueES6 = new QueueES6();

queueES6.enqueue("David");
queueES6.enqueue("Ernest");
queueES6.enqueue("Fabiola");

queueES6.print(); 	// David,Ernest,Fabiola

queueES6.dequeue();	// David out
queueES6.dequeue();	// Enrest out

queueES6.print();		// Fabiola still on queue

// Priority Queue
function PriorityQueue() {
	let items = [];

	// queue any type of element, with a priority as a number. The lower the number the higher the priority (min priority queue).
	function QueueElement (element, priority) {
		this.element = element;
		this.priority = priority;
	};

	this.enqueue = function(element, priority) {
		let queueElement = new QueueElement(element, priority);

		let added = false;

		for (let i = 0; i < items.length; i++) {
			if(queueElement.priority < items[i].priority) {		// Compare the newest element created with the rest of the queue
				items.splice(i, 0, queueElement);								// Insert the new element one position before
				added = true;	
				break;																					// Stop iterating the queue
			}
		}

		if(!added) {
			items.push(queueElement);													// if the queue is empty or the element has a lower priority just add as the last element
		}
	};

	this.print = function() {
		items.map(item => console.log(`${item.element} - ${item.priority}`));
	};
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Alice", 2);
priorityQueue.enqueue("Bob", 1);
priorityQueue.enqueue("Camila", 1);

priorityQueue.print();	// Bob - 1, Camila - 1, Alice - 2

// Circular Queue as a Hot Potato Game implementation
function hotPotato (nameList) {
	let queue = new Queue();																					// Declare a new queue
	let num = Math.floor(Math.random() * (nameList.length - 1)) + 1;	// Obtain a random number
	let eliminated = '';

	nameList.map(name => queue.enqueue(name));

	while(queue.size() > 1) {
		for(let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());																// Remove an item from the beginning of the queue and add it to the end
		}
		eliminated = queue.dequeue();																		// Once we reach the number the person that has the hot potato is eliminated (removed from queue line)
		console.log(`${eliminated} was eliminated from the game`);
	}

	return queue.dequeue();																						// Return when only only one person is left
}

let names = ["Alice", "Bob", "Camila", "David", "Elliot"];
let winner = hotPotato(names);
console.log(`The winner is: ${winner}`);