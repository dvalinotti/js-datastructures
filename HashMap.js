const DEFAULT_LENGTH = 32;

/**
 * Initialize your data structure here.
 */
class HashMap {
  constructor(length) {
    this.buckets = [];
    this.length = length || DEFAULT_LENGTH;
  }

  /**
   * Returns the hashed key value, which is the sum of all of the key's character's codes,
   * mod the max length of the HashMap.
   * @param {string} key 
   * @returns {number}
   */
  getHashKey(key) {
    let charCodeSum = Array.from(key)
      .reduce((acc, curr) => acc + curr.charCodeAt(0), 0)
    
    return charCodeSum % this.length;
  }

  /**
   * value will always be non-negative.
   * @param {string} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const hashKey = this.getHashKey(key);

    this.buckets[hashKey] = { key, value };
  }
  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   * @param {string} key
   * @return {number}
   */
  get(key) {
    const hashKey = this.getHashKey(key);

    if (this.buckets[hashKey] === undefined) {
      return -1;
    }

    return this.buckets[hashKey].value;
  }
  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const hashKey = this.getHashKey(key);
    this.buckets[hashKey] = undefined;
  }
}