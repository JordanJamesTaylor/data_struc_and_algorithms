/*
    Write a function called same, which accepts two arrays.
    
    The function should return true if every vlaue in the array 
    has it's corresponding value suqared in the second array
    
    The frequency of values must be the same.

    Edge Cases:
        1. Arrays have different lengths, return false

    *** BRUTE FORCE ***

    1. loop through array 1
        1a. square the number at current index
        1b. check if squared number appears in array 2
        1c. if it does appear in array 2 then remove it
        1d. if it doesn't then return false
    
    2. After the loop
        2a. if array 2 is empty return true
        2b. otherwise return false

    Time: O(n²)
    Sapce: O(1)

    *** LINEAR SOLUTION ***

    1. Loop through arr1
        1a. Add the current value to freqCounter1 as a property
        1b. Increment properties value by 1 to record the amount of times the value appears in arr1
        1c. When recording the frequency, first check that the prop has had a frequency already set if...
            ...it has not it will return undefined. In which case first set it to 0, then increment by 1 
    
    2. Repeat step 1 for arr2
    
    3. Loop through freqCounter1
        3a. Check if the sqaured value of a key from freqCounter1 (originally a value from arr1) is in...
            ...freqCounter2, if not return false
        3b. Check if the amount of times the sqaured value of a key from freqCounter1 appears in...
            ...freqCounter2 is the same, if not return false

    4. The test passes if reach step 4 without reaching a return statement, return true

    Time: O(n)
    Sapce: O(1)
    
*/

// Brute force
function sameBruteForce(arr1, arr2){
    
    if(arr1.length !== arr2.length) return false; // O(1)

    for(let i = 0; i < arr1.length; i++){ // O(n)
        let index = arr2.indexOf(arr1[i] ** 2); // O(n)
        if(index === -1) return false; // O(1)

        arr2.splice(i, 1);
    }

    if(!arr2.length){ // O(1)
        return true; // O(1)
    } else {
        return false; // O(1)
    }
};

function same(arr1, arr2){

    // Edge case
    if(arr1.length !== arr2.length) return false;

    // Property = value from array (a single prop will represent all occurrences of a value)
    // Value = counts the amount of occurrences of the value represented by the prop
    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1){
        /*
            Set key to val
            If value has not yet been added this will return undefined
            use || to account for undefined and initialise it to 0
            + 1 to the current frequency value for this key
        */
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    };

    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0 ) + 1;
    };

    for(let key in freqCounter1){
        // Does the sqaure value from freqCounter1 (arr1) exist in freqCounter2 (arr2)
        if(!(key ** 2 in freqCounter2)) return false;
        // If the amount of times a sqaured value of a number from arr1 appears in arr2 is off 
        if(freqCounter1[key] !== freqCounter2[key ** 2]) return false;
    }

    return true;
};

console.log(same([1,2,3], [4,1,9])); // true
console.log(same([1,2,3], [1,9])); // false --> can;t have the same frequency as arrays have different lengths
console.log(same([1,2,1], [4,4,1])) // false --> must be same frequency