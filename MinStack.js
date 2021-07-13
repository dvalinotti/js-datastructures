class NodeWithMin {
  constructor(val, min) {
    this.val = val;
    this.min = min;
  }
}

class MinStack {
  constructor() {
    this.stack = [];
    this.currentMin = null;
  }

  push(item) {
    let newNode = new NodeWithMin(item, this.currentMin);
    if (this.currentMin === null || item < this.currentMin) {
      this.currentMin = item;
    }
    this.stack.push(newNode);
  }

  pop() {
    const result = this.stack.pop();
    console.log(result);
    this.currentMin = result.min;
    return result;
  }
}

const stack = new MinStack();
stack.push(4);
stack.push(2);
stack.push(3);
stack.push(1);
stack.push(7);
console.log(stack.currentMin);
stack.pop();
console.log(stack.currentMin);
stack.pop();
console.log(stack.currentMin);