const { testArray } = require('./config');

/**
 * @param {number[]} array
 * @return {number[]}
 */
function bubbleSort(array) {
    let n = array.length;
    let i = 0;
    
    while (i < n - 1 && n > 0) {
        let x = array[i];
        let y = array[i + 1];
        
        if (x > y) {
            array[i] = y;
            array[i + 1] = x;
        }
        
        i++;
        if (i === n - 1) {
            i = 0;
            n--;
        }
    }
    
    return array;
}

console.time('Start bubble sort');
console.timeLog('Start bubble sort');
console.log(bubbleSort(testArray));
console.timeEnd('Start bubble sort');