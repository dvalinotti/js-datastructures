const { testArray } = require('./config');

/**
 * Merge two sorted arrays into single sorted array
 * @param {number[]} leftArray 
 * @param {number[]} rightArray 
 * @return {number[]}
 */
function merge(leftArray, rightArray) {
  const result = [];

  let l = 0;
  let r = 0;

  // Loop through all values of leftArray and rightArray
  while (l < leftArray.length && r < rightArray.length) {
    // Add the greater of each array index value and increment counter
    if (leftArray[l] < rightArray[r]) {
      result.push(leftArray[l]);
      l++;
    } else {
      result.push(rightArray[l]);
      r++;
    }
  }

  // Spread result and leftover values of leftArray and rightArray
  return [...result, ...leftArray.slice(l), ...rightArray.slice(r)];
}

/**
 * Merge Sort function
 * @param {number[]} array 
 * @return {number[]}
 */
function mergeSort(array) {
  // Edge case for recursive function
  if (array.length <= 1) {
    return array;
  }

  // Get array midpoint and split into two arrays
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Recursively call mergeSort on left & right and merge
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

console.time('Start merge sort');
console.timeLog('Start merge sort');
console.log(mergeSort(testArray));
console.timeEnd('Start merge sort');