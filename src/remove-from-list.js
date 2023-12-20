const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let list = l;
  let node = l;
  let previous;

  while (node) {
    // If exists
    if (node.value === k) {
      // If it is a head, just switch the head to the next node
      if (previous === undefined) {
        list = node.next;
        // If it is a tail, delete a link to the next node
      } else if (node.next === null) {
        previous.next = null;
        // If it is an inner of list, switch the previous node to the next node
      } else {
        previous.next = node.next;
      }
      // If does't exist, go further
    } else {
      previous = node;
    }
    node = node.next;
  }
  return list;
}

module.exports = {
  removeKFromList
};
