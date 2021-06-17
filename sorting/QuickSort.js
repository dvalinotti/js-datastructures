const { testArray } = require('./config');

/**
 * @param {number[]} array 
 * @return {number[]}
 */
function quickSort(array) {
  // Edge case to break recursion - array has 1 value.
  if (array.length === 1) {
    return array;
  }

  // Randomly pick pivot value
  let pV = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];

  // Put values lower than pivot in left, greater than in right.
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pV) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }

  // Recursively call sort on left & right, conditionally
  if (left.length > 0 && right.length > 0) {
    return [...quickSort(left), pV, ...quickSort(right)];
  } else if (left.length > 0) {
    return [...quickSort(left), pV];
  } else {
    return [pV, ...quickSort(right)]
  }
}

console.time('Start quick sort');
console.timeLog('Start quick sort');
console.log(quickSort(testArray));
console.timeEnd('Start quick sort');