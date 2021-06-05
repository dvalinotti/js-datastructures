class StackNode {
  /**
   * @param {string} value 
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  /**
   * Set the value of the next stack node.
   * @param {StackNode} node 
   */
  setNext(node) {
    this.next = node;
  }
}

class Stack {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.front === null;
  }

  /**
   * Returns the value of the first item in the stack.
   * @returns {StackNode}
   */
  peek() {
    if (this.isEmpty()) return null;

    return this.front.value;
  }

  /**
   * 
   * @param {string} node
   */
  push(value) {
    if (value === undefined) {
      throw new Error('Stack node value must be defined');
    }

    const node = new StackNode(value);

    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.setNext(node)
    }

    this.length++;
  }

  /**
   * Remove the last value in the stack from the list;
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('Cannot pop value from empty stack');
    }

    let node = this.head;

    for (let i = 0; i < this.length - 1; i++) {
      const next = node.next;
      node = next;
    }

    node.next = null;
    this.back = node;
    length--;
  }
}