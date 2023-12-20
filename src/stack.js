const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  // add an element to the end of stack
  push(element) {
    this.stack.push(element);
  }
  // remove an element from stack, if empty stack it returns -1
  pop() {
    if (this.stack.length === 0) {
      return -1;
    }
    return this.stack.pop();
  }
  // return the topmost elements in stack without revoving it. 
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack
};
