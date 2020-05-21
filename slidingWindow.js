// Sliding Windown Pattern
// Write a function called maxSubArraySum which accepts an array of integerd and
// a number called n. The function shoud calculate the maximum sum of n consecutive
// elements in the array.

function maxSubArraySum (arr, num) {
    //Edge case scenario
    if (arr.length < num) return null

    let maxSum = 0;
    let tempSum = 0;
    //Assign the first Sum
    for (let i = 0; i < num; i++) {
        maxSum+= arr[i];
    }
    tempSum = maxSum

    // Apply the sliding window aproach
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

console.log(maxSubArraySum([2,3,6,9,6,4,2,8,5,9], 2));
//maxSubArraySum([], 4); //null
//maxSubArraySum([4,2,1,6,2], 4); //13