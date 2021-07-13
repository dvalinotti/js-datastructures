class QueueStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(value) {
    this.stack1.push(value);
  }

  peek() {
    this.pushValuesForward()
    let peekValue = this.stack2[0];
    this.pushValuesBackward();
    return peekValue;
  }

  pop() {
    this.pushValuesForward();
    let popValue = this.stack2.shift();
    this.pushValuesBackward();
    return popValue;
  }

  pushValuesForward() {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  pushValuesBackward() {
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }
}