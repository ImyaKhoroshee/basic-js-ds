const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

//  FIFO - First In First Out

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  getUnderlyingList() {
    return this.head;
  }
  isEmpty() {
    return this.head === null;
  }
  enqueue(value) {

    const node = new ListNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const elementToDelete = this.head;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      this.size -= 1;
      return elementToDelete.value;
    }
    this.head = this.head.next;
    this.size -= 1;
    return elementToDelete.value;
  }
}

module.exports = {
  Queue
};
