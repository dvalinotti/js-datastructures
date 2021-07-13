class MultiStack {
  constructor(numStacks, maxSize) {
    this.numStacks = numStacks;
    this.maxSize = maxSize;
    this.stack = [];
    this.sizes = [];

    for (let i = 0; i < maxSize; i++) {
      this.sizes[i] = 0;
    }
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.maxSize;
  }

  getIndexOfTop(stackNum) {
    let offset = stackNum * this.maxSize;
    let size = this.sizes[stackNum];
    return offset + size;
  }

  push(stackNum, item) {
    if (this.isFull(stackNum)) {
      throw new Error('Stack is full');
    } else {
      const insertIndex = this.getIndexOfTop(stackNum);
      this.stack[insertIndex] = item;
      this.sizes[stackNum]++;
    }
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error('Stack is empty');
    } else {
      const popIndex = this.getIndexOfTop(stackNum);
      const poppedValue = this.stack[popIndex];
      this.sizes[stackNum]--;
      this.stack[popIndex] = null;
      return poppedValue;
    }
  }

  toString() {
    // for (let i = 0; i < this.numStacks; i++) {
    //   let start = (i + 1) * this.numStacks;
    //   let end = this.getIndexOfTop(i);
    //   console.log(`${i + 1}:`, this.stack.slice(start, end));
    // }
    console.log(this.stack);
  }
}

const stack = new MultiStack(3, 5);
stack.push(0, 1);
stack.push(1, 1);
stack.push(2, 1);
stack.push(0, 4);
stack.push(1, 2);
stack.push(2, 10);

console.log(stack.toString());
