const { testArray } = require('./config');

/**
 * @param {number[]} array 
 * @return {number[]}
 */
function quickSort(array) {
  if (array.length === 1) {
    return array;
  }

  let pV = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pV) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }

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