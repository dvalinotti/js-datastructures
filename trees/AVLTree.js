const TreeNode = require('./TreeNode').AVLTreeNode;

class AVLTree {
  constructor() {
    this.root = null;
  }

  /**
   * Returns the balance factor at a given node
   * @param {TreeNode} node 
   */
  getBalanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  /**
   * Returns the height of the tree at the given node
   * @param {TreeNode} node
   */
  getHeight(node) {
    let height = 0;

    // If node is an empty child, set height to -1
    if (node === null || node === undefined) {
      height = -1;
    } 

    // Otherwise, set height to max between left and right child node heights
    else {
      height = Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    return height;
  }

  insertNode(value) {
    this.root = this.insertNodeHelper(this.root, value);
  }

  /**
   * @param {TreeNode} node 
   * @param {any} value 
   * @returns 
   */
  insertNodeHelper(node, value) {
    // If current node is empty, return a new node with value
    if (node === null) {
      return new TreeNode(value);
    }

    // If the value is less than that of current node
    if (value < node.value) { 
      node.left = this.insertNodeHelper(node.left, value);
    } 
    // If the value is greater than that of the current node
    else if (value < node.value) {
      node.right = this.insertNodeHelper(node.right, value);
    }
    // If value is equal to current node value, return current node. 
    else {
      return node;
    }

    // Update balance factor
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    let bf = this.getBalanceFactor(node);

    // If balance factor is greater than 1...
    if (bf > 1) {
      // If value is greater than that of left node, first rotate left node left
      if (value > node.left.value) {
        node.left = this.rotateLeft(node.left);
      }

      // Rotate current node right
      return this.rotateRight(node);
    }
    
    // If balance factor is less than -1...
    if (bf < -1) {
      // If value is greater than that of right node, first rotate right node right
      if (value > node.right.value) {
        node.right = this.rotateRight(node.right);
      }

      // Rotate current node left
      return this.rotateLeft(node);
    }

    return node;
  }

  rotateRight(node) {
    let child = node.left;
    let gchild = child.right;

    child.right = node;
    node.left = gchild;

    node.height = this.getHeight(node);
    child.height = this.getHeight(child);

    return child;
  }

  rotateLeft(node) {
    let child = node.right;
    let gchild = child.left;

    child.left = node;
    node.right = gchild;

    node.height = this.getHeight(node);
    child.height = this.getHeight(child);

    return child;
  }

  inOrder() {}
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);

const tree = new AVLTree();
tree.insertNode(1);
tree.insertNode(2);
tree.insertNode(3);
tree.insertNode(4);

console.log(tree.root);
console.log(tree.root.left);
console.log(tree.root.right);