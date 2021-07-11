const getParentIndex = (index) => (index - 1) / 2;

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  get isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * @param {string} value
   * @param {number} priority
   */
  push(value, priority) {
    let qElement = { value, priority };
    this.queue.push(qElement);
    let contain = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (qElement.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.queue.push(qElement);
    }
  }

  /**
   * @returns {{ value: *, priority: * }}
   */
  pop() {
    if (this.isEmpty) {
      return;
    }
    let qElement = this.queue.shift();
    return qElement;
  }

  peek() {
    if (this.isEmpty) {
      return;
    }
    return this.queue[0];
  }
}

module.exports = PriorityQueue;