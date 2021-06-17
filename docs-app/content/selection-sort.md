---
title: Selection Sort
description: 'An in-place, unstable, comparison algorithm.'
category: sort
---

One of the simpler and more intuitive sorting algorithms. Selection Sort transforms the input array using no extra arrays or data structures.

Selection Sort is performed by dividing the array into two subsets - the **Sorted** and **Unsorted** sections. The function will loop through the list of unsorted items to find the **minimum value** - once it is found, the minimum value is swapped positions with the left-most value of the unsorted array. The sorted list is then expanded to include the newly-swapped element.

**Visual Representation**

![Selection sort](/selection-sort.gif)

<details>
  <summary>Example Code</summary>
  <p>
  
  ```js
  function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < n; j++){
        if(inputArr[j] < inputArr[min]) {
          min=j; 
        }
      }
      if (min != i) {
        // Swapping the elements
        let tmp = inputArr[i]; 
        inputArr[i] = inputArr[min];
        inputArr[min] = tmp;      
      }
    }
    return inputArr;
  }
  ```
  
  </p>
</details>
