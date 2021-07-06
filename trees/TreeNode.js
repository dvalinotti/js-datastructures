class TreeNode {
  /**
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class AVLTreeNode extends TreeNode {
  constructor(value) {
    super(value);
    this.height = 1;
  }
}

module.exports = {
  TreeNode, AVLTreeNode
}