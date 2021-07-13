class SetOfStacks {
  constructor(maxSize) {
    this.stacks = [];
    this.maxSize = maxSize;
  }

  isEmpty(stackNum) {
    return this.stacks[stackNum] === undefined || this.stacks[stackNum].length === 0;
  }

  isFull(stackNum) {
    return this.stacks[stackNum] !== undefined && this.stacks[stackNum].length === this.maxSize;
  }

  push(value) {
    const numStacks = this.stacks.length;
    if (this.stacks.length === 0 || this.isFull(this.stacks.length - 1)) {
      this.stacks.push([value]);
    } else {
      if (this.stacks[numStacks - 1].length === this.maxSize) {
        this.stacks.push([value]);
      } else {
        for (let i = 0; i < numStacks; i++) {
          if (this.stacks[i].length < this.maxSize) {
            this.stacks[i].push(value);
            break;
          }
        }
      }
    }
  }

  pop() {
    const currentStack = this.stacks.length - 1;
    let result = this.stacks[currentStack].pop();
    if (this.isEmpty(currentStack) && this.stacks.length > 1) {
      this.stacks.pop();
    }
    return result;
  }

  popAt(stackNum) {
    return this.stacks[stackNum].pop();
  }

  toString() {
    console.log(this.stacks);
  } 
}

const stacks = new SetOfStacks(3);
stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(4);
stacks.push(5);
stacks.push(6);
stacks.push(7);
stacks.toString();
stacks.popAt(1);
stacks.toString();
stacks.push(100);
stacks.toString();
console.log(stacks.pop());
stacks.toString();