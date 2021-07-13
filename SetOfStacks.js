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
    const currentStack = this.stacks.length - 1;
    if (currentStack === -1 || this.isFull(currentStack)) {
      this.stacks.push([value]);
    } else {
      if (this.stacks[currentStack] === undefined) {
        this.stacks[currentStack] = [value];
      } else {
        this.stacks[currentStack].push(value);
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
console.log(stacks.pop());
stacks.toString();