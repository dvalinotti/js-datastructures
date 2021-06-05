class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(value) {
    // Create new node
    const node = new QueueNode(value);

    // If list is empty, new node is first and last (only) value.
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {  // If not empty
      // Assign next pointer of current last node to new node
      this.last.next = node;
      // Assign queue last pointer to new node
      this.last = node;
    }

    // Increment length
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    // Get node to be dequeued and the new first node after dequeue.
    const dequeued = this.first;
    const newFirst = this.first.next;

    // If new first node is empty, then queue is going to be empty.
    if (newFirst === null) {
      this.last = null;
    }

    // Set new first node in queue
    this.first = newFirst;

    // Remove reference to next in dequeued node
    dequeued.next = null;

    // Decrement length
    this.length--;
    return dequeued;
  }
}

module.exports = Queue;