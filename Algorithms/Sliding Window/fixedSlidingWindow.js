/*  
    Build a function that takes in an array and a window size as a number. 

    Return an array with a length of window size that contains the largest number that can be made using the numbers in the initial array, if it cannot be made return undefined.

    *** Sliding Window ***

    1. Set counter variables to record largest sum
    
    2. Begin iterating over array
        2a. Length of each iteration is dictated by the window size
        2b. First iteration changes counter variable for the largest sum
        2c. Subsequent iterations compare and only change if current iteration has the larger value
    
    3. To limit the number of operations 
        3a. Get the difference between the newly added value and the last value that was removed from the current window
        3b. This saves on run time by removing duplicate calculations  

    Edge Cases:
        Size cannot be bigger than the length of the array

    Time: O(log n)
    Space: O(n)
*/
const array = [2, 33, 20, 15, 20];

function slidingTime(arr, windowSize){

    let maxSum = 0;
    let tempSum = 0;

    if(windowSize < 0 || arr.length < windowSize) return null; // The sub-array can't be a negative number/bigger than the starting array

    for(let i = 0; i < windowSize; i++){ // Calculate initial window ([4, 1]) sum (5)
        maxSum += arr[i];
    }

    // Temp will start with the first loops return value
    tempSum = maxSum; 

    // Sliding window [4, 1] -next window-> [1, 3} -next window-> [3, 6] etc.
    for(let i = windowSize; i < arr.length; i++){
        /*
            Grad the next window
            Subtract the first element from the previous window, from the last element of the current window
        
            To remove duplicate operations, rather than calculating the entire window each time...
            ...we get the difference between the newly added value and the value that was just removed...
            ...by subtracting them and adding the result to tempSum
        */
        tempSum = (tempSum - arr[i - windowSize]) + arr[windowSize];

        // Return the largest value and stores it in maxSum
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};

console.log(slidingTime(array, 2)); // 53
console.log(slidingTime(array, 30)); // null