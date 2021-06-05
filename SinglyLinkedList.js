class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  setNext(node) {
    this.next = node;
  }
}


/**
 * Initialize your data structure here.
 */
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index <= 0) {
      return -1;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length) {
      return this.tail;
    }

    let currentNode = this.head;
    let i = 0;

    while (currentNode !== null && i <= index) {
      let temp = currentNode;
      currentNode = temp.next;
      i++;
    }

    return currentNode.value;
  }
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const node = new LinkedListNode(val);

    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      node.setNext(temp);
      this.head = node;
    }
  }
  /**
   * Append a node of value val to the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const node = new LinkedListNode(val);

    if (this.tail === null) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.setNext(node);
      this.tail = node;
    }
  }
  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this.length)
      return;

    if (index === this.length) {
      this.addAtTail(val);
    } else {
      let i = 0;
      let currentNode = this.head;
      let nextNode = currentNode.next;

      while (currentNode.next !== null && i < index - 1) {
        const temp = currentNode.next;
        currentNode = temp;
        nextNode = temp.next;
        i++;
      }

      const newNode = new LinkedListNode(val);
      currentNode.setNext(newNode);
      newNode.setNext(nextNode);
    }
  }
  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
  }
}






/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */