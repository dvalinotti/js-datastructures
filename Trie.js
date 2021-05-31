class TrieNode {
  constructor() {
    this.children = {};
    this.R = 26;
    this.isEnd = false;
  }
  
  /**
   * Determine if the TrieNode contains a child with the given key.
   * 
   * @param {string} key 
   * @returns {boolean}
   */
  containsKey(key) {
    return this.children[key] !== undefined;
  }

  /**
   * Returns the child TrieNode with the given key, undefined if it doesn't exist.
   * 
   * @param {string} key 
   * @returns {TrieNode}
   */
  get(key) {
    return this.children[key];
  }

  /**
   * Inserts a given key and node value into the children of the TrieNode.
   * 
   * @param {string} key 
   * @param {TrieNode} node 
   */
  put(key, node) {
    this.children[key] = node;
  }

  /**
   * Set the flag that represents if this node is at the end of a tree.
   */
  setEnd() {
    this.isEnd = true;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie. 
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      if (!currentNode.containsKey(ch)) {
        currentNode.put(ch, new TrieNode());
      }
      currentNode = currentNode.get(ch);
    }
    currentNode.setEnd();
  }
  
  /**
   * Search for a prefix in a Trie. Returns end node of search.
   * 
   * @param {string} prefix 
   * @returns {TrieNode}
   */
  searchPrefix(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let ch = prefix[i];
      const containsKey = currentNode.containsKey(ch)

      if (containsKey) {
        currentNode = currentNode.get(ch)
      } else {
        return null;
      }
    }

    return currentNode;
  }

  /**
   * Returns if the word is in the trie. 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let result = this.searchPrefix(word);
    return result !== null && result.isEnd
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix. 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const node = this.searchPrefix(prefix);
    return node !== null;
  }
}
