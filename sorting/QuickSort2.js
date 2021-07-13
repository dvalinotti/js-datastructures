function quickSort(arr, left, right) {
  let index = partition(arr, left, right);
  if (left < index - 1) {
    // Sort left half
    quickSort(arr, left, index - 1);
  }
  if (index < right) {
    // Sort right half
    quickSort(arr, index, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // Get pivot value from mid-point index of array
  const pivotIndex = Math.floor((left + right) / 2);
  const pivot = arr[pivotIndex];

  while (left <= right) {
    // Find element that should be on the right
    while (arr[left] < pivot) left++;
    // Find element that should be on the left
    while (arr[right] > pivot) right--;

    // Swap left & right elements and adjust indices
    if (left <= right) {
      [arr[right], arr[left]] = [arr[left], arr[right]];
      left++;
      right--;
    }
  }

  return left;
}

console.log(quickSort([1, 4, 5, 2, 8, 9]));