const Queue = require('./Queue');
const TreeNode = require('./TreeNode');

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBFS() {
    if (!this.root) {
      return false;
    }

    const queue = new Queue();
    const treeValues = [];

    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const children = [
        queue.first.value.left,
        queue.first.value.right
      ];

      if (children.length > 0) {
        children.forEach((child) => {
          queue.enqueue(child);
        });
      }

      const dq = queue.dequeue();
      treeValues.push(dq);
    }

    return treeValues;
  }
}

module.exports = Tree;