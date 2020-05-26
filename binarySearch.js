// Binary Search Algorithm
// The array must be sorted to the Algorithm succeed
// keep dividing and searching the index
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== val && start <= end) {
        val < arr[middle] ? end = middle - 1 : start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}

console.log(binarySearch ([2, 5, 6, 7, 9, 10, 15, 25, 35, 45], 25))