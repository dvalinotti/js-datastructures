class RBNode {
  /**
   * @param {string} color
   * @param {string} key
   * @param {string} value
   * @param {RBNode} left
   * @param {RBNode} right
   */
  constructor(color, key, value, left, right) {
    this.color = color;
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
  }

  repaint(color) {
    this.color = color;
  }

  flipColor() {
    this.color = this.color === 'black' ? 'red' : 'black';
  }

  isRed() {
    return this.color === 'red';
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  isRed(node) {
    if (node === null) {
      return false;
    }
    return node.isRed();
  }

  insert(key, value) {
    if (this.root === null) {
      this.root = new RBNode('red', key, value, null, null);
    } else {
      this.insertNode(this.root, key, value, 'red');
    }
  }

  

  /**
   * @param {RBNode} node
   */
  rotateLeft(node) {
    let right = node.right;

    // If right node is null, return
    if (right === null) {
      return right;
    }

    /**
     *       Bb                            Bb
     *     /  \                          /    \
     *    L    Rb <- node     ->        L      Rr
     *   / \  / \              ->     / \     /  \       
     *  L  R L   Rr <- right         L  R    L   Rb
     * / \  / \ / \                  / \    / \ / \
     * L  R L R #  R                L  R  L  R L   R
     */
    
    // Set node's right child to be the left child of the right child
    node.right = right.left;
    // Set the right child's left child to be the node
    right.left = node;
    // Set right node's color to be the node's color
    right.color = node.color;
    // Set node's color to red
    node.color = 'red';

    // Return the right child
    return right;
  }
}