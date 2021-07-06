// Write a function that rotates a list by k elements
// without using the built-in functions.

// The function should take two arguments: the list and the number of
// elements to rotate by.

// The function should return a new list that is a copy of the original
// list rotated by k elements.

// Example:
// rotate([1, 2, 3, 4, 5], 2) should return [3, 4, 5, 1, 2].
// rotate([1, 2, 3, 4, 5], 3) should return [4, 5, 1, 2, 3].

function rotateBy(arr, k) {
  let newArr = arr.slice(k);
  
  for (let i = 0; i < k; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(rotateBy([1, 2, 3, 4, 5], 2));
console.log(rotateBy([1, 2, 3, 4, 5], 3));