class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  push(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      let current = this.root;

      while (current.left !== null || current.right !== null) {
        if (value <= current.value) {
          if (current.left === null) {
            current.left = new TreeNode(value);
            break;
          } else {
            current = current.left;
          } 
        } else {
          if (current.right === null) {
            current.right = new TreeNode(value);
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  inOrderTraverse(node) {
    if (node !== null) {
      this.inOrderTraverse(node.left);
      console.log(node.value);
      this.inOrderTraverse(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.push(8);
tree.push(5);
tree.push(7);
tree.push(1);
tree.push(10);
tree.push(12);

tree.inOrderTraverse(tree.root);
