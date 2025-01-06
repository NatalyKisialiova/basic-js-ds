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

class ListNode {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.heard = null;
    this.lenght = 0;
  }

  getUnderlyingList() {
    return this.heard;
  }

  enqueue(value) {
    if (this.lenght === 0) {
      this.heard = new ListNode(value);
    } else {
      let current = this.heard;
      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
    this.lenght++;
  }

  dequeue() {
    let current = this.heard;
    this.heard = current.next;
    this.lenght--;
    return current.value;
  }
}

module.exports = {
  Queue
};
