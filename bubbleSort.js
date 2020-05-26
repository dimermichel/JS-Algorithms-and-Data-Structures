// Bubble Sort Algorithm

let arr = [5, 4, 1, 2, 6, 7, 4, 9, 10, 5]
//let nearSortArr = [8,1,2,3,4,5,6,7]

// function bubbleSort(arr) {
//   let index1 = 0;
//   let index2 = 1;
//   let count = arr.length;
//   let timesPassed = 0;
//   while (timesPassed < arr.length) {
//     while (index2 <= count) {
//       if (arr[index1] > arr[index2]) {
//         [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
//         index1++ , index2++
//       } else {
//         index1++, index2++
//       }
//       if(index2 === count) count--
//     }
//   index1 = 0;
//   index2 = 1;
//   timesPassed++
//   count = arr.length - timesPassed;
// }
//   return arr
// }

function bubbleSortOptimized(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            //console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }


    return arr;

}

console.log(bubbleSortOptimized(arr));
