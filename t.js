var Node = function(value) {
    this.val = value;
    this.next = null;
}

Node.prototype.setNext = function (node) {
    this.next = node;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

MyLinkedList.prototype.toString = function() {
    let current = this.head;
    let str = '';
    
    while (current !== null && current.next !== null) {
        str += current.val + ' -> ';
        current = current.next;
    }
    str += current.val + ' -> ';
    str += 'END';
    return str;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index > this.size - 1 || index < 0) {
        return -1;
    }
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    
    return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    
    if (this.size === 0) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    
    this.size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head === null) {
        this.head = new Node(val);
        return this.head;
    }
    
    let curr = this.head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    
    let node = new Node(val);
    curr.next = node;
    return;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    console.log(this.size, index);
    console.log(this.toString());
    if (index > this.size + 1) {
        return;
    }
    
    if (index < 0) {
        index = 0;
    }
    
    if (index === this.size) {
        this.addAtTail(val);
    }
    
    let node = new Node(val);
    let current = this.head;

    for (let i = 0; i < index; i++) {
        console.log(current);
        current = current.next;
    }
    node.next = current.next;
    current.next = node;
    
    this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size || index < 0) {
        return;
    }
    
    console.log('deleteAtIndex', index);
    console.log(this.size);
    console.log(this.toString());
    
    let current = this.head;

    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    
    console.log(current);
    let next = current.next;
    current.next = next.next;
    
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */