class MinHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  get max() {
    return this.heap[0];
  }

  push(value) {
    // Add value to end of heap
    this.heap.push(value);

    // Bubble up from end of heap
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    // Get result value
    var result = this.heap[0];

    // Set first element to last element
    this.heap[0] = this.heap.pop();

    // Bubble down from the root of the heap
    this.bubbleDown(0);

    return result;
  }

  remove(value) {
    let size = this.size;

    // If there is at least one item in the heap...
    if (size > 0) {
      for (let i = 0; i < size; i++) {
        // If the value is found...
        if (this.heap[i] === value) {
          // Pop the last value from the heap
          let end = this.heap.pop();

          // If the index is the last index, break out of the loop
          if (i === size - 1) break;
          
          // Otherwise, replace the removed element with the last element
          // and allow it to bubble down or up as needed
          this.heap[i] = end;
          this.bubbleUp(i);
          this.bubbleDown(i);
          break;
        }
      }
    }
  }

  bubbleUp(index) {
    let current = this.heap[index];

    while(index > 0) {
      let p = Math.floor((index - 1) / 2);
      let parent = this.heap[p];

      // If the parent is greater than the current value, everything is good.
      if (current > parent) break;

      // Otherwise, swap the parent and the current values
      [this.heap[p], this.heap[index]] = [this.heap[index], this.heap[p]];
      index = p;
    }
  }

  bubbleDown(index) {
    while(true) {
      let c = 2 * (index + 1);
      let s = c - 1;
      let child = this.heap[c], sibling = this.heap[s], current = this.heap[index];
      let swap = null;

      if (child < current) {
        swap = c;
      }

      // If the sibling is less than the current value, AND the sibling is less than the child, swap with the sibling
      if (sibling < current) {
        swap = s;
      }

      // If there's nothing to swap with, break out of the loop
      if (swap === null) break;

      // Otherwise, swap the current and the swap values
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }

  toString() {
    return this.heap.toString();
  }
}

let minHeap = new MinHeap();
[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach((value) => {
  minHeap.push(value);
});

console.log(minHeap.toString());

minHeap.pop();

console.log(minHeap.toString());

minHeap.push(0);

console.log(minHeap.toString());

minHeap.pop();

console.log(minHeap.toString());