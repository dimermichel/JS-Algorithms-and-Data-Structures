// Selection Sort Algorithm
const arr = [5,4,3,5,4,8,9,4,10,20]

function selectionSort(arr) {
    let minIndex;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            } 
           
        }
        if (minIndex !== i) swap(arr, minIndex, i);
    }
    return arr;
}

console.log(selectionSort(arr));