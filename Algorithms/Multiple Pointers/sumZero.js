/*
    Accepts a sorted array

    Return first pair that sum to 0 or if sum can't be made then return undefined
    
    *** Multiple Pointers ***
    Use to avoid nested loops
    Turn O(n²) to O(n)

    1. Set pointer variables to point to the beginning and the end of the array
    
    2. Iterate over the array from front to back/back to front simultaneously
        2a. Add the two elements together
        2b. If they equate to 0, return those two elements
        2c. If they don't check if the total value of the two elements is larger/smaller than 0
        2d. If it's larger decrement the right pointer
        2e. If it's smalled increase the left pointer
        *** THIS DECREMENTING/INCREMENTING CAN ONLY BE DONE IN SORTED ARRAYS *** 
    
    3. If 0 cannot be reached with any combination, return undefined. 

    Time: O(log n)
    Space: O(1) (we know that the array will always be the same size, so it's NOT linear)
*/

const array = [-3, -1, 0, 1, 2];

function findSum(arr){

    let left = 0; // Numbers from left - right get bigger
    let right = arr.length-1; // Numbers from right - left get smaller

    while(left < right){
        let sum = arr[left] + arr[right];
        // If left is ever greater than right (if they pass each other in the list) then we have checked all positions
        if(sum === 0) return [arr[left], arr[right]];

        if(sum > 0){ // If the sum of the two values is greater than 0 we decrement the right to reach the smaller values in the array
            right--
        }else{ // If the sum of the two values is less than 0 we increase the left to reach the larger values in the array
            left++
        }
    }
    /*
        If 0 cannot be made then we return undefined.
        JS will return undefined if nothing is returned, so we can omit the return statement
            -- never write --> return undefined;
            either omit the return or write --> return;
    */
};

console.log(findSum(array)); // [-1, 1]