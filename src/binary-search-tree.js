const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }

  root() {
    return this.rootEl;
  }

  add(data) {
    this.rootEl = addData(this.rootEl, data);

    function addData(node, data) {
      // If there is no any node (null), add new node
      if (!node) {
        return new Node(data);
      }
      // If such node has already exists
      if (node.data === data) {
        return node;
      }
      // If new data is less than existing node (go to left)
      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        // If existing node is less than new data (move to right)
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.rootEl, data);

    function hasData(node, data) {
      // If there is no such node (null)
      if (!node) {
        return false;
      }
      // If data is found
      if (node.data === data) {
        return true;
      }
      // If new data is less than existing node (move to left)
      if (data < node.data) {
        return hasData(node.left, data);
      } else {
        // If existing node is less than new data (move to right)
        return hasData(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.rootEl, data);

    function findData(node, data) {
      // If there is no such node (null)
      if (!node) {
        return null;
      }
      // If data is found
      if (node.data === data) {
        return node;
      }
      // If new data is less than existing node (move to left)
      if (data < node.data) {
        return findData(node.left, data);
      } else {
        // If existing node is less than new data (move to right)
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootEl = removeData(this.rootEl, data);

    function removeData(node, data) {
      // If there is no node
      if (!node) {
        return null;
      }
      // If data is less that existing node
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        // If existing node is less that data 
        node.right = removeData(node.right, data);
        return node;
      } else {
        // Data is found, remove it. Check if left and right nodes are leaves (means that there are no children)
        if (!node.left && !node.right) {
          // put instead of data
          return null;
        }
        if (!node.left) {
          // If there is right child (no left child)
          // set right child instead of data
          node = node.right;
          return node;
        }

        if (!node.right) {
          // If there is left child (no right child)
          // set left child instead of data
          node = node.left;
          return node;
        }
        // If both children exist for data
        // (remember that from the right all elements are more then current (data))
        // start from the root of the right subtree till the last element
        let minimumRight = node.right;
        while (minimumRight.left) {
          // while there is element lower, move lower
          minimumRight = minimumRight.left;
        }
        // set found value to the value of the removed node
        node.data = minimumRight.data;

        // remove from the right the value with minimum value
        node.right = removeData(node.right, minimumRight.data);

        return node;
      }
    }
  }

  min() {
    // (remember that values from the left are less that the current element (data))

    if (!this.rootEl) {
      return null;
    }
    // start from root
    let node = this.rootEl;
    // Move to left
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // (remember that values from the right are more that the current element (data))
    if (!this.rootEl) {
      return null;
    }
    // start from root
    let node = this.rootEl;
    // Move to right
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

