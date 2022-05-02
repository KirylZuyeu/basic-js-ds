const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

/**
* Solved with https://habr.com/ru/post/493474/
*/

class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head) { // if the first Node exitsts
      this.tail.next = newNode; // inserts the created node after the tail of our Queue
      this.tail = newNode; // now the created node is the last node
  } else { // if there are no nodes in the Queue
      this.head = newNode; // the created node is a head 
      this.tail = newNode // also the created node is a tail in Queue because it is single.
  }
  }

  dequeue() {
    const current = this.head; // saves the link to the head which we need to remove
    this.head = this.head.next; // moves the head link to the second Node in the Queue
    return current.value; // returns the removed Node's value
  }
}

module.exports = {
  Queue
};
