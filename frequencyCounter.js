// Frequency Counter - validAnagram

// Given two strings, write a function to determine if the second string is an anagram of the first.
// Examples: 
//      validAnagram('aaz', 'zaa') // true
//      validAnagram('zza', 'zaa') //false
// Time Complexity - O(n)

function validAnagram(str1, str2){
    if (str1.length !== str2.length ) return false;
  
      let strObject1 = {};
      let strObject2 = {};
      // Deconstruct the arrays into Objects
      for (let char of str1.toLowerCase()) {
          strObject1[char] = (strObject1[char] || 0 ) + 1;
      }
      for (let char of str2.toLowerCase()) {
          strObject2[char] = (strObject2[char] || 0 ) + 1;
      }
      // Compare the Objects
      for (let key in strObject1){ 
        if (strObject1[key] !== strObject2[key]) {
            return false;
            }
      }
      return true;
  }

  console.log(validAnagram('arara', 'rraaa'));
