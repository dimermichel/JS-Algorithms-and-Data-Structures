// Insertion Sort Algorithm
// Big(O) time complexity for the worst case is n2
// Insertion sort is good when the array is almost sorted
// It is also good to insert an element in the right sorted position on the array

let array = [2,6,4,8,9,10,7]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
       let currentValue = arr[i];
       for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
       }
       arr[j+1] = currentValue;
       //console.log(arr);
    }
    return arr;
}

console.log(insertionSort(array));