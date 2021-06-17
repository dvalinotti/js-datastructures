---
title: Heap
description: 'A special Tree-based data structure in which the tree is a complete binary tree.'
category: heap
---

There are two kinds of Heap implementations:

1. Min Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
2. Max Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

**Examples:**

![Heaps](/heap.jpeg)

*Heap as an Array*

![Heap array](/heap-impl.jpeg)

### When to use Heaps

Heaps are used when the highest or lowest order/priority element needs to be removed. They allow quick access to this item in O(1) time. One use of a heap is to implement a priority queue.

Binary heaps are usually implemented using arrays, which save overhead cost of storing pointers to child nodes.

### Drawbacks

Heaps only provide easy access to the smallest/greatest item. Finding other items in the heap takes O(n) time because the heap is not ordered. We must iterate through all the nodes.

<details>
  <summary>Example Code</summary>
  <p>
  
  ```js
  class Heap {
    constructor() {
      this.data = [];
    }

    /**
     * @returns {number}
     */
    size() {
      return this.data.length;
    }

    /**
     * @param {number} value 
     */
    push(value) {
      // Add value to end of data and bubble up to correct heap.
      this.data.push(value);
      this.bubbleUp(this.data.length - 1);
    }

    /**
     * @returns {number}
     */
    pop() {
      // Store first value in heap
      let result = this.data[0];
      // Pop last element from heap
      let end = this.data.pop();

      // If there are still elements in the heap...
      if (this.data.length > 0) {
        // Set the first value to the end, and let it sink down the heap.
        this.data[0] = end;
        this.sinkDown(0);
      }

      return result;
    }

    /**
     * @param {number} target 
     */
    remove(target) {
      let len = this.data.length;

      // Loop through each element of the heap
      for (let i = 0; i < len; i++) {
        // If current value doesn't equal node, skip
        if (this.data[i] !== target) continue;

        // Get last node in heap
        let end = this.data.pop();
        
        // If we popped the last remaining node, we're done.
        if (i === len.length - 1) break;

        // Else, replace the removed element with the popped one,
        // and correct the heap by bubbling up/sinking down removed.
        this.data[i] = end;
        this.bubbleUp(i);
        this.sinkDown(i);
        break;
      }
    }

    /**
     * @param {number} i 
     * @returns {number}
     */
    getParentIndex(i) {
      return Math.floor((i + 1) / 2) - 1;
    }

    /**
     * @param {number} n 
     */
    bubbleUp(n) {
      // Get element at index n
      let el = this.data[n];

      while (n > 0) {
        // Get parent of n
        let iP = this.getParentIndex(n);
        let parent = this.data[iP];

        // If data[n] < parent, all good.
        if (el >= parent) {
          break;
        }

        // Else, swap values of element n and parent and continue
        this.data[iP] = el;
        this.data[n] = parent;
        n = iP;
      }
    }

    /**
     * @param {number} n 
     */
    sinkDown(n) {
      let len = this.data.length;
      let el = this.data[n];

      while (true) {
        // Get element n's children's indices
        let nChild1 = (n + 1) * 2;
        let nChild2 = nChild1 - 1;
        let child1, child2;

        // Keep track of swap index, if necessary.
        let swap = null;

        // If child 1 index is valid...
        if (nChild1 < len) {
          let child1 = this.data[nChild1];

          // If value of child is less than element n, set swap
          if (child1 < el) {
            swap = nChild1;
          }
        }

        // If child 2 index is also valid...
        if (nChild2 < len) {
          let child2 = this.data[nChild2];

          // If child2 is less than the element, or the current swap value, 
          // set swap to child2
          if (child2 < (swap === null ? el : child1)) {
            swap = nChild2;
          }
        }

        // If no swap is necessary, we're done
        if (swap === null) break;

        // If there is a swap, do that swap
        this.data[n] = this.data[swap];
        this.data[swap] = el;
        n = swap;
      }
    }
  }
  ```

  </p>
</details>
