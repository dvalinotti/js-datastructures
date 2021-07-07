class MaxHeap {
  constructor() {
    this.heap = [];
  }

  get max() {
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }

  push(value) {
    // Add the value to the end of the heap
    this.heap.push(value);

    // Bubble up from the end of the heap
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    // Get the max value of the heap
    let result = this.heap[0];
    
    // Set the first element to the last element
    this.heap[0] = this.heap.pop();

    // Bubble down from the root
    this.bubbleDown(0);

    return result;
  }

  remove(value) {
    let length = this.heap.length;

    // If the heap is not empty...
    if (length > 0) {
      // Loop through the heap
      for (let i = 0; i < length; i++) {
        // If the value is found... 
        if (this.heap[i] === value) {
          // Remove the value from the heap
          let end = this.heap.pop();

          // If the popped element is the one we need to remove, we are done.
          if (i === length - 1) break;

          // Otherwise, we replace the removed element with the end of the heap
          // and allow it to bubble down or up as appropriate.
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

    while (index > 0) {
      let parentN = Math.floor((index - 1) / 2);
      let parent = this.heap[parentN];

      if (current <= parent) break;

      // Swap the parent and child values
      [this.heap[parentN], this.heap[index]] = [this.heap[index], this.heap[parentN]];
      index = parentN;
    }
  }

  bubbleDown(index) {
    while(true) {
      let c = (index + 1) * 2;
      let s = c - 1;
      let child = this.heap[c], sibling = this.heap[s], current = this.heap[index];
      let swap = null;

      // If the child is greater than the value at index, set swap to the child
      if (child > current) {
        swap = c;
      }

      // If the sibling is greater than the child
      // AND the sibling is less than the value at index, set swap to the sibling
      if (sibling > current && (child === null || (sibling !== null && sibling > child))) {
        swap = s;
      }

      // If there is nothing to swap, break out of the loop
      if (swap === null) break;

      // Swap the values
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }

  toString() {
    return this.heap.toString();
  }
}

let maxHeap = new MaxHeap();
[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach((value) => {
  maxHeap.push(value);
});

maxHeap.remove(2);

console.log(maxHeap.toString());

maxHeap.push(12);

console.log(maxHeap.toString());

maxHeap.remove(1);

console.log(maxHeap.toString());

maxHeap.pop();

console.log(maxHeap.toString());
