// Given a word and a string S, find all starting indices in S which are anagrams of word.
// For example, given that word is “ab”, and S is “abxaba”, return 0, 3, and 4.

// 1. Brute force
// Iterate through word-sized windows of characters in S and see if they are an anagram.

// RUNTIME COMPLEXITY: O(w * s)

function sortWord(word) {
  return word.split('').sort().join('');
}

/**
 * @param {string} w1
 * @param {string} w2
 */
function isAnagram(w1, w2) {
  return w1.length === w2.length && sortWord(w1) === sortWord(w2);
}

function findAnagramIndices(word, s) {
  let result = [];

  // Iterate characters, sub the last word.length characters for the window.
  for (let i = 0; i < s.length - word.length + 1; i++) {
    // Get the window of characters to check
    let window = s.substring(i, i + word.length);

    // If the window is an anagram of word, add i to the result
    if (isAnagram(word, window)) {
      result.push(i);
    }
  }

  return result;
}

console.log(findAnagramIndices('ab', 'abxaba'));

// 2. Rolling Hash
// Make a frequency-bashed hash of the target "word" and check if any window under "s" hashes to the same value.
// IE: Hash function would return (char + prime_num + char_freq)

// To avoid recalculating the frequency counts of each word window, we can:
// 1. Make a frequency dictionary of the target word
// 2. Continuously diff against it as we go along
// 3. When the dict is empty, the window and the word matches

// RUNTIME COMPLEXITY: O(s)

class FrequencyDict {
  constructor(s) {
    this.dict = {};
    for (const char of s) {
      this.increment(char);
    }
  }

  get isEmpty() {
    return Object.keys(this.dict).length === 0;
  }

  /**
   * Create frequency tracker for char if it doesnt already exist
   * @param {string} char
   */
  createIfNotExists(char) {
    if (this.dict[char] === undefined) {
      this.dict[char] = 0;
    }
  }

  /**
   * Delete frequency tracker for character if it equals zero
   * @param {string} char
   */
  deleteIfZero(char) {
    if (this.dict[char] === 0) {
      delete this.dict[char];
    }
  }

  /**
   * Increment frequency of char in string
   * @param {string} char
   */
  increment(char) {
    this.createIfNotExists(char);
    this.dict[char] += 1;
    this.deleteIfZero(char);
  }

  /**
   * Decrement frequency of char in string
   * @param {string} char
   */
  decrement(char) {
    this.createIfNotExists(char);
    this.dict[char] -= 1;
    this.deleteIfZero(char);
  }
}

function anagramIndices(word, s) {
  let result = [];

  freq = new FrequencyDict(word);

  // Get frequency of characters in first word.length chars of s
  for (const char of s.substring(0, word.length)) {
    freq.decrement(char);
  }

  // If frequency dictionary is empty, the first word.length chars
  // contains an anagram of word.
  if (freq.isEmpty) {
    result.push(0);
  }

  // Iterate through the rest of chars in s
  for (let i = word.length; i < s.length; i++) {
    // Get start and end characters of window
    let startChar = s[i - word.length];
    let endChar = s[i];

    // Diff initial frequency by incrementing startChar frequency
    // and decrementing endChar frequency.
    freq.increment(startChar);
    freq.decrement(endChar);

    // If the frequency dictionary is still empty, we found another anagram.
    if (freq.isEmpty) {
      let beginIndex = i - word.length + 1;
      result.push(beginIndex);
    }
  }

  return result;
}

console.log(anagramIndices('ab', 'abxaba'));