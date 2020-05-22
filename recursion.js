// Recursion Pattern

// Calculate Power similar to Math.pow
function power(base, exp){
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

console.log(power(2,6))


// Calculate the product of an Array
function productOfArray(arr){
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
console.log(productOfArray([1,2,3,20]))