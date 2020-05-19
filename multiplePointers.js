// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which acceptd a sorted array, and counts the unique values
// in the array. There can be negative in the array, but it will always be sorted.
// Time Complexity - O(n)
// Space Complexity - O(n)

// countUniqueValues([1,1,1,1,1,1,1,2]) //2
// countUniqueValues([1,2,3,4,5]) //5
// countUniqueValues([]) //0

function countUniqueValues(arr) {
    // Quick escape - Edge Case
    if (arr.length < 1) return 0
    // Set the pointers
    let firstPointer = 0;
    let secondPointer = 1;
    // Compare and find the unique values
    while (secondPointer < arr.length) {
        if (arr[firstPointer] === arr[secondPointer]){
            secondPointer++
        } else {
            firstPointer++
            arr[firstPointer] = arr[secondPointer]
            secondPointer++
        }
    }
    return firstPointer + 1;
}

console.log(countUniqueValues([1,3,5,7,8,8,8,8,8,8,8,8,8,8,8,9]))