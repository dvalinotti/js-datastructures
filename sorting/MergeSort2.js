// From "Cracking the Coding Interview"

function mergeSort(arr) {
  merge(arr, [], 0, arr.length - 1);
  return arr;
}

function merge(arr, helper, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    merge(arr, helper, low, mid); // sort left half
    merge(arr, helper, mid + 1, high) // sort right half
    mergeArrays(arr, helper, low, mid, high); // merge arrays
  }
}

function mergeArrays(arr, helper, low, mid, high) {
  // Copy values from arr -> helper
  for (let i = low; i <= high; i++) {
    helper[i] = arr[i];
  }

  let helperLeft = low;
  let helperRight = mid + 1;
  let current = low;

  // Iterate through helper array - compare left & right half, copying back the
  // smaller element from the two halves into the original array.
  while (helperLeft <= mid && helperRight <= high) {
    // If left element is less than or equal to right element
    if (helper[helperLeft] <= helper[helperRight]) {
      arr[current] = helper[helperLeft];
      helperLeft++;
    } else {
      // If right element is less than left element
      arr[current] = helper[helperRight];
      helperRight++;
    }
    current++;
  }

  // Copy rest of the left side of the array to the target array
  let remainder = mid - helperLeft; // remaining elements of left array
  for (let i = 0; i <= remainder; i++) {
    arr[current + i] = helper[helperLeft + i]; // offset current and helperLeft by i
  }
}

console.log(mergeSort([1, 4, 5, 2, 8, 9]));