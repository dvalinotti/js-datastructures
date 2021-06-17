---
title: Quick Sort
description: 'An aptly-named sorting algorithm.'
category: sort
---

Quick Sort is performed by first picking an arbitrary **pivot value** from the given array. The you split the array in two by putting values left than the pivot in one array, and values greater than in the other. Then, recursively sort each of the arrays and merge them.

<details>
  <summary>Example Code</summary>
  <p>
  
  ```js
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
  ```
  
  </p>
</details>
